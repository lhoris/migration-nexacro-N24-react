import { useEffect, useMemo, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition, type CellComponent } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { ROW_COUNT_OPTIONS, generateLargeDataRows, type LargeDataRow } from "../../data/largeDataMock";
import "./largeData.css";

type Translate = (key: string, fallback?: string) => string;

// 원본 Grid Format의 Band head Cell text는 TEXT()로 감싸지 않은 순수 리터럴이라
// langCode와 무관하게 항상 영문으로 표시된다(Playwright로 한글 로케일에서도 "No./Name/
// Email/..." 영문으로 뜨는 것 확인 — 10500 피벗의 필드 라벨과 같은 패턴).
const READONLY_COLUMNS: ColumnDefinition[] = [
  { title: "No.", field: "no", width: 70, headerSort: false },
  { title: "Name", field: "first_name", width: 110, headerSort: false },
  { title: "Email", field: "email", width: 240, headerSort: false },
  { title: "Gender", field: "gender", width: 90, headerSort: false },
  { title: "Married", field: "married", width: 90, headerSort: false },
  { title: "Date", field: "date", width: 100, headerSort: false },
  {
    title: "Money",
    field: "money",
    width: 100,
    hozAlign: "right",
    headerSort: false,
    formatter: (cell) => (cell.getValue() as number).toLocaleString(),
  },
  { title: "Number", field: "number", width: 90, hozAlign: "right", headerSort: false },
  {
    title: "Button",
    field: "_button",
    width: 90,
    headerSort: false,
    hozAlign: "center",
    formatter: () => `<button type="button" class="ld-cell-btn" disabled>Button</button>`,
  },
];

// 다양한 표현 탭은 원본이 실제로 편집 가능한 컨트롤(콤보/체크박스/날짜/마스크/프로그레스바)로
// 그린다(largedata.xfdl.js Tab00_Tabpage2_Grid00의 displaytype/edittype 참고). 원본에도
// Button 컬럼엔 핸들러가 없어(oncellclick은 콤보/캘린더 드롭다운 여는 용도) 장식용으로만 둔다.
function buildEditableColumns(): ColumnDefinition[] {
  return [
    { title: "No.", field: "no", width: 70, headerSort: false },
    { title: "Name", field: "first_name", width: 110, headerSort: false, editor: "input" },
    { title: "Email", field: "email", width: 240, headerSort: false, editor: "input" },
    {
      title: "Gender",
      field: "gender",
      width: 90,
      headerSort: false,
      editor: "list",
      editorParams: { values: ["Female", "Male"] },
    },
    {
      title: "Married",
      field: "married",
      width: 90,
      headerSort: false,
      hozAlign: "center",
      // 원본은 married/single 문자열을 체크박스 true/false 값으로 바인딩한다 — Tabulator
      // 내장 tickCross 대신 순수 네이티브 체크박스를 쓴다(10200 화면에서 tickCross/toggle
      // 둘 다 사용성 피드백으로 반려되고 네이티브 체크박스로 정착한 전례를 따름).
      formatter: (cell) =>
        `<input type="checkbox" ${cell.getValue() === "married" ? "checked" : ""} />`,
      cellClick: (_e, cell: CellComponent) => cell.setValue(cell.getValue() === "married" ? "single" : "married"),
    },
    { title: "Date", field: "date", width: 100, headerSort: false, editor: "date" },
    {
      title: "Money",
      field: "money",
      width: 100,
      hozAlign: "right",
      headerSort: false,
      editor: "number",
      formatter: (cell) => (cell.getValue() as number).toLocaleString(),
    },
    {
      title: "Number",
      field: "number",
      width: 90,
      hozAlign: "right",
      headerSort: false,
      formatter: "progress",
      formatterParams: { min: 0, max: 100, color: ["#e74c3c", "#f39c12", "#2ecc71"] },
    },
    {
      title: "Button",
      field: "_button",
      width: 90,
      headerSort: false,
      hozAlign: "center",
      formatter: () => `<button type="button" class="ld-cell-btn" disabled>Button</button>`,
    },
  ];
}

