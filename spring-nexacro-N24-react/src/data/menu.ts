// docs/migration/ 전략의 실제 대상: src/main/webapp/nexacro/Application.xadl.js의
// gdsAllMenu Dataset(_setContents)에 박혀 있던 실제 메뉴 트리를 그대로 옮긴 것.
// 예시 데이터가 아니라 이 저장소가 실제로 서빙 중인 Nexacro 데모 사이트의 진짜 메뉴다.
// desktop === "1" (웹 대상) 행만 추출했고, "Mobile API" 그룹(전부 desktop=0)은 제외했다.
// labelEn/tooltipEn도 같은 Dataset의 실제 caption_en/tooltiptext_en 컬럼 값이다(추정 번역 아님).

export type MenuTarget = "react" | "nexacro";

export interface MenuItem {
  id: string;
  parentId: string | null;
  label: string;
  /** 실제 gdsAllMenu.caption_en 값. Application.xadl.js의 changeLanguage()가
   *  "caption_"+langCode 컬럼을 그대로 읽어 메뉴를 다시 그리는 것과 동일한 패턴. */
  labelEn: string;
  /** 리프 노드(React Router 경로)에만 존재 */
  path?: string;
  /** 실제 Nexacro menu_id. root.xfdl의 onChangeHistory(hash)가 그대로 읽는 값이라
   *  /nexacro/launch.html#${nexacroMenuId} 로 그 화면에 직접 딥링크된다. */
  nexacroMenuId?: string;
  /** 실제 gdsAllMenu.url 값 (module::file.xfdl 형식) */
  xfdlFile?: string;
  tooltip?: string;
  tooltipEn?: string;
  target?: MenuTarget;
  /** true면 React 라우트를 거치지 않고 LNB에서 클릭 즉시 실제 Nexacro 화면으로
   *  풀 페이지 이동한다(iframe 아님, SPA도 아님) — 이 메뉴는 "진짜로 Nexacro가
   *  서빙"하는 파일럿 1개 화면임을 보여주기 위한 것. */
  serveDirect?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  // React Host Shell 자체 랜딩 페이지 — 이것만 실제로 React 네이티브 화면이다.
  { id: "home", parentId: null, label: "홈", labelEn: "Home", path: "/", target: "react" },

