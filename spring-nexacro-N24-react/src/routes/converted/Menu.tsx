import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import {
  ACCORDION_BUTTONS,
  ACCORDION_ITEMS,
  AUTO_MENU_CHILDREN,
  AUTO_MENU_ROWS,
  MEGA_MENU_COLUMNS,
  MENU_TREE,
  type MenuNode,
} from "../../data/menuScreenData";
import "./menu.css";

type Translate = (key: string, fallback?: string) => string;

/**
 * Nexacro comp::menu.xfdl(메뉴 "다양한 메뉴 표현", 실제 menu_id 20900)을 React로 옮긴 화면.
 * Dataset도 svc:: 호출도 없는 순수 클라이언트 쇼케이스라 5가지 메뉴 컴포넌트를 그대로
 * 재현한다: (1) Menu00 캐스케이딩 상단 메뉴 (2) 메가메뉴 (3) 트리 그리드 메뉴(Menu List)
 * (4) 오토메뉴(호버 팝업) (5) 아코디언 메뉴.
 *
 * 원본에 실제 버그가 있었다(Playwright로 원본을 직접 클릭해 확인) — 메가메뉴 리프 항목을
 * 클릭하면 alert가 "Small Menu1  undefined"라고 뜨고(잘못된 메시지 키 참조), 콘솔에
 * "this.fnSetFrameSize is not a function" 타입 에러가 매번 떴다(존재하지 않는 함수 호출).
 * 사용자에게 물어봤고 "자연스럽게 고쳐서 정상 동작"을 선택받아, alert는 실제 i18n 값
 * (comp.menu.call="호출 !")을 써서 "Small Menu1 호출 !"로 뜨게 하고 존재하지 않는 함수
 * 호출은 옮기지 않았다.
 *
 * 그 외 원본의 실제 동작(버그가 아니라 데이터 자체의 특징)은 그대로 재현: Menu00/트리
 * 그리드/오토메뉴 팝업은 리프 항목을 클릭해도 아무 부수효과가 없고(원본 소스에 핸들러가
 * 아예 없거나 정의되지 않음), 아코디언 메뉴는 어느 Big MenuN 버튼을 눌러도 항상 같은
 * 5개 항목(dsHideMenu)을 보여준다.
 */
export function Menu() {
  const { t } = useLanguage();

  return (
    <main className="work">
      <div className="work-card react mn-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#20900">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="mn-page-title">{t("comp.menu")}</h1>

        <section className="mn-section">
          <h2 className="mn-section-title">{t("menu.component")}</h2>
          <CascadeMenu />
        </section>

        <section className="mn-section">
          <h2 className="mn-section-title">{t("mega.menu")}</h2>
          <MegaMenuDemo t={t} />
        </section>

        <section className="mn-section">
          <h2 className="mn-section-title">{t("various.menu")}</h2>
          <div className="mn-triple-row">
            <MenuListTree />
            <AutoMenuList />
            <AccordionMenu />
          </div>
        </section>

        <section className="mn-desc">
          <h3 className="mn-desc-title">{t("comp.menu")}</h3>
          <p className="mn-desc-body">{t("comp.menu.desc")}</p>
          <h3 className="mn-desc-subtitle">{t("comp.menu.menutype")}</h3>
          <p className="mn-desc-body">{t("comp.menu.menutype.desc")}</p>
        </section>
      </div>
    </main>
  );
}

