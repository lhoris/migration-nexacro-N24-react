import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import { WORKFLOW_ITEMS, WORKFLOW_LINES, type WorkflowNode, type WorkflowLine } from "../../data/graphicsWorkflowData";
import { ORG_ROWS, DIRECTION_OPTIONS, type OrgRow, type Direction } from "../../data/graphicsOrgData";
import "./graphics.css";

type Position = "left" | "right" | "top" | "bottom";

/**
 * Nexacro comp::graphics.xfdl(메뉴 "그래픽스", 실제 menu_id 21100)을 React로 옮긴 화면.
 * 원본 Graphics 컴포넌트는 HTML5 Canvas를 감싸는 저수준 드로잉 위젯이고, 실제 그리기
 * 로직은 두 include 스크립트(lib::Workflow.xjs, lib::OrganizationChart.xjs)에 있다 —
 * Dataset도 svc:: 호출도 없는 순수 클라이언트 데모.
 *
 * **이 화면은 이 프로젝트의 현재 개발 환경에서 원본 자체가 로드되지 않는다** — Playwright로
 * 직접 열어보면 로딩 스피너에서 멈추고 "Cannot set properties of undefined (setting
 * 'bcache')" 콘솔 에러가 반복된다(Graphics 컴포넌트 런타임 자체의 문제로 보이며, 이
 * 마이그레이션 작업과 무관한 기존 버그). 그래서 시각적으로 대조할 실제 렌더링 결과가 없다 —
 * 사용자에게 물어봤고 "원본 소스(xfdl.js + Workflow.xjs + OrganizationChart.xjs) 분석
 * 기반으로 전체 인터랙티브 기능까지 구현"을 선택받아, 소스에서 확인된 좌표·색상·연결선
 * 라우팅 로직·줌/패닝/펼치기 동작을 그대로 재현했다(단, 실제 렌더링을 눈으로 검증할
 * 방법이 없었다는 점을 리포트에 명시).
 *
 * 탭 1(Workflow): dsItems(44개 노드)/dsLines(32개 연결선)를 그대로 옮겨 흐름도를 그린다.
 * 노드 타입 3종(type01=사각형, type02=둥근 사각형/알약형, type03=배경 없는 텍스트 라벨),
 * 연결선은 축에 맞으면 직선, 아니면 ㄱ자/ㄷ자 꺾임 경로(원본 gfnDrawGraphicPath 로직 그대로)로
 * 라우팅하고 양 끝에 화살표 캡을 선택적으로 그린다. 배경 드래그로 전체 패닝만 가능(줌 없음).
 *
 * 탭 2(Organization Chart): dsOrg(42개 행, 3개 루트 트리)를 계층 구조로 엮어 조직도를
 * 그린다. 가로/세로 정렬 라디오(원본처럼 "가로정렬" 캡션은 비지역화 한글 그대로 유지),
 * 확대/축소 버튼과 마우스 휠 줌, 노드별 펼치기/접기(원본처럼 접었다 펴도 클릭한 노드가
 * 화면상 같은 위치에 남도록 델타를 보정)까지 원본 로직 그대로 구현.
 */
export function Graphics() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<0 | 1>(0);

  return (
    <main className="work">
      <div className="work-card react gx-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#21100">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="gx-page-title">{t("comp.graphics")}</h1>

        <div className="gx-tabs">
          <button type="button" className={`gx-tab${tab === 0 ? " gx-tab-active" : ""}`} onClick={() => setTab(0)}>
            {t("comp.graphics.workflow")}
          </button>
          <button type="button" className={`gx-tab${tab === 1 ? " gx-tab-active" : ""}`} onClick={() => setTab(1)}>
            {t("comp.graphics.organizationchart")}
          </button>
        </div>

        <div className="gx-tab-body">
          {tab === 0 ? <WorkflowDiagram /> : <OrgChartDiagram />}
        </div>

        <section className="gx-desc">
          <h3 className="gx-desc-title">{t("comp.graphics")}</h3>
          <p className="gx-desc-body">{t("comp.graphics.desc")}</p>
        </section>
      </div>
    </main>
  );
}

// -- 공용 팬(드래그 이동) 훅 --
function usePan(initial = { x: 40, y: 20 }) {
  const [pan, setPan] = useState(initial);
  const dragRef = useRef<{ startX: number; startY: number; panX: number; panY: number } | null>(null);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      dragRef.current = { startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y };
    },
    [pan],
  );
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragRef.current) return;
    const { startX, startY, panX, panY } = dragRef.current;
    setPan({ x: panX + (e.clientX - startX), y: panY + (e.clientY - startY) });
  }, []);
  const onMouseUp = useCallback(() => {
    dragRef.current = null;
  }, []);

  return { pan, setPan, onMouseDown, onMouseMove, onMouseUp };
}

