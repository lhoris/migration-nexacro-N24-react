import { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type CellComponent, type ColumnDefinition, type Editor } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { BINDING_ROWS, GENDER_OPTIONS, formatBirthday, type BindingRow } from "../../data/bindingRealData";
import "./twoWayBinding.css";

type Translate = (key: string, fallback?: string) => string;

/**
 * Nexacro comp::binding.xfdl(메뉴 "양방향 바인딩", 실제 menu_id 21000)을 React로 옮긴 화면.
 * 원본은 Dataset도 svc:: 호출도 그리드/상세정보 컨트롤 5개(Edit/Radio/Calendar/CheckBox/
 * TextArea)가 전부 같은 Dataset00의 BindItem으로 선언적 양방향 바인딩만 돼 있어 스크립트
 * 코드가 거의 없다 — 그리드 행을 선택하면 상세정보가 그 행 데이터로 즉시 바뀌고, 상세정보나
 * 그리드 어느 쪽을 고쳐도 반대편이 실시간으로 같이 바뀐다. React에서는 이 관계를 "선택된
 * 행 인덱스 + 공유 배열 state" 하나로 표현해 그리드와 상세정보가 같은 소스를 읽고 쓰게
 * 했다(원본처럼 Dataset 객체가 따로 있는 게 아니라 React state 자체가 곧 그 Dataset 역할).
 *
 * Playwright로 원본을 직접 조작해 확인한 실제 커밋 타이밍까지 재현: 텍스트 필드(이름/비고)는
 * blur 시점에 커밋되고, 체크박스/라디오는 클릭 즉시 반영된다.
 *
 * 원본 데이터 버그: Jennifer의 생년월일이 "1980331"(7자리, 월 앞자리 0 누락)로 잘못
 * 입력돼 있어 원본 그리드/달력이 이를 그대로 오파싱해 "1982-09-01"로 잘못 표시한다
 * (Playwright로 실측 확인). 사용자에게 물어봤고 오타로 판단해 "19800331"(1980-03-31)로
 * 수정하기로 결정 — 이 화면의 핵심 기능(양방향 바인딩)과 무관한 데이터 오타라 재현할 가치가
 * 없다고 판단.
 */
export function TwoWayBinding() {
  const { t } = useLanguage();
  const [rows, setRows] = useState<BindingRow[]>(BINDING_ROWS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const updateSelectedRow = (patch: Partial<BindingRow>) => {
    setRows((prev) => prev.map((r, i) => (i === selectedIndex ? { ...r, ...patch } : r)));
  };

  return (
    <main className="work">
      <div className="work-card react tb-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#21000">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="tb-page-title">{t("comp.binding")}</h1>

        <BindingGrid
          rows={rows}
          selectedIndex={selectedIndex}
          onSelectRow={setSelectedIndex}
          onUpdateRow={(index, patch) => setRows((prev) => prev.map((r, i) => (i === index ? { ...r, ...patch } : r)))}
        />

        <DetailPanel t={t} row={rows[selectedIndex]} onChange={updateSelectedRow} />

        <section className="tb-desc">
          <h3 className="tb-desc-title">{t("comp.binding")}</h3>
          <p className="tb-desc-body">{t("comp.binding.desc")}</p>
        </section>
      </div>
    </main>
  );
}

// Tabulator 내장 editor:"date"는 luxon.js가 필요한데 이 프로젝트엔 없어 조용히 깨지는
// 버그가 있다(10200 화면에서 이미 겪은 문제 — conversion-playbook.md 5-6 참고). 원본
// Grid00의 Birthday 컬럼도 실제 달력 편집기(calendardateformat)를 쓰므로, 상세정보 패널과
// 동일하게 네이티브 <input type="date">를 커스텀 에디터로 붙여 브라우저 기본 달력 버튼을
// 그대로 재현한다.
const birthdayEditor: Editor = (cell, onRendered, success, cancel, _editorParams) => {
  const input = document.createElement("input");
  input.type = "date";
  input.className = "tb-date-editor";
  input.value = formatBirthday(cell.getValue());

  onRendered(() => input.focus());

  const commit = () => {
    if (input.value) success(input.value.replaceAll("-", ""));
    else cancel(cell.getValue());
  };
  input.addEventListener("change", commit);
  input.addEventListener("blur", commit);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cancel(cell.getValue());
  });

  return input;
};

