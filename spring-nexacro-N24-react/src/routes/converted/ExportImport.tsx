import { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import * as XLSX from "xlsx";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { EXPORT_PRODUCTS } from "../../data/exportImportRealData";
import "./exportImport.css";

type Translate = (key: string, fallback?: string) => string;
type FileType = "excel" | "csv";

function formatCurrency(v: unknown): string {
  const n = Number(v);
  return Number.isFinite(n) ? `₩${n.toLocaleString("en-US")}` : "";
}

const PRODUCT_COLUMNS: ColumnDefinition[] = [
  { title: "#", field: "no", width: 50, headerSort: false },
  { title: "Product ID", field: "productId", width: 120, headerSort: false },
  { title: "Product Name", field: "productName", width: 200, headerSort: false },
  { title: "Unit Price", field: "unitPrice", width: 120, hozAlign: "right", headerSort: false, formatter: (cell) => formatCurrency(cell.getValue()) },
  { title: "Qty", field: "qty", width: 80, hozAlign: "right", headerSort: false },
  { title: "Amount", field: "amount", width: 120, hozAlign: "right", headerSort: false, formatter: (cell) => formatCurrency(cell.getValue()) },
  { title: "notes", field: "notes", width: 120, headerSort: false },
];

// Export/Import 버튼이 실제로 만들어 내려받는 행 모양 — 그리드 표시(#, Product ID, ...)와
// 같은 헤더로 시트를 만들어야 "테스트 파일 다운로드" 후 바로 다시 "가져오기" 했을 때
// 헤더 포함 옵션이 자연스럽게 들어맞는다.
function toExportRows() {
  return EXPORT_PRODUCTS.map((p) => ({
    "#": p.no,
    "Product ID": p.productId,
    "Product Name": p.productName,
    "Unit Price": p.unitPrice,
    Qty: p.qty,
    Amount: p.unitPrice * p.qty,
    notes: p.notes,
  }));
}

function buildWorkbook() {
  const ws = XLSX.utils.json_to_sheet(toExportRows());
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  return wb;
}

// 첫 행이 헤더인지 실제 레코드인지 자동으로 추정한다 — 원본/이전 버전 모두 "헤더에 열
// 이름 포함" 체크박스를 사용자가 직접 켜고 꺼야 했는데, 사용자가 "첫 행 판단을 자동으로
// 해줄 수 없냐"고 요청해서 추가함. 컬럼별로 "1행을 제외한 나머지 행들이 대부분 숫자인
// 컬럼"만 골라(문자 컬럼은 헤더 유무를 판단하는 신호가 약함), 그 컬럼들에서 1행 값이
// 숫자가 아닌 비율이 절반을 넘으면 헤더가 있다고 판단한다(엑셀 파일은 숫자 셀이 실제
// number 타입으로 들어오고, CSV는 전부 문자열이라 Number() 변환으로 판단). 자동으로
// 체크박스 초기값만 맞춰줄 뿐 사용자가 그 뒤에 직접 켜고 끄는 건 그대로 가능하다.
function detectHasHeader(rows: unknown[][]): boolean {
  if (rows.length < 2) return false;
  const header = rows[0];
  const body = rows.slice(1, 21);
  let numericColumnCount = 0;
  let nonNumericHeaderCount = 0;
  for (let col = 0; col < header.length; col++) {
    const bodyValues = body.map((r) => r[col]).filter((v) => v !== undefined && v !== "");
    if (bodyValues.length === 0) continue;
    const numericCount = bodyValues.filter((v) => v !== "" && !Number.isNaN(Number(v))).length;
    const isNumericColumn = numericCount / bodyValues.length > 0.8;
    if (!isNumericColumn) continue;
    numericColumnCount++;
    const headerValue = header[col];
    const headerIsNumeric = headerValue !== "" && headerValue != null && !Number.isNaN(Number(headerValue));
    if (!headerIsNumeric) nonNumericHeaderCount++;
  }
  if (numericColumnCount === 0) return false;
  return nonNumericHeaderCount / numericColumnCount >= 0.5;
}

/**
 * Nexacro grid::export.xfdl(메뉴 "내보내기 & 가져오기", 실제 menu_id 11000)를 React로 옮긴 화면.
 *
 * 원본은 `ExcelExportObject`/`ExcelImportObject`가 "xeni::XExportImport"라는 서버(nexacro-xeni,
 * Apache POI 기반)에 실제 엑셀 파일 생성/파싱을 위임한다. 이 프로젝트엔 그 서버가 없어서
 * 원본 자체도 내보내기 버튼을 누르면 "FAILED" 알럿만 뜨고, "테스트 파일 다운로드"도 405
 * 응답으로 실패한다(Playwright로 실제 클릭해 확인 — grid::pivot.xfdl과 같은 "백엔드 없음"
 * 케이스, `conversion-playbook.md` 참고). 사용자가 "피벗과 동일하게 클라이언트 사이드에서
 * 실제로 동작하게 만들자"를 선택해, 서버 없이 브라우저 안에서 SheetJS(xlsx)로 실제
 * Excel/CSV 내보내기·가져오기를 수행하도록 구현했다 — 원본이 지원하는 한셀 형식과 비밀번호
 * 보호는 브라우저 라이브러리로 구현하기 어려워 이번 전환 범위에서 제외했다(비밀번호 입력칸은
 * 원본과의 레이아웃 동일성을 위해 화면엔 남겨뒀지만 실제로 사용되진 않는다).
 *
 * npm 레지스트리의 xlsx@0.18.5는 패치되지 않은 고위험 취약점(Prototype Pollution, ReDoS)이
 * 있어(업로드 파일을 파싱하는 이 기능의 공격 표면과 정확히 겹침), SheetJS가 자체 CDN에
 * 배포하는 패치된 빌드(`https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz`)를 대신 설치했다.
 */
export function ExportImport() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"export" | "import">("export");

  return (
    <main className="work">
      <div className="work-card react exp-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#11000">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="exp-page-title">{t("grid.export.import")}</h1>

        <div className="exp-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            className={`exp-tab${tab === "export" ? " active" : ""}`}
            aria-selected={tab === "export"}
            onClick={() => setTab("export")}
          >
            {t("grid.export")}
          </button>
          <button
            type="button"
            role="tab"
            className={`exp-tab${tab === "import" ? " active" : ""}`}
            aria-selected={tab === "import"}
            onClick={() => setTab("import")}
          >
            {t("grid.import")}
          </button>
        </div>

        {tab === "export" ? <ExportTab t={t} /> : <ImportTab t={t} />}

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function ExportTab({ t }: { t: Translate }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const [exportType, setExportType] = useState<FileType>("excel");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: EXPORT_PRODUCTS.map((p) => ({
        no: p.no,
        productId: p.productId,
        productName: p.productName,
        unitPrice: p.unitPrice,
        qty: p.qty,
        amount: p.unitPrice * p.qty,
        notes: p.notes,
      })),
      height: "400px",
      selectableRows: false,
      columns: PRODUCT_COLUMNS,
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, []);

  function handleExport() {
    const wb = buildWorkbook();
    const ext = exportType === "csv" ? "csv" : "xlsx";
    XLSX.writeFile(wb, `ExportSample.${ext}`, { bookType: ext });
  }

  return (
    <>
      <div className="exp-toolbar">
        <label className="exp-field">
          <span>{t("grid.export.type")}</span>
          <select value={exportType} onChange={(e) => setExportType(e.target.value as FileType)}>
            <option value="excel">Excel</option>
            <option value="csv">CSV</option>
          </select>
        </label>
        <label className="exp-field">
          <span>{t("grid.import.password")}</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" className="exp-btn-accent" onClick={handleExport}>
          {t("grid.export")}
        </button>
      </div>

      <h3 className="exp-section-title">{t("inquiry.result")}</h3>
      <div ref={mountRef} className="exp-grid-mount" />
    </>
  );
}

function ImportTab({ t }: { t: Translate }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [importType, setImportType] = useState<FileType>("excel");
  const [password, setPassword] = useState("");
  const [useHeader, setUseHeader] = useState(false);
  const [workbook, setWorkbook] = useState<XLSX.WorkBook | null>(null);
  const [sheetIndex, setSheetIndex] = useState(-1);

  // 시트가 바뀔 때마다(새 파일 업로드 포함) 그 시트만 보고 헤더 유무를 다시 추정한다 —
  // 시트마다 구조가 다를 수 있어 워크북 전체가 아니라 선택된 시트 기준으로 판단해야 한다.
  useEffect(() => {
    if (!workbook || sheetIndex < 0) return;
    const ws = workbook.Sheets[workbook.SheetNames[sheetIndex]];
    const rows = XLSX.utils.sheet_to_json<unknown[]>(ws, { header: 1, defval: "" });
    setUseHeader(detectHasHeader(rows));
  }, [workbook, sheetIndex]);

  useEffect(() => {
    if (!mountRef.current) return;
    let columns: ColumnDefinition[] = [];
    let data: Record<string, unknown>[] = [];
    if (workbook && sheetIndex >= 0) {
      const sheetName = workbook.SheetNames[sheetIndex];
      const ws = workbook.Sheets[sheetName];
      if (useHeader) {
        const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, { defval: "" });
        const fields = rows.length > 0 ? Object.keys(rows[0]) : [];
        columns = fields.map((f) => ({ title: f, field: f, headerSort: false }));
        data = rows;
      } else {
        const rows = XLSX.utils.sheet_to_json<unknown[]>(ws, { header: 1, defval: "" });
        const colCount = rows.reduce((max, r) => Math.max(max, r.length), 0);
        columns = Array.from({ length: colCount }, (_, i) => ({ title: `Col${i + 1}`, field: `col${i}`, headerSort: false }));
        data = rows.map((r) => Object.fromEntries(columns.map((c, i) => [c.field as string, r[i] ?? ""])));
      }
    }
    const table = new Tabulator(mountRef.current, {
      data,
      height: "400px",
      selectableRows: false,
      columns,
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workbook, sheetIndex, useHeader]);

  async function handleFileSelected(file: File) {
    const buf = await file.arrayBuffer();
    const wb = XLSX.read(buf, { type: "array" });
    setWorkbook(wb);
    setSheetIndex(wb.SheetNames.length > 0 ? 0 : -1);
  }

  function handleDownloadTestFile() {
    const wb = buildWorkbook();
    XLSX.writeFile(wb, "import-sample.xlsx");
  }

  return (
    <>
      <div className="exp-toolbar">
        <label className="exp-field">
          <span>{t("grid.import.type")}</span>
          <select value={importType} onChange={(e) => setImportType(e.target.value as FileType)}>
            <option value="excel">Excel</option>
            <option value="csv">CSV</option>
          </select>
        </label>
        <button type="button" className="exp-btn-accent" onClick={() => fileInputRef.current?.click()}>
          {t("grid.import")}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept={importType === "csv" ? ".csv,text/csv" : ".xlsx,.xls"}
          className="exp-file-input"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void handleFileSelected(file);
            e.target.value = "";
          }}
        />
      </div>

      <h3 className="exp-section-title">{t("inquiry.result")}</h3>

      <div className="exp-import-body">
        <div className="exp-sheet-list">
          {workbook && workbook.SheetNames.length > 0 ? (
            workbook.SheetNames.map((name, i) => (
              <button
                key={name}
                type="button"
                className={`exp-sheet-item${i === sheetIndex ? " active" : ""}`}
                onClick={() => setSheetIndex(i)}
              >
                {name}
              </button>
            ))
          ) : (
            <div className="exp-sheet-empty">-</div>
          )}
        </div>
        <div ref={mountRef} className="exp-grid-mount exp-import-grid" />
      </div>

      <div className="exp-import-options">
        <label className="exp-checkbox">
          <input type="checkbox" checked={useHeader} onChange={(e) => setUseHeader(e.target.checked)} />
          {t("grid.import.include.header")}
        </label>
        <label className="exp-field">
          <span>{t("grid.import.password")}</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" className="exp-btn" onClick={handleDownloadTestFile}>
          {t("grid.import.download.testfile")}
        </button>
      </div>
    </>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="exp-desc">
      <div className="exp-desc-block">
        <h3 className="exp-desc-title">{t("grid.export")}</h3>
        <p className="exp-desc-body">{t("grid.export.desc")}</p>
      </div>
      <div className="exp-desc-block">
        <h3 className="exp-desc-title">{t("grid.import")}</h3>
        <p className="exp-desc-body">{t("grid.import.desc")}</p>
      </div>
    </section>
  );
}
