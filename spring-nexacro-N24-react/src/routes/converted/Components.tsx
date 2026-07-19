import { useEffect, useMemo, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import {
  CHECKBOXSET_OPTIONS,
  COMBO_OPTIONS,
  GRID_ROWS,
  LIST_VIEW_ITEMS,
  MULTICOMBO_OPTIONS,
  RADIO_OPTIONS,
  type GridRow,
} from "../../data/componentsRealData";
import { SKETCH_PRELOAD_PNG } from "../../data/sketchPreload";
import "./components.css";

type Translate = (key: string, fallback?: string) => string;

/**
 * Nexacro comp::components.xfdl(메뉴 "기본 컴포넌트", 실제 menu_id 20100)를 React로 옮긴 화면.
 * 원본은 ~20개 UI 컴포넌트(Button/Radio/Listbox/CheckBox(Set)/Combo/MultiCombo/Edit/MaskEdit/
 * Grid/Textarea/Calendar/Static/Groupbox/ImageViewer/Progressbar/Tab/ListView/Sketch/
 * VideoPlayer/Graphic/WebBrowser)를 각각 카드 하나씩 나열해 보여주는 쇼케이스 화면이라,
 * 섹션 제목("Button","Radio" 등)은 전부 원본 소스에 messageid 없이 하드코딩된 영문 리터럴이고
 * (언어 전환과 무관), 실제 페이지 제목/설명만 진짜 messageid(comp.components/.desc)를 쓴다.
 * 각 컴포넌트는 "native-first" 원칙대로 가능한 한 순수 HTML 엘리먼트로 구현했다(select/
 * input/textarea/progress 등) — Grid만 기존 컨벤션대로 Tabulator를 재사용한다.
 *
 * VideoPlayer가 로드하는 원본 영상(NexacroNv24.mp4)은 이 프로젝트에 리소스 자체가 없어
 * 원본도 실제로는 검은 화면만 나온다(Playwright network 탭에서 404 확인) — Pivot/Export와
 * 같은 "리소스가 아예 없음" 케이스라 사용자에게 물어봤고, 프로젝트에 이미 있는 다른 데모
 * 영상(dCnP.mp4)으로 대체하기로 결정했다(실제로 재생되는 화면을 보여주는 쪽 선택).
 * Graphic 컴포넌트의 GraphicsImage(img_WF_sample02.png)는 원본을 Playwright network 탭으로
 * 확인해보니 애초에 요청조차 발생하지 않는다(원본 자체가 렌더링하지 않음) — 이 이미지 없이
 * 사각형/텍스트/선/곡선만 있는 원본 그대로의 모습을 재현했다.
 */
export function Components() {
  const { t } = useLanguage();

  return (
    <main className="work">
      <div className="work-card react c2-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#20100">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="c2-page-title">{t("comp.components")}</h1>

        <div className="c2-grid">
          <ButtonCard />
          <RadioCard />
          <ListboxCard />
          <CheckboxCard />
          <ComboCard />
          <MultiComboCard />
          <EditCard />
          <MaskEditCard />
          <GridCard />
          <TextareaCard />
          <CalendarCard />
          <StaticCard />
          <GroupboxCard />
          <ImageViewerCard />
          <ProgressbarCard />
          <TabCard />
          <ListViewCard />
          <SketchCard />
          <VideoPlayerCard />
          <GraphicCard />
          <WebBrowserCard />
        </div>

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function Card({ title, full, className, children }: { title: string; full?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <section className={`c2-card-item${full ? " c2-full" : ""}${className ? ` ${className}` : ""}`}>
      <h2 className="c2-card-title">{title}</h2>
      <div className="c2-card-body">{children}</div>
    </section>
  );
}

function ButtonCard() {
  return (
    <Card title="Button">
      <div className="c2-btn-row">
        <button type="button" className="c2-btn c2-btn-primary">
          Button
        </button>
        <button type="button" className="c2-btn c2-btn-primary" disabled>
          Button
        </button>
        <button type="button" className="c2-btn c2-btn-icon" aria-label="search">
          🔍
        </button>
      </div>
      <div className="c2-btn-row">
        <button type="button" className="c2-btn c2-btn-secondary">
          Button
        </button>
        <button type="button" className="c2-btn c2-btn-secondary" disabled>
          Button
        </button>
        <div className="c2-btn-round-group">
          <button type="button" className="c2-btn-round" aria-label="add">
            +
          </button>
          <button type="button" className="c2-btn-round" aria-label="remove">
            −
          </button>
        </div>
      </div>
    </Card>
  );
}

function RadioCard() {
  const [value, setValue] = useState(RADIO_OPTIONS[1].code);
  const [toggle, setToggle] = useState(true);
  return (
    <Card title="Radio">
      <div className="c2-radio-toggle-row">
        <div>
          <div className="c2-subtitle">Radio</div>
          <div className="c2-radio-group">
            {RADIO_OPTIONS.map((o) => (
              <label key={o.code} className="c2-radio">
                <input type="radio" name="c2-radio" checked={value === o.code} onChange={() => setValue(o.code)} />
                {o.label}
              </label>
            ))}
          </div>
        </div>
        <div>
          <div className="c2-subtitle">Toggle</div>
          <label className="c2-toggle">
            <input type="checkbox" checked={toggle} onChange={(e) => setToggle(e.target.checked)} />
            <span className="c2-toggle-track" />
          </label>
        </div>
      </div>
    </Card>
  );
}

function ListboxCard() {
  const [selected, setSelected] = useState(GRID_ROWS[0].id);
  return (
    <Card title="Listbox">
      <ul className="c2-listbox">
        {GRID_ROWS.map((row) => (
          <li key={row.id}>
            <button
              type="button"
              className={`c2-listbox-item${selected === row.id ? " selected" : ""}`}
              onClick={() => setSelected(row.id)}
            >
              {row.name}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function CheckboxCard() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  return (
    <Card title="CheckBox / CheckBoxSet">
      <div className="c2-checkbox-set-row">
        <div>
          <div className="c2-subtitle">Checkbox</div>
          <div className="c2-checkbox-pair">
            <input type="checkbox" className="c2-checkbox" checked={a} onChange={(e) => setA(e.target.checked)} />
            <input type="checkbox" className="c2-checkbox" checked={b} onChange={(e) => setB(e.target.checked)} />
          </div>
        </div>
        <div>
          <div className="c2-subtitle">CheckBoxSet</div>
          <div className="c2-checkboxset-grid">
            {CHECKBOXSET_OPTIONS.map((o) => (
              <label key={o.code} className="c2-checkbox-label">
                <input
                  type="checkbox"
                  className="c2-checkbox"
                  disabled={o.readonly}
                  checked={Boolean(checked[o.code])}
                  onChange={(e) => setChecked((prev) => ({ ...prev, [o.code]: e.target.checked }))}
                />
                {o.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ComboCard() {
  return (
    <Card title="Combo">
      <div className="c2-combo-grid">
        <select className="c2-select" defaultValue="1">
          {COMBO_OPTIONS.map((o) => (
            <option key={o.code} value={o.code}>
              {o.label}
            </option>
          ))}
        </select>
        <select className="c2-select" defaultValue="1" disabled>
          {COMBO_OPTIONS.map((o) => (
            <option key={o.code} value={o.code}>
              {o.label}
            </option>
          ))}
        </select>
        <select className="c2-select c2-select-readonly" defaultValue="1" disabled>
          {COMBO_OPTIONS.map((o) => (
            <option key={o.code} value={o.code}>
              {o.label}
            </option>
          ))}
        </select>
        <select className="c2-select c2-select-essential" defaultValue="1">
          {COMBO_OPTIONS.map((o) => (
            <option key={o.code} value={o.code}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </Card>
  );
}

function MultiSelect({
  mode,
  initialCodes,
  labelMap,
}: {
  mode: "tag" | "text" | "count";
  initialCodes: string[];
  labelMap: Map<string, { label: string; readonly: boolean }>;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(initialCodes);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const toggle = (code: string) => {
    setSelected((prev) => (prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]));
  };

  const summary = () => {
    if (mode === "count") return `${selected.length} item(s) selected`;
    return selected.map((c) => labelMap.get(c)?.label ?? c).join(",");
  };

  return (
    <div className="c2-multicombo" ref={boxRef}>
      <div
        role="button"
        tabIndex={0}
        className="c2-multicombo-trigger"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
      >
        {mode === "tag" ? (
          <span className="c2-multicombo-tags">
            {selected.map((c) => (
              <span key={c} className="c2-multicombo-tag">
                {labelMap.get(c)?.label ?? c}
                <button
                  type="button"
                  aria-label={`remove ${labelMap.get(c)?.label ?? c}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(c);
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </span>
        ) : (
          <span>{summary()}</span>
        )}
        <span className="c2-multicombo-caret">⌄</span>
      </div>
      {open && (
        <ul className="c2-multicombo-menu">
          {Array.from(labelMap.entries()).map(([code, info]) => (
            <li key={code}>
              <label className={`c2-checkbox-label${info.readonly ? " disabled" : ""}`}>
                <input
                  type="checkbox"
                  className="c2-checkbox"
                  disabled={info.readonly}
                  checked={selected.includes(code)}
                  onChange={() => toggle(code)}
                />
                {info.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MultiComboCard() {
  const labelMap = useMemo(() => {
    const m = new Map<string, { label: string; readonly: boolean }>();
    MULTICOMBO_OPTIONS.forEach((o) => m.set(o.code, { label: o.label, readonly: o.readonly }));
    return m;
  }, []);

  return (
    <Card title="MultiCombo">
      <div className="c2-multicombo-grid">
        <div className="c2-multicombo-col">
          <MultiSelect mode="text" initialCodes={["0", "1"]} labelMap={labelMap} />
          <MultiSelect mode="count" initialCodes={["0", "1"]} labelMap={labelMap} />
        </div>
        <MultiSelect mode="tag" initialCodes={["0", "2", "1"]} labelMap={labelMap} />
      </div>
    </Card>
  );
}

function EditCard() {
  return (
    <Card title="Edit">
      <div className="c2-edit-grid">
        <input className="c2-input" defaultValue="James" disabled />
        <input className="c2-input" defaultValue="James" />
        <input className="c2-input c2-input-readonly" defaultValue="James" readOnly />
        <input className="c2-input c2-input-essential" defaultValue="James" />
      </div>
    </Card>
  );
}

const MASK_INITIAL_DIGITS = "00123456789";

// format="###-{####}-####" — {} 구간은 원본을 Playwright로 실측한 결과 입력한 자리수만큼
// "*"로, 아직 안 채운 자리는 "_"로 표시된다(다른 두 구간은 실제 숫자 그대로 표시).
function formatMaskEdit(digits: string): string {
  const seg = (start: number, len: number, masked: boolean) =>
    Array.from({ length: len }, (_, k) => {
      const c = digits[start + k];
      if (c === undefined) return "_";
      return masked ? "*" : c;
    }).join("");
  return `${seg(0, 3, false)}-${seg(3, 4, true)}-${seg(7, 4, false)}`;
}

function MaskEditField({
  disabled,
  interactive,
  essential,
  readOnlyLook,
}: {
  disabled?: boolean;
  interactive: boolean;
  essential?: boolean;
  readOnlyLook?: boolean;
}) {
  const [digits, setDigits] = useState(MASK_INITIAL_DIGITS);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!interactive) return;
    if (e.key === "Backspace" || e.key === "Delete") {
      setDigits((d) => d.slice(0, -1));
      e.preventDefault();
      return;
    }
    if (/^[0-9]$/.test(e.key)) {
      setDigits((d) => (d.length < 11 ? d + e.key : d));
      e.preventDefault();
      return;
    }
    if (e.key.length === 1) e.preventDefault();
  };

  return (
    <input
      className={`c2-input${essential ? " c2-input-essential" : ""}${readOnlyLook ? " c2-input-readonly" : ""}`}
      value={formatMaskEdit(digits)}
      disabled={disabled}
      readOnly
      onKeyDown={onKeyDown}
      onChange={() => {}}
    />
  );
}

function MaskEditCard() {
  return (
    <Card title="MaskEdit">
      <div className="c2-edit-grid">
        <MaskEditField disabled interactive={false} />
        <MaskEditField interactive />
        <MaskEditField interactive={false} readOnlyLook />
        <MaskEditField interactive essential />
      </div>
    </Card>
  );
}

const buildGridColumns = (): ColumnDefinition[] => [
  {
    title: "",
    field: "checked",
    width: 44,
    hozAlign: "center",
    headerHozAlign: "center",
    headerSort: false,
    formatter: (cell) => `<input type="checkbox" class="c2-checkbox" tabindex="-1" ${cell.getValue() ? "checked" : ""} />`,
    cellClick: (_e, cell) => {
      cell.getRow().update({ checked: !cell.getValue() });
    },
  },
  { title: "ID", field: "id", headerSort: false },
  { title: "Name", field: "name", headerSort: false },
  { title: "Price", field: "price", headerSort: false, hozAlign: "right", headerHozAlign: "right" },
  { title: "Creation Date", field: "date", headerSort: false },
  {
    title: "Approval",
    field: "approved",
    hozAlign: "center",
    headerHozAlign: "center",
    headerSort: false,
    formatter: (cell) =>
      `<img src="/nexacro-icons/${cell.getValue() ? "img_grd_approval.png" : "img_grd_reject.png"}" alt="${cell.getValue() ? "approved" : "rejected"}" style="height:16px;vertical-align:middle;" />`,
  },
];

function GridCard() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: GRID_ROWS as unknown as GridRow[],
      height: "220px",
      layout: "fitColumns",
      columns: buildGridColumns(),
    });
    return () => table.destroy();
  }, []);
  return (
    <Card title="Grid" full>
      <div ref={mountRef} className="c2-grid-mount" />
    </Card>
  );
}

function TextareaCard() {
  return (
    <Card title="Textarea">
      <textarea
        className="c2-textarea"
        readOnly
        value={
          "Nexacro Overview\n\nUI/UX development platform that provides a system development environment optimized for businesses.\nUnified Framework-based HTML5 solution that ensures the best performance and speed.\nA WYSIWYG-based development tool ‘nexacro studio’ and a full array of UI/UX components.\nNo-Download, No-Install, One Source Multi-Use support."
        }
      />
    </Card>
  );
}

const WEEKDAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];

// 원본 실측(Calendar01, getComputedStyle): 헤더/요일 바 배경 #6954E1, 일요일 텍스트
// #FF7986(요일)/#FF4C5E(날짜), 토요일 텍스트 #48AFFF(요일)/#269BEE(날짜), 오늘 셀은
// #6954E1 배경의 원형 하이라이트.
function MonthCalendar({ onSelectDate }: { onSelectDate?: (dateStr: string) => void }) {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();

  return (
    <div className="c2-calendar">
      <div className="c2-calendar-bar">
        <div className="c2-calendar-header">
          <button type="button" onClick={() => setCursor(new Date(year, month - 1, 1))} aria-label="prev month">
            ‹
          </button>
          <span>
            {year}. {String(month + 1).padStart(2, "0")}
          </span>
          <button type="button" onClick={() => setCursor(new Date(year, month + 1, 1))} aria-label="next month">
            ›
          </button>
        </div>
        <div className="c2-calendar-weekdays">
          {WEEKDAY_LABELS.map((w, i) => (
            <span key={w} className={i === 0 ? "sun" : i === 6 ? "sat" : undefined}>
              {w}
            </span>
          ))}
        </div>
      </div>
      <div className="c2-calendar-grid">
        {cells.map((d, i) => {
          if (d === null) return <span key={`blank-${i}`} />;
          const weekday = (firstWeekday + d - 1) % 7;
          const isToday = isCurrentMonth && d === today.getDate();
          return (
            <button
              key={d}
              type="button"
              className={`c2-calendar-day${isToday ? " today" : ""}${weekday === 0 ? " sun" : weekday === 6 ? " sat" : ""}`}
              onClick={() => onSelectDate?.(`${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`)}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CalendarCard() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("- -");
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <Card title="Calendar">
      <div className="c2-calendar-row">
        <div className="c2-calendar-picker" ref={boxRef}>
          <input className="c2-input" readOnly value={value} />
          <button type="button" className="c2-btn-icon" aria-label="open calendar" onClick={() => setOpen((v) => !v)}>
            📅
          </button>
          {open && (
            <div className="c2-calendar-popup">
              <MonthCalendar
                onSelectDate={(d) => {
                  setValue(d);
                  setOpen(false);
                }}
              />
            </div>
          )}
        </div>
        <MonthCalendar />
      </div>
    </Card>
  );
}

function StaticCard() {
  return (
    <Card title="Static">
      <div className="c2-static-block">Static</div>
      <div className="c2-static-row">
        <span className="c2-static-red">Static02</span>
        <span className="c2-static-gradient">Static03</span>
      </div>
    </Card>
  );
}

function GroupboxCard() {
  return (
    <Card title="Groupbox">
      <fieldset className="c2-groupbox">
        <legend>GroupBox</legend>
      </fieldset>
    </Card>
  );
}

function ImageViewerCard() {
  return (
    <Card title="ImageViewer" full>
      <div className="c2-imageviewer-row">
        <figure className="c2-imageviewer">
          <figcaption>stretch:none</figcaption>
          <div className="c2-imageviewer-box">
            <img src="/nexacro-icons/img_WF_sample01.png" alt="stretch:none" style={{ objectFit: "none" }} />
          </div>
        </figure>
        <figure className="c2-imageviewer">
          <figcaption>stretch:fit</figcaption>
          <div className="c2-imageviewer-box">
            <img src="/nexacro-icons/img_WF_sample01.png" alt="stretch:fit" style={{ objectFit: "fill" }} />
          </div>
        </figure>
        <figure className="c2-imageviewer">
          <figcaption>stretch:fixaspectratio</figcaption>
          <div className="c2-imageviewer-box">
            <img src="/nexacro-icons/img_WF_sample01.png" alt="stretch:fixaspectratio" style={{ objectFit: "contain" }} />
          </div>
        </figure>
      </div>
    </Card>
  );
}

function ProgressbarCard() {
  const [value, setValue] = useState(60);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const updateValue = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = Math.round(((clientX - rect.left) / rect.width) * 100);
    setValue(Math.min(100, Math.max(0, next)));
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateValue(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updateValue(e.clientX);
  };

  return (
    <Card title="Progressbar">
      <div
        ref={trackRef}
        className="c2-progressbar-track"
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowDown") setValue((v) => Math.max(0, v - 1));
          if (e.key === "ArrowRight" || e.key === "ArrowUp") setValue((v) => Math.min(100, v + 1));
          if (e.key === "Home") setValue(0);
          if (e.key === "End") setValue(100);
        }}
      >
        <div className="c2-progressbar-fill" style={{ width: `${value}%` }}>
          {value}%
          <span className="c2-progressbar-thumb" />
        </div>
      </div>
    </Card>
  );
}

function TabCard() {
  const [active, setActive] = useState(0);
  return (
    <Card title="Tab">
      <div className="c2-tabs">
        {["Tabpage1", "Tabpage2"].map((label, i) => (
          <button
            key={label}
            type="button"
            className={`c2-tab-btn${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {label}
          </button>
        ))}
      </div>
    </Card>
  );
}

function ListViewCard() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <Card title="ListView" full>
      <ul className="c2-listview">
        {LIST_VIEW_ITEMS.map((item, i) => (
          <li key={item.empNo} className={openIdx === i ? "open" : undefined}>
            <button type="button" className="c2-listview-header" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              <span className="c2-listview-org">{item.org}</span>
              <span className="c2-listview-name">{item.name}</span>
              <span className="c2-listview-chevron">{openIdx === i ? "⌃" : "⌄"}</span>
            </button>
            {openIdx === i && (
              <div className="c2-listview-detail">
                <img src={`/nexacro-icons/${item.imgUrl}`} alt={item.name} />
                <dl>
                  <div>
                    <dt>Name :</dt>
                    <dd>{item.name}</dd>
                  </div>
                  <div>
                    <dt>Position :</dt>
                    <dd>{item.job}</dd>
                  </div>
                  <div>
                    <dt>Tel :</dt>
                    <dd>{item.tel}</dd>
                  </div>
                  <div>
                    <dt>E-mail :</dt>
                    <dd>{item.email}</dd>
                  </div>
                </dl>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function SketchCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.src = SKETCH_PRELOAD_PNG;
  }, []);

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    drawingRef.current = true;
    lastPointRef.current = getPos(e);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    const p = getPos(e);
    if (ctx && lastPointRef.current) {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
    lastPointRef.current = p;
  };
  const onPointerUp = () => {
    drawingRef.current = false;
    lastPointRef.current = null;
  };

  return (
    <Card title="Sketch">
      <canvas
        ref={canvasRef}
        className="c2-sketch"
        width={380}
        height={190}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      />
    </Card>
  );
}

function VideoPlayerCard() {
  return (
    <Card title="VideoPlayer">
      <video className="c2-video" src="/nexacro-video/components-demo.mp4" autoPlay muted loop controls />
    </Card>
  );
}

function GraphicCard() {
  return (
    <Card title="Graphic">
      <svg className="c2-graphic" viewBox="0 0 300 190" role="img" aria-label="graphics demo">
        <rect x="50" y="50" width="50" height="50" fill="none" stroke="green" strokeWidth="2" strokeDasharray="4 3" />
        <text x="200" y="60" fill="red" fontSize="14">
          tobesoft
        </text>
        <line x1="50" y1="120" x2="150" y2="120" stroke="red" strokeWidth="2" />
        <path
          d="M 50 120 Q 60 150 80 160 T 100 175"
          fill="none"
          stroke="blue"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1 7"
        />
      </svg>
    </Card>
  );
}

function WebBrowserCard() {
  return (
    <Card title="WebBrowser">
      <iframe className="c2-webbrowser" src="https://www.tobesoft.com/" title="WebBrowser" />
    </Card>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="c2-desc">
      <h3 className="c2-desc-title">{t("comp.components")}</h3>
      <p className="c2-desc-body">{t("comp.components.desc")}</p>
    </section>
  );
}
