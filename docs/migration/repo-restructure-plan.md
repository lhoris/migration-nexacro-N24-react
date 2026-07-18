# 저장소 재구성 & 마일스톤 태그 계획

> 이 문서는 실행 계획 + 진행 로그다. 아래 "지금 실제 상태"가 가장 최신 진행 상황이다. 다른 세션에서
> 이어받아 작업할 수 있도록 배경·결정사항·미결정 사항·실행 순서를 전부 여기 남겨둔다.

## 왜 이 구조인가

두 프로젝트(원본 Nexacro+Spring 앱, React 전환 앱)를 감싸는 상위(우산) 저장소 하나를 만들고, 그 안에
둘을 동일 레벨 서브폴더로 둔다 — "원본 → 전환 과정 → 완료"라는 하나의 연속된 커밋 히스토리를
고객에게 보여주기 위함이다. (이전에 `frontend/`를 Nexacro 프로젝트 안에 중첩 → 완전 별도 저장소로
분리, 이렇게 두 번 구조를 바꿔본 뒤 내린 결론.)

## 목표 저장소 구조

```
/Users/mac/workspace/
├── migration-nexacro-N24-react/     ← 우산 git 저장소 (생성됨, github.com/lhoris/migration-nexacro-N24-react)
│   ├── spring-nexacro-N24/          ← 원본 Nexacro+Spring 프로젝트 (복사 및 정리 완료, 커밋 전)
│   ├── spring-nexacro-N24-react/    ← React 애플리케이션 (이관 완료 2026-07-18, 커밋 전)
│   ├── docs/migration/              ← 마이그레이션 전략 문서 (정리 완료, conversion-playbook.md 추가, 커밋 전)
│   └── .gitignore                   ← 생성 완료
│
├── spring-nexacro-N24/              ← 기존 독립 저장소(원본). 재구성 후 처리 방침 미결정
└── spring-nexacro-N24-react/        ← 기존 독립 저장소(React). 재구성 후 처리 방침 미결정
```

## 마일스톤 태그 전략 (커밋이 아니라 태그로)

화면 1개 전환에도 상당한 작업량이 들어가므로(원본 소스 정독, 실제 데이터 추출, 텍스트·기능 1:1
대조, 팝업 재현 등), 화면 39개를 더 전환하는 과정을 커밋 하나로 스쿼시하면 리뷰·롤백·버그 추적을
다 포기하는 셈이다.

**결정: 작업은 화면 단위(혹은 작은 배치 단위)로 잘게 커밋하고, 의미 있는 지점마다 git 태그를 박아
마일스톤을 표시한다.** 태그는 커밋을 대체하지 않고, 특정 커밋을 가리키는 이름표일 뿐이다.

| 태그 | 의미 | 상태 |
|---|---|---|
| `v1-baseline` | `spring-nexacro-N24` 원본 프로젝트. 하이브리드 라우팅이 성립하려면 필요했던 레거시 버그 픽스 2건(콜드 딥링크, macOS 모바일 오탐)은 포함된 상태로 첫 커밋. | **파일 정리 완료, 커밋만 남음** |
| `v2-hybrid-pilot` | React 메인프레임(GNB/LNB/Footer/홈/다국어/테마/메가메뉴) 전체 완성 + 메뉴 화면 1개(정렬·필터·찾기, menu_id 10100)만 React로 완전 전환. | **기능 완성, 아직 우산 저장소로 안 옮김** |
| `v3-hybrid-complete` | 메뉴 40개 전부 React 전환 완료. Nexacro는 폴백/참고용으로만 남음. | **미착수** (v2~v3 사이는 화면별 개별 커밋 다수로 채워짐) |
| `v4-legacy-retired` | Nexacro 완전 폐기. React 쪽 레거시 연결점(“원본 Nexacro 화면으로 이동” 버튼, `menu.ts`의 `serveDirect`, `WorkArea`의 Nexacro 딥링크, 게이트웨이의 `/nexacro/**`)을 전부 제거하는 커밋. | **미착수**, 고객 확정 후 진행 |

`v2-hybrid-pilot`(하이브리드 공존을 화면 1개로 증명한 파일럿)과 `v3-hybrid-complete`(전 화면
전환 완료, 하이브리드 구조가 실질적으로 완성)는 의미가 다르니 헷갈리지 말 것.

## 지금 실제 상태 (최신 — 이 절을 최우선으로 신뢰할 것)

**완료됨:**
- `migration-nexacro-N24-react` 저장소를 GitHub(`github.com/lhoris/migration-nexacro-N24-react`,
  당시엔 빈 저장소)에서 `/Users/mac/workspace/migration-nexacro-N24-react/`로 클론함. `main`
  브랜치, 커밋 0개.
- `spring-nexacro-N24/`(원본, `.git` 제외)를 위 우산 저장소 하위 `spring-nexacro-N24/`로 복사함.
- 그 복사본에서 다음을 제거함: `.idea/`, `target/`, `src/main/java/`(미사용 `HelloWorld.java`
  포함), `src/test/`(실제 테스트 코드 없이 log4j 설정 하나뿐이었음), `docs/utility/RESTFul.md`.
- 그 복사본의 `README.md`에 Java/Maven/WAS 요구 버전 섹션 추가(JDK 8 이상, Maven 3.6 이상,
  Tomcat 9.x 계열 — 특정 패치버전에 과하게 고정하지 않도록 범위로 표기), 존재하지 않던 죽은
  문서 링크(grid/components/extension) 정리, Migration 섹션 경로를 상위 `docs/`로 갱신.
- `docs/migration/`(원래 `spring-nexacro-N24/docs/migration/`에 있던 것)을 우산 저장소 최상위
  `docs/migration/`으로 이동. 그 안에서 다시 정리:
  - 유지: `repo-restructure-plan.md`(이 문서), `reports/2026-07-17-deployment-strategy.html`,
    `reports/2026-07-17-hybrid-status-report.html`
  - 삭제: `README.md`/`form-inventory-template.csv`/`menu-inventory-template.csv`/
    `system-discovery-checklist.md`(훨씬 이전 단계의 이론적 대규모 전사 마이그레이션 전략용
    템플릿 — 참조하는 상위 전략 문서 자체가 이 저장소에 없어 고아 문서였음, 지금 실제로 한
    작업과 결이 안 맞아 제외)
  - 삭제: `reports/2026-07-17-microfrontend-architecture.html`(모듈형 마이크로 프론트엔드
    분리는 이번 프로젝트 범위에서 명시적으로 제외하기로 결정했으므로 — 아래 "결정 사항" 참고)
