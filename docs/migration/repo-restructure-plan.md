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
  **커밋·push 완료(2026-07-18) — max-width 버그 수정은 `4417d68`로 분리 커밋,
  화면 자체는 `8517feb`로 별도 커밋(사용자가 두 커밋으로 나눠 진행해달라고 요청).**

- **menu_id 11000("내려받기 & 가져오기", grid::export.xfdl) React 전환 완료(2026-07-18).**
  `ExportImport.tsx` + `exportImportRealData.ts`(dsList에서 그대로 추출한 실제 제품 데이터
  11행). 원본은 `ExcelExportObject`/`ExcelImportObject`가 "xeni::XExportImport"라는
  서버(Apache POI 기반)에 실제 엑셀 처리를 위임하는 구조.
  - **원본 자체가 깨져 있음을 Playwright로 실측 확인** — Export 버튼 클릭 시
    `alert("FAILED")`, "테스트 파일 다운로드" 버튼은 405 Not Allowed(`POST
    /XExportImport`, `POST /download/import-sample` 둘 다 확인) — menu_id 10500(피벗)과
    같은 "백엔드 없음" 케이스. 사용자에게 물어봐서 이번에도 "클라이언트 사이드에서 실제로
    동작하게 만들자"를 선택받음(`conversion-playbook.md` 2절 참고).
  - SheetJS(xlsx)로 브라우저 안에서 실제 Excel/CSV 내보내기·가져오기 구현 — 원본이
    지원하는 한셀 형식과 비밀번호 보호는 브라우저 라이브러리로 구현하기 어려워 제외(사용자
    사전 동의). Export 클릭 → 실제 .xlsx/.csv 다운로드, "테스트 파일 다운로드"로 받은
    파일을 그대로 다시 "가져오기"하면 실제로 파싱되어 그리드에 표시되는 전체 왕복을
    Playwright로 검증(Excel/CSV 둘 다, "헤더에 열 이름 포함" 체크박스 온/오프 둘 다).
  - **npm 레지스트리의 `xlsx@0.18.5`는 패치 안 된 고위험 취약점(Prototype Pollution,
    ReDoS)이 있어**(업로드 파일 파싱이라 공격 표면과 정확히 겹침) 설치를 되돌리고, 사용자
    확인 후 SheetJS 자체 CDN의 패치된 빌드(`https://cdn.sheetjs.com/xlsx-latest/
    xlsx-latest.tgz`)로 설치 — `npm audit` 0 vulnerabilities 확인.
  - **`tsc --noEmit -p .`는 통과했지만 `npm run build`(`tsc -b`)가 별도로 미사용 변수
    오류로 실패**한 걸 발견해 수정(`conversion-playbook.md` 2절 참고 — 두 명령이 갈릴 수
    있다는 교훈).
  - **사용자가 확인 후 요청**: "엑셀 임포트 할 때 첫 행이 헤더인지 레코드인지 판단해서
    임포트하게 할 수는 없냐" — 원본에 없는 개선이지만(원본은 체크박스 수동 조작만 지원)
    사용자가 명시적으로 요청. 컬럼별로 "1행을 제외한 나머지 행이 대부분 숫자인 컬럼"만
    골라 그 컬럼들의 1행 값이 숫자가 아닌 비율이 절반 이상이면 헤더가 있다고 판단하는
    휴리스틱(`detectHasHeader`)을 추가 — 시트를 새로 선택할 때마다 자동으로 재판단해
    체크박스 초기값을 맞추되, 사용자가 그 뒤 수동으로 켜고 끄는 것도 그대로 가능.
    헤더 있는 파일/헤더 없는 파일/CSV 전부 Playwright로 검증(자동 판단 정확, 수동
    오버라이드 후에도 그리드가 올바르게 다시 그려짐), `npm run build`까지 재확인.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18).**

- **menu_id 11100("복사 & 붙여넣기", grid::copypaste.xfdl) React 전환 완료(2026-07-18).**
  `CopyPaste.tsx` + `copyPasteRealData.ts`(dsList에서 그대로 추출한 실제 데이터 500행).
  원본은 그리드 선택 타입(Area/Multiarea/Row/Multirow/Cell) 라디오에 따라 Ctrl+C/Ctrl+V로
  클립보드에 TSV(탭 구분) 텍스트를 쓰고 읽는다 — `navigator.clipboard` API로 직접 구현
  (Tabulator 내장 clipboard 모듈은 붙여넣기 시 "필요하면 새 행 추가"를 지원 안 해서 끔).
  - 사용자가 5개 타입을 직접 테스트해보고 발견한 문제들을 전부 고쳤다:
    1. Area: 붙여넣기 후 포커스가 1행으로 튐 — `setData()`가 스크롤을 맨 위로 되돌리는
       Tabulator 특성(다른 화면에서도 겪은 것과 동일) 때문. 붙여넣기 전 스크롤 위치를
       저장했다가 복원하도록 수정.
    2. Multiarea: 맥에서 Ctrl+클릭이 OS 우클릭으로 처리돼 컨텍스트 메뉴가 뜸 — `contextmenu`
       이벤트에서 Ctrl키일 때 막아서 해결.
    3. Multiarea: 떨어진 영역 2개를 복사해서 붙여넣으면 영역 모양을 유지 안 하고 세로로
       이어붙임 — **원본을 Playwright로 직접 테스트해서 확인**: 원본은 영역이 2개 이상
       선택된 채 복사하면 "This command cannot be used with multiple selection ranges."
       에러로 아예 거부하고, 붙여넣기는 "완료" 알럿을 띄우면서 실제로는 아무 것도 안
       바꾸는 버그가 있었다. 후자(거짓 성공)는 재현할 가치가 없다고 판단해 복사와 동일한
       명시적 거부로 통일.
    4. Row: No. 컬럼이 복사/붙여넣기 안 되는 것 — 사용자가 의도된 동작으로 확인(원본도
       그 컬럼은 계산된 값이라 실질적으로 같은 성격).
    5. Multirow: 수정자 키 없이 다른 행 클릭해도 이전 선택이 안 풀리고 계속 추가됨 —
       Tabulator `selectableRows` 기본값(토글 누적)이 원본 동작과 달라서 커스텀
       `rowClick` 핸들러로 재구현(일반 클릭=전체 해제 후 새로 선택, Ctrl=토글 추가,
       Shift=범위 선택). 원본은 Playwright로 직접 확인(수정자 없이 클릭하면 이전 선택이
       풀리는 것을 스크린샷으로 확인).
    6. Cell: 셀 하나만 유지가 안 되고 화살표 키 조작 중 스크롤이 튐 — `selectableRange`를
       흉내 내기용으로 쓰던 것을 걷어내고 FreezePanes와 같은 커스텀 `cellClick` +
       outline 클래스 방식으로 재구현.
  - 이 과정에서 스크롤 후 클릭 좌표가 실제로 화면에 보이는 위치인지 확인 안 하고 테스트
    하다가 가짜 버그로 오인할 뻔한 것, Tabulator `rowClick`이 자체 기본 토글 *이후에*
    실행된다는 것 등을 새로 발견해 `conversion-playbook.md` 5-24~5-28에 기록.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-18, 커밋 `a6163ae`).**

- **menu_id 11200("드래그 & 드롭", grid::dragndrop.xfdl) React 전환 완료(2026-07-19).**
  `DragDrop.tsx` + `dragDropRealData.ts`(원본 `dsGrid`와 동일한 500행 데이터).
  좌측 컬럼 목록을 우측 결과 그리드에 드롭하면 컬럼이 동적으로 추가되고, 하단 멀티 영역은
  체크된 컬럼 묶음을 드롭해 결과 그리드를 다시 구성한다. 결과 그리드의 헤더 재배치는
  Tabulator 내장 `movableColumns`가 이동 중 500행 셀 DOM을 계속 재배치해 원본 Nexacro보다
  버벅이는 문제가 있어, 이 화면 전용 경량 헤더 drag/drop으로 구현했다(drop 시점에만 React
  state의 컬럼 순서를 갱신).
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  **커밋·push 완료(2026-07-19, 커밋 `8d42541`).**

