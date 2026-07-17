import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MENU_ITEMS, getChildren } from "../../data/menu";
import { useLanguage } from "../../shell/LanguageContext";
import { useTheme } from "../../shell/ThemeContext";

// 원본 frame::main_rolling.xfdl.js — Step 컴포넌트 4단계, stepshowtype="always"(점 항상 표시),
// 3780ms마다 자동 전환 + 380ms 페이드. 각 스텝 "더 알아보기"는 root.xfdl.js의 showSubMenu가
// 하듯 해당 그룹의 첫 리프로 이동한다(app.gdsMenu.lookupNF("upid", menuId, "id") → openMenu).
// 이미지 파일명이 스텝 순서와 어긋나는 것(0:main01, 1:main02, 2:main04, 3:main03)도 원본 그대로다.
const STEPS = [
  { titleKey: "rolling.grid.title", subKey: "rolling.grid.sub", groupId: "10000", img: "main01" },
  { titleKey: "rolling.component.title", subKey: "rolling.component.sub", groupId: "20000", img: "main02" },
  { titleKey: "rolling.useful.title", subKey: "rolling.useful.sub", groupId: "40000", img: "main04" },
  { titleKey: "rolling.interface.title", subKey: "rolling.interface.sub", groupId: "50000", img: "main03" },
] as const;

const AUTO_ADVANCE_MS = 3780;

export function RollingBanner() {
  const { t } = useLanguage();
  const { themeMode } = useTheme();
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const restartTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const goToStep = (i: number) => setActive(i);

  const learnMore = (groupId: string) => {
    const firstChild = getChildren(MENU_ITEMS, groupId)[0];
    if (firstChild?.path) navigate(firstChild.path);
  };

  return (
    <section className="rolling-banner">
      {STEPS.map((step, i) => (
        <div key={step.groupId} className={`rolling-slide${i === active ? " active" : ""}`}>
          <div className="rolling-text">
            <h2 className="rolling-title">{t(step.titleKey)}</h2>
            <p className="rolling-sub">{t(step.subKey)}</p>
            <button type="button" className="rolling-btn" onClick={() => learnMore(step.groupId)}>
              {t("main.learnmore")}
            </button>
          </div>
          <img
            className="rolling-image"
            src={`/nexacro-icons/${themeMode === "D" ? "main-dark" : "main"}/img_WF_${step.img}.gif`}
            alt={t(step.titleKey)}
          />
        </div>
      ))}

      <div className="rolling-dots">
        {STEPS.map((step, i) => (
          <button
            key={step.groupId}
            type="button"
            className={`rolling-dot${i === active ? " active" : ""}`}
            aria-label={t(step.titleKey)}
            onClick={() => goToStep(i)}
          />
        ))}
      </div>
    </section>
  );
}
