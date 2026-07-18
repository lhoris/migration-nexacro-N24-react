import { useCallback, useEffect, useMemo, useRef, useState, type DragEvent } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { DRAGDROP_FIELDS, DRAGDROP_RECORDS, type DragDropField, type DragDropRecord } from "../../data/dragDropRealData";
import "./dragDrop.css";

type Translate = (key: string, fallback?: string) => string;
const DRAGDROP_MIME = "application/x-nexacro-dragdrop-fields";
const COLUMN_REORDER_MIME = "application/x-nexacro-column-reorder";

const FIELD_LABEL: Record<DragDropField, string> = {
  first_name: "first_name",
  last_name: "last_name",
  email: "email",
  gender: "gender",
  ip_address: "ip_address",
  state: "state",
};

interface DragPayload {
  mode: "single" | "multi";
  fields: DragDropField[];
}

function writePayload(e: DragEvent, payload: DragPayload) {
  e.dataTransfer.effectAllowed = "copy";
  e.dataTransfer.setData(DRAGDROP_MIME, JSON.stringify(payload));
  e.dataTransfer.setData("application/json", JSON.stringify(payload));
  e.dataTransfer.setData("text/plain", payload.fields.join(", "));
}

function hasDragDropPayload(e: DragEvent): boolean {
  return Array.from(e.dataTransfer.types).includes(DRAGDROP_MIME);
}

function readPayload(e: DragEvent): DragPayload | null {
  const raw = e.dataTransfer.getData(DRAGDROP_MIME) || e.dataTransfer.getData("application/json") || e.dataTransfer.getData("text/plain");
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as DragPayload;
    if (!Array.isArray(parsed.fields)) return null;
    return parsed;
  } catch {
    const fields = raw
      .split(",")
      .map((v) => v.trim())
      .filter((v): v is DragDropField => DRAGDROP_FIELDS.includes(v as DragDropField));
    return fields.length > 0 ? { mode: fields.length === 1 ? "single" : "multi", fields } : null;
  }
}

function toRows(fields: DragDropField[]): Partial<DragDropRecord>[] {
  if (fields.length === 0) return [];
  return DRAGDROP_RECORDS.map((row) => {
    const next: Partial<DragDropRecord> = {};
    fields.forEach((field) => {
      next[field] = row[field];
    });
    return next;
  });
}

function reorderFields(fields: DragDropField[], fromField: DragDropField, toField: DragDropField, after: boolean): DragDropField[] {
  if (fromField === toField) return fields;
  if (!fields.includes(fromField) || !fields.includes(toField)) return fields;
  const next = fields.filter((field) => field !== fromField);
  const toIndex = next.indexOf(toField);
  next.splice(toIndex + (after ? 1 : 0), 0, fromField);
  return next;
}

function buildColumns(fields: DragDropField[]): ColumnDefinition[] {
  if (fields.length === 0) {
    return [{ title: "", field: "__empty", width: 120, headerSort: false, headerHozAlign: "center" }];
  }
  return fields.map((field) => ({
    title: FIELD_LABEL[field],
    field,
    width: 120,
    headerSort: false,
    headerHozAlign: "center",
    hozAlign: field === "gender" || field === "state" ? "center" : "left",
  }));
}

