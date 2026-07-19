import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import "./animation.css";

// 원본 comp::animation.xfdl의 dsImageList(_setContents)에서 그대로 추출한 실제 이미지 경로.
const BANNER_IMAGES = [
  "/nexacro-animation/img_WF_bannerImg01.png",
  "/nexacro-animation/img_WF_bannerImg02.png",
  "/nexacro-animation/img_WF_bannerImg03.png",
  "/nexacro-animation/img_WF_bannerImg04.png",
  "/nexacro-animation/img_WF_bannerImg05.png",
];

const SNS_ICONS = [
  "/nexacro-animation/img_WF_stSNS01.png",
  "/nexacro-animation/img_WF_stSNS02.png",
  "/nexacro-animation/img_WF_stSNS03.png",
  "/nexacro-animation/img_WF_stSNS04.png",
  "/nexacro-animation/img_WF_stSNS05.png",
  "/nexacro-animation/img_WF_stSNS06.png",
];

// 원본 fnInitAniMenu/ani_onrun의 실제 값 그대로.
const SNS_ANGLES = [1.04, 2.08, 3.12, 4.16, 5.2, 6.24]; // radian
const MENU_RADIUS = 150; // aniIdx=100일 때 최대 반지름
const MENU_SIZE = 100; // aniIdx=100일 때 최대 아이콘 크기
const CIRCLE_MENU_DURATION = 500; // ms, 원본 duration
const CIRCLE_MENU_TOGGLE_INTERVAL = 3000; // ms, 원본 setTimer(0,3000)
const SLIDE_AUTO_INTERVAL = 2000; // ms, 원본 setTimer(1,2000)
// 슬라이드 트랜지션(duration 500ms, easing "easeOutCubic")은 animation.css의
// .an-slide-track 트랜지션 값(0.5s cubic-bezier(0.215,0.61,0.355,1))으로 재현.

// 원본 easing="easeoutcirc": easeOutCirc(t) = sqrt(1 - (t-1)^2)
function easeOutCirc(t: number) {
  return Math.sqrt(1 - Math.pow(t - 1, 2));
}

/**
 * Nexacro comp::animation.xfdl(메뉴 "애니메이션", 실제 menu_id 21200)을 React로 옮긴 화면.
 * Dataset(dsImageList, 배너 이미지 5개)만 있고 svc:: 호출은 없는 순수 클라이언트 데모 —
 * 원본이 이 개발 환경에서 정상 로드/동작함을 Playwright로 실측 확인(21100/그래픽스와
 * 달리 이 화면은 런타임 버그가 없다).
 *
 * (1) 원형 메뉴: `nexacro.Animation`(duration 500ms, easing "easeoutcirc")으로 stButton의
 * aniIdx를 0↔100으로 애니메이션하고, 매 프레임 `ani_onrun`이 각도(arrAngle[i]*aniIdx/100)·
 * 반지름(150*aniIdx/100)·크기(100*aniIdx/100)를 동시에 극좌표로 계산해 6개 SNS 아이콘을
 * 재배치한다 — 단순히 최종 각도로 고정된 채 반지름만 커지는 게 아니라, 열리는 도중에는
 * 아이콘들이 실제로 각도까지 함께 좁혀져 있다가 펼쳐지는 형태(원본 소스 그대로 재현).
 * 클릭 트리거가 없고 `setTimer(0,3000)`로 3초마다 자동 열림/닫힘을 반복한다.
 *
 * (2) 이미지 슬라이드: `nexacro.Animation`(duration 500ms, easing "easeOutCubic")으로
 * 배너 컨테이너의 스크롤 위치를 보간한다. Prev/Next 버튼 클릭 + `setTimer(1,2000)`로
 * 2초마다 자동 재생.
 *
 * 원본 소스의 실제 버그: 설명 패널의 "이징" 섹션 제목이 `comp.animation` 키를 잘못
 * 재사용해(폴백만 "Easing", 실제 리소스 값은 "애니메이션") 원본에서도 "이징"이 아니라
 * "애니메이션"이라고 뜬다. 사용자에게 물어봤고 오타로 판단해 새 키(`comp.animation.easing`)로
 * 분리해 의도된 제목("이징"/"Easing")으로 수정하기로 결정.
 */