  // 그리드 (grp 1, 실제 menu_id 10000)
  { id: "10000", parentId: null, label: "그리드", labelEn: "Grid" },
  { id: "10100", parentId: "10000", label: "정렬, 필터, 찾기", labelEn: "Sort, Filter, Find", path: "/m/function", nexacroMenuId: "10100", xfdlFile: "grid::function.xfdl", target: "react", tooltip: "그리드 데이터를 정렬/ 필터/ 찾기 합니다.", tooltipEn: "Sort/filter/find grid data." },
  { id: "10200", parentId: "10000", label: "다양한 표현", labelEn: "Renderer", path: "/m/renderer", nexacroMenuId: "10200", xfdlFile: "grid::renderer.xfdl", target: "react", tooltip: "그리드 데이터를 셀 표시 유형/ 트리 그룹핑/ 멀티포맷/ 표현식 등으로 표현 해 줍니다.", tooltipEn: "It expresses grid data in cell display type/tree grouping/multi-format/expression, etc." },
  { id: "10300", parentId: "10000", label: "페이징", labelEn: "Pagination", path: "/m/pagination", nexacroMenuId: "10300", xfdlFile: "grid::pagination.xfdl", target: "react", tooltip: "버튼 스타일과 무한 스크롤 타입으로 페이징이 가능 합니다.", tooltipEn: "Paging is possible with button style and infinite scroll type." },
  { id: "10400", parentId: "10000", label: "개인화", labelEn: "Personalization", path: "/m/personalization", nexacroMenuId: "10400", xfdlFile: "grid::personalization.xfdl", target: "react", tooltip: "사용자마다 원하는 포맷을 유지 할 수 있습니다.", tooltipEn: "Each user can maintain the desired format." },
  { id: "10500", parentId: "10000", label: "피벗", labelEn: "Pivot", path: "/m/pivot", nexacroMenuId: "10500", xfdlFile: "grid::pivot.xfdl", target: "react", tooltip: "데이터를 원하는 행/열로 피봇팅하여 표현합니다.", tooltipEn: "Represent data by pivoting it to the desired row/column." },
  { id: "10600", parentId: "10000", label: "대용량 데이터", labelEn: "Large Data", path: "/m/largedata", nexacroMenuId: "10600", xfdlFile: "grid::largedata.xfdl", target: "react", tooltip: "많은 양의 데이터를 조회 가능 합니다.", tooltipEn: "A large amount of data can be viewed." },
  { id: "11300", parentId: "10000", label: "분할 조회", labelEn: "Split lookup", path: "/m/progressload", nexacroMenuId: "11300", xfdlFile: "grid::progressload.xfdl", target: "react", tooltip: "대용량 데이터 조회 시 row 단위로 분할 조회 합니다.", tooltipEn: "When searching for large amounts of data, split search by row unit." },
  { id: "10700", parentId: "10000", label: "퀀텀 그리드", labelEn: "Quantum Grid", path: "/m/quantum", nexacroMenuId: "10700", xfdlFile: "grid::quantum.xfdl", target: "react", tooltip: "그리드 데이터를 동적으로 그룹핑 하여 트리 형태로 표현합니다.", tooltipEn: "Grid data is dynamically grouped and expressed in tree form." },
  { id: "10800", parentId: "10000", label: "틀 고정", labelEn: "Freeze Panes", path: "/m/freezepanes", nexacroMenuId: "10800", xfdlFile: "grid::freezepanes.xfdl", target: "react", tooltip: "그리드 스크롤시 원하는 셀을 고정 할 수 있습니다.", tooltipEn: "You can freeze any cell you want when the grid scrolls." },
  { id: "10900", parentId: "10000", label: "스마트 스크롤", labelEn: "Smart Scroll", path: "/m/smartscroll", nexacroMenuId: "10900", xfdlFile: "grid::smartscroll.xfdl", target: "react", tooltip: "그리드 스크롤시 고속의 스크롤을 지원 합니다.", tooltipEn: "Supports high-speed scrolling during grid scrolling." },
  { id: "11000", parentId: "10000", label: "내려받기 & 가져오기", labelEn: "Export & Import", path: "/m/export", nexacroMenuId: "11000", xfdlFile: "grid::export.xfdl", target: "react", tooltip: "엑셀로 Export & Import 가능 합니다.", tooltipEn: "Export & Import to Excel is possible." },
  { id: "11100", parentId: "10000", label: "복사 & 붙여넣기", labelEn: "Copy & Paste", path: "/m/copypaste", nexacroMenuId: "11100", xfdlFile: "grid::copypaste.xfdl", target: "react", tooltip: "그리드와 엑셀 간의 복사 & 붙여넣을 수 있습니다.", tooltipEn: "You can copy & paste between grid and excel." },
  { id: "11200", parentId: "10000", label: "드래그 & 드롭", labelEn: "Drag & Drop", path: "/m/dragndrop", nexacroMenuId: "11200", xfdlFile: "grid::dragndrop.xfdl", target: "react", tooltip: "원하는 컬럼으로 그리드를 동적으로 생성, 데이터 이동이 가능 합니다.", tooltipEn: "It is possible to dynamically create a grid with desired columns and move data." },
  { id: "11400", parentId: "10000", label: "동적 그리드", labelEn: "Dynamic Grid", path: "/m/dynamic", nexacroMenuId: "11400", xfdlFile: "grid::dynamic.xfdl", target: "react", tooltip: "그리드를 원하는 형태로 커스터마이징 하여 사용 할 수 있습니다.", tooltipEn: "You can customize the grid to the desired shape and use it." },

