# 화면 전환 변환 규칙 (Conversion Playbook)

> 메뉴 "정렬, 필터, 찾기"(`grid::function.xfdl`, menu_id 10100)를 React로 전환하면서 실제로 쓴
> 방법론을 사후에 문서화한 것이다. 남은 화면들을 전환할 때 같은 절차·같은 충실도 기준을
> 적용하기 위한 체크리스트로 쓴다. `docs/migration/repo-restructure-plan.md`의 "미결정 사항 3번"에
> 대한 답으로 작성됨. 이후 menu_id 10200("다양한 표현") 전환 때 Playwright MCP 기반 자동 검증
> 절차(4번)가 추가됨 — **이 문서의 절차는 모든 화면 전환에 항상 적용하는 표준 워크플로우다.**

## 1. 원본 파악 (정독 우선, 짐작 금지)

대상 메뉴의 원본 소스를 실제로 읽고 시작한다. 최소 확인 대상:

- `spring-nexacro-N24/src/main/webapp/nexacro/<module>/<screen>.xfdl.js` — 화면 로직 전체
  (Dataset 바인딩, 이벤트 핸들러, 팝업 오픈 로직).
- 화면이 여는 팝업이나 별도 설명 화면이 있다면 그 파일도 별도로 읽는다(예:
  `GridSortPop.xfdl.js`, `GridFilterPop.xfdl.js`, `<screen>_desc.xfdl.js`) — 원본 코드베이스는
  보통 메인 화면과 이런 보조 파일을 따로 둔다.
- `<screen>.xfdl.js`의 `Format XML`/`TEXT(...)` 호출 — 그리드 헤더나 라벨이 어떤
  messageid로 다국어 처리되는지 여기서 확인한다. 이 매핑 순서를 그대로 React
  쪽 `t(key)` 호출에 옮긴다. 실제 ko/en 원문은
  `spring-nexacro-N24/src/main/webapp/nexacro/_resource_/_stringrc_/{ko,en}/stringresource.xstring.json`
  에서 그대로 뽑는다(UTF-8 BOM이 있어 `encoding='utf-8-sig'`로 읽어야 함).
- `Application.xadl.js`의 `gdsAllMenu` Dataset — 이 화면의 실제 `menu_id`, 그룹, 툴팁 원문을
  확인한다(`src/data/menu.ts`에 이미 추출된 것과 대조).
- 설명 영역에 이미지가 있으면(`_resource_/_images_/Desc/*.png`) 반드시 **직접 열어서
  본다** — Nexacro Studio 캡처 이미지 안에 실제 렌더링값(예: 마스크 적용 결과, 콤보
  옵션 등)이 박혀 있는 경우가 있고, 이게 코드만 봐서는 알 수 없는 유일한 단서일 때가
  있다(10200 화면의 Mask 컬럼 실제값 "12345\*\*\*\*\*"가 이렇게만 확인 가능했다).

목적: 실제로 동작하는 기능과, 화면에 그림으로만 있고 동작하지 않는 장식을 구분하는 것.
원본도 정적 그림일 뿐인 부분(예: 우클릭 컨텍스트 메뉴 그림)까지 새로 동작하게 만들 필요는
없다 — 원본과 동일한 수준으로만 재현한다.

## 2. 실제 데이터 추출 (가짜 데이터 금지)

원본 Dataset의 `_setContents`(또는 서버 연동이면 실제 응답 예시)에서 값을 그대로 뽑아
`src/data/<screen>RealData.ts` 같은 파일로 옮긴다. 예시 데이터를 새로 지어내지 않는다 —
행 수, 컬럼명, 실제 값(이름/날짜/금액 등)까지 원본과 동일해야 화면을 나란히 놓고
대조했을 때 신뢰할 수 있다.

파일 상단에 원본 출처를 한 줄로 남긴다(예: `sortRealData.ts`의
`// Nexacro grid::function.xfdl의 dsList Dataset(_setContents)에서 그대로 추출한 실제 데이터. 28행 전부.`).

