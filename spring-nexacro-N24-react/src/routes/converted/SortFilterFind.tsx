import { useEffect, useMemo, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { SORT_DATA } from "../../data/sortRealData";
import { FILTER_FIND_DATA, type FilterFindRow } from "../../data/filterFindRealData";
import { MultiSortPopup, type SortItem, type SortColumnOption } from "./MultiSortPopup";
import { ColumnFilterPopup } from "./ColumnFilterPopup";
import { FindPanel } from "./FindPanel";
import { useLanguage } from "../../shell/LanguageContext";
import "./sortFilterFind.css";
import "./popups.css";

type Translate = (key: string, fallback?: string) => string;

// grdSort 헤더는 원본에서 실제 messageid(name/date/amount/address/company)로 localize된다
// (function.xfdl.js의 Format XML, TEXT("name","Name") 등) — 이 필드->키 매핑 순서대로
// 언어가 바뀔 때 Tabulator 컬럼 title을 다시 계산한다.
const SORT_FIELD_KEYS: { field: string; key: string }[] = [
  { field: "name", key: "name" },
  { field: "date", key: "date" },
  { field: "amount", key: "amount" },
  { field: "address", key: "address" },
  { field: "company", key: "company" },
  { field: "approval", key: "approval" },
];

const buildSortColumnOptions = (t: Translate): SortColumnOption[] =>
  SORT_FIELD_KEYS.map(({ field, key }) => ({ field, label: t(key) }));

// headerSort는 전부 꺼둔다 — Tabulator 자체 정렬과 우리가 만든 Ctrl+클릭 다중정렬 로직이
// 같은 클릭 이벤트를 두고 충돌하는 걸 막기 위해, 정렬은 아래 커스텀 클릭 핸들러가 전담한다.
const buildSortColumns = (t: Translate): ColumnDefinition[] => [
  { title: "", field: "chk", formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", headerSort: false, width: 40 },
  { title: t("name"), field: "name", headerSort: false },
  { title: t("date"), field: "date", headerSort: false },
  {
    title: t("amount"),
    field: "amount",
    hozAlign: "right",
    headerHozAlign: "right",
    headerSort: false,
    formatter: (cell) => Number(cell.getValue()).toLocaleString("en-US"),
  },
  { title: t("address"), field: "address", headerSort: false },
  { title: t("company"), field: "company", headerSort: false },
  {
    title: t("approval"),
    field: "approval",
    hozAlign: "center",
    headerHozAlign: "center",
    width: 100,
    headerSort: false,
    formatter: (cell) =>
      `<img src="/nexacro-icons/${cell.getValue() ? "img_grd_approval.png" : "img_grd_reject.png"}" alt="${cell.getValue() ? "approved" : "rejected"}" style="height:16px;vertical-align:middle;" />`,
  },
];

// 원본 grid::function_desc.xfdl(데스크톱에서 work.xfdl의 divDesc가 divMain 바로 아래에
// 인라인으로 붙여서 보여주는 설명 영역)을 그대로 옮긴 것. 텍스트는 실제 stringresource,
// 이미지는 정렬 설명 아래에만 붙는 Static03/04(cssClass sta_WF_con01/con02, 실제 배경
// 이미지 img_con01.png/img_con02.png)를 그대로 옮겼다 — ①헤더 우클릭 컨텍스트 메뉴
// (Asc/Desc/Multi Sort, Filter/Clear Filter, Freeze/Release Col) ②그 메뉴에서 'Multi
// Sort'를 골랐을 때 뜨는 팝업. 원본도 이 영역에서는 정적 예시 그림일 뿐 실제로 동작하는
// 우클릭 메뉴가 아니라서(우리 그리드도 다중 정렬 버튼으로 같은 팝업을 이미 띄울 수 있다),
// 그림만 그대로 옮기고 별도의 우클릭 메뉴 UI를 새로 만들지는 않았다. 필터 설명의 '조건부
// 필터' 버튼은 이 화면(function.xfdl)의 실제 코드 어디에도 없어 텍스트만 옮겼다. 이미지는
// 고정 비트맵이라 언어를 바꿔도 그림 속 영문 글자는 그대로다 — 원본도 마찬가지다.
const buildDescriptions = (t: Translate): { title: string; body: string; images?: { src: string; alt: string }[] }[] => [
  {
    title: t("grid.function.sort"),
    body: t("grid.function.sort.desc"),
    images: [
      { src: "/nexacro-icons/img_con01.png", alt: "context menu" },
      { src: "/nexacro-icons/img_con02.png", alt: "multi sort popup" },
    ],
  },
  { title: t("grid.function.filter"), body: t("grid.function.filter.desc") },
  { title: t("grid.function.search"), body: t("grid.function.search.desc") },
];

const FILTER_FIELDS: { field: keyof FilterFindRow; label: string }[] = [
  { field: "firstName", label: "First name" },
  { field: "lastName", label: "Last name" },
  { field: "email", label: "Email" },
  { field: "gender", label: "Gender" },
  { field: "ipAddress", label: "IP Address" },
  { field: "state", label: "State" },
  { field: "street", label: "Street" },
  { field: "date", label: "Date" },
  { field: "domain", label: "Domain" },
  { field: "guid", label: "GUID" },
];

function distinctValuesFor(field: keyof FilterFindRow): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const row of FILTER_FIND_DATA) {
    const v = String(row[field]);
    if (!seen.has(v)) {
      seen.add(v);
      out.push(v);
    }
  }
  return out;
}

