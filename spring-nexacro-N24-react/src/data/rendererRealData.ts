// Nexacro grid::renderer.xfdl의 각 Dataset(_setContents)에서 그대로 추출한 실제 데이터.

// Dataset00 — "셀 표시 유형" 그리드(Grid00)에 바인딩되는 유일한 1행.
export const CELL_DISPLAY_ROW = {
  column0: "2020-01-01", // Calendar (bind:Column0)
  column1: true, // Checkbox (bind:Column1)
  column2: "Code1", // Combo (bind:Column2, Dataset04 code/data)
  column3: 1000000, // Currency (bind:Column3)
  column4: "2020-01-01", // Date (bind:Column4)
  column5: "", // Edit (bind:Column5) — 원본 Dataset에 값 없음(빈 문자열)
  column6: "img_TF_logo.png", // Image (bind:Column6, url('imagerc::img_TF_logo.png'))
  column8: "5000000", // MaskEdit (bind:Column8, maskeditformat 미지정 — 원본 그대로 노출)
  column9: "ABCDEFG\nHIJKLMNOP", // Textarea (bind:Column9)
  column10: "0", // Radio (bind:Column10) — 0번 옵션 선택됨
};

// Dataset04 — Combo(Column2)의 code/data 옵션.
export const COMBO_OPTIONS = [
  { code: "Code1", data: "Code1" },
  { code: "Code2", data: "Code2" },
];

// Dataset01 — "트리 그룹핑" 그리드(Grid01). no/lvl/team/count.
export interface TreeRow {
  no: string;
  lvl: number;
  team: string;
  count: number;
}
export const TREE_GROUPING_ROWS: TreeRow[] = [
  { no: "1", lvl: 0, team: "Group1", count: 4 },
  { no: "2", lvl: 1, team: "Team1", count: 3 },
  { no: "3", lvl: 1, team: "Team2", count: 1 },
  { no: "4", lvl: 0, team: "Group2", count: 4 },
  { no: "5", lvl: 1, team: "Team3", count: 2 },
  { no: "6", lvl: 1, team: "Team4", count: 2 },
];

// Tabulator dataTree용으로 위 flat 데이터를 부모/자식 구조로 다시 묶은 것(같은 실데이터,
// 표현 구조만 다름). 원본 Grid01은 실제로 각 행마다 개별 +/-(treeitembutton)로 접고 펼 수
// 있다 — Playwright로 원본 DOM(celltreeitem.treeitembutton)을 직접 클릭해 확인했다.
export interface TreeGroupingNode {
  no: string;
  team: string;
  count: number;
  _children?: TreeGroupingNode[];
}
export const TREE_GROUPING_TREE: TreeGroupingNode[] = [
  {
    no: "1",
    team: "Group1",
    count: 4,
    _children: [
      { no: "2", team: "Team1", count: 3 },
      { no: "3", team: "Team2", count: 1 },
    ],
  },
  {
    no: "4",
    team: "Group2",
    count: 4,
    _children: [
      { no: "5", team: "Team3", count: 2 },
      { no: "6", team: "Team4", count: 2 },
    ],
  },
];

// Dataset02 — "멀티 포맷" 그리드(Grid02). format1: date+name(합성) / format2: date+first+last+gender.
export interface MultiFormatRow {
  date: string;
  first_name: string;
  last_name: string;
  gender: string;
}
export const MULTI_FORMAT_ROWS: MultiFormatRow[] = [
  { date: "2020-01-01", first_name: "John", last_name: "Doe", gender: "Male" },
  { date: "2020-02-01", first_name: "Jane", last_name: "Roe", gender: "Female" },
];

// Dataset03 — "표현식" 그리드(Grid03). a/b는 편집 가능, a+b/a*b는 expr 컬럼, c는 combo(Dataset04),
// d는 c=='Code1'이면 Edit, 아니면 Combo(Dataset05)로 바뀌는 expr 기반 동적 에디터.
export interface ExpressionRow {
  a: number;
  b: number;
  c: string;
  d: string;
}
export const EXPRESSION_ROWS: ExpressionRow[] = [
  { a: 10000, b: 100, c: "Code1", d: "" },
  { a: 20000, b: 50, c: "Code2", d: "" },
];

// Dataset05 — 표현식 그리드 D컬럼(c!='Code1'일 때)의 combo 옵션.
export const DETAIL_COMBO_OPTIONS = [
  { code: "1", data: "Detail Code1" },
  { code: "2", data: "Detail Code2" },
];

// Dataset001 — "헤드 Control 표시 유형" 그리드(Grid001). 헤드 행의 라이브 컨트롤을 바꾸면
// Grid001_onheadvaluechanged가 바인딩된 컬럼 값을 전체 행에 그대로 전파한다.
export interface HeadControlRow {
  no: string;
  checkbox: boolean; // Column1
  combo: string; // Column2 (dsCombo)
  multiCombo: string[]; // Column3 (dsMCombo, "Code1,Code2" 형태)
  calendar: string; // Column4
  radio: boolean; // Column6 (원래 문자열 "0"/"1"이었는데 둘 다 truthy라 boolean으로 저장)
  mask: string; // Column5
  edit: string; // Column7
  textarea: string; // Column8
}
export const HEAD_CONTROL_ROWS: HeadControlRow[] = [
  {
    no: "1",
    checkbox: true,
    combo: "Code1",
    multiCombo: ["Code1", "Code2"],
    calendar: "2023-03-03",
    radio: true,
    mask: "1000000",
    edit: "ABC",
    textarea: "ABCDEFG\nHIJKLMNOP",
  },
  {
    no: "2",
    checkbox: false,
    combo: "Code2",
    multiCombo: ["Code2", "Code3"],
    calendar: "2024-04-04",
    radio: false,
    mask: "2000000",
    edit: "DEF",
    textarea: "ABCDEFG\nHIJKLMNOP",
  },
  {
    no: "3",
    checkbox: true,
    combo: "Code3",
    multiCombo: ["Code3", "Code4"],
    calendar: "2025-05-05",
    radio: true,
    mask: "3000000",
    edit: "GHI",
    textarea: "ABCDEFG\nHIJKLMNOP",
  },
  {
    no: "4",
    checkbox: false,
    combo: "Code4",
    multiCombo: ["Code4", "Code5"],
    calendar: "2026-06-06",
    radio: false,
    mask: "4000000",
    edit: "JKL",
    textarea: "ABCDEFG\nHIJKLMNOP",
  },
  {
    no: "5",
    checkbox: false,
    combo: "Code5",
    multiCombo: ["Code1", "Code5"],
    calendar: "2027-07-07",
    radio: false,
    mask: "5000000",
    edit: "MNO",
    textarea: "ABCDEFG\nHIJKLMNOP",
  },
];

// dsCombo — Grid001 Combo 헤드/바디 공용 옵션.
export const HEAD_COMBO_OPTIONS = ["Code1", "Code2", "Code3", "Code4", "Code5"];
// dsMCombo — Grid001 MultiCombo 헤드/바디 공용 옵션.
export const HEAD_MULTI_COMBO_OPTIONS = ["Code1", "Code2", "Code3", "Code4", "Code5"];