- **menu_id 11400("동적 그리드", grid::dynamic.xfdl) React 전환 완료(2026-07-19).**
  `DynamicGrid.tsx` + `dynamicGridRealData.ts`. 원본은 일반 데이터 그리드가 아니라 양식
  디자이너 성격이 강해 Tabulator 표준 그리드 대신 React 상태 기반 sheet로 구현했다.
  좌측 셀 타입 8개(ComboBox/Calendar/Edit/MaskEdit/Number/CheckBox/Button/TextArea) 드래그,
  우측 양식 셀 타입 변경, 셀 편집, 영역 선택, 우클릭 메뉴(행/열 추가·삭제, 셀 병합/분할,
  색상 적용/해제), `Ctrl+M` 병합, `localStorage` 기반 양식저장/초기화를 지원한다.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  - 그리드 메뉴 마지막 화면까지 구현했으므로 다음 공통화 논의 때 Tabulator 공통화(생성/해제
    훅, placeholder/header 정렬/rowHeight, tableBuilt 타이밍, 경량 컬럼 이동)와 커스텀 그리드
    공통화(병합 셀 모델, 영역 선택, 우클릭 메뉴, drag payload, 저장/복원)를 분리해서 검토한다.
  **커밋·push 완료(2026-07-19, 커밋 `0bea281`).**

- **menu_id 20100("기본 컴포넌트", comp::components.xfdl) React 전환 완료(2026-07-19).**
  그리드 카테고리 완료 후 첫 컴포넌트 카테고리 화면. 원본은 ~20개 기본 UI 컴포넌트
  (Button/Radio/Listbox/CheckBox(Set)/Combo/MultiCombo/Edit/MaskEdit/Grid/Textarea/
  Calendar/Static/Groupbox/ImageViewer/Progressbar/Tab/ListView/Sketch/VideoPlayer/
  Graphic/WebBrowser)를 카드 하나씩 나열해 보여주는 쇼케이스 화면이라, 그동안의 그리드
  화면들과 달리 개별 위젯 대부분을 "native-first" 원칙대로 순수 HTML 엘리먼트(select/
  input/textarea 등)로 구현했다(Grid만 기존 컨벤션대로 Tabulator 재사용).
  `Components.tsx` + `componentsRealData.ts` + `sketchPreload.ts`(ds_sketch의 실제
  base64 필기 이미지 그대로 추출).
  - 섹션 제목("Button","Radio" 등)은 전부 원본에 messageid 없이 하드코딩된 영문 리터럴이라
    언어 전환과 무관하게 항상 영문 그대로 두었다 — 페이지 제목/설명만 진짜 messageid
    (`comp.components`/`.desc`)를 써서 `resources.ts`에 추가했다.
  - MaskEdit(`format="###-{####}-####"`, value="00123456789")는 초기값만 실측해 정적
    문자열로 박아뒀다가(1차 보고), 사용자가 "전화번호 새로 입력해봤는데 마스킹 안 됨"을
    지적 — 원본에 직접 타이핑해보고 실제 마스킹 규칙(빈 자리 `_`, `{}` 구간은 채운
    자리수만큼 항상 `*`, 나머지는 실제 숫자, 최대 11자리)을 실측해 `formatMaskEdit()` +
    `onKeyDown` 기반으로 실시간 마스킹을 구현했다.
  - **VideoPlayer가 로드하는 원본 영상(`NexacroNv24.mp4`)이 이 프로젝트에 리소스 자체가
    없음을 확인**(Playwright network 탭에서 404) — Pivot/Export&Import와 같은 "리소스가
    아예 없음" 케이스. 원본도 실제로는 검은 화면만 나온다. 사용자에게 물어봤고, 프로젝트에
    이미 있는 다른 데모 영상(`dCnP.mp4` → `public/nexacro-video/components-demo.mp4`로 복사)
    으로 대체해 실제로 재생되는 화면을 보여주기로 결정.
  - **Graphic 컴포넌트의 GraphicsImage(`img_WF_sample02.png`)는 원본 자체도 렌더링하지
    않는다**(Playwright network 탭에 요청 자체가 없음, 원본 스크린샷에도 이미지 없음) —
    이미지 없이 사각형/텍스트/선/곡선만 있는 원본 그대로의 모습을 SVG로 재현했다(추측이
    아니라 실측 확인 후 반영).
  - WebBrowser는 실제 `<iframe src="https://www.tobesoft.com/">`로 구현 — 원본도 실제
    투비소프트 홈페이지를 그대로 띄우는 컴포넌트라 그대로 재현(외부 사이트 자체의
    Cloudflare Turnstile 콘솔 노이즈가 항상 같이 잡히는데, 우리 코드와 무관한 제3자
    사이트의 로그임을 확인).
  - 첫 빌드에서 Tabulator `ColumnDefinition`에 `editor:false`가 타입 에러(boolean은
    Editor 타입에 없음)를 내서 제거, MultiCombo 트리거를 `<button>`으로 만들었다가 내부
    태그 삭제 버튼(`<button>`)과 중첩되어 "cannot contain a nested button" 콘솔 에러가
    나서 트리거를 `role="button"` `<div>`로 교체 — Definition-of-Done 점검 중 발견해
    즉시 수정.
  - **1차 보고 후 사용자 피드백으로 4개 버그 발견·수정**(`conversion-playbook.md`
    5-29~5-32에 상세 기록):
    1. Grid 체크박스 컬럼이 `tickCross` 포매터 → `<input type="checkbox" disabled>`로
       만들어져 있어 클릭이 전혀 안 먹었다(disabled 폼 엘리먼트는 click 이벤트 자체가
       안 남) — 원본이 실제로 클릭 토글 가능함을 실측 확인 후 `disabled` 제거 +
       `cellClick`으로 `row.update()` 하는 방식으로 교체.
    2. Calendar를 스크린샷 한 장만 보고 세로로 쌓고 아이콘 버튼에 아무 기능도 안
       달았다가, 실측(`getBoundingClientRect`/`getComputedStyle`/실제 클릭) 후 좌우
       배치 + 아이콘 클릭 시 팝업 달력 + 날짜 선택 시 입력창 채움 + 보라색 헤더바/
       일요일·토요일 색상/오늘 하이라이트까지 전부 다시 구현.
    3. Groupbox를 `width: fit-content`(작은 박스)로 만들었다가, 실측(368×94px, 카드
       폭 거의 전체) 후 크기 수정.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  15/40 완료. 컴포넌트 카테고리 11개 중 1개 완료, 10개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `c1b5bb4` — 11200/11400 문서 정리와 함께 한 커밋으로 처리).**

