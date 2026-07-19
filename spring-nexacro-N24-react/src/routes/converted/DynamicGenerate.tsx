import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import "./dynamicGenerate.css";

type GenerateKind = "Btn" | "Cal" | "Stc" | "Img" | "Edt";

interface GenerateOption {
  id: GenerateKind;
  label: string;
}

interface GeneratedComponent {
  key: string;
  kind: GenerateKind;
  row: number;
  column: number;
}

const OPTIONS: GenerateOption[] = [
  { id: "Btn", label: "Button" },
  { id: "Cal", label: "Calendar" },
  { id: "Stc", label: "Static" },
  { id: "Img", label: "Image" },
  { id: "Edt", label: "Edit" },
];

const todayValue = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

/**
 * React version of Nexacro comp::generate.xfdl(menu_id 20700).
 *
 * The original shows alert("Start") before generation. The React screen keeps
 * repeated testing smooth by updating the result state directly.
 */
export function DynamicGenerate() {
  const { t } = useLanguage();
  const generationStartRef = useRef<number | null>(null);
  const [selected, setSelected] = useState<Record<GenerateKind, boolean>>({
    Btn: true,
    Cal: true,
    Stc: true,
    Img: true,
    Edt: true,
  });
  const [linePerCount, setLinePerCount] = useState(1);
  const [lineCount, setLineCount] = useState(20);
  const [elapsed, setElapsed] = useState("0.000");
  const [generated, setGenerated] = useState<GeneratedComponent[]>([]);
  const [generatedColumns, setGeneratedColumns] = useState(1);

  const selectedCount = OPTIONS.filter((opt) => selected[opt.id]).length;
  const totalCount = selectedCount * linePerCount * lineCount;
  const activeKinds = useMemo(() => OPTIONS.filter((opt) => selected[opt.id]).map((opt) => opt.id), [selected]);

  const toggle = (kind: GenerateKind) => {
    setSelected((prev) => ({ ...prev, [kind]: !prev[kind] }));
  };

  const updatePositive = (setter: (value: number) => void) => (value: string) => {
    const parsed = Number.parseInt(value, 10);
    setter(Number.isFinite(parsed) ? Math.max(0, Math.min(200, parsed)) : 0);
  };

  const generate = () => {
    generationStartRef.current = performance.now();
    const next: GeneratedComponent[] = [];
    for (let x = 0; x < lineCount; x++) {
      for (let y = 0; y < linePerCount; y++) {
        for (let z = 0; z < activeKinds.length; z++) {
          const kind = activeKinds[z];
          next.push({ key: `${kind}_${x}_${y}_${z}`, kind, row: x, column: y });
        }
      }
    }
    setGeneratedColumns(Math.max(1, linePerCount * Math.max(1, activeKinds.length)));
    setGenerated(next);
  };

  useEffect(() => {
    if (generationStartRef.current === null) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      if (generationStartRef.current !== null) {
        setElapsed(((performance.now() - generationStartRef.current) / 1000).toFixed(3));
        generationStartRef.current = null;
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [generated]);

  return (
    <main className="work">
      <div className="work-card react dg-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#20700">
            {t("sff.legacyLink")} -&gt;
          </a>
        </div>

        <h1 className="dg-page-title">{t("comp.generate")}</h1>
        <p className="dg-guide">{t("comp.generate.guide")}</p>

        <section className="dg-control-area" aria-label={t("comp.generate.option")}>
          <div className="dg-box dg-select-box">
            <h2>{t("comp.generate.select")}</h2>
            <div className="dg-check-list">
              {OPTIONS.map((option) => (
                <label key={option.id} className="dg-check">
                  <input type="checkbox" checked={selected[option.id]} onChange={() => toggle(option.id)} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="dg-box dg-option-box">
            <h2>{t("comp.generate.option")}</h2>
            <label className="dg-field">
              <span>{t("comp.generate.componentsamount")}</span>
              <input value={selectedCount} readOnly aria-readonly="true" />
            </label>
            <label className="dg-field">
              <span>{t("comp.generate.amountperline")}</span>
              <input type="number" min={0} max={200} value={linePerCount} onChange={(e) => updatePositive(setLinePerCount)(e.target.value)} />
            </label>
            <label className="dg-field">
              <span>{t("comp.generate.lineamount")}</span>
              <input type="number" min={0} max={200} value={lineCount} onChange={(e) => updatePositive(setLineCount)(e.target.value)} />
            </label>
            <label className="dg-field">
              <span>{t("comp.generate.total")}</span>
              <input value={totalCount} readOnly aria-readonly="true" />
            </label>
          </div>

          <button type="button" className="dg-generate-btn" onClick={generate}>
            {t("comp.generate.create")}
          </button>

          <div className="dg-time-box">
            <h2>{t("comp.generate.gaptime")}</h2>
            <div className="dg-time-value">
              <span>{elapsed}</span>
              <em>{t("comp.generate.sec")}</em>
            </div>
          </div>
        </section>

        <section className="dg-result-section">
          <h2 className="dg-result-title">Result</h2>
          <div className="dg-canvas" aria-live="polite">
            <div className="dg-generated-grid" style={{ gridTemplateColumns: `repeat(${generatedColumns}, 120px)` }}>
              {generated.map((item) => (
                <GeneratedItem key={item.key} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="dg-desc">
          <h3>{t("comp.generate")}</h3>
          <p>{t("comp.generate.desc")}</p>
        </section>
      </div>
    </main>
  );
}

function GeneratedItem({ item }: { item: GeneratedComponent }) {
  const name = `${item.row}_${item.column}`;
  if (item.kind === "Btn") {
    return (
      <button type="button" className="dg-created dg-created-button">
        btn_{name}
      </button>
    );
  }
  if (item.kind === "Cal") {
    return <input className="dg-created dg-created-calendar" type="date" defaultValue={todayValue()} aria-label={`cal_${name}`} />;
  }
  if (item.kind === "Stc") {
    return <div className="dg-created dg-created-static">Static{name}</div>;
  }
  if (item.kind === "Img") {
    return <img className="dg-created dg-created-image" src="/nexacro-icons/img_WF_sample02.png" alt={`img_${name}`} />;
  }
  return <input className="dg-created dg-created-edit" defaultValue={`edit${name}`} aria-label={`edt_${name}`} />;
}
