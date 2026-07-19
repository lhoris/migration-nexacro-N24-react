import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import { LISTVIEW_MOVIES } from "../../data/listviewRealData";
import "./listview.css";

type Translate = (key: string, fallback?: string) => string;

// Nexacro의 Mobile_screen(440)/Desktop_screen(920) Layout 브레이크포인트 중간값.
const MOBILE_BREAKPOINT = 700;

/**
 * Nexacro comp::listview.xfdl(메뉴 "리스트뷰", 실제 menu_id 20500)을 React로 옮긴 화면.
 * 원본 ListView 컴포넌트는 서버 트랜잭션이 전혀 없는 순수 정적 데모(dsList 3행이 on_create에
 * 직접 임베딩)라 데이터는 그대로 하드코딩(listviewRealData.ts)했다.
 *
 * 원본은 Format을 2개 갖는다 — "default"(Mobile_screen 440×1470: 제목+대형 커버 이미지를
 * 세로로 쌓고, 펼치면 Year/Rating/Running Time/Summary 전부 라벨:값 행으로 나열)와
 * "large"(Desktop_screen 920×720: 썸네일+제목+Year/Rating/Running Time을 가로 배치, 펼치면
 * Summary만 나열) — 화면 폭에 따라 자동 전환되는 반응형 레이아웃이다. 이 프로젝트에 내장된
 * 레거시 Nexacro 임베드는 브라우저를 좁혀도 내부 캔버스 폭이 고정이라 실제로는 "large" 포맷만
 * 관찰 가능했지만(Playwright로 1400px/480px 뷰포트 둘 다 실측 확인), 소스에 명시된 두 포맷
 * 정의 그대로 두 레이아웃을 구현하고 실제 컨테이너 폭 기준으로 전환한다(원본의 "다양한
 * 형식을 표현할 수 있습니다" 설명 자체가 이 반응형 전환이 화면의 핵심 기능이라 알려주므로).
 *
 * bandexpandtype="accordion"이지만 실제 이벤트 핸들러(ListView00_onbandstatuschanged)는
 * 각 행의 getBandExpandStatus(row)를 독립적으로 합산하는 방식이라 "한 번에 하나만 펼침"이
 * 아니라 행별 독립 토글이다 — 원본 그대로 각 행을 독립적으로 펼치고 접을 수 있게 구현.
 */
export function ListView() {
  const { t } = useLanguage();

  return (
    <main className="work">
      <div className="work-card react lv-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#20500">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="lv-page-title">{t("comp.listview")}</h1>

        <ListViewPanel />

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function ListViewPanel() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? el.clientWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleRow = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div ref={wrapRef} className={`lv-panel${isMobile ? " lv-panel-mobile" : ""}`}>
      {LISTVIEW_MOVIES.map((movie, index) => {
        const isOpen = !!expanded[index];
        return (
          <div key={movie.title} className="lv-row">
            <div className="lv-body">
              {isMobile ? (
                <>
                  <div className="lv-body-mobile-top">
                    <span className="lv-title">{movie.titleLong}</span>
                    <button
                      type="button"
                      className={`lv-expandbtn${isOpen ? " lv-expandbtn-open" : ""}`}
                      aria-label="expand"
                      onClick={() => toggleRow(index)}
                    >
                      <ChevronIcon />
                    </button>
                  </div>
                  <img className="lv-cover-large" src={movie.largeCover} alt={movie.title} />
                </>
              ) : (
                <>
                  <img className="lv-cover-medium" src={movie.mediumCover} alt={movie.title} />
                  <div className="lv-meta">
                    <div className="lv-title">{movie.title}</div>
                    <MetaLine label="Year" value={movie.year} />
                    <MetaLine label="Rating" value={movie.rating} />
                    <MetaLine label="Running Time" value={movie.runtime} />
                  </div>
                  <button
                    type="button"
                    className={`lv-expandbtn${isOpen ? " lv-expandbtn-open" : ""}`}
                    aria-label="expand"
                    onClick={() => toggleRow(index)}
                  >
                    <ChevronIcon />
                  </button>
                </>
              )}
            </div>

            {isOpen && (
              <div className="lv-detail">
                {isMobile && (
                  <>
                    <MetaLine label="Year" value={movie.year} />
                    <MetaLine label="Rating" value={movie.rating} />
                    <MetaLine label="Running Time" value={movie.runtime} />
                  </>
                )}
                <div className="lv-summary-label">Summary</div>
                <p className="lv-summary-text">{movie.summary}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function MetaLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="lv-metaline">
      <span className="lv-metalabel">{label}</span>
      <span className="lv-metavalue">{value}</span>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 원본 listview_desc.xfdl은 두 일러스트 이미지를 880×398 고정 박스에
// background:no-repeat center center로 넣는다(Static03/Static03_00) — 실제 img_listview2.png는
// 세로 632px라 이 398px 창을 통해 중앙 부분만 보이도록 원본도 위아래를 잘라 보여준다. 그대로
// background-image + 고정 높이로 재현.
function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="lv-desc">
      <h3 className="lv-desc-title">{t("comp.listview")}</h3>
      <p className="lv-desc-body">{t("comp.listview1.desc")}</p>

      <h3 className="lv-desc-subtitle">{t("comp.listview.menutype1")}</h3>
      <p className="lv-desc-body">{t("comp.listview2.desc")}</p>
      <div className="lv-desc-image" style={{ backgroundImage: "url(/nexacro-movies/img_listview.png)" }} />

      <h3 className="lv-desc-subtitle">{t("comp.listview.menutype2")}</h3>
      <div className="lv-desc-image" style={{ backgroundImage: "url(/nexacro-movies/img_listview2.png)" }} />
    </section>
  );
}
