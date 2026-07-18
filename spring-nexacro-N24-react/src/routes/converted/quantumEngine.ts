import type { QuantumRecord } from "../../data/quantumRealData";

export type QuantumFieldId = "first_name" | "last_name" | "email" | "gender" | "ip_address" | "state";

// 원본 fnSetSubSumText: 그룹 헤더 행은 "그룹필드값(자식개수)", 리프(실제 데이터) 행은
// 항상 "first_name(0)"을 보여준다 — dataset.getColumn(row, arrGroupId[length-level])에서
// 리프 레벨(level 0)일 때 인덱스가 배열 범위를 벗어나 first_name으로 폴백되는 원본의
// 실제 동작이다(Playwright로 1단/2단 그룹 모두 실측 확인 — 버그처럼 보이지만 원본 데모
// 사이트에서 항상 이렇게 동작하고 에러도 안 나서, 지킬 fidelity로 판단해 그대로 재현한다).
export interface QuantumRow extends Partial<QuantumRecord> {
  rowLabel: string;
  _children?: QuantumRow[];
}

function groupBy(records: QuantumRecord[], field: QuantumFieldId): Map<string, QuantumRecord[]> {
  const map = new Map<string, QuantumRecord[]>();
  for (const r of records) {
    const key = r[field];
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(r);
  }
  return map;
}

export function buildQuantumRows(records: QuantumRecord[], groupFields: QuantumFieldId[]): QuantumRow[] {
  if (groupFields.length === 0) {
    return records.map((r) => ({ ...r, rowLabel: "" }));
  }

  function recurse(subset: QuantumRecord[], depth: number): QuantumRow[] {
    if (depth === groupFields.length) {
      return subset.map((r) => ({ ...r, rowLabel: `${r.first_name}(0)` }));
    }
    const field = groupFields[depth];
    const groups = groupBy(subset, field);
    return Array.from(groups.entries()).map(([value, groupRecords]) => ({
      rowLabel: `${value}(${groupRecords.length})`,
      _children: recurse(groupRecords, depth + 1),
    }));
  }

  return recurse(records, 0);
}
