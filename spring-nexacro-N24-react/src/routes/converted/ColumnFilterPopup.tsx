import { useMemo, useState } from "react";
import "./popups.css";
import { useLanguage } from "../../shell/LanguageContext";

type Operator =
  | "none"
  | "contains"
  | "startWith"
  | "endWith"
  | "equal"
  | "notEqual"
  | "greaterThan"
  | "greaterThanOrEqual"
  | "lessThan"
  | "lessThanOrEqual";

const OPERATORS: { value: Operator; label: string }[] = [
  { value: "none", label: "None" },
  { value: "contains", label: "Contains" },
  { value: "startWith", label: "Start with" },
  { value: "endWith", label: "End with" },
  { value: "equal", label: "=" },
  { value: "notEqual", label: "<>" },
  { value: "greaterThan", label: ">" },
  { value: "greaterThanOrEqual", label: ">=" },
  { value: "lessThan", label: "<" },
  { value: "lessThanOrEqual", label: "<=" },
];

function matches(val: string, op: Operator, needle: string): boolean {
  switch (op) {
    case "equal":
      return val === needle;
    case "notEqual":
      return val !== needle;
    case "greaterThan":
      return val > needle;
    case "greaterThanOrEqual":
      return val >= needle;
    case "lessThan":
      return val < needle;
    case "lessThanOrEqual":
      return val <= needle;
    case "startWith":
      return val.startsWith(needle);
    case "endWith":
      return val.endsWith(needle);
    case "contains":
      return val.includes(needle);
    default:
      return true;
  }
}

interface ColumnFilterPopupProps {
  columnLabel: string;
  /** 이 컬럼의 distinct 값 목록 (원본 grd_combo와 동일하게 원본 데이터 순서 유지) */
  values: string[];
  /** 이전에 적용된 체크 상태 (null이면 전체 체크 = 필터 없음) */
  initialChecked: Set<string> | null;
  /** 원본 GridFilterPop.xfdl의 setFilterType처럼 컬럼 타입에 따라 입력 위젯이 바뀐다.
   *  "date"면 텍스트 입력 대신 date picker를 쓴다. */
  columnType?: "string" | "date";
  onApply: (checked: Set<string> | null) => void;
  onClose: () => void;
}

/**
 * Nexacro GridFilterPop.xfdl을 그대로 옮긴 컬럼 필터 팝업 — 엑셀 자동필터처럼
 * distinct 값 체크리스트 + 연산자로 일괄 체크/해제.
 */
export function ColumnFilterPopup({
  columnLabel,
  values,
  initialChecked,
  columnType = "string",
  onApply,
  onClose,
}: ColumnFilterPopupProps) {
  const { t } = useLanguage();
  const [checked, setChecked] = useState<Set<string>>(
    () => new Set(initialChecked ?? values),
  );
  const [operator, setOperator] = useState<Operator>("none");
  const [needle, setNeedle] = useState("");

  const distinctValues = useMemo(() => values, [values]);
  const allChecked = checked.size === distinctValues.length;

  const applyOperator = (op: Operator, val: string) => {
    setOperator(op);
    setNeedle(val);
    if (op === "none" || val === "") return;
    setChecked(new Set(distinctValues.filter((v) => matches(v, op, val))));
  };

  const toggleAll = () => {
    setChecked(allChecked ? new Set() : new Set(distinctValues));
  };
  const toggleOne = (v: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(v)) next.delete(v);
      else next.add(v);
      return next;
    });
  };

  const apply = () => {
    onApply(checked.size === distinctValues.length ? null : new Set(checked));
    onClose();
  };

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-card filter-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-title">
          {columnLabel} {t("popup.filterTitleSuffix")}
        </div>

        <div className="filter-popup-op-row">
          <select value={operator} onChange={(e) => applyOperator(e.target.value as Operator, needle)}>
            {OPERATORS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <input
            type={columnType === "date" ? "date" : "text"}
            placeholder="search"
            value={needle}
            onChange={(e) => applyOperator(operator, e.target.value)}
          />
        </div>

        <div className="filter-popup-list">
          <div className="filter-popup-item select-all">
            <input type="checkbox" checked={allChecked} onChange={toggleAll} />
            <label>{t("popup.selectAll")}</label>
          </div>
          {distinctValues.map((v) => (
            <div className="filter-popup-item" key={v}>
              <input type="checkbox" checked={checked.has(v)} onChange={() => toggleOne(v)} />
              <label title={v}>{v}</label>
            </div>
          ))}
        </div>

        <div className="popup-actions">
          <button className="popup-btn" onClick={onClose}>
            {t("popup.cancel")}
          </button>
          <button className="popup-btn primary" onClick={apply}>
            {t("popup.apply")}
          </button>
        </div>
      </div>
    </div>
  );
}