- 우산 저장소 최상위에 `.gitignore` 생성(OS/IDE/Java-Maven/Node-React 커버).
- 세 저장소(`migration-nexacro-N24-react`, `spring-nexacro-N24`, `spring-nexacro-N24-react`)에서
  직접 `git status`/`diff`로 이 문서 내용과 실제 상태 일치 확인(2026-07-18). 우산 저장소의
  `spring-nexacro-N24/` 복사본에 레거시 버그 픽스 2건이 독립 저장소 작업 내용과 바이트 단위로
  동일함까지 확인함.
- `spring-nexacro-N24-react/`(React 앱, `.git`/`node_modules`/`dist`/`logs`/`.DS_Store` 제외)를
  우산 저장소 하위 `spring-nexacro-N24-react/`로 복사(2026-07-18). 복사 후 `diff -rq`로
  원본과 바이트 단위 동일 확인.
- `docs/migration/conversion-playbook.md` 작성 — 정렬·필터·찾기 화면 전환에 실제로 쓴 방법론
  (원본 xfdl.js 정독 → 실제 데이터 추출 → 기능 1:1 대조 → i18n 연동 패턴 → 레거시 폴백 링크 →
  파일 배치 컨벤션)을 문서화. ADR-001~006 등 코드가 인용하는 문서 번호가 이 저장소 어디에도
  실존하지 않는다는 점도 "알려진 갭"으로 남겨둠.
- 우산 저장소의 `spring-nexacro-N24/` 복사본을 `mvn clean package`로 빌드 → war 생성 확인,
  로컬 Tomcat 9.0.116(ROOT 컨텍스트)에 배포해 `http://localhost:8080/nexacro/launch.html`
  정상 서비스 확인(사용자 브라우저 확인 완료, 2026-07-18). 확인 후 Tomcat 정상 종료 및 임시
  war 배포물 정리.
- **`v1-baseline` 커밋 및 태그 완료(2026-07-18).** 커밋("[baseline] spring-nexacro-N24
  원본 프로젝트 임포트", 4909 files). 스테이징 전 `git diff --cached --name-only`로
  `target/`·`*.war`·`*.class`·`.DS_Store`·`spring-nexacro-N24-react` 매치 0건 확인 후 커밋 —
  React 소스와 빌드 산출물이 섞이지 않았음을 커밋 전에 검증함.
  - author/committer identity를 `lhoris <lhoris@naver.com>`(GitHub 로그인 계정, GitHub도 이
    이메일로 로그인 중)으로 정정 완료(2026-07-18). 이후 사용자 지시로 이 저장소 **로컬** git
    config(`user.name=lhoris`, `user.email=lhoris@naver.com`)를 설정, 이후 커밋부터는 별도
    플래그 없이 자동 적용됨(전역 config는 안 건드림).
  - `gh` CLI 설치 및 웹 로그인(`gh auth login --web`, device code 방식)으로 `lhoris` 계정 인증,
    `gh auth setup-git`으로 git credential helper 연결 완료. `git push -u origin main` +
    `git push origin v1-baseline`으로 GitHub(`github.com/lhoris/migration-nexacro-N24-react`)에
    푸시 완료(2026-07-18).
- 하이브리드 게이트웨이 로컬 통합 테스트(2026-07-18): Tomcat(:8080, ROOT 컨텍스트로 Nexacro war
  배포) + React 앱 `npm install && npm run build` + `gateway.nginx.conf`로 nginx(:3000) 기동 —
  `/`(React Host Shell)와 `/nexacro/**`(레거시 Nexacro, 게이트웨이 프록시)이 한 포트에서 공존하는
  것을 사용자가 브라우저로 직접 확인함. 확인 후 세 서비스(nginx/Tomcat) 모두 정상 종료 및 임시
  배포물 정리.
- **`v2-hybrid-pilot` 커밋 및 태그 완료, push까지 완료(2026-07-18).** 커밋 `65489ef`
  ("[pilot] React Host Shell + 메뉴 1개(정렬,필터,찾기) 전환 완료", 78 files, 문서 갱신
  포함해 amend됨). 스테이징 전 `node_modules/`·`dist/`·`logs/`·`.DS_Store` 매치 0건 확인 후
  커밋.
- **Playwright MCP 연동(2026-07-18).** `claude mcp add playwright -- npx -y
  @playwright/mcp@latest`로 등록, 세션 재시작 후 도구 로드 확인. 이후 화면 전환마다
  "변환 → Playwright로 원본과 실측 대조 → 차이나면 수정 → 재검증" 사이클을 표준 워크플로우로
  적용하기로 함(`conversion-playbook.md` 4번 섹션, `[[feedback_screen_conversion_workflow]]`
  메모리에도 기록).
- **menu_id 10200("다양한 표현", grid::renderer.xfdl) React 전환 완료(2026-07-18).**
  `spring-nexacro-N24-react/src/routes/converted/Renderer.tsx` + `rendererRealData.ts`.
  Playwright로 원본을 실제로 클릭까지 해보며 여러 라운드 수정함 — 주요 교훈:
  - 스크린샷 하나에 실제 렌더링값이 박혀 있어 그것만 봐도 확정 가능했던 사례(Mask 컬럼
    "12345*****" 마스킹 방식)가 있었고, 그걸 놓치고 하드코딩했다가 재대조로 잡음.
  - 텍스트 대조만으론 부족하고 **실제 클릭**해봐야 편집 가능 여부(Checkbox/Combo/
    MultiCombo/Calendar/Radio는 행별 편집 가능, Mask/Edit/TextArea는 원본도 읽기 전용)를
    확정할 수 있었음 — 이후 사용자가 UX 관점 피드백(체크박스 사용성, 편집모드 전환 어색함)을
    또 줘서 Tabulator 기본 tickCross → toggle 스위치 → 최종적으로 순수 네이티브
    `<input type="checkbox">` + `cellClick`으로 3번 갈아엎음.
  - 처음엔 "행이 몇 개 안 되니 테이블이 낫다"고 판단해 5개 섹션을 전부 일반 테이블로
    구현했다가, 사용자가 "그리드 기능인데 왜 테이블이냐"고 지적 — 헤드 Control/트리
    그룹핑/멀티 포맷/표현식 4개 섹션을 Tabulator로 다시 작성(트리는 `dataTree` 기능으로
    행별 개별 +/- 지원). 셀 표시 유형 섹션만 예외로 테이블 유지(원본 자체가 1개 데이터
    행을 서로 다른 위젯 17개로 보여주는 카탈로그라 Tabulator 행 모델과 안 맞음).
  - Tabulator `editor:"date"`에 `format` 파라미터를 주면 luxon.js가 필요한데 미설치라
    조용히 깨지는 버그가 있었음(캘린더 컬럼이 이렇게 안 열렸었음) — `format` 제거로 해결.
  - Radio 값을 문자열 "0"/"1"로 저장했다가 둘 다 truthy라 전부 checked로 보이는 버그도
    발견해 boolean으로 수정.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18, 커밋 `c7a99d6`, "[screen] menu_id 10200(다양한 표현) React
  전환 완료").**
- **검증 체크리스트 정리(2026-07-18).** 10200 화면에서 8라운드 피드백이 오간 걸 복기해
  `conversion-playbook.md` 0번 섹션에 "화면 다 됐다고 보고하기 전 체크리스트"로 정리함
  (정적 대조뿐 아니라 편집 가능 컬럼 전부 클릭 테스트, 상호작용 직후 콘솔 확인, 원본과
  다른 부분 먼저 보고, UI 위젯은 네이티브부터 시작, 게이트웨이 토폴로지에서도 확인).
  메모리(`feedback_screen_conversion_workflow`)에도 반영해 세션이 바뀌어도 유지되게 함.
- **menu_id 10300("페이징", grid::pagination.xfdl) React 전환 완료(2026-07-18).**
  `spring-nexacro-N24-react/src/routes/converted/Pagination.tsx` + `paginationRealData.ts`
  (원본 ds_server 641행 도서 데이터를 파이썬 스크립트로 파싱해 전량 추출). 이 메뉴는 원래
  `menu.ts`에 `serveDirect: true`(React를 거치지 않고 Nexacro가 직접 서빙하는 파일럿
  전용 특수 케이스)로 표시돼 있었는데, 사용자 확인 후 다른 화면과 동일하게 전환 대상으로
  전환하고 그 플래그를 제거함.
  - 원본은 Tab 2개(버튼 스타일 10행/페이지, 무한 스크롤 20행/배치)가 같은 641행을 공유 —
    Tabulator 내장 `pagination`/`progressiveLoad`가 이 둘과 거의 1:1 대응해서 그 기능을
    그대로 썼다(단, `progressiveLoad`는 로컬 배열과 궁합이 안 좋아 `scrollVertical` 이벤트를
    직접 구독하는 방식으로 대체).
  - "조회 결과" 라벨이 조회 전에도 항상 보이는 고정 UI라는 걸 원본 스크린샷에서 발견,
    조건부 렌더링으로 잘못 만들었던 걸 수정.
  - 무한 스크롤 탭 검증 중 데이터가 나왔다 사라지는 것처럼 보이는 현상을 한참 조사하다,
    실제로는 `<StrictMode>`의 개발 모드 이중 마운트와 테스트 스크립트의 타이밍 경합
    때문이었음을 확인(라이브러리 버그 아님) — `conversion-playbook.md` 5-3번 참고.
  - `target: "react"`로 전환 완료(`menu.ts`, `serveDirect` 제거), `App.tsx`의
    `CONVERTED_SCREENS`에 등록. **커밋·push 완료(2026-07-18, 커밋 `5b18c72`).**
- **menu_id 10400("개인화", grid::personalization.xfdl) React 전환 완료(2026-07-18).**
  `spring-nexacro-N24-react/src/routes/converted/Personalization.tsx` +
  `personalizationRealData.ts`(도서 아님, 실제 7행 인물/회사 데이터). 컬럼 이동
  (`movableColumns`)·크기조절(기본제공)·우클릭 컨텍스트 메뉴로 컬럼/행 숨기기·"저장"
  버튼으로 localStorage 영구 저장까지 구현.
  - Tabulator `headerContextMenu`/`rowContextMenu`는 타입 선언엔 정적 배열만 있지만 실제로는
    함수를 받아 매번 동적으로 메뉴를 만들 수 있다(원본 소스 그대로 재현: "Show All
    Column"/"Show All Row"는 숨긴 개수 조건 없이 항상 같이 나오고, 개별 항목은 컬럼의 실제
    현재 캡션 그대로, 행은 `"Row : "+번호` 형식 — 전부 원본을 실제로 우클릭해보며 정확한
    문구를 확인함).
  - 컬럼을 "이미 숨긴 상태로" 생성해야 할 때(복원 시) `tableBuilt` 안에서 `column.hide()`를
    부르면 `isVisible()`은 바뀌는데 DOM엔 반영 안 되는 경합이 있어서, 컬럼 정의 자체에
    `visible: false`를 넣는 방식으로 해결(`conversion-playbook.md` 5-5번).
  - Amount 컬럼 통화 기호(￦), 헤더 텍스트(name/address/amount/date/company/approval 실제
    messageid 재사용), 버튼 위치(그리드 아래 우측 정렬)까지 원본 실측으로 맞춤.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18, 커밋 `b1a0c94`).**
