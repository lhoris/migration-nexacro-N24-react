// 원본 Nexacro와 동일한 방식(messageid -> {ko,en} 문자열)의 리소스 딕셔너리.
// "grid.*" / "*.desc" 처럼 실제 Nexacro messageid와 이름이 같은 키는 값도
// _resource_/_stringrc_/{ko,en}/stringresource.xstring.json에서 그대로 가져온 진짜 원문이다.
// "shell.*" / "sff.*" / "popup.*"는 React Host Shell 자체 크롬이나 이번에 새로 만든 UI
// 문구라 원본에 대응 항목이 없어 우리가 직접 번역했다.
//
// 예외 둘:
// 1) grid.function.sort.title.desc의 영문 원문은 끝에 오타로 따옴표(')가 하나 더 붙어
//    있다("...'Multi-sort' button.'") — 실제 사용자에게 노출되는 오타라 그대로 옮기지
//    않고 제거했다.
// 2) GridSortPop.xfdl/GridFilterPop.xfdl(다중 정렬·필터 팝업)은 원본이 아예 다국어 처리가
//    안 되어 있다(적용 버튼이 다중정렬 팝업은 "적용" 고정, 필터 팝업은 "Apply" 고정 —
//    langCode를 안 봄). 여기서는 그 미비를 그대로 재현하지 않고 두 팝업 다 t()로
//    제대로 번역했다 — "나머지 메뉴 화면 개발의 동일 패턴"으로 삼기엔 원본의 이 부분은
//    버그이지 지킬 fidelity가 아니라고 판단했다.
export type LangCode = "ko" | "en";

