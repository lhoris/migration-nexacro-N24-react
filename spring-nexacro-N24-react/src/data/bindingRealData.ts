// 원본 comp::binding.xfdl의 Dataset00/Dataset01(_setContents)에서 그대로 추출한 실제 데이터.
// Jennifer의 원본 생년월일 값 "1980331"(7자리)은 월 앞자리 0이 빠진 오타로 판단해
// "19800331"(1980-03-31)로 수정했다 — 원본은 이 오타를 그대로 파싱해 그리드/달력에
// "1982-09-01"로 잘못 표시되는 버그가 있었음(Playwright로 실측 확인, 사용자 확인 후 수정).
export interface BindingRow {
  name: string;
  gender: "M" | "F";
  birthday: string; // YYYYMMDD
  married: boolean;
  remark: string;
}

export const GENDER_OPTIONS: { code: "M" | "F"; label: string }[] = [
  { code: "M", label: "Male" },
  { code: "F", label: "Female" },
];

export const BINDING_ROWS: BindingRow[] = [
  { name: "Parry", gender: "M", birthday: "19851128", married: false, remark: "I am Parry." },
  { name: "Jennifer", gender: "F", birthday: "19800331", married: true, remark: "I am Jennifer." },
  { name: "Aland", gender: "M", birthday: "19770105", married: false, remark: "I am Aland." },
  { name: "Rose", gender: "F", birthday: "19911005", married: true, remark: "I am Rose." },
  { name: "Lisa", gender: "F", birthday: "19880420", married: true, remark: "I am Lisa." },
];

export function formatBirthday(raw: string): string {
  if (raw.length !== 8) return raw;
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}