- **menu_id 20200("모바일 퍼스트 컴포넌트", comp::mobilecomponents.xfdl) React 전환
  완료(2026-07-19).** 원본 소스엔 이 화면 전용 Dataset이 없다(라디오 3개가 각자 만드는
  NormalDataset만 있음). `MobileComponents.tsx` + `mobileComponentsRealData.ts`.
  - TextField 4개(Outside/Inside/Overlap/e-mail) — 라벨 텍스트가 실제로는 그 필드의
    labelposition 값과 우연히 같은 이름일 뿐임을 소스로 확인(`TF_overlap`엔
    `set_labelposition` 호출 자체가 없다 — Nexacro TextField의 기본값이 이미 "overlap"
    스타일이라 데모 작성자가 필드 이름을 그렇게 지은 것). 포지션별 실제 동작(빈 상태에선
    라벨이 플레이스홀더처럼 보이다가 포커스/값 입력 시 outside=박스 위/inside=박스 안
    상단/overlap=테두리를 가로지르는 형태로 뜬다)은 Playwright로 직접 타이핑해보고 실측.
  - DateField의 inputtype(date/datetime/time)별 placeholder 포맷("YYYY. M. D." /
    "YYYY. M. D. aa h:mm:ss" / "aa h:mm:ss")도 각 라디오를 실제로 클릭해 실측.
  - **DateRangePicker는 원본을 직접 두 번 클릭해보고서야 실제 동작을 확인했다**(스크린샷
    한 장으로는 알 수 없었음): 시작일 클릭 → 종료일 클릭 → 그 사이 모든 날짜가 연보라색
    밴드로 하이라이트되고 시작/종료일 자체는 진보라색 원으로 표시되며, 헤더의 "Start
    Date"/"End Date" 라벨이 실제 선택한 날짜로 바뀐다. 3개월을 한 번에 보여주고
    prev/next로 한 달씩 이동하는 방식으로 재현(원본은 내부적으로 앞뒤 버퍼 월도 미리
    렌더링해두지만 사용자에게 보이는 동작은 동일).
  - PopupRangePicker는 Start/End Date 필드 중 아무 아이콘이나 누르면 공유 팝업 달력이
    뜨고, 시작일→종료일 순으로 두 번 클릭하면 팝업이 닫히며 두 입력 모두 채워진다.
  - 자체 검증 중 발견한 버그: `.mc-field-label`에 `z-index`가 없어서 "Outside" 라벨이 실제
    로는 정상 렌더링되고 있었는데, Playwright의 `locator.screenshot()`이 요소 자기 자신의
    bounding box에 딱 맞춰 잘라내는 바람에(오버플로우로 튀어나온 라벨은 그 크롭에서
    잘림) 마치 안 보이는 버그처럼 오인할 뻔했다 — `page.screenshot({fullPage/clip})`로
    다시 확인해 실제로는 정상 렌더링됨을 확인(그래도 이후 안전하게 `z-index:2` 추가).
  - **1차 보고 후 사용자 피드백으로 6개 버그 발견·수정**:
    1. TextField "Outside" 라벨이 위 카드 제목 영역을 침범 — `.mc-field-outside`에
       `margin-top:22px`를 항상 예약해두는 방식으로 수정(플로팅 여부와 무관하게 공간은
       항상 확보, opacity만 토글).
    2. "Inside" 값이 박스 밑에서 잘림 — 라벨 줄(고정 높이)+값 줄을 항상 flex column으로
       예약해두는 방식으로 재구성.
    3. e-mail 필드에 예시 텍스트가 없음 — 원본의 `displaynulltext="abc@abc.com"`을
       재현(항상 플로팅 라벨 + 항상 보이는 placeholder 예시).
    4. MultiLineTextField를 "outside"로 바꾸면 같은 침범 문제 — 3번과 같은 클래스라 1번
       수정으로 같이 해결.
    5. **DateField/DateRangePicker의 datetime·time 모드에 실제 시간 지정 UI가 없었음**
       (1차 구현은 포맷 텍스트만 바꿨을 뿐 실제 시:분:초를 고를 방법이 없었다) — 원본을
       실측(datetime 모드에서 아이콘 클릭 → 달력/시계 탭 + "CLOSE" 버튼이 있는 팝업,
       time 모드는 탭 없이 바로 시:분:초 선택 UI, DateRangePicker는 Start/End 양쪽에
       각각 탭이 있지만 클릭하면 양쪽 다 같은 뷰로 전환됨)한 뒤 그대로 재현 — 단 원본의
       3열 무한스크롤 휠 UI 자체는 네이티브 `<select>` 3~4개(오전/오후, 시, 분, 초)로
       대체했다(정보는 동일, 실제 시간 지정이 가능한 것이 이번 수정의 핵심이라 판단).
    6. DateField는 CLOSE 버튼으로 날짜(캘린더 탭에서 고른 값)와 시간(시계 탭에서 고른
       값)을 합쳐 한 번에 커밋하도록 재구성(`combineDateTime`/`timeOfDayFromDate` 헬퍼).
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  16/40 완료. 컴포넌트 카테고리 11개 중 2개 완료, 9개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `beeec26`).**

- **menu_id 20300("파일 전송", comp::filetransfer.xfdl) React 전환 완료(2026-07-19).**
  `FileTransfer.tsx` + `fileTransferStore.ts`. 원본은 `ExcelExportObject`류와 달리 실제
  서버 트랜잭션(업로드/다운로드 API)에 의존하는데 이 프로젝트엔 그 백엔드가 없다(10500/
  11000과 같은 "백엔드 없음" 케이스, Playwright로 404 확인) — 사용자에게 물어봤고
  AskUserQuestion으로 "브라우저 저장소(IndexedDB)로 실제 동작하게 구현"을 선택받아 진행.
  - `fileTransferStore.ts`: `indexedDB.open()`을 프라미스로 감싸 `listStoredFiles`/
    `addStoredFile`/`deleteStoredFile`을 제공, `{id, name, size, blob}` 레코드로 실제
    파일 Blob을 저장 — mock이 아니라 새로고침 후에도 남는 실제 영속 저장소.
  - FileUpload 섹션: Add 버튼/드래그앤드롭 둘 다로 파일 추가, 중복 이름·최대 용량(2MB,
    원본 `nMaxFileSize` 그대로) 검사, 체크박스 선택 삭제/전체 삭제/포커스 행 삭제, Transfer
    버튼으로 IndexedDB에 실제 저장.
  - FileDownload 섹션: 조회(search) 버튼으로 IndexedDB 목록을 그리드에 채움, 체크박스+
    Download 버튼 또는 DEL 아이콘/행 더블클릭으로 개별 다운로드(`URL.createObjectURL`+
    합성 anchor 클릭) — 실제로 받은 파일을 `cat`으로 열어 원본과 바이트 단위 동일함까지
    확인.
  - Tabulator 두 그리드 모두 `tableBuilt` 이벤트로 준비 상태를 확인한 뒤에만 `setData`를
    호출하도록 해 "Cannot read properties of null (reading 'firstChild')" 에러를 예방(기존
    화면들에서 이미 겪은 패턴, `conversion-playbook.md` 5-9 참고).
  - **버그 1: 같은 이름 파일을 중복 추가하면 경고 알럿이 두 번 뜸** — `setRows(prev => {...})`
    업데이터 함수 안에서 `window.alert()`를 호출했는데, React 18 StrictMode가 개발 모드에서
    순수성 검증을 위해 업데이터 함수를 일부러 두 번 호출한다는 게 원인이었다. 알럿 같은
    부수효과는 업데이터 밖에서(현재 상태를 담은 ref를 읽어) 계산하고, `setState`에는 순수
    함수만 넘기도록 수정.
  - **버그 2: 체크된 항목 없이 포커스만 된 행을 삭제해도 실제로 안 지워짐** — `setRows(prev =>
    prev.filter(r => r.id !== focusedIdRef.current))` 바로 다음 줄에서
    `focusedIdRef.current = null`을 실행했는데, React가 업데이터 콜백 실행을 커밋 시점까지
    미루는 경우가 있어 그 시점엔 이미 ref가 null이 된 뒤라 필터가 아무 것도 안 걸러내는
    무한(no-op) 상태였다. `window.__ftDebugXxx` 형태로 내부 ref/state 값을 임시로
    `window`에 노출해 `page.evaluate()`로 단계별 확인하며 원인을 좁혔다 — ref 값을 setState
    호출 *전에* 로컬 상수로 캡처해 클로저 안에서는 그 상수만 참조하도록 수정(디버그 코드는
    이후 전부 제거).
  - dev 서버(:5173)·프로덕션 게이트웨이(:3000) 양쪽에서 추가/중복거부/용량초과/전체삭제/
    부분삭제/포커스삭제/전송/조회/개별다운로드(버튼·더블클릭·DEL아이콘)/전체선택 체크박스
    동기화/드래그앤드롭까지 전부 재검증, 한국어/영어 렌더링 둘 다 확인, 콘솔 에러 0건.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  17/40 완료. 컴포넌트 카테고리 11개 중 3개 완료, 8개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `27f93f4`).**