- **menu_id 10500("피벗", grid::pivot.xfdl) React 전환 완료(2026-07-18).**
  `spring-nexacro-N24-react/src/routes/converted/Pivot.tsx` + `pivotEngine.ts`(범용 피벗
  집계 엔진) + `src/data/pivotMock.ts`(목업 데이터 생성기). 이 화면은 다른 화면과 근본적으로
  다른 문제가 있었다 — 원본 dsList는 `ColumnInfo`만 있고 실제 행 데이터가 없다(서버
  `svc::pivotdata` 트랜잭션으로 채워지는 구조). **그 백엔드가 이 프로젝트엔 존재하지 않는다** —
  원본 화면에서 직접 "조회" 버튼을 클릭해도 Playwright로 실측 확인한 결과 매번 "FAILED"
  알럿만 뜨고 데이터가 안 나온다(`http://localhost:3000/pivotdata` → 405). 즉 원본 데모
  사이트 자체에서도 이 화면의 피벗 기능은 실제로 동작한 적이 없다.
  - 사용자에게 "원본처럼 깨진 상태를 재현" vs "클라이언트에서 목업 데이터로 실제 동작하는
    피벗을 구현" 중 선택지를 물었고, 후자로 결정함 — 행/열 드래그 앤 드롭 자체가 이 화면의
    핵심 기능이라 뼈대만 보여주면 요점을 놓친다고 판단.
  - `pivotEngine.ts`에 rowAxis/colAxis 필드 개수(0~2개)에 관계없이 동작하는 범용 재귀 집계
    엔진을 새로 작성함 — Tabulator의 `dataTree`(행 중첩)와 중첩 컬럼 그룹(`columns` 배열,
    열 중첩)을 그대로 활용해 부모 합계를 직접 계산·부여하는 방식. Playwright로 부모-자식 합계가
    실제로 일치하는지 여러 뎁스에서 실측 검증함(예: Seoul Sales 143,222,619 = Team 1
    72,883,417 + Team 2 70,339,202, Team 1 72,883,417 = Online+Offline+Mobile 3개 채널 합).
  - 필드를 4개 구역(전체/열/행/값) 사이로 옮기는 실제 HTML5 드래그 앤 드롭 구현. 축 종류
    라벨("전체/열/행/값")과 툴바 버튼 툴팁(패널접기/Pivot실행/초기화/수동적용 등)은 새로
    지어낸 문구가 아니라 NxPivot 컴포넌트 자체의 내장 번역 리소스(`NxPivot.message.js`의
    `language.ko_kr`/`language.en_us`)에서 실측으로 가져온 진짜 값이다.
  - "행모두접기/열모두접기" 토글은 Tabulator API를 직접 건드리는 대신 rowAxis/colAxis 배열을
    한 단계로 잘라 같은 집계 엔진에 재사용하는 방식으로 구현(더 단순하고 결과도 동일).
  - "수동적용"(기본값) vs "자동적용" 토글, "초기화" 버튼까지 원본 설명(`grid.pivot.largedata.desc`)
    그대로 동작 재현.
  - "내보내기" 버튼은 원본 `ExcelExportObject`(실제 xlsx) 대신 Tabulator 내장 CSV 다운로드로
    대체함(추가 라이브러리 없이 가능한 선에서 기능 등가 — 문서화된 대체).
  - dev 서버(:5173)·프로덕션 게이트웨이 빌드(:3000) 양쪽에서 조회→집계→드래그드롭→축소/확장→
    초기화→내보내기까지 전 기능 Playwright로 검증, 콘솔 에러 0건.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18, 커밋 `5f2cd30`).**
