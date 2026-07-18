import { useEffect, useMemo, useRef, useState } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import {
  FIELD_LABEL,
  ROW_COUNT_OPTIONS,
  generatePivotFacts,
  isDimensionField,
  isMeasureField,
  type DimensionFieldId,
  type FieldId,
  type MeasureFieldId,
  type PivotFact,
} from "../../data/pivotMock";
import { buildPivotColumns, buildPivotRows, type AxisConfig } from "./pivotEngine";
import "./pivot.css";

type Translate = (key: string, fallback?: string) => string;
type Zone = "fields" | "colAxis" | "rowAxis" | "values";

interface AxisState {
  fields: FieldId[];
  colAxis: DimensionFieldId[];
  rowAxis: DimensionFieldId[];
  values: MeasureFieldId[];
}

const DEFAULT_AXIS: AxisState = {
  fields: [],
  colAxis: ["date", "channel"],
  rowAxis: ["salesDept", "department"],
  values: ["totalSales", "totalReturnSales", "overchargePrice", "promotionAmount", "netSales"],
};

const ZONES: Zone[] = ["fields", "colAxis", "rowAxis", "values"];

/**
 * Nexacro grid::pivot.xfdl(메뉴 "피벗", 실제 menu_id 10500)를 React로 옮긴 화면.
 * 원본은 NxPivot(오픈소스 넥사크로 피벗 컴포넌트)이 svc::pivotdata 트랜잭션으로 서버에서
 * 실 데이터를 받아와 렌더링하는데, 이 프로젝트엔 그 백엔드가 없다 — 원본 화면에서 직접
 * "조회" 버튼을 눌러봐도 "FAILED" 알럿만 뜬다(Playwright로 실측 확인). 사용자와 상의해
 * 클라이언트에서 목업 데이터를 생성하고 실제로 동작하는 피벗 집계 엔진(pivotEngine.ts)을
 * 직접 구현하는 쪽으로 방향을 잡았다 — "행/열을 드래그 앤 드롭으로 조작"하는 것 자체가 이
 * 화면의 핵심 기능이라 뼈대만 보여주는 건 이 화면의 요점을 놓치는 것이라 판단했다.
 */