function useDynamicGrid(
  mountRef: React.RefObject<HTMLDivElement | null>,
  fields: DragDropField[],
  onReorderFields: (fromField: DragDropField, toField: DragDropField, after: boolean) => void,
) {
  const tableRef = useRef<Tabulator | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const table = new Tabulator(mountRef.current, {
      data: toRows(fields),
      columns: buildColumns(fields),
      height: "324px",
      rowHeight: 46,
      layout: "fitDataStretch",
      placeholder: "데이터가 없습니다.",
    });

    const cleanups: Array<() => void> = [];
    let reorderHandlersAttached = false;

    const attachReorderHandlers = () => {
      if (reorderHandlersAttached) return;
      let attachedCount = 0;

      fields.forEach((field) => {
        const column = table.getColumn(field);
        if (!column) return;

        const el = column.getElement();
        if (el.classList.contains("dd-reorderable-col")) {
          attachedCount += 1;
          return;
        }
        el.classList.add("dd-reorderable-col");
        el.draggable = true;

        const onDragStart = (event: globalThis.DragEvent) => {
          event.stopPropagation();
          event.dataTransfer?.setData(COLUMN_REORDER_MIME, field);
          if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = "move";
          }
        };
        const onDragOver = (event: globalThis.DragEvent) => {
          if (!Array.from(event.dataTransfer?.types ?? []).includes(COLUMN_REORDER_MIME)) return;
          event.preventDefault();
          event.stopPropagation();
          const after = event.clientX > el.getBoundingClientRect().left + el.offsetWidth / 2;
          el.classList.toggle("is-reorder-before", !after);
          el.classList.toggle("is-reorder-after", after);
          if (event.dataTransfer) {
            event.dataTransfer.dropEffect = "move";
          }
        };
        const onDragLeave = () => {
          el.classList.remove("is-reorder-before", "is-reorder-after");
        };
        const onDrop = (event: globalThis.DragEvent) => {
          const fromField = event.dataTransfer?.getData(COLUMN_REORDER_MIME) as DragDropField;
          if (!fromField) return;
          event.preventDefault();
          event.stopPropagation();
          const after = event.clientX > el.getBoundingClientRect().left + el.offsetWidth / 2;
          el.classList.remove("is-reorder-before", "is-reorder-after");
          onReorderFields(fromField, field, after);
        };

        el.addEventListener("dragstart", onDragStart);
        el.addEventListener("dragover", onDragOver);
        el.addEventListener("dragleave", onDragLeave);
        el.addEventListener("drop", onDrop);
        attachedCount += 1;
        cleanups.push(() => {
          el.removeEventListener("dragstart", onDragStart);
          el.removeEventListener("dragover", onDragOver);
          el.removeEventListener("dragleave", onDragLeave);
          el.removeEventListener("drop", onDrop);
        });
      });

      reorderHandlersAttached = attachedCount === fields.length;
    };

    table.on("tableBuilt", attachReorderHandlers);
    queueMicrotask(attachReorderHandlers);
    window.setTimeout(attachReorderHandlers, 0);

    tableRef.current = table;
    return () => {
      cleanups.forEach((cleanup) => cleanup());
      table.destroy();
      tableRef.current = null;
    };
  }, [mountRef, fields, onReorderFields]);
}

/**
 * Nexacro grid::dragndrop.xfdl(menu_id 11200)을 React로 옮긴 화면.
 *
 * 원본은 왼쪽 Grid의 컬럼명을 drag해서 오른쪽 Grid에 drop하면 그리드 format과 Dataset 컬럼을 동적으로
 * 생성한다. 상단은 단일 컬럼을 순서대로 append하고, 하단은 체크된 여러 컬럼을 drag하면 기존 결과 그리드를
 * 비운 뒤 선택 컬럼 묶음으로 다시 만든다. 결과 Grid의 `cellmovingtype="col"`도 사용자가 컬럼 순서를
 * 바꿀 수 있다는 의미라 Tabulator `movableColumns`로 반영했다.
 */