## 3. 기능 1:1 대조 체크리스트

옮기기 전에 원본에서 다음을 표로 뽑아둔다(코드 리뷰용, 커밋에 포함할 필요는 없음):

- 버튼/토글별: 원본 이벤트 핸들러가 실제로 하는 일
- 팝업별: 여는 조건, 입력 필드, 적용/취소 동작
- 정렬/필터 같은 상태값: 원본이 다중 선택을 허용하는지, 순서가 의미가 있는지
  (`MultiSortPopup.tsx`는 `GridSortPop.xfdl`의 `ds_item` + `btn_add/btn_delete/btn_up/btn_down`
  구조를 행 단위로 그대로 옮긴 예)
- **화면 내 섹션/영역의 실제 배치 순서**: 원본 코드의 컴포넌트 생성 순서(taborder)와
  실제 화면에 그려지는 순서(desktop/large 레이아웃의 `move()` 좌표)가 다를 수 있다 —
  10200 화면에서 "헤드 Control 표시 유형" 섹션이 taborder상으로는 맨 마지막에 생성되지만
  실제 large 레이아웃 좌표(y=318)로는 두 번째 섹션에 온 사례가 있었다. **코드만 읽고
  섹션 순서를 짐작하지 말고, 4번(Playwright 검증)에서 실제 렌더링 순서로 확정한다.**

## 4. Playwright 자동 검증 (필수 단계 — 항상 수행)

화면을 옮긴 뒤 "비슷해 보인다"로 끝내지 않는다. 아래 절차를 **항상** 거친다.

**사전 준비 (한 번만):**
- `claude mcp add playwright -- npx -y @playwright/mcp@latest`로 Playwright MCP 연결.
  (세션 도중 추가했다면 그 세션에는 안 잡히고 재연결/재시작해야 도구가 로드된다.)
- 원본 Nexacro: `spring-nexacro-N24/`에서 `mvn clean package` → sdkman Tomcat 9에 **ROOT
  컨텍스트**로 배포(웹앱 자체가 `nexacro/` 하위 구조라 ROOT로 배포해야
  `localhost:8080/nexacro/launch.html`이 README와 맞음) → 기동.
- React 앱: `spring-nexacro-N24-react/`에서 `npm run dev`(vite, 기본 5173).

**대조 절차:**
1. `mcp__playwright__browser_navigate`로 두 URL을 각각 연다 —
   원본은 `http://localhost:8080/nexacro/launch.html#<menu_id>`(URL 해시로 해당 메뉴 딥링크),
   React는 `http://localhost:5173/<path>`.
2. **스크린샷으로 먼저 구조를 훑는다** (`mcp__playwright__browser_take_screenshot`,
   `fullPage: true`). Nexacro는 자체 스크롤 컨테이너를 쓰므로 문서 `scrollTo`가 안 먹는다 —
   전체를 한 번에 보려면 `mcp__playwright__browser_resize`로 뷰포트 높이를 충분히 키운다
   (예: `height: 4200`).
3. **핵심은 스크린샷이 아니라 DOM 텍스트 직접 비교다.** `mcp__playwright__browser_evaluate`로
   `document.querySelectorAll('[id*="<GridName>."]')`처럼 원본 그리드의 실제 셀 텍스트
   (`...:text` 엘리먼트)를 뽑아 React 쪽 동일 데이터와 문자열 단위로 대조한다. 이 방식으로
   실제로 잡아낸 사례(10200 화면):
   - Mask 컬럼이 화면엔 안 보이던 마스킹(`12345*****`)을 실제로 적용하지 않고 있었음
   - Number 컬럼에 천단위 콤마 누락
   - Currency 컬럼에 원본이 실제로 붙이는 원화 기호(`￦`, U+FFE6) 누락
   - 섹션 순서가 실제 렌더링 순서와 다름(3번 체크리스트 참고)
   - 원본에만 있던 요일 접미사(예: `2020-01-01 수`)를 놓침 — 스크린샷만 봐서는 크기가
     작아 놓치기 쉬웠고, DOM 텍스트 추출로 확정함
