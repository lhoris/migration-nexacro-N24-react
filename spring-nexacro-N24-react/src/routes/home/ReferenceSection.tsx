import { CountUpNumber } from "./CountUpNumber";

// 원본 frame::main_reference.xfdl — "Korea"/"History"/"Nexacro Reference"/"Tobesoft Reference"
// 통계(스크롤 진입 시 카운트업) + "Major Customers(Partners)" 로고 20개(5열×4행, ref01~ref20
// 순서 그대로). 이 섹션의 라벨/숫자는 원본에서 전부 messageid 없이 하드코딩된 리터럴이라
// 언어 토글과 무관하게 항상 동일하다 — 그대로 옮겼다.
const STATS = [
  { label: "Korea", value: 1, prefix: "No. ", suffix: "" },
  { label: "History", value: 23, prefix: "", suffix: " years" },
  { label: "Nexacro\nReference", value: 1800, prefix: "", suffix: "" },
  { label: "Tobesoft\nReference", value: 7000, prefix: "", suffix: "" },
];

// sta_WF_reference01~20의 실제 background-image 파일명(테마 CSS에서 그대로 확인), row-major
// 5열×4행 순서 그대로다.
const REFERENCE_LOGOS = [
  "ref_gov01",
  "ref_biz01",
  "ref_fin01",
  "ref_univ01",
  "ref_global01",
  "ref_gov02",
  "ref_biz02",
  "ref_fin02",
  "ref_univ02",
  "ref_global02",
  "ref_gov03",
  "ref_biz03",
  "ref_fin03",
  "ref_medical01",
  "ref_global03",
  "ref_gov04",
  "ref_biz04",
  "ref_fin04",
  "ref_medical02",
  "ref_global04",
];

export function ReferenceSection() {
  return (
    <section className="reference-section">
      <div className="reference-stats">
        {STATS.map((s) => (
          <div className="reference-stat" key={s.label}>
            <div className="reference-stat-label">{s.label}</div>
            <div className="reference-stat-value">
              {s.prefix}
              <CountUpNumber target={s.value} />
              {s.suffix}
            </div>
          </div>
        ))}
      </div>

      <h3 className="reference-heading">Major Customers(Partners)</h3>
      <div className="reference-logos">
        {REFERENCE_LOGOS.map((name) => (
          <div className="reference-logo" key={name}>
            <img src={`/nexacro-icons/ref/img_WF_${name}.png`} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