- **menu_id 10600("대용량 데이터", grid::largedata.xfdl) React 전환 완료(2026-07-18).**
  `spring-nexacro-N24-react/src/routes/converted/LargeData.tsx` + `largeDataMock.ts`. 피벗과
  같은 패턴 — `svc::largedata` 백엔드가 없어(원본에서 직접 조회해도 그리드가 계속 비어있음,
  Playwright로 확인) 이미 정해둔 방침대로 클라이언트 목업 데이터 생성기를 만들었다.
  - 탭 2개(일반 표현 = 읽기전용 그리드, 다양한 표현 = Gender 콤보/Married 체크박스(네이티브
    `<input type="checkbox">`, 10200의 tickCross/toggle 반려 전례를 따름)/Date 에디터/Money
    마스크/Number 프로그레스바 편집 가능) 모두 원본 Grid Format의 displaytype/edittype 그대로
    재현. 행 갯수 1만/5만/10만 선택 가능, 10만행에서도 Tabulator 가상 렌더링으로 콘솔 에러 없이
    빠르게 렌더링됨(실측: 렌더링 0.1~0.16초).
  - **버그 발견 및 수정**: 처음엔 두 탭이 같은 `LargeDataTab` 컴포넌트를 조건부로 반환해 React가
    탭 전환 시 리마운트하지 않고 상태를 재사용 → "다양한 표현" 탭이 계속 "일반 표현"의 읽기전용
    컬럼 정의로 렌더링되는 버그였다(체크박스/콤보/프로그레스바가 전부 안 보임). `key="general"`/
    `key="multi"`를 줘서 React가 별개 인스턴스로 취급하게 해 해결.
  - 검증 중 dev 서버(:5173)에서만 "Event Target Lookup Error"/"Table Not Initialized" 경고가
    떴는데, 프로덕션 게이트웨이 빌드(:3000)에서 같은 상호작용을 깨끗하게 재현해보니 경고가
    전혀 없었다 — React StrictMode 이중 마운트 + 빠른 연속 클릭이 겹친 테스트 아티팩트였다
    (`conversion-playbook.md` 5-3 참고), 실제 버그 아님.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18, 커밋 `de3396a`).**
