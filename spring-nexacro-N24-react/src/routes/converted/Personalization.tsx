import { useEffect, useMemo, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnComponent, type ColumnDefinition, type RowComponent } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { PERSONALIZATION_ROWS, type PersonalizationRow } from "../../data/personalizationRealData";
import "./personalization.css";

type Translate = (key: string, fallback?: string) => string;

const HIDDEN_COLS_KEY = "grid.personalization.hiddenColumns";
const HIDDEN_ROWS_KEY = "grid.personalization.hiddenRows";

function loadHiddenColumns(): string[] {
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_COLS_KEY) ?? "[]");
  } catch {
    return [];
  }
}
function loadHiddenRowIds(): number[] {
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_ROWS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

// 원본 head band는 #(messageid 없음)/name/address/amount/date/company/approval(messageid는
// "approval"인데 fallback은 "OK") 순 — name/address/amount/date/company/approval은
// SortFilterFind 화면(grdSort 헤더)과 같은 실제 messageid라 그 키를 그대로 재사용한다.
const buildColumns = (t: Translate): ColumnDefinition[] => [
  { title: "#", field: "id", width: 56, headerSort: false },
  { title: t("name"), field: "name", headerSort: false },
  { title: t("address"), field: "address", headerSort: false },
  {
    title: t("amount"),
    field: "amount",
    hozAlign: "right",
    headerHozAlign: "right",
    headerSort: false,
    // 원본 실측: displaytype="currency" 셀은 U+FFE6(￦, fullwidth won sign) 접두사를 붙인다.
    formatter: (cell) => "￦" + Number(cell.getValue()).toLocaleString("en-US"),
  },
  { title: t("date"), field: "date", headerSort: false },
  { title: t("company"), field: "company", headerSort: false },
  {
    title: t("approval", "OK"),
    field: "approved",
    hozAlign: "center",
    headerHozAlign: "center",
    width: 70,
    headerSort: false,
    formatter: (cell) =>
      `<img src="/nexacro-icons/${cell.getValue() ? "img_grd_approval.png" : "img_grd_reject.png"}" alt="${cell.getValue() ? "approved" : "rejected"}" style="height:16px;vertical-align:middle;" />`,
  },
];

/**
 * Nexacro grid::personalization.xfdl(메뉴 "개인화", 실제 menu_id 10400)를 React로 옮긴 화면.
 * 원본은 컬럼 이동(드래그)/크기 조절/우클릭 컨텍스트 메뉴로 컬럼·행 숨기기를 지원하고,
 * "저장" 버튼으로 그 상태를 `nexacro.setPrivateProfile`(localStorage 대응)에 영구 저장해
 * 다음 접속 때도 유지한다 — Tabulator는 컬럼 이동(`movableColumns`)·크기 조절(기본 제공)·
 * 컬럼 숨기기(`column.hide()/show()`)를 그대로 제공하고, 행 숨기기는 내장 기능이 없어
 * 숨긴 id 집합 + `setFilter`로 직접 구현했다. 컨텍스트 메뉴는 Tabulator의
 * `headerContextMenu`(컬럼)/`rowContextMenu`(행) 옵션이 함수 형태를 지원해서(타입 선언엔
 * 정적 배열만 있지만 실제 구현은 함수도 받는다 — tabulator.js의 loadMenuEvent 참고) 매번
 * 우클릭 시점의 숨김 상태를 반영해 동적으로 만든다.
 * 메뉴 항목 라벨("Hide Column"/"Show Column"/"Show All Column"/"Hide Row"/"Show Row")은
 * 원본 ds_contextmenu·소스에 실제로 이렇게 하드코딩돼 있고 messageid가 없다 — 언어 전환과
 * 무관하게 항상 영문이라 t()로 옮기지 않았다. 단 개별 "숨긴 컬럼 보이기" 항목은 원본을
 * 실제로 우클릭해보니 "Show <컬럼명>"이 아니라 그 컬럼의 현재 헤더 텍스트 그대로만
 * 나온다(즉 로컬라이즈된 실제 캡션) — 그래서 접두어 없이 컬럼의 현재 title을 그대로 쓴다.
 * 행 쪽은 소스의 `"Row : " + (e.row+1)` 문자열 그대로 재현했다.
 * "저장" 버튼은 원본처럼 초기 비활성 상태이고, 헤더/행을 우클릭하는 순간(실제로 숨기기
 * 전에도) 활성화된다(Grid00_onrbuttondown의 실제 동작) — 클릭해서 숨기고 보이기만 해서는
 * 저장되지 않고, "저장" 버튼을 눌러야 localStorage에 반영된다.
 */
export function Personalization() {
  const { t, lang } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const hiddenRowIdsRef = useRef<Set<number>>(new Set(loadHiddenRowIds()));
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [tableReady, setTableReady] = useState(false);

  const applyRowFilter = () => {
    tableRef.current?.setFilter((row: PersonalizationRow) => !hiddenRowIdsRef.current.has(row.id));
  };

  const buildHeaderMenu = (_e: MouseEvent, _column: ColumnComponent) => {
    const table = tableRef.current!;
    const hidden = table.getColumns().filter((c) => !c.isVisible());
    const menu: any[] = [{ label: "Hide Column", action: (_ev: unknown, col: ColumnComponent) => col.hide() }, { separator: true }];
    if (hidden.length > 0) {
      // 원본 소스 실측: hidingInfos.length>0이면(숨긴 게 1개뿐이어도) "Show All Column"이
      // 항상 개별 항목들과 함께 나온다 — 개수 조건 없음.
      menu.push({ label: "Show All Column", action: () => hidden.forEach((c) => c.show()) });
      hidden.forEach((c) => {
        menu.push({ label: String(c.getDefinition().title), action: () => c.show() });
      });
    } else {
      menu.push({ label: "Show Column", disabled: true });
    }
    return menu;
  };

  const buildRowMenu = (_e: MouseEvent, _row: RowComponent) => {
    const menu: any[] = [
      { label: "Hide Row", action: (_ev: unknown, r: RowComponent) => hideRow(r.getData().id) },
      { separator: true },
    ];
    const hiddenIds = Array.from(hiddenRowIdsRef.current).sort((a, b) => a - b);
    if (hiddenIds.length > 0) {
      // 컬럼과 동일하게 개수 조건 없이 항상 "Show All Row"를 같이 보여준다.
      menu.push({ label: "Show All Row", action: () => showAllRows() });
      hiddenIds.forEach((id) => {
        menu.push({ label: `Row : ${id}`, action: () => showRow(id) });
      });
    } else {
      menu.push({ label: "Show Row", disabled: true });
    }
    return menu;
  };

  const hideRow = (id: number) => {
    hiddenRowIdsRef.current.add(id);
    applyRowFilter();
  };
  const showRow = (id: number) => {
    hiddenRowIdsRef.current.delete(id);
    applyRowFilter();
  };
  const showAllRows = () => {
    hiddenRowIdsRef.current.clear();
    applyRowFilter();
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // 컬럼을 만든 뒤 hide()를 호출하면(tableBuilt 시점이라도) fitColumns 레이아웃의 초기
    // 너비 계산과 경합해 시각적으로 반영되지 않는 경우가 있었다(Playwright로 재현 확인 —
    // isVisible()은 false인데 display는 그대로인 상태가 됨). 대신 컬럼 정의 자체에
    // `visible: false`를 처음부터 박아 넣으면 이 경합이 아예 발생하지 않는다.
    const hiddenFields = new Set(loadHiddenColumns());
    const columnsWithMenu: ColumnDefinition[] = buildColumns(t).map((col) => ({
      ...col,
      visible: !hiddenFields.has(col.field as string),
      // headerContextMenu 타입 선언은 정적 배열만 허용하지만 런타임은 함수도 받는다.
      headerContextMenu: buildHeaderMenu as unknown as ColumnDefinition["headerContextMenu"],
    }));

    const table = new Tabulator(mountRef.current, {
      data: PERSONALIZATION_ROWS.map((r) => ({ ...r })),
      layout: "fitColumns",
      height: "360px",
      movableColumns: true,
      rowContextMenu: buildRowMenu,
      columns: columnsWithMenu,
    });
    tableRef.current = table;

    table.on("tableBuilt", () => {
      table.setFilter((row: PersonalizationRow) => !hiddenRowIdsRef.current.has(row.id));
      setTableReady(true);
    });

    table.on("headerContext", () => setSaveEnabled(true));
    table.on("rowContext", () => setSaveEnabled(true));

    return () => {
      table.destroy();
      tableRef.current = null;
      setTableReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 언어가 바뀌면 헤더 타이틀만 갱신한다(컬럼을 통째로 재생성하면 숨김/이동/크기 상태가
  // 날아간다) — SortFilterFind.tsx의 언어 전환 패턴과 동일.
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (!tableReady) return;
    const table = tableRef.current;
    if (!table) return;
    buildColumns(t).forEach((def) => {
      const col = table.getColumn(def.field as string);
      if (col) col.updateDefinition({ title: def.title });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, tableReady]);

  const persistAndAlert = () => {
    const table = tableRef.current;
    if (!table) return;
    const hiddenCols = table.getColumns().filter((c) => !c.isVisible()).map((c) => c.getField());
    localStorage.setItem(HIDDEN_COLS_KEY, JSON.stringify(hiddenCols));
    localStorage.setItem(HIDDEN_ROWS_KEY, JSON.stringify(Array.from(hiddenRowIdsRef.current)));
    setSaveEnabled(true);
    // 원본도 messageid 없이 하드코딩된 영문 alert 문구를 그대로 쓴다(언어 전환과 무관).
    window.alert("Changes saved.");
  };

  const onSetDefault = () => {
    const table = tableRef.current;
    if (!table) return;
    table.getColumns().forEach((c) => c.show());
    hiddenRowIdsRef.current.clear();
    applyRowFilter();
    localStorage.removeItem(HIDDEN_COLS_KEY);
    localStorage.removeItem(HIDDEN_ROWS_KEY);
    // 원본 Button00_onclick도 초기화 직후 Button01(저장)을 그대로 눌러 "초기화된 상태"를
    // 다시 저장해버린다 — 그대로 재현.
    persistAndAlert();
  };

  return (
    <main className="work">
      <div className="work-card react pz-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10400">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="pz-page-title">{t("grid.personalization")}</h1>

        <div ref={mountRef} className="pz-grid-mount" />

        {/* 원본은 그리드 바로 아래, 우측 정렬로 "초기화"/"저장" 버튼이 온다(실측 좌표 확인). */}
        <div className="pz-toolbar">
          <button type="button" className="pz-btn" onClick={onSetDefault}>
            {t("grid.personalization.default")}
          </button>
          <button type="button" className="pz-btn primary" disabled={!saveEnabled} onClick={persistAndAlert}>
            {t("grid.personalization.save")}
          </button>
        </div>

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  const blocks = useMemo(
    () => [
      { title: t("grid.personalization"), body: t("grid.personalization.desc") },
      { title: t("grid.personalization.cellmoving"), body: t("grid.personalization.cellmoving.desc") },
      { title: t("grid.personalization.cellsizing"), body: t("grid.personalization.cellsizing.desc") },
      { title: t("grid.personalization.columnhiding"), body: t("grid.personalization.columnhiding.desc") },
      { title: t("grid.personalization.rowhiding"), body: t("grid.personalization.rowhiding.desc") },
      { title: t("grid.personalization.default"), body: t("grid.personalization.default.desc") },
    ],
    [t],
  );

  return (
    <section className="pz-desc">
      {blocks.map((b) => (
        <div className="pz-desc-block" key={b.title}>
          <h3 className="pz-desc-title">{b.title}</h3>
          <p className="pz-desc-body">{b.body}</p>
        </div>
      ))}
    </section>
  );
}