3-1. **텍스트 대조만으로는 부족하다 — 실제로 클릭해서 편집 가능 여부까지 확인한다.**
   그리드의 각 컬럼이 행별로 실제 편집 가능한지(vs 읽기 전용 표시일 뿐인지)는 텍스트만
   봐서는 알 수 없다. `mcp__playwright__browser_click`으로 셀을 실제로 클릭해보고,
   `mcp__playwright__browser_evaluate`로 그 컬럼의 DOM에 위젯 전용 클래스가 있는지
   (예: Nexacro Grid는 `.cellcheckbox`/`.cellcombo`/`.cellcalendar`/`.cellradioitem`처럼
   컬럼별 위젯 클래스가 붙고, 읽기 전용 컬럼은 `:text`만 있다) 또는 실제 바인딩된
   Dataset 값이 클릭 전후로 바뀌는지(`grid.getBindDataset().getColumn(row, col)`)로
   확인한다. 10200 화면에서 이 방식으로: Head Control 그리드의 Checkbox/Combo/
   MultiCombo/Calendar/Radio 5개 컬럼은 행마다 실제로 개별 편집 가능한데(원본에도
   `edittype` 있음) 처음엔 읽기 전용으로 잘못 옮겼던 것, 반대로 Mask/Edit/TextArea
   3개 컬럼은 사용자가 편집을 기대했지만 원본도 실제로 읽기 전용(`edittype` 없음)인 것을
   확정했다. 트리 그룹핑도 마찬가지로 원본에 행별 개별 +/-(`.celltreeitem.treeitembutton`)가
   있는지 실제로 클릭해서 확인했다(전역 펼치기/접기 토글과는 별개 기능).
4. 확인되지 않는 값(예: 다른 언어 모드에서 실제로 어떻게 보이는지 콘솔 조작으로도 재현이
   안 되는 경우)은 **지어내지 않는다** — 확인 가능한 기본값만 반영하고, 왜 나머지를
   보수적으로 처리했는지 코드 주석에 남긴다(`Renderer.tsx`의 `formatMultiFormatDate` 참고).
   `nexacro.getApplication().langCode`를 콘솔에서 직접 바꾸는 시도는 내부 상태 불일치로
   에러가 나고, 그 상태가 `localStorage`에 저장되어 이후 새로고침까지 빈 화면이 뜨는 걸로
   이어질 수 있었다(아래 5-1 참고) — 이런 강제 상태 조작은 하지 말 것.
5. 차이를 찾으면 즉시 코드를 고치고, `npx tsc -b`로 재빌드 확인 후 Playwright로 **다시**
   같은 대조를 반복한다 — 한 번에 끝내지 않고 차이가 없어질 때까지 반복.
5-1. **Nexacro 원본 페이지를 다루다 화면이 하얗게 깨지면**: `mcp__playwright__browser_resize`로
   뷰포트를 극단적으로 크게(예: height 4200) 바꾸는 도중이나 직후에 실행하면 Nexacro
   런타임이 깨져서 이후 새로고침을 해도 계속 빈 화면만 뜨는 걸 겪었다. 복구 순서:
   ① `localStorage.clear(); sessionStorage.clear();`로 손상된 저장 상태 제거,
   ② 그래도 안 되면 `mcp__playwright__browser_tabs`로 완전히 새 탭을 열어 그쪽에서
   다시 접속(기존 탭은 닫는다), ③ 원본 Tomcat 자체를 내렸다 올리는 것도 안전한 재시도
   방법이다(서버 상태 문제는 아니었지만 확실한 클린 슬레이트가 됨). 리사이즈는 애초에
   `browser_navigate` 직후, 페이지 로드가 끝나기 전에는 하지 않는 편이 안전하다.
