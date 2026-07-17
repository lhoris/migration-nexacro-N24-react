import { useState } from "react";
import "./popups.css";
import { useLanguage } from "../../shell/LanguageContext";

export interface SortColumnOption {
  field: string;
  label: string;
}

export interface SortItem {
  field: string;
  dir: "asc" | "desc";
}

interface MultiSortPopupProps {
  columns: SortColumnOption[];
  initial: SortItem[];
  onApply: (items: SortItem[]) => void;
  onClose: () => void;
}

/**
 * Nexacro GridSortPop.xfdl을 그대로 옮긴 다중 정렬 팝업.
 * 원본: ds_item(그리드 행) + btn_add/btn_delete/btn_up/btn_down + btn_apply.
 */
export function MultiSortPopup({ columns, initial, onApply, onClose }: MultiSortPopupProps) {
  const { t } = useLanguage();
  const [items, setItems] = useState<(SortItem | null)[]>(
    initial.length > 0 ? initial : [null],
  );
  const [selected, setSelected] = useState(0);

  const addRow = () => {
    setItems((prev) => [...prev, null]);
    setSelected(items.length);
  };
  const deleteRow = () => {
    setItems((prev) => (prev.length <= 1 ? prev : prev.filter((_, i) => i !== selected)));
    setSelected((s) => Math.max(0, s - 1));
  };
  const moveUp = () => {
    if (selected <= 0) return;
    setItems((prev) => {
      const next = [...prev];
      [next[selected - 1], next[selected]] = [next[selected], next[selected - 1]];
      return next;
    });
    setSelected((s) => s - 1);
  };
  const moveDown = () => {
    if (selected >= items.length - 1) return;
    setItems((prev) => {
      const next = [...prev];
      [next[selected], next[selected + 1]] = [next[selected + 1], next[selected]];
      return next;
    });
    setSelected((s) => s + 1);
  };

  const setField = (i: number, field: string) => {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { field, dir: it?.dir ?? "asc" } : it)));
  };
  const setDir = (i: number, dir: "asc" | "desc") => {
    setItems((prev) => prev.map((it, idx) => (idx === i && it ? { ...it, dir } : it)));
  };

  const apply = () => {
    onApply(items.filter((it): it is SortItem => it !== null && it.field !== ""));
  };

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-card sort-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-title">{t("grid.function.sort.button")}</div>
        <div className="sort-popup-toolbar">
          <button className="popup-icon-btn" onClick={addRow} title={t("popup.add")}>
            +
          </button>
          <button className="popup-icon-btn" onClick={deleteRow} title={t("popup.delete")}>
            −
          </button>
          <button className="popup-icon-btn" onClick={moveUp} title={t("popup.up")}>
            ↑
          </button>
          <button className="popup-icon-btn" onClick={moveDown} title={t("popup.down")}>
            ↓
          </button>
        </div>
        <table className="sort-popup-table">
          <thead>
            <tr>
              <th>{t("popup.column")}</th>
              <th>{t("grid.function.sort")}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} className={i === selected ? "selected" : ""} onClick={() => setSelected(i)}>
                <td>
                  <select value={it?.field ?? ""} onChange={(e) => setField(i, e.target.value)}>
                    <option value="">-</option>
                    {columns.map((c) => (
                      <option key={c.field} value={c.field}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={it?.dir ?? "asc"}
                    disabled={!it?.field}
                    onChange={(e) => setDir(i, e.target.value as "asc" | "desc")}
                  >
                    <option value="asc">{t("popup.asc")}</option>
                    <option value="desc">{t("popup.desc")}</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
