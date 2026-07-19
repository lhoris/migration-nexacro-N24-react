import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import {
  INPUT_TYPE_OPTIONS,
  INPUT_TYPE_PLACEHOLDER,
  LABEL_POSITION_OPTIONS,
  type InputType,
  type LabelPosition,
} from "../../data/mobileComponentsRealData";
import "./mobileComponents.css";

type Translate = (key: string, fallback?: string) => string;

/**
 * Nexacro comp::mobilecomponents.xfdl(메뉴 "모바일 퍼스트 컴포넌트", 실제 menu_id 20200)를
 * React로 옮긴 화면. 원본 소스엔 이 화면 전용 Dataset이 없다(라디오 3개가 각자 만드는
 * NormalDataset만 있음) — 대신 TextField/MultiLineTextField/DateField/DateRangePicker/
 * PopupDateRangePicker 5개 모바일 퍼스트 컴포넌트의 상태 변화를 실제로 클릭·타이핑해보며
 * 실측했다.
 *
 * TextField 4개 중 "Overlap"/"Outside"/"Inside"라는 라벨 텍스트는 실제로는 그 컴포넌트의
 * labelposition 값과 우연히 같은 이름일 뿐 — 소스 확인 결과 `TF_overlap`엔
 * `set_labelposition` 호출이 아예 없다(즉 Nexacro TextField의 기본값 자체가 "overlap"
 * 스타일이라 데모 작성자가 그 필드 이름을 "Overlap"이라 지은 것). e-mail 필드도 같은
 * 기본(overlap) 포지션이지만 `displaynulltext`가 있어 라벨이 처음부터 떠 있는 것처럼 보인다.
 * 포지션별 실제 동작(빈 상태에선 라벨이 그냥 플레이스홀더처럼 보이다가, 포커스되거나 값이
 * 채워지면 outside=박스 위/inside=박스 안 상단/overlap=테두리를 가로지르는 형태로 뜬다)은
 * Playwright로 직접 타이핑해보고 실측했다.
 *
 * DateField의 inputtype(date/datetime/time)별 placeholder 포맷("YYYY. M. D." /
 * "YYYY. M. D. aa h:mm:ss" / "aa h:mm:ss")도 각 라디오를 실제로 클릭해 빈 입력값을 실측한
 * 결과다. DateRangePicker는 원본을 직접 두 번 클릭해보고서야 "시작일 클릭 → 종료일 클릭 →
 * 그 사이 전부 연보라색 밴드로 하이라이트, 헤더의 Start/End Date 라벨이 실제 날짜로 바뀜"
 * 이라는 동작을 확인했다(스크린샷 한 장으로는 알 수 없었음).
 */
export function MobileComponents() {
  const { t } = useLanguage();

  return (
    <main className="work">
      <div className="work-card react mc-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#20200">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="mc-page-title">{t("comp.mobilecomponents")}</h1>

        <TextFieldCard />

        <div className="mc-row">
          <MultiLineTextFieldCard />
          <DateFieldCard />
        </div>

        <PopupRangePickerCard />

        <DateRangePickerCard />

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mc-card-item">
      <h2 className="mc-card-title">{title}</h2>
      <div className="mc-card-body">{children}</div>
    </section>
  );
}

/* ---------------- FloatingField (TextField) ---------------- */