- **menu_id 11300("분할 조회", grid::progressload.xfdl) React 전환 완료(2026-07-18).**
  `spring-nexacro-N24-react/src/routes/converted/SplitLookup.tsx` + `splitLookupMock.ts`.
  10500/10600과 동일한 패턴 — `svc::progressload.do` 백엔드가 없어(원본도 조회하면
  "조회 건수 0/100,000"에서 멈춤, Playwright로 확인) 클라이언트에서 10,000행씩 10번 배치로
  나뉘어 도착하는 것과 동등한 시뮬레이션을 구현, 카운터가 실제로 0→10만까지 계단식으로
  올라간다.
  - **실사용 성능 버그를 직접 겪고 고침**: 처음엔 배치마다 `table.addData()`를 호출했는데,
    Tabulator `layout: "fitDataFill"`이 데이터가 바뀔 때마다 전체 행의 셀 텍스트를 다시
    실측해 컬럼 폭을 재계산하다 보니 누적 행 수가 늘어날수록 매 호출이 점점 느려져 9~10번째
    배치(9만~10만행)에서 브라우저 탭이 30초 넘게 완전히 멈췄다(Playwright의
    `browser_wait_for`/`browser_console_messages`까지 전부 타임아웃, 탭을 강제로 닫고 새로
    열어야 복구됨). 컬럼에 이미 고정 `width`가 있으니 `layout` 옵션 자체를 없애고, 더
    근본적으로는 진행률 카운터는 배치마다 올리되 실제 `table.setData()`는 전체 데이터를 다
    모은 뒤 한 번만 호출하도록 바꿔 해결(`conversion-playbook.md` 5-8 참고).
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18, 커밋 `f82b57e`).**
- **menu_id 10700("퀀텀 그리드", grid::quantum.xfdl) React 전환 완료(2026-07-18).**
  `spring-nexacro-N24-react/src/routes/converted/QuantumGrid.tsx` + `quantumEngine.ts`
  (그룹핑 트리 엔진) + `quantumRealData.ts`(dsGrid Dataset에서 그대로 추출한 실제 데이터
  500행). 10500/10600/11300과 달리 이 화면은 서버 트랜잭션이 필요 없다 — 데이터가 xfdl에
  직접 임베딩돼 있어 원본이 실제로 완전히 동작한다(Playwright로 컬럼 헤더를 그리드에서
  카테고리 영역으로 직접 드래그해보며 1단/2단 그룹핑, 재정렬, 그룹 해제까지 전부 실측).
  - 컬럼 헤더를 드래그해서 상단 영역에 놓으면 그 컬럼으로 데이터가 트리 그룹핑되고
    (`dsGrid.keystring`), 반대로 카테고리 칩을 그리드에 드래그하면 그룹핑이 풀린다 — 원본
    이벤트 핸들러(`fnSetGroup`/`fnSetTree`/`fnTreeDrop`/`divCategory_ondrop`)를 그대로
    읽고 재현: 그룹으로 뺀 컬럼은 그리드에서 사라지고, 칩끼리 드래그하면 순서가 바뀌며
    (바로 앞 칩이면 서로 교환, 아니면 뽑아서 목표 칩 앞에 삽입), 그리드에서 바로 끌어온
    컬럼을 기존 칩 위에 드랍하는 조합은 원본도 처리 안 하길래 그대로 무시하도록 재현.
  - 그룹핑된 트리의 리프(실제 데이터) 행이 항상 "이름(0)"으로 표시되는 원본 특유의
    동작(소스상 인덱스가 배열 범위를 벗어나 first_name으로 폴백)을 Playwright로 1단/2단
    모두 실측 확인 후 버그로 판단해 고치지 않고 그대로 재현(`conversion-playbook.md`
    5-10 참고).
  - **버그 발견 및 수정**: Tabulator를 만드는 effect와 `setColumns`를 거는 effect를
    분리했다가 React StrictMode 마운트→클린업→재마운트 사이에서 "Cannot read properties
    of null (reading 'firstChild')" 에러가 났다 — 그룹 상태가 바뀔 때마다 테이블을 통째로
    destroy 후 재생성(컬럼·데이터를 생성자에 바로 전달)하는 방식으로 바꿔 해결
    (`conversion-playbook.md` 5-9 참고, 데이터가 500행뿐이라 매번 재생성해도 성능 문제 없음).
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18, 커밋 `3c96652`).**
- **menu_id 10800("틀 고정", grid::freezepanes.xfdl) React 전환 완료(2026-07-18).**
  `spring-nexacro-N24-react/src/routes/converted/FreezePanes.tsx` + `freezePanesRealData.ts`
  (dsList에서 그대로 추출한 실제 데이터 500행). 원본은 현재 선택된 셀(기본값: 3번째 행
  "Last name" 컬럼)을 기준으로 버튼 5개(행고정/좌측열고정/우측열고정/행열고정/취소)나
  우클릭 컨텍스트 메뉴로 그리드를 고정한다.
  - 열 고정은 Tabulator 컬럼의 `frozen` 속성으로 간단히 구현(원본의 "선택 컬럼까지 왼쪽
    전부"/"선택 컬럼부터 오른쪽 전부" 요구사항과 정확히 맞아떨어짐).
  - **행 고정은 두 번 갈아엎었다.** ① Tabulator 내장 `row.freeze()` → 컬럼이 많아(11개,
    1510px) 가로 스크롤이 있는 상황에서 frozen-rows-holder가 헤더 콘텐츠 오른쪽(스크롤
    밖)에 위치해버려 안 보이는 버그. ② CSS `position:sticky`를 행에 직접 걸기 → 고정된
    행과 스크롤 중인 일반 행이 같은 목록에 섞여있어 특정 스크롤 위치에서 픽셀 좌표가
    우연히 겹치며 서로 다른 행 내용이 뒤섞여 보이는 버그. ③ **최종: 고정할 행만 담은
    두 번째(스크롤 없는) Tabulator 인스턴스를 메인 그리드 위에 별도로 얹고, 메인 그리드의
    가로 스크롤만 그 인스턴스에 동기화** — 엑셀 틀고정과 같은 원리, 두 그리드가 물리적으로
    분리돼 있어 겹침 문제 자체가 없다(`conversion-playbook.md` 5-11 참고).
  - Tabulator `getPosition()`이 1부터 시작한다는 걸 몰라서 기본 선택 행이 항상 한 칸씩
    밀려 고정되는 버그도 발견해 수정(`conversion-playbook.md` 5-12 참고).
  - **1차 완료 보고 후 사용자가 실사용에서 문제 2개를 바로 발견**(Playwright 1회씩 클릭
    검증으론 못 잡았던 것들 — `conversion-playbook.md` 5-13 참고):
    (a) 헤더가 고정 행 그리드 "아래"로 밀려 보이는 레이아웃 순서 버그 — 고정 행 그리드와
    메인 그리드를 별개 effect로 만들다 보니 메인 그리드가 항상 자기 헤더를 갖고 있어서
    생겼다. 고정 행 개수가 바뀔 때마다 두 그리드를 함께(단일 effect, `[frozenCount]`
    의존)다시 만들어서, 고정 중엔 고정 행 그리드만 헤더를 보여주고(`headerVisible`)
    메인 그리드는 헤더 없이 몸통만 그 아래 잇게 고침.
    (b) 클릭 반응이 눈에 띄게 느림(실측 440ms) — 컬럼 11개에 대해 `updateDefinition`을
    따로따로 불러서 매번 전체 재렌더링이 일어난 게 원인. `table.setColumns()`로 한 번에
    갈아끼우도록 바꿔 21ms로(20배 이상) 개선.
    검증 중 40번 연속 동기 클릭 스트레스 테스트를 했다가 Chrome 렌더러가 40분 넘게
    100%+ CPU로 멈춰(Playwright 도구 전체가 응답 없음) `kill -9`로 복구한 해프닝도 있었음
    — 이후 150ms 간격의 현실적인 클릭 속도로 재검증해 안정성 확인.
  - **2차 완료 보고 후 사용자가 실사용에서 문제 2개를 또 발견**(`conversion-playbook.md`
    5-14, 5-15 참고):
    (a) 메인 그리드에 500행 전체를 그대로 넣어놔서, 고정 행 그리드(0~N행)와 메인
    그리드가 스크롤 맨 위에서 같은 레코드를 두 번 보여줬다("동일한 레코드가 보임" —
    원본은 그리드가 하나뿐이라 이런 중복이 없음). 메인 그리드 데이터를
    `records.slice(frozenCount)`로 고정된 만큼 잘라내 해결 — 이 과정에서 "선택된 셀이
    몇 번째 행인가"를 절대 인덱스(전체 500행 기준) ↔ 그리드별 상대 인덱스로 양방향
    변환하고, 복원 시 선택된 셀이 있는 쪽 그리드의 `tableBuilt`를 기다리도록 수정.
    (b) 좌측열고정 시 헤더 내용이 우측 정렬되는 것처럼 보인다는 피드백 — 코드로는
    재현이 안 됐지만(정적 텍스트 정렬 자체는 실측상 안 바뀜), 원본은 고정된 컬럼의
    헤더 배경색만 살짝 바꾸는 정도(`setCellProperty("head", i, "background",
    "#48399A")`)인데 Tabulator 기본 테마의 흰색 2px 굵은 경계선이 원본과 다르게
    두드러져 위화감을 준 것으로 보고, 그 경계선을 얇게 줄이고 원본처럼 헤더 배경색만
    옅게 입히도록 CSS 조정.
  - **사용자가 다시 확인 후 3번째 피드백**: "그리드가 row 선택형이 아니라 cell 선택형
    기본값이 되게 해달라"(`conversion-playbook.md` 5-16 참고) — 원본 소스에
    `grdList.set_selecttype("cell")`이 이미 있었는데, Tabulator는 `selectableRows`를
    따로 안 정하면 기본값이 `"highlight"`라 아무 것도 안 했는데도 행 전체에 마우스오버
    하이라이트가 걸려 "행 선택형"처럼 보였다. `selectableRows: false`로 꺼서 원본과
    같은 셀 단위 상호작용만 남게 고침.
  - 이어서 사용자가 "넥사크로는 셀 선택형에서도 하이라이트를 준다"고 알려줘서, Tabulator
    내장 `selectableRange`(엑셀 스타일 셀 테두리)로 바꿔봤다가 라이브러리 자체 경고
    ("얼린 컬럼이 2개 이상이면 selectableRange와 같이 쓸 때 예측 불가")를 실제로 만났다
    (헤더가 흐려지고 이상한 줄 생김, 여러 컬럼을 동시에 얼리는 이 화면의 핵심 기능과
    정면 충돌). 결국 직접 만든 셀 테두리 스타일(`outline`, Tabulator 테마의
    `.tabulator-cell{outline:none}`과 특이도를 맞추기 위해 컬럼 클래스를 하나 더 붙임)
    로 되돌려 같은 느낌만 재현(`conversion-playbook.md` 5-17 참고).
  - **사용자가 4번째로 두 가지를 더 발견**: (a) "마우스오버했을 때 하이라이트는 없네" —
    selectableRows:false로 행 단위 호버를 껐을 때 셀 단위 호버까지 같이 없어져 버렸던
    것, 셀 호버 스타일을 새로 추가해 해결. (b) "열고정하고 옆으로 갈 때 그리드 헤더
    텍스트가 겹쳐보인다" — 고정된 헤더 셀에 준 배경색이 반투명(`rgba(...,0.14)`)이라
    가로 스크롤 시 그 뒤로 지나가는 다른 헤더 텍스트가 비쳐 보였다. 완전 불투명한
    솔리드 색으로 바꿔 해결했는데, 이 과정에서 셀 호버 스타일도 반투명이라 같은 증상이
    본문에서 재발해 그것도 불투명 색으로 바꿈(`conversion-playbook.md` 5-18 참고 —
    고정 요소엔 반투명 배경을 쓰면 안 된다는 게 핵심 교훈).
  - **사용자가 5번째로 발견**: "그리드 헤더랑 본문이랑 약간 열이 안 맞는다" — 실측해보니
    정확히 10px 오프셋, 원인은 Tabulator "modern" 테마 자체의 기본 CSS
    (`.tabulator-header{padding-left:10px}`, 우리가 추가한 스타일이 아님)였다. 이 화면만의
    문제가 아니라 Tabulator를 쓰는 화면 전부(퀀텀 그리드 등)에 있던 문제라서, 화면별
    CSS 대신 전역 파일(`src/styles/shell.css`)에 `.tabulator-header{padding-left:0
    !important}` 한 줄로 고치고, 이미 나온 다른 화면들도 전부 다시 열어 헤더/본문 정렬과
    콘솔 에러 없음을 재확인함(`conversion-playbook.md` 5-19 참고).
  - **사용자가 6번째로, 같은 계열의 형제 버그를 발견**: "좌측열고정 누르면 예를 들어
    Last name에서 눌렀는데 그리드 헤더의 Last name 열 텍스트만 우측으로 움직여버린다" —
    Tabulator 테마가 고정 컬럼 그룹의 경계 컬럼(`tabulator-frozen-left`) 헤더에만 10px
    패딩을 추가로 주는 또 다른 기본값 때문이었다(오른쪽 고정엔 이 규칙이 없어 비대칭).
    5-19와 같은 파일(`shell.css`)에 한 줄 더 추가해 해결(`conversion-playbook.md` 5-20
    참고).
  - **사용자가 7번째로 발견**: "행열고정 눌렀을때... 넥사크로 원본에는 스크롤이
    한개뿐인데... 고정행에도 좌우스크롤이 있고... 아래 그리드에도 좌우스크롤이 있어" —
    고정 행 밴드(별도 Tabulator 인스턴스)의 컬럼 폭 합(1510px)이 뷰포트(576px)보다 넓어
    그 인스턴스도 자기 몫의 가로 스크롤바를 따로 만들어버린 것. 고정 밴드의
    `.tabulator-tableholder`에 `overflow-x:hidden !important`를 줘서 스크롤바만 없애고,
    기존 `scrollHorizontal` 동기화(`holder.scrollLeft = left`)는 그대로 유지 —
    `overflow:hidden` 상태에서도 JS로 `scrollLeft`를 바꾸는 건 정상 동작함을 dev
    서버·게이트웨이(:3000) 양쪽에서 실제로 스크롤시켜 재확인(`conversion-playbook.md`
    5-21 참고).
  - **사용자 요청으로 고정 행 이중 그리드 로직을 공용 훅으로 추출**: 사용자가 "이 기능들
    다른 그리드 만들 때도 재사용 가능한 형태로 발전시키면 좋겠다"고 해서, 지금 이
    화면 하나뿐인 시점이지만(보통은 두 번째 사용처가 생겼을 때 뽑는 게 안전) 남은
    화면들에도 행/열 고정 같은 Nexacro 표준 그리드 기능이 또 나올 가능성이 높다는 데
    합의해 바로 추출하기로 결정. 고정 행/스크롤 행 이중 Tabulator 인스턴스 구성, 가로
    스크롤 동기화, 절대 인덱스 변환, 재생성 후 선택 복원 로직을
    `src/lib/tabulator/useFrozenRowsGrid.ts`(`useFrozenRowsGrid` 훅)로 뽑아내고
    `FreezePanes.tsx`는 이 화면 전용 로직(셀 선택 하이라이트, 컨텍스트 메뉴, 열 고정)만
    남도록 리팩터링. 리팩터링 후 dev 서버·게이트웨이(:3000) 양쪽에서 행고정/좌측열고정/
    우측열고정/행열고정/취소 전부 재검증(중복 레코드 없음, 선택 복원, 스크롤바 1개,
    콘솔 에러 0건, 클릭 반응 속도 유지 확인) — `conversion-playbook.md` 7절 참고.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18, 커밋 `555dd4c`).**

