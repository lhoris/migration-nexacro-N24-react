// comp::components.xfdl(메뉴 "기본 컴포넌트", 실제 menu_id 20100)의 각 Dataset _setContents를
// 그대로 옮긴 실제 데이터. ds_menu는 정의만 있고 어떤 컴포넌트에도 바인딩되지 않는 원본의
// 죽은 데이터셋이라 옮기지 않았다(원본에도 대응하는 화면 요소가 없음, 실측 확인).

export interface GridRow {
  checked: boolean;
  id: string;
  name: string;
  price: string;
  date: string;
  approved: boolean;
}

// ds_grid
export const GRID_ROWS: GridRow[] = [
  { id: "#101", name: "James", price: "11,235", date: "2020-08-01", checked: false, approved: true },
  { id: "#102", name: "Bill", price: "15,698", date: "2020-08-01", checked: true, approved: true },
  { id: "#103", name: "Elyse", price: "15,756", date: "2020-08-02", checked: true, approved: false },
  { id: "#104", name: "Jenny", price: "15,756", date: "2020-08-02", checked: true, approved: true },
];

// ds_rdo — Radio(James=0,Jenny=1), 원본 초기값 value="1"(Jenny 선택)
export const RADIO_OPTIONS = [
  { code: "0", label: "James" },
  { code: "1", label: "Jenny" },
];

// ds_combo — Combo/MultiCombo가 공유하는 것과 별개로 Combo 전용(list1/list2/list3)
export const COMBO_OPTIONS = [
  { code: "1", label: "list1" },
  { code: "2", label: "list2" },
  { code: "3", label: "list3" },
];

// ds_checkboxset — CheckBoxSet(2열: James/Bill, Elyse/Jenny), Elyse만 readonly
export const CHECKBOXSET_OPTIONS = [
  { code: "0", label: "James", readonly: false },
  { code: "1", label: "Bill", readonly: false },
  { code: "2", label: "Elyse", readonly: true },
  { code: "3", label: "Jenny", readonly: false },
];

// ds_multicombo — MultiCombo 3종(tag/text/count)이 공유
export const MULTICOMBO_OPTIONS = [
  { code: "0", label: "James", readonly: false },
  { code: "1", label: "Bill", readonly: false },
  { code: "2", label: "Elyse", readonly: false },
  { code: "3", label: "Jenny", readonly: false },
];

export interface ListViewItem {
  empNo: string;
  org: string;
  name: string;
  imgUrl: string;
  job: string;
  tel: string;
  email: string;
}

// dsList
export const LIST_VIEW_ITEMS: ListViewItem[] = [
  { empNo: "01070101", org: "TOBESOFT", name: "James", imgUrl: "img_WF_lstvProfile01.png", job: "CEO", tel: "010-1111-1234", email: "ceo@tobesoft.com" },
  { empNo: "01070102", org: "R&D", name: "Bill", imgUrl: "img_WF_lstvProfile02.png", job: "Team Leader", tel: "010-2222-2345", email: "Bill@tobesoft.com" },
  { empNo: "01070103", org: "Strategy Team", name: "Elyse", imgUrl: "img_WF_lstvProfile03.png", job: "General Manager", tel: "010-3333-4567", email: "Elyse@tobesoft.com" },
  { empNo: "01070104", org: "IT Infra Team", name: "Jenny", imgUrl: "img_WF_lstvProfile04.png", job: "General Manager", tel: "010-4444-5555", email: "Jenny@tobesoft.com" },
  { empNo: "01070105", org: "Law Team", name: "John", imgUrl: "img_WF_lstvProfile05.png", job: "General Manager", tel: "010-5555-9874", email: "John@tobesoft.com" },
  { empNo: "01070106", org: "General Affairs Team", name: "Edward", imgUrl: "img_WF_lstvProfile06.png", job: "Assistant Manager", tel: "010-6666-9632", email: "Edward@tobesoft.com" },
  { empNo: "01070107", org: "HR Team", name: "Michael", imgUrl: "img_WF_lstvProfile07.png", job: "Assistant Manager", tel: "010-7777-0258", email: "Michael@tobesoft.com" },
];
