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

    // -- 실제 Nexacro stringresource (grid::renderer.xfdl / renderer_desc.xfdl) --
    "grid.renderer": "다양한 그리드 표현",
    "grid.cell.display.type": "셀 표시 유형",
    "grid.cell.display.type.desc":
      "셀은 그리드를 구성하는 오브젝트 중 하나로 그리드와 별도의 속성으로 갖습니다. Dataset의 컬럼을 바인딩해 사용할 수도 있고, 셀의 displaytype, edittype 속성을 설정하면 Button, Combo, CheckBox, Image, ProgressBar, Edit 등의 컴포넌트 형태로 표현하거나 Tree 형태로도 표현할 수 있습니다.\n\n그리드 컴포넌트의 각 셀 별로 'displaytype' 속성 설정에 따라 버튼, 이미지 등 다양한 표현이 가능합니다.\n'displaytype'은 셀이 편집상태가 아닐 때 바인드 된 데이터가 화면에 표시되는 형식을 설정하는 속성으로 기본 19가지 형식을 제공하고 별도로 설정하지 않으면 바인드 된 데이터 형식에 맞게 자동으로 표시되는 'normal'로 적용됩니다.",
    "grid.tree.grouping": "트리 그룹핑",
    "grid.tree.grouping.collapse": "접기",
    "grid.tree.grouping.expand": "펼치기",
    "grid.tree.grouping.desc":
      "셀의 'displaytype' 속성을 'treeitemcontol'로 설정하면 셀 영역이 Tree 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 텍스트로 표시됩니다.\n셀의 Tree 관련 속성(treelevel, treestate 등)을 설정하고 'edittype'을 'tree'로 설정하면 셀에 표시된 트리버튼을 클릭하여 트리가 Collapse/Expand 가 가능하게 합니다.\n바인드된 데이타셋의 'keystring' 속성을 통해 컬럼을 그룹핑하면 그리드에 소계를 함께 표시할 수 있습니다.",
    "grid.multi.format": "멀티 포맷",
    "grid.multi.format.desc":
      "같은 데이터를 다양한 관점에서 살펴보거나 사용 권한에 따라 데이터 일부를 감추어야 하는 경우 하나의 Grid에서 여러 Format을 사용해 데이터를 처리할 수 있습니다.",
    "grid.multi.format.editor.desc":
      "그리드를 편집하는 Grid Contents Editor에서 새로 Format을 추가하거나 기존 Format을 복사한 후 일부 항목을 수정할 수 있습니다.\nGrid에서 Format을 적용할 때는 'formatid' 속성값을 지정해 원하는 Format을 선택합니다.",
    "grid.expression": "표현식",
    "grid.expression.desc":
      "A와 B 컬럼에 숫자 값을 입력하면 셀의 expr 속성을 통해 A+B, A*B 결과값이 옆에 있는 셀에 표시됩니다. 간단한 표현식은 expr 속성에 바로 표현할 수 있고, 표현식이 길어지거나 복잡할 경우 사용자 함수를 정의해서 호출할 수 있습니다.\n보여지는 텍스트 값 외에 displaytype이나 cssclass 등 셀의 속성들 별로 expr을 적용할 수도 있습니다. C 컬럼의 콤보에서 값을 선택하면 선택한 값에 따라 옆의 컬럼이 Edit 또는 Combo로 변환됩니다.",
    "grid.cell.head.display.type": "헤드 Control 표시 유형",

    // -- 실제 Nexacro stringresource (grid::pagination.xfdl / pagination_desc.xfdl) --
    "grid.pagination": "페이징 처리",
    "grid.pagination.desc":
      "넥사크로의 그리드는 한 번에 많은 데이터를 표현할 수 있습니다. 하지만 고객의 요구에 의해 데이터를 페이지 단위로 쪼개서 표현할 경우 다양한 방식으로 표현할 수 있습니다.\n일반적으로 사용하는 페이지 네비게이션을 이용하거나 스크롤 시 다음 데이터를 조회하는 무한 스크롤, 버튼을 클릭 시 다음 데이터를 조회하여 덧붙여주는 등 원하는 방식을 적용할 수 있고, 이러한 페이징 처리는 넥사크로에서 제공하는 컴포넌트들을 이용하여 원하는 형태의 기능을 구현할 수 있고 공통 모듈로 등록하여 사용할 수 있습니다.",
    "grid.pagination.buttonstyle": "버튼 스타일",
    "grid.pagination.buttonstyle.desc":
      "가장 많이 사용하는 페이징 처리 방식은 페이징 버튼으로 표현하는 것입니다. 해당 페이지 번호의 버튼을 클릭하면 데이터를 다시 조회해서 표현합니다.\n한 페이지 당 표현할 수 있는 기본 건수(예: 10~50)를 선택할 수 있고, 원하는 페이지로 바로 이동할 수 있도록 바로 가기 기능도 적용할 수 있습니다.",
    "grid.pagination.infinitescrolling": "무한 스크롤",
    "grid.pagination.infinitescrolling.desc":
      "그리드의 데이터 영역에서 마우스 휠을 이용해 가장 아래로 내리거나 스크롤 트랙바를 끝으로 내리면 다음 데이터를 조회해서 자동으로 추가해 주는 방식입니다.\n이 경우 계속해서 스크롤 시 데이터를 추가하기 때문에 너무 많은 데이터를 로드하는 경우 성능 저하를 야기시킬 수 있습니다.\n스크롤을 이용하지 않고 '더보기' 같은 버튼 클릭 시 데이터를 추가하는 방식도 적용할 수 있습니다.",
    "inquiry.result": "조회 결과",
    // 원본 Button00은 cssclass="btn_WF_inquiry"인 아이콘 전용 버튼이라 messageid가 없다 —
    // React 쪽 접근성을 위해 새로 붙인 라벨(원본 대응 없음).
    "pagination.search": "조회",

    // -- 실제 Nexacro stringresource (grid::personalization.xfdl / personalization_desc.xfdl) --
    "grid.personalization": "개인화",
    "grid.personalization.default": "초기화",
    "grid.personalization.save": "저장",
    "grid.personalization.desc":
      "최근에는 시스템 사용자들의 개인화 기능에 대한 요구가 많습니다. 개발자가 정의해 놓은 컬럼의 순서나 사이즈 등을 변경 후 다음에 시스템에 접속해도 그 포맷이 유지되기를 원합니다.\n넥사크로의 그리드에서 제공하는 API와 HTML5에서 제공하는 Local Storage 기능을 이용하여 개인화 기능을 사용할 수 있습니다.",
    "grid.personalization.cellmoving": "셀 이동",
    "grid.personalization.cellmoving.desc":
      "그리드의 cellmovingtype 속성을 설정하면 사용자가 마우스 드래그 앤 드롭을 이용하여 컬럼의 위치를 변경할 수 있습니다.",
    "grid.personalization.cellsizing": "셀 크기 변경",
    "grid.personalization.cellsizing.desc":
      "그리드에서 한 셀에 많은 양의 데이터가 들어 있으면 전체 내용을 다 볼 수 없는 경우가 있습니다. 이럴 때 엑셀에서처럼 자유롭게 컬럼과 로우 크기를 조절하는 기능이 있으면 사용자가 좀 더 편하게 그리드를 이용할 수 있습니다.\ncellsizingtype 속성은 사용자가 마우스를 셀이나 Head의 경계 부분에 가져가면 포인터가 바뀌고 그 상태에서 마우스 버튼을 누르고 움직이면 셀의 크기를 변경할 수 있습니다.",
    "grid.personalization.columnhiding": "컬럼 숨기기",
    "grid.personalization.columnhiding.desc":
      "숨기고자 하는 컬럼에서 마우스 오른쪽 클릭을 하면 컨텍스트 메뉴가 표시되고 '컬럼 숨기기' 메뉴를 클릭하면 컬럼이 보이지 않게 됩니다. 숨긴 컬럼을 다시 표시할 때는 Head 영역 아무 컬럼에서나 마우스 오른쪽 클릭하여 컨텍스트 메뉴에서 '컬럼 보이기' 메뉴에서 '전체 컬럼 보이기'나 특정 컬럼을 선택하면 다시 표시됩니다.",
    "grid.personalization.rowhiding": "행 숨기기",
    "grid.personalization.rowhiding.desc":
      "숨기고자 하는 행에서 마우스 오른쪽 클릭을 하면 컨텍스트 메뉴가 표시되고 '행 숨기기' 메뉴를 클릭하면 행이 보이지 않게 됩니다. 숨긴 행을 다시 표시할 때는 Body 영역 아무 행에서나 마우스 오른쪽 클릭하여 컨텍스트 메뉴에서 '행 보이기' 메뉴에서 '전체 행 보이기'나 특정 행을 선택하면 다시 표시됩니다.",
    "grid.personalization.default.desc":
      "이렇게 변경된 포맷 정보를 '저장'버튼을 눌러서 저장한 뒤 다시 이 화면에 접속하면 저장된 포맷이 자동으로 적용이 됩니다. '초기화' 버튼을 누르면 개발자가 정의한 기본 포맷이 적용됩니다.",

    // -- 실제 Nexacro stringresource (grid::pivot.xfdl / pivot_desc.xfdl) --
    "grid.pivot": "피벗",
    "grid.pivot.desc":
      "엑셀에서는 데이터를 분석 하기 위해 피벗 기능을 활용합니다. 사용자가 행/열을 드래그 앤 드롭으로 손쉽게 조작하고 결과를 확인할 수 있습니다. 넥사크로에서는 nexacro pivot이라는 오픈소스 컴포넌트를 통해 피벗 기능을 제공합니다.\n전용 편집기를 제공하여 개발자와 사용자 모두 쉽게 피벗 기능을 적용할 수 있습니다.",
    "grid.pivot.largedata": "대용량 데이터",
    "grid.pivot.largedata.desc":
      "검색조건에서 데이터 건수(3만/10만/20만/40만건)를 선택하고 '조회' 버튼을 클릭합니다. 조회가 끝나면 데이터를 변환하여 피벗 그리드에 렌더링 되고 조회 시간과 피벗 렌더링 시간을 구분하여 화면에 표시됩니다.\n\n패널 영역에서 행/열을 드래그 앤 드롭하여 조건을 변경하고 '실행' 버튼을 클릭하거나 '자동실행' 버튼을 누르고 조건을 변경하면 변경된 옵션에 따라 새로 피벗이 실행됩니다.",
    "grid.pivot.value.desc":
      "표현되는 형식은 합계, 평균, 개수, 최대값, 최소값이고 필요한 경우 사용자 함수를 등록하여 적용할 수 있습니다.",
    "grid.pivot.export": "엑셀로 내려받기",
    "grid.pivot.export.desc":
      "nexacro pivot는 넥사크로의 기본 컴포넌트들을 조합하여 만들어진 컴포넌트입니다. 피벗컴포넌트의 getPivotGrid 함수를 이용하여 그리드 오브젝트를 반환 받아서 ExcelExportObject 오브젝트를 이용해 익스포트 할 수 있습니다.\n\n화면의 엑셀 내려받기 버튼을 눌러보세요.",
    "grid.rowcount": "행 갯수",
    "grid.export": "내보내기",
    // 원본 svc::pivotdata 백엔드가 이 프로젝트엔 없어(원본도 실제로 클릭하면 "FAILED" 알럿만
    // 뜬다 — Playwright로 확인) 아래 키들은 클라이언트 목업 피벗 엔진 UI용으로 새로 추가한
    // 것들이다(원본 messageid 대응 없음). 단, 축 종류(전체/열/행/값)와 툴바 버튼 툴팁 문구는
    // NxPivot 컴포넌트 자체의 내장 번역 리소스(NxPivot.message.js language.ko_kr/en_us)에서
    // 실제 값을 그대로 가져왔다.
    "pivot.zone.fields": "전체",
    "pivot.zone.colAxis": "열",
    "pivot.zone.rowAxis": "행",
    "pivot.zone.values": "값",
    "pivot.tool.rowsExpand": "행모두펼치기",
    "pivot.tool.rowsCollapse": "행모두접기",
    "pivot.tool.colsExpand": "열모두펼치기",
    "pivot.tool.colsCollapse": "열모두접기",
    "pivot.tool.panelCollapse": "패널접기",
    "pivot.tool.panelExpand": "패널펼치기",
    "pivot.tool.execute": "Pivot실행",
    "pivot.tool.init": "초기화",
    "pivot.tool.manual": "수동적용",
    "pivot.tool.auto": "자동적용",
    "pivot.total": "합계",
    "pivot.search": "조회",
    "pivot.status": "서버/네트워크시간 {network} 초, 렌더링시간 {render} 초, 조회건수 {rows} 건",

    // -- 실제 Nexacro stringresource (grid::largedata.xfdl / largedata_desc.xfdl) --
    "grid.largedata": "대용량 데이터",
    "grid.largedata.general": "일반 표현",
    "grid.largedata.multi": "다양한 표현",
    "grid.largedata.desc":
      "일반적인 웹페이지에서는 그리드에 한 번에 많은 데이터를 표현하지 않습니다. 메모리나 성능 상의 문제가 있어서 페이징 처리를 하게 됩니다.\n하지만 업무를 처리하는 실무자 입장에서는 엑셀이나 C/S기반의 시스템에서처럼 웹에서도 한 번에 많은 데이터를 로딩해서 업무를 처리하는게 편하기 때문에 많은 고객들이 요구하는 기능인데요.\n넥사크로에서는 데이타셋을 통해 데이터를 관리하고 그리드에 보여지는 영역만큼의 데이터만 렌더링하기 때문에 수 천, 수 만 건의 데이터를 조회하더라도 빠르게 렌더링할 수 있습니다.",
    "grid.largedata.query": "대용량 데이터 조회",
    "grid.largedata.query.desc":
      "검색조건에서 데이터 건수(1만/5만/10만건)를 선택하고 '조회' 버튼을 클릭합니다. 조회가 끝나면 데이터가 그리드에 렌더링 되고 서버/네트워크 구간과 렌더링 시간을 구분하여 화면에 표시됩니다.",
    // 원본 messageid="grid.largedata.networktime"의 값 그대로(0으로 초기화된 상태) — 실제
    // 조회 후에는 fnCallback이 숫자만 바꿔치기하므로, 우리도 같은 템플릿을 값만 갈아끼운다.
    "largedata.status": "서버/네트워크시간 {network} 초, 렌더링시간 {render} 초, 조회건수 {rows} 건",
    "largedata.search": "조회",

    // -- 실제 Nexacro stringresource (grid::progressload.xfdl / progressload_desc.xfdl) --
    "grid.progressload": "분할 조회 - ProgressLoad",
    "grid.progressload.desc":
      "대용량의 데이터를 조회 할 때, 많은 양의 데이터를 한 번에 불러오려고 하다 보면 OOM(Out of Memory) 발생 가능성이 높아집니다.\n이를 회피하기 위해 Progressload 기능으로 데이터를 row 단위로 분할 조회 할 수 있습니다.\n또한, 데이터를 분할 조회 함으로써 사용자의 대기 시간을 감축 시킬 수 있습니다.\n\n※ 서버에서 OOM이 발생 하지 않고 데이터 통신이 되어도, 브라우저 내에서 해당 데이터를 처리하면서 요구되는 메모리 사용량이 브라우저 한계를 초과할 경우 오류가 발생 할 수 있습니다.",
    "splitlookup.status": "조회 건수 {loaded} / {total} 건",
    "splitlookup.search": "조회",

    // -- 실제 Nexacro stringresource (grid::quantum.xfdl / quantum_desc.xfdl) --
    "grid.quantum": "퀀텀 그리드",
    "grid.quantum.area": "컬럼을 드래그하여 올려 놓으세요",
    "grid.quantum.desc":
      "퀀텀그리드란, 데이터를 행별로 그룹핑 하여 계층형태로 보여준다. 그리드에서 컬럼을 드래그하여 상단 영역에 위치하면 해당 컬럼으로 데이터가 그룹핑 된다. 반대로 상단 영역의 컬럼명을 드래그하여 하단 그리드에 드랍하면 데이터 그룹핑이 취소 된다.",

    // -- 실제 Nexacro stringresource (grid::freezepanes.xfdl / freezepanes_desc.xfdl) --
    "grid.freezepanes.title": "그리드 틀고정",
    "grid.freezepanes.subtitle": "스크롤 시 선택된 셀을 고정시킵니다. 원하는 셀을 선택 후 버튼이나 마우스 우클릭 컨텍스트 메뉴를 통해서 고정시켜 보세요.",
    "grid.freezepanes.btnRowFix": "행고정",
    "grid.freezepanes.btnColFixL": "좌측열고정",
    "grid.freezepanes.btnColFixR": "우측열고정",
    "grid.freezepanes.btnCellFix": "행열고정",
    "grid.freezepanes.brnFixFree": "취소",
    "grid.freezepanes.desc":
      "틀 고정 기능은 그리드 컴포넌트에 표현되는 많은 데이터를 효과적으로 스크롤 할 수 있는 기능입니다.\n본 샘플과 같이 그리드 컨텍스트 메뉴로 표준화할 경우 그리드 사용편의성을 더욱 높일수 있습니다.",

    // -- 실제 Nexacro stringresource (grid::smartscroll.xfdl / smartscroll_desc.xfdl) --
    "grid.smartscroll.title": "스마트 스크롤",
    "grid.smartscroll.subtitle":
      "많은 표현식이 적용되거나 대량 데이터가 로딩된 그리드에서도 고속의 스크롤을 지원합니다. 스크롤 타입을 선택하고 그리드 우측 트랙바를 마우스로 이동 시켜보세요.",
    "grid.smartscroll.staScrollType": "스크롤 타입",
    "grid.smartscroll.default": "기본",
    "grid.smartscroll.trackbarfollow": "스크롤 위치",
    "grid.smartscroll.topdisplay": "상단",
    "grid.smartscroll.topbottomdisplay": "상하단",
    "grid.smartscroll.centerdisplay": "중앙",
    "grid.smartscroll.topcenterbottomdisplay": "상중하단",
    "grid.smartscroll.desc":
      "Grid 컴포넌트는 화면에 표시할 데이터 행이 많아지면 스크롤바가 표시됩니다. 이런 경우 스크롤바를 움직여서 데이터를 탐색하게 되는데 스크롤바를 움직이면서 화면에 표시되는 데이터를 계속 표시해 주어야 합니다. 브라우저 입장에서도 스크롤바를 움직이는 동안 데이터를 표시해 주는 작업이 부담이 될 수 있고 사용자 입장에서는 스크롤바를 움직이면서 원하는 데이터를 찾기가 쉽지 않습니다.\nSmart Scroll 기능은 이런 불편을 어느 정도 해소해 주는 팁 같은 기능입니다. Grid 컴포넌트에 'fastvscrolltype' 속성값을 설정하면 Smart Scroll 기능을 적용할 수 있습니다.\n(종류 : default, top display, center display, top&bottom display, top&center&bottom display, trackbar follow)",

    // -- 실제 Nexacro stringresource (grid::export.xfdl / export_desc.xfdl) --
    // "grid.export"/"inquiry.result"는 위쪽(그리드 목록/피벗 등)에 이미 있는 것과 같은
    // messageid라 여기서 다시 선언하지 않는다 — 원본도 같은 messageid를 재사용한다.
    "grid.export.import": "내보내기 & 가져오기",
    "grid.export.type": "내보내기 유형",
    "grid.import": "가져오기",
    "grid.import.type": "가져오기 유형",
    "grid.import.include.header": "헤더에 열 이름 포함",
    "grid.import.password": "비밀번호",
    "grid.import.download.testfile": "테스트 파일 다운로드",
    "grid.export.desc":
      "넥사크로에서는 엑셀의 익스포트와 임포트 처리를 위해 nexacro-xeni를 제공합니다. nexacro-xeni는 엑셀의 익스포트/임포트를 서버에서 처리한 후 그 결과를 돌려주는 기능을 수행하는 서버 애플리케이션입니다.\n엑셀 익스포트/임포트 기능을 자체적으로 처리하지 않고 번거롭게 서버 애플리케이션을 통해 처리하는 이유는 엑셀 파일을 처리하려면 로컬 시스템의 자원을 사용해야 하기 때문입니다. 이는 심각한 보안 문제를 야기할 수 있어 브라우저에서 막고 있습니다.\n\n(이 React 데모는 원본과 달리 서버 없이 브라우저 안에서 SheetJS 라이브러리로 실제 Excel/CSV 내보내기·가져오기를 수행합니다 — 한셀 형식과 비밀번호 보호는 지원하지 않습니다.)",
    "grid.import.desc":
      "임포트 유형을 선택하고 파일을 올리면 시트 목록이 표시되고, 시트를 선택하면 그 안의 데이터를 그리드에서 확인할 수 있습니다. \"헤더에 열 이름 포함\" 옵션을 켜면 첫 번째 행의 텍스트를 컬럼명으로 사용합니다.\n적당한 테스트 파일이 없다면 테스트 파일을 다운로드한 뒤 그대로 다시 가져오기 해보세요.",

    // -- 실제 Nexacro stringresource (grid::copypaste.xfdl / copypaste_desc.xfdl) --
    "grid.copypaste.title": "그리드 데이터 복사 & 붙여넣기",
    "grid.copypaste.subtitle":
      "데이터를 선택하고 단축키(Ctrl + c/v)로 클립보드에 복사하거나 클립보드의 데이터를 그리드 또는 엑셀 프로그램에 붙여 넣을 수 있습니다.",
    "grid.copypaste.selection.option": "그리드 선택 타입",
    "grid.copypaste.selection.remark": "※ 다중 선택시 Shift, Ctrl 키 사용",
    "grid.copypaste.desc":
      "PC의 클립보드를 활용한 기능입니다.\n그리드에 선택된 데이터를 클립보드에 복사하거나 복사된 데이터를 그리드 또는 엑셀 프로그램에 붙여넣을 수 있는 편리함을 제공합니다.",

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

    "grid.renderer": "Renderer",
    "grid.cell.display.type": "Cell display type",
    "grid.cell.display.type.desc":
      "A cell is one of the objects that make up the grid and has a separate property from the grid. You can bind columns in Dataset and use them, or you can set the displaytype and edittype properties of the cell to express them in components such as Button, Combo, CheckBox, Image, ProgressBar, Edit, or Tree.\n\nDepending on the 'displaytype' property setting for each cell of the grid component, various expressions such as buttons and images are possible.\n'displaytype' is a property that sets the format in which the bounded data is displayed on the screen when the cell is not in editing, providing 19 default formats and, if not set separately, is automatically displayed for the bound data type.",
    "grid.tree.grouping": "Tree grouping",
    "grid.tree.grouping.collapse": "Collapse",
    "grid.tree.grouping.expand": "Expand",
    "grid.tree.grouping.desc":
      "If the cell's 'displaytype' property is set to 'treetitemcontol', the cell area is displayed in the form of a tree control, and the bound data is displayed in text on the control.\nIf you set the tree-related properties of a cell (treelevel, treastate, etc.) and set 'editttype' to 'tree', click the tree button displayed in the cell to enable the tree to Collapse/Expand.\nYou can group columns through the 'keystring' property of a bound dataset to display subtotals together in the grid.",
    "grid.multi.format": "Multi format",
    "grid.multi.format.desc":
      "If you need to look at the same data from various perspectives or hide some of the data according to permissions, you can use multiple formats in a grid to process the data.",
    "grid.multi.format.editor.desc":
      "In the Grid Contents Editor, where you edit the grid, you can add a new Format, copy an existing Format, and then modify some of the items.\nWhen you apply Format in Grid, specify the 'formatid' property value to select the desired Format.",
    "grid.expression": "Expression",
    "grid.expression.desc":
      "When you enter numeric values in the A and B columns, the cell's expr property displays the A+B, A*B results in the next cell. A simple expression can be expressed directly in an expr property, if the expression is long or complicated.\nYou can call by defining a user function.\nIn addition to the displayed text values, you can also apply extpr to each cell's properties, such as displaytype or cssclass. Selecting a value from the combo in the C column converts the next column to Edit or Combo, depending on the selected value.",
    "grid.cell.head.display.type": "Head control display type",

    "grid.pagination": "Pagination",
    "grid.pagination.desc":
      "The grid on the Nexacro can represent a lot of data at a time. However, there are many ways to express data when it is split into pages based on customer needs.\nYou can apply the desired method, such as unlimited scrolling to look up the next data when scrolling or using commonly used page navigation, and adding the next data when clicking the button, and this paging processing can be registered as a common module using the components provided by the Nexacro.",
    "grid.pagination.buttonstyle": "Button style",
    "grid.pagination.buttonstyle.desc":
      "The most commonly used paging processing method is expressed with paging buttons. Click the button on the page number to view and express the data again.\nYou can choose the default number of cases (for example, 10 to 50) that can be expressed per page, and you can also apply shortcuts so that you can go straight to the page you want.",
    "grid.pagination.infinitescrolling": "Infinite scrolling",
    "grid.pagination.infinitescrolling.desc":
      "In the data area of the grid, when you use the mouse wheel to lower the bottom or the end of the scroll trackbar, the next data is automatically added by looking up.\nThis can cause performance degradation if too much data is loaded, as it continues to add data when scrolling.\nYou can also apply the method of adding data when you click a button, such as 'Show more results' without scrolling.",
    "inquiry.result": "Inquiry result",
    "pagination.search": "Search",

    "grid.personalization": "Personalization",
    "grid.personalization.default": "Set Default",
    "grid.personalization.save": "Save",
    "grid.personalization.desc":
      "Recently, there has been a lot of demand for personalization features from system users. After changing the order or size of the column defined by the developer, I want the format to be maintained the next time I connect to the system.\nPersonalization functions can be used using API provided by grid of Nexacro and Local Storage provided by HTML5.",
    "grid.personalization.cellmoving": "Cell moving",
    "grid.personalization.cellmoving.desc":
      "Setting the cellmovingtype property of the grid allows the user to change the position of the column using mouse drag and drop.",
    "grid.personalization.cellsizing": "Cell sizing",
    "grid.personalization.cellsizing.desc":
      "In some cases, if a cell in a grid contains a large amount of data, you may not be able to see the entire content. If you have the ability to freely adjust column and low size, as in Excel, you can use the grid more comfortably.\nThe cellsizingtype property changes the pointer when the user moves the mouse over the cell or the border of the head, and in that state, press and move the mouse button to change the size of the cell.",
    "grid.personalization.columnhiding": "Column hiding",
    "grid.personalization.columnhiding.desc":
      "Right-clicking a column that you want to hide will display a context menu, and clicking the Hide Column menu will make the column invisible. When displaying hidden columns again, they are displayed again by right-clicking any column in the Head Area and selecting 'Show all columns' or a specific column in the context menu.",
    "grid.personalization.rowhiding": "Row hiding",
    "grid.personalization.rowhiding.desc":
      "Right-clicking a row that you want to hide will display a context menu, and clicking the Hide Row menu will make the row invisible. When displaying hidden rows again, they are displayed again by right-clicking any row in the Body Area and selecting 'Show all rows' or a specific row in the context menu.",
    "grid.personalization.default.desc":
      "If you press the 'Save' button to save this changed format information and access this screen again, the saved format will be automatically applied. Pressing the 'Initialization' button applies the default format defined by the developer.",

    "grid.pivot": "Pivot",
    "grid.pivot.desc":
      "Excel utilizes pivot function to analyze data. Users can easily drag and drop rows/columns and view results. The Nexacro provides pivot function through an open source component called nexacro pivot.\nDedicated editors make it easy for both developers and users to apply pivot functionality.",
    "grid.pivot.largedata": "Large data pivot",
    "grid.pivot.largedata.desc":
      "Under Search Criteria, select the number of data (30,000/100,000/200,000/400,000) and click the Inquiry button. At the end of the query, the data is converted to be rendered in the pivot grid and displayed on the screen, separating the lookup time and pivot rendering time.\n\nDrag and drop rows/columns in the panel area to change the condition, click the 'Run' button, or press the 'AutoRun' button, and change the condition, depending on the changed option, a new pivot will be launched.",
    "grid.pivot.value.desc":
      "The formats expressed are sum, mean, count, maximum, and minimum, and if necessary, you can register and apply user functions.",
    "grid.pivot.export": "Export to Excel",
    "grid.pivot.export.desc":
      "Nexacro pivot is a component created by combining the basic components of the Nexacro. You can export a grid object using the ExcelExportObject object by returning it using the getPivotGrid function of the pivot component.\n\nPress the Excel download button on the screen.",
    "grid.rowcount": "Row count",
    "grid.export": "Export",
    "pivot.zone.fields": "All",
    "pivot.zone.colAxis": "Columns",
    "pivot.zone.rowAxis": "Rows",
    "pivot.zone.values": "Values",
    "pivot.tool.rowsExpand": "Expand rows",
    "pivot.tool.rowsCollapse": "Collapse rows",
    "pivot.tool.colsExpand": "Expand columns",
    "pivot.tool.colsCollapse": "Collapse columns",
    "pivot.tool.panelCollapse": "Collapse panel",
    "pivot.tool.panelExpand": "Expand panel",
    "pivot.tool.execute": "Run pivot",
    "pivot.tool.init": "Reset",
    "pivot.tool.manual": "Manual apply",
    "pivot.tool.auto": "Auto apply",
    "pivot.total": "Total",
    "pivot.search": "Search",
    "pivot.status": "Server/Network {network} sec, UI Rendering {render} sec, {rows} rows",

    "grid.largedata": "Large Data",
    "grid.largedata.general": "General Expression",
    "grid.largedata.multi": "Multi Expression",
    "grid.largedata.desc":
      "A typical web page does not represent a lot of data in the grid at a time. There is a problem with memory or performance, so it will be paged.\nBut from the point of view of business people, it's easy to load a lot of data on the web at once, just like Excel or C/S-based systems, so it's a feature that many customers require.\nBecause the Nexacro manages data through datasets and renders only as much data as is shown in the grid, thousands or tens of thousands of data can be viewed quickly.",
    "grid.largedata.query": "Large data query",
    "grid.largedata.query.desc":
      "Under Search Criteria, select the number of data (10,000/50,000/100,000) and click the Inquiry button. At the end of the query, the data is rendered in the grid and displayed on the screen, separating the server/network interval and the rendering time.",
    "largedata.status": "Server/Network {network} sec, UI Rendering {render} sec, {rows} rows",
    "largedata.search": "Search",

    "grid.progressload": "Split lookup - ProgressLoad",
    "grid.progressload.desc":
      "When searching for large amounts of data, Trying to load a large amount of data at once increases the likelihood of an out of memory (OOM) occurrence. To avoid this, you can split the data into rows by using the Progressload function.\nIn addition, the user's waiting time can be reduced by dividing the data.\n\n※ Even if data communication is established without OOM occurring in the server, When the required memory usage exceeds the browser limit while processing the data within the browser. Errors may occur.",
    "splitlookup.status": "Number of views {loaded} / {total} rows",
    "splitlookup.search": "Search",

    "grid.quantum": "Quantum grid",
    "grid.quantum.area": "Drag the column and drop it here",
    "grid.quantum.desc":
      "A quantum grid is a hierarchical view of data grouped by row. When a column is dragged from the grid and placed in the upper area, data is grouped into the corresponding column. Conversely, if you drag the column name in the upper area and drop it on the lower grid, data grouping is canceled.",

    "grid.freezepanes.title": "Grid freeze panes",
    "grid.freezepanes.subtitle": "This function freezes the selected cell when scrolling. After selecting the Area, Freeze it through the button or context menu(mouse right-button).",
    "grid.freezepanes.btnRowFix": "Row freezing",
    "grid.freezepanes.btnColFixL": "Left Column freezing",
    "grid.freezepanes.btnColFixR": "Right Column freezing",
    "grid.freezepanes.btnCellFix": "Row & Column freezing",
    "grid.freezepanes.brnFixFree": "Cancel",
    "grid.freezepanes.desc":
      "The frame freezing function is that allows you to effectively scroll through a lot of data expressed in the grid component.\nIf you standardize the grid context menu as in this sample, you can further increase the convenience of using the grid.",

    "grid.smartscroll.title": "Smart Scroll",
    "grid.smartscroll.subtitle":
      "Supports high-speed scrolling even in grids with many expressions applied or loaded with large amounts of data. Select the scroll type and move the track bar on the right side of the grid with the mouse.",
    "grid.smartscroll.staScrollType": "Scroll Type",
    "grid.smartscroll.default": "None",
    "grid.smartscroll.trackbarfollow": "Trackbar follow",
    "grid.smartscroll.topdisplay": "Top display",
    "grid.smartscroll.topbottomdisplay": "Top & bottom display",
    "grid.smartscroll.centerdisplay": "Middle display",
    "grid.smartscroll.topcenterbottomdisplay": "Top & center & bottom display",
    "grid.smartscroll.desc":
      "The Grid component displays a scroll bar as there are more rows of data to display on the screen. In this case, you will navigate through the data by moving the scroll bar, and you will need to move the scroll bar and continue to display the data displayed on the screen. From a browser perspective, displaying data while moving the scrollbar can be a burden, and from the user's point of view, it's not easy to move the scrollbar and find the data they want.\nThe Smart Scroll feature is a tip-like feature that eliminates some of these inconveniences. The Smart Scroll function is applicable by setting the 'fastvscrolltype' property value on the Grid component.\n(Type : default, top display, center display, top&bottom display, top&center&bottom display, trackbar follow)",

    "grid.export.import": "Export & Import",
    "grid.export.type": "Export type",
    "grid.import": "Import",
    "grid.import.type": "Import type",
    "grid.import.include.header": "Include Column Names as Header",
    "grid.import.password": "Password",
    "grid.import.download.testfile": "Download Test File",
    "grid.export.desc":
      "The Nexacro provides nexacro-xeni for Excel export and import processing. nexacro-xeni is a server application that processes Excel's exports/imports on the server and then returns the results.\nProcessing Excel files requires resources from the local system, which can cause serious security problems and is prevented by the browser.\n\n(Unlike the original, this React demo performs real Excel/CSV export and import inside the browser using the SheetJS library, with no server — the Hancell format and password protection are not supported.)",
    "grid.import.desc":
      'Select the import type and upload a file to see its sheet list; pick a sheet to view its data in the grid. Turning on "Include Column Names as Header" uses the first row\'s text as column names.\nIf you don\'t have a suitable test file, download the test file and import it right back.',

    "grid.copypaste.title": "Copy & Paste Grid Data",
    "grid.copypaste.subtitle":
      "selected data can copy to the clipboard with the shortcut key (Ctrl + c/v), or paste the data from the clipboard into a grid or Excel program",
    "grid.copypaste.selection.option": "Grid selection type",
    "grid.copypaste.selection.remark": "※ Use Shift, Ctrl keys for multiple selection",
    "grid.copypaste.desc":
      "This is a function that utilizes the PC's clipboard.\nIt provides convenience to copy the selected data on the grid to the clipboard or paste the copied data to the grid or Excel program.",

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
