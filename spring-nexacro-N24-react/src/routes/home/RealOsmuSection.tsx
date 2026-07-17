import { useLanguage } from "../../shell/LanguageContext";

// 원본 frame::main_realosmu.xfdl — "Real OSMU Solution"/osmu.desc와 "개발 생산성을 높이는
// IDE"(messageid: ide)/ide.desc 2블록. "Real OSMU Solution" 타이틀 자체는 원본에서 messageid
// 없이 하드코딩된 영문 리터럴이라(TEXT() 아님) 언어와 무관하게 항상 영어로 고정된다 — 그대로 옮겼다.
export function RealOsmuSection() {
  const { t } = useLanguage();

  return (
    <section className="osmu-section">
      <div className="osmu-block">
        <h2 className="osmu-title">Real OSMU Solution</h2>
        <p className="osmu-desc">{t("osmu.desc")}</p>
        <img className="osmu-image" src="/nexacro-icons/main/img_WF_mainPR01.png" alt="Real OSMU Solution" />
      </div>
      <div className="osmu-block">
        <h2 className="osmu-title">{t("ide")}</h2>
        <p className="osmu-desc">{t("ide.desc")}</p>
        <img className="osmu-image" src="/nexacro-icons/main/img_WF_mainPR03.png" alt={t("ide")} />
      </div>
    </section>
  );
}