// -- 노드 anchor/연결선 라우팅(원본 Workflow.xjs gfnDrawGraphicPath 로직) --
const NODE_W = 140;
const NODE_H = 30;

function anchorOf(node: WorkflowNode, position: Position) {
  switch (position) {
    case "left":
      return { x: node.x, y: node.y + NODE_H / 2 };
    case "right":
      return { x: node.x + NODE_W, y: node.y + NODE_H / 2 };
    case "top":
      return { x: node.x + NODE_W / 2, y: node.y };
    case "bottom":
      return { x: node.x + NODE_W / 2, y: node.y + NODE_H };
  }
}

const isHorizontalPos = (p: Position) => p === "left" || p === "right";

function routePath(p1: { x: number; y: number }, p2: { x: number; y: number }, fromPos: Position, toPos: Position) {
  if (p1.x === p2.x || p1.y === p2.y) return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
  if (isHorizontalPos(fromPos) && isHorizontalPos(toPos)) {
    const midX = (p1.x + p2.x) / 2;
    return `M ${p1.x} ${p1.y} L ${midX} ${p1.y} L ${midX} ${p2.y} L ${p2.x} ${p2.y}`;
  }
  if (!isHorizontalPos(fromPos) && !isHorizontalPos(toPos)) {
    const midY = (p1.y + p2.y) / 2;
    return `M ${p1.x} ${p1.y} L ${p1.x} ${midY} L ${p2.x} ${midY} L ${p2.x} ${p2.y}`;
  }
  if (isHorizontalPos(fromPos)) return `M ${p1.x} ${p1.y} L ${p2.x} ${p1.y} L ${p2.x} ${p2.y}`;
  return `M ${p1.x} ${p1.y} L ${p1.x} ${p2.y} L ${p2.x} ${p2.y}`;
}

function capPath(anchor: { x: number; y: number }, position: Position, size = 10) {
  const h = size / 2;
  switch (position) {
    case "left":
      return `M ${anchor.x - size} ${anchor.y - h} L ${anchor.x} ${anchor.y} L ${anchor.x - size} ${anchor.y + h} Z`;
    case "right":
      return `M ${anchor.x + size} ${anchor.y - h} L ${anchor.x} ${anchor.y} L ${anchor.x + size} ${anchor.y + h} Z`;
    case "top":
      return `M ${anchor.x - h} ${anchor.y - size} L ${anchor.x} ${anchor.y} L ${anchor.x + h} ${anchor.y - size} Z`;
    case "bottom":
      return `M ${anchor.x - h} ${anchor.y + size} L ${anchor.x} ${anchor.y} L ${anchor.x + h} ${anchor.y + size} Z`;
  }
}

function WorkflowDiagram() {
  const { pan, onMouseDown, onMouseMove, onMouseUp } = usePan();
  const nodeMap = useMemo(() => new Map(WORKFLOW_ITEMS.map((n) => [n.id, n])), []);

  return (
    <div
      className="gx-canvas"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <svg width="100%" height="100%">
        <g transform={`translate(${pan.x} ${pan.y})`}>
          {WORKFLOW_LINES.map((line) => (
            <WorkflowConnector key={line.id} line={line} nodeMap={nodeMap} />
          ))}
          {WORKFLOW_ITEMS.map((node) => (
            <WorkflowNodeShape key={node.id} node={node} />
          ))}
        </g>
      </svg>
    </div>
  );
}

function WorkflowConnector({ line, nodeMap }: { line: WorkflowLine; nodeMap: Map<string, WorkflowNode> }) {
  const from = nodeMap.get(line.from);
  const to = nodeMap.get(line.to);
  if (!from || !to) return null;
  const p1 = anchorOf(from, line.fromPosition);
  const p2 = anchorOf(to, line.toPosition);
  return (
    <g>
      <path d={routePath(p1, p2, line.fromPosition, line.toPosition)} className="gx-line" />
      {line.startCap && <path d={capPath(p1, line.fromPosition)} className="gx-cap" />}
      {line.endCap && <path d={capPath(p2, line.toPosition)} className="gx-cap" />}
    </g>
  );
}

function WorkflowNodeShape({ node }: { node: WorkflowNode }) {
  if (node.type === "type03") {
    return (
      <text x={node.x + NODE_W / 2} y={node.y + NODE_H / 2} className="gx-node-text gx-node-text-dark">
        {node.title}
      </text>
    );
  }
  const rounded = node.type === "type02";
  return (
    <g>
      <rect
        x={node.x}
        y={node.y}
        width={NODE_W}
        height={NODE_H}
        rx={rounded ? 15 : 0}
        ry={rounded ? 15 : 0}
        className="gx-node-fill"
      />
      <text x={node.x + NODE_W / 2} y={node.y + NODE_H / 2} className="gx-node-text gx-node-text-light">
        {node.title}
      </text>
    </g>
  );
}

