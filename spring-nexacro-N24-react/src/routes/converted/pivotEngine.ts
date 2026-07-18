import type { ColumnDefinition } from "tabulator-tables";
import {
  FIELD_LABEL,
  type DimensionFieldId,
  type MeasureFieldId,
  type PivotFact,
} from "../../data/pivotMock";

export interface AxisConfig {
  colAxis: DimensionFieldId[];
  rowAxis: DimensionFieldId[];
  values: MeasureFieldId[];
}

interface ColCombo {
  key: string;
  values: string[];
}

function distinctValues(facts: PivotFact[], field: DimensionFieldId): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const f of facts) {
    const v = f[field];
    if (!seen.has(v)) {
      seen.add(v);
      out.push(v);
    }
  }
  return out;
}

function slug(v: string): string {
  return v.replace(/[^a-zA-Z0-9]/g, "_");
}

function fmtNumber(cell: { getValue: () => unknown }): string {
  const v = cell.getValue();
  return typeof v === "number" ? v.toLocaleString() : "";
}

// colAxis 필드들의 실제 조합(예: Date x Channel)을 재귀적으로 뽑아낸다 — 깊이 0(colAxis가
// 비어있음)이면 전체를 한 그룹으로 취급한다.
function buildColCombos(facts: PivotFact[], colAxis: DimensionFieldId[]): ColCombo[] {
  if (colAxis.length === 0) return [{ key: "all", values: [] }];

  function recurse(remaining: DimensionFieldId[], prefixValues: string[], subset: PivotFact[], prefixKey: string): ColCombo[] {
    const [field, ...rest] = remaining;
    const values = distinctValues(subset, field);
    return values.flatMap((v) => {
      const key = `${prefixKey}${prefixKey ? "_" : ""}${slug(v)}`;
      const childSubset = subset.filter((f) => f[field] === v);
      if (rest.length === 0) return [{ key, values: [...prefixValues, v] }];
      return recurse(rest, [...prefixValues, v], childSubset, key);
    });
  }
  return recurse(colAxis, [], facts, "");
}

function buildColumnDefs(colCombos: ColCombo[], colAxis: DimensionFieldId[], values: MeasureFieldId[]): ColumnDefinition[] {
  function leafColumnsFor(combo: ColCombo): ColumnDefinition[] {
    return values.map((vf) => ({
      title: FIELD_LABEL[vf],
      field: `${combo.key}__${vf}`,
      hozAlign: "right",
      headerSort: false,
      formatter: fmtNumber,
      width: 130,
    }));
  }

  if (colAxis.length === 0) {
    return leafColumnsFor(colCombos[0]);
  }

  function group(depth: number, combos: ColCombo[]): ColumnDefinition[] {
    if (depth === colAxis.length - 1) {
      return combos.map((combo) => ({
        title: combo.values[depth],
        columns: leafColumnsFor(combo),
      }));
    }
    const byLabel = new Map<string, ColCombo[]>();
    for (const c of combos) {
      const label = c.values[depth];
      if (!byLabel.has(label)) byLabel.set(label, []);
      byLabel.get(label)!.push(c);
    }
    return Array.from(byLabel.entries()).map(([label, subCombos]) => ({
      title: label,
      columns: group(depth + 1, subCombos),
    }));
  }
  return group(0, colCombos);
}

export function buildPivotColumns(facts: PivotFact[], axis: AxisConfig, rowHeaderTitle: string): ColumnDefinition[] {
  const colCombos = buildColCombos(facts, axis.colAxis);
  const dataCols = axis.values.length > 0 ? buildColumnDefs(colCombos, axis.colAxis, axis.values) : [];
  return [{ title: rowHeaderTitle, field: "rowLabel", width: 220, headerSort: false }, ...dataCols];
}

function sumForCombo(facts: PivotFact[], combo: ColCombo, colAxis: DimensionFieldId[], valueField: MeasureFieldId): number {
  let subset = facts;
  colAxis.forEach((field, i) => {
    subset = subset.filter((f) => f[field] === combo.values[i]);
  });
  return subset.reduce((acc, f) => acc + f[valueField], 0);
}

export function buildPivotRows(facts: PivotFact[], axis: AxisConfig): Record<string, unknown>[] {
  const colCombos = buildColCombos(facts, axis.colAxis);

  function makeRow(label: string, subset: PivotFact[]): Record<string, unknown> {
    const row: Record<string, unknown> = { rowLabel: label };
    for (const combo of colCombos) {
      for (const vf of axis.values) {
        row[`${combo.key}__${vf}`] = sumForCombo(subset, combo, axis.colAxis, vf);
      }
    }
    return row;
  }

  function recurse(remaining: DimensionFieldId[], subset: PivotFact[]): Record<string, unknown>[] {
    const [field, ...rest] = remaining;
    const values = distinctValues(subset, field);
    return values.map((v) => {
      const childSubset = subset.filter((f) => f[field] === v);
      const row = makeRow(v, childSubset);
      if (rest.length > 0) {
        row._children = recurse(rest, childSubset);
      }
      return row;
    });
  }

  if (axis.rowAxis.length === 0) return [makeRow("__TOTAL__", facts)];
  return recurse(axis.rowAxis, facts);
}
