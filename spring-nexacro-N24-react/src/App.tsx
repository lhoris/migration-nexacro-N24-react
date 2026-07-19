import { useMemo, useState, type ComponentType } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { GlobalNav } from "./shell/GlobalNav";
import { SideNav } from "./shell/SideNav";
import { Footer } from "./shell/Footer";
import { MegaMenu } from "./shell/MegaMenu";
import { WorkArea } from "./routes/WorkArea";
import { SortFilterFind } from "./routes/converted/SortFilterFind";
import { Renderer } from "./routes/converted/Renderer";
import { Pagination } from "./routes/converted/Pagination";
import { Personalization } from "./routes/converted/Personalization";
import { Pivot } from "./routes/converted/Pivot";
import { LargeData } from "./routes/converted/LargeData";
import { SplitLookup } from "./routes/converted/SplitLookup";
import { QuantumGrid } from "./routes/converted/QuantumGrid";
import { FreezePanes } from "./routes/converted/FreezePanes";
import { SmartScroll } from "./routes/converted/SmartScroll";
import { ExportImport } from "./routes/converted/ExportImport";
import { CopyPaste } from "./routes/converted/CopyPaste";
import { DragDrop } from "./routes/converted/DragDrop";
import { DynamicGrid } from "./routes/converted/DynamicGrid";
import { Components } from "./routes/converted/Components";
import { MobileComponents } from "./routes/converted/MobileComponents";
import { FileTransfer } from "./routes/converted/FileTransfer";
import { ListView } from "./routes/converted/ListView";
import { FitToContents } from "./routes/converted/FitToContents";
import { DynamicGenerate } from "./routes/converted/DynamicGenerate";
import { GoogleMap } from "./routes/converted/GoogleMap";
import { Menu } from "./routes/converted/Menu";
import { Home } from "./routes/home/Home";
import { MENU_ITEMS, getChildren, getLeaves, getTopGroups, isLeaf, type MenuTarget } from "./data/menu";

// menu_id -> 실제로 React 전환이 끝난 화면의 전용 컴포넌트.
const CONVERTED_SCREENS: Record<string, ComponentType> = {
  home: Home,
  "10100": SortFilterFind,
  "10200": Renderer,
  "10300": Pagination,
  "10400": Personalization,
  "10500": Pivot,
  "10600": LargeData,
  "11300": SplitLookup,
  "10700": QuantumGrid,
  "10800": FreezePanes,
  "10900": SmartScroll,
  "11000": ExportImport,
  "11100": CopyPaste,
  "11200": DragDrop,
  "11400": DynamicGrid,
  "20100": Components,
  "20200": MobileComponents,
  "20300": FileTransfer,
  "20500": ListView,
  "20600": FitToContents,
  "20700": DynamicGenerate,
  "20800": GoogleMap,
  "20900": Menu,
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const groups = useMemo(() => getTopGroups(MENU_ITEMS), []);
  const leaves = useMemo(() => getLeaves(MENU_ITEMS), []);

  // ADR-005 target 플래그의 런타임 오버라이드. 실제 구현에서는 Navigation 서비스가 소유.
  const [targetOverrides, setTargetOverrides] = useState<Record<string, MenuTarget>>({});
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const targetOf = (id: string): MenuTarget => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return targetOverrides[id] ?? item?.target ?? "nexacro";
  };

  const toggleTarget = (id: string) => {
    setTargetOverrides((prev) => ({
      ...prev,
      [id]: (prev[id] ?? MENU_ITEMS.find((m) => m.id === id)?.target) === "react" ? "nexacro" : "react",
    }));
  };

  // 현재 경로에 해당하는 리프를 찾아 활성 그룹을 역산한다 (LNB가 어떤 그룹을 펼칠지 결정).
  const activeLeaf = leaves.find((l) => l.path === location.pathname);
  const activeGroupId = activeLeaf ? (activeLeaf.parentId ?? activeLeaf.id) : (groups[0]?.id ?? "");

  const activeGroup = groups.find((g) => g.id === activeGroupId) ?? groups[0];
  const childrenOfActiveGroup = activeGroup ? getChildren(MENU_ITEMS, activeGroup.id) : [];
  const sideNavItems = activeGroup && isLeaf(activeGroup) ? [activeGroup] : childrenOfActiveGroup;

  // 원본 frame::form.js의 openMain()은 divLeftMenu.width를 0으로 접고 divWork를 전체 폭(1263)으로
  // 펼친다 — LNB는 openMenu()로 실제 메뉴 화면에 들어갔을 때만(width 273) 나타난다. 즉 홈 화면에는
  // LNB가 아예 없다. "/"(홈)에서만 SideNav를 걷어내 그 구조를 그대로 재현한다.
  const isHome = location.pathname === "/";

  const handleSelectGroup = (id: string) => {
    const group = MENU_ITEMS.find((m) => m.id === id);
    if (!group) return;
    if (isLeaf(group)) {
      navigate(group.path!);
      return;
    }
    const firstChild = getChildren(MENU_ITEMS, id)[0];
    if (firstChild?.path) navigate(firstChild.path);
  };

  return (
    <div className={`shell${isHome ? " no-lnb" : ""}`}>
      <GlobalNav
        groups={groups}
        activeGroupId={activeGroupId}
        onSelectGroup={handleSelectGroup}
        onToggleMegaMenu={() => setMegaMenuOpen((v) => !v)}
      />
      {megaMenuOpen && <MegaMenu onClose={() => setMegaMenuOpen(false)} />}
      {!isHome && (
        <SideNav
          groupLabel={activeGroup?.label ?? ""}
          groupLabelEn={activeGroup?.labelEn ?? ""}
          children={sideNavItems}
          targetOf={targetOf}
        />
      )}

      <Routes>
        {/* "홈"(id: "home") 자체가 path "/"인 leaf라 아래 map()에서 이미 자기 자신의 Route를
            등록한다 — 예전에 여기 있던 <Navigate to={leaves[0].path}>는 leaves[0]가 바로 그
            "홈"이라 "/"를 "/"로 리다이렉트하는 자기 자신 무한 루프였고, 그 탓에 홈 화면이
            아예 렌더링되지 않는 버그였다. 죽은 코드라 제거했다. */}
        {/* serveDirect 항목은 React가 라우트를 소유하지 않는다 — SideNav가 실제 <a href>로
            바로 내보내므로 여기서도 등록하지 않아 "React가 이 경로를 갖고 있다"는
            착각을 만들지 않는다. */}
        {leaves
          .filter((item) => !item.serveDirect)
          .map((item) => {
            const Converted = CONVERTED_SCREENS[item.id];
            return (
              <Route
                key={item.id}
                path={item.path}
                element={
                  Converted ? (
                    <Converted />
                  ) : (
                    <WorkArea item={item} target={targetOf(item.id)} onToggleTarget={toggleTarget} />
                  )
                }
              />
            );
          })}
      </Routes>

      <Footer />
    </div>
  );
}
