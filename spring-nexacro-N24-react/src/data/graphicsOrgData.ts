// 원본 comp::graphics.xfdl의 dsOrg/dsDirection Dataset(_setContents)에서 그대로 추출한
// 실제 데이터. OrganizationChart.xjs가 이 Dataset을 트리로 엮어 조직도를 그린다.
// (컬럼명이 실제로는 뒤바뀐 상태다 — ORG_NM에 사람 이름이, EMP_NM에 부서명이 들어있다.
// 원본 데이터 그대로 옮겼다.)

export interface OrgRow {
  orgNum: string;
  level: number;
  orgNm: string; // 실제로는 사람 이름
  empNm: string; // 실제로는 부서명
  uperOrgNum: string;
}

export const ORG_ROWS: OrgRow[] = [
  { level: 0, orgNum: "010000", orgNm: "Aaron", uperOrgNum: "0", empNm: "Internal Medicine" },
  { level: 1, orgNum: "010300", orgNm: "Abraham", uperOrgNum: "010000", empNm: "Internal Medicine" },
  { level: 2, orgNum: "010301", orgNm: "Adam", uperOrgNum: "010300", empNm: "Internal Medicine" },
  { level: 1, orgNum: "010200", orgNm: "Sophia", uperOrgNum: "010000", empNm: "Endocrinology" },
  { level: 2, orgNum: "010201", orgNm: "Silvester", uperOrgNum: "010200", empNm: "Endocrinology" },
  { orgNum: "010202", level: 2, uperOrgNum: "010200", orgNm: "Edward", empNm: "Endocrinology" },
  { orgNm: "Edwin", empNm: "Gastroenterology", level: 1, orgNum: "011200", uperOrgNum: "010000" },
  { orgNm: "Gregory", empNm: "Gastroenterology", level: 2, orgNum: "011201", uperOrgNum: "011200" },
  { orgNm: "Henry", empNm: "Gastroenterology", level: 2, orgNum: "011202", uperOrgNum: "011200" },
  { orgNm: "Martha", empNm: "Cardiology", level: 1, orgNum: "011400", uperOrgNum: "010000" },
  { orgNm: "Lucy", empNm: "Cardiology", level: 2, orgNum: "011401", uperOrgNum: "011400" },
  { orgNm: "Kenneth", empNm: "Cardiology", level: 2, orgNum: "011402", uperOrgNum: "011400" },
  { orgNm: "John", empNm: "Blood Tumor", level: 1, orgNum: "012300", uperOrgNum: "010000" },
  { orgNm: "Nicholas", empNm: "Blood Tumor", level: 2, orgNum: "012301", uperOrgNum: "012300" },
  { orgNm: "Noel", empNm: "Blood Tumor", level: 2, orgNum: "012302", uperOrgNum: "012300" },
  { orgNm: "Dorothy", empNm: "Surgery", level: 0, orgNum: "020000", uperOrgNum: "0" },
  { orgNm: "Edith", empNm: "Surgery", level: 1, orgNum: "021800", uperOrgNum: "020000" },
  { orgNm: "Cordelia", empNm: "Surgery", level: 2, orgNum: "021801", uperOrgNum: "021800" },
  { orgNm: "Catherine", empNm: "Colon and Rectal Surgery", level: 1, orgNum: "020400", uperOrgNum: "020000" },
  { orgNm: "Bridget", empNm: "Colon and Rectal Surgery", level: 2, orgNum: "020401", uperOrgNum: "020400" },
  { orgNm: "Oliver", empNm: "Colon and Rectal Surgery", level: 2, orgNum: "020402", uperOrgNum: "020400" },
  { orgNm: "Oscar", empNm: "Urology", level: 1, orgNum: "020900", uperOrgNum: "020000" },
  { orgNm: "Peter", empNm: "Urology", level: 2, orgNum: "020901", uperOrgNum: "020900" },
  { orgNm: "Richard", empNm: "Urology", level: 2, orgNum: "020902", uperOrgNum: "020900" },
  { orgNm: "Thomas", empNm: "Plastic Surgery", level: 1, orgNum: "021100", uperOrgNum: "020000" },
  { orgNm: "Vincent", empNm: "Plastic Surgery", level: 2, orgNum: "021101", uperOrgNum: "021100" },
  { orgNm: "Vivian", empNm: "Plastic Surgery", level: 2, orgNum: "021102", uperOrgNum: "021100" },
  { orgNm: "Wallace", empNm: "Otorhinolaryngology", level: 1, orgNum: "021700", uperOrgNum: "020000" },
  { orgNm: "Walter", empNm: "Otorhinolaryngology", level: 2, orgNum: "021701", uperOrgNum: "021700" },
  { orgNm: "Issac", empNm: "Otorhinolaryngology", level: 2, orgNum: "021702", uperOrgNum: "021700" },
  { orgNm: "Jacob", empNm: "Orthopedic Surgery", level: 1, orgNum: "022000", uperOrgNum: "020000" },
  { orgNm: "Harold", empNm: "Orthopedic Surgery", level: 2, orgNum: "022001", uperOrgNum: "022000" },
  { orgNm: "Irene", empNm: "Orthopedic Surgery", level: 2, orgNum: "022002", uperOrgNum: "022000" },
  { orgNm: "Any", empNm: "Health Medicine", level: 0, orgNum: "000000", uperOrgNum: "0" },
  { orgNm: "Alice", empNm: "Health Medicine", level: 1, orgNum: "000100", uperOrgNum: "000000" },
  { orgNm: "Rebecca", empNm: "Health Medicine", level: 2, orgNum: "000101", uperOrgNum: "000100" },
  { orgNm: "Rosemary", empNm: "Health Medicine", level: 2, orgNum: "000102", uperOrgNum: "000100" },
  { orgNm: "Enoch", empNm: "Anatomycal Pathology", level: 1, orgNum: "000800", uperOrgNum: "000000" },
  { orgNm: "Evelyn", empNm: "Anatomycal Pathology", level: 2, orgNum: "000801", uperOrgNum: "000800" },
  { orgNm: "Michael", empNm: "Anatomycal Pathology", level: 2, orgNum: "000802", uperOrgNum: "000800" },
];

export type Direction = "horizontal" | "vertical";

export const DIRECTION_OPTIONS: { code: Direction; label: string }[] = [
  { code: "horizontal", label: "Horizontal" },
  { code: "vertical", label: "Vertical" },
];
