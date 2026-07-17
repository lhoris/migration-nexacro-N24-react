import { Link } from "react-router-dom";
import type { MenuItem } from "../data/menu";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

interface GlobalNavProps {
  groups: MenuItem[];
  activeGroupId: string;
  onSelectGroup: (id: string) => void;
  onToggleMegaMenu: () => void;
}

/**
 * Nexacro top.xfdl(GNB)의 React 대체재.
 * SEC.03: 전 화면 공유 크롬이므로 Migration Factory에서 가장 먼저 이관하는 대상.
 *
 * btnLanguage/btnTheme도 top.xfdl.js의 실제 토글 버튼을 그대로 옮긴 것 — 아이콘은
 * "지금 상태"가 아니라 "눌렀을 때 바뀔 상태"를 보여주는 원본 관례(cssclass가 반대
 * 상태의 아이콘을 가리킴)를 그대로 따른다.
 *
 * 브랜드 영역도 원본 그대로: "통합 업무 포털" 같은 자체 브랜드 텍스트는 원본에 없다.
 * 원본은 sta_TF_logo(NEXACRO 로고 이미지, cursor:pointer)를 클릭하면 Static00_onclick이
 * this.openMain()을 호출해 홈으로 이동한다 — 별도의 "홈" 메뉴 버튼은 없다(createMenuButton은
 * gdsMenu level==0만, 즉 그리드/컴포넌트/유용한 기능/연동확장 4개 그룹만 순회한다).
 */
export function GlobalNav({ groups, activeGroupId, onSelectGroup, onToggleMegaMenu }: GlobalNavProps) {
  const { lang, toggleLanguage, t } = useLanguage();
  const { themeMode, toggleTheme } = useTheme();

  return (
    <header className="gnb">
      <Link to="/" className="gnb-logo" aria-label="NEXACRO">
        <img
          src={themeMode === "D" ? "/nexacro-icons/dark/img_TF_logo.png" : "/nexacro-icons/img_TF_logo.png"}
          alt="NEXACRO"
        />
      </Link>

      <nav className="gnb-groups">
        {groups
          .filter((g) => g.id !== "home")
          .map((g) => (
            <button
              key={g.id}
              className={`gnb-group-btn${g.id === activeGroupId ? " active" : ""}`}
              onClick={() => onSelectGroup(g.id)}
            >
              {lang === "ko" ? g.label : g.labelEn}
            </button>
          ))}
      </nav>

      <div className="gnb-toggles">
        {/* 원본 top.xfdl.js의 x좌표 순서 그대로: btnLanguage(1113) < btnTheme(1163) < btnMegaMenu(1213) */}
        <button
          type="button"
          className="gnb-icon-btn gnb-lang-btn"
          onClick={toggleLanguage}
          title={t("shell.langToggle")}
          aria-label={t("shell.langToggle")}
        >
          {lang === "ko" ? "EN" : "한"}
        </button>
        <button
          type="button"
          className="gnb-icon-btn"
          onClick={toggleTheme}
          title={t("shell.themeToggle")}
          aria-label={t("shell.themeToggle")}
        >
          {themeMode === "L" ? "🌙" : "☀️"}
        </button>
        <button
          type="button"
          className="gnb-icon-btn"
          onClick={onToggleMegaMenu}
          title={t("shell.megaMenuToggle")}
          aria-label={t("shell.megaMenuToggle")}
        >
          ▦
        </button>
      </div>
    </header>
  );
}
