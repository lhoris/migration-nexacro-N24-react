import { Fragment, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import { FITTOCONTENTS_MOVIES, type FitToContentsMovie } from "../../data/fitToContentsMock";
import "./fitToContents.css";

type Translate = (key: string, fallback?: string) => string;

// 원본 소스에서 <fc v='#FE5252'>Arrangement</fc>/<fc v='#FE5252'>FitToContents</fc>로 강조된
// 두 단어(고유명사라 언어와 무관하게 동일 철자)를 실제로 빨간색(#FE5252)으로 강조 렌더링한다.
function renderHighlighted(text: string) {
  const parts = text.split(/(Arrangement|FitToContents)/g);
  return parts.map((part, i) =>
    part === "Arrangement" || part === "FitToContents" ? (
      <span key={i} className="ftc-highlight">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/**
 * Nexacro comp::fittocontents.xfdl(메뉴 "컴포넌트 사이즈 자동 조정", 실제 menu_id 20600)을
 * React로 옮긴 화면. 원본은 svc::koreafilmLoad.do(+ 외부 KOFIC API 키)로 실제 최신 영화
 * 데이터를 받아와 목록에 뿌리는데, 이 프로젝트엔 그 백엔드가 없다 — 원본 화면을 Playwright로
 * 직접 열어보면 "[-1]FAILED" 알럿만 뜨고 그리드/상세 패널이 전부 빈 상태다(Pivot/FileTransfer와
 * 같은 "백엔드 없음" 케이스). 이 화면의 핵심 기능은 실제 KOFIC 데이터 자체가 아니라 "텍스트
 * 길이에 따라 컴포넌트 크기가 자동으로 늘어나거나 줄어드는" fittocontents 동작이므로, 제목·
 * 줄거리 길이가 서로 다른 가상의 영화 데이터(fitToContentsMock.ts)로 그 변화를 실제로 보여준다.
 *
 * 원본의 fittocontents="width"(제목/제작사/제작연도)와 fittocontents="height"(줄거리)는 각각
 * CSS `width: fit-content`/`height: auto`(+ min-height)로 그대로 대응된다. 제작연도가 제작사
 * 상자 바로 오른쪽에 5px 간격으로 붙어 자동 이동하는 상대좌표(Arrangement) 동작은, 두 상자를
 * flex row로 묶어두면 각 상자의 실제 너비 변화에 따라 자연히 재배치되므로 원본의 수동 좌표
 * 계산(FitToContents_onbindingvaluechanged의 getOffsetBottom() 합산)을 그대로 옮기지 않고
 * CSS 레이아웃에 맡겼다.
 *
 * 포스터 이미지: 실제 영화 포스터는 저작권 있는 홍보물이라 그대로 내려받아 쓸 수 없다
 * (위키피디아의 포스터 파일도 전부 "non-free"로 명시돼 있어 재배포 불가함을 실측 확인했다).
 * 대신 이 화면 전용으로 새로 그린 SVG 일러스트(PosterArt, 실존 포스터 디자인을 모사하지
 * 않은 그라디언트+제목 텍스트)를 포스터 자리에 사용한다.
 */
export function FitToContents() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const movie = FITTOCONTENTS_MOVIES[selectedIndex];

  return (
    <main className="work">
      <div className="work-card react ftc-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#20600">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="ftc-page-title">{t("comp.fittocontents")}</h1>
        <p className="ftc-top-desc">{renderHighlighted(t("comp.fittocontents.top.desc"))}</p>

        <div className="ftc-panel">
          <MovieGrid movies={FITTOCONTENTS_MOVIES} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
          <MovieDetail movie={movie} />
        </div>

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function MovieGrid({
  movies,
  selectedIndex,
  onSelect,
}: {
  movies: FitToContentsMovie[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="ftc-grid">
      <div className="ftc-grid-head">
        <span className="ftc-grid-head-poster">POSTER</span>
        <span className="ftc-grid-head-title">TITLE, DIRECTOR</span>
      </div>
      <div className="ftc-grid-body">
        {movies.map((movie, index) => (
          <button
            key={movie.title}
            type="button"
            className={`ftc-grid-row${index === selectedIndex ? " ftc-grid-row-selected" : ""}`}
            onClick={() => onSelect(index)}
          >
            <PosterArt title={movie.title} accent={movie.posterAccent} width={54} height={70} className="ftc-poster-thumb" />
            <span className="ftc-grid-row-text">
              <span className="ftc-grid-row-title">{movie.title}</span>
              <span className="ftc-grid-row-director">{movie.directorNm}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MovieDetail({ movie }: { movie: FitToContentsMovie }) {
  return (
    <div className="ftc-detail">
      <PosterArt title={movie.title} accent={movie.posterAccent} width={132} height={185} className="ftc-poster-large" />

      <div className="ftc-detail-text">
        <div className="ftc-fitbox ftc-title-box">{movie.title}</div>

        <div className="ftc-footnote">* Production / Year</div>
        <div className="ftc-inline-row">
          <span className="ftc-fitbox">{movie.company}</span>
          <span className="ftc-fitbox">{movie.prodYear}</span>
        </div>

        <div className="ftc-footnote">* Summary</div>
        <div className="ftc-fitbox ftc-summary-box">{movie.plotText}</div>
      </div>

      <div className="ftc-info-table">
        <InfoRow label="RUNTIME" value={movie.runtime} />
        <InfoRow label="STARRING" value={movie.actorEnNm} />
        <InfoRow label="GENRE" value={movie.genre} />
        <InfoRow label="DIRECTOR" value={movie.directorNm} />
        <InfoRow label="NATION" value={movie.nation} />
      </div>
    </div>
  );
}

// 저작권 있는 실제 포스터 대신 쓰는 자체 제작 일러스트 — accent 색 그라디언트 위에
// 제목을 얹는다. 실제 포스터의 구도/디자인을 참고하거나 모사하지 않은 완전히 새로운 그림.
function PosterArt({
  title,
  accent,
  width,
  height,
  className,
}: {
  title: string;
  accent: string;
  width: number;
  height: number;
  className?: string;
}) {
  const gradId = `ftc-grad-${title}`;
  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.75" />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
      </defs>
      <rect width={width} height={height} fill={`url(#${gradId})`} />
      <rect
        x={width * 0.06}
        y={height * 0.06}
        width={width * 0.88}
        height={height * 0.88}
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
      />
      <circle cx={width / 2} cy={height * 0.32} r={width * 0.16} fill="rgba(255,255,255,0.18)" />
      <foreignObject x={width * 0.1} y={height * 0.5} width={width * 0.8} height={height * 0.45}>
        <div className="ftc-poster-title" style={{ fontSize: Math.max(8, Math.round(width / 9)) }}>
          {title}
        </div>
      </foreignObject>
    </svg>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="ftc-info-row">
      <span className="ftc-info-label">{label}</span>
      <span className="ftc-info-value">{value}</span>
    </div>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="ftc-desc">
      <h3 className="ftc-desc-title">{t("comp.fittocontents")}</h3>
      <p className="ftc-desc-body">{t("comp.fittocontents.desc")}</p>
    </section>
  );
}