/**
 * Nexacro grid::function.xfdl(메뉴 "정렬, 필터, 찾기", 실제 menu_id 10100)를 React로 옮긴 화면.
 * ADR-006이 정한 Tabulator로 재구현했고, 원본 소스(function.xfdl.js, GridSortPop.xfdl.js,
 * GridFilterPop.xfdl.js)를 직접 읽어 Multi Sort 팝업 / 컬럼별 체크리스트 필터 팝업 / Init 버튼 /
 * 5옵션 Find까지 동작을 그대로 이식했다. 데이터도 원본 Dataset의 실제 값(Sort 28행, Filter·Find
 * 공유 500행)을 그대로 옮겼다.
 */
export function SortFilterFind() {
  const { lang, t } = useLanguage();
  const sortColumnOptions = useMemo(() => buildSortColumnOptions(t), [lang]); // eslint-disable-line react-hooks/exhaustive-deps
  const descriptions = useMemo(() => buildDescriptions(t), [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const sortMountRef = useRef<HTMLDivElement | null>(null);
  const sortTableRef = useRef<Tabulator | null>(null);
  const [sortTableReady, setSortTableReady] = useState(false);
  const [multiSortOpen, setMultiSortOpen] = useState(false);
  const [sortItems, setSortItems] = useState<SortItem[]>([]);

  const filterMountRef = useRef<HTMLDivElement | null>(null);
  const filterTableRef = useRef<Tabulator | null>(null);
  const [filterPopupField, setFilterPopupField] = useState<keyof FilterFindRow | null>(null);
  const [columnFilters, setColumnFilters] = useState<Partial<Record<keyof FilterFindRow, Set<string>>>>({});

  const filterColumns: ColumnDefinition[] = useMemo(
    () => [
      { title: "No.", field: "__no", formatter: "rownum", width: 56, headerSort: false },
      ...FILTER_FIELDS.map(
        ({ field, label }): ColumnDefinition => ({
          title: label,
          field,
          widthGrow: field === "email" || field === "guid" ? 2 : 1,
          minWidth: 80,
          headerSort: false,
          cssClass: "has-filter-icon",
        }),
      ),
    ],
    [],
  );

  // .tabulator-col-title는 overflow:hidden이라 titleFormatter로 라벨 옆에 아이콘을 같이 넣으면
  // 라벨이 길 때 아이콘이 레이아웃상 자리는 있지만 실제로는 잘려서 클릭이 안 된다. 그래서 아이콘
  // 버튼은 titleFormatter가 아니라, 클리핑되지 않는 .tabulator-col-content의 형제로 직접
  // 심어서 오른쪽 끝에 절대위치시킨다 — 라벨 길이와 완전히 무관해진다.
  const mountFilterIcons = (table: Tabulator) => {
    FILTER_FIELDS.forEach(({ field }) => {
      const colEl = table.getColumn(field).getElement();
      const content = colEl.querySelector(".tabulator-col-content");
      if (!content || content.querySelector(".grid-filter-icon-btn")) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "grid-filter-icon-btn";
      btn.dataset.field = field;
      btn.innerHTML = `<img src="/nexacro-icons/grd_filter_init.png" alt="filter" />`;
      content.appendChild(btn);
    });
  };

  useEffect(() => {
    if (!sortMountRef.current) return;
    const table = new Tabulator(sortMountRef.current, {
      data: SORT_DATA,
      layout: "fitColumns",
      height: "360px",
      columns: buildSortColumns(t),
    });
    sortTableRef.current = table;
    table.on("tableBuilt", () => setSortTableReady(true));

    const updateSortIndicators = () => {
      const el = sortMountRef.current;
      if (!el) return;
      const sorters = table.getSorters();
      el.querySelectorAll<HTMLElement>(".tabulator-col").forEach((col) => {
        col.querySelector(".sort-indicator")?.remove();
        const field = col.getAttribute("tabulator-field");
        const idx = sorters.findIndex((s) => String(s.field) === field);
        if (idx === -1 || field === "chk") return;
        const span = document.createElement("span");
        span.className = "sort-indicator";
        span.textContent = ` ${sorters[idx].dir === "asc" ? "▲" : "▼"}${sorters.length > 1 ? idx + 1 : ""}`;
        col.querySelector(".tabulator-col-title")?.appendChild(span);
      });
    };

    table.on("dataSorted", (sorters) => {
      setSortItems(sorters.map((s) => ({ field: String(s.field), dir: s.dir as "asc" | "desc" })));
      updateSortIndicators();
    });

    // headerSort를 꺼뒀으므로 정렬은 이 클릭 핸들러가 전담한다.
    // 일반 클릭 = 단일 컬럼 정렬(asc→desc→해제 토글), Ctrl/⌘+클릭 = 원본처럼 다중정렬 누적.
    const el = sortMountRef.current;
    const onHeaderClick = (e: MouseEvent) => {
      const col = (e.target as HTMLElement).closest<HTMLElement>(".tabulator-col");
      const field = col?.getAttribute("tabulator-field");
      if (!field || field === "chk") return;
      const current = table.getSorters().map((s) => ({ field: String(s.field), dir: s.dir as "asc" | "desc" }));
      const idx = current.findIndex((s) => s.field === field);
      let next: SortItem[];
      if (e.ctrlKey || e.metaKey) {
        if (idx === -1) next = [...current, { field, dir: "asc" }];
        else if (current[idx].dir === "asc") next = current.map((s, i) => (i === idx ? { ...s, dir: "desc" as const } : s));
        else next = current.filter((_, i) => i !== idx);
      } else {
        if (idx === -1 || current.length > 1) next = [{ field, dir: "asc" }];
        else if (current[idx].dir === "asc") next = [{ field, dir: "desc" }];
        else next = [];
      }
      table.setSort(next.map((s) => ({ column: s.field, dir: s.dir })));
    };
    el.addEventListener("click", onHeaderClick);

    return () => {
      el.removeEventListener("click", onHeaderClick);
      table.destroy();
      sortTableRef.current = null;
      setSortTableReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 언어가 바뀌면 grdSort 헤더 타이틀만 갱신한다 — setColumns로 통째로 다시 만들면 지금
  // 적용 중인 정렬/스크롤 상태가 날아가서 컬럼 단위 updateDefinition만 쓴다. tableBuilt
  // 전에 getColumn을 부르면 false를 반환해 updateDefinition 호출이 죽으므로 ready로 막는다.
  useEffect(() => {
    const table = sortTableRef.current;
    if (!table || !sortTableReady) return;
    SORT_FIELD_KEYS.forEach(({ field, key }) => {
      const col = table.getColumn(field);
      if (col && typeof col.updateDefinition === "function") col.updateDefinition({ title: t(key) });
    });
  }, [lang, sortTableReady]); // eslint-disable-line react-hooks/exhaustive-deps

  const openMultiSort = () => {
    // 팝업이 항상 "지금 그리드에 실제로 걸려있는" 정렬 상태를 보여주도록 헤더 클릭(Ctrl+클릭 포함)
    // 으로 바뀐 상태까지 매번 다시 읽어온다 — 팝업 자체 상태(sortItems)만 믿지 않는다.
    const live = sortTableRef.current?.getSorters().map((s) => ({ field: String(s.field), dir: s.dir as "asc" | "desc" })) ?? [];
    setSortItems(live);
    setMultiSortOpen(true);
  };

  const [filterTableReady, setFilterTableReady] = useState(false);

  useEffect(() => {
    if (!filterMountRef.current) return;
    const table = new Tabulator(filterMountRef.current, {
      data: FILTER_FIND_DATA,
      // fitColumns는 컬럼 11개를 컨테이너 폭에 억지로 욱여넣어서 헤더 텍스트가 다 잘렸다.
      // fitData로 바꿔 각 컬럼이 내용에 맞는 폭을 갖게 하고, 넘치는 부분은 그리드 자체의
      // 가로 스크롤로 처리한다.
      layout: "fitData",
      height: "380px",
      columns: filterColumns,
    });
    table.on("tableBuilt", () => {
      setFilterTableReady(true);
      mountFilterIcons(table);
    });
    filterTableRef.current = table;

    const el = filterMountRef.current;
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>(".grid-filter-icon-btn");
      if (btn?.dataset.field) setFilterPopupField(btn.dataset.field as keyof FilterFindRow);
    };
    el.addEventListener("click", onClick);

    return () => {
      el.removeEventListener("click", onClick);
      table.destroy();
      filterTableRef.current = null;
      setFilterTableReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // columnFilters가 바뀔 때마다 실제 필터를 다시 적용하고, 필터 아이콘 활성 표시를 직접 갱신
  useEffect(() => {
    const table = filterTableRef.current;
    if (!table || !filterTableReady) return;
    table.setFilter((rowData: FilterFindRow) => {
      for (const [field, allowed] of Object.entries(columnFilters)) {
        if (allowed && !allowed.has(String(rowData[field as keyof FilterFindRow]))) return false;
      }
      return true;
    });

    const el = filterMountRef.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>(".grid-filter-icon-btn").forEach((btn) => {
      const field = btn.dataset.field as keyof FilterFindRow | undefined;
      const active = Boolean(field && columnFilters[field]);
      btn.classList.toggle("active", active);
      const img = btn.querySelector("img");
      if (img) img.src = `/nexacro-icons/${active ? "grd_filter_apply.png" : "grd_filter_init.png"}`;
    });
  }, [columnFilters, filterTableReady]);

  const applyMultiSort = (items: SortItem[]) => {
    setSortItems(items);
    sortTableRef.current?.setSort(items.map((i) => ({ column: i.field, dir: i.dir })));
    setMultiSortOpen(false);
  };

  const initFilters = () => setColumnFilters({});

  return (
    <main className="work">
      <div className="work-card react">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10100">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <section className="sff-section">
          <h2 className="sff-heading">{t("grid.function.sort")}</h2>
          <p className="sff-hint">{t("grid.function.sort.title.desc")}</p>
          <p className="sff-hint sff-hint-note">{t("sff.macHint")}</p>
          <button className="work-toggle" onClick={openMultiSort}>
            {t("grid.function.sort.button")}
            {sortItems.length > 0 ? ` (${sortItems.length})` : ""}
          </button>
          <div ref={sortMountRef} className="sort-grid-mount" style={{ marginTop: 10 }} />
        </section>

        <section className="sff-section">
          <h2 className="sff-heading">{t("grid.function.filter")}</h2>
          <button className="work-toggle" onClick={initFilters}>
            {t("grid.dynamic.clear")}
          </button>
          <div ref={filterMountRef} className="filter-grid-mount" style={{ marginTop: 10 }} />
        </section>

        <section className="sff-section">
          <h2 className="sff-heading">{t("grid.function.find")}</h2>
          <FindPanel data={FILTER_FIND_DATA} />
        </section>

        <section className="sff-desc">
          {descriptions.map((d) => (
            <div className="sff-desc-block" key={d.title}>
              <h3 className="sff-desc-title">{d.title}</h3>
              <p className="sff-desc-body">{d.body}</p>
              {d.images && (
                <div className="sff-desc-images">
                  {d.images.map((img) => (
                    <img key={img.src} src={img.src} alt={img.alt} className="sff-desc-image" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {multiSortOpen && (
        <MultiSortPopup
          columns={sortColumnOptions}
          initial={sortItems}
          onApply={applyMultiSort}
          onClose={() => setMultiSortOpen(false)}
        />
      )}

      {filterPopupField && (
        <ColumnFilterPopup
          columnLabel={FILTER_FIELDS.find((f) => f.field === filterPopupField)!.label}
          values={distinctValuesFor(filterPopupField)}
          initialChecked={columnFilters[filterPopupField] ?? null}
          columnType={filterPopupField === "date" ? "date" : "string"}
          onApply={(checked) =>
            setColumnFilters((prev) => {
              const next = { ...prev };
              if (checked) next[filterPopupField] = checked;
              else delete next[filterPopupField];
              return next;
            })
          }
          onClose={() => setFilterPopupField(null)}
        />
      )}
    </main>
  );
}
