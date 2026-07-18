import { useMemo, useRef, useState } from "react";
import type { CellComponent, ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { FREEZEPANES_RECORDS } from "../../data/freezePanesRealData";
import { useFrozenRowsGrid } from "../../lib/tabulator/useFrozenRowsGrid";
import "./freezePanes.css";

type Translate = (key: string, fallback?: string) => string;

const FIELD_DEFS: ColumnDefinition[] = [
  { title: "No.", field: "no", width: 60, headerSort: false },
  { title: "First name", field: "first_name", width: 110, headerSort: false },
  { title: "Last name", field: "last_name", width: 110, headerSort: false },
  { title: "Email", field: "email", width: 230, headerSort: false },
  { title: "Gender", field: "gender", width: 90, headerSort: false },
  { title: "IP Address", field: "ip_address", width: 130, hozAlign: "right", headerSort: false },
  { title: "State", field: "state", width: 140, headerSort: false },
  { title: "Street", field: "street", width: 130, headerSort: false },
  { title: "Date", field: "date", width: 110, headerSort: false },
  { title: "Domain", field: "domain", width: 140, headerSort: false },
  { title: "GUID", field: "guid", width: 260, headerSort: false },
];

const ROW_HEIGHT = 38;
const GRID_HEIGHT = 480;

type FreezeAction = "rowFix" | "colFixL" | "colFixR" | "cellFix" | "fixFree";
type ColFreezeState = { mode: "none" | "left" | "right"; field: string };

const NUMBERED_RECORDS = FREEZEPANES_RECORDS.map((r, i) => ({ no: i + 1, ...r }));

/**
 * Nexacro grid::freezepanes.xfdl(메뉴 "틀 고정", 실제 menu_id 10800)를 React로 옮긴 화면.
 * 원본은 현재 선택된 셀(기본값: 3번째 행 "Last name" 컬럼 — dsList.rowposition=2 +
 * grdList.setCellPos(2))을 기준으로 버튼이나 우클릭 컨텍스트 메뉴로 행/좌측열/우측열/
 * 행열을 고정한다.
 *
 * 열 고정은 Tabulator 컬럼의 `frozen` 속성(첫/끝 연속 컬럼만 고정 가능 — 원본의 "선택
 * 컬럼까지 왼쪽 전부"/"선택 컬럼부터 오른쪽 전부" 요구사항과 정확히 맞아떨어짐)을 그대로 썼다.
 *
 * 행 고정은 세 가지를 직접 겪고 버린 뒤에야 이 방식(엑셀처럼 "고정 행 전용 미니 그리드"를
 * 스크롤 그리드 위에 별도로 얹는 방식)에 정착했다: (1) Tabulator 내장 `row.freeze()`는
 * 헤더 콘텐츠보다 그리드가 좁아 가로 스크롤이 생기는 이 화면(11개 컬럼, 1510px)에서
 * frozen-rows-holder가 헤더 콘텐츠 오른쪽(스크롤 밖)에 위치해버려 전혀 안 보이는 버그가
 * 있었다. (2) CSS `position:sticky`를 행에 직접 걸어봤지만, 프리징된 행과 스크롤 중인
 * 일반 행이 같은 행 목록 안에 섞여있어서 특정 스크롤 위치에서 둘의 픽셀 좌표가 우연히
 * 겹치며 서로 다른 행 내용이 뒤섞여 보이는 문제가 있었다(Playwright로 DOM 좌표를 직접
 * 찍어서 확인). (3) 최종적으로 정착한 "고정 행 전용 두 번째 Tabulator 인스턴스 + 가로
 * 스크롤 동기화" 방식은 이 화면에서 여러 차례 사용자 피드백을 거쳐 다듬은 뒤
 * `src/lib/tabulator/useFrozenRowsGrid.ts`로 재사용 가능한 훅으로 뽑아냈다 — 이후 다른
 * 화면에서 같은 "행 고정" 요구가 나오면 이 훅을 그대로 재사용하면 된다.
 */
export function FreezePanes() {
  const { t } = useLanguage();
  const selectedRef = useRef({ row: 2, field: "last_name" });
  const selectedElRef = useRef<HTMLElement | null>(null);
  const colFreezeRef = useRef<ColFreezeState>({ mode: "none", field: "" });
  const [frozenCount, setFrozenCount] = useState(0);

  function selectCell(cell: CellComponent) {
    // 원본은 셀 선택형 그리드(grdList.set_selecttype("cell"))라 선택된 셀에 하이라이트가
    // 있다. Tabulator의 내장 Range Selection(selectableRange)으로 한 번 만들어봤는데,
    // 라이브러리 자체가 "2개 이상 컬럼을 얼리면서 selectableRange를 같이 쓰면 예측
    // 불가 동작"이라고 경고하고 실제로도 그랬다(헤더가 흐려지고 이상한 줄이 생김) —
    // 이 화면은 여러 컬럼을 한꺼번에 얼리는 게 핵심 기능이라 그 조합을 피할 수 없어서,
    // 대신 직접 만든 테두리 박스 스타일(.fp-selected-cell)로 같은 느낌을 낸다.
    selectedElRef.current?.classList.remove("fp-selected-cell");
    const el = cell.getElement();
    el.classList.add("fp-selected-cell");
    selectedElRef.current = el;
    selectedRef.current = { row: grid.toAbsoluteRow(cell), field: cell.getColumn().getField() };
  }

  function buildColumns(): ColumnDefinition[] {
    const { mode, field } = colFreezeRef.current;
    const idx = FIELD_DEFS.findIndex((c) => c.field === field);
    return FIELD_DEFS.map((col, i) => ({
      ...col,
      frozen: mode === "left" ? i <= idx : mode === "right" ? i >= idx : false,
      cellClick: (_e, cell: CellComponent) => selectCell(cell),
      // Tabulator 타입 선언엔 contextMenu가 정적 배열만 허용하지만, 실제로는 함수도
      // 받아 매번 동적으로 메뉴를 만들 수 있다(10400 개인화의 headerContextMenu/
      // rowContextMenu와 같은 패턴 — Tabulator 런타임 소스로 확인됨).
      contextMenu: ((_e: MouseEvent, cell: CellComponent) => {
        selectCell(cell);
        return buildContextMenu(t);
      }) as unknown as ColumnDefinition["contextMenu"],
    }));
  }

  // 고정 행/스크롤 행 이중 그리드 구성, 가로 스크롤 동기화, 절대 인덱스 변환은
  // 재사용 훅(useFrozenRowsGrid, src/lib/tabulator)으로 분리했다 — 이 화면 전용
  // 로직(셀 선택 하이라이트, 컨텍스트 메뉴, 열 고정)만 아래에 남긴다.
  const grid = useFrozenRowsGrid({
    data: NUMBERED_RECORDS,
    frozenCount,
    indexField: "no",
    buildColumns,
    rowHeight: ROW_HEIGHT,
    gridHeight: GRID_HEIGHT,
    // 원본(grdList.set_selecttype("cell"))은 행이 아니라 셀 단위로 선택되는 그리드다.
    // Tabulator는 기본값이 selectableRows:"highlight"라 아무 것도 설정 안 해도 행
    // 전체에 마우스오버 하이라이트가 걸려 "행 선택형"처럼 보인다 — 꺼서 원본처럼
    // 셀 단위 상호작용만 남긴다(사용자 피드백으로 발견).
    tableOptions: { selectableRows: false },
    restoreTargetRow: selectedRef.current.row,
    onTablesReady: ({ getCell }) => {
      const { row, field } = selectedRef.current;
      const cell = getCell(row, field);
      if (cell) selectCell(cell);
    },
  });

  function applyColFreeze(mode: ColFreezeState["mode"], field: string) {
    colFreezeRef.current = { mode, field };
    grid.setColumnsOnBoth(buildColumns());
  }

  function runFreeze(action: FreezeAction, row: number, field: string) {
    // 원본 fnColFixL/fnColFixR/fnRowFix는 서로의 축을 건드리지 않는다 — 행고정 버튼은
    // fnRowFree()만 부르고 열 고정 상태는 그대로 둔다(반대도 마찬가지). 행열고정과
    // 취소만 둘 다 재설정한다.
    if (action === "fixFree") {
      applyColFreeze("none", "");
      setFrozenCount(0);
    } else if (action === "colFixL") {
      applyColFreeze("left", field);
    } else if (action === "colFixR") {
      applyColFreeze("right", field);
    } else if (action === "rowFix") {
      setFrozenCount(row + 1);
    } else if (action === "cellFix") {
      applyColFreeze("left", field);
      setFrozenCount(row + 1);
    }
  }

  function runFromMenu(action: FreezeAction, cell: CellComponent) {
    runFreeze(action, grid.toAbsoluteRow(cell), cell.getColumn().getField());
  }

  function buildContextMenu(t: Translate) {
    return (
      [
        { label: t("grid.freezepanes.btnRowFix"), action: "rowFix" },
        { label: t("grid.freezepanes.btnColFixL"), action: "colFixL" },
        { label: t("grid.freezepanes.btnColFixR"), action: "colFixR" },
        { label: t("grid.freezepanes.btnCellFix"), action: "cellFix" },
        { label: t("grid.freezepanes.brnFixFree"), action: "fixFree" },
      ] as const
    ).map((item) => ({
      label: item.label,
      action: (_e: MouseEvent, cell: CellComponent) => runFromMenu(item.action, cell),
    }));
  }

  const buttons = useMemo(
    () =>
      [
        { action: "rowFix" as const, key: "grid.freezepanes.btnRowFix", accent: false },
        { action: "colFixL" as const, key: "grid.freezepanes.btnColFixL", accent: false },
        { action: "colFixR" as const, key: "grid.freezepanes.btnColFixR", accent: false },
        { action: "cellFix" as const, key: "grid.freezepanes.btnCellFix", accent: false },
        { action: "fixFree" as const, key: "grid.freezepanes.brnFixFree", accent: true },
      ],
    [],
  );

  return (
    <main className="work">
      <div className="work-card react fp-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10800">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="fp-page-title">{t("grid.freezepanes.title")}</h1>
        <p className="fp-subtitle">{t("grid.freezepanes.subtitle")}</p>

        <div className="fp-toolbar">
          {buttons.map((b) => (
            <button
              key={b.action}
              type="button"
              className={`fp-btn${b.accent ? " fp-btn-accent" : ""}`}
              onClick={() => runFreeze(b.action, selectedRef.current.row, selectedRef.current.field)}
            >
              {t(b.key)}
            </button>
          ))}
        </div>

        <div ref={grid.frozenMountRef} className="fp-frozen-mount" />
        <div ref={grid.mainMountRef} className="fp-grid-mount" />

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="fp-desc">
      <div className="fp-desc-block">
        <h3 className="fp-desc-title">{t("grid.freezepanes.title")}</h3>
        <p className="fp-desc-body">{t("grid.freezepanes.desc")}</p>
      </div>
    </section>
  );
}