export function Pivot() {
  const { t } = useLanguage();

  const [rowCount, setRowCount] = useState(ROW_COUNT_OPTIONS[0]);
  const [facts, setFacts] = useState<PivotFact[] | null>(null);
  const [draftAxis, setDraftAxis] = useState<AxisState>(DEFAULT_AXIS);
  const [appliedAxis, setAppliedAxis] = useState<AxisState>(DEFAULT_AXIS);
  const [autoExecute, setAutoExecute] = useState(false);
  const [panelVisible, setPanelVisible] = useState(true);
  const [rowsExpanded, setRowsExpanded] = useState(true);
  const [columnsExpanded, setColumnsExpanded] = useState(true);
  const [status, setStatus] = useState({ network: 0, render: 0, rows: 0 });

  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: [],
      columns: [],
      layout: "fitDataFill",
      height: "360px",
      dataTree: true,
      dataTreeChildField: "_children",
      dataTreeStartExpanded: true,
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, []);

  const effectiveAxis: AxisConfig = useMemo(
    () => ({
      colAxis: columnsExpanded ? appliedAxis.colAxis : appliedAxis.colAxis.slice(0, 1),
      rowAxis: rowsExpanded ? appliedAxis.rowAxis : appliedAxis.rowAxis.slice(0, 1),
      values: appliedAxis.values,
    }),
    [appliedAxis, rowsExpanded, columnsExpanded],
  );

  const rowHeaderTitle = useMemo(
    () => effectiveAxis.rowAxis.map((f) => FIELD_LABEL[f]).join(" / ") || "",
    [effectiveAxis],
  );

  useEffect(() => {
    const table = tableRef.current;
    if (!table || !facts) return;
    const start = performance.now();
    const columns = buildPivotColumns(facts, effectiveAxis, rowHeaderTitle);
    const rows = buildPivotRows(facts, effectiveAxis).map((r) =>
      r.rowLabel === "__TOTAL__" ? { ...r, rowLabel: t("pivot.total") } : r,
    );
    table.setColumns(columns);
    table.setData(rows).then(() => {
      const renderMs = performance.now() - start;
      setStatus((prev) => ({ ...prev, render: Math.round((renderMs / 1000) * 1000) / 1000 }));
    });
    // rowCount/network 표시는 검색 시점에만 갱신하고, 여기(축 재구성)에서는 렌더시간만 갱신한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facts, effectiveAxis, rowHeaderTitle]);

  const onSearch = () => {
    setFacts(null);
    setStatus({ network: 0, render: 0, rows: 0 });
    const networkMs = 150 + (rowCount / 100_000) * (150 + Math.random() * 200);
    window.setTimeout(() => {
      setStatus((prev) => ({ ...prev, network: Math.round((networkMs / 1000) * 1000) / 1000, rows: rowCount }));
      setFacts(generatePivotFacts(rowCount));
    }, networkMs);
  };

  const moveField = (id: FieldId, from: Zone, to: Zone) => {
    if (from === to) return;
    if ((to === "colAxis" || to === "rowAxis") && !isDimensionField(id)) return;
    if (to === "values" && !isMeasureField(id)) return;

    setDraftAxis((prev) => {
      const stripped: AxisState = {
        fields: prev.fields.filter((f) => f !== id),
        colAxis: prev.colAxis.filter((f) => f !== id),
        rowAxis: prev.rowAxis.filter((f) => f !== id),
        values: prev.values.filter((f) => f !== id),
      };
      if (to === "colAxis") stripped.colAxis.push(id as DimensionFieldId);
      else if (to === "rowAxis") stripped.rowAxis.push(id as DimensionFieldId);
      else if (to === "values") stripped.values.push(id as MeasureFieldId);
      else stripped.fields.push(id);

      if (autoExecute) setAppliedAxis(stripped);
      return stripped;
    });
  };

  const onExecute = () => setAppliedAxis(draftAxis);
  const onInit = () => {
    setDraftAxis(DEFAULT_AXIS);
    setAppliedAxis(DEFAULT_AXIS);
  };
  const onExport = () => tableRef.current?.download("csv", "pivot-export.csv");

  return (
    <main className="work">
      <div className="work-card react pv-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10500">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="pv-page-title">{t("grid.pivot")}</h1>

        <div className="pv-search-row">
          <span className="pv-search-label">{t("grid.rowcount")}</span>
          <select
            className="pv-search-select"
            value={rowCount}
            onChange={(e) => setRowCount(Number(e.target.value))}
          >
            {ROW_COUNT_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n.toLocaleString()}
              </option>
            ))}
          </select>
          <button type="button" className="pv-search-btn" onClick={onSearch}>
            🔍 {t("pivot.search")}
          </button>
        </div>

        <p className="pv-hint">{t("inquiry.result")}</p>

        <div className="pv-toolbar">
          <div className="pv-toolbar-group">
            <button
              type="button"
              className="pv-tool-btn"
              onClick={() => setRowsExpanded((v) => !v)}
              title={rowsExpanded ? t("pivot.tool.rowsCollapse") : t("pivot.tool.rowsExpand")}
            >
              {rowsExpanded ? t("pivot.tool.rowsCollapse") : t("pivot.tool.rowsExpand")}
            </button>
            <button
              type="button"
              className="pv-tool-btn"
              onClick={() => setColumnsExpanded((v) => !v)}
              title={columnsExpanded ? t("pivot.tool.colsCollapse") : t("pivot.tool.colsExpand")}
            >
              {columnsExpanded ? t("pivot.tool.colsCollapse") : t("pivot.tool.colsExpand")}
            </button>
          </div>
          <div className="pv-toolbar-group">
            <button
              type="button"
              className="pv-tool-btn"
              onClick={() => setPanelVisible((v) => !v)}
              title={panelVisible ? t("pivot.tool.panelCollapse") : t("pivot.tool.panelExpand")}
            >
              {panelVisible ? t("pivot.tool.panelCollapse") : t("pivot.tool.panelExpand")}
            </button>
            <button type="button" className="pv-tool-btn pv-tool-btn-accent" onClick={onExecute}>
              {t("pivot.tool.execute")}
            </button>
            <button type="button" className="pv-tool-btn" onClick={onInit}>
              {t("pivot.tool.init")}
            </button>
            <button
              type="button"
              className={`pv-tool-btn${autoExecute ? " active" : ""}`}
              onClick={() => setAutoExecute((v) => !v)}
              title={autoExecute ? t("pivot.tool.manual") : t("pivot.tool.auto")}
            >
              {autoExecute ? t("pivot.tool.auto") : t("pivot.tool.manual")}
            </button>
          </div>
        </div>

        {panelVisible && (
          <div className="pv-axis-panel">
            {ZONES.map((zone) => (
              <AxisZone key={zone} zone={zone} ids={draftAxis[zone]} t={t} onDrop={moveField} />
            ))}
          </div>
        )}

        <div ref={mountRef} className="pv-grid-mount" />

        <div className="pv-status-row">
          <span className="pv-status">
            {t("pivot.status")
              .replace("{network}", status.network.toString())
              .replace("{render}", status.render.toString())
              .replace("{rows}", status.rows.toLocaleString())}
          </span>
          <button type="button" className="pv-export-btn" disabled={!facts} onClick={onExport}>
            {t("grid.export")}
          </button>
        </div>

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function AxisZone({
  zone,
  ids,
  t,
  onDrop,
}: {
  zone: Zone;
  ids: FieldId[];
  t: Translate;
  onDrop: (id: FieldId, from: Zone, to: Zone) => void;
}) {
  return (
    <div
      className="pv-zone"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const raw = e.dataTransfer.getData("text/plain");
        if (!raw) return;
        try {
          const { id, from } = JSON.parse(raw) as { id: FieldId; from: Zone };
          onDrop(id, from, zone);
        } catch {
          // 드롭 페이로드가 이 앱이 만든 게 아니면 무시한다(예: 브라우저 밖에서 온 드래그).
        }
      }}
    >
      <div className="pv-zone-title">{t(`pivot.zone.${zone}`)}</div>
      <div className="pv-zone-body">
        {ids.map((id) => (
          <FieldChip key={id} id={id} zone={zone} />
        ))}
      </div>
    </div>
  );
}