- **menu_id 20500("리스트뷰", comp::listview.xfdl) React 전환 완료(2026-07-19).** 사용자가
  "20400"이라 불렀으나 `menu.ts`/원본 메뉴 데이터셋 어디에도 20400은 존재하지 않음을 확인
  (순서가 20300→20500→20600으로 건너뜀) — 레이블("List View")로 명확히 매칭되는 20500으로
  진행. `ListView.tsx` + `listviewRealData.ts`(dsList 3행 그대로: Avengers: Infinity War/
  Black Panther/Deadpool 2, 영화 포스터 이미지 9장 + 설명 일러스트 2장을
  `public/nexacro-movies/`로 복사). 서버 트랜잭션 없는 순수 정적 데모(백엔드 확인 불필요
  케이스).
  - 원본은 반응형 Format 2개(Mobile_screen 440 = "default": 제목+대형 커버를 세로로 쌓고
    펼치면 Year/Rating/Running Time/Summary 전부 표시 / Desktop_screen 920 = "large": 썸네일+
    제목+메타 가로 배치, 펼치면 Summary만 표시)를 자동 전환하는데, 이 프로젝트의 레거시
    Nexacro 임베드는 브라우저를 좁혀도 내부 캔버스가 고정 폭이라 실제로는 "large" 포맷만
    관찰됨(1400px/480px 두 뷰포트에서 Playwright로 직접 실측 확인, `body0` 컨테이너 폭이
    안 바뀜). 그래도 소스에 정의된 두 포맷 모두 구현하고 `ResizeObserver`로 실제 카드 폭
    기준(700px 기준점) 전환하도록 만들었다 — 원본 설명 자체("다양한 형식을 표현할 수
    있습니다")가 반응형 전환을 이 화면의 핵심 기능으로 명시하기 때문.
  - `bandexpandtype="accordion"`이지만 실제 이벤트 핸들러(`ListView00_onbandstatuschanged`)가
    각 행의 펼침 상태를 독립적으로 합산하는 방식이라 "한 번에 하나만 펼침"이 아니라 행별
    독립 토글 — 원본 그대로 재현(`expanded: Record<number, boolean>` 상태).
    실측(`getBoundingClientRect`/`getComputedStyle`, 확대해서 chevron 좌표 찾아 실제 마우스
    클릭)으로 카드 테두리색(#A598EF)/배경(#EBECEE)/썸네일 크기(112×162)/제목·메타 폰트 등을
    그대로 반영.
  - 설명 패널(`listview_desc.xfdl`)의 두 일러스트 이미지(`img_listview.png`/`img_listview2.png`)는
    원본이 880×398 고정 박스에 `background:no-repeat center center`로 넣는데, 두 번째 이미지는
    실제 세로 632px라 그 박스를 통해 중앙 부분만 잘려 보인다 — CSS `background-image`+고정
    height로 원본의 크롭까지 그대로 재현.
  - dev(:5173)·게이트웨이(:3000) 양쪽에서 아코디언 펼침/접힘, 반응형 포맷 전환(리사이즈),
    한국어/영어 렌더링 전부 재검증, 콘솔 에러 0건. `npm run build` 결과물에서 새 CSS
    클래스와 `public/nexacro-movies/` 정적 자산이 정상 포함됨을 확인.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  18/40 완료. 컴포넌트 카테고리 11개 중 4개 완료, 7개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `99f68ed`).**

- **menu_id 20600("컴포넌트 사이즈 자동 조정"/Fit to Contents, comp::fittocontents.xfdl)
  React 전환 완료(2026-07-19).** `FitToContents.tsx` + `fitToContentsMock.ts`. 원본은
  `svc::koreafilmLoad.do`(+ 외부 KOFIC API 키)로 실제 최신 영화 데이터를 받아오는데, 이
  프로젝트엔 그 백엔드가 없다 — 원본 화면을 Playwright로 직접 열어 "[-1]FAILED" 알럿과
  텅 빈 그리드/상세 패널을 실측 확인(Pivot/FileTransfer와 같은 "백엔드 없음" 케이스).
  이 화면의 핵심 기능은 실제 KOFIC 데이터 자체가 아니라 "텍스트 길이에 따라 컴포넌트
  크기가 자동으로 늘고 줄어드는" `fittocontents` 동작이므로(LargeData/SplitLookup처럼
  데이터 자체가 화면의 핵심이 아닌 경우와 동일 판단 — 다시 물어보지 않고 진행), 제목·
  줄거리 길이가 서로 다른 가상의 영화 6편을 지어내 그 변화를 실제로 보여준다(`*Mock.ts`
  네이밍으로 추출이 아니라 생성임을 명시. 포스터도 실존 영화 이미지 대신 색상 placeholder
  로 대체 — 저작권 문제 없는 가상 데이터임을 분명히 함).
  - 원본의 `fittocontents="width"`(제목/제작사/제작연도)·`"height"`(줄거리)는 각각 CSS
    `width: fit-content`/`height: auto`(+`min-height:80px`)로 그대로 대응. 제작연도가
    제작사 상자 바로 오른쪽에 5px 간격으로 붙어 자동 이동하는 상대좌표(Arrangement) 동작은
    두 상자를 flex row로 묶어 CSS 레이아웃이 자연히 처리하게 두고, 원본의 수동 좌표 계산
    (`FitToContents_onbindingvaluechanged`의 `getOffsetBottom()` 합산)은 포팅하지 않았다.
  - 원본 소스의 `<fc v='#FE5252'>Arrangement</fc>`/`<fc v='#FE5252'>FitToContents</fc>`
    강조 마크업(두 고유명사만 빨간색)은 언어와 무관하게 철자가 같으므로, 번역 문자열을
    정규식으로 분리해 해당 단어만 색칠하는 방식으로 재현(범용 decorate 파서를 새로 만들지
    않고 이 화면 전용으로 최소 구현).
  - 목록에서 다른 영화를 선택할 때마다 제목 상자 폭·제작사/연도 상자 폭·줄거리 상자 높이가
    실제로 늘어나고 줄어드는 것을 Playwright로 직접 클릭해 확인(가장 긴 제목/줄거리 영화,
    가장 짧은 영화 둘 다 검증).
  - dev(:5173)·게이트웨이(:3000) 양쪽에서 한국어/영어 렌더링, fit-to-contents 리사이징
    전부 재검증, 콘솔 에러 0건.
  - **1차 보고 후 사용자가 실사용에서 버그 1개 발견**: "봄날의 기억과 Production, Year,
    Summary 영역 텍스트 상자가 일정 가로 크기 이하로 내려가면 더이상 작아지지 않고 영역
    밖으로 텍스트들이 나가게됨" — 이 화면의 주제(컴포넌트 크기 자동 조정)와 정확히
    모순되는 버그였다. 원인: `.ftc-detail`/`.ftc-detail-text`에 넣어둔 임의의 고정
    `min-width`(480px/260px)가 flex 자식이 그 밑으로 줄어드는 것을 막아, 카드 폭이
    좁아지면 오히려 부모 밖으로 튀어나왔다(`getBoundingClientRect()`로 95px 초과 확인).
    고침: 불필요한 `min-width`를 제거하고 `min-width:0`으로 명시(flex 기본값
    `min-width:auto`가 내용 크기 밑으로 못 줄어들게 막는 것까지 같이 해제), 나란히 배치된
    회사명+연도 박스엔 `flex-wrap:wrap` 추가. 700px/450px 등 여러 폭에서
    `scrollWidth === clientWidth` 확인 및 재빌드 후 게이트웨이(:3000)에서도 재검증.
  - **재확인 요청 중 사용자가 2차 버그 발견**: "RUNTIME, STARRING, GENRE 등등 오른쪽에
    값들 있는 텍스트... 얘들이 겹쳐버리는 현상이 있네. 줄이다보니깐..." — 같은 계열의
    형제 버그였다. `.ftc-info-label`에 `width:100px; flex-shrink:0`을 준 채 행(row) 자체는
    `height:30px` 고정이라, 카드 폭이 라벨 100px보다도 좁아지면 값(value) 칸이 거의 0px
    폭으로 짓눌려 글자 단위로 줄바꿈되고, 그 줄바꿈된 내용이 고정 30px 행 높이를 넘어
    아래 행들과 겹쳐 보였다(`getBoundingClientRect()`로 값 칸 폭이 12~25px까지 짓눌린 것
    확인). 고침: `.ftc-info-row`에 `flex-wrap:wrap`(라벨/값이 한 줄에 안 맞으면 값이 라벨
    아래로 통째로 줄바꿈되게), `height` 대신 `min-height:30px`(줄바꿈된 값만큼 행이 늘어나게),
    `.ftc-info-value`에 `min-width:120px`(값 칸이 무한정 짓눌리지 않게 최소 폭 보장) 추가.
    450px 폭에서 라벨/값이 겹치지 않고 각자 자기 줄에 깔끔히 표시됨을 재확인,
    재빌드 후 게이트웨이(:3000)에서도 재검증, 콘솔 에러 0건.
  - **같은 종류의 버그를 스스로 더 찾아 선제 수정**: 두 버그 모두 "고정 크기 형제가 flex
    이웃을 짓누른다"는 같은 패턴이라, 고친 김에 화면 전체를 좁은 폭에서 다시 훑어봄 —
    좌측 영화 목록(`.ftc-grid`)도 `width:260px; flex-shrink:0`로 고정돼 있어 카드보다
    좁아지면 125px까지 밖으로 튀어나오는 것을 발견(스크롤은 안 생겼지만 `work-card`의
    `overflow:hidden`에 잘려 보이지 않는 콘텐츠가 됨). `flex:0 1 260px; min-width:0;
    max-width:100%`로 바꾸고, 그리드 행 제목/감독 텍스트에 `white-space:nowrap;
    text-overflow:ellipsis`를 추가해 극단적으로 좁아지면 여러 줄로 뭉개지는 대신 말줄임표로
    한 줄 유지하도록 처리.
  - **사용자가 재확인 중 2가지를 더 지적**: (1) "포스터 이미지가 없음. 색상이미지로 채워짐" —
    포스터를 단색 박스로 대체한 이유(가상 영화라 실제 포스터 자체가 없음)를 설명하고 대안을
    물었더니 "실존 영화 6편 + 실제 포스터"를 요청. (2) "포스터 목록은... 브라우저 사이즈를
    줄이니깐 뭉개져버림" — 위 그리드 오버플로 버그와 동일 지적.
  - **실제 포스터 이미지 조사 중 저작권 문제를 발견해 다시 확인 요청**: 위키피디아에서
    영화 포스터 파일들을 실제로 찾아보니 전부 "non-free"(위키피디아 자체 정책 하에서만
    사용 허용, 재배포 불가)로 명시돼 있었다 — 그대로 내려받아 (특히 public일 수 있는)
    GitHub 저장소에 커밋하면 실제 저작권 침해 위험이 있음을 사용자에게 알림. 사용자가
    "실존 영화 데이터(제목/감독/배우/줄거리)는 유지, 포스터만 SVG 일러스트로"를 최종 선택.
  - **최종 반영**: 가상 인물 6명을 실존하는 한국 영화 6편(기생충/부산행/봄날은 간다/
    신세계/써니/님아 그 강을 건너지 마오)의 실제 제목·감독·배우·장르·제작연도·배급사로
    교체(사실 정보라 저작권 문제 없음, 단 줄거리는 실제 마케팅 문구를 베끼지 않고
    직접 새로 요약해 씀). 포스터는 실제 포스터를 모사하지 않은 자체 제작 SVG 일러스트
    (`PosterArt` 컴포넌트, accent 색 그라디언트+제목 텍스트, `foreignObject`로 HTML
    텍스트를 얹어 한국어 자연 줄바꿈)로 구현. `fitToContentsMock.ts`에 저작권 관련 결정
    배경을 코드 주석으로 남김. 재빌드 중 `npm run build`(`tsc -b`)가 `foreignObject` 안
    `<div>`의 `xmlns` 속성 타입 에러로 실패한 것을 발견해 제거(HTML 문서 내 SVG라 굳이
    필요 없음 — `tsc --noEmit`은 안 잡고 `tsc -b`만 잡은 두 번째 사례, 5절 참고). 재검증
    (긴 제목 "님아, 그 강을 건너지 마오" 포스터 줄바꿈, 좁은 폭 400px대 오버플로 없음)
    후 게이트웨이(:3000)에서도 콘솔 에러 0건 확인.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  19/40 완료. 컴포넌트 카테고리 11개 중 5개 완료, 6개 남음.
  **아직 커밋 전 — 사용자 확인 대기.**

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
11. ~~menu_id 10900 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, max-width 버그
    수정 `4417d68` + 화면 자체 `8517feb`, 두 커밋으로 분리).