5-2. **Tabulator `editor: "date"`에 `editorParams.format`을 넣으면 luxon.js가 필요한데
   이 프로젝트엔 설치돼 있지 않다.** 콘솔에 `Editor Error - 'date' editor 'format' param
   is dependant on luxon.js`만 찍고 조용히 편집이 막힌다(10200 Head Control의 Calendar
   컬럼이 이렇게 죽어 있었다 — 클릭 테스트를 안 했으면 못 잡았을 버그). 저장 데이터가
   이미 ISO(`yyyy-MM-dd`) 형식이면 `format` 파라미터 자체를 빼고 기본 date input을
   쓰면 된다. 굳이 다른 포맷이 필요하면 그때 `luxon`을 실제로 설치할 것.
   에디터를 추가한 컬럼은 반드시 클릭 테스트뿐 아니라 **값을 실제로 바꾸고 커밋까지
   확인**한다(클릭만으로는 에디터가 열리는지만 확인되고, 열린 에디터가 실제로 값을
   반영하는지는 별도로 확인해야 한다) — 셀 element를 찾아 클릭 → 같은 evaluate 함수
   안에서 바로 input 값 설정 + `input`/`change` 이벤트 + `blur` 이벤트까지 한 번에
   처리해야 한다. 클릭과 값 설정을 별도의 도구 호출로 나누면 그 사이에 에디터가
   포커스를 잃어 커밋이 안 되는 경우가 있었다.
6. 검증에 쓴 스크린샷/스냅샷 파일은 커밋 대상이 아니다(`.gitignore`의 `.playwright-mcp/`가
   커버; 루트에 저장된 임시 png는 작업 후 직접 지운다).
7. 이 자동 대조가 끝난 뒤에만 사용자에게 "최종 확인해달라"고 요청한다 — 사용자가 직접
   보기 전에 이미 코드 레벨 검증은 끝나 있어야 한다. **단, 이 절차를 거쳤어도 사용자의
   실제 사용 경험에서 나오는 피드백(상호작용 안 됨, 시각적으로 어색함 등)을 가볍게 보지
   않는다** — 10200 화면에서 텍스트/데이터 대조까지 다 통과했는데도 사용자가 직접
   써보고서야 Checkbox/Calendar/Radio가 행별로 편집이 안 된다는 걸 잡아냈다. 클릭
   테스트(3-1)를 텍스트 대조와 같은 비중으로 항상 같이 할 것.

## 5. 다국어(i18n) 연동 패턴

- 화면 텍스트는 `useLanguage()`의 `t(key, fallback?)`로 가져온다. `key`는 원본의
  실제 messageid를 그대로 쓴다(새로 짓지 않음).
- 언어 전환 시 다시 계산해야 하는 값(그리드 컬럼 타이틀 등)은 `useMemo(..., [lang])`로
  래핑하고, Tabulator처럼 외부 라이브러리 인스턴스가 있는 경우 `setColumns`로 통째로
  재생성하지 말고 `column.updateDefinition()`으로 필요한 부분만 갱신한다(정렬·스크롤
  상태가 날아가는 것을 막기 위함 — `SortFilterFind.tsx`의 언어 전환 `useEffect` 참고).

## 6. 레거시 폴백 링크

React로 전환된 화면에도 원본 Nexacro 화면으로 가는 링크를 상단에 남긴다
(`/nexacro/launch.html#<menu_id>`, `SortFilterFind.tsx`의 `sff-legacy-link-row` 참고).
전환 검증 기간 동안 두 화면을 언제든 비교할 수 있게 하기 위함이다. 이 링크를 걷어내는
시점은 `v4-legacy-retired` 마일스톤(레거시 완전 폐기) 이후다.

## 7. 파일 배치 컨벤션

