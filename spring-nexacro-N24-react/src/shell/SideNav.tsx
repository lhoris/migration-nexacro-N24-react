import { NavLink } from "react-router-dom";
import type { MenuItem, MenuTarget } from "../data/menu";
import { useLanguage } from "./LanguageContext";

interface SideNavProps {
  groupLabel: string;
  groupLabelEn: string;
  children: MenuItem[];
  targetOf: (id: string) => MenuTarget;
}

/**
 * Nexacro leftmenu.xfdl / megamenu.xfdl의 React 대체재.
 * ADR-005: 각 리프 항목의 target 플래그를 점(dot)으로 표시해 카나리 상태를 시각화한다.
 *
 * item.serveDirect === true인 항목은 React Router를 아예 거치지 않는다 — 클릭하면
 * 진짜 브라우저 풀 네비게이션으로 Nexacro 화면으로 이동한다(iframe도, SPA 라우팅도
 * 아님). "이 화면 하나는 진짜로 Nexacro가 서빙한다"를 그대로 보여주기 위함이다.
 */
export function SideNav({ groupLabel, groupLabelEn, children, targetOf }: SideNavProps) {
  const { lang, t } = useLanguage();
  return (
    <aside className="lnb">
      <div className="lnb-heading">{lang === "ko" ? groupLabel : groupLabelEn}</div>
      {children.length === 0 && <div className="lnb-empty">{t("shell.noSubmenu")}</div>}
      {children.map((item) =>
        item.serveDirect && item.nexacroMenuId ? (
          <a
            key={item.id}
            href={`/nexacro/launch.html#${item.nexacroMenuId}`}
            className="lnb-item lnb-item-direct"
            title={t("shell.directScreenTitle")}
          >
            <span>{lang === "ko" ? item.label : item.labelEn}</span>
            <span className="target-dot nexacro" />
          </a>
        ) : (
          <NavLink
            key={item.id}
            to={item.path ?? "#"}
            className={({ isActive }) => `lnb-item${isActive ? " active" : ""}`}
          >
            <span>{lang === "ko" ? item.label : item.labelEn}</span>
            <span className={`target-dot ${targetOf(item.id)}`} title={`target: ${targetOf(item.id)}`} />
          </NavLink>
        ),
      )}
    </aside>
  );
}
