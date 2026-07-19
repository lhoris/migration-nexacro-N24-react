import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import "./googlemap.css";

// 원본 comp::googlemap.xfdl의 실제 좌표/텍스트 그대로.
const INITIAL_CENTER = { lat: 37.524022, lng: 126.926594 }; // 여의도
const INITIAL_ZOOM = 15;
const MARKER_POSITION = { lat: 37.5148693, lng: 127.0607522 }; // 삼성동(투비소프트)
const MARKER_LABEL = "TOBESOFT";

declare global {
  interface Window {
    google?: typeof google;
    __ftcGoogleMapsCallback?: () => void;
  }
}

let scriptLoadPromise: Promise<void> | null = null;

// 원본도 실제 API 키가 없다(this.googlemap = ""; 앱 전역 설정, key.json도 항상 빈 객체 —
// Playwright로 원본을 직접 열어 "For development purposes only" 워터마크 + "Google 지도를
// 제대로 로드할 수 없습니다" 경고 배너를 실측 확인). 사용자가 "원본과 동일하게 키 없는
// 임베드로 그대로 재현"을 선택해, 실제 Google Maps JS를 원본과 똑같이 키 없이 로드한다
// (VITE_GOOGLE_MAPS_API_KEY를 나중에 넣으면 바로 정상 지도로 업그레이드되는 구조만 남겨둠).
function loadGoogleMapsScript(): Promise<void> {
  if (window.google?.maps) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve) => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "";
    window.__ftcGoogleMapsCallback = () => resolve();
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?${apiKey ? `key=${apiKey}&` : ""}callback=__ftcGoogleMapsCallback`;
    script.async = true;
    document.head.appendChild(script);
  });
  return scriptLoadPromise;
}

/**
 * Nexacro comp::googlemap.xfdl(메뉴 "구글 지도", 실제 menu_id 20800)을 React로 옮긴 화면.
 * 원본 GoogleMap 컴포넌트는 서버 트랜잭션 없이 순수하게 실제 Google Maps JS API를 감싸는
 * 위젯이다 — Dataset도, svc:: 호출도 전혀 없다.
 *
 * 원본 동작 그대로 재현: 폼 로드 시 여의도(37.524022, 126.926594) 중심, 줌 15로 지도가
 * 자동 로드되고(zoom 컨트롤 표시), "마커 추가" 버튼은 지도 load 이벤트가 뜨기 전까진
 * 비활성 상태다가 활성화된다. 클릭하면 삼성동(투비소프트 실제 위치) 좌표에 "TOBESOFT"
 * 마커가 뜨고 지도가 그 위치로 자동 이동(panTo)한다 — 이건 Google Maps 마커 API 자체의
 * 기본 동작이 아니라 원본 소스에 명시된 실제 동작이라 Playwright로 원본을 직접 클릭해
 * 확인함. "마커 삭제"를 누르면 마커만 사라지고 지도는 원래 중심으로 되돌아가지 않는다
 * (원본도 동일 — removeItem은 지도를 재중심화하지 않음). 지도 자체를 클릭해 마커를
 * 찍는 상호작용은 원본에 없다(버튼 2개만 존재).
 */
export function GoogleMap() {
  const { t } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [markerAdded, setMarkerAdded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadGoogleMapsScript().then(() => {
      if (cancelled || !mountRef.current) return;
      const map = new window.google!.maps.Map(mountRef.current, {
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM,
        zoomControl: true,
      });
      mapRef.current = map;
      // 원본 GoogleMap00_onload: 초기 로드 완료 시점에 버튼 상태를 확정한다.
      window.google!.maps.event.addListenerOnce(map, "idle", () => {
        if (!cancelled) setMapReady(true);
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const onAddMarker = () => {
    const map = mapRef.current;
    if (!map || !window.google) return;
    const marker = new window.google.maps.Marker({
      position: MARKER_POSITION,
      map,
      title: MARKER_LABEL,
      label: MARKER_LABEL,
    });
    markerRef.current = marker;
    map.panTo(MARKER_POSITION);
    setMarkerAdded(true);
  };

  const onDeleteMarker = () => {
    markerRef.current?.setMap(null);
    markerRef.current = null;
    setMarkerAdded(false);
  };

  return (
    <main className="work">
      <div className="work-card react gm-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#20800">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="gm-page-title">{t("comp.googlemap")}</h1>

        <div className="gm-btn-row">
          <button type="button" className="gm-btn" disabled={!mapReady || markerAdded} onClick={onAddMarker}>
            {t("comp.googlemap.addmaker")}
          </button>
          <button type="button" className="gm-btn" disabled={!markerAdded} onClick={onDeleteMarker}>
            {t("comp.googlemap.delmaker")}
          </button>
        </div>

        <div ref={mountRef} className="gm-map-mount" />

        <section className="gm-desc">
          <h3 className="gm-desc-title">{t("comp.googlemap")}</h3>
          <p className="gm-desc-body">{t("comp.googlemap.desc")}</p>
        </section>
      </div>
    </main>
  );
}