export function DragDrop() {
  const { t } = useLanguage();
  const singleGridRef = useRef<HTMLDivElement | null>(null);
  const multiGridRef = useRef<HTMLDivElement | null>(null);
  const [singleFields, setSingleFields] = useState<DragDropField[]>([]);
  const [multiFields, setMultiFields] = useState<DragDropField[]>([]);
  const [checkedFields, setCheckedFields] = useState<DragDropField[]>([]);
  const allChecked = checkedFields.length === DRAGDROP_FIELDS.length;

  const reorderSingleFields = useCallback((fromField: DragDropField, toField: DragDropField, after: boolean) => {
    setSingleFields((prev) => reorderFields(prev, fromField, toField, after));
  }, []);

  const reorderMultiFields = useCallback((fromField: DragDropField, toField: DragDropField, after: boolean) => {
    setMultiFields((prev) => reorderFields(prev, fromField, toField, after));
  }, []);

  useDynamicGrid(singleGridRef, singleFields, reorderSingleFields);
  useDynamicGrid(multiGridRef, multiFields, reorderMultiFields);

  const selectedText = useMemo(() => checkedFields.map((field) => FIELD_LABEL[field]).join(", "), [checkedFields]);

  const toggleField = (field: DragDropField) => {
    setCheckedFields((prev) => (prev.includes(field) ? prev.filter((item) => item !== field) : [...prev, field]));
  };

  const toggleAll = () => {
    setCheckedFields(allChecked ? [] : [...DRAGDROP_FIELDS]);
  };

  const handleSingleDrop = (e: DragEvent) => {
    if (!hasDragDropPayload(e)) return;
    e.preventDefault();
    const payload = readPayload(e);
    const field = payload?.fields[0];
    if (!field || payload?.mode !== "single") return;
    setSingleFields((prev) => (prev.includes(field) ? prev : [...prev, field]));
  };

  const handleMultiDrop = (e: DragEvent) => {
    if (!hasDragDropPayload(e)) return;
    e.preventDefault();
    const payload = readPayload(e);
    if (!payload || payload.mode !== "multi" || payload.fields.length === 0) return;
    setMultiFields([...payload.fields]);
  };

  return (
    <main className="work">
      <div className="work-card react dd-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#11200">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="dd-page-title">{t("grid.dragndrop", "Drag & Drop")}</h1>

        <section className="dd-section">
          <div className="dd-section-head">
            <h2>{t("grid.dragndrop.dragdesc", "Drag the column, drop it on the grid.")}</h2>
            <button className="dd-reset" type="button" onClick={() => setSingleFields([])}>
              {t("grid.dragndrop.reset", "Reset")}
            </button>
          </div>
          <div className="dd-grid-pair">
            <ColumnList
              fields={DRAGDROP_FIELDS}
              onDragStart={(e, field) => writePayload(e, { mode: "single", fields: [field] })}
            />
            <DropGrid mountRef={singleGridRef} isEmpty={singleFields.length === 0} onDrop={handleSingleDrop} />
          </div>
        </section>

        <section className="dd-section">
          <div className="dd-section-head">
            <h2>{t("grid.dragndrop.checkdesc", "Check and drag the columns, drop them on the grid.")}</h2>
            <button className="dd-reset" type="button" onClick={() => setMultiFields([])}>
              {t("grid.dragndrop.reset", "Reset")}
            </button>
          </div>
          <div className="dd-grid-pair">
            <MultiColumnList
              fields={DRAGDROP_FIELDS}
              checkedFields={checkedFields}
              allChecked={allChecked}
              selectedText={selectedText}
              onToggleAll={toggleAll}
              onToggleField={toggleField}
              onDragStart={(e) => {
                if (checkedFields.length === 0) {
                  e.preventDefault();
                  return;
                }
                writePayload(e, { mode: "multi", fields: checkedFields });
              }}
            />
            <DropGrid mountRef={multiGridRef} isEmpty={multiFields.length === 0} onDrop={handleMultiDrop} />
          </div>
        </section>

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function ColumnList({
  fields,
  onDragStart,
}: {
  fields: DragDropField[];
  onDragStart: (e: DragEvent<HTMLTableRowElement>, field: DragDropField) => void;
}) {
  return (
    <div className="dd-source-grid">
      <table>
        <thead>
          <tr>
            <th>Column</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field} draggable onDragStart={(e) => onDragStart(e, field)}>
              <td>{FIELD_LABEL[field]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MultiColumnList({
  fields,
  checkedFields,
  allChecked,
  selectedText,
  onToggleAll,
  onToggleField,
  onDragStart,
}: {
  fields: DragDropField[];
  checkedFields: DragDropField[];
  allChecked: boolean;
  selectedText: string;
  onToggleAll: () => void;
  onToggleField: (field: DragDropField) => void;
  onDragStart: (e: DragEvent<HTMLTableRowElement>) => void;
}) {
  return (
    <div className="dd-source-grid">
      <table>
        <thead>
          <tr>
            <th className="dd-check-cell">
              <input type="checkbox" checked={allChecked} onChange={onToggleAll} aria-label="Select all columns" />
            </th>
            <th>Column</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => {
            const checked = checkedFields.includes(field);
            return (
              <tr key={field} draggable={checkedFields.length > 0} onDragStart={onDragStart} className={checked ? "is-checked" : ""}>
                <td className="dd-check-cell">
                  <input type="checkbox" checked={checked} onChange={() => onToggleField(field)} aria-label={`Select ${FIELD_LABEL[field]}`} />
                </td>
                <td>{FIELD_LABEL[field]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="dd-selected-note">{selectedText || " "}</div>
    </div>
  );
}

function DropGrid({
  mountRef,
  isEmpty,
  onDrop,
}: {
  mountRef: React.RefObject<HTMLDivElement | null>;
  isEmpty: boolean;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      className={`dd-drop-zone${isEmpty ? " is-empty" : ""}`}
      onDragOver={(e) => {
        if (!hasDragDropPayload(e)) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
      }}
      onDrop={onDrop}
    >
      <div ref={mountRef} className="dd-grid-mount" />
    </div>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="dd-desc">
      <h3 className="dd-desc-title">{t("grid.dragndrop", "Drag & Drop")}</h3>
      <p className="dd-desc-body">{t("grid.dragndrop.desc")}</p>
    </section>
  );
}