function FieldChip({ id, zone }: { id: FieldId; zone: Zone }) {
  const isValue = zone === "values";
  const isAxis = zone === "colAxis" || zone === "rowAxis";
  return (
    <div
      className="pv-chip"
      draggable
      onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id, from: zone }))}
    >
      {isValue && <span className="pv-chip-badge">SUM</span>}
      {isAxis && <span className="pv-chip-badge pv-chip-badge-sort">↕</span>}
      <span className="pv-chip-label">{FIELD_LABEL[id]}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 설명 영역 — 원본 grid::pivot_desc.xfdl(개요/대용량 데이터/집계 방식/엑셀 내보내기 4블록).
// ---------------------------------------------------------------------------
function DescriptionSection({ t }: { t: Translate }) {
  const blocks = useMemo(
    () => [
      { title: t("grid.pivot"), body: t("grid.pivot.desc") },
      { title: t("grid.pivot.largedata"), body: `${t("grid.pivot.largedata.desc")}\n\n${t("grid.pivot.value.desc")}` },
      { title: t("grid.pivot.export"), body: t("grid.pivot.export.desc") },
    ],
    [t],
  );

  return (
    <section className="pv-desc">
      {blocks.map((b) => (
        <div className="pv-desc-block" key={b.title}>
          <h3 className="pv-desc-title">{b.title}</h3>
          <p className="pv-desc-body">{b.body}</p>
        </div>
      ))}
    </section>
  );
}
