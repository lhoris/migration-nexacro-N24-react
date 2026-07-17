# 화면 전환 변환 규칙 (Conversion Playbook)

> 메뉴 "정렬, 필터, 찾기"(`grid::function.xfdl`, menu_id 10100)를 React로 전환하면서 실제로 쓴
> 방법론을 사후에 문서화한 것이다. 남은 화면 39개를 전환할 때 같은 절차·같은 충실도 기준을
> 적용하기 위한 체크리스트로 쓴다. `docs/migration/repo-restructure-plan.md`의 "미결정 사항 3번"에
> 대한 답으로 작성됨.

## 1. 원본 파악 (정독 우선, 짐작 금지)

대상 메뉴의 원본 소스를 실제로 읽고 시작한다. 최소 확인 대상:

- `spring-nexacro-N24/src/main/webapp/nexacro/<module>/<screen>.xfdl.js` — 화면 로직 전체
  (Dataset 바인딩, 이벤트 핸들러, 팝업 오픈 로직).
- 화면이 여는 팝업이 있다면 그 팝업의 `.xfdl.js`도 별도로 읽는다(예:
  `GridSortPop.xfdl.js`, `GridFilterPop.xfdl.js`) — 팝업은 메인 화면과 별도 파일인 경우가
  많다.
- `function.xfdl.js`의 `Format XML`/`TEXT(...)` 호출 — 그리드 헤더나 라벨이 어떤
  messageid로 다국어 처리되는지 여기서 확인한다. 이 매핑 순서를 그대로 React
  쪽 `t(key)` 호출에 옮긴다.
- `Application.xadl.js`의 `gdsAllMenu` Dataset — 이 화면의 실제 `menu_id`, 그룹, 툴팁 원문을
  확인한다(`src/data/menu.ts`에 이미 추출된 것과 대조).

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

옮긴 뒤에는 원본 화면(`/nexacro/launch.html#<menu_id>`)과 React 화면을 나란히 열어 버튼
동작·텍스트·이미지까지 하나씩 대조한다.

## 4. 다국어(i18n) 연동 패턴

- 화면 텍스트는 `useLanguage()`의 `t(key, fallback?)`로 가져온다. `key`는 원본의
  실제 messageid를 그대로 쓴다(새로 짓지 않음).
- 언어 전환 시 다시 계산해야 하는 값(그리드 컬럼 타이틀 등)은 `useMemo(..., [lang])`로
  래핑하고, Tabulator처럼 외부 라이브러리 인스턴스가 있는 경우 `setColumns`로 통째로
  재생성하지 말고 `column.updateDefinition()`으로 필요한 부분만 갱신한다(정렬·스크롤
  상태가 날아가는 것을 막기 위함 — `SortFilterFind.tsx`의 언어 전환 `useEffect` 참고).

## 5. 레거시 폴백 링크

React로 전환된 화면에도 원본 Nexacro 화면으로 가는 링크를 상단에 남긴다
(`/nexacro/launch.html#<menu_id>`, `SortFilterFind.tsx`의 `sff-legacy-link-row` 참고).
전환 검증 기간 동안 두 화면을 언제든 비교할 수 있게 하기 위함이다. 이 링크를 걷어내는
시점은 `v4-legacy-retired` 마일스톤(레거시 완전 폐기) 이후다.

## 6. 파일 배치 컨벤션

- 화면 컴포넌트: `src/routes/converted/<ScreenName>.tsx` + 같은 폴더에 전용 CSS.
- 화면 전용 팝업: 같은 폴더에 별도 컴포넌트 파일로 분리(`ColumnFilterPopup.tsx`,
  `MultiSortPopup.tsx`, `FindPanel.tsx`처럼) — 팝업 하나당 파일 하나.
- 실데이터: `src/data/<screen>RealData.ts`.
- 전환 완료 후 `src/data/menu.ts`에서 해당 메뉴 항목의 `target`을 `"nexacro"` →
  `"react"`로 바꾸고 `path`를 연결한다.

## 7. 알려진 갭 — 이 문서가 못 채우는 부분

- 원본 소스(`spring-nexacro-N24-react`)와 `docs/migration/`의 코드 주석·README가
  `ADR-001`~`ADR-006`, `SEC.06`/`SEC.11` 같은 문서 번호를 인용하는데, 그 ADR/전략 문서
  자체는 이 저장소 어디에도 없다(검색 확인 완료). 아마 더 이전 단계의 상위 전략 저장소에
  있었을 것으로 추정되나, 지금은 참조가 깨진 상태다 — 화면 전환 작업 자체에는 지장이
  없지만, 나중에 "ADR-005가 정의한 형태"류 문구를 코드에 새로 추가할 때는 그 ADR이 실존
  하는지 먼저 확인할 것.