export const RESOURCES: Record<LangCode, Record<string, string>> = {
  ko: {
    // -- 실제 Nexacro stringresource (grid::function.xfdl / function_desc.xfdl) --
    "grid.function.sort": "정렬",
    "grid.function.sort.title.desc":
      "그리드 헤더를 클릭하거나 '다중 정렬' 버튼으로 데이터를 정렬해 보세요. (※ Ctrl키 : 다중 정렬)",
    "grid.function.sort.desc":
      "그리드의 컬럼 헤더를 클릭하여 컬럼이 참조하는 필드 값들을 기준으로 데이터를 정렬시킬 수 있습니다. 동일한 필드를 반복해서 클릭하면 오름차순/내림차순/취소 상태로 변환되고, 'Ctrl' 키를 누르고 헤더를 클릭하면 클릭한 순서대로 복수의 컬럼을 정렬할 수 있습니다.\n\n그리드의 헤더 영역에서 마우스 오른쪽 버튼을 클릭하였을 때 표시되는 컨텍스트 메뉴를 통해서도 정렬할 수 있습니다. 컨텍스트 메뉴에서 '다중 정렬'를 선택하면 팝업 화면이 호출되고 '+'버튼을 눌러서 행을 추가한 뒤 컬럼 명과 정렬 순서를 선택하고 '적용' 버튼을 눌러서 정렬할 수 있습니다.",
    "grid.function.sort.button": "다중 정렬",
    "grid.function.filter": "필터",
    "grid.function.filter.desc":
      "필터를 적용할 컬럼의 헤더 영역에서 마우스 오른쪽 버튼을 클릭하였을 때 표시되는 컨텍스트 메뉴에서 '필터'를 선택하면 팝업 화면이 호출되고 표시할 데이터를 체크한 뒤 '적용' 버튼을 누르면 필터 조건에 해당되는 행들만 표시됩니다.\n\n'조건부 필터' 버튼을 클릭하면 조건식을 통해 필터를 적용할 수 있습니다.",
    "grid.dynamic.clear": "초기화",
    "grid.function.find": "찾기",
    "grid.function.find.word": "단어",
    "grid.function.case": "대/소문자 구분",
    "grid.function.option": "옵션",
    "grid.function.find.scope": "범위",
    "grid.function.find.condition": "조건",
    "grid.function.find.direction": "방향",
    "grid.function.find.position": "위치",
    "grid.function.search": "검색",
    "grid.function.search.desc":
      "그리드에 있는 데이터를 검색합니다. 그리드 상단에 검색하고자 하는 단어를 입력한 후 엔터를 치거나 검색버튼을 이용하면 해당 데이터를 순차적으로 선택해 줍니다.",
    // ds_scope / ds_condition / ds_direction / ds_position (function.xfdl.js 실제 값)
    "scope.all": "전체",
    "scope.row": "행",
    "scope.col": "열",
    "condition.equal": "일치",
    "condition.inclusion": "포함",
    "direction.prev": "이전",
    "direction.next": "다음",
    "position.current": "현재위치",
    "position.first": "처음부터",
    // grdSort 헤더(messageid="name"/"address"/"company", 나머지는 fallback만 있는 TEXT())
    name: "이름",
    date: "날짜",
    amount: "총액",
    address: "주소",
    company: "회사",
    approval: "승인",

    // -- Shell 크롬 (React Host Shell 자체 문구, 원본 대응 없음) --
    "shell.noSubmenu": "하위 메뉴 없음",
    "shell.directScreenTitle": "이 화면은 Nexacro가 직접 서빙한다 (풀 페이지 이동)",
    // 실제 footer.xfdl.js의 copyright.short 원문 (TOBESOFT 데모사이트 문구 그대로)
    "shell.footerCopyright":
      "본 넥사크로 데모사이트는 사용자 체험을 위해 최적화되어 있습니다. 모든 예제는 오류를 피하기 위해 지속적으로 개선하고 있지만 콘텐츠의 완전한 정확성을 보장할 수는 없습니다. COPYRIGHT© BY 2021 TOBESOFT.CO.LTD. ALL RIGHTS RESERVED",
    "shell.footerTagline": "Nexacro → React 하이브리드 현대화 · Migration Factory Walking Skeleton",
    "shell.langToggle": "언어 전환 (KO/EN)",
    "shell.themeToggle": "테마 전환 (라이트/다크)",
    "shell.megaMenuToggle": "전체 메뉴",

    // -- SortFilterFind 화면 자체 추가 문구 --
    "sff.macHint": "Mac에서는 Ctrl 대신 ⌘(Cmd)키를 사용하세요.",
    "sff.legacyLink": "원본 Nexacro 화면으로 이동",
    "sff.findHint":
      "그리드 셀을 먼저 클릭해 커서를 두고 찾기를 실행하면, 커서 기준으로 다음/이전 일치 셀을 찾아 노란 테두리로 표시한다.",
    "sff.findEmptyAlert": "찾고자 하는 단어를 입력해 주세요",
    "sff.findRestartConfirm": "모두 찾았습니다. 처음부터 다시 검색하시겠습니까?",

    // -- 팝업 공용 --
    "popup.cancel": "취소",
    "popup.apply": "적용",
    "popup.add": "추가",
    "popup.delete": "삭제",
    "popup.up": "위로",
    "popup.down": "아래로",
    "popup.column": "항목",
    "popup.asc": "오름차순",
    "popup.desc": "내림차순",
    "popup.selectAll": "(전체 선택)",
    "popup.filterTitleSuffix": "필터",

    // -- 홈 화면(frame::main.xfdl → main_rolling/main_realosmu/main_reference.xfdl) --
    "rolling.grid.title": "그리드 컴포넌트",
    "rolling.grid.sub":
      "가장 유용하게 사용되는 컴포넌트로서 데이터를 빠르게 표현하고 효과적으로 탐색할 수 있는 다양한 편의 기능을 제공합니다. 그리드 컴포넌트의 놀라운 기능과 성능을 체험해 보세요!",
    "rolling.component.title": "UI 컴포넌트",
    "rolling.component.sub":
      "80개의 컴포넌트 및 라이브러리는 웹 어플리케이션의 구축에 필요한 시간을 절감시키며 편리한 사용자 비즈니스 환경을 제공합니다. 다양한 컴포넌트 기능을 활용하여 당신의 웹어플리케이션을 더욱 손쉽게 구현해 보세요!",
    "rolling.useful.title": "유용한 편의 기능",
    "rolling.useful.sub":
      "컴포넌트와 라이브러리를 복합적으로 활용하여 웹 위젯, 단축키, 개인화, Drag & Drop 인터페이스 등과 같은 더욱 편리한 기능을 제공합니다. 다양하게 활용된 샘플을 통해 확인해보세요!",
    "rolling.interface.title": "유연한 연동 그리고 확장",
    "rolling.interface.sub":
      "풍부한 UI/UX를 구성하기 위해 기본 컴포넌트 외에 3rd party나 오픈소스 라이브러리를 연동할 수 있습니다. 이러한 연동을 위해 편리한 인터페이스 확장기능을 제공하며 다양한 사례를 통해 확인해보세요!",
    "main.learnmore": "더 알아보기",
    "osmu.desc":
      "넥사크로는 웹과 네이티브의 경계를 허물고 하나의 소스로 모든 비즈니스 환경에 완벽하게 대응하는 IT환경을 구축하는 유일한 Real OSMU 솔루션 입니다.\n사용자 중심의 UI·UX 구축 실현을 통해 당신의 기업 가치를 높이세요!",
    ide: "개발 생산성을 높이는 IDE",
    "ide.desc":
      "사용성 모델 기반의 분석과 실제 사용자 테스트를 거쳐 최고의 개발 도구로 새롭게 태어난 넥사크로 스튜디오는 개발자의 편의성을 높이는 기능을 대폭 강화하고 디자이너, 퍼블리셔 등 역할에 따른 개별 인터페이스를 제공합니다.",
  },
  en: {
    "grid.function.sort": "Sort",
    "grid.function.sort.title.desc":
      "Click the grid header (use control key for multi-sort) or click the 'Multi-sort' button.",
    "grid.function.sort.desc":
      "You can sort the data by the field values that the column references by clicking the column header in the grid. Clicking the same field repeatedly converts it to an ascending/ descending/cancel state; pressing the 'Ctrl' key and clicking the header allows you to sort multiple columns in the order you clicked.\n\nYou can also sort through the context menu that appears when you right-click in the header area of the grid. Selecting 'Multiple Sort' in the context menu invokes a pop-up screen, allows you to add rows by pressing the '+' button, select the column name and sort order, and press the 'Apply' button to sort.",
    "grid.function.sort.button": "Multi Sort",
    "grid.function.filter": "Filter",
    "grid.function.filter.desc":
      "If you select 'Filter' in the context menu that appears when you right-click in the header area of the column to which you want to apply the filter, a pop-up screen will be called, and the 'Apply' button will be pressed to display only rows corresponding to the filter conditions.\n\nClick the 'conditional filter' button to apply the filter through a conditional expression.",
    "grid.dynamic.clear": "Init",
    "grid.function.find": "Find",
    "grid.function.find.word": "word",
    "grid.function.case": "case sensitive",
    "grid.function.option": "Option",
    "grid.function.find.scope": "Scope",
    "grid.function.find.condition": "Condition",
    "grid.function.find.direction": "Direction",
    "grid.function.find.position": "Position",
    "grid.function.search": "Search",
    "grid.function.search.desc":
      "Search for data in the grid. Enter the word you want to search at the top of the grid and hit enter or use the search button to select the data in sequence.",
    "scope.all": "all",
    "scope.row": "row",
    "scope.col": "col",
    "condition.equal": "equal",
    "condition.inclusion": "inclusion",
    "direction.prev": "prev",
    "direction.next": "next",
    "position.current": "current",
    "position.first": "first",
    name: "Name",
    date: "Date",
    amount: "Amount",
    address: "Address",
    company: "Company",
    approval: "Approval",

    "shell.noSubmenu": "No submenu items",
    "shell.directScreenTitle": "This screen is served directly by Nexacro (full page navigation)",
    "shell.footerCopyright":
      "Nexacro Demonstration Site is optimized for User Experience. Every examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. COPYRIGHT©TOBESOFT.CO.LTD. ALL RIGHTS RESERVED",
    "shell.footerTagline": "Nexacro → React Hybrid Modernization · Migration Factory Walking Skeleton",
    "shell.langToggle": "Switch language (KO/EN)",
    "shell.themeToggle": "Switch theme (Light/Dark)",
    "shell.megaMenuToggle": "All Menus",

    "sff.macHint": "On Mac, use ⌘ (Cmd) instead of Ctrl.",
    "sff.legacyLink": "Go to Original Nexacro Screen",
    "sff.findHint":
      "Click a grid cell first to place the cursor, then run Find — it locates the next/previous matching cell from the cursor and highlights it with a yellow border.",
    "sff.findEmptyAlert": "Please enter a word to search for",
    "sff.findRestartConfirm": "All matches found. Search again from the beginning?",

    "popup.cancel": "Cancel",
    "popup.apply": "Apply",
    "popup.add": "Add",
    "popup.delete": "Delete",
    "popup.up": "Up",
    "popup.down": "Down",
    "popup.column": "Column",
    "popup.asc": "Ascending",
    "popup.desc": "Descending",
    "popup.selectAll": "(Select All)",
    "popup.filterTitleSuffix": "Filter",

    "rolling.grid.title": "Grid Component",
    "rolling.grid.sub":
      "As the most useful component, it provides various convenient functions to quickly load data and search effectively. Experience the amazing features and performance of this grid component!",
    "rolling.component.title": "UI Components",
    "rolling.component.sub":
      "80 components and libraries reduce the time required to build web applications and provide a convenient user business environment. Implement your web application more easily by utilizing various component functions!",
    "rolling.useful.title": "Useful Features",
    "rolling.useful.sub":
      "It provides more convenient functions such as web widgets, shortcut keys, personalization, drag & drop interface, etc. by using components and libraries in a complex way. Check it out through samples that have been used in various ways!",
    "rolling.interface.title": "Interface & Extension",
    "rolling.interface.sub":
      "In order to compose a rich UI/UX, in addition to basic components, 3rd party or open source libraries are linked. We provide a convenient interface extension function for this linkage, and check it out through various examples!",
    "main.learnmore": "Learn More",
    "osmu.desc":
      "Nexacro is the only Real OSMU solution that breaks the boundaries between web and native and builds an IT environment that perfectly responds to all business environments with one source. Increase your company value by realizing user-centered UI·UX systems!",
    ide: "Increase dev-productivity",
    "ide.desc":
      "Nexacro Studio has been reborn as the best development tool through the analysis of availability models and actual user tests. It greatly enhances functions that improve the convenience of developers and provides respective interface for designers, publishers and others.",
  },
};
