import { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type ColumnDefinition } from "tabulator-tables";
import type { FilterFindRow } from "../../data/filterFindRealData";
import { useLanguage } from "../../shell/LanguageContext";

const FIND_FIELDS: (keyof FilterFindRow)[] = [
  "firstName",
  "lastName",
  "email",
  "gender",
  "ipAddress",
  "state",
  "street",
  "date",
  "domain",
  "guid",
];

const FIND_COLUMNS: ColumnDefinition[] = [
  { title: "First name", field: "firstName" },
  { title: "Last name", field: "lastName" },
  { title: "Email", field: "email", widthGrow: 2 },
  { title: "Gender", field: "gender" },
  { title: "IP Address", field: "ipAddress" },
  { title: "State", field: "state" },
  { title: "Street", field: "street" },
  { title: "Date", field: "date" },
  { title: "Domain", field: "domain" },
  { title: "GUID", field: "guid", widthGrow: 2 },
];

type Scope = "all" | "row" | "col";
type Condition = "equal" | "inclusion";
type Direction = "next" | "prev";
type Position = "current" | "first";

interface FindPanelProps {
  data: FilterFindRow[];
}

/**
 * Nexacro grid::function.xfdl의 Find 섹션을 그대로 옮긴 것.
 * "필터"가 아니라 Ctrl+F처럼 셀 단위로 다음/이전 일치 셀로 이동·하이라이트한다.
 * 원본 btnSearch_onclick의 scope(all/row/col) 3-branch 탐색 로직을 그대로 포팅했다.
 */