12. ~~menu_id 11000 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `14e4654`).
13. ~~menu_id 11100 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `a6163ae`).
14. ~~menu_id 11200 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-19, 커밋 `8d42541`).
15. ~~menu_id 11400 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-19, 커밋 `0bea281`).
    그리드 카테고리(14개) 전체 완료.
16. ~~menu_id 20100 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-19, 커밋 `c1b5bb4`).
17. ~~menu_id 20200 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-19, 커밋 `beeec26`).
18. ~~menu_id 20300 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-19, 커밋 `27f93f4`).
19. ~~menu_id 20500 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-19, 커밋 `99f68ed`).
    참고: "20400"은 존재하지 않는 menu_id(20300→20500→20600으로 건너뜀), 실제로는
    20500("리스트뷰"/List View)이었음.
20. menu_id 20600 화면 전환 — 완료, **커밋 전**(사용자 확인 대기).
    19/40 완료. 컴포넌트 카테고리 11개 중 5개 완료 — **다음은 menu_id 20700(컴포넌트
    동적 생성/Dynamic Generate)**, 아직 시작 안 함.
21. 기존 독립 저장소 2개(`spring-nexacro-N24/`, `spring-nexacro-N24-react/`) 처리 방침 — 우산
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

## 2026-07-19 추가 진행 상태

- menu_id 20500("리스트뷰")는 React 전환, 테스트, 커밋 및 push까지 완료됐다(커밋 `99f68ed`).
- menu_id 20600("Fit to Contents")는 다른 워크트리에서 작업 중이므로 이번 작업 범위에서 제외했다.
- menu_id 20700("컴포넌트 동적 생성", `comp::generate.xfdl`)은 React 전환 작업을 진행했다.
  - 원본의 Button, Calendar, Static, ImageViewer, Edit 선택 옵션과 생성 개수/라인 옵션을 React 상태로 옮겼다.
  - 생성 버튼 실행 시 원본과 같은 120x30 컴포넌트 배치 규칙과 생성 소요 시간 표시를 구현했다.
  - ImageViewer 샘플 이미지(`img_WF_sample02.png`)를 React public asset으로 복사했다.
  - 메뉴 라우팅은 `/m/generate`, `target: "react"`로 전환했다.
- 현재 화면 전환 진행률은 menu_id 20700 기준 19/40 완료로 본다. 컴포넌트 카테고리는 11개 중 5개 완료, 6개 남음이다.

- **menu_id 20800("구글 지도", comp::googlemap.xfdl) React 전환 완료(2026-07-19).**
  `GoogleMap.tsx` + `googlemap.css`. 원본 `GoogleMap` 컴포넌트는 Dataset도 `svc::` 호출도
  전혀 없는 순수 클라이언트 위젯 — 실제 Google Maps JS API를 그대로 감싼다.
  - **원본에 실제 Google Maps API 키가 없음을 확인**: `Application.xadl.js`의
    `this.googlemap = ""`(빈 문자열 기본값)가 `key.json`(항상 빈 객체 `{}`)에서 채워지길
    기다리지만 실제 값이 없다. 원본을 Playwright로 직접 열어 실측: 지도 타일은 정상
    렌더링(여의도 중심)되지만 "For development purposes only" 워터마크가 타일 전체에
    깔리고, "Google 지도를 제대로 로드할 수 없습니다" 경고 모달이 뜬다(콘솔:
    `ApiProjectMapError` 1건 + `NoApiKeys` 경고). 사용자에게 (1) 키 없는 임베드 그대로
    재현 (2) 나중에 키를 넣을 수 있게 환경변수로 구성 (3) 정적 이미지로 대체 중 선택지를
    물었고, "원본과 동일하게 키 없는 임베드로 그대로 재현"을 선택받음.
  - 실제 Google Maps JS 스크립트(`maps.googleapis.com/maps/api/js`)를 원본과 동일하게
    키 파라미터 없이 로드(`import.meta.env.VITE_GOOGLE_MAPS_API_KEY`가 설정되면 자동으로
    실제 키로 업그레이드되는 구조만 남겨둠). 중심 좌표(37.524022, 126.926594, 여의도)·줌
    15·줌 컨트롤 표시, "마커 추가" 클릭 시 삼성동(투비소프트 실제 위치,
    37.5148693/127.0607522) 좌표에 "TOBESOFT" 마커 표시 + 지도 자동 이동(panTo), "마커
    삭제" 클릭 시 마커만 제거되고 지도는 재중심화되지 않는 것(원본 소스 그대로의 동작)까지
    Playwright로 원본과 나란히 클릭해 검증.
  - Add Marker 버튼은 지도의 `idle` 이벤트(원본 `GoogleMap00_onload`에 대응)가 뜨기 전까진
    비활성 상태.
  - dev(:5173)·게이트웨이(:3000) 양쪽에서 원본과 동일한 콘솔 출력(에러 1건: `ApiProjectMapError`,
    경고 2건: `NoApiKeys`/`loading=async`)임을 직접 대조 확인 — 이 화면은 "콘솔 에러 0건"이
    아니라 "원본과 동일한 콘솔 상태"가 검증 기준이다(사용자가 키 없는 임베드를 그대로
    재현하기로 선택했으므로).
  - **원본 자체의 문구 불일치를 발견, 그대로 재현**: `comp::googlemap.xfdl`의 설명 패널
    텍스트가 "'지도 보기' 버튼을 눌러보세요"라고 안내하지만 실제 화면엔 그런 버튼이 없다
    (지도는 폼 로드 시 자동 표시되고, 버튼은 마커 추가/삭제 2개뿐 — `comp.googlemap.showmap`
    i18n 키 자체는 존재하지만 어느 화면에서도 실제로 안 쓰임). 원본 소스 자체의 구버전
    설계 잔재로 판단, 임의로 "고치지" 않고 설명 문구를 원문 그대로 옮김.
  - `@types/google.maps`를 devDependency로 추가(`npm audit` 0 vulnerabilities), `tsconfig.app.json`의
    `"types"` 배열에 `"google.maps"` 추가.
  - **`tsc --noEmit -p .`(루트 tsconfig)이 실제로는 아무 파일도 검사하지 않는다는 걸
    발견**: 루트 `tsconfig.json`은 `"files": []`에 `references`만 있는 솔루션 스타일
    설정이라, `-p .`로 직접 돌리면 대상 파일이 0개라 뭘 잘못 써도 항상 통과(exit 0)한다 —
    `google` 네임스페이스가 없는 채로 코드를 짜도 에러가 안 났던 이유. `tsc --noEmit -p
    tsconfig.app.json`(실제 앱 설정)으로 직접 돌려야 진짜 검사가 된다 — 이전 화면들에서
    반복됐던 "`tsc --noEmit`은 통과했는데 `npm run build`는 실패" 현상의 근본 원인이
    이거였다(`conversion-playbook.md` 5-42 참고). 이후부터는 `tsc --noEmit -p
    tsconfig.app.json`을 중간 점검용으로 쓴다.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  20/40 완료. 컴포넌트 카테고리 11개 중 6개 완료, 5개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `030b96d`).**

