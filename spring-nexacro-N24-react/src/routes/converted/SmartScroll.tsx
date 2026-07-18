import { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { SMARTSCROLL_RECORDS, type SmartScrollRecord } from "../../data/smartScrollRealData";
import "./smartScroll.css";

const GRID_HEIGHT = 480;
// 원본 Format XML의 <Row size="46"/> 그대로 — 아래 플로팅 행 위치 계산이 실제 행 높이와
// 어긋나지 않으려면 Tabulator rowHeight를 원본과 동일하게 고정해야 한다.
const ROW_HEIGHT = 46;
// 원본 Grid.js(nexacrolib/component/Grid.js)의 _floating_gap/_floating_row_border/
// _floating_row_shadow 상수를 그대로 가져옴.
const FLOATING_GAP = 3;
const FLOATING_ROW_BORDER = "1px solid gray";
const FLOATING_ROW_SHADOW = "1px 1px 12px gray";

// 원본 dsGridFastVScroll Dataset의 실제 행 순서(코드값) — Radio의 direction="vertical" +
// columncount="3"은 이 순서를 위에서 아래로 채우고 그 다음 컬럼으로 넘어간다(가로가 아니라
// 세로 우선). 즉 [기본, 스크롤위치] [상단, 상하단] [중앙, 상중하단] 3열 2행 배치가 된다
// (원본 화면 스크린샷으로 배치 확인).
const SCROLL_TYPE_COLUMNS: { code: string; key: string }[][] = [
  [
    { code: "default", key: "grid.smartscroll.default" },
    { code: "trackbarfollow", key: "grid.smartscroll.trackbarfollow" },
  ],
  [
    { code: "topdisplay", key: "grid.smartscroll.topdisplay" },
    { code: "topbottomdisplay", key: "grid.smartscroll.topbottomdisplay" },
  ],
  [
    { code: "centerdisplay", key: "grid.smartscroll.centerdisplay" },
    { code: "topcenterbottomdisplay", key: "grid.smartscroll.topcenterbottomdisplay" },
  ],
];

// No./Chk/Gender 포맷은 Tabulator 컬럼과 플로팅 행 양쪽에서 똑같이 써야 해서 컬럼 정의와
// 분리된 순수 함수로 뽑아둔다.
function formatGender(v: string): string {
  const color = v === "Male" ? "blue" : "red";
  return `<span style="color:${color}">${v}</span>`;
}
function formatChk(ok: boolean): string {
  return `<img src="/nexacro-icons/${ok ? "img_grd_approval.png" : "img_grd_reject.png"}" alt="${ok ? "approved" : "rejected"}" style="height:16px;vertical-align:middle;" />`;
}

const COLUMNS: ColumnDefinition[] = [
  { title: "No.", field: "__no", formatter: "rownum", width: 70, headerSort: false },
  { title: "First name", field: "first_name", width: 100, headerSort: false },
  { title: "Last name", field: "last_name", width: 100, headerSort: false },
  { title: "Email", field: "email", width: 240, headerSort: false },
  {
    title: "Gender",
    field: "gender",
    width: 68,
    headerSort: false,
    // 원본 cssclass="expr:gender == 'Male' ? 'grd_txtBlue' : 'grd_txtRed'"(색상값은
    // xcssrc 테마에 color:blue/color:red로 그대로 정의돼 있음)를 인라인 스타일로 재현.
    formatter: (cell) => formatGender(String(cell.getValue())),
  },
  { title: "IP Address", field: "ip_address", width: 120, hozAlign: "right", headerSort: false },
  {
    title: "Chk",
    field: "ok",
    width: 48,
    hozAlign: "center",
    headerSort: false,
    // 원본 displaytype="imagecontrol" + bind:ok(imagerc::img_grd_approval.png /
    // img_grd_reject.png) — SortFilterFind.tsx의 동일 아이콘 컬럼과 같은 패턴.
    formatter: (cell) => formatChk(Boolean(cell.getValue())),
  },
  { title: "State", field: "state", width: 140, headerSort: false },
  { title: "Street", field: "street", width: 150, headerSort: false },
  { title: "Date", field: "date", width: 100, headerSort: false },
  { title: "Domain", field: "domain", width: 200, headerSort: false },
  { title: "GUID", field: "guid", width: 300, headerSort: false },
];

// 플로팅 행(들)에 실제 데이터를 그려 넣는다 — Tabulator 컬럼과 같은 순서/너비/포맷을
// 그대로 따라간다(폭 합 1508px, COLUMNS와 동일).
function renderFloatRow(el: HTMLElement, record: SmartScrollRecord, rowNo: number) {
  el.innerHTML = COLUMNS.map((col) => {
    const width = col.width as number;
    const field = col.field as string;
    let content: string;
    if (field === "__no") content = String(rowNo);
    else if (field === "gender") content = formatGender(record.gender);
    else if (field === "ok") content = formatChk(record.ok);
    else content = String((record as unknown as Record<string, unknown>)[field] ?? "");
    const align = col.hozAlign === "right" ? "right" : col.hozAlign === "center" ? "center" : "left";
    return `<div style="width:${width}px;flex-shrink:0;padding:4px 8px;box-sizing:border-box;text-align:${align};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${content}</div>`;
  }).join("");
}

/**
 * Nexacro grid::smartscroll.xfdl(메뉴 "스마트 스크롤", 실제 menu_id 10900)를 React로 옮긴 화면.
 *
 * 원본 `grdList.fastvscrolltype`의 정확한 동작은 Playwright로 원본 스크롤바 드래그를 재현할
 * 수 없어서(합성 마우스/포인터 이벤트에 트랙바가 반응하지 않음) 처음엔 추측으로 남겨뒀었다.
 * 이후 nexacrolib/component/Grid.js(원본 런타임 소스, 미니파이됐지만 읽을 수 있음)의
 * `set_fastvscrolltype`/`_floatingScrollRows_callback`/`_createHighlightRow`를 직접 읽어
 * 정확한 로직을 확인했다:
 *   - `_use_blindscroll`이 true인 타입(default 제외 전부)은 스크롤 중 실제 그리드 바디 위에
 *     테두리(`1px solid gray`)+그림자(`1px 1px 12px gray`)가 있는 "떠 있는 미리보기 행"을
 *     1~3개 겹쳐 보여준다 — 진짜 데이터(현재 스크롤 위치에 해당하는 실제 행)를 그대로
 *     보여주는 행이지, 단순 라벨/배지가 아니다.
 *   - topdisplay: 뷰포트 맨 위(gap 3px)에 현재 맨 위 행 1개.
 *   - centerdisplay: 뷰포트 정중앙에 현재 중앙 행 1개.
 *   - topbottomdisplay: 맨 위 + 맨 아래 2개(각각 현재 화면 첫/마지막 행).
 *   - topcenterbottomdisplay: 위 세 개(맨 위/중앙/맨 아래) 전부.
 *   - trackbarfollow: 1개, 스크롤바 트랙바의 세로 위치 비율(fraction = scrollTop /
 *     (scrollHeight-clientHeight))만큼 뷰포트 안에서 위→아래로 부드럽게 움직이며, 그 위치에
 *     해당하는 행을 보여준다.
 *   - default: 아무 것도 안 뜬다(원본 그대로 스크롤).
 * 원본은 이 동안 실제 바디를 "가림 처리"(`_setBlindBody`)해서 렌더링 비용을 줄이는데, 우리
 * 그리드는 Tabulator 가상 스크롤로 이미 10,000행이 문제없이 부드러워서 그 가림 처리까지
 * 따라 하지는 않는다 — 사용자가 실제로 보고 상호작용하는 신호(떠 있는 미리보기 행)만
 * 재현한다. 스크롤이 멈추면(약 300ms 후) 원본처럼 사라진다.
 */
export function SmartScroll() {
  const { t } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const scrollTypeRef = useRef("default");
  const [scrollType, setScrollType] = useState("default");

  useEffect(() => {
    scrollTypeRef.current = scrollType;
  }, [scrollType]);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: SMARTSCROLL_RECORDS,
      height: `${GRID_HEIGHT}px`,
      rowHeight: ROW_HEIGHT,
      selectableRows: false,
      columns: COLUMNS,
    });
    tableRef.current = table;

    let holder: HTMLElement | null = null;
    let headerHeight = 0;
    const floatEls: Record<string, HTMLElement> = {};
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const total = SMARTSCROLL_RECORDS.length;

    function ensureFloatEl(key: string): HTMLElement {
      let el = floatEls[key];
      if (!el) {
        el = document.createElement("div");
        el.className = "ss-float-row";
        el.style.border = FLOATING_ROW_BORDER;
        el.style.boxShadow = FLOATING_ROW_SHADOW;
        el.style.height = `${ROW_HEIGHT}px`;
        // holder(.tabulator-tableholder)는 스크롤되는 요소라, 그 자식으로 넣으면
        // absolute 포지션이어도 콘텐츠와 함께 스크롤돼 화면 밖으로 사라져 버린다(실제로
        // 겪음 — 스타일은 정상인데 getBoundingClientRect가 전부 0으로 나와서 확인).
        // 스크롤되지 않는 바깥 루트(table.element, `.tabulator`)에 붙이고 헤더 높이만큼
        // top 오프셋을 더해 뷰포트 기준 위치를 맞춘다.
        table.element.appendChild(el);
        floatEls[key] = el;
      }
      return el;
    }

    function hideAllFloats() {
      for (const el of Object.values(floatEls)) el.style.display = "none";
    }

    function placeFloat(key: string, rowIdx: number, topPx?: number, bottomPx?: number, scrollLeft = 0) {
      const record = SMARTSCROLL_RECORDS[rowIdx];
      if (!record) return;
      const el = ensureFloatEl(key);
      renderFloatRow(el, record, rowIdx + 1);
      el.style.display = "flex";
      el.style.transform = `translateX(${-scrollLeft}px)`;
      if (topPx != null) {
        el.style.top = `${headerHeight + topPx}px`;
        el.style.bottom = "auto";
      } else if (bottomPx != null) {
        el.style.bottom = `${bottomPx}px`;
        el.style.top = "auto";
      }
    }

    function updateFloats() {
      const type = scrollTypeRef.current;
      // 모드를 바꾸면 이전 모드에서 쓰던 위치의 플로팅 행이 이번 모드에서는 안 쓰일 수
      // 있다(예: topcenterbottomdisplay -> centerdisplay로 바꾸면 sublast/subcenter는
      // 더 이상 갱신되지 않고 이전 내용 그대로 남아있게 된다) — 매번 전부 숨긴 뒤
      // 이번 모드에 필요한 것만 다시 켠다.
      hideAllFloats();
      if (type === "default" || !holder) return;
      const scrollTop = holder.scrollTop;
      const scrollLeft = holder.scrollLeft;
      const clientHeight = holder.clientHeight;
      const scrollHeight = holder.scrollHeight;
      const topRow = Math.min(total - 1, Math.floor(scrollTop / ROW_HEIGHT));
      const visibleCount = Math.ceil(clientHeight / ROW_HEIGHT);
      const bottomRow = Math.min(total - 1, topRow + visibleCount - 1);
      const centerOffset = (clientHeight - ROW_HEIGHT) / 2;
      const centerRow = Math.min(total - 1, topRow + Math.floor(centerOffset / ROW_HEIGHT));

      if (type === "topdisplay") {
        placeFloat("main", topRow, FLOATING_GAP, undefined, scrollLeft);
      } else if (type === "centerdisplay") {
        placeFloat("main", centerRow, centerOffset, undefined, scrollLeft);
      } else if (type === "topbottomdisplay") {
        placeFloat("main", topRow, FLOATING_GAP, undefined, scrollLeft);
        placeFloat("sublast", bottomRow, undefined, FLOATING_GAP, scrollLeft);
      } else if (type === "topcenterbottomdisplay") {
        placeFloat("main", topRow, FLOATING_GAP, undefined, scrollLeft);
        placeFloat("subcenter", centerRow, centerOffset, undefined, scrollLeft);
        placeFloat("sublast", bottomRow, undefined, FLOATING_GAP, scrollLeft);
      } else if (type === "trackbarfollow") {
        const fraction = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0;
        const moveTop = fraction * (clientHeight - ROW_HEIGHT);
        const moveRow = Math.min(total - 1, topRow + Math.floor(moveTop / ROW_HEIGHT));
        placeFloat("main", moveRow, moveTop, undefined, scrollLeft);
      }
    }

    function onScroll() {
      updateFloats();
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(hideAllFloats, 300);
    }

    table.on("tableBuilt", () => {
      holder = table.element.querySelector<HTMLElement>(".tabulator-tableholder");
      headerHeight = table.element.querySelector<HTMLElement>(".tabulator-header")?.offsetHeight ?? 0;
      holder?.addEventListener("scroll", onScroll);
    });

    return () => {
      if (hideTimer) clearTimeout(hideTimer);
      holder?.removeEventListener("scroll", onScroll);
      table.destroy();
      tableRef.current = null;
    };
  }, []);

  return (
    <main className="work">
      <div className="work-card react ss-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10900">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="ss-page-title">{t("grid.smartscroll.title")}</h1>
        <p className="ss-subtitle">{t("grid.smartscroll.subtitle")}</p>

        <div className="ss-toolbar">
          <span className="ss-toolbar-label">{t("grid.smartscroll.staScrollType")}</span>
          <div className="ss-radio-columns">
            {SCROLL_TYPE_COLUMNS.map((col, i) => (
              <div className="ss-radio-column" key={i}>
                {col.map(({ code, key }) => (
                  <label className="ss-radio" key={code}>
                    <input
                      type="radio"
                      name="scrollType"
                      checked={scrollType === code}
                      onChange={() => setScrollType(code)}
                    />
                    {t(key)}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div ref={mountRef} className="ss-grid-mount" />

        <DescriptionSection title={t("grid.smartscroll.title")} body={t("grid.smartscroll.desc")} />
      </div>
    </main>
  );
}

function DescriptionSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="ss-desc">
      <h3 className="ss-desc-title">{title}</h3>
      <p className="ss-desc-body">{body}</p>
    </section>
  );
}
