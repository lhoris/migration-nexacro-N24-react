// 원본 comp::menu.xfdl의 Dataset들(_setContents)에서 그대로 추출한 실제 데이터.

// dsMenu: Menu00(캐스케이딩 상단 메뉴)와 grdLeftMenu(트리 그리드)가 공유하는 계층 데이터.
// 6개 그룹(Big Menu1~6), 각 그룹은 Middle Menu 2개, 각 Middle은 Small Menu 2~3개.
export interface MenuNode {
  id: string;
  caption: string;
  level: 0 | 1 | 2;
}

export const MENU_TREE: MenuNode[] = (() => {
  const rows: MenuNode[] = [];
  for (let big = 1; big <= 6; big++) {
    const bigCode = String(big).padStart(2, "0");
    rows.push({ id: `${bigCode}0000`, caption: `Big Menu${big}`, level: 0 });
    rows.push({ id: `${bigCode}0100`, caption: "Middle Menu1", level: 1 });
    rows.push({ id: `${bigCode}0101`, caption: "Small Menu1", level: 2 });
    rows.push({ id: `${bigCode}0102`, caption: "Small Menu2", level: 2 });
    rows.push({ id: `${bigCode}0200`, caption: "Middle Menu2", level: 1 });
    rows.push({ id: `${bigCode}0201`, caption: "Small Menu1", level: 2 });
    rows.push({ id: `${bigCode}0202`, caption: "Small Menu2", level: 2 });
    rows.push({ id: `${bigCode}0203`, caption: "Small Menu3", level: 2 });
  }
  return rows;
})();

// dsMegaMenu: 원본이 항상 "01" 그룹(Big Menu1)만 고정으로 보여주는 메가메뉴 데이터.
// Middle Menu1~5, 각각 자식 개수가 다르다(3/1/4/2/7) — 실제 원본 데이터 그대로.
export interface MegaMenuColumn {
  title: string;
  items: string[];
}

export const MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  { title: "Middle Menu1", items: ["Small Menu1", "Small Menu2", "Small Menu3"] },
  { title: "Middle Menu2", items: ["Small Menu1"] },
  { title: "Middle Menu3", items: ["Small Menu1", "Small Menu2", "Small Menu3", "Small Menu4"] },
  { title: "Middle Menu4", items: ["Small Menu1", "Small Menu2"] },
  { title: "Middle Menu5", items: ["Small Menu1", "Small Menu2", "Small Menu3", "Small Menu4", "Small Menu5", "Small Menu6", "Small Menu7"] },
];

// dsGridMenu: grdAutoMenu 본목록(12행) — MENU_CD는 dsMenu1의 UP_MENU_CD와 매칭되는 실제 값.
export interface AutoMenuRow {
  menuCd: string;
  name: string;
}

export const AUTO_MENU_ROWS: AutoMenuRow[] = [
  { menuCd: "010100", name: "Big Menu1" },
  { menuCd: "010200", name: "Big Menu2" },
  { menuCd: "010300", name: "Big Menu3" },
  { menuCd: "020100", name: "Big Menu4" },
  { menuCd: "020200", name: "Big Menu5" },
  { menuCd: "020300", name: "Big Menu6" },
  { menuCd: "030100", name: "Big Menu7" },
  { menuCd: "030200", name: "Big Menu8" },
  { menuCd: "040100", name: "Big Menu9" },
  { menuCd: "040200", name: "Big Menu10" },
  { menuCd: "090100", name: "Big Menu11" },
  { menuCd: "090200", name: "Big Menu12" },
];

// dsMenu1: grdAutoMenu가 호버 시 UP_MENU_CD로 필터링해 보여주는 하위 메뉴(Small MenuN) 목록.
// AUTO_MENU_ROWS의 menuCd를 key로 그 자식들을 그대로 옮김.
export const AUTO_MENU_CHILDREN: Record<string, string[]> = {
  "010100": ["Small Menu1", "Small Menu2"],
  "010200": ["Small Menu1", "Small Menu2", "Small Menu3"],
  "010300": ["Small Menu1", "Small Menu2", "Small Menu3", "Small Menu4", "Small Menu5"],
  "020100": [
    "Small Menu1",
    "Small Menu2",
    "Small Menu3",
    "Small Menu4",
    "Small Menu5",
    "Small Menu6",
    "Small Menu7",
    "Small Menu8",
    "Small Menu9",
  ],
  "020200": ["Small Menu1", "Small Menu2", "Small Menu3", "Small Menu4", "Small Menu5", "Small Menu6"],
  "020300": ["Small Menu1", "Small Menu2", "Small Menu3"],
  "030100": ["Small Menu1", "Small Menu2", "Small Menu3", "Small Menu4", "Small Menu5"],
  "030200": ["Small Menu1", "Small Menu2", "Small Menu3"],
  "040100": ["Small Menu1"],
  "040200": ["Small Menu1", "Small Menu2", "Small Menu3"],
  "090100": ["Small Menu1", "Small Menu2", "Small Menu3"],
  "090200": ["Small Menu1", "Small Menu2"],
};

// dsHideMenu: 아코디언 메뉴가 펼칠 때 쓰는 5개 고정 항목 — 원본도 어느 Big MenuN 버튼을
// 클릭하든 항상 동일한 이 5개를 보여준다(원본 데이터 자체의 특징, 버그가 아니라 그대로 재현).
export const ACCORDION_ITEMS = ["Small Menu1", "Small Menu2", "Small Menu3", "Small Menu4", "Small Menu5"];

export const ACCORDION_BUTTONS = ["Big Menu1", "Big Menu2", "Big Menu3", "Big Menu4", "Big Menu5", "Big Menu6"];