  // 컴포넌트 (grp 2, 실제 menu_id 20000)
  { id: "20000", parentId: null, label: "컴포넌트", labelEn: "Components" },
  { id: "20100", parentId: "20000", label: "기본 컴포넌트", labelEn: "Basic Components", path: "/m/components", nexacroMenuId: "20100", xfdlFile: "comp::components.xfdl", target: "react", tooltip: "다양한 기본 컴포넌트가 제공 됩니다.", tooltipEn: "Various basic components are provided." },
  { id: "20200", parentId: "20000", label: "모바일 퍼스트 컴포넌트", labelEn: "Mobile First Components", path: "/m/mobilecomponents", nexacroMenuId: "20200", xfdlFile: "comp::mobilecomponents.xfdl", target: "react", tooltip: "모바일 퍼스트 컴포넌트가 제공 됩니다.", tooltipEn: "Mobile-first components are provided." },
  { id: "20300", parentId: "20000", label: "파일 전송", labelEn: "File Transfer", path: "/m/filetransfer", nexacroMenuId: "20300", xfdlFile: "comp::filetransfer.xfdl", target: "react", tooltip: "파일을 서버에 업로드/ 다운로드 할 수 있습니다.", tooltipEn: "You can upload/download files to/from the server." },
  { id: "20500", parentId: "20000", label: "리스트뷰", labelEn: "List View", path: "/m/listview", nexacroMenuId: "20500", xfdlFile: "comp::listview.xfdl", target: "react", tooltip: "비 정형화된 형식으로 데이터 표현이 가능 합니다.", tooltipEn: "Data can be expressed in an informal format." },
  { id: "20600", parentId: "20000", label: "Fit to Contents", labelEn: "Fit to Contents", path: "/m/fittocontents", nexacroMenuId: "20600", xfdlFile: "comp::fittocontents.xfdl", target: "react", tooltip: "텍스트의 사이즈에 따라 컴포넌트의 크기 자동 조정이 가능 합니다.", tooltipEn: "It is possible to automatically adjust the size of the component according to the size of the text." },
  { id: "20700", parentId: "20000", label: "컴포넌트 동적 생성", labelEn: "Dynamic Generate", path: "/m/generate", nexacroMenuId: "20700", xfdlFile: "comp::generate.xfdl", target: "react", tooltip: "컴포넌트의 동적 생성 시간을 확인 할 수 있습니다.", tooltipEn: "You can check the dynamic creation time of the component." },
  { id: "20800", parentId: "20000", label: "구글 지도", labelEn: "Google Map", path: "/m/googlemap", nexacroMenuId: "20800", xfdlFile: "comp::googlemap.xfdl", target: "react", tooltip: "구글맵 컴포넌트로 손쉽게 구글 지도 연동이 가능 합니다.", tooltipEn: "Google Maps can be easily linked with Google Maps component." },
  { id: "20900", parentId: "20000", label: "다양한 메뉴 표현", labelEn: "Menu", path: "/m/menu", nexacroMenuId: "20900", xfdlFile: "comp::menu.xfdl", target: "react", tooltip: "다양한 메뉴로 화면을 유연하게 구성 할 수 있습니다.", tooltipEn: "You can flexibly configure the screen with various menus." },
  { id: "21000", parentId: "20000", label: "양방향 바인딩", labelEn: "Two-way Data binding", path: "/m/binding", nexacroMenuId: "21000", xfdlFile: "comp::binding.xfdl", target: "react", tooltip: "데이터셋과 바인드된 모든 컴포넌트의 데이터를 자동으로 실시간 동기화 합니다.", tooltipEn: "Data of all components bound to the dataset are automatically synchronized in real time." },
  { id: "21100", parentId: "20000", label: "그래픽스", labelEn: "Graphics", path: "/m/graphics", nexacroMenuId: "21100", xfdlFile: "comp::graphics.xfdl", target: "react", tooltip: "그래픽스 컴포넌트로 선이나 도형을 그릴 수 있습니다.", tooltipEn: "You can draw lines or shapes with the graphics component." },
  { id: "21200", parentId: "20000", label: "애니메이션", labelEn: "Animation", path: "/m/animation", nexacroMenuId: "21200", xfdlFile: "comp::animation.xfdl", target: "nexacro", tooltip: "애니메이션 동적 효과를 적용합니다.", tooltipEn: "Apply animation dynamic effects." },
  { id: "21300", parentId: "20000", label: "Arrangement", labelEn: "Arrangement", path: "/m/arrangement", nexacroMenuId: "21300", xfdlFile: "comp::arrangement.xfdl", target: "nexacro", tooltip: "상대좌표로 컴포넌트의 위치 설정이 가능 합니다.", tooltipEn: "It is possible to set the position of the component in relative coordinates." },

