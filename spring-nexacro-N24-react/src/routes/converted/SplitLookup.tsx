import { useEffect, useMemo, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { BATCH_SIZE, TOTAL_ROW_COUNT, generateSplitLookupBatch } from "../../data/splitLookupMock";
import "./splitLookup.css";

type Translate = (key: string, fallback?: string) => string;

// 원본 Grid Format의 head Cell text는 TEXT()로 감싸지 않은 순수 리터럴이라 langCode와
// 무관하게 항상 영문으로 표시된다(10500/10600과 동일한 패턴).
const COLUMNS: ColumnDefinition[] = [
  { title: "No.", field: "no", width: 70, headerSort: false },
  { title: "First name", field: "first_name", width: 110, headerSort: false },
  { title: "Last name", field: "last_name", width: 110, headerSort: false },
  { title: "Email", field: "email", width: 240, headerSort: false },
  { title: "Gender", field: "gender", width: 90, headerSort: false },
  { title: "IP Address", field: "ip_address", width: 140, hozAlign: "right", headerSort: false },
  { title: "City", field: "city", width: 120, headerSort: false },
  { title: "Color", field: "color", width: 100, headerSort: false },
];

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

/**
 * Nexacro grid::progressload.xfdl(메뉴 "분할 조회", 실제 menu_id 11300)를 React로 옮긴 화면.
 * 원본 Dataset은 `set_progressload("true")`로 서버가 row 단위로 나눠 보내주는 데이터를
 * 받는데, 이 프로젝트엔 그 백엔드(`svc::progressload.do`)가 없다(원본에서 직접 조회해도
 * "조회 건수 0 / 100,000"에서 멈춤 — Playwright로 확인, 10500/10600과 동일한 패턴). 이미
 * 정해둔 방침대로, 서버가 10,000행씩 10번에 나눠 보내는 것과 동등한 배치 로딩을 클라이언트
 * 에서 재현해 카운터가 실제로 올라가는 것까지 보여준다.
 */
export function SplitLookup() {
  const { t } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const loadingRef = useRef(false);
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: [],
      // "fitDataFill"/"fitColumns"는 데이터가 바뀔 때마다 컬럼 폭을 다시 계산한다(셀 텍스트
      // 실측 포함) — 10,000행씩 10번 늘어나는 이 화면에서 그걸 매번 하면 배치가 늘어날수록
      // 점점 느려지다 브라우저 탭이 완전히 멈춰버린다(직접 겪음: addData 10번째 배치쯤에서
      // 30초 넘게 응답 없음). 컬럼에 이미 고정 width를 줬으니 layout 자체를 생략해 매번
      // 재계산하지 않게 한다.
      height: "480px",
      columns: COLUMNS,
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, []);

  const onSearch = async () => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    const table = tableRef.current;
    table?.clearData();
    setLoaded(0);

    // 카운터("조회 건수 X / 100,000")는 매 배치마다 올려서 원본처럼 계단식으로 차오르는
    // 걸 보여주되, 실제 Tabulator 그리드는 배치마다 addData하지 않고 마지막에 한 번만
    // setData한다 — 가상 스크롤 그리드에 10,000행씩 10번 반복해서 addData를 걸면
    // 누적 행이 늘어날수록 매 호출이 점점 느려져 마지막 배치 즈음엔 브라우저 탭이 30초
    // 넘게 응답 없이 멈춰버리는 걸 직접 겪었다 — 데이터가 계속 늘어나는 그리드에 반복
    // addData를 거는 건 이 정도 규모(총 10만행)에서 쓰면 안 되는 패턴이었다.
    const allRows = [];
    let loadedSoFar = 0;
    while (loadedSoFar < TOTAL_ROW_COUNT) {
      await sleep(120 + Math.random() * 120);
      const batch = generateSplitLookupBatch(loadedSoFar + 1, BATCH_SIZE);
      allRows.push(...batch);
      loadedSoFar += batch.length;
      setLoaded(loadedSoFar);
    }
    await table?.setData(allRows);
    loadingRef.current = false;
  };

  const statusText = useMemo(
    () =>
      t("splitlookup.status")
        .replace("{loaded}", loaded.toLocaleString())
        .replace("{total}", TOTAL_ROW_COUNT.toLocaleString()),
    [t, loaded],
  );

  return (
    <main className="work">
      <div className="work-card react sl-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#11300">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="sl-page-title">{t("grid.progressload")}</h1>

        <div className="sl-search-row">
          <span className="sl-status">{statusText}</span>
          <button type="button" className="sl-search-btn" onClick={onSearch}>
            🔍 {t("splitlookup.search")}
          </button>
        </div>

        <p className="sl-hint">{t("inquiry.result")}</p>
        <div ref={mountRef} className="sl-grid-mount" />

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// 설명 영역 — 원본 grid::progressload_desc.xfdl(단일 블록).
// ---------------------------------------------------------------------------
function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="sl-desc">
      <div className="sl-desc-block">
        <h3 className="sl-desc-title">{t("grid.progressload")}</h3>
        <p className="sl-desc-body">{t("grid.progressload.desc")}</p>
      </div>
    </section>
  );
}
