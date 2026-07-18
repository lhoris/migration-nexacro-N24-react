import { useCallback, useEffect, useMemo, useRef, useState, type DragEvent, type MouseEvent } from "react";
import { DYNAMIC_COMBO_VALUES, DYNAMIC_TOOLS, createInitialDynamicGridState, makeCell, type DynamicCell, type DynamicCellKind, type DynamicGridState } from "../../data/dynamicGridRealData";
import { useLanguage } from "../../shell/LanguageContext";
import "./dynamicGrid.css";

type Translate = (key: string, fallback?: string) => string;

const STORAGE_KEY = "dynamic_grid_state";
const TOOL_MIME = "application/x-nexacro-dynamic-tool";

interface Selection {
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;
}

interface ContextMenuState {
  x: number;
  y: number;
}

function cloneState(state: DynamicGridState): DynamicGridState {
  return {
    ...state,
    colWidths: [...state.colWidths],
    cells: state.cells.map((cell) => ({ ...cell })),
  };
}

function normalizeSelection(selection: Selection) {
  return {
    top: Math.min(selection.startRow, selection.endRow),
    bottom: Math.max(selection.startRow, selection.endRow),
    left: Math.min(selection.startCol, selection.endCol),
    right: Math.max(selection.startCol, selection.endCol),
  };
}

function intersects(cell: DynamicCell, selection: Selection): boolean {
  const rect = normalizeSelection(selection);
  const bottom = cell.row + cell.rowSpan - 1;
  const right = cell.col + cell.colSpan - 1;
  return cell.row <= rect.bottom && bottom >= rect.top && cell.col <= rect.right && right >= rect.left;
}

function isSingleCell(selection: Selection): boolean {
  const rect = normalizeSelection(selection);
  return rect.top === rect.bottom && rect.left === rect.right;
}

