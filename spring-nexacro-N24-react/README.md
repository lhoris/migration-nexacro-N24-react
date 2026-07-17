# React Host Shell — 워킹 스켈레톤 PoC

`docs/migration/` 전략 문서 SEC.11(다음 단계 제안) 3번 항목의 산출물이다. Nexacro `root.xfdl` 공통 프레임(top/leftmenu/work/footer)을 React로 대체했을 때 실제로 성립하는지 검증하기 위한 최소 구현이며, **아직 실제 화면 전환의 일부가 아니다.**

## 실행 방법

```bash
npm install
npm run dev
```

`http://localhost:5173`에서 확인한다. `npm run build`로 타입체크 + 프로덕션 빌드 검증도 가능하다.

## 무엇을 증명하는가

- **GNB(`src/shell/GlobalNav.tsx`) / LNB(`src/shell/SideNav.tsx`) / Footer(`src/shell/Footer.tsx`)** — Nexacro `top.xfdl` / `leftmenu.xfdl` / `footer.xfdl`을 대체하는 공유 크롬 하나로 모든 업무 화면을 감쌀 수 있음을 보여준다.
- **메뉴 데이터(`src/data/menu.ts`)** — ADR-005가 정의한 Navigation 서비스 응답 형태(각 리프에 `target: "react" | "nexacro"`)를 그대로 흉내낸 목(mock) 데이터. 실제 구현에서는 이 파일 대신 API를 호출한다.
- **Work Area(`src/routes/WorkArea.tsx`)** — 같은 라우팅 트리 안에서 `target`이 `react`인 항목과 `nexacro`인 항목이 시각적으로 구분되어 공존한다. 화면 우측 상단 토글 버튼으로 `target`을 즉시 전환해보면, LNB의 상태 점(dot)과 본문이 **재배포 없이** 즉시 갱신된다 — ADR-005/SEC.06이 전제하는 "메뉴 단위 카나리·롤백"이 UI 레벨에서 실제로 성립함을 보여준다.

## 포함하지 않은 것 (과대 해석 주의)

- **실제 Module Federation Remote 마운트** (ADR-002) — `target: "react"` 화면은 지금은 자리표시자 카드일 뿐, 실제 도메인 스쿼드 Remote 앱이 아니다.
- **실제 Nexacro 임베드/연동** — `target: "nexacro"` 화면도 자리표시자다. 실제 구현에서는 이 라우트가 아예 존재하지 않고 게이트웨이가 `/nexacro/**`로 직접 흘려보낸다 (ADR-001).
- **Navigation 서비스 API 연동** (ADR-005) — 목 데이터를 로컬 상태로 토글할 뿐, 실제 백엔드 호출은 없다.
- **인증/세션 공유** (ADR-004), **OpenAPI 계약 연동** (ADR-003) — 이번 스켈레톤 스코프 밖.

## 다음으로 이어질 작업

1. `menu.ts`를 실제 Navigation 서비스 API 호출로 교체 (ADR-005 구현)
2. `target: "react"` 항목 중 하나를 Module Federation Remote로 실제 마운트 (ADR-002 구현)
3. 이 Shell을 게이트웨이 뒤 `/app/**` 경로에 배포해 Spring이 서빙하는 `/nexacro/**`와 공존시키기 (ADR-001 1단계)