  // 유용한 기능 (grp 4, 실제 menu_id 40000)
  { id: "40000", parentId: null, label: "유용한 기능", labelEn: "Utility" },
  { id: "40100", parentId: "40000", label: "다양한 팝업 표현", labelEn: "Pop-up", path: "/m/popup", nexacroMenuId: "40100", xfdlFile: "sample::popup.xfdl", target: "nexacro", tooltip: "다양한 형태로 팝업 표현이 가능 합니다.", tooltipEn: "Pop-up expression is possible in various forms." },
  { id: "40300", parentId: "40000", label: "웹 위젯", labelEn: "Web Widget", path: "/m/personalization", nexacroMenuId: "40300", xfdlFile: "sample::personalization.xfdl", target: "nexacro", tooltip: "사용자가 원하는 위젯을 구성하여 화면 운영이 가능 합니다.", tooltipEn: "Screen operation is possible by configuring the widgets the user wants." },
  { id: "40400", parentId: "40000", label: "RESTFul", labelEn: "RESTFul", path: "/m/restful", nexacroMenuId: "40400", xfdlFile: "sample::restful.xfdl", target: "nexacro", tooltip: "REST API 활용 가능 합니다.", tooltipEn: "REST API can be utilized." },
  { id: "40500", parentId: "40000", label: "단축키", labelEn: "Hot Key", path: "/m/hotkey", nexacroMenuId: "40500", xfdlFile: "sample::hotkey.xfdl", target: "nexacro", tooltip: "버튼마다 원하는 키 매핑을 할 수 있습니다.", tooltipEn: "You can set the key mapping you want for each button." },
  { id: "40600", parentId: "40000", label: "드래그 & 드롭", labelEn: "Drag & Drop", path: "/m/portlet", nexacroMenuId: "40600", xfdlFile: "sample::portlet.xfdl", target: "nexacro", tooltip: "포틀릿 화면으로 원하는 화면 배치를 할 수 있습니다.", tooltipEn: "You can arrange the screen you want with the portlet screen." },
  { id: "41000", parentId: "40000", label: "참조", labelEn: "Reference", path: "/m/reference", nexacroMenuId: "41000", xfdlFile: "sample::reference.xfdl", target: "nexacro", tooltip: "넥사크로로 개발된 다양한 사이트를 확인 할 수 있습니다.", tooltipEn: "You can check various sites developed with Nexacro." },
  { id: "41100", parentId: "40000", label: "데이터오브젝트", labelEn: "DataObject", path: "/m/dataobject", nexacroMenuId: "41100", xfdlFile: "sample::dataobject.xfdl", target: "nexacro" },

  // 연동/확장 (grp 5, 실제 menu_id 50000)
  { id: "50000", parentId: null, label: "연동/확장", labelEn: "Extension" },
  { id: "50100", parentId: "50000", label: "차트 & 그리드", labelEn: "Chart & Grid", path: "/m/chartngrid", nexacroMenuId: "50100", xfdlFile: "external::chartngrid.xfdl", target: "nexacro", tooltip: "DxChart와 그리드 연동 화면 입니다.", tooltipEn: "This is a DxChart and Grid linkage screen." },
  { id: "50200", parentId: "50000", label: "레포트", labelEn: "Report", path: "/m/report", nexacroMenuId: "50200", xfdlFile: "external::report.xfdl", target: "nexacro", tooltip: "유비디시젼의 유비리포트와 연동 화면 입니다.", tooltipEn: "This is a screen linked with UbiReport of UbiDecision." },
  { id: "50300", parentId: "50000", label: "PDF 뷰어", labelEn: "PDF Viewer", path: "/m/pdfviewer", nexacroMenuId: "50300", xfdlFile: "external::pdfviewer.xfdl", target: "nexacro", tooltip: "오픈소스 PDF.js 연동 화면 입니다.", tooltipEn: "This is an open source PDF.js link screen." },
  { id: "50500", parentId: "50000", label: "확장 컴포넌트", labelEn: "Extension Component", path: "/m/extensioncomponent", nexacroMenuId: "50500", xfdlFile: "external::extensioncomponent.xfdl", target: "nexacro", tooltip: "모듈로 개발한 다양한 컴포넌트가 보여지는 화면입니다.", tooltipEn: "This is a screen shows the various components developed as modules." },
  { id: "50800", parentId: "50000", label: "X-PUSH", labelEn: "X-PUSH", path: "/m/xpush", nexacroMenuId: "50800", xfdlFile: "external::xpush.xfdl", target: "nexacro", tooltip: "X-PUSH 와 연동하여 실시간 메시지를 송/수신 할 수 있습니다.", tooltipEn: "You can send/receive real-time messages by connect with X-PUSH." },
  { id: "50900", parentId: "50000", label: "STT / TTS", labelEn: "STT / TTS", path: "/m/sttntts", nexacroMenuId: "50900", xfdlFile: "external::sttntts.xfdl", target: "nexacro", tooltip: "STT와 TTS를 할 수 있습니다.", tooltipEn: "You can do STT and TTS." },
  { id: "51000", parentId: "50000", label: "Intersection Observer", labelEn: "Intersection Observer", path: "/m/intersectionobserver", nexacroMenuId: "51000", xfdlFile: "external::intersectionobserver.xfdl", target: "nexacro", tooltip: "Intersection Observer API를 사용하여 랜덤의 이미지를 무한으로 나타낼 수 있습니다.", tooltipEn: "You can display an infinite number of random images using the Intersection Observer API." },
];

export const getTopGroups = (items: MenuItem[]) => items.filter((m) => m.parentId === null);
export const getChildren = (items: MenuItem[], parentId: string) => items.filter((m) => m.parentId === parentId);
export const isLeaf = (item: MenuItem) => Boolean(item.path);
export const getLeaves = (items: MenuItem[]) => items.filter(isLeaf);