// -- (1) Menu00: 캐스케이딩 상단 메뉴 --
function CascadeMenu() {
  const bigNodes = MENU_TREE.filter((n) => n.level === 0);
  const [openBig, setOpenBig] = useState<string | null>(null);
  const [openMiddle, setOpenMiddle] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenBig(null);
        setOpenMiddle(null);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const childrenOf = (parent: MenuNode): MenuNode[] => {
    const idx = MENU_TREE.indexOf(parent);
    const out: MenuNode[] = [];
    for (let i = idx + 1; i < MENU_TREE.length; i++) {
      if (MENU_TREE[i].level <= parent.level) break;
      if (MENU_TREE[i].level === parent.level + 1) out.push(MENU_TREE[i]);
    }
    return out;
  };

  const closeAll = () => {
    setOpenBig(null);
    setOpenMiddle(null);
  };

  return (
    <div className="mn-cascade" ref={rootRef}>
      {bigNodes.map((big) => (
        <div key={big.id} className="mn-cascade-item">
          <button
            type="button"
            className={`mn-cascade-toplink${openBig === big.id ? " mn-cascade-toplink-active" : ""}`}
            onClick={() => {
              setOpenBig((prev) => (prev === big.id ? null : big.id));
              setOpenMiddle(null);
            }}
            onMouseEnter={() => {
              // 원본 실측: 최상단 드롭다운이 이미 열려 있는 상태에서 다른 Big MenuN으로
              // 마우스만 옮겨도 그쪽 드롭다운으로 바로 전환된다(클릭 불필요).
              if (openBig !== null && openBig !== big.id) {
                setOpenBig(big.id);
                setOpenMiddle(null);
              }
            }}
          >
            {big.caption}
          </button>
          {openBig === big.id && (
            <div className="mn-cascade-dropdown">
              {childrenOf(big).map((mid) => (
                <div key={mid.id} className="mn-cascade-mid-wrap" onMouseEnter={() => setOpenMiddle(mid.id)}>
                  <button type="button" className="mn-cascade-mid">
                    {mid.caption} <span className="mn-cascade-arrow">▸</span>
                  </button>
                  {openMiddle === mid.id && (
                    <div className="mn-cascade-flyout">
                      {childrenOf(mid).map((small) => (
                        <button key={small.id} type="button" className="mn-cascade-leaf" onClick={closeAll}>
                          {small.caption}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// -- (2) 메가메뉴 --
function MegaMenuDemo({ t }: { t: Translate }) {
  const [open, setOpen] = useState(false);

  const onLeafClick = (item: string) => {
    window.alert(`${item} ${t("comp.menu.call")}`);
    setOpen(false);
  };

  return (
    <div className="mn-mega-wrap">
      <button type="button" className="mn-mega-btn" onClick={() => setOpen((v) => !v)}>
        {open ? t("comp.menu.closeMenu") : t("comp.menu.callMenu")}
      </button>
      {open && (
        <div className="mn-mega-panel">
          {MEGA_MENU_COLUMNS.map((col) => (
            <div key={col.title} className="mn-mega-col">
              <div className="mn-mega-col-head">{col.title}</div>
              {col.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="mn-mega-leaf"
                  onClick={() => onLeafClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// -- (3) 트리 그리드 메뉴("Menu List") --
function MenuListTree() {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(MENU_TREE.map((n) => n.id)));
  const [selected, setSelected] = useState<string | null>(null);

  const childrenOf = (parent: MenuNode): MenuNode[] => {
    const idx = MENU_TREE.indexOf(parent);
    const out: MenuNode[] = [];
    for (let i = idx + 1; i < MENU_TREE.length; i++) {
      if (MENU_TREE[i].level <= parent.level) break;
      if (MENU_TREE[i].level === parent.level + 1) out.push(MENU_TREE[i]);
    }
    return out;
  };

  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderNode = (node: MenuNode): React.ReactNode => {
    const kids = childrenOf(node);
    const isOpen = expanded.has(node.id);
    return (
      <div key={node.id} className="mn-tree-node">
        <div
          className={`mn-tree-row mn-tree-row-lvl${node.level}${selected === node.id ? " mn-tree-row-selected" : ""}`}
          style={{ paddingLeft: 8 + node.level * 16 }}
          onClick={() => setSelected(node.id)}
        >
          {kids.length > 0 ? (
            <button
              type="button"
              className="mn-tree-toggle"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(node.id);
              }}
            >
              {isOpen ? "▾" : "▸"}
            </button>
          ) : (
            <span className="mn-tree-toggle-spacer" />
          )}
          <span>{node.caption}</span>
        </div>
        {kids.length > 0 && isOpen && <div>{kids.map((k) => renderNode(k))}</div>}
      </div>
    );
  };

  return (
    <div className="mn-tree-card">
      <div className="mn-tree-head">Menu List</div>
      <div className="mn-tree-body">{MENU_TREE.filter((n) => n.level === 0).map((n) => renderNode(n))}</div>
    </div>
  );
}

// -- (4) 오토메뉴(호버 팝업) --
function AutoMenuList() {
  const [hoverCd, setHoverCd] = useState<string | null>(null);
  const [hoverTop, setHoverTop] = useState(0);

  const onEnterRow = (menuCd: string, e: React.MouseEvent<HTMLDivElement>) => {
    setHoverCd(menuCd);
    setHoverTop(e.currentTarget.offsetTop);
  };

  return (
    <div className="mn-auto-card" onMouseLeave={() => setHoverCd(null)}>
      <div className="mn-auto-head">AutoMenu</div>
      <div className="mn-auto-body">
        {AUTO_MENU_ROWS.map((row) => (
          <div
            key={row.menuCd}
            className={`mn-auto-row${hoverCd === row.menuCd ? " mn-auto-row-active" : ""}`}
            onMouseEnter={(e) => onEnterRow(row.menuCd, e)}
          >
            {row.name}
          </div>
        ))}
      </div>
      {hoverCd && (
        <div className="mn-auto-popup" style={{ top: hoverTop }}>
          {AUTO_MENU_CHILDREN[hoverCd]?.map((item) => (
            <button key={item} type="button" className="mn-auto-popup-item" onClick={() => setHoverCd(null)}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// -- (5) 아코디언 메뉴 --
function AccordionMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mn-accordion">
      {ACCORDION_BUTTONS.map((label, index) => (
        <div key={label} className="mn-accordion-item">
          <button type="button" className="mn-accordion-btn" onClick={() => setActiveIndex(index)}>
            {label}
          </button>
          <div className={`mn-accordion-panel${activeIndex === index ? " mn-accordion-panel-open" : ""}`}>
            <div className="mn-accordion-panel-inner">
              {ACCORDION_ITEMS.map((item) => (
                <div key={item} className="mn-accordion-leaf">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