- **menu_id 10900("스마트 스크롤", grid::smartscroll.xfdl) React 전환 진행 중(2026-07-18).**
  `SmartScroll.tsx` + `smartScrollRealData.ts`(dsList에서 그대로 추출한 실제 데이터 10,000행
  전부 — 이 화면은 컬럼 수는 FreezePanes와 비슷하지만 행 수가 훨씬 많다는 게 핵심 시연
  포인트). 원본은 `grdList.fastvscrolltype` 속성(6종 라디오: 기본/스크롤위치/상단/상하단/
  중앙/상중하단)을 바꿔가며 우측 스크롤바를 드래그하는 동안 나오는 위치 인디케이터를
  보여주는 기능.
  - **원본 스크롤바 드래그를 Playwright로 재현하지 못해서** 처음엔 인디케이터 구현을
    보류하고 사용자에게 직접 드래그해보고 설명해달라고 요청했는데, 사용자가 "네가 원본
    기능을 제대로 이해 못 한 거 아니냐"고 되물어서 다시 조사함 — **원본 런타임 소스
    `nexacrolib/component/Grid.js`를 직접 grep해서 `set_fastvscrolltype`/
    `_floatingScrollRows_callback`/`_createHighlightRow` 함수 본문을 읽고 정확한 동작을
    확인했다(Playwright로 못 재현한다고 포기할 게 아니라 원본 소스를 읽는 게 정답이었음
    — `conversion-playbook.md` 1절 참고).** 확인된 동작: 스크롤 중 테두리(`1px solid
    gray`)+그림자(`1px 1px 12px gray`)가 있는 "떠 있는 미리보기 행"을 1~3개 겹쳐 보여주며
    (진짜 스크롤 위치에 해당하는 실제 데이터), topdisplay=맨 위 고정 1개, centerdisplay=
    중앙 고정 1개, topbottomdisplay=맨 위+맨 아래 2개, topcenterbottomdisplay=위 세 개
    전부, trackbarfollow=트랙바 세로 위치 비율만큼 부드럽게 움직이는 1개, default=없음.
    이 로직 그대로 구현(`SmartScroll.tsx`, 스크롤 이벤트에서 순수 DOM 조작으로 미리보기
    행 위치/내용 갱신, 스크롤 멈추고 300ms 후 원본처럼 사라짐 — 원본의 "실제 바디를
    가려서 렌더링 비용을 아끼는" 부분은 우리 그리드엔 그 성능 문제 자체가 없어서 제외).
  - **구현 중 버그 2개**: (1) 모드를 바꾸면 이전 모드가 쓰던 위치의 미리보기 행이 안
    지워지고 남는 문제 — 매 스크롤마다 전부 숨기고 이번 모드에 필요한 것만 다시 켜서
    해결. (2) 미리보기 행을 스크롤되는 `.tabulator-tableholder`의 자식으로 넣었더니
    `position:absolute`여도 콘텐츠와 함께 스크롤돼 화면 밖으로 사라짐(인라인 스타일은
    정상인데 `getBoundingClientRect()`가 전부 0으로 나와서 확인) — 스크롤 안 되는
    `.tabulator` 루트에 붙이고 헤더 높이만큼 보정해서 해결(`conversion-playbook.md`
    5-23 참고).
  - Gender 컬럼 색상(원본 `cssclass="expr:gender=='Male'?'grd_txtBlue':'grd_txtRed'"`,
    테마 정의는 순수 `color:blue`/`color:red`)과 Chk 컬럼 승인/반려 아이콘(원본
    `displaytype="imagecontrol"` + `bind:ok`)은 SortFilterFind.tsx에 이미 있던 동일 패턴을
    재사용해 구현.
  - **작업 중 원본에 없는 Tabulator 테마 기본값을 하나 더 발견**: 모든 행의 첫 번째
    컬럼에 10px 색상 액센트 바가 자동으로 붙는다(`border-left:10px solid #3759d7`, 짝수
    행은 더 옅은 색). 이미 나온 FreezePanes에도 똑같이 있었는데 지금까지 못 잡았던
    것 — `shell.css`에 전역으로 추가.
  - **그 전역 수정이 처음엔 `npm run build` 결과물에서 조용히 사라지는 문제가 있었다** —
    선택자 텍스트를 Tabulator 원본과 완전히 똑같이 썼더니 esbuild CSS 압축기가 값이
    다른 동일 선택자 규칙을 병합하면서 `!important`를 무시하고 통째로 버린 것(dev
    서버에서는 정상으로 보여서 처음엔 못 알아챔). `.shell` 조상 선택자를 붙여 선택자
    텍스트 자체를 다르게 만들어 해결하고, `dist/assets/*.css`를 직접 grep해서 규칙이
    실제로 살아있는지 확인한 뒤 게이트웨이(:3000)에서 재검증함(`conversion-playbook.md`
    5-22 참고 — 이번 기회에 기존 padding-left 전역 수정 두 개도 재빌드 결과물에서
    무사한지 재확인함).
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  - **사용자가 확인 후: "워크 카드 영역이 원래 이렇게 좁냐, 원본도 그러냐"고 질문 —
    원본 divWork를 실측(990px, 창 폭에서 LNB만 뺀 나머지를 거의 꽉 채움)했더니 우리처럼
    화면마다 임의의 max-width 캡(900~1200px)을 씌우는 구조가 아니었다. 고치는 과정에서
    **더 큰 문제 발견**: 이미 있던 캡 규칙 대부분이 `.work-card:has(.xx-card)`처럼 마커
    클래스를 work-card 자기 자신에 붙여둔 채 `:has()`(후손만 검사)로 검사하고 있어서,
    **처음 추가된 순간부터 한 번도 실제로 적용된 적이 없었다**(FreezePanes/LargeData/
    Pivot/QuantumGrid/SplitLookup/SmartScroll 6개 화면 — 이미 커밋된 5개 포함,
    `getComputedStyle()`로 직접 확인). 우연히 진짜 후손 클래스도 같이 나열해 뒀던
    4개 화면(Pagination/Personalization/Renderer/SortFilterFind)만 정상 작동 중이었다.
    `.work-card.xx-card`(같은 엘리먼트면 그냥 붙여쓰기)로 선택자를 고치고, 그리드 화면
    10개 전부 `max-width: none`으로 통일해 원본처럼 작업 영역 폭을 그대로 따라가게 함
    (`conversion-playbook.md` 7절 참고). 1200px/1600px 두 뷰포트에서 그리드 10개 전부
    재검증(콘솔 에러 0건), FreezePanes 행/열 고정 기능도 폭이 넓어진 상태에서 회귀
    테스트 완료.
  **아직 커밋 전 — 사용자 최종 확인 대기 중.**

**아직 안 한 것 (다음에 이어서 할 일, 순서대로):**
1. ~~`spring-nexacro-N24/` 복사본 최종 검토~~ — 완료(빌드·실행 확인까지 마침).
2. ~~`v2-hybrid-pilot` 커밋 및 태그~~ — 완료(2026-07-18, 커밋 `65489ef`, push까지 완료).
3. ~~menu_id 10200 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `c7a99d6`).
4. ~~menu_id 10300 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `5b18c72`).
5. ~~menu_id 10400 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `b1a0c94`).
6. ~~menu_id 10500 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `5f2cd30`).
7. ~~menu_id 10600 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `de3396a`).
8. ~~menu_id 11300 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `f82b57e`).
9. ~~menu_id 10700 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `3c96652`).
10. ~~menu_id 10800 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `555dd4c`).
11. menu_id 10900("스마트 스크롤", grid::smartscroll.xfdl) 화면 전환 완료(10/40) —
    **커밋 여부 사용자 확인 대기.** 화면 전환 30개 남음.