- **menu_id 20900("다양한 메뉴 표현"/Menu, comp::menu.xfdl) React 전환 완료(2026-07-19).**
  `Menu.tsx` + `menuScreenData.ts`. Dataset도 `svc::` 호출도 없는 순수 클라이언트 쇼케이스 —
  한 화면에 서로 다른 메뉴 컴포넌트 5개를 보여준다: (1) Menu00 캐스케이딩 상단 메뉴
  (2) 메가메뉴 (3) 트리 그리드("Menu List") (4) 오토메뉴(호버 팝업) (5) 아코디언 메뉴.
  Dataset(`dsMenu`/`dsMegaMenu`/`dsGridMenu`/`dsMenu1`/`dsHideMenu`)에서 실제 데이터를
  그대로 추출(6개 그룹×미들 2개×스몰 2~3개, 메가메뉴 그룹 "01"만 열 5개(자식 수
  3/1/4/2/7), 아코디언은 어느 버튼을 눌러도 항상 같은 5개 항목 — 전부 원본 데이터 자체의
  특징).
  - **원본에 실제 버그 2건 발견(Playwright로 직접 클릭)**: 메가메뉴 리프 항목 클릭 시
    alert가 "Small Menu1  undefined"라고 뜨고(`nexacro.getApplication().messages[...]`가
    `TEXT()`를 안 거쳐 로드가 안 된 잘못된 메시지 키 참조), 동시에 콘솔에
    `this.fnSetFrameSize is not a function` 타입 에러가 매번 떴다(존재하지 않는 함수
    호출). 사용자에게 "원본 그대로 재현" vs "자연스럽게 고쳐서 정상 동작" 중 선택지를
    물었고 후자를 선택받아, alert는 실제 i18n 값(`comp.menu.call`="호출 !"/"Call !")을
    써서 "Small Menu1 호출 !"로 뜨게 하고 존재하지 않는 함수 호출은 포팅하지 않았다.
  - 그 외 원본의 실제 동작(버그가 아니라 핸들러가 아예 없거나 미정의라 그런 것)은 그대로
    재현: Menu00 캐스케이딩 메뉴/트리 그리드/오토메뉴 팝업은 리프 항목을 클릭해도 부수효과
    없이 그냥 닫히기만 한다(원본 소스에 `grdLeftMenu_oncellclick` 핸들러가 등록만 되고
    정의되지 않은 것, `Menu00`엔 클릭 핸들러 자체가 없는 것까지 확인).
    아코디언의 슬라이드 애니메이션은 원본의 20단계 수동 타이머 easing 대신 CSS
    `max-height` 트랜지션으로 대체(다른 화면들에서 이미 확립된 "가능하면 imperative
    애니메이션 로직을 포팅하지 말고 CSS 레이아웃에 맡긴다" 원칙 재적용).
  - dev(:5173)·게이트웨이(:3000) 양쪽에서 5개 메뉴 컴포넌트 전부(캐스케이딩 2단계 플라이아웃,
    메가메뉴 열기/리프클릭/alert/닫기, 트리 확장·축소, 오토메뉴 호버 팝업 열기·클릭닫기,
    아코디언 버튼 전환) 재검증, 한국어/영어 렌더링 확인(위젯 안 캡션 자체는 원본처럼
    언어와 무관하게 영문 리터럴 그대로 유지), 콘솔 에러 0건.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  - **1차 보고 후 사용자 피드백**: "메뉴 컴포넌트에서 마우스 오버되었을때 이펙트가 없네" —
    원본 Menu00 상단 바 자체엔 실제 호버 효과가 없다(첫 항목이 항상 고정 하이라이트일
    뿐, 마우스 위치와 무관 — Playwright로 마우스를 멀리 치워도 그대로 하이라이트 유지되는
    것으로 실측 확인). 하지만 React 버전의 "Big Menu1~6" 버튼은 호버 시 아무 시각적
    피드백이 없어 버튼이 안 눌리는 것처럼 보이는 문제였다. 원본 그대로(무반응) 재현하는
    대신 버튼다운 호버 피드백(배경색 살짝 진하게)을 추가 — 같은 문제가 있던 메가메뉴
    "메뉴 호출" 버튼, 아코디언의 Big MenuN 버튼에도 함께 적용(먼저 지적된 것만 고치지
    않고 같은 화면의 형제 버튼들도 다시 훑어봄).
  - **2차 피드백**: "Middle Menu에서 마우스오버만되도 메뉴가 펼쳐져야하는데" — 1차 구현은
    Middle Menu를 클릭해야 Small Menu 플라이아웃이 열리게 했는데, 원본을 Playwright로
    실측(마우스만 올리고 클릭은 안 함)해보니 실제로 호버만으로 열렸다. 고치는 김에 최상단
    Big MenuN 버튼들도 같이 실측 — 드롭다운이 이미 열려있는 상태에서 다른 Big MenuN으로
    마우스만 옮겨도 그쪽 드롭다운으로 즉시 전환되는 것까지 확인해 함께 반영(최초 진입은
    여전히 클릭 필요 — 아무 것도 안 열린 상태에서 호버만으로는 안 열림, 이것도 실측 확인).
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  21/40 완료. 컴포넌트 카테고리 11개 중 7개 완료, 4개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `26d0ecd`).**

- **menu_id 21000("양방향 바인딩"/Two-way Data binding, comp::binding.xfdl) React 전환
  완료(2026-07-19).** `TwoWayBinding.tsx` + `bindingRealData.ts`. Dataset도 `svc::` 호출도
  없는 순수 클라이언트 데모 — 원본은 그리드와 상세정보 컨트롤 5개(Edit/Radio/Calendar/
  CheckBox/TextArea)가 전부 스크립트 없이 같은 Dataset00에 `BindItem`으로 선언적
  양방향 바인딩만 돼 있다. React에서는 "선택된 행 인덱스 + 공유 배열 state" 하나로
  그 관계를 표현해 그리드와 상세정보가 같은 소스를 읽고 쓰게 구현.
  - Playwright로 원본을 직접 조작해 실제 커밋 타이밍까지 확인 후 그대로 재현: 텍스트
    필드(이름/비고)는 blur 시점에 커밋되고, 체크박스/라디오는 클릭 즉시 반영된다. 그리드
    셀 직접 수정 → 상세정보 반영, 상세정보 수정 → 그리드 반영 양방향 전부 검증.
  - **원본 데이터에 실제 버그 발견**: Jennifer의 생년월일이 `"1980331"`(7자리, 월 앞자리
    0 누락)로 잘못 입력돼 있어 원본 그리드/달력이 이를 그대로 오파싱해 `1982-09-01`로
    잘못 표시한다(Playwright 실측 확인). 사용자에게 물어봤고 "오타로 판단해 수정
    (19800331 → 1980-03-31)"을 선택받아 교정 — 이 화면의 핵심 기능(양방향 바인딩)과
    무관한 데이터 오타라 재현 가치가 없다고 판단.
  - dev(:5173)·게이트웨이(:3000) 양쪽에서 행 선택→상세 반영, 상세 수정→그리드 반영(텍스트
    blur/체크박스·라디오 즉시), 그리드 수정→상세 반영 전부 재검증, 한국어/영어 렌더링
    확인(EN 설명문이 KO보다 문단 하나 적은 원본 자체의 비대칭도 그대로 유지), 콘솔 에러
    0건(dev에서 뜨는 "Event Target Lookup Error"는 기존에 문서화된 StrictMode 이중 마운트
    아티팩트로, 게이트웨이 빌드에서는 재현 안 됨을 재확인).
  - **1차 보고 후 사용자 피드백**: "그리드 셀에는 달력 버튼 없음" — 그리드 Birthday 컬럼을
    평범한 텍스트 입력(`editor:"input"`)으로 만들어서 상세정보의 `<input type="date">`와
    달리 달력 버튼이 없었다. Tabulator 내장 `editor:"date"`는 luxon.js가 필요한데 이
    프로젝트엔 없어 조용히 깨지는 문제가 있어(10200에서 이미 겪음, `conversion-playbook.md`
    5-6 참고) 상세정보와 동일하게 네이티브 `<input type="date">`를 커스텀 Tabulator
    에디터 함수로 붙여 브라우저 기본 달력 버튼을 그대로 재현. 그리드 셀 달력 편집 →
    상세정보 반영까지 재검증.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  22/40 완료. 컴포넌트 카테고리 11개 중 8개 완료, 3개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `8c9e16c`).**

