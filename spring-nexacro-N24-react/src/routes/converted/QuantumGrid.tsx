import { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { QUANTUM_RECORDS } from "../../data/quantumRealData";
import { buildQuantumRows, type QuantumFieldId } from "./quantumEngine";
import "./quantumGrid.css";

type Translate = (key: string, fallback?: string) => string;

const FIELD_LABEL: Record<QuantumFieldId, string> = {
  first_name: "First name",
  last_name: "Last name",
  email: "Email",
  gender: "Gender",
  ip_address: "IP Address",
  state: "State",
};
const ALL_FIELDS: QuantumFieldId[] = ["first_name", "last_name", "email", "gender", "ip_address", "state"];

interface DragPayload {
  field: QuantumFieldId;
  from: "grid" | "chip";
}

function readPayload(e: React.DragEvent): DragPayload | null {
  const raw = e.dataTransfer.getData("text/plain");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as DragPayload;
  } catch {
    return null;
  }
}

/**
 * Nexacro grid::quantum.xfdl(메뉴 "퀀텀 그리드", 실제 menu_id 10700)를 React로 옮긴 화면.
 * 원본은 그리드 헤더를 드래그해서 상단 영역에 놓으면 그 컬럼으로 데이터가 트리 형태로
 * 그룹핑되고, 반대로 상단 영역의 칩을 그리드에 드래그하면 그룹핑이 풀린다. 다른 화면들과
 * 달리 이 화면은 dsGrid Dataset에 실제 데이터(500행)가 그대로 임베딩되어 있어 서버
 * 트랜잭션이 필요 없다 — 원본이 실제로 완전히 동작하는 걸 Playwright로 직접 드래그해보며
 * 확인했다(1단/2단 그룹 모두). 리프 행이 항상 "이름(0)"으로 표시되는 것도 원본 자체의
 * 실제 동작(원본 소스의 인덱스 폴백)이라 그대로 재현했다(`quantumEngine.ts` 주석 참고).
 */
export function QuantumGrid() {
  const { t } = useLanguage();
  const [groupFields, setGroupFields] = useState<QuantumFieldId[]>([]);
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Tabulator를 만들자마자 별도 effect에서 setColumns를 걸면(예전엔 이렇게 짰었다)
    // React StrictMode의 마운트→클린업→재마운트 사이에서 Tabulator 내부 DOM이 아직
    // 준비되기 전에 호출되는 경합이 생겨 "Cannot read properties of null (reading
    // 'firstChild')" 에러가 났다(실제로 겪음). groupFields가 바뀔 때마다 테이블 자체를
    // 새로 만드는 쪽이 더 단순하고 안전하다 — 데이터가 500행뿐이라 매번 새로 그려도
    // 성능 문제는 없다.
    const visibleFields = ALL_FIELDS.filter((f) => !groupFields.includes(f));
    const columns: ColumnDefinition[] = [
      {
        title: "",
        field: "rowLabel",
        width: groupFields.length > 0 ? 170 : 0,
        headerSort: false,
      },
      ...visibleFields.map(
        (field): ColumnDefinition => ({
          title: FIELD_LABEL[field],
          field,
          headerSort: false,
          hozAlign: field === "ip_address" ? "right" : field === "gender" || field === "state" ? "center" : "left",
          titleFormatter: () => {
            const el = document.createElement("div");
            el.textContent = FIELD_LABEL[field];
            el.draggable = true;
            el.className = "qg-col-header";
            el.addEventListener("dragstart", (e) => {
              e.dataTransfer?.setData("text/plain", JSON.stringify({ field, from: "grid" } satisfies DragPayload));
            });
            return el;
          },
        }),
      ),
    ];

    const table = new Tabulator(mountRef.current, {
      data: buildQuantumRows(QUANTUM_RECORDS, groupFields),
      layout: "fitDataFill",
      height: "480px",
      dataTree: true,
      dataTreeChildField: "_children",
      dataTreeStartExpanded: true,
      columns,
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, [groupFields]);

  const addField = (field: QuantumFieldId) => {
    setGroupFields((prev) => (prev.includes(field) ? prev : [...prev, field]));
  };

  const removeField = (field: QuantumFieldId) => {
    setGroupFields((prev) => prev.filter((f) => f !== field));
  };

  // 원본 fnTreeDrop 로직 그대로: 드래그한 칩이 목표 칩 바로 앞에 있었다면 서로 자리를
  // 맞바꾸고, 아니면 드래그한 칩을 원래 자리에서 빼서 목표 칩 바로 앞에 끼워 넣는다.
  const reorderField = (dragged: QuantumFieldId, target: QuantumFieldId) => {
    if (dragged === target) return;
    setGroupFields((prev) => {
      const arr = [...prev];
      const draggedIdx = arr.indexOf(dragged);
      const targetIdx = arr.indexOf(target);
      if (draggedIdx === -1 || targetIdx === -1) return prev;
      if (targetIdx === draggedIdx + 1) {
        [arr[draggedIdx], arr[targetIdx]] = [arr[targetIdx], arr[draggedIdx]];
        return arr;
      }
      arr.splice(draggedIdx, 1);
      const newTargetIdx = arr.indexOf(target);
      arr.splice(newTargetIdx, 0, dragged);
      return arr;
    });
  };

  const onDropOnCategoryBackground = (e: React.DragEvent) => {
    e.preventDefault();
    const payload = readPayload(e);
    if (!payload) return;
    // 원본 divCategory_ondrop: TREE(칩) 드래그는 배경에 드랍해도 아무 일도 안 일어난다 —
    // 새 컬럼을 그리드에서 끌어왔을 때만(from === "grid") 그룹에 추가한다.
    if (payload.from === "grid") addField(payload.field);
  };

  const onDropOnChip = (target: QuantumFieldId, e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const payload = readPayload(e);
    if (!payload) return;
    // 원본 fnTreeDrop: 그리드에서 바로 끌어온 컬럼(from === "grid")을 기존 칩 위에
    // 드랍하는 건 원본에서도 처리되지 않는 조합이라(fn_DragType이 "GRID"면 조건이 막힘)
    // 그대로 무시한다 — 새 컬럼 추가는 칩이 없는 빈 영역에 드랍해야만 된다.
    if (payload.from !== "chip") return;
    reorderField(payload.field, target);
  };

  const onDropOnGrid = (e: React.DragEvent) => {
    e.preventDefault();
    const payload = readPayload(e);
    if (!payload || payload.from !== "chip") return;
    removeField(payload.field);
  };

  return (
    <main className="work">
      <div className="work-card react qg-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#10700">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="qg-page-title">{t("grid.quantum")}</h1>

        <div
          className="qg-category"
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDropOnCategoryBackground}
        >
          {groupFields.length === 0 ? (
            <span className="qg-category-hint">{t("grid.quantum.area")}</span>
          ) : (
            groupFields.map((field) => (
              <div
                key={field}
                className="qg-chip"
                draggable
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", JSON.stringify({ field, from: "chip" } satisfies DragPayload))
                }
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onDropOnChip(field, e)}
              >
                {FIELD_LABEL[field]}
              </div>
            ))
          )}
        </div>

        <div
          ref={mountRef}
          className="qg-grid-mount"
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDropOnGrid}
        />

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="qg-desc">
      <div className="qg-desc-block">
        <h3 className="qg-desc-title">{t("grid.quantum")}</h3>
        <p className="qg-desc-body">{t("grid.quantum.desc")}</p>
      </div>
    </section>
  );
}
