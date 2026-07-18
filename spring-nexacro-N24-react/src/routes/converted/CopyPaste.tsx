import { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type CellComponent, type ColumnDefinition, type RowComponent } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { COPYPASTE_RECORDS, type CopyPasteRecord } from "../../data/copyPasteRealData";
import "./copyPaste.css";

type Translate = (key: string, fallback?: string) => string;
type SelectType = "area" | "multiarea" | "row" | "multirow" | "cell";

// 원본 rdoSelectType_innerdataset의 datacolumn 값 — messageid 없이 리터럴 문자열 그대로라
// 언어 전환과 무관하게 항상 영어로 표시된다(원본 그대로 재현, 번역하지 않음).
const SELECT_TYPES: { code: SelectType; label: string }[] = [
  { code: "area", label: "Area" },
  { code: "multiarea", label: "Multiarea" },
  { code: "row", label: "Row" },
  { code: "multirow", label: "Multirow" },
  { code: "cell", label: "Cell" },
];

const ROW_HEIGHT = 46;

const COLUMNS: ColumnDefinition[] = [
  { title: "No.", field: "__no", width: 70, formatter: "rownum", headerSort: false },
  { title: "First name", field: "first_name", width: 100, headerSort: false },
  { title: "Last name", field: "last_name", width: 100, headerSort: false },
  { title: "Email", field: "email", width: 240, headerSort: false },
  { title: "Gender", field: "gender", width: 80, headerSort: false },
  { title: "IP Address", field: "ip_address", width: 120, hozAlign: "right", headerSort: false },
  { title: "State", field: "state", width: 140, headerSort: false },
  { title: "Street", field: "street", width: 150, headerSort: false },
  { title: "Date", field: "date", width: 100, headerSort: false },
  { title: "Domain", field: "domain", width: 200, headerSort: false },
  { title: "GUID", field: "guid", width: 300, headerSort: false },
];

const COL_SEP = "\t";
const ROW_SEP = "\r\n";
const MULTI_RANGE_ERROR = "This command cannot be used with multiple selection ranges.";

function blankRecord(): CopyPasteRecord {
  return { first_name: "", last_name: "", email: "", gender: "", ip_address: "", state: "", street: "", date: "", domain: "", guid: "" };
}

/**
 * Nexacro grid::copypaste.xfdl(메뉴 "복사 & 붙여넣기", 실제 menu_id 11100)를 React로 옮긴 화면.
 *
 * 원본은 그리드 선택 타입(area/multiarea/row/multirow/cell)에 따라 Ctrl+C/Ctrl+V로 클립보드에
 * 실제로 TSV(탭 구분) 텍스트를 쓰고 읽는다. 여기서는 `navigator.clipboard` API로 직접
 * 구현했다(원본은 옛날 방식의 숨긴 textarea+execCommand를 쓰지만 결과물은 동일).
 *
 * 사용자 실사용 테스트로 원본의 실제 동작을 다시 확인해 다음을 재현했다:
 * - Multiarea에서 영역을 2개 이상 선택한 채 복사하면 원본은 "This command cannot be used
 *   with multiple selection ranges." 에러를 던지고 거부한다(Playwright로 원본에서 직접
 *   확인). 붙여넣기는 원본이 "완료" 알럿을 띄우면서 실제로는 아무 것도 안 바꾸는
 *   버그가 있었는데, 이건 그대로 재현하지 않고 복사와 동일하게 명확히 거부한다(거짓
 *   성공 알림은 재현할 가치가 없는 버그로 판단).
 * - Row/Multirow는 원본에서 Shift/Ctrl 없이 그냥 클릭하면 이전 선택이 풀리고 새로 클릭한
 *   행만 선택된다(Playwright로 원본에서 직접 확인 — 스크린샷으로 3행만 강조되는 것 확인).
 *   Tabulator의 selectableRows 기본값은 이걸 지원하지 않아서(계속 누적되는 방식) 직접
 *   `rowClick` 핸들러로 구현했다.
 * - Cell은 Tabulator의 selectableRange로 "셀 하나만" 고정하려 했으나 드래그/키보드
 *   조작과 자꾸 충돌해서(범위가 다시 넓어지거나 스크롤이 튀는 문제), FreezePanes에서
 *   썼던 것과 같은 방식으로 selectableRange를 아예 안 쓰고 커스텀 outline 클래스로
 *   셀 하나만 선택하는 방식으로 다시 만들었다.
 */
