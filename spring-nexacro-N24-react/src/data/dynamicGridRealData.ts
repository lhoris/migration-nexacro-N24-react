export type DynamicCellKind = "text" | "combo" | "calendar" | "edit" | "mask" | "number" | "checkbox" | "button" | "textarea";

export interface DynamicTool {
  id: string;
  name: string;
  group: string;
  kind: DynamicCellKind;
}

export interface DynamicCell {
  id: string;
  row: number;
  col: number;
  rowSpan: number;
  colSpan: number;
  value: string;
  kind: DynamicCellKind;
  label: boolean;
  colored: boolean;
  hidden: boolean;
}

export interface DynamicGridState {
  rowCount: number;
  colCount: number;
  colWidths: number[];
  cells: DynamicCell[];
}

export const DYNAMIC_TOOLS: DynamicTool[] = [
  { id: "A15", name: "ComboBox", group: "A type", kind: "combo" },
  { id: "A13", name: "Calendar", group: "A type", kind: "calendar" },
  { id: "A14", name: "Edit", group: "A type", kind: "edit" },
  { id: "A_12_01", name: "MaskEdit", group: "A type", kind: "mask" },
  { id: "A_09_04", name: "Number", group: "A type", kind: "number" },
  { id: "A111", name: "CheckBox", group: "A type", kind: "checkbox" },
  { id: "A_09_03_BUTTON", name: "Button", group: "A type", kind: "button" },
  { id: "A_09_03_TEXTAREA", name: "TextArea", group: "A type", kind: "textarea" },
];

const INITIAL_VALUES: Record<string, string> = {
  c_0_0: "Subject",
  c_1_0: "Standard\nClassification",
  c_1_1: "Division",
  c_2_0: "Representiative\nProduct",
  c_2_1: "Division",
  c_3_0: "Address",
  c_3_1: "English",
  c_4_1: "Korean",
  c_5_0: "Etc.",
  c_6_0: "Contract",
  c_6_1: "Resident Number",
  c_1_3: "Main",
  c_2_3: "Main",
  c_6_4: "Career",
  c_1_5: "Sub",
  c_2_5: "Sub",
  c_6_5: "Union",
  c_6_6: "Hobby",
  c_8_0: "Privacy",
  c_8_1: "Department",
  c_8_3: "Position",
  c_8_5: "Major",
  c_9_1: "Phone",
  c_9_3: "Cell Phone",
  c_9_5: "E-mail",
};

const INITIAL_LABELS = new Set([
  "c_0_0",
  "c_1_0",
  "c_1_1",
  "c_1_3",
  "c_1_5",
  "c_2_0",
  "c_2_1",
  "c_2_3",
  "c_2_5",
  "c_3_0",
  "c_3_1",
  "c_4_1",
  "c_5_0",
  "c_6_0",
  "c_6_1",
  "c_6_4",
  "c_6_5",
  "c_6_6",
  "c_8_0",
  "c_8_1",
  "c_8_3",
  "c_8_5",
  "c_9_1",
  "c_9_3",
  "c_9_5",
]);

const INITIAL_SPANS = [
  { row: 0, col: 1, rowSpan: 1, colSpan: 6 },
  { row: 3, col: 0, rowSpan: 2, colSpan: 1 },
  { row: 3, col: 2, rowSpan: 1, colSpan: 5 },
  { row: 4, col: 2, rowSpan: 1, colSpan: 5 },
  { row: 5, col: 1, rowSpan: 1, colSpan: 6 },
  { row: 6, col: 0, rowSpan: 2, colSpan: 1 },
  { row: 6, col: 1, rowSpan: 1, colSpan: 3 },
  { row: 7, col: 1, rowSpan: 1, colSpan: 3 },
  { row: 8, col: 0, rowSpan: 2, colSpan: 1 },
];

export const DYNAMIC_COMBO_VALUES = ["", "data1", "data2", "data3"];

export function makeCell(row: number, col: number): DynamicCell {
  const id = `c_${row}_${col}`;
  return {
    id,
    row,
    col,
    rowSpan: 1,
    colSpan: 1,
    value: INITIAL_VALUES[id] ?? "",
    kind: "text",
    label: INITIAL_LABELS.has(id),
    colored: false,
    hidden: false,
  };
}

export function createInitialDynamicGridState(): DynamicGridState {
  const rowCount = 10;
  const colCount = 7;
  const cells = Array.from({ length: rowCount * colCount }, (_, index) => makeCell(Math.floor(index / colCount), index % colCount));
  const state: DynamicGridState = {
    rowCount,
    colCount,
    colWidths: [110, 90, 90, 90, 90, 90, 90],
    cells,
  };

  for (const span of INITIAL_SPANS) {
    const master = state.cells.find((cell) => cell.row === span.row && cell.col === span.col);
    if (!master) continue;
    master.rowSpan = span.rowSpan;
    master.colSpan = span.colSpan;
    for (let r = span.row; r < span.row + span.rowSpan; r += 1) {
      for (let c = span.col; c < span.col + span.colSpan; c += 1) {
        if (r === span.row && c === span.col) continue;
        const cell = state.cells.find((item) => item.row === r && item.col === c);
        if (cell) cell.hidden = true;
      }
    }
  }

  return state;
}
