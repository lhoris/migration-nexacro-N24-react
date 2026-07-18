// Nexacro grid::personalization.xfdl의 ds_grid Dataset(_setContents)에서 그대로 추출한
// 실제 데이터. 7행 전부.
export interface PersonalizationRow {
  id: number;
  name: string;
  address: string;
  amount: number;
  date: string;
  company: string;
  approved: boolean;
}

export const PERSONALIZATION_ROWS: PersonalizationRow[] = [
  { id: 1, name: "Parry", address: "73 Bowman Parkway", amount: 11235, date: "2020-08-01", company: "Ratke and Sons", approved: true },
  { id: 2, name: "Aland", address: "971 Melrose Hill", amount: 15698, date: "2020-08-01", company: "Littel and Sons", approved: true },
  { id: 3, name: "Baxy", address: "685 Sutherland Court", amount: 15756, date: "2020-08-02", company: "Pfeffer-Becker", approved: true },
  { id: 4, name: "Lyndsey", address: "8888 Daystar Avenue", amount: 15756, date: "2020-08-02", company: "Marquardt LLC", approved: false },
  { id: 5, name: "Jennifer", address: "5872 American Ash Alley", amount: 23317, date: "2020-08-03", company: "Nader Group", approved: true },
  { id: 6, name: "Fawnia", address: "531 1st Plaza", amount: 15756, date: "2020-08-03", company: "Huels and Sons", approved: false },
  { id: 7, name: "Walsh", address: "03970 Kinsman Hill", amount: 23317, date: "2020-08-04", company: "Hartmann-Reinger", approved: true },
];