- **menu_id 21100("그래픽스"/Graphics, comp::graphics.xfdl) React 전환 완료(2026-07-19).**
  `Graphics.tsx` + `graphicsWorkflowData.ts` + `graphicsOrgData.ts`. 원본 `Graphics`
  컴포넌트는 HTML5 Canvas를 감싸는 저수준 드로잉 위젯이고, 실제 그리기 로직은 두 include
  스크립트(`lib::Workflow.xjs`, `lib::OrganizationChart.xjs`)에 있다. Dataset도 `svc::`
  호출도 없는 순수 클라이언트 데모.
  - **이 화면은 이 프로젝트의 현재 개발 환경에서 원본 자체가 로드되지 않는다**: Playwright로
    직접 열어보면 로딩 스피너에서 멈추고 "Cannot set properties of undefined (setting
    'bcache')" 콘솔 에러가 반복된다(Graphics 컴포넌트 런타임 자체의 문제로 보이며, 이
    마이그레이션 작업과 무관한 기존 버그 — 실측 확인). 시각적으로 대조할 실제 렌더링이
    없는 상황이라 사용자에게 범위를 물었고, "원본 소스(xfdl.js + 두 xjs 라이브러리) 분석
    기반으로 전체 인터랙티브 기능까지 구현"을 선택받아 진행 — 눈으로 검증 못 했다는 점을
    리포트에 명시.
  - **탭 1(Workflow)**: dsItems(44개 노드)/dsLines(32개 연결선) 실제 데이터 그대로 흐름도를
    SVG로 그린다. 노드 타입 3종(type01=사각형, type02=둥근 사각형/알약형, type03=배경 없는
    텍스트 라벨), 연결선은 축이 맞으면 직선, 아니면 ㄱ자/ㄷ자 꺾임 경로(원본
    `gfnDrawGraphicPath` 로직 그대로 이식)로 라우팅하고 `startCap`/`endCap` 플래그에 따라
    화살표 캡을 선택적으로 그린다. 배경 드래그로 패닝(줌은 없음, 원본도 이 탭엔 줌 없음).
  - **탭 2(Organization Chart)**: dsOrg(42행, 실제로는 3개 루트 트리)를 계층 구조로 엮어
    조직도를 그린다. 가로/세로 정렬 라디오(원본처럼 "가로정렬" 캡션은 비지역화 한글
    그대로 유지 — 영어 모드에서도 한글로 남음), Zoom In/Out 버튼, 마우스 휠 줌(캔버스
    중심이 아니라 커서 위치를 고정점으로 확대/축소), 노드별 펼치기/접기(원본 아이콘
    `btn_pvGrd_TreeExpand.png`/`btn_pvGrd_TreeCollapse.png` 재사용) — 접었다 펴도 클릭한
    노드가 화면상 같은 위치에 남도록 델타를 보정하는 원본의 "앵커 유지" 동작까지 재현.
  - **자체 발견한 버그**: 마우스 휠로 줌하는 동안 콘솔에 "Unable to preventDefault
    inside passive event listener invocation" 에러가 났다 — React의 합성 `onWheel`
    이벤트는 스크롤 성능을 위해 기본적으로 passive 리스너로 등록돼 `e.preventDefault()`가
    씹힌다. `useEffect`로 네이티브 `wheel` 리스너를 `{ passive: false }`로 직접 등록해
    해결.
  - Playwright로 탭 전환, 배경 드래그 패닝(두 탭 모두), 줌 인/아웃 버튼, 마우스 휠 줌,
    가로/세로 정렬 전환, 노드 펼치기/접기(앵커 유지 확인) 전부 클릭 테스트 완료.
    dev(:5173)·게이트웨이(:3000) 양쪽 콘솔 에러 0건, 한국어/영어 렌더링 확인.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  23/40 완료. 컴포넌트 카테고리 11개 중 9개 완료, 2개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `4c9b7c1`).**