- 화면 컴포넌트: `src/routes/converted/<ScreenName>.tsx` + 같은 폴더에 전용 CSS.
- 화면 전용 팝업: 같은 폴더에 별도 컴포넌트 파일로 분리(`ColumnFilterPopup.tsx`,
  `MultiSortPopup.tsx`, `FindPanel.tsx`처럼) — 팝업 하나당 파일 하나. 팝업이 아니라 같은
  화면 안의 섹션(예: 10200의 셀 표시 유형/트리 그룹핑/...)이면 한 파일 안에 섹션별
  컴포넌트 함수로 나눈다(`Renderer.tsx` 참고) — 파일을 쪼개지 않는다.
- 실데이터: `src/data/<screen>RealData.ts`.
- **기본값은 Tabulator(ADR-006)다 — "그리드" 화면을 일반 테이블 마크업으로 만드는 걸
  예외로 취급하고, 그 예외가 정당한지 먼저 의심할 것.** 10200 화면에서 처음엔 "행이
  몇 개 안 되고 위젯이 다양하니 테이블이 더 간단하다"고 판단해 전부 테이블로 만들었다가,
  사용자가 실제로 써보고서야 문제를 지적했다 — 일반 테이블은 원본이 실제로 지원하는
  행별 개별 편집(체크박스 토글, 콤보 선택, 캘린더 입력, 트리 행별 +/- 등)을 그대로
  재현하기 어렵고, 결과물이 "그리드 흉내만 낸 정적 화면"처럼 보인다. 여러 행의 실데이터를
  다루는 섹션(멀티 포맷, 표현식, 헤드 Control, 트리 그룹핑 등)은 데이터가 2~5행뿐이어도
  Tabulator로 만든다 — 트리는 `dataTree`/`dataTreeChildField` 옵션으로 원본의 개별
  행 +/- 토글을 기본 제공받고, 콤보/체크박스/캘린더도 `editor: "list"/"tickCross"/"date"`
  로 실제 행별 편집이 자연스럽게 된다.
  일반 테이블 마크업은 정말로 예외적인 경우에만 — 10200의 "셀 표시 유형" 섹션처럼 원본
  자체가 Dataset **한 행**을 Format XML의 서로 다른 Row 밴드 두 개로 나눠 17개의 완전히
  다른 위젯 타입을 보여주는 카탈로그일 때, 즉 애초에 "여러 행의 동일 컬럼 구조"라는
  Tabulator의 전제 자체가 성립하지 않을 때만 쓴다.
- 전환 완료 후 `src/data/menu.ts`에서 해당 메뉴 항목의 `target`을 `"nexacro"` →
  `"react"`로 바꾸고, `src/App.tsx`의 `CONVERTED_SCREENS`에 `menu_id -> 컴포넌트` 매핑을
  추가한다.

## 8. 알려진 갭 — 이 문서가 못 채우는 부분

- 원본 소스(`spring-nexacro-N24-react`)와 `docs/migration/`의 코드 주석·README가
  `ADR-001`~`ADR-006`, `SEC.06`/`SEC.11` 같은 문서 번호를 인용하는데, 그 ADR/전략 문서
  자체는 이 저장소 어디에도 없다(검색 확인 완료). 아마 더 이전 단계의 상위 전략 저장소에
  있었을 것으로 추정되나, 지금은 참조가 깨진 상태다 — 화면 전환 작업 자체에는 지장이
  없지만, 나중에 "ADR-005가 정의한 형태"류 문구를 코드에 새로 추가할 때는 그 ADR이 실존
  하는지 먼저 확인할 것.
- Nexacro 런타임 콘솔에서 `nexacro.getApplication().langCode`를 직접 바꿔 언어를
  강제 전환해보려는 시도는 내부 상태 불일치로 에러가 났다(10200 검증 중 확인) — 언어별
  차이를 확인하려면 화면의 실제 언어 토글 버튼을 신뢰할 수 있는 방식으로 눌러야 하며,
  콘솔에서 상태를 직접 조작하는 건 피할 것.