// -- 조직도 트리 레이아웃 --
const ORG_NODE_W = 100;
const ORG_NODE_H = 50;
const ORG_GAP_SIBLING = 30;
const ORG_GAP_LEVEL = 70;

interface OrgTreeNode {
  row: OrgRow;
  children: OrgTreeNode[];
}

interface PositionedOrgNode {
  row: OrgRow;
  x: number;
  y: number;
  children: PositionedOrgNode[];
}

function buildOrgForest(rows: OrgRow[]): OrgTreeNode[] {
  const map = new Map<string, OrgTreeNode>();
  rows.forEach((r) => map.set(r.orgNum, { row: r, children: [] }));
  const roots: OrgTreeNode[] = [];
  rows.forEach((r) => {
    const node = map.get(r.orgNum)!;
    const parent = map.get(r.uperOrgNum);
    if (parent) parent.children.push(node);
    else roots.push(node);
  });
  return roots;
}

function layoutOrgForest(roots: OrgTreeNode[], direction: Direction, collapsed: Set<string>): PositionedOrgNode[] {
  let cursor = 0;
  const flat: PositionedOrgNode[] = [];

  function place(node: OrgTreeNode, depth: number): PositionedOrgNode {
    const isCollapsed = collapsed.has(node.row.orgNum);
    const depthCoord = depth * (direction === "horizontal" ? ORG_NODE_H + ORG_GAP_LEVEL : ORG_NODE_W + ORG_GAP_LEVEL);

    if (!isCollapsed && node.children.length > 0) {
      const kids = node.children.map((c) => place(c, depth + 1));
      const first = kids[0];
      const last = kids[kids.length - 1];
      const spreadCoord = direction === "horizontal" ? (first.x + last.x) / 2 : (first.y + last.y) / 2;
      const pos: PositionedOrgNode =
        direction === "horizontal"
          ? { row: node.row, x: spreadCoord, y: depthCoord, children: kids }
          : { row: node.row, x: depthCoord, y: spreadCoord, children: kids };
      flat.push(pos);
      return pos;
    }
    const spreadCoord = cursor * (direction === "horizontal" ? ORG_NODE_W + ORG_GAP_SIBLING : ORG_NODE_H + ORG_GAP_SIBLING);
    cursor += 1;
    const pos: PositionedOrgNode =
      direction === "horizontal"
        ? { row: node.row, x: spreadCoord, y: depthCoord, children: [] }
        : { row: node.row, x: depthCoord, y: spreadCoord, children: [] };
    flat.push(pos);
    return pos;
  }

  roots.forEach((r) => place(r, 0));
  return flat;
}