export function FindPanel({ data }: FindPanelProps) {
  const { t } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const highlightedRef = useRef<HTMLElement | null>(null);

  const [word, setWord] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [scope, setScope] = useState<Scope>("all");
  const [condition, setCondition] = useState<Condition>("inclusion");
  const [direction, setDirection] = useState<Direction>("next");
  const [position, setPosition] = useState<Position>("current");

  // 현재 커서 셀 (사용자가 그리드에서 클릭한 위치) — grdRow/grdCol에 대응
  const cursor = useRef({ row: 0, col: 0 });
  // 마지막으로 찾은 위치 — findRow/columnIdx에 대응
  const findPos = useRef({ row: -1, col: -1 });
  const lastWord = useRef("");

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data,
      // fitColumns는 컬럼 10개를 억지로 욱여넣어 헤더 텍스트가 잘렸다. fitData로 내용에
      // 맞는 폭을 주고, 넘치면 그리드 자체 가로 스크롤을 쓴다.
      layout: "fitData",
      height: "320px",
      columns: FIND_COLUMNS,
    });
    table.on("cellClick", (_e, cell) => {
      const pos = cell.getRow().getPosition(true);
      cursor.current = {
        row: (typeof pos === "number" ? pos : 1) - 1,
        col: FIND_FIELDS.indexOf(cell.getColumn().getField() as keyof FilterFindRow),
      };
    });
    tableRef.current = table;
    return () => {
      table.destroy();
      tableRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const clearHighlight = () => {
    highlightedRef.current?.classList.remove("find-hit");
    highlightedRef.current = null;
  };

  const selectCell = (row: number, col: number) => {
    const table = tableRef.current;
    if (!table) return;
    clearHighlight();
    const rows = table.getRows();
    const targetRow = rows[row];
    if (!targetRow) return;
    table.scrollToRow(targetRow, "center", false).catch(() => {});
    const cell = targetRow.getCell(FIND_FIELDS[col]);
    const el = cell.getElement();
    el.classList.add("find-hit");
    highlightedRef.current = el;
    cursor.current = { row, col };
  };

  /** 원본 fnSetPosDir 그대로 포팅 */
  const setPosDir = () => {
    if (position === "first") {
      if (direction === "next") {
        findPos.current = { row: -1, col: 0 };
      } else {
        findPos.current = { row: data.length, col: FIND_FIELDS.length - 1 };
      }
    } else {
      findPos.current = { row: cursor.current.row - (direction === "next" ? 1 : -1), col: cursor.current.col };
    }
  };

  const cellText = (row: number, col: number) => String(data[row]?.[FIND_FIELDS[col]] ?? "");

  const isMatch = (val: string) => {
    if (caseSensitive) {
      return condition === "equal" ? val === word : val.includes(word);
    }
    return condition === "equal"
      ? val.toUpperCase() === word.toUpperCase()
      : val.toUpperCase().includes(word.toUpperCase());
  };

  const dir = direction === "next" ? 1 : -1;

  const search = () => {
    if (!word) {
      alert(t("sff.findEmptyAlert"));
      return;
    }
    if (lastWord.current !== word) {
      lastWord.current = word;
      setPosDir();
    }

    if (scope === "col") {
      let j = findPos.current.row + dir;
      const i = cursor.current.col;
      while (j >= 0 && j < data.length) {
        if (isMatch(cellText(j, i))) {
          findPos.current = { row: j, col: i };
          selectCell(j, i);
          return;
        }
        j += dir;
      }
      findPos.current.row = direction === "next" ? -1 : data.length;
    } else if (scope === "row") {
      let i = findPos.current.col;
      const j = cursor.current.row;
      while (i >= 0 && i < FIND_FIELDS.length) {
        if (isMatch(cellText(j, i))) {
          findPos.current = { row: j, col: i };
          selectCell(j, i);
          findPos.current.col += dir;
          return;
        }
        i += dir;
      }
      findPos.current.col = direction === "next" ? 0 : FIND_FIELDS.length - 1;
    } else {
      let i = findPos.current.col;
      while (i >= 0 && i < FIND_FIELDS.length) {
        let j = findPos.current.row + dir;
        while (j >= 0 && j < data.length) {
          if (isMatch(cellText(j, i))) {
            findPos.current = { row: j, col: i };
            selectCell(j, i);
            return;
          }
          j += dir;
        }
        findPos.current.row = direction === "next" ? -1 : data.length;
        i += dir;
        findPos.current.col = i;
      }
      findPos.current = direction === "next" ? { row: -1, col: 0 } : { row: data.length, col: FIND_FIELDS.length - 1 };
    }

    if (confirm(t("sff.findRestartConfirm"))) {
      findPos.current = { row: -1, col: -1 };
      lastWord.current = "";
      search();
    }
  };

  const onSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") search();
  };

  return (
    <>
      <div className="sff-find-bar">
        <label className="sff-find-word-label" htmlFor="sff-find-word">
          {t("grid.function.find.word")}
        </label>
        <div className="sff-find-input-wrap">
          <input
            id="sff-find-word"
            className="sff-find-input"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={onSearchKeyDown}
          />
          <button className="sff-find-search-btn" onClick={search} title={t("grid.function.find")}>
            🔍
          </button>
        </div>
        <label className="sff-find-check">
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
          {t("grid.function.case")}
        </label>
        <button className="work-toggle" onClick={() => setOptionsOpen((v) => !v)}>
          {t("grid.function.option")} {optionsOpen ? "▲" : "▼"}
        </button>
      </div>

      {optionsOpen && (
        <div className="sff-find-options">
          <fieldset>
            <legend>{t("grid.function.find.scope")}</legend>
            {(["all", "row", "col"] as Scope[]).map((v) => (
              <label key={v}>
                <input type="radio" name="scope" checked={scope === v} onChange={() => setScope(v)} />
                {t(`scope.${v}`)}
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>{t("grid.function.find.condition")}</legend>
            {(["equal", "inclusion"] as Condition[]).map((v) => (
              <label key={v}>
                <input type="radio" name="condition" checked={condition === v} onChange={() => setCondition(v)} />
                {t(`condition.${v}`)}
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>{t("grid.function.find.direction")}</legend>
            {(["next", "prev"] as Direction[]).map((v) => (
              <label key={v}>
                <input type="radio" name="direction" checked={direction === v} onChange={() => setDirection(v)} />
                {t(`direction.${v}`)}
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>{t("grid.function.find.position")}</legend>
            {(["current", "first"] as Position[]).map((v) => (
              <label key={v}>
                <input type="radio" name="position" checked={position === v} onChange={() => setPosition(v)} />
                {t(`position.${v}`)}
              </label>
            ))}
          </fieldset>
        </div>
      )}

      <p className="sff-hint sff-hint-note">{t("sff.findHint")}</p>
      <div ref={mountRef} />
    </>
  );
}
