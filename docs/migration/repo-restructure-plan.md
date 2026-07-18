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
    `CONVERTED_SCREENS`에 등록. **아직 커밋 전.**

**아직 안 한 것 (다음에 이어서 할 일, 순서대로):**
1. ~~`spring-nexacro-N24/` 복사본 최종 검토~~ — 완료(빌드·실행 확인까지 마침).
2. ~~`v2-hybrid-pilot` 커밋 및 태그~~ — 완료(2026-07-18, 커밋 `65489ef`, push까지 완료).
3. ~~menu_id 10200 화면 전환~~ — 완료, 커밋·push까지 완료(2026-07-18, 커밋 `c7a99d6`).
4. menu_id 10300 화면 전환 완료(3/40) — **커밋 여부 사용자 확인 대기.** 화면 전환 37개 남음.
4. 기존 독립 저장소 2개(`spring-nexacro-N24/`, `spring-nexacro-N24-react/`) 처리 방침 — 우산
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
