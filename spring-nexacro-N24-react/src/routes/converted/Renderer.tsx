import { useEffect, useMemo, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type CellComponent, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import {
  CELL_DISPLAY_ROW,
  COMBO_OPTIONS,
  DETAIL_COMBO_OPTIONS,
  EXPRESSION_ROWS,
  HEAD_COMBO_OPTIONS,
  HEAD_CONTROL_ROWS,
  HEAD_MULTI_COMBO_OPTIONS,
  MULTI_FORMAT_ROWS,
  TREE_GROUPING_TREE,
  type ExpressionRow,
} from "../../data/rendererRealData";
import "./renderer.css";

type Translate = (key: string, fallback?: string) => string;

// 원본 maskeditformat 문자 마스크("#####{#####}" 등)를 실제로 적용한다. '#'는 그 자리의
// 원본 문자를 그대로 보여주고, '{'~'}' 안의 '#'는 '*'로 가려서 보여준다(중괄호 자체는
// 출력하지 않음) — Nexacro Studio 스크린샷(img_WF_gridMN02_1.png)에서 Mask 컬럼 실제
// 표시값이 "12345*****"인 것으로 이 의미를 확인했다.
function applyCharMask(pattern: string, value: string): string {
  let out = "";
  let vi = 0;
  let hidden = false;
  for (const ch of pattern) {
    if (ch === "{") {
      hidden = true;
      continue;
    }
    if (ch === "}") {
      hidden = false;
      continue;
    }
    if (ch === "#") {
      if (vi < value.length) {
        out += hidden ? "*" : value[vi];
        vi++;
      }
    } else {
      out += ch;
    }
  }
  return out;
}

// 원본 maskeditformat="#,##0"류 숫자 마스크 — 천단위 콤마만 적용한다(스크린샷
// img_WF_gridMN02_4a/4b.png에서 A/B 입력값이 "10,000" 형태로 표시되는 것으로 확인).
function formatThousands(value: number | string): string {
  return Number(value).toLocaleString("en-US");
}

// 원본을 Playwright로 직접 열어 실측: 멀티 포맷 그리드(Grid02)의 Date 컬럼만 요일이 붙는다
// (예: "2020-01-01 수") — 같은 화면의 셀 표시 유형 그리드(Grid00) Date/Calendar 컬럼에는
// 붙지 않는다(원본 자체의 그리드별 기본 서식 차이로 보임, 있는 그대로 재현). 영문 모드에서
// 실제로 어떻게 표시되는지는 이 세션에서 확인 못해, 한국어일 때만 요일을 붙이고 영문에서는
// 생략한다 — 확인되지 않은 값을 지어내지 않기 위한 보수적 선택.
const KO_WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
function formatMultiFormatDate(dateStr: string, lang: "ko" | "en"): string {
  if (lang !== "ko") return dateStr;
  const d = new Date(dateStr + "T00:00:00Z");
  return `${dateStr} ${KO_WEEKDAY[d.getUTCDay()]}`;
}

/**
 * Nexacro grid::renderer.xfdl(메뉴 "다양한 표현", 실제 menu_id 10200)를 React로 옮긴 화면.
 * 원본 소스(renderer.xfdl.js, renderer_desc.xfdl.js)를 직접 읽고, Playwright로 원본을 열어
 * DOM까지 대조해 5개 섹션(셀 표시 유형/헤드 Control 표시 유형/트리 그룹핑/멀티 포맷/표현식)의
 * 실제 데이터와 동작을 그대로 이식했다.
 *
 * 트리 그룹핑·헤드 Control·멀티 포맷·표현식은 실제로 여러 행의 데이터를 다루는 "진짜 그리드"라
 * Tabulator(ADR-006)로 구현했다 — 처음엔 일반 테이블로 만들었었는데, 그 결과 원본에서는 행별로
 * 개별 편집 가능한 Checkbox/Calendar/Radio/Combo가 읽기 전용으로 굳어 있었고, 트리도 전역
 * 펼치기/접기만 되고 행별 +/-가 안 됐다 — 사용자 피드백과 Playwright 재검증으로 확인 후
 * Tabulator 기반으로 다시 작성함.
 * 셀 표시 유형(Grid00)만 예외로 일반 테이블 마크업을 유지했다 — 원본 자체가 Dataset 1행을
 * Format XML의 서로 다른 두 Row 밴드로 나눠 17개의 완전히 다른 위젯 타입을 보여주는 카탈로그라,
 * "여러 행의 동일 컬럼 구조"를 전제하는 Tabulator의 행 모델과 애초에 안 맞는다.
 */
export function Renderer() {
  const { t } = useLanguage();

  return (
    <main className="work">
      <div className="work-card react rdr-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10200">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="rdr-page-title">{t("grid.renderer")}</h1>

        {/* 원본 desktop 레이아웃(large Layout의 move() y좌표)은 생성 순서(taborder)가 아니라
            헤드 Control 섹션(Static01_00 y=318)을 트리 그룹핑(Static02 y=579)보다 먼저 배치한다
            — Playwright로 원본을 직접 열어 렌더링 순서를 확인하고 맞췄다. */}
        <CellDisplaySection t={t} />
        <HeadControlSection t={t} />
        <TreeGroupingSection t={t} />
        <MultiFormatSection t={t} />
        <ExpressionSection t={t} />

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// 1. 셀 표시 유형 (Grid00, Dataset00 1행) — 원본 Format "default"의 row0/row1 셀 배치를
//    그대로 따른다. 원본에서 edittype이 있는 셀만 실제로 편집 가능하고(Calendar/Checkbox/
//    Combo/Radio/MaskEdit/Textarea/Edit/Button), 나머지(Currency/Date/Decoratetext/Image/
//    Mask/Number/Progressbar/None)는 표시 전용이다 — 그 구분을 그대로 재현했다.
// ---------------------------------------------------------------------------
function CellDisplaySection({ t }: { t: Translate }) {
  const [row, setRow] = useState({ ...CELL_DISPLAY_ROW });

  return (
    <section className="rdr-section">
      <h2 className="rdr-heading">{t("grid.cell.display.type")}</h2>
      <div className="rdr-table-scroll">
        <table className="rdr-cell-table">
          <thead>
            <tr>
              <th>Button</th>
              <th>Calendar</th>
              <th>Checkbox</th>
              <th>Combo</th>
              <th>Currency</th>
              <th>Date</th>
              <th>Decorate text</th>
              <th colSpan={2}>Radio</th>
            </tr>
            <tr>
              <th>Image</th>
              <th>Mask</th>
              <th>MaskEdit</th>
              <th>Number</th>
              <th>Progressbar</th>
              <th>Text</th>
              <th>Textarea</th>
              <th>Edit</th>
              <th>None</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button type="button" className="rdr-btn">
                  Button
                </button>
              </td>
              <td>
                <input
                  type="date"
                  className="rdr-input"
                  value={row.column0}
                  onChange={(e) => setRow((r) => ({ ...r, column0: e.target.value }))}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={row.column1}
                  onChange={(e) => setRow((r) => ({ ...r, column1: e.target.checked }))}
                />
              </td>
              <td>
                <select
                  className="rdr-input"
                  value={row.column2}
                  onChange={(e) => setRow((r) => ({ ...r, column2: e.target.value }))}
                >
                  {COMBO_OPTIONS.map((o) => (
                    <option key={o.code} value={o.code}>
                      {o.data}
                    </option>
                  ))}
                </select>
              </td>
              {/* 원본 실측: displaytype="currency" 셀은 U+FFE6(￦, fullwidth won sign) 접두사를 붙인다 */}
              <td className="rdr-num">{"￦" + row.column3.toLocaleString("en-US")}</td>
              <td>{row.column4}</td>
              <td>
                <span style={{ color: "red" }}>decorate</span> <u>text</u>
              </td>
              {/* 원본은 라디오 2개가 한 셀처럼 딱 붙어 보인다 — 별도 테두리/간격을 주지 않고
                  헤더처럼 병합된 하나의 영역 느낌으로 맞췄다(피드백 반영). */}
              <td colSpan={2} className="rdr-radio-pair">
                <input type="radio" name="rdr-cell-radio" checked={row.column10 === "0"} onChange={() => setRow((r) => ({ ...r, column10: "0" }))} />
                <input type="radio" name="rdr-cell-radio" checked={row.column10 === "1"} onChange={() => setRow((r) => ({ ...r, column10: "1" }))} />
              </td>
            </tr>
            <tr>
              <td>
                <img src={`/nexacro-icons/${row.column6}`} alt="Column6" className="rdr-cell-image" />
              </td>
              <td className="rdr-mono">{applyCharMask("#####{#####}", "1234567890")}</td>
              <td>
                <input
                  className="rdr-input"
                  value={row.column8}
                  onChange={(e) => setRow((r) => ({ ...r, column8: e.target.value }))}
                />
              </td>
              <td className="rdr-num">{formatThousands(9876543.21)}</td>
              <td>
                {/* 흰 글자를 항상 채워진 부분 위에 고정해서 진행률과 무관하게 잘 보이게 함(피드백 반영) */}
                <div className="rdr-progress">
                  <div className="rdr-progress-bar" style={{ width: "65%" }} />
                  <span className="rdr-progress-label">65</span>
                </div>
              </td>
              <td>Text</td>
              <td>
                <textarea
                  className="rdr-textarea"
                  value={row.column9}
                  onChange={(e) => setRow((r) => ({ ...r, column9: e.target.value }))}
                />
              </td>
              <td>
                <input
                  className="rdr-input"
                  value={row.column5}
                  onChange={(e) => setRow((r) => ({ ...r, column5: e.target.value }))}
                />
              </td>
              <td className="rdr-none-cell" />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2. 헤드 Control 표시 유형 (Grid001, Dataset001) — Tabulator 실그리드.
//    Playwright로 원본 DOM을 직접 확인한 결과: CheckBox/Combo/MultiCombo/Calendar/Radio
//    5개 컬럼은 행마다 개별적으로 편집 가능한 위젯(.cellcheckbox/.cellcombo/.cellmulticombo/
//    .cellcalendar/.cellradioitem)이다. Mask 컬럼은 원본도 정말 읽기 전용(:text만 있고 위젯
//    클래스 없음, 클릭해도 편집모드로 안 바뀜)이라 그대로 뒀다. Edit/TextArea 2개 컬럼도
//    원본은 읽기 전용인데, 사용자가 "다른 컬럼과의 일관성을 위해 편집 가능하게 해달라"고
//    명시적으로 요청해 이 둘만 의도적으로 원본과 다르게(편집 가능) 만들었다.
//    헤더 행의 라이브 컨트롤(체크박스 전체토글/콤보/멀티콤보/캘린더)은 Grid001_onheadvaluechanged와
//    동일하게 전체 행에 값을 전파한다.
// ---------------------------------------------------------------------------
function HeadControlSection({ t }: { t: Translate }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const [tableReady, setTableReady] = useState(false);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [headCombo, setHeadCombo] = useState("Code1");
  const [headMultiCombo, setHeadMultiCombo] = useState<string[]>(["Code1"]);
  const [headCalendar, setHeadCalendar] = useState("2023-11-07");

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: HEAD_CONTROL_ROWS.map((r) => ({ ...r, multiCombo: [...r.multiCombo] })),
      layout: "fitColumns",
      height: "260px",
      columns: [
        { title: "#", field: "no", width: 44, headerSort: false },
        // tickCross(아이콘), toggle(스위치) 둘 다 별로라는 피드백 — 제일 기본형인 네이티브
        // <input type="checkbox">로 정착. formatter가 실제 체크박스 엘리먼트를 그려주고,
        // cellClick으로 셀 전체를 클릭 영역으로 넓혔다(체크박스 자체를 정확히 안 눌러도 됨).
        {
          title: "CheckBox",
          field: "checkbox",
          hozAlign: "center",
          headerHozAlign: "center",
          headerSort: false,
          formatter: (cell) => {
            const input = document.createElement("input");
            input.type = "checkbox";
            input.checked = Boolean(cell.getValue());
            input.style.cursor = "pointer";
            input.addEventListener("click", (e) => e.preventDefault());
            return input;
          },
          cellClick: (_e, cell) => cell.setValue(!cell.getValue()),
        },
        { title: "Combo", field: "combo", editor: "list", editorParams: { values: HEAD_COMBO_OPTIONS }, headerSort: false },
        {
          title: "MultiCombo",
          field: "multiCombo",
          editor: "list",
          editorParams: { values: HEAD_MULTI_COMBO_OPTIONS, multiselect: true },
          formatter: (cell) => (cell.getValue() as string[]).join(","),
          headerSort: false,
        },
        // editorParams.format을 넣으면 Tabulator가 luxon.js를 요구하는데(설치 안 돼 있음)
        // 콘솔 에러만 내고 조용히 편집이 막힌다 — 저장값이 이미 ISO(yyyy-MM-dd)라
        // format 없이 기본 date input을 그대로 쓰면 luxon 없이도 정상 동작한다.
        { title: "Calendar", field: "calendar", editor: "date", headerSort: false },
        {
          title: "Radio",
          field: "radio",
          hozAlign: "center",
          headerHozAlign: "center",
          headerSort: false,
          formatter: (cell) => `<span class="rdr-radio-dot${cell.getValue() ? " checked" : ""}"></span>`,
          cellClick: (_e, cell) => cell.setValue(!cell.getValue()),
        },
        { title: "Mask", field: "mask", hozAlign: "right", headerHozAlign: "right", headerSort: false, formatter: (cell) => formatThousands(cell.getValue()) },
        // 원본은 이 두 컬럼(Edit/TextArea)이 실제로 읽기 전용이다(Format XML에 edittype 자체가
        // 없음 — Playwright로 원본을 직접 클릭해 편집모드로 안 바뀌는 것까지 확인함). 사용자가
        // "그래도 다른 컬럼과의 일관성을 위해 편집 가능하게 해달라"고 명시적으로 요청해 의도적으로
        // 원본과 다르게 만든 부분이다.
        { title: "Edit", field: "edit", editor: "input", headerSort: false },
        {
          title: "TextArea",
          field: "textarea",
          editor: "textarea",
          headerSort: false,
          formatter: (cell) => (cell.getValue() as string).replace(/\n/g, "<br/>"),
        },
      ],
    });
    tableRef.current = table;
    table.on("tableBuilt", () => setTableReady(true));
    return () => {
      table.destroy();
      tableRef.current = null;
      setTableReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const propagate = (field: string, value: unknown) => {
    const table = tableRef.current;
    if (!table || !tableReady) return;
    table.getRows().forEach((row) => row.update({ [field]: value }));
  };

  const onHeadCheckAll = () => {
    const next = !isCheckAll;
    setIsCheckAll(next);
    propagate("checkbox", next);
  };
  const onHeadCombo = (v: string) => {
    setHeadCombo(v);
    propagate("combo", v);
  };
  const onHeadMultiCombo = (values: string[]) => {
    setHeadMultiCombo(values);
    propagate("multiCombo", values);
  };
  const onHeadCalendar = (v: string) => {
    setHeadCalendar(v);
    propagate("calendar", v);
  };

  return (
    <section className="rdr-section">
      <h2 className="rdr-heading">{t("grid.cell.head.display.type")}</h2>
      {/* 원본의 헤드 라이브 컨트롤 행. Button/Radio/Mask/Edit/TextArea 헤드 컨트롤은
          원본에도 onheadvaluechanged 전파 로직이 없어 표시 전용으로만 재현했다. */}
      <div className="rdr-table-scroll">
        <table className="rdr-cell-table rdr-head-toolbar">
          <thead>
            <tr>
              <th>Button</th>
              <th>CheckBox</th>
              <th>Combo</th>
              <th>MultiCombo</th>
              <th>Calendar</th>
              <th>Radio</th>
              <th>Mask</th>
              <th>Edit</th>
              <th>TextArea</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button type="button" className="rdr-btn">
                  Button
                </button>
              </td>
              <td>
                <input type="checkbox" checked={isCheckAll} onChange={onHeadCheckAll} />
              </td>
              <td>
                <select className="rdr-input" value={headCombo} onChange={(e) => onHeadCombo(e.target.value)}>
                  {HEAD_COMBO_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  className="rdr-input"
                  multiple
                  value={headMultiCombo}
                  onChange={(e) => onHeadMultiCombo(Array.from(e.target.selectedOptions, (o) => o.value))}
                >
                  {HEAD_MULTI_COMBO_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input type="date" className="rdr-input" value={headCalendar} onChange={(e) => onHeadCalendar(e.target.value)} />
              </td>
              <td>
                <input type="radio" checked readOnly />
              </td>
              <td className="rdr-mono">{formatThousands(1234567)}</td>
              <td>ABCDEF</td>
              <td>ABCDEFGHI</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div ref={mountRef} className="rdr-grid-mount" />
    </section>
  );
}

// ---------------------------------------------------------------------------
// 3. 트리 그룹핑 (Grid01, Dataset01) — Tabulator dataTree. 원본은 전역 펼치기/접기
//    라디오뿐 아니라 Group1/Group2 행마다 개별 +/-(celltreeitem.treeitembutton)로도
//    접고 펼 수 있다 — Playwright로 실제 클릭해 확인(Group1만 접으면 Group2는 그대로 펼쳐진
//    채 유지됨). dataTree가 그 개별 토글을 기본 제공한다.
// ---------------------------------------------------------------------------
function TreeGroupingSection({ t }: { t: Translate }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: TREE_GROUPING_TREE,
      dataTree: true,
      dataTreeChildField: "_children",
      dataTreeStartExpanded: true,
      layout: "fitColumns",
      height: "230px",
      columns: [
        { title: "#", field: "no", width: 56, headerSort: false },
        { title: "Department", field: "team", headerSort: false },
        { title: "Count", field: "count", hozAlign: "right", headerHozAlign: "right", width: 100, headerSort: false },
      ],
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, []);

  const setAll = (expand: boolean) => {
    const table = tableRef.current;
    if (!table) return;
    table.getRows().forEach((row) => {
      if (expand) row.treeExpand();
      else row.treeCollapse();
    });
  };

  const onToggle = (next: boolean) => {
    setExpanded(next);
    setAll(next);
  };

  return (
    <section className="rdr-section">
      <h2 className="rdr-heading">{t("grid.tree.grouping")}</h2>
      <div className="rdr-radio-group">
        <label>
          <input type="radio" name="rdr-tree-status" checked={!expanded} onChange={() => onToggle(false)} />
          {t("grid.tree.grouping.collapse")}
        </label>
        <label>
          <input type="radio" name="rdr-tree-status" checked={expanded} onChange={() => onToggle(true)} />
          {t("grid.tree.grouping.expand")}
        </label>
      </div>
      <div ref={mountRef} className="rdr-grid-mount" />
    </section>
  );
}

// ---------------------------------------------------------------------------
// 4. 멀티 포맷 (Grid02, Dataset02) — Tabulator. Radio00으로 format1(Date/Name 합성)과
//    format2(Date/First Name/Last Name/Gender)를 전환하면 컬럼셋을 통째로 바꾼다.
// ---------------------------------------------------------------------------
function MultiFormatSection({ t }: { t: Translate }) {
  const { lang } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const [format, setFormat] = useState<"format1" | "format2">("format1");

  const data = useMemo(
    () => MULTI_FORMAT_ROWS.map((r) => ({ ...r, __name: `${r.first_name} ${r.last_name}` })),
    [],
  );

  const buildColumns = (fmt: "format1" | "format2", currentLang: "ko" | "en"): ColumnDefinition[] => {
    const dateCol: ColumnDefinition = {
      title: "Date",
      field: "date",
      headerSort: false,
      formatter: (cell) => formatMultiFormatDate(cell.getValue(), currentLang),
    };
    return fmt === "format1"
      ? [
          { title: "#", field: "__no", formatter: "rownum", width: 48, headerSort: false },
          dateCol,
          { title: "Name", field: "__name", headerSort: false },
        ]
      : [
          { title: "#", field: "__no", formatter: "rownum", width: 48, headerSort: false },
          dateCol,
          { title: "First Name", field: "first_name", headerSort: false },
          { title: "Last Name", field: "last_name", headerSort: false },
          { title: "Gender", field: "gender", headerSort: false },
        ];
  };

  const [tableReady, setTableReady] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data,
      layout: "fitColumns",
      height: "140px",
      columns: buildColumns(format, lang),
    });
    table.on("tableBuilt", () => setTableReady(true));
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
      setTableReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // 최초 마운트 때도 이 effect가 한 번 도는데, 그때는 생성자의 columns가 이미 같은 값이라
  // setColumns를 또 부를 필요가 없다 — tableBuilt 이전(초기화 중)에 부르면 내부 DOM이 아직
  // 없어 에러가 난다(실측: "Cannot read properties of null (reading 'firstChild')").
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (!tableReady) return;
    tableRef.current?.setColumns(buildColumns(format, lang));
  }, [format, lang, tableReady]);

  return (
    <section className="rdr-section">
      <h2 className="rdr-heading">{t("grid.multi.format")}</h2>
      <div className="rdr-radio-group">
        <label>
          <input type="radio" name="rdr-multi-format" checked={format === "format1"} onChange={() => setFormat("format1")} />
          Format 1
        </label>
        <label>
          <input type="radio" name="rdr-multi-format" checked={format === "format2"} onChange={() => setFormat("format2")} />
          Format 2
        </label>
      </div>
      <div ref={mountRef} className="rdr-grid-mount" />
    </section>
  );
}

// ---------------------------------------------------------------------------
// 5. 표현식 (Grid03, Dataset03) — Tabulator. a/b는 편집 가능한 숫자 입력(천단위 콤마로
//    표시), a+b/a*b는 formatter로 계산해 보여주는 파생 컬럼, c는 combo(Dataset04), d는
//    c=='Code1'이면 텍스트 입력, 아니면 combo(Dataset05)로 바뀌는 행별 동적 에디터다
//    (desktop 레이아웃 기준 format2 — 원본도 large 레이아웃에서 Grid03.formatid를 항상
//    "format2"로 고정함).
// ---------------------------------------------------------------------------
function ExpressionSection({ t }: { t: Translate }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: EXPRESSION_ROWS.map((r) => ({ ...r })),
      layout: "fitColumns",
      height: "140px",
      columns: [
        { title: "A", field: "a", editor: "number", formatter: (cell) => formatThousands(cell.getValue()), headerSort: false },
        { title: "B", field: "b", editor: "number", formatter: (cell) => formatThousands(cell.getValue()), headerSort: false },
        {
          title: "A+B",
          field: "__sum",
          hozAlign: "right",
          headerHozAlign: "right",
          headerSort: false,
          formatter: (cell) => {
            const d = cell.getRow().getData() as ExpressionRow;
            return formatThousands(d.a + d.b);
          },
        },
        {
          title: "A*B",
          field: "__product",
          hozAlign: "right",
          headerHozAlign: "right",
          headerSort: false,
          formatter: (cell) => {
            const d = cell.getRow().getData() as ExpressionRow;
            return formatThousands(d.a * d.b);
          },
        },
        {
          title: "C",
          field: "c",
          editor: "list",
          editorParams: { values: Object.fromEntries(COMBO_OPTIONS.map((o) => [o.code, o.data])) },
          headerSort: false,
          cellEdited: (cell: CellComponent) => {
            cell.getRow().update({ d: "" });
            cell.getRow().reformat();
          },
        },
        {
          title: "C=='Code1'?'text':'combo'",
          field: "d",
          headerSort: false,
          formatter: (cell) => {
            const d = cell.getRow().getData() as ExpressionRow;
            if (d.c === "Code1") return cell.getValue() ?? "";
            const opt = DETAIL_COMBO_OPTIONS.find((o) => o.code === cell.getValue());
            return opt ? opt.data : "-";
          },
          editor: (cell, onRendered, success, cancel) => {
            const d = cell.getRow().getData() as ExpressionRow;
            if (d.c === "Code1") {
              const input = document.createElement("input");
              input.type = "text";
              input.className = "rdr-input";
              input.value = (cell.getValue() as string) ?? "";
              onRendered(() => input.focus());
              input.addEventListener("blur", () => success(input.value));
              input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") success(input.value);
                if (e.key === "Escape") cancel(input.value);
              });
              return input;
            }
            const select = document.createElement("select");
            select.className = "rdr-input";
            const blank = document.createElement("option");
            blank.value = "";
            blank.textContent = "-";
            select.appendChild(blank);
            DETAIL_COMBO_OPTIONS.forEach((o) => {
              const opt = document.createElement("option");
              opt.value = o.code;
              opt.textContent = o.data;
              select.appendChild(opt);
            });
            select.value = (cell.getValue() as string) ?? "";
            onRendered(() => select.focus());
            select.addEventListener("change", () => success(select.value));
            select.addEventListener("blur", () => success(select.value));
            return select;
          },
        },
      ],
    });
    table.on("cellEdited", (cell: CellComponent) => {
      if (cell.getField() === "a" || cell.getField() === "b") cell.getRow().reformat();
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, []);

  return (
    <section className="rdr-section">
      <h2 className="rdr-heading">{t("grid.expression")}</h2>
      <div ref={mountRef} className="rdr-grid-mount" />
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. 설명 영역 — 원본 grid::renderer_desc.xfdl(work.xfdl의 divDesc). 텍스트는 실제
//    stringresource, 이미지는 Nexacro Studio "Grid Contents Editor" 스크린샷을 그대로 옮겼다
//    (원본도 개발툴 캡처일 뿐 실제 데모 데이터 렌더링 이미지가 아니라 언어별로 다르지 않다).
// ---------------------------------------------------------------------------
function DescriptionSection({ t }: { t: Translate }) {
  const blocks = useMemo(
    () => [
      { title: t("grid.cell.display.type"), body: t("grid.cell.display.type.desc"), images: ["img_WF_gridMN02_1.png"] },
      { title: t("grid.tree.grouping"), body: t("grid.tree.grouping.desc"), images: ["img_WF_gridMN02_2.png"] },
      {
        title: t("grid.multi.format"),
        body: `${t("grid.multi.format.desc")}\n\n${t("grid.multi.format.editor.desc")}`,
        images: ["img_WF_gridMN02_3a.png", "img_WF_gridMN02_3b.png"],
      },
      {
        title: t("grid.expression"),
        body: t("grid.expression.desc"),
        images: ["img_WF_gridMN02_4a.png", "img_WF_gridMN02_4b.png", "img_WF_gridMN02_4c.png"],
      },
    ],
    [t],
  );

  return (
    <section className="rdr-desc">
      {blocks.map((b) => (
        <div className="rdr-desc-block" key={b.title}>
          <h3 className="rdr-desc-title">{b.title}</h3>
          <p className="rdr-desc-body">{b.body}</p>
          <div className="rdr-desc-images">
            {b.images.map((src) => (
              <img key={src} src={`/nexacro-icons/${src}`} alt={b.title} className="rdr-desc-image" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