function connectorPath(parent: PositionedOrgNode, child: PositionedOrgNode, direction: Direction) {
  if (direction === "horizontal") {
    const x1 = parent.x + ORG_NODE_W / 2;
    const y1 = parent.y + ORG_NODE_H;
    const x2 = child.x + ORG_NODE_W / 2;
    const y2 = child.y;
    const midY = (y1 + y2) / 2;
    return `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
  }
  const x1 = parent.x + ORG_NODE_W;
  const y1 = parent.y + ORG_NODE_H / 2;
  const x2 = child.x;
  const y2 = child.y + ORG_NODE_H / 2;
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
}

const ZOOM_MIN = 0.3;
const ZOOM_MAX = 3;

function OrgChartDiagram() {
  const { pan, setPan, onMouseDown, onMouseMove, onMouseUp } = usePan({ x: 40, y: 20 });
  const [scale, setScale] = useState(1);
  const [direction, setDirection] = useState<Direction>("horizontal");
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  const containerRef = useRef<HTMLDivElement | null>(null);

  const forest = useMemo(() => buildOrgForest(ORG_ROWS), []);
  const layout = useMemo(() => layoutOrgForest(forest, direction, collapsed), [forest, direction, collapsed]);
  const layoutById = useMemo(() => new Map(layout.map((n) => [n.row.orgNum, n])), [layout]);

  const applyZoom = useCallback((factor: number, screenX: number, screenY: number) => {
    setScale((prevScale) => {
      const newScale = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, prevScale * factor));
      setPan((prevPan) => {
        const worldX = (screenX - prevPan.x) / prevScale;
        const worldY = (screenY - prevPan.y) / prevScale;
        return { x: screenX - worldX * newScale, y: screenY - worldY * newScale };
      });
      return newScale;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const zoomAtCenter = (factor: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const cx = rect ? rect.width / 2 : 0;
    const cy = rect ? rect.height / 2 : 0;
    applyZoom(factor, cx, cy);
  };

  // React의 onWheel(합성 이벤트)은 브라우저 스크롤 성능을 위해 passive 리스너로 등록돼
  // e.preventDefault()가 씹힌다("Unable to preventDefault inside passive event listener
  // invocation" 콘솔 에러로 실측 확인) — 네이티브 리스너를 { passive:false }로 직접 등록해야
  // 휠로 줌하는 동안 페이지 스크롤이 같이 일어나지 않는다.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      applyZoom(e.deltaY < 0 ? 1.1 : 0.9, e.clientX - rect.left, e.clientY - rect.top);
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [applyZoom]);

  const toggleCollapse = (orgNum: string) => {
    const before = layoutById.get(orgNum);
    const willCollapse = !collapsed.has(orgNum);
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (willCollapse) next.add(orgNum);
      else next.delete(orgNum);
      return next;
    });
    if (before) {
      // 원본처럼 펼치기/접기 후에도 클릭한 노드가 화면상 같은 위치에 남도록 델타 보정.
      requestAnimationFrame(() => {
        const afterForest = buildOrgForest(ORG_ROWS);
        const afterCollapsed = new Set(collapsed);
        if (willCollapse) afterCollapsed.add(orgNum);
        else afterCollapsed.delete(orgNum);
        const afterLayout = layoutOrgForest(afterForest, direction, afterCollapsed);
        const after = afterLayout.find((n) => n.row.orgNum === orgNum);
        if (after) {
          const dx = (after.x - before.x) * scale;
          const dy = (after.y - before.y) * scale;
          setPan((prev) => ({ x: prev.x - dx, y: prev.y - dy }));
        }
      });
    }
  };

  return (
    <div className="gx-orgchart-wrap">
      <div className="gx-org-controls">
        <button type="button" className="gx-btn" onClick={() => zoomAtCenter(1.1)}>
          Zoom In
        </button>
        <button type="button" className="gx-btn" onClick={() => zoomAtCenter(0.9)}>
          Zoom Out
        </button>
        <div className="gx-radio-group">
          <span className="gx-radio-caption">가로정렬</span>
          {DIRECTION_OPTIONS.map((opt) => (
            <label key={opt.code} className="gx-radio-option">
              <input
                type="radio"
                name="gx-direction"
                checked={direction === opt.code}
                onChange={() => setDirection(opt.code)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        className="gx-canvas"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <svg width="100%" height="100%">
          <g transform={`translate(${pan.x} ${pan.y}) scale(${scale})`}>
            {layout.map(
              (node) =>
                node.children.length > 0 &&
                node.children.map((child) => (
                  <path
                    key={`${node.row.orgNum}-${child.row.orgNum}`}
                    d={connectorPath(node, child, direction)}
                    className="gx-org-line"
                  />
                )),
            )}
            {layout.map((node) => (
              <OrgNodeShape
                key={node.row.orgNum}
                node={node}
                hasChildren={forestHasChildren(forest, node.row.orgNum)}
                collapsed={collapsed.has(node.row.orgNum)}
                onToggle={() => toggleCollapse(node.row.orgNum)}
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

function forestHasChildren(forest: OrgTreeNode[], orgNum: string): boolean {
  function search(nodes: OrgTreeNode[]): boolean {
    for (const n of nodes) {
      if (n.row.orgNum === orgNum) return n.children.length > 0;
      if (search(n.children)) return true;
    }
    return false;
  }
  return search(forest);
}

function OrgNodeShape({
  node,
  hasChildren,
  collapsed,
  onToggle,
}: {
  node: PositionedOrgNode;
  hasChildren: boolean;
  collapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <g>
      <rect x={node.x} y={node.y} width={ORG_NODE_W} height={ORG_NODE_H} className="gx-org-node" />
      <text x={node.x + ORG_NODE_W / 2} y={node.y + 16} className="gx-org-text">
        {node.row.orgNm}
      </text>
      <text x={node.x + ORG_NODE_W / 2} y={node.y + 34} className="gx-org-text">
        {node.row.empNm}
      </text>
      {hasChildren && (
        <image
          href={collapsed ? "/nexacro-icons/btn_pvGrd_TreeExpand.png" : "/nexacro-icons/btn_pvGrd_TreeCollapse.png"}
          x={node.x + ORG_NODE_W / 2 - 4.5}
          y={node.y + ORG_NODE_H - 9}
          width={9}
          height={9}
          className="gx-org-toggle"
          onClick={onToggle}
        />
      )}
    </g>
  );
}