- **menu_id 21200("애니메이션"/Animation, comp::animation.xfdl) React 전환 완료
  (2026-07-19).** `Animation.tsx`. Dataset(`dsImageList`, 배너 이미지 5개)만 있고 `svc::`
  호출은 없는 순수 클라이언트 데모 — 원본이 이 개발 환경에서 정상 로드/동작함을
  Playwright로 실측 확인(21100/그래픽스와 달리 이 화면은 런타임 버그가 없음).
  - **(1) 원형 메뉴**: `nexacro.Animation`(duration 500ms, easing "easeoutcirc")으로
    stButton의 aniIdx를 0↔100으로 애니메이션하고, 매 프레임 각도(`arrAngle[i]*aniIdx/100`)·
    반지름(`150*aniIdx/100`)·크기(`100*aniIdx/100`)를 동시에 극좌표로 계산해 6개 SNS
    아이콘을 재배치하는 원본 `ani_onrun` 로직 그대로 이식 — 단순히 최종 각도에 고정된 채
    반지름만 커지는 게 아니라, 열리는 도중엔 각도 자체도 함께 좁혀져 있다가 펼쳐지는
    형태임을 소스에서 확인해 그대로 재현. `requestAnimationFrame` + `easeOutCirc(t)=
    sqrt(1-(t-1)^2)` 수식으로 구현, 클릭 트리거 없이 3초마다 자동 열림/닫힘 반복
    (`setTimer(0,3000)`).
  - **(2) 이미지 슬라이드**: `nexacro.Animation`(duration 500ms, easing "easeOutCubic")으로
    배너 컨테이너의 스크롤 위치를 보간 — React에서는 CSS `transition: transform 0.5s
    cubic-bezier(0.215,0.61,0.355,1)`로 대응. Prev/Next 버튼 클릭 + 2초마다 자동 재생
    (`setTimer(1,2000)`).
  - **원본 소스의 실제 버그 발견**: 설명 패널의 "이징" 섹션 제목이 `comp.animation` 키를
    잘못 재사용해(폴백만 "Easing", 실제 리소스 값은 "애니메이션") 원본에서도 그 제목이
    "이징"이 아니라 "애니메이션"이라고 뜬다(Playwright 실측 확인). 사용자에게 물어봤고
    오타로 판단해 새 키(`comp.animation.easing`)로 분리해 의도된 제목("이징"/"Easing")으로
    수정하기로 결정.
  - **자체 발견한 버그(구현 중)**: 원형 메뉴의 애니메이션 시작값(`from`)을 `useEffect`
    클로저로 한 번만 캡처해뒀더니 두 번째 토글부터 항상 마운트 시점 값(0)에서 보간을
    시작해버려 닫힘 애니메이션이 순간이동처럼 보이는 버그가 있었다 — ref로 항상 최신
    openness 값을 읽도록 수정.
  - dev(:5173)에서만 콘솔에 "`NaN` is an invalid value for the ... left" 에러가 1회
    나타났는데, 반복 관찰 결과 마운트 시 딱 한 번만 뜨고 이후 여러 열림/닫힘 사이클
    동안 재발하지 않았고, 게이트웨이(:3000) 프로덕션 빌드에서는 전혀 나타나지 않아
    React StrictMode 이중 마운트로 인한 dev 전용 아티팩트로 판단(기존에 문서화된
    "Event Target Lookup Error"류와 같은 패턴, 실제 시각적 동작은 dev/게이트웨이 양쪽
    모두 정상 확인).
  - **사용자 피드백으로 발견한 버그**: "첫번째 애니메이션 이미지가 영역을 벗어나는데"
    — 원형 메뉴가 완전히 펼쳐졌을 때 SNS 아이콘이 카드 밖으로 튀어나가는 문제. 원인은
    `.an-circle-wrap`을 globe 자체 크기(250x250)로만 잡아뒀던 것 — 아이콘이 펼쳐지는
    최대 범위는 중심에서 반지름(150) + 아이콘 절반(50) = 200px이므로 컨테이너가 최소
    400x400은 되어야 하는데, 250x250 래퍼가 패널의 왼쪽 경계에 바로 붙어 있어 왼쪽 위
    (Facebook) 아이콘이 `.work-card` 경계 밖 페이지 배경까지 삐져나왔다. `.an-circle-wrap`을
    450x450으로 키우고 `centerX`/`centerY`를 125→225로, globe 위치를 `left:0;top:0`→
    `left:100px;top:100px`로 옮겨 globe는 그대로 중앙에 두면서 아이콘이 펼쳐질 공간을
    전부 확보하도록 수정. Playwright로 `getBoundingClientRect()` 좌표를 직접 읽어 완전히
    열린 상태(아이콘 6개 모두 width=100)에서 모든 아이콘이 카드 경계(dev·게이트웨이 양쪽)
    안에 있음을 수치로 재검증(스크린샷 타이밍이 브라우저 탭 타이머 쓰로틀링으로 계속
    닫힌 순간만 잡혀 기하학적 좌표 검증이 더 신뢰도 높았음). 옆 "이미지 슬라이드" 패널과의
    간격도 40px로 유지되어 겹침 없음 확인.
  - Playwright로 원형 메뉴 자동 열림/닫힘 사이클(아이콘 6개 위치가 계산된 각도와 정확히
    일치함을 확인), 이미지 슬라이드 수동 Prev/Next 클릭 + 2초 자동 재생, 한국어/영어
    렌더링(비지역화 문자열 없음, "이징" 제목 분리 확인) 전부 재검증.
  - **사용자 피드백으로 발견한 두 번째 버그**: "원형 메뉴, 이미지 슬라이드가 있는 애니메이션
    영역에는 컨텐츠가... 브라우저창 줄였을때 망가지네" — 좁은 화면에서 `.an-circle-wrap`
    (450x450 고정)과 `.an-slide-viewport`(330x330 고정)가 줄어들지 않아 `.work` 컨테이너
    내부에 숨은 가로 스크롤이 생기며 잘려 보이는 문제. 이미지 슬라이드는 트랙 이동이
    처음부터 `%` 기반이라 `width:330px`→`width:min(330px,100%); aspect-ratio:1`로 바꾸는
    것만으로 해결. 원형 메뉴는 아이콘 좌표가 450 단위 고정 좌표계의 px로 계산되므로
    좌표를 다시 계산하는 대신, 바깥에 `.an-circle-scale`(`width:450px; max-width:100%;
    aspect-ratio:1`) 컨테이너를 하나 더 두고 `ResizeObserver`로 그 실제 너비를 관찰해
    `.an-circle-wrap` 전체에 `transform: scale(width/450)`를 적용 — 내부 애니메이션
    로직/좌표 계산은 그대로 두고 시각적으로만 축소. `.an-demo-panel`의 임의 `min-width:
    300px`도 `flex:1 1 340px; min-width:0`로 바꿔 완전히 줄어들 수 있게 함. 480px 너비
    dev·게이트웨이 양쪽에서 `.work`의 `scrollWidth === clientWidth`(숨은 스크롤 없음),
    원형 메뉴 완전히 열린 상태에서도 아이콘 6개 전부 카드 경계 안(스케일 축소 후에도
    좌표 재검증), 1300px로 되돌렸을 때 `transform: scale(1)`로 정상 복귀(회귀 없음) 확인.
    320px(사이드바만으로 이미 이 사이트 전체가 깨지는 폭)는 애니메이션 화면 고유의
    문제가 아니라 앱 전체의 사전 제약이라 이번 수정 범위 밖으로 판단.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  24/40 완료. 컴포넌트 카테고리 11개 중 10개 완료, 1개 남음.
  **커밋·push 완료(2026-07-19, 커밋 `c2e25c0`).**

- **menu_id 21300("Arrangement", comp::arrangement.xfdl) React 전환 완료 (2026-07-19).**
  `Arrangement.tsx`. 컴포넌트 카테고리의 마지막 화면. Dataset도 `svc::` 호출도 없는 순수
  UI 데모 — 원본은 "컴포넌트 좌표를 Form 기준이 아닌 다른 컴포넌트의 상대좌표로 설정"하는
  Nexacro 기능을 Add/Delete 가능한 두 개의 반복 리스트(고객 전화번호, 가족 구성원)로
  시연한다.
  - **원본 메커니즘 파악**: Add 클릭 시 새 하위 폼을 절대좌표로 삽입하고 top을
    `"이전 항목:-1"`(상대좌표 문자열)로 지정해 이전 항목 바로 아래에 붙인 뒤, 부모/폼의
    height를 수동으로 +45px(연락처)/+125px(가족)만큼 늘린다. Delete 시엔 반대로 다음 항목의
    top을 그 앞 항목 기준으로 재연결하고 height를 -45px/-110px만큼 줄인다.
  - **레이아웃 메커니즘은 포팅하지 않고 CSS에 맡김**: React/CSS의 flex-column은 항목을 DOM
    순서대로 자동으로 쌓고 삭제 시 자동으로 재정렬하므로(원본이 절대좌표+상대좌표 문자열로
    수동으로 흉내내는 것을 브라우저가 기본 제공), 좌표 재계산 로직 자체는 포팅하지 않고
    배열 상태(`contacts`/`family`) + flex 레이아웃으로 동일한 결과를 구현 — 20900(메뉴)
    아코디언 애니메이션 때와 같은 원칙.
  - **원본 실측 버그 발견**: 가족정보 패널은 Add 시 +125px, Delete 시 -110px로 높이 증감이
    비대칭이라, 추가 후 삭제해도 원래 높이로 돌아오지 않고 15px씩 밀린다 — Playwright로
    패널 실제 높이를 540→(Add)665→(Delete)555px로 실측해 정확히 재현/확인. flex-column
    기반 구현은 이 버그를 별도 처리 없이 자동으로 갖지 않는다(정상 동작으로 자연스럽게
    고쳐짐 — 좌표 미러링 로직 자체를 포팅하지 않기로 한 결정의 부수 효과).
  - **비지역화 리터럴 텍스트 확인**: "Familly Infomation"/"Choose Realationship"/"Nidce"
    등은 원본 xfdl에서 `TEXT()` 래핑 없이 하드코딩된 영문 리터럴(언어를 바꿔도 원본에서
    바뀌지 않음)임을 소스로 확인 — 오타까지 그대로 재현(제목/desc만 실제
    stringresource 키라 지역화).
  - Add 버튼은 각 리스트의 첫 항목(삭제 불가) 옆에 고정, 이후 추가된 항목에만 Delete
    버튼이 나타나는 규칙을 Playwright로 원본에서 실측 확인 후 그대로 재현 — 원본 첫 항목은
    영구히 삭제 버튼이 없다.
  - 패널 배경(#F5F3FE), Add 버튼(#FE5252)/Delete 버튼(#6954E1) 색상, 대시 구분선(#A598EF)을
    `getComputedStyle()`로 실측해 정확히 일치시킴.
  - 좁은 화면(480px)에서 `.ar-select-relationship`(250px 고정, `flex-shrink:0`)이 줄어들지
    않아 카드 밖으로 넘치는 문제를 발견/수정(`flex-shrink:0` 제거 + `max-width:100%`) —
    5-48 교훈과 같은 클래스의 반응형 버그.
  - Playwright로 고객 연락처 3개 추가 후 가운데 삭제(재연결 확인), 가족 구성원 추가/삭제,
    한국어/영어 렌더링(상태 유지 확인, 비지역화 텍스트 불변 확인) 전부 검증. dev·게이트웨이
    양쪽 콘솔 에러 0건.
  - `target: "react"`로 전환 완료(`menu.ts`), `App.tsx`의 `CONVERTED_SCREENS`에 등록.
  25/40 완료. **컴포넌트 카테고리 11개 전부 완료.**
  **아직 커밋 전 — 사용자 확인 대기.**
