import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MENU_ITEMS, getChildren, getTopGroups } from "../data/menu";
import { useLanguage } from "./LanguageContext";

interface MegaMenuProps {
  onClose: () => void;
}

/**
 * Nexacro frame::megamenu.xfdl(root.xfdl의 divMegaMenu, btnMegaMenu로 토글)의 React 대체재.
 * 원본은 컬럼 5개를 하드코딩(setMenu의 `for (i=0, len=5; ...)`)하지만 실제 gdsMenu의
 * level==0 행은 4개(그리드/컴포넌트/유용한 기능/연동확장)뿐이라 5번째 컬럼은 항상 빈 채로
 * 생성된다 — 실사용자가 보는 화면과 다른 그 빈 칸을 재현하는 대신 실제 존재하는 4개만 그린다.
 * 마찬가지로 컬럼 제목 색상을 나누던 switch문(case "010000"~"050000")도 실제 gdsAllMenu id
 * 포맷("10000" 등, 6자리 앞자리 0 없음)과 안 맞아 항상 default(sta_WF_megaTitleBlank, 무채색)로
 * 떨어진다 — 그래서 여기서도 컬럼 제목을 모두 동일한 스타일로 통일했다.
 */
export function MegaMenu({ onClose }: MegaMenuProps) {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const groups = getTopGroups(MENU_ITEMS).filter((g) => g.id !== "home");

  // 원본 root_onkeydown: e.keycode==27(Esc)이면 divMegaMenu.visible=false
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const go = (path?: string) => {
    if (!path) return;
    onClose();
    navigate(path);
  };

  return (
    <div className="megamenu-backdrop" onClick={onClose}>
      <div className="megamenu-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="megamenu-close" onClick={onClose} aria-label="close">
          ✕
        </button>
        <div className="megamenu-columns">
          {groups.map((g) => (
            <div className="megamenu-column" key={g.id}>
              <div className="megamenu-column-title">{lang === "ko" ? g.label : g.labelEn}</div>
              {getChildren(MENU_ITEMS, g.id).map((item) =>
                item.serveDirect && item.nexacroMenuId ? (
                  <a
                    key={item.id}
                    className="megamenu-item"
                    href={`/nexacro/launch.html#${item.nexacroMenuId}`}
                  >
                    {lang === "ko" ? item.label : item.labelEn}
                  </a>
                ) : (
                  <button key={item.id} type="button" className="megamenu-item" onClick={() => go(item.path)}>
                    {lang === "ko" ? item.label : item.labelEn}
                  </button>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
