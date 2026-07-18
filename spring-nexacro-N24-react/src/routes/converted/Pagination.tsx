import { useEffect, useMemo, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { PAGINATION_BOOKS } from "../../data/paginationRealData";
import "./pagination.css";

type Translate = (key: string, fallback?: string) => string;

const COLUMNS: ColumnDefinition[] = [
  { title: "#", field: "rowno", width: 56, headerSort: false },
  { title: "Book Title", field: "bookTitle", headerSort: false },
  { title: "Author", field: "author", headerSort: false },
  { title: "Publisher", field: "publisher", headerSort: false },
];

/**
 * Nexacro grid::pagination.xfdl(메뉴 "페이징", 실제 menu_id 10300)를 React로 옮긴 화면.
 * 원본은 Tab 컴포넌트로 "버튼 스타일"/"무한 스크롤" 두 방식을 보여준다 — 둘 다 같은
 * ds_server(실제 도서 641행: BOOK_NM/EDITOR_NM/PRESS_NM/ROWNO)를 공유하고, "조회" 버튼을
 * 누르기 전까지는 그리드가 비어있다(원본 Tab00_Tabpage1_Button00_onclick 참고). Tabulator의
 * 내장 `pagination`/`progressiveLoad: "scroll"` 기능이 원본의 commPaging(10행/페이지)·
 * fn_retrieve(20행/배치 무한 스크롤) 로직과 거의 1:1로 대응해서, 직접 페이지 슬라이싱
 * 로직을 짜지 않고 그 기능을 그대로 썼다.
 */
export function Pagination() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"button" | "infinite">("button");

  return (
    <main className="work">
      <div className="work-card react pg-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10300">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="pg-page-title">{t("grid.pagination")}</h1>

        <div className="pg-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            className={`pg-tab${tab === "button" ? " active" : ""}`}
            aria-selected={tab === "button"}
            onClick={() => setTab("button")}
          >
            {t("grid.pagination.buttonstyle")}
          </button>
          <button
            type="button"
            role="tab"
            className={`pg-tab${tab === "infinite" ? " active" : ""}`}
            aria-selected={tab === "infinite"}
            onClick={() => setTab("infinite")}
          >
            {t("grid.pagination.infinitescrolling")}
          </button>
        </div>

        {tab === "button" ? <ButtonStyleTab t={t} /> : <InfiniteScrollTab t={t} />}

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// 탭 1: 버튼 스타일 — commPaging00(rowcount=10) 대응. Tabulator pagination:true +
// paginationSize:10이 First/Prev/페이지번호/Next/Last 푸터를 그대로 제공한다.
// ---------------------------------------------------------------------------
function ButtonStyleTab({ t }: { t: Translate }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: [],
      layout: "fitColumns",
      height: "420px",
      pagination: true,
      paginationSize: 10,
      // 원본 commPaging00은 페이지 번호 버튼을 10개까지 보여준다(Playwright로 원본 실측) —
      // Tabulator 기본값(5개)보다 맞춰서 늘림.
      paginationButtonCount: 10,
      columns: COLUMNS,
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, []);

  return (
    <section className="pg-section">
      <button type="button" className="pg-search-btn" onClick={() => tableRef.current?.setData(PAGINATION_BOOKS)}>
        🔍 {t("pagination.search")}
      </button>
      {/* 원본 실측: "조회 결과" 라벨은 조회 전에도 항상 보이는 고정 UI다(조회 후에만
          나타나는 게 아님) */}
      <p className="pg-hint">{t("inquiry.result")}</p>
      <div ref={mountRef} className="pg-grid-mount" />
    </section>
  );
}

// ---------------------------------------------------------------------------
// 탭 2: 무한 스크롤 — fn_retrieve(20행/배치, 스크롤이 끝에 닿으면 다음 배치 추가) 대응.
// Tabulator 내장 progressiveLoad:"scroll"은 원격(ajax) 데이터 소스를 전제로 설계된
// 기능이라 로컬 배열에는 잘 안 맞아서, `scrollVertical` 이벤트를 직접 구독해 원본과 같은
// 방식(스크롤이 끝에 닿으면 addData로 다음 20행 추가)으로 직접 구현했다.
// ---------------------------------------------------------------------------
const INFINITE_BATCH_SIZE = 20;

function InfiniteScrollTab({ t }: { t: Translate }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const loadedCountRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: [],
      layout: "fitColumns",
      height: "420px",
      // 기본 가상 DOM 렌더링 대신 "basic"(전부 실제 DOM으로 렌더링)을 쓴다 — scrollVertical
      // 핸들러에서 holder.scrollHeight로 "바닥까지 남은 거리"를 계산하는데, 가상 DOM은 이
      // 값을 실제 렌더된 행이 아니라 추정치로 주기 때문. 최대 641행 규모라 성능 문제는 없다.
      renderVertical: "basic",
      // rowno가 실제 고유값이라 이걸 행 식별자로 쓴다 — 지정 안 하면 Tabulator가 "id"
      // 필드를 찾는데 우리 데이터엔 없어서 자동 생성 id에 의존하게 된다.
      index: "rowno",
      columns: COLUMNS,
    });
    tableRef.current = table;

    let loadingMore = false;
    table.on("scrollVertical", (top: number) => {
      if (loadingMore || loadedCountRef.current === 0 || loadedCountRef.current >= PAGINATION_BOOKS.length) return;
      const holder = table.element.querySelector(".tabulator-tableholder") as HTMLElement | null;
      if (!holder) return;
      const remaining = holder.scrollHeight - holder.clientHeight - top;
      if (remaining < 40) {
        loadingMore = true;
        const next = PAGINATION_BOOKS.slice(loadedCountRef.current, loadedCountRef.current + INFINITE_BATCH_SIZE);
        loadedCountRef.current += next.length;
        // addData가 끝나면 스크롤이 맨 위로 리셋된다(실측 확인) — 직전 스크롤 위치를
        // 기억해뒀다가 데이터가 다 들어간 뒤 되돌려놓는다. 그렇게 안 하면 스크롤 중
        // 계속 맨 위로 튕기는 것처럼 보인다(사용자 리포트: "200행쯤에서 갑자기 1행으로").
        const prevScrollTop = holder.scrollTop;
        table.addData(next).then(() => {
          holder.scrollTop = prevScrollTop;
          loadingMore = false;
        });
      }
    });

    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, []);

  const onSearch = () => {
    loadedCountRef.current = INFINITE_BATCH_SIZE;
    tableRef.current?.setData(PAGINATION_BOOKS.slice(0, INFINITE_BATCH_SIZE));
  };

  return (
    <section className="pg-section">
      <button type="button" className="pg-search-btn" onClick={onSearch}>
        🔍 {t("pagination.search")}
      </button>
      <p className="pg-hint">{t("inquiry.result")}</p>
      <div ref={mountRef} className="pg-grid-mount" />
    </section>
  );
}

// ---------------------------------------------------------------------------
// 설명 영역 — 원본 grid::pagination_desc.xfdl. 이미지 없이 텍스트 3블록(개요/버튼 스타일/
// 무한 스크롤)만 있다.
// ---------------------------------------------------------------------------
function DescriptionSection({ t }: { t: Translate }) {
  const blocks = useMemo(
    () => [
      { title: t("grid.pagination"), body: t("grid.pagination.desc") },
      { title: t("grid.pagination.buttonstyle"), body: t("grid.pagination.buttonstyle.desc") },
      { title: t("grid.pagination.infinitescrolling"), body: t("grid.pagination.infinitescrolling.desc") },
    ],
    [t],
  );

  return (
    <section className="pg-desc">
      {blocks.map((b) => (
        <div className="pg-desc-block" key={b.title}>
          <h3 className="pg-desc-title">{b.title}</h3>
          <p className="pg-desc-body">{b.body}</p>
        </div>
      ))}
    </section>
  );
}