function FloatingField({
  label,
  position,
  icon,
  type = "text",
  alwaysFloating,
  examplePlaceholder,
}: {
  label: string;
  position: LabelPosition;
  icon?: string;
  type?: string;
  /** 원본 TF_readonly처럼 displaynulltext가 있어 라벨이 처음부터 떠 있는 필드용. */
  alwaysFloating?: boolean;
  examplePlaceholder?: string;
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = alwaysFloating || focused || value.length > 0;

  return (
    <div className="mc-field-wrap">
      <span className="mc-field-outside-slot">{position === "outside" && floating ? label : ""}</span>
      <label className={`mc-field mc-field-${position}${floating ? " floating" : ""}${icon ? " has-icon" : ""}`}>
        <span className="mc-field-label">{label}</span>
        {icon && <span className="mc-field-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={alwaysFloating ? examplePlaceholder : floating ? "" : label}
        />
      </label>
    </div>
  );
}

function TextFieldCard() {
  return (
    <Card title="TextField">
      <div className="mc-textfield-row">
        <FloatingField label="Outside" position="outside" />
        <FloatingField label="Inside" position="inside" />
        <FloatingField label="Overlap" position="overlap" />
        <FloatingField label="e-mail" position="overlap" icon="👤" type="email" alwaysFloating examplePlaceholder="abc@abc.com" />
      </div>
    </Card>
  );
}

/* ---------------- MultiLineTextField ---------------- */

function MultiLineTextFieldCard() {
  const [position, setPosition] = useState<LabelPosition>("overlap");
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0;

  return (
    <Card title="MultiLineTextField">
      <div className="mc-field-wrap">
        <span className="mc-field-outside-slot">{position === "outside" && floating ? "MultiLineTextField" : ""}</span>
        <label className={`mc-field mc-textarea-field mc-field-${position}${floating ? " floating" : ""}`}>
          <span className="mc-field-label">MultiLineTextField</span>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={floating ? "" : "MultiLineTextField"}
          />
        </label>
      </div>
      <div className="mc-radio-row">
        {LABEL_POSITION_OPTIONS.map((o) => (
          <label key={o.code} className="mc-radio">
            <input type="radio" name="mc-labelpos" checked={position === o.code} onChange={() => setPosition(o.code)} />
            {o.label}
          </label>
        ))}
      </div>
    </Card>
  );
}

/* ---------------- Calendar primitives (shared by DateField / PopupRangePicker / DateRangePicker) ---------------- */

const WEEKDAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];

function sameDay(a: Date | null, b: Date | null) {
  return !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatByType(date: Date, type: InputType): string {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const dateStr = `${y}. ${m}. ${d}.`;
  const hours24 = date.getHours();
  const ampm = hours24 < 12 ? "AM" : "PM";
  const h12 = ((hours24 + 11) % 12) + 1;
  const timeStr = `${ampm} ${h12}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
  if (type === "date") return dateStr;
  if (type === "time") return timeStr;
  return `${dateStr} ${timeStr}`;
}

function MonthGrid({
  year,
  month,
  today,
  rangeStart,
  rangeEnd,
  onPickDay,
}: {
  year: number;
  month: number;
  today: Date;
  rangeStart?: Date | null;
  rangeEnd?: Date | null;
  onPickDay: (d: Date) => void;
}) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div className="mc-month-grid">
      <div className="mc-cal-weekdays">
        {WEEKDAY_LABELS.map((w, i) => (
          <span key={w} className={i === 0 ? "sun" : i === 6 ? "sat" : undefined}>
            {w}
          </span>
        ))}
      </div>
      <div className="mc-cal-days">
        {cells.map((d, i) => {
          if (d === null) return <span key={`b-${i}`} />;
          const date = new Date(year, month, d);
          const weekday = (firstWeekday + d - 1) % 7;
          const isToday = sameDay(date, today);
          const isStart = sameDay(date, rangeStart ?? null);
          const isEnd = sameDay(date, rangeEnd ?? null);
          const inRange = !!rangeStart && !!rangeEnd && date > rangeStart && date < rangeEnd;
          return (
            <button
              key={d}
              type="button"
              className={[
                "mc-cal-day",
                weekday === 0 ? "sun" : weekday === 6 ? "sat" : "",
                isToday ? "today" : "",
                isStart || isEnd ? "endpoint" : "",
                inRange ? "in-range" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onPickDay(date)}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MonthPopup({
  cursor,
  setCursor,
  today,
  rangeStart,
  rangeEnd,
  onPickDay,
}: {
  cursor: Date;
  setCursor: (d: Date) => void;
  today: Date;
  rangeStart?: Date | null;
  rangeEnd?: Date | null;
  onPickDay: (d: Date) => void;
}) {
  return (
    <div className="mc-popup">
      <CalendarView cursor={cursor} setCursor={setCursor} today={today} rangeStart={rangeStart} rangeEnd={rangeEnd} onPickDay={onPickDay} />
    </div>
  );
}

function CalendarView({
  cursor,
  setCursor,
  today,
  rangeStart,
  rangeEnd,
  onPickDay,
}: {
  cursor: Date;
  setCursor: (d: Date) => void;
  today: Date;
  rangeStart?: Date | null;
  rangeEnd?: Date | null;
  onPickDay: (d: Date) => void;
}) {
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  return (
    <>
      <div className="mc-cal-bar">
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
      <MonthGrid year={year} month={month} today={today} rangeStart={rangeStart} rangeEnd={rangeEnd} onPickDay={onPickDay} />
    </>
  );
}

/* ---------------- Time-of-day wheels (datetime/time 모드용) ----------------
   원본 실측: datetime 모드는 팝업 안에 달력/시계 탭이 뜨고, time 모드는 탭 없이 바로
   시:분:초 선택 UI만 뜬다(둘 다 "CLOSE" 버튼으로 확정). 원본은 오전/오후+시/분/초를 하나로
   합친 열 + 분열 + 초열, 총 3열짜리 세로 스크롤 휠(가운데 행이 선택값, 위아래로 스크롤해서
   고른다)이다 — 1차 구현은 native `<select>`로 정보만 재현했는데, 사용자가 "원본처럼 휠
   느낌이 나면 좋겠다"고 요청해서 실제 스크롤+snap 휠 UI로 다시 구현했다(단 오전/오후를
   별도의 4번째 열로 분리 — 원본은 시/오전오후를 한 열에 합쳐 12→1 경계에서만 라벨이
   바뀌는 특이한 방식인데, 그대로 베끼면 오히려 헷갈려서 오전/오후를 독립된 휠로 뺐다). */

const WHEEL_ROW_HEIGHT = 32;
const WHEEL_VISIBLE_ROWS = 5;
const WHEEL_PAD_ROWS = Math.floor(WHEEL_VISIBLE_ROWS / 2);

function WheelColumn({
  items,
  index,
  onChange,
}: {
  items: string[];
  index: number;
  onChange: (index: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const programmatic = useRef(false);
  const settleTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const target = index * WHEEL_ROW_HEIGHT;
    if (Math.abs(el.scrollTop - target) < 1) return;
    programmatic.current = true;
    el.scrollTop = target;
    const t = window.setTimeout(() => {
      programmatic.current = false;
    }, 60);
    return () => window.clearTimeout(t);
  }, [index]);

  const onScroll = () => {
    if (programmatic.current) return;
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      const el = scrollRef.current;
      if (!el) return;
      const nearest = Math.max(0, Math.min(items.length - 1, Math.round(el.scrollTop / WHEEL_ROW_HEIGHT)));
      if (nearest !== index) onChange(nearest);
      else el.scrollTop = nearest * WHEEL_ROW_HEIGHT;
    }, 100);
  };

  return (
    <div className="mc-wheel-col">
      <div className="mc-wheel-highlight" />
      <div className="mc-wheel-scroll" ref={scrollRef} onScroll={onScroll}>
        <div style={{ height: WHEEL_ROW_HEIGHT * WHEEL_PAD_ROWS }} />
        {items.map((label, i) => (
          <button
            key={i}
            type="button"
            className={`mc-wheel-row${i === index ? " selected" : ""}`}
            style={{ height: WHEEL_ROW_HEIGHT }}
            onClick={() => onChange(i)}
          >
            {label}
          </button>
        ))}
        <div style={{ height: WHEEL_ROW_HEIGHT * WHEEL_PAD_ROWS }} />
      </div>
    </div>
  );
}

const PERIOD_ITEMS = ["오전", "오후"];
const HOUR_ITEMS = Array.from({ length: 12 }, (_, i) => String(i + 1));
const MINUTE_ITEMS = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
const SECOND_ITEMS = MINUTE_ITEMS;

interface TimeOfDay {
  period: "AM" | "PM";
  hour: number;
  minute: number;
  second: number;
}

const DEFAULT_TIME: TimeOfDay = { period: "AM", hour: 12, minute: 0, second: 0 };

function combineDateTime(date: Date, time: TimeOfDay): Date {
  const h24 = time.period === "AM" ? time.hour % 12 : (time.hour % 12) + 12;
  const d = new Date(date);
  d.setHours(h24, time.minute, time.second, 0);
  return d;
}

function timeOfDayFromDate(date: Date): TimeOfDay {
  const h24 = date.getHours();
  const period: "AM" | "PM" = h24 < 12 ? "AM" : "PM";
  const hour = ((h24 + 11) % 12) + 1;
  return { period, hour, minute: date.getMinutes(), second: date.getSeconds() };
}

function TimeSelects({ value, onChange }: { value: TimeOfDay; onChange: (v: TimeOfDay) => void }) {
  return (
    <div className="mc-time-wheels">
      <WheelColumn items={PERIOD_ITEMS} index={value.period === "AM" ? 0 : 1} onChange={(i) => onChange({ ...value, period: i === 0 ? "AM" : "PM" })} />
      <WheelColumn items={HOUR_ITEMS} index={value.hour - 1} onChange={(i) => onChange({ ...value, hour: i + 1 })} />
      <span className="mc-wheel-colon">:</span>
      <WheelColumn items={MINUTE_ITEMS} index={value.minute} onChange={(i) => onChange({ ...value, minute: i })} />
      <span className="mc-wheel-colon">:</span>
      <WheelColumn items={SECOND_ITEMS} index={value.second} onChange={(i) => onChange({ ...value, second: i })} />
    </div>
  );
}

/* ---------------- DateField ---------------- */

function DateFieldCard() {
  const [inputType, setInputType] = useState<InputType>("date");
  const [value, setValue] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(() => new Date());
  const [view, setView] = useState<"calendar" | "time">("calendar");
  const [draftDate, setDraftDate] = useState<Date | null>(null);
  const [draftTime, setDraftTime] = useState<TimeOfDay>(DEFAULT_TIME);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const today = new Date();

  // datetime/time 모드는 CLOSE 버튼뿐 아니라 바깥을 클릭하거나 아이콘을 다시 눌러 닫을
  // 때도 그때까지 고른 날짜/시간을 그대로 반영해야 한다 — 예전엔 바깥 클릭 시 draft를
  // 버리고 그냥 닫기만 해서 "시간을 바꿨는데 반영이 안 된다"는 문제가 있었다.
  const closePopup = () => {
    if (inputType !== "date") {
      setValue(combineDateTime(draftDate ?? today, draftTime));
    }
    setOpen(false);
  };

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) closePopup();
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open, inputType, draftDate, draftTime]);

  const openPopup = () => {
    if (open) {
      closePopup();
      return;
    }
    setDraftDate(value ?? today);
    setDraftTime(value ? timeOfDayFromDate(value) : DEFAULT_TIME);
    setView(inputType === "time" ? "time" : "calendar");
    setOpen(true);
  };

  const commitDraft = closePopup;

  return (
    <Card title="DateField">
      <div className="mc-datefield" ref={boxRef}>
        <label className={`mc-field mc-field-overlap${value ? " floating" : ""}`}>
          <span className="mc-field-label">DateField</span>
          <input
            readOnly
            value={value ? formatByType(value, inputType) : ""}
            placeholder={INPUT_TYPE_PLACEHOLDER[inputType]}
            onClick={openPopup}
          />
          <button type="button" className="mc-cal-icon" aria-label="open calendar" onClick={openPopup}>
            📅
          </button>
        </label>
        {open && inputType === "date" && (
          <MonthPopup
            cursor={cursor}
            setCursor={setCursor}
            today={today}
            rangeStart={value}
            rangeEnd={value}
            onPickDay={(d) => {
              setValue(d);
              setOpen(false);
            }}
          />
        )}
        {open && inputType !== "date" && (
          <div className="mc-popup">
            {inputType === "datetime" && (
              <div className="mc-popup-tabs">
                <button type="button" className={view === "calendar" ? "active" : ""} onClick={() => setView("calendar")} aria-label="date tab">
                  📅
                </button>
                <button type="button" className={view === "time" ? "active" : ""} onClick={() => setView("time")} aria-label="time tab">
                  🕐
                </button>
              </div>
            )}
            {view === "calendar" ? (
              <CalendarView cursor={cursor} setCursor={setCursor} today={today} rangeStart={draftDate} rangeEnd={draftDate} onPickDay={setDraftDate} />
            ) : (
              <TimeSelects value={draftTime} onChange={setDraftTime} />
            )}
            <button type="button" className="mc-popup-close" onClick={commitDraft}>
              ✕ CLOSE
            </button>
          </div>
        )}
      </div>
      <div className="mc-radio-row">
        {INPUT_TYPE_OPTIONS.map((o) => (
          <label key={o.code} className="mc-radio">
            <input type="radio" name="mc-inputtype" checked={inputType === o.code} onChange={() => setInputType(o.code)} />
            {o.label}
          </label>
        ))}
      </div>
    </Card>
  );
}

/* ---------------- PopupRangePicker ---------------- */

function PopupRangePickerCard() {
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(() => new Date());
  const boxRef = useRef<HTMLDivElement | null>(null);
  const today = new Date();

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const onPickDay = (d: Date) => {
    if (!rangeStart || rangeEnd) {
      setRangeStart(d);
      setRangeEnd(null);
      return;
    }
    if (d < rangeStart) {
      setRangeStart(d);
      return;
    }
    setRangeEnd(d);
    setOpen(false);
  };

  return (
    <Card title="PopupRangePicker">
      <div className="mc-poprange" ref={boxRef}>
        <label className={`mc-field mc-field-overlap${rangeStart ? " floating" : ""}`}>
          <span className="mc-field-label">Start Date</span>
          <input readOnly value={rangeStart ? formatByType(rangeStart, "date") : ""} placeholder="YYYY. M. D." onClick={() => setOpen((v) => !v)} />
          <button type="button" className="mc-cal-icon" aria-label="open start date picker" onClick={() => setOpen((v) => !v)}>
            📅
          </button>
        </label>
        <label className={`mc-field mc-field-overlap${rangeEnd ? " floating" : ""}`}>
          <span className="mc-field-label">End Date</span>
          <input readOnly value={rangeEnd ? formatByType(rangeEnd, "date") : ""} placeholder="YYYY. M. D." onClick={() => setOpen((v) => !v)} />
          <button type="button" className="mc-cal-icon" aria-label="open end date picker" onClick={() => setOpen((v) => !v)}>
            📅
          </button>
        </label>
        {open && <MonthPopup cursor={cursor} setCursor={setCursor} today={today} rangeStart={rangeStart} rangeEnd={rangeEnd} onPickDay={onPickDay} />}
      </div>
    </Card>
  );
}

/* ---------------- DateRangePicker (3-month strip) ---------------- */

function DateRangePickerCard() {
  const [inputType, setInputType] = useState<InputType>("date");
  const [base, setBase] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const [view, setView] = useState<"calendar" | "time">("calendar");
  const [startTime, setStartTime] = useState<TimeOfDay>(DEFAULT_TIME);
  const [endTime, setEndTime] = useState<TimeOfDay>(DEFAULT_TIME);
  const today = new Date();

  const onPickDay = (d: Date) => {
    if (!rangeStart || rangeEnd) {
      setRangeStart(d);
      setRangeEnd(null);
      return;
    }
    if (d < rangeStart) {
      setRangeStart(d);
      return;
    }
    setRangeEnd(d);
  };

  const onChangeInputType = (t: InputType) => {
    setInputType(t);
    setView(t === "time" ? "time" : "calendar");
  };

  const months = [0, 1, 2].map((i) => new Date(base.getFullYear(), base.getMonth() + i, 1));
  const showTimeView = inputType !== "date" && view === "time";
  // datetime 모드는 날짜를 아직 안 골랐어도(오늘 날짜를 기본값 삼아) 시간 select를
  // 바꾸는 즉시 헤더에 반영되게 한다 — date를 먼저 골라야만 시간 변경이 보이던 문제 수정.
  const startLabel =
    inputType === "time" ? "Start Time" : inputType === "datetime" ? formatByType(combineDateTime(rangeStart ?? today, startTime), "datetime") : rangeStart ? formatByType(rangeStart, "date") : "Start Date";
  const endLabel =
    inputType === "time" ? "End Time" : inputType === "datetime" ? formatByType(combineDateTime(rangeEnd ?? today, endTime), "datetime") : rangeEnd ? formatByType(rangeEnd, "date") : "End Date";

  return (
    <Card title="DateRangePicker">
      <div className="mc-radio-row mc-radio-row-end">
        {INPUT_TYPE_OPTIONS.map((o) => (
          <label key={o.code} className="mc-radio">
            <input type="radio" name="mc-rangetype" checked={inputType === o.code} onChange={() => onChangeInputType(o.code)} />
            {o.label}
          </label>
        ))}
      </div>

      <div className="mc-range-header">
        <div className="mc-range-header-cell">{startLabel}</div>
        <div className="mc-range-header-cell">{endLabel}</div>
      </div>

      {inputType === "datetime" && (
        <div className="mc-range-header mc-range-tabs">
          <button type="button" className={view === "calendar" ? "active" : ""} onClick={() => setView("calendar")} aria-label="date tab">
            📅
          </button>
          <button type="button" className={view === "time" ? "active" : ""} onClick={() => setView("time")} aria-label="time tab">
            🕐
          </button>
        </div>
      )}

      {showTimeView ? (
        <div className="mc-range-time-grids">
          <TimeSelects value={startTime} onChange={setStartTime} />
          <TimeSelects value={endTime} onChange={setEndTime} />
        </div>
      ) : (
        <>
          <div className="mc-cal-bar mc-cal-bar-triple">
            <button type="button" onClick={() => setBase(new Date(base.getFullYear(), base.getMonth() - 1, 1))} aria-label="prev month">
              ‹
            </button>
            {months.map((m) => (
              <span key={m.toISOString()}>
                {m.getFullYear()}. {String(m.getMonth() + 1).padStart(2, "0")}
              </span>
            ))}
            <button type="button" onClick={() => setBase(new Date(base.getFullYear(), base.getMonth() + 1, 1))} aria-label="next month">
              ›
            </button>
          </div>
          <div className="mc-range-grids">
            {months.map((m) => (
              <MonthGrid
                key={m.toISOString()}
                year={m.getFullYear()}
                month={m.getMonth()}
                today={today}
                rangeStart={rangeStart}
                rangeEnd={rangeEnd}
                onPickDay={onPickDay}
              />
            ))}
          </div>
        </>
      )}
    </Card>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="mc-desc">
      <h3 className="mc-desc-title">{t("comp.mobilecomponents")}</h3>
      <p className="mc-desc-body">{t("comp.mobilecomponents.desc")}</p>
    </section>
  );
}