12. 기존 독립 저장소 2개(`spring-nexacro-N24/`, `spring-nexacro-N24-react/`) 처리 방침 — 우산
    저장소로 이관 완료 후 판단하기로 결정(아래 "미결정 사항" 참고). `spring-nexacro-N24`는 로컬
    커밋 1개가 origin에 push 안 된 상태(`8bc4bd3`가 최신, 4개 커밋 `01da3a1`~`8bc4bd3`)이고
    README/xadl/xfdl 등 6개 파일이 unstaged 상태로 남아있음 — 이 히스토리는 우산 저장소로
    이식되지 않으므로(결정된 사항 참고) 이 독립 저장소가 유일한 보존처임에 유의.

## 결정된 사항 (과거엔 미결정이었던 것)

- **모듈형 마이크로 프론트엔드(경로 기반 합성으로 그리드/컴포넌트/유용한 기능/연동확장을 독립
  배포 단위로 쪼개는 것)는 이번 프로젝트에서 하지 않기로 확정.** 화면이 아직 1개뿐인데 저장소를
  5~6개로 쪼개는 건 시기상조라고 판단함. 관련 리포트도 삭제함(위 참고). 나중에 화면이 많이 늘고
  필요성이 다시 생기면 그때 재검토.
- **`v1-baseline`에 원본 저장소의 기존 커밋 히스토리(4개, `01da3a1`~`8bc4bd3`)는 이식하지
  않기로 확정.** `git subtree` 등을 쓰지 않고, 지금 파일 상태를 새 저장소의 첫 커밋 하나로 담는다
  (이미 그렇게 `.git` 없이 파일만 복사해뒀음).