export function Animation() {
  const { t } = useLanguage();

  return (
    <main className="work">
      <div className="work-card react an-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#21200">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="an-page-title">{t("comp.animation")}</h1>

        <div className="an-demo-row">
          <div className="an-demo-panel">
            <h2 className="an-demo-title">{t("comp.animation.circlemenu")}</h2>
            <CircleMenu />
          </div>
          <div className="an-demo-panel">
            <h2 className="an-demo-title">{t("comp.animation.imageslide")}</h2>
            <ImageSlide />
          </div>
        </div>

        <section className="an-desc">
          <h3 className="an-desc-title">{t("comp.animation")}</h3>
          <p className="an-desc-body">{t("comp.animation.desc")}</p>
          <img className="an-desc-gif" src="/nexacro-animation/animation.gif" alt="" />
          <h3 className="an-desc-title">{t("comp.animation.easing")}</h3>
          <p className="an-desc-body">{t("comp.animation.easing.desc")}</p>
          <img className="an-desc-easing" src="/nexacro-animation/animation_easing.png" alt="" />
        </section>
      </div>
    </main>
  );
}

const CIRCLE_MENU_NATIVE_SIZE = 450; // .an-circle-wrap의 고정 좌표계 크기(px)

function CircleMenu() {
  const [openness, setOpenness] = useState(0); // 0..100, 원본 stButton.aniIdx에 대응
  const opennessRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // 아이콘 좌표는 450px 고정 좌표계로 계산되므로, 좁은 화면에서는 좌표를 다시 계산하는
  // 대신 바깥 컨테이너의 실제 너비에 맞춰 래퍼 전체를 transform: scale()로 축소한다.
  const scaleRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = scaleRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? CIRCLE_MENU_NATIVE_SIZE;
      setScale(Math.min(1, width / CIRCLE_MENU_NATIVE_SIZE));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let target = 0;
    let cancelled = false;

    // 매번 렌더 시점의 openness를 클로저로 캡처해두면(effect deps=[]라 최초 1회만
    // 캡처됨) 두 번째 토글부터는 항상 마운트 시점 값(0)에서 보간을 시작해버려 닫힘
    // 애니메이션이 순간이동처럼 보이는 버그가 있었다 — ref로 항상 최신값을 읽는다.
    function animateTo(to: number) {
      target = to;
      const start = performance.now();
      const from = opennessRef.current;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      function tick(now: number) {
        if (cancelled) return;
        const progress = Math.min(1, (now - start) / CIRCLE_MENU_DURATION);
        const eased = easeOutCirc(progress);
        const next = from + (to - from) * eased;
        opennessRef.current = next;
        setOpenness(next);
        if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    const interval = setInterval(() => {
      animateTo(target === 0 ? 100 : 0);
    }, CIRCLE_MENU_TOGGLE_INTERVAL);

    return () => {
      cancelled = true;
      clearInterval(interval);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 아이콘이 펼쳐지는 최대 범위(반지름 150 + 아이콘 절반 50 = 중심에서 200px)를 완전히
  // 담으려면 래퍼가 최소 400x400이어야 한다 — 250x250(globe 크기)로만 잡아뒀다가 열렸을 때
  // 왼쪽 위(Facebook) 아이콘이 카드 경계 밖으로 튀어나가는 문제가 있었다.
  const centerX = 225;
  const centerY = 225;

  return (
    <div className="an-circle-scale" ref={scaleRef}>
      <div className="an-circle-wrap" style={{ transform: `scale(${scale})` }}>
        <div className="an-circle-globe" />
        {SNS_ICONS.map((src, i) => {
          const step = SNS_ANGLES[i] * (openness / 100);
          const r = MENU_RADIUS * (openness / 100);
          const size = MENU_SIZE * (openness / 100);
          const x = centerX + r * Math.cos(step) - size / 2;
          const y = centerY + r * Math.sin(step) - size / 2;
          return (
            <img
              key={src}
              src={src}
              alt=""
              className="an-circle-icon"
              style={{ left: x, top: y, width: size, height: size, opacity: openness > 0 ? 1 : 0 }}
            />
          );
        })}
      </div>
    </div>
  );
}

function ImageSlide() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, SLIDE_AUTO_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const onPrev = () => setIndex((prev) => (prev - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length);
  const onNext = () => setIndex((prev) => (prev + 1) % BANNER_IMAGES.length);

  return (
    <div className="an-slide-wrap">
      <button type="button" className="an-slide-btn an-slide-btn-prev" onClick={onPrev} aria-label="prev">
        <img src="/nexacro-animation/btn_WF_slidePrev.png" alt="" />
      </button>
      <div className="an-slide-viewport">
        <div className="an-slide-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {BANNER_IMAGES.map((src) => (
            <img key={src} src={src} alt="" className="an-slide-image" />
          ))}
        </div>
      </div>
      <button type="button" className="an-slide-btn an-slide-btn-next" onClick={onNext} aria-label="next">
        <img src="/nexacro-animation/btn_WF_slideNext.png" alt="" />
      </button>
    </div>
  );
}