function todayString(): string {
  const d = new Date();
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

function loadState(): DynamicGridState {
  const fallback = createInitialDynamicGridState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as DynamicGridState;
    if (!Array.isArray(parsed.cells) || !Array.isArray(parsed.colWidths)) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

function updateCell(state: DynamicGridState, target: DynamicCell, patch: Partial<DynamicCell>): DynamicGridState {
  const next = cloneState(state);
  const cell = next.cells.find((item) => item.row === target.row && item.col === target.col);
  if (cell) Object.assign(cell, patch);
  return next;
}

function splitIntersectingCells(state: DynamicGridState, selection: Selection): DynamicGridState {
  const next = cloneState(state);
  next.cells.forEach((cell) => {
    if (intersects(cell, selection)) {
      cell.rowSpan = 1;
      cell.colSpan = 1;
      cell.hidden = false;
    }
  });
  return next;
}

function renderCellEditor(cell: DynamicCell, onChange: (value: string) => void, t: Translate) {
  if (cell.kind === "combo") {
    return (
      <select value={cell.value} onChange={(e) => onChange(e.target.value)}>
        {DYNAMIC_COMBO_VALUES.map((value) => (
          <option key={value || "empty"} value={value}>
            {value || " "}
          </option>
        ))}
      </select>
    );
  }
  if (cell.kind === "calendar") {
    return <input type="date" value={cell.value} min={todayString()} onChange={(e) => onChange(e.target.value)} />;
  }
  if (cell.kind === "mask") {
    return <input value={cell.value} placeholder="######-#{######}" onChange={(e) => onChange(e.target.value)} />;
  }
  if (cell.kind === "number") {
    return <input type="number" value={cell.value} onChange={(e) => onChange(e.target.value)} />;
  }
  if (cell.kind === "checkbox") {
    return <input type="checkbox" checked={cell.value === "true"} onChange={(e) => onChange(e.target.checked ? "true" : "")} />;
  }
  if (cell.kind === "button") {
    return (
      <button type="button" className="dyn-cell-button">
        button
      </button>
    );
  }
  if (cell.kind === "textarea") {
    return <textarea value={cell.value} onChange={(e) => onChange(e.target.value)} />;
  }
  return <input value={cell.value} aria-label={t("grid.dynamic.cellValue", "Cell value")} onChange={(e) => onChange(e.target.value)} />;
}

export function DynamicGrid() {
  const { t } = useLanguage();
  const [grid, setGrid] = useState(loadState);
  const [selection, setSelection] = useState<Selection>({ startRow: 0, startCol: 0, endRow: 0, endCol: 0 });
  const [selecting, setSelecting] = useState(false);
  const [menu, setMenu] = useState<ContextMenuState | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const today = useMemo(todayString, []);

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(grid));
    alert(t("grid.dynamic.save.desc", "Save Format Success!"));
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setGrid(createInitialDynamicGridState());
    setSelection({ startRow: 0, startCol: 0, endRow: 0, endCol: 0 });
    alert(t("grid.dynamic.init.desc", "Init Format Success!"));
  };

  const changeCellValue = (cell: DynamicCell, value: string) => {
    if (cell.kind === "calendar" && value && value < today) {
      alert(t("grid.dynamic.date.invalid", "You cannot select a date before today."));
      return;
    }
    setGrid((prev) => updateCell(prev, cell, { value }));
  };

  const applyKind = (cell: DynamicCell, kind: DynamicCellKind) => {
    const value = kind === "button" ? "button" : kind === "checkbox" ? "" : cell.value;
    setGrid((prev) => updateCell(prev, cell, { kind, value, label: false }));
  };

  const addRow = () => {
    setGrid((prev) => {
      const next = cloneState(prev);
      for (let col = 0; col < next.colCount; col += 1) next.cells.push(makeCell(next.rowCount, col));
      next.rowCount += 1;
      return next;
    });
    setMenu(null);
  };

  const deleteRow = () => {
    setGrid((prev) => {
      if (prev.rowCount <= 1) return prev;
      const next = cloneState(prev);
      const row = next.rowCount - 1;
      next.cells = next.cells.filter((cell) => cell.row !== row && cell.row + cell.rowSpan - 1 < row);
      next.rowCount -= 1;
      return next;
    });
    setMenu(null);
  };

  const addColumn = () => {
    setGrid((prev) => {
      const next = cloneState(prev);
      for (let row = 0; row < next.rowCount; row += 1) next.cells.push(makeCell(row, next.colCount));
      next.colWidths.push(100);
      next.colCount += 1;
      return next;
    });
    setMenu(null);
  };

  const deleteColumn = () => {
    setGrid((prev) => {
      if (prev.colCount <= 1) return prev;
      const next = cloneState(prev);
      const col = next.colCount - 1;
      next.cells = next.cells.filter((cell) => cell.col !== col && cell.col + cell.colSpan - 1 < col);
      next.colWidths.pop();
      next.colCount -= 1;
      return next;
    });
    setMenu(null);
  };

  const mergeSelection = useCallback(() => {
    if (isSingleCell(selection)) {
      alert(t("grid.dynamic.merge.required", "Select more than one cell."));
      return;
    }
    setGrid((prev) => {
      const rect = normalizeSelection(selection);
      const next = splitIntersectingCells(prev, selection);
      const master = next.cells.find((cell) => cell.row === rect.top && cell.col === rect.left);
      if (!master) return prev;
      master.rowSpan = rect.bottom - rect.top + 1;
      master.colSpan = rect.right - rect.left + 1;
      next.cells.forEach((cell) => {
        if (cell === master) return;
        if (cell.row >= rect.top && cell.row <= rect.bottom && cell.col >= rect.left && cell.col <= rect.right) cell.hidden = true;
      });
      return next;
    });
    setMenu(null);
  }, [selection, t]);

  useEffect(() => {
    const close = (event: globalThis.MouseEvent) => {
      if (menuRef.current?.contains(event.target as Node)) return;
      setMenu(null);
    };
    const stopSelecting = () => setSelecting(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "m") {
        event.preventDefault();
        mergeSelection();
      }
    };
    window.addEventListener("mousedown", close);
    window.addEventListener("mouseup", stopSelecting);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("mouseup", stopSelecting);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mergeSelection]);

  const splitSelection = () => {
    setGrid((prev) => splitIntersectingCells(prev, selection));
    setMenu(null);
  };

  const colorSelection = (colored: boolean) => {
    setGrid((prev) => {
      const next = cloneState(prev);
      next.cells.forEach((cell) => {
        if (!cell.hidden && intersects(cell, selection)) cell.colored = colored;
      });
      return next;
    });
    setMenu(null);
  };

  const selectCell = (cell: DynamicCell) => {
    setSelection({ startRow: cell.row, startCol: cell.col, endRow: cell.row + cell.rowSpan - 1, endCol: cell.col + cell.colSpan - 1 });
  };

  const onCellMouseDown = (event: MouseEvent, cell: DynamicCell) => {
    if (event.button !== 0) return;
    selectCell(cell);
    setSelecting(true);
  };

  const onCellContextMenu = (event: MouseEvent, cell: DynamicCell) => {
    event.preventDefault();
    if (!intersects(cell, selection)) selectCell(cell);
    setMenu({ x: event.clientX, y: event.clientY });
  };

  const onCellDrop = (event: DragEvent, cell: DynamicCell) => {
    const raw = event.dataTransfer.getData(TOOL_MIME);
    if (!raw) return;
    event.preventDefault();
    applyKind(cell, raw as DynamicCellKind);
  };

  return (
    <main className="work">
      <div className="work-card react dynamic-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#11400">
            {t("sff.legacyLink")} →
          </a>
        </div>

        <div className="dynamic-head">
          <div>
            <h1>{t("grid.dynamic", "Dynamic grid")}</h1>
            <p>{t("grid.dynamic.desc", "Drag the cell type to the left grid and drop it on the right grid to complete the form.")}</p>
          </div>
          <div className="dynamic-actions">
            <button type="button" onClick={reset}>
              {t("grid.dynamic.clear", "Init")}
            </button>
            <button type="button" className="primary" onClick={save}>
              {t("grid.dynamic.save", "Save Format")}
            </button>
          </div>
        </div>

        <div className="dynamic-layout">
          <aside className="dynamic-tool-grid">
            <div className="dynamic-tool-head">Column Type</div>
            {DYNAMIC_TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="dynamic-tool-row"
                draggable
                onDragStart={(event) => {
                  event.dataTransfer.effectAllowed = "copy";
                  event.dataTransfer.setData(TOOL_MIME, tool.kind);
                  event.dataTransfer.setData("text/plain", tool.name);
                }}
              >
                <span>{tool.name}</span>
              </div>
            ))}
          </aside>

          <section className="dynamic-report">
            <table className="dynamic-sheet">
              <colgroup>
                {grid.colWidths.map((width, index) => (
                  <col key={index} style={{ width }} />
                ))}
              </colgroup>
              <thead>
                <tr>
                  {Array.from({ length: grid.colCount }, (_, col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: grid.rowCount }, (_, row) => (
                  <tr key={row}>
                    {grid.cells
                      .filter((cell) => cell.row === row && !cell.hidden)
                      .sort((a, b) => a.col - b.col)
                      .map((cell) => (
                        <td
                          key={cell.id}
                          rowSpan={cell.rowSpan}
                          colSpan={cell.colSpan}
                          className={[
                            cell.label ? "is-label" : "",
                            cell.colored ? "is-colored" : "",
                            intersects(cell, selection) ? "is-selected" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          onMouseDown={(event) => onCellMouseDown(event, cell)}
                          onMouseEnter={() => selecting && setSelection((prev) => ({ ...prev, endRow: cell.row, endCol: cell.col }))}
                          onContextMenu={(event) => onCellContextMenu(event, cell)}
                          onDragOver={(event) => {
                            if (Array.from(event.dataTransfer.types).includes(TOOL_MIME)) event.preventDefault();
                          }}
                          onDrop={(event) => onCellDrop(event, cell)}
                        >
                          {cell.label ? <span className="dynamic-label-text">{cell.value}</span> : renderCellEditor(cell, (value) => changeCellValue(cell, value), t)}
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <DescriptionSection t={t} />

        {menu && (
          <div ref={menuRef} className="dynamic-context-menu" style={{ left: menu.x, top: menu.y }}>
            <button type="button" onClick={addRow}>
              {t("grid.dynamic.menu.rowadd", "Add row")}
            </button>
            <button type="button" onClick={deleteRow}>
              {t("grid.dynamic.menu.rowdel", "Delete row")}
            </button>
            <button type="button" onClick={addColumn}>
              {t("grid.dynamic.menu.coladd", "Add column")}
            </button>
            <button type="button" onClick={deleteColumn}>
              {t("grid.dynamic.menu.coldel", "Delete column")}
            </button>
            <button type="button" onClick={mergeSelection}>
              {t("grid.dynamic.menu.merge", "Merge cells")}
            </button>
            <button type="button" onClick={splitSelection}>
              {t("grid.dynamic.menu.split", "Split cells")}
            </button>
            <button type="button" onClick={() => colorSelection(true)}>
              {t("grid.dynamic.menu.color", "Apply color")}
            </button>
            <button type="button" onClick={() => colorSelection(false)}>
              {t("grid.dynamic.menu.cancelcolor", "Clear color")}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="dynamic-desc">
      <div>
        <h2>{t("grid.dynamic.add", "Add Row/Column")}</h2>
        <p>{t("grid.dynamic.add.desc", "Right-click on the grid to dynamically add rows and columns.")}</p>
      </div>
      <div>
        <h2>{t("grid.dynamic.merge", "Row Merge")}</h2>
        <p>{t("grid.dynamic.merge.desc", "Select the cell area by dragging and dropping in the grid, and right-click to merge the columns.")}</p>
      </div>
      <div>
        <h2>{t("grid.dynamic.design", "Cell Design")}</h2>
        <p>{t("grid.dynamic.design.desc", "Right-click on the grid and add/delete a cell color (CSS) from the context menu.")}</p>
      </div>
    </section>
  );
}
