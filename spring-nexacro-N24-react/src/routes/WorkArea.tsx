import type { MenuItem, MenuTarget } from "../data/menu";

interface WorkAreaProps {
  item: MenuItem;
  target: MenuTarget;
  onToggleTarget: (id: string) => void;
}

/**
 * Nexacro work.xfdl(콘텐츠 아웃렛)의 React 대체재.
 *
 * target === "nexacro"인 항목은 실제 이 저장소가 서빙 중인 Nexacro 화면으로
 * /nexacro/launch.html#{nexacroMenuId} 딥링크를 건다. root.xfdl.js의
 * onChangeHistory(hash)가 그 해시를 그대로 읽어 해당 메뉴를 연다 — 목업이 아니라
 * 실제 게이트웨이(:3000) 뒤의 진짜 Nexacro 앱으로 이동한다.
 *
 * target === "react"인 항목(현재는 "홈" 하나)은 실제로 React가 소유한 화면이다.
 *
 * iframe으로 React 프레임 안에 Nexacro를 마운트하는 방식은 시도해보고 폐기했다:
 * 세션/인증 상태가 두 개의 독립된 앱 인스턴스(React 최상위 + iframe 속 Nexacro
 * 엔진)로 쪼개져 동기화가 애매해진다 — SEC.02/ADR-002가 이 방식을 기본이 아니라
 * "예외"로 남겨둔 바로 그 이유. 그래서 전체 페이지 이동(풀 네비게이션) 방식만 쓴다.
 */
export function WorkArea({ item, target, onToggleTarget }: WorkAreaProps) {
  const isReact = target === "react";
  const nexacroUrl = item.nexacroMenuId ? `/nexacro/launch.html#${item.nexacroMenuId}` : undefined;

  return (
    <main className="work">
      <div className={`work-card ${target}`}>
        <div className="work-eyebrow">Work Area · 실제 menu_id: {item.id}</div>
        <h1 className="work-title">{item.label}</h1>

        <div className="work-meta">
          <span>
            target: <span className={`tag ${target}`}>{target.toUpperCase()}</span>
          </span>
          {item.xfdlFile && <span>gdsAllMenu.url: {item.xfdlFile}</span>}
        </div>

        {item.tooltip && <p className="work-desc">{item.tooltip}</p>}

        {isReact ? (
          <p className="work-desc">
            이 화면은 React Host Shell이 직접 소유하는 네이티브 페이지다. Nexacro 쪽에는 대응하는
            화면이 없다 — 하이브리드 전환에서 가장 먼저 React로 옮겨야 하는 공유 크롬/랜딩 성격의
            화면을 뜻한다.
          </p>
        ) : (
          <>
            <p className="work-desc">
              이 화면은 아직 Nexacro가 서빙 중이다. 실제 Nexacro 앱은 <code>root.xfdl</code>의{" "}
              <code>onChangeHistory(hash)</code>가 URL 해시를 읽어 해당 메뉴로 이동하는 방식을 쓰므로,
              아래 버튼은 자리표시자가 아니라 <strong>진짜 그 화면으로 딥링크</strong>된다.
            </p>
            {nexacroUrl && (
              <a className="work-toggle" href={nexacroUrl} style={{ display: "inline-block", textDecoration: "none" }}>
                Nexacro 화면 열기 → {nexacroUrl}
              </a>
            )}
          </>
        )}

        <p className="work-hint" style={{ marginTop: 16 }}>
          <button className="work-toggle" onClick={() => onToggleTarget(item.id)}>
            target 전환 시뮬레이션 ({isReact ? "nexacro로" : "react로"})
          </button>
          <br />
          ADR-005: 실제로는 이 토글이 Navigation 서비스 API 호출이 되어야 한다. 지금은 로컬 상태
          시뮬레이션일 뿐 — 이 화면이 실제로 React로 마이그레이션된 것은 아니다.
        </p>
      </div>
    </main>
  );
}