export function CopyPaste() {
  const { t } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const dataRef = useRef<CopyPasteRecord[]>([...COPYPASTE_RECORDS]);
  const selectedCellElRef = useRef<HTMLElement | null>(null);
  const selectedCellRef = useRef<{ row: number; col: number } | null>(null);
  const lastRowClickRef = useRef<number | null>(null);
  const [selectType, setSelectType] = useState<SelectType>("area");

  useEffect(() => {
    if (!mountRef.current) return;
    const isAreaMode = selectType === "area" || selectType === "multiarea";
    const isCellMode = selectType === "cell";
    const isRowMode = selectType === "row" || selectType === "multirow";
    selectedCellElRef.current = null;
    selectedCellRef.current = null;
    lastRowClickRef.current = null;

    function selectCell(cell: CellComponent) {
      selectedCellElRef.current?.classList.remove("cp-selected-cell");
      const el = cell.getElement();
      el.classList.add("cp-selected-cell");
      selectedCellElRef.current = el;
      const columns = table.getColumns();
      selectedCellRef.current = {
        row: (cell.getRow().getPosition() as number) - 1,
        col: columns.findIndex((c) => c.getField() === cell.getColumn().getField()),
      };
    }

    function buildColumns(): ColumnDefinition[] {
      if (!isCellMode) return COLUMNS;
      return COLUMNS.map((col) => ({ ...col, cellClick: (_e, cell: CellComponent) => selectCell(cell) }));
    }

    const table = new Tabulator(mountRef.current, {
      data: dataRef.current,
      height: "480px",
      rowHeight: ROW_HEIGHT,
      clipboard: false,
      selectableRows: isRowMode ? (selectType === "row" ? 1 : true) : false,
      selectableRange: isAreaMode ? (selectType === "area" ? 1 : true) : false,
      columns: buildColumns(),
    });
    tableRef.current = table;

    // 원본은 Row/Multirow에서 Shift/Ctrl 없이 그냥 클릭하면 이전 선택을 지우고 새로
    // 클릭한 행만 선택한다(Playwright로 원본에서 직접 확인) — Tabulator의 selectableRows
    // 기본값은 계속 누적되는 방식이라 rowClick에서 직접 재정의한다.
    if (isRowMode) {
      table.on("rowClick", (e: UIEvent, row: RowComponent) => {
        const me = e as MouseEvent;
        // Tabulator의 기본 클릭 동작 자체가 "이 행의 선택 상태를 토글"이다(수정자 키를
        // 안 가린다) — 이 콜백이 그 기본 토글이 이미 적용된 *뒤에* 실행된다(실측으로
        // 확인: Ctrl+클릭에서 한 번 더 토글했더니 오히려 선택이 풀려버렸다). 그래서
        // Ctrl/Cmd+클릭은 Tabulator의 기본 토글 결과를 그대로 두면 원하는 "추가/제거"
        // 동작과 같아 아무 것도 더 안 한다. 일반 클릭(수정자 없음)만 "이전 선택 지우고
        // 이 행만 선택"으로 덮어쓴다 — 원본은 Shift/Ctrl 없이 클릭하면 이전 선택이
        // 풀린다(Playwright로 원본에서 직접 확인).
        if (selectType === "multirow" && me.shiftKey && lastRowClickRef.current != null) {
          const from = Math.min(lastRowClickRef.current, (row.getPosition() as number) - 1);
          const to = Math.max(lastRowClickRef.current, (row.getPosition() as number) - 1);
          table.deselectRow();
          table.selectRow(table.getRows().slice(from, to + 1));
        } else if (selectType === "multirow" && (me.ctrlKey || me.metaKey)) {
          // 아무 것도 하지 않는다 — Tabulator 기본 토글이 이미 올바르게 처리했다.
        } else {
          table.deselectRow();
          row.select();
        }
        lastRowClickRef.current = (row.getPosition() as number) - 1;
      });
    }

    // 맥에서 Ctrl+클릭은 OS 차원에서 "우클릭"으로 처리돼 컨텍스트 메뉴가 뜬다 — 이
    // 화면엔 그리드용 컨텍스트 메뉴가 없으니 막아서 Multiarea의 Ctrl+드래그(영역 추가)가
    // 방해받지 않게 한다(사용자가 실사용 중 발견).
    function onContextMenu(e: MouseEvent) {
      if (e.ctrlKey) e.preventDefault();
    }
    table.element.addEventListener("contextmenu", onContextMenu);

    function getSelectedRanges() {
      return isAreaMode ? table.getRanges() : [];
    }

    function getSelectionOrigin(): { row: number; col: number } | null {
      if (isCellMode) return selectedCellRef.current;
      if (isAreaMode) {
        const ranges = getSelectedRanges();
        if (ranges.length === 0) return null;
        const cells = ranges[0].getStructuredCells();
        if (cells.length === 0 || cells[0].length === 0) return null;
        const topLeft = cells[0][0];
        const columns = table.getColumns();
        return {
          row: (topLeft.getRow().getPosition() as number) - 1,
          col: columns.findIndex((c) => c.getField() === topLeft.getColumn().getField()),
        };
      }
      const rows = table.getSelectedRows();
      if (rows.length === 0) return null;
      return { row: (rows[0].getPosition() as number) - 1, col: 0 };
    }

    function buildCopyText(): string | null {
      if (isCellMode) {
        const sel = selectedCellRef.current;
        if (!sel) return null;
        const cell = table.getRows()[sel.row]?.getCells()[sel.col];
        return cell ? String(cell.getValue() ?? "") + ROW_SEP : null;
      }
      if (isAreaMode) {
        const ranges = getSelectedRanges();
        if (ranges.length === 0) return null;
        const blocks = ranges.map((range) =>
          range
            .getStructuredCells()
            .map((row) => row.map((cell) => String(cell.getValue() ?? "")).join(COL_SEP))
            .join(ROW_SEP),
        );
        return blocks.join(ROW_SEP) + ROW_SEP;
      }
      const rows = table.getSelectedRows();
      if (rows.length === 0) return null;
      const columns = table.getColumns();
      return (
        rows
          .map((row) =>
            columns
              .map((col) => (col.getField() === "__no" ? String(row.getPosition()) : String(row.getData()[col.getField()] ?? "")))
              .join(COL_SEP),
          )
          .join(ROW_SEP) + ROW_SEP
      );
    }

    async function handleCopy() {
      // 원본은 Multiarea에서 영역이 2개 이상 선택된 채 복사하면 이 메시지로 거부한다
      // (Playwright로 원본에서 직접 재현·확인).
      if (isAreaMode && getSelectedRanges().length > 1) {
        alert(MULTI_RANGE_ERROR);
        return;
      }
      const text = buildCopyText();
      if (!text) return;
      await navigator.clipboard.writeText(text);
      alert("Data copy complete.");
    }

    async function handlePaste() {
      // 원본은 이 경우 "완료" 알럿을 띄우면서 실제로는 아무 것도 안 바꾸는 버그가
      // 있었다(Playwright로 원본에서 직접 확인) — 사용자를 속이는 그 동작은 재현하지
      // 않고 복사와 동일하게 명확히 거부한다.
      if (isAreaMode && getSelectedRanges().length > 1) {
        alert(MULTI_RANGE_ERROR);
        return;
      }
      const origin = getSelectionOrigin();
      if (!origin) return;
      const clip = await navigator.clipboard.readText();
      const rowLines = clip.split(ROW_SEP).filter((_, i, arr) => !(i === arr.length - 1 && arr[i] === ""));
      if (rowLines.length === 0) return;

      const columns = table.getColumns();
      const fields = columns.map((c) => c.getField());
      const data = dataRef.current;
      let currentRow = origin.row;
      let maxCol = origin.col;

      for (const line of rowLines) {
        const cellValues = line.split(COL_SEP);
        if (currentRow >= data.length) data.push(blankRecord());
        const record = data[currentRow] as unknown as Record<string, string>;
        for (let k = 0; k < cellValues.length; k++) {
          const colIdx = origin.col + k;
          if (colIdx >= fields.length) break;
          const field = fields[colIdx];
          // "No." 컬럼은 rownum formatter가 그려주는 계산값이라 실제 데이터 필드가 아니다 —
          // 원본에서도 이 컬럼에 값을 쓰면 존재하지 않는 컬럼("currow+1")을 만들 뿐 실제로는
          // 아무 효과가 없다(원본 코드 분석으로 확인한 원본 자체의 사소한 버그). 우리는 그냥
          // 안전하게 건너뛴다.
          if (field !== "__no") record[field] = cellValues[k] ?? "";
          if (colIdx > maxCol) maxCol = colIdx;
        }
        currentRow++;
      }

      // setData()는 내부적으로 스크롤 위치를 맨 위로 되돌린다(사용자가 실사용 중 발견) —
      // 붙여넣기 전 스크롤 위치를 기억해뒀다가 다시 복원한다.
      const holder = table.element.querySelector<HTMLElement>(".tabulator-tableholder");
      const savedScrollTop = holder?.scrollTop ?? 0;
      const savedScrollLeft = holder?.scrollLeft ?? 0;

      table.setData(data);
      const endRow = currentRow - 1;

      requestAnimationFrame(() => {
        if (holder) {
          holder.scrollTop = savedScrollTop;
          holder.scrollLeft = savedScrollLeft;
        }
        if (isCellMode) {
          const cell = table.getRows()[origin.row]?.getCells()[origin.col];
          if (cell) selectCell(cell);
        } else if (isAreaMode) {
          const rows = table.getRows();
          const startRowComp = rows[origin.row];
          const endRowComp = rows[Math.min(endRow, rows.length - 1)];
          if (startRowComp && endRowComp) {
            const startCell = startRowComp.getCells()[origin.col];
            const endCell = endRowComp.getCells()[Math.min(maxCol, columns.length - 1)];
            if (startCell && endCell) table.addRange(startCell, endCell);
          }
        } else {
          const rows = table.getRows().slice(origin.row, endRow + 1);
          table.selectRow(rows);
        }
      });

      alert("Pasting of data is complete.");
    }

    function onKeydown(e: KeyboardEvent) {
      if (!(e.ctrlKey || e.metaKey) || e.shiftKey || e.altKey) return;
      if (e.key === "c" || e.key === "C") {
        void handleCopy();
      } else if (e.key === "v" || e.key === "V") {
        void handlePaste();
      }
    }

    // 그리드 셀은 기본적으로 포커스를 받는 요소가 아니다 — 셀을 클릭만 하고 드래그가
    // 없으면 브라우저 포커스가 그리드 바깥(또는 body)에 남아있어서, 리스너를 그리드
    // 루트에 붙이면 그 포커스가 안쪽으로 안 들어온 상태에서의 클릭 뒤에 오는 Ctrl+V가
    // 감지되지 않는 문제가 있었다(실제로 겪고 확인). document에 붙여서 포커스 위치와
    // 무관하게 항상 받도록 한다.
    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("keydown", onKeydown);
      table.element.removeEventListener("contextmenu", onContextMenu);
      table.destroy();
      tableRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectType]);

  return (
    <main className="work">
      <div className="work-card react cp-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#11100">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="cp-page-title">{t("grid.copypaste.title")}</h1>
        <p className="cp-subtitle">{t("grid.copypaste.subtitle")}</p>

        <div className="cp-toolbar">
          <span className="cp-toolbar-label">{t("grid.copypaste.selection.option")}</span>
          <div className="cp-radio-row">
            {SELECT_TYPES.map(({ code, label }) => (
              <label className="cp-radio" key={code}>
                <input type="radio" name="selectType" checked={selectType === code} onChange={() => setSelectType(code)} />
                {label}
              </label>
            ))}
          </div>
          <span className="cp-remark">{t("grid.copypaste.selection.remark")}</span>
        </div>

        <div ref={mountRef} className="cp-grid-mount" />

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="cp-desc">
      <h3 className="cp-desc-title">{t("grid.copypaste.title")}</h3>
      <p className="cp-desc-body">{t("grid.copypaste.desc")}</p>
    </section>
  );
}