function BindingGrid({
  rows,
  selectedIndex,
  onSelectRow,
  onUpdateRow,
}: {
  rows: BindingRow[];
  selectedIndex: number;
  onSelectRow: (index: number) => void;
  onUpdateRow: (index: number, patch: Partial<BindingRow>) => void;
}) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const readyRef = useRef(false);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const buildColumns = (): ColumnDefinition[] => [
    { title: "Name", field: "name", editor: "input", width: 140 },
    {
      title: "Gender",
      field: "gender",
      width: 110,
      editor: "list",
      editorParams: { values: Object.fromEntries(GENDER_OPTIONS.map((g) => [g.code, g.label])) },
      formatter: (cell) => GENDER_OPTIONS.find((g) => g.code === cell.getValue())?.label ?? cell.getValue(),
    },
    {
      title: "Birthday",
      field: "birthday",
      width: 130,
      editor: birthdayEditor,
      formatter: (cell) => formatBirthday(cell.getValue()),
    },
    {
      title: "Marital Status",
      field: "married",
      width: 130,
      hozAlign: "center",
      headerHozAlign: "center",
      formatter: (cell) => `<input type="checkbox" class="tb-checkbox" tabindex="-1" ${cell.getValue() ? "checked" : ""} />`,
      cellClick: (_e, cell: CellComponent) => {
        const index = (cell.getRow().getPosition(true) as number) - 1;
        onUpdateRow(index, { married: !cell.getValue() });
      },
    },
    { title: "Remark", field: "remark", editor: "input", widthGrow: 2 },
  ];

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: rows,
      height: "290px",
      layout: "fitColumns",
      columns: buildColumns(),
      selectableRows: 1,
    });
    table.on("tableBuilt", () => {
      readyRef.current = true;
      table.selectRow([0]);
    });
    table.on("rowClick", (_e, row) => {
      onSelectRow((row.getPosition(true) as number) - 1);
    });
    table.on("cellEdited", (cell) => {
      const index = (cell.getRow().getPosition(true) as number) - 1;
      onUpdateRow(index, { [cell.getField()]: cell.getValue() } as Partial<BindingRow>);
    });
    tableRef.current = table;
    return () => {
      readyRef.current = false;
      table.destroy();
      tableRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const table = tableRef.current;
    if (!table || !readyRef.current) return;
    table.setData(rows).then(() => {
      table.selectRow([selectedIndex]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  useEffect(() => {
    const table = tableRef.current;
    if (!table || !readyRef.current) return;
    table.selectRow([selectedIndex]);
  }, [selectedIndex]);

  return <div ref={mountRef} className="tb-grid-mount" />;
}

function DetailPanel({
  t,
  row,
  onChange,
}: {
  t: Translate;
  row: BindingRow;
  onChange: (patch: Partial<BindingRow>) => void;
}) {
  const [nameDraft, setNameDraft] = useState(row.name);
  const [remarkDraft, setRemarkDraft] = useState(row.remark);

  useEffect(() => {
    setNameDraft(row.name);
    setRemarkDraft(row.remark);
  }, [row]);

  return (
    <div className="tb-detail">
      <h2 className="tb-detail-title">{t("comp.binding.information")}</h2>
      <div className="tb-detail-grid">
        <label className="tb-field-label">{t("name")}</label>
        <input
          className="tb-field-input"
          type="text"
          value={nameDraft}
          onChange={(e) => setNameDraft(e.target.value)}
          onBlur={() => onChange({ name: nameDraft })}
        />

        <label className="tb-field-label">{t("comp.binding.gender")}</label>
        <div className="tb-radio-row">
          {GENDER_OPTIONS.map((g) => (
            <label key={g.code} className="tb-radio-option">
              <input
                type="radio"
                name="tb-gender"
                checked={row.gender === g.code}
                onChange={() => onChange({ gender: g.code })}
              />
              {g.label}
            </label>
          ))}
        </div>

        <label className="tb-field-label">{t("comp.binding.birthday")}</label>
        <input
          className="tb-field-input"
          type="date"
          value={formatBirthday(row.birthday)}
          onChange={(e) => onChange({ birthday: e.target.value.replaceAll("-", "") })}
        />

        <label className="tb-field-label">{t("comp.binding.marriage")}</label>
        <label className="tb-checkbox-option">
          <input type="checkbox" checked={row.married} onChange={(e) => onChange({ married: e.target.checked })} />
        </label>

        <label className="tb-field-label tb-field-label-top">{t("comp.binding.remark")}</label>
        <textarea
          className="tb-field-textarea"
          value={remarkDraft}
          onChange={(e) => setRemarkDraft(e.target.value)}
          onBlur={() => onChange({ remark: remarkDraft })}
        />
      </div>
    </div>
  );
}