- **React 서브폴더 이름은 `spring-nexacro-N24-react`로 유지 확정(2026-07-18).** `react-shell`
  안도 검토했으나, 앱 내부에 이미 `src/shell/`(GlobalNav/Footer/SideNav 등) 개념이 있어 이름이
  겹치면 혼동 소지가 있다고 판단, 기존 이름을 그대로 유지하기로 함.
- **"변환 규칙" 문서화는 지금 하기로 확정(2026-07-18).** `docs/migration/conversion-playbook.md`
  로 작성 완료(위 "지금 실제 상태" 참고).

## 미결정 사항 (사용자 확인 필요)

1. **재구성 후 기존 두 독립 저장소 처리 방침** — 우산 저장소로 내용이 다 옮겨진 뒤(React 앱은
   2026-07-18에 이관 완료, Nexacro 원본은 이미 되어 있음), 원래
   `spring-nexacro-N24/`·`spring-nexacro-N24-react/`(독립 위치)를 삭제할지, 백업으로 남겨둘지는
   **의도적으로 판단 보류(2026-07-18) — 우산 저장소 커밋/태그 작업까지 끝난 뒤 다시 논의하기로
   함.** 참고: `spring-nexacro-N24`의 4개 커밋 히스토리(`01da3a1`~`8bc4bd3`)는 결정 사항에 따라
   우산 저장소로 이식하지 않으므로, 이 독립 저장소가 그 히스토리의 유일한 보존처다 — 삭제를
   결정하더라도 먼저 로컬 커밋을 origin에 push해 히스토리를 안전하게 보존한 뒤에 진행할 것을
   권장.

## 실행 순서 (남은 단계)

1. ~~사용자의 `spring-nexacro-N24/` 복사본 최종 검토~~ — 완료(빌드·Tomcat 실행 확인, 2026-07-18).
2. ~~`spring-nexacro-N24-react/`를 우산 저장소로 복사~~ — 완료(2026-07-18).
3. ~~`spring-nexacro-N24/` 커밋 → `git tag v1-baseline`~~ — 완료(2026-07-18, push까지 완료).
4. ~~React 앱 커밋 → `git tag v2-hybrid-pilot`~~ — 커밋 완료(2026-07-18, 커밋 `1f4124a`),
   **push는 아직**(사용자 확인 대기).
5. `git push`로 GitHub 원격 저장소에 반영(사용자 확인 후에만) — v1-baseline은 push 완료,
   v2-hybrid-pilot push 남음.
6. 이후 화면 전환은 화면(또는 작은 배치) 단위로 통상적인 커밋을 이어간다 — 스쿼시하지 않는다.
   `docs/migration/conversion-playbook.md`의 절차를 따른다.
7. 메뉴 40개 전부 전환 완료 시점에 `git tag v3-hybrid-complete`.
8. 고객이 레거시 폐기를 확정하면, React 쪽 레거시 연결점을 제거하는 커밋 후
   `git tag v4-legacy-retired`.
9. (미결정 1번 답에 따라) 기존 독립 저장소 2개 정리 — 우산 저장소 커밋/태그/push 이후 논의.

## 새 세션에서 이어받을 때 체크할 것

- 이 문서의 "지금 실제 상태" 절을 먼저 읽고, `migration-nexacro-N24-react/`와 두 독립 저장소에서
  직접 `git status`를 돌려 실제 상태가 이 문서와 일치하는지 확인할 것(작업이 더 진행됐다면 이
  문서가 갱신 안 됐을 수 있음).
- "미결정 사항" 3개가 그 사이 사용자와 논의로 정해졌는지 확인 후 실행.
- 화면 전환 작업 자체(하나의 xfdl 원본을 React로 1:1 이식)의 방법론은 이 문서 범위가 아니다 —
  이미 완료된 정렬·필터·찾기 화면(`spring-nexacro-N24-react/src/routes/converted/SortFilterFind.tsx`
  및 관련 파일)을 참고 삼아 동일 수준의 기능·텍스트 충실도를 유지할 것.
- **절대 사용자 확인 없이 `git commit`/`git push`/`git tag`/기존 저장소 삭제를 실행하지 말 것.**
  지금까지 이 프로젝트 전체에서 일관되게 지켜온 원칙이다.