/**
 * Nexacro grid::largedata.xfdl(메뉴 "대용량 데이터", 실제 menu_id 10600)를 React로 옮긴 화면.
 * 원본은 svc::largedata 트랜잭션으로 서버에서 1만~10만행을 받아오는데, 이 프로젝트엔 그
 * 백엔드가 없다(원본에서 직접 "조회"를 눌러도 그리드가 계속 비어있음 — Playwright로 확인,
 * 10500 피벗과 동일한 패턴). 이미 피벗 화면에서 사용자가 "클라이언트 목업 생성"으로 방향을
 * 정했으므로 여기서도 동일하게 적용 — 대용량 렌더링 성능을 보여주는 게 이 화면의 요점이라
 * 실제 선택한 행 수만큼 데이터를 생성해야 의미가 있다.
 */
export function LargeData() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"general" | "multi">("general");

  return (
    <main className="work">
      <div className="work-card react ld-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10600">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="ld-page-title">{t("grid.largedata")}</h1>

        <div className="ld-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            className={`ld-tab${tab === "general" ? " active" : ""}`}
            aria-selected={tab === "general"}
            onClick={() => setTab("general")}
          >
            {t("grid.largedata.general")}
          </button>
          <button
            type="button"
            role="tab"
            className={`ld-tab${tab === "multi" ? " active" : ""}`}
            aria-selected={tab === "multi"}
            onClick={() => setTab("multi")}
          >
            {t("grid.largedata.multi")}
          </button>
        </div>

        {tab === "general" ? (
          <LargeDataTab key="general" t={t} columns={READONLY_COLUMNS} />
        ) : (
          <LargeDataTab key="multi" t={t} columns={buildEditableColumns()} />
        )}

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function LargeDataTab({ t, columns }: { t: Translate; columns: ColumnDefinition[] }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const [rowCount, setRowCount] = useState(ROW_COUNT_OPTIONS[0]);
  const [status, setStatus] = useState({ network: 0, render: 0, rows: 0 });

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: [],
      layout: "fitDataFill",
      height: "420px",
      columns,
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = () => {
    setStatus({ network: 0, render: 0, rows: 0 });
    const table = tableRef.current;
    if (!table) return;
    const networkMs = 80 + (rowCount / 100_000) * (250 + Math.random() * 200);
    const start = performance.now();
    window.setTimeout(() => {
      const rows: LargeDataRow[] = generateLargeDataRows(rowCount);
      table.setData(rows).then(() => {
        const totalMs = performance.now() - start;
        setStatus({
          network: Math.round((networkMs / 1000) * 1000) / 1000,
          render: Math.round(((totalMs - networkMs) / 1000) * 1000) / 1000,
          rows: rowCount,
        });
      });
    }, networkMs);
  };

  return (
    <section className="ld-section">
      <div className="ld-search-row">
        <span className="ld-search-label">{t("grid.rowcount")}</span>
        <select className="ld-search-select" value={rowCount} onChange={(e) => setRowCount(Number(e.target.value))}>
          {ROW_COUNT_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n.toLocaleString()}
            </option>
          ))}
        </select>
        <button type="button" className="ld-search-btn" onClick={onSearch}>
          🔍 {t("largedata.search")}
        </button>
      </div>

      <p className="ld-hint">{t("inquiry.result")}</p>
      <div ref={mountRef} className="ld-grid-mount" />

      <p className="ld-status">
        {t("largedata.status")
          .replace("{network}", status.network.toString())
          .replace("{render}", status.render.toString())
          .replace("{rows}", status.rows.toLocaleString())}
      </p>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 설명 영역 — 원본 grid::largedata_desc.xfdl(개요/대용량 데이터 조회 2블록).
// ---------------------------------------------------------------------------
function DescriptionSection({ t }: { t: Translate }) {
  const blocks = useMemo(
    () => [
      { title: t("grid.largedata"), body: t("grid.largedata.desc") },
      { title: t("grid.largedata.query"), body: t("grid.largedata.query.desc") },
    ],
    [t],
  );

  return (
    <section className="ld-desc">
      {blocks.map((b) => (
        <div className="ld-desc-block" key={b.title}>
          <h3 className="ld-desc-title">{b.title}</h3>
          <p className="ld-desc-body">{b.body}</p>
        </div>
      ))}
    </section>
  );
}
