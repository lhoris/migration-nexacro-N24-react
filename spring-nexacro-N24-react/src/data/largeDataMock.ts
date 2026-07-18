// 원본 grid::largedata.xfdl은 dsList/dsList00 Dataset을 svc::largedata 서버 트랜잭션으로
// 채운다(first_name/last_name/email/gender/married/date/money/number 8컬럼, 행 데이터 없이
// ColumnInfo만 있음). 이 프로젝트엔 그 백엔드가 없다 — 원본 화면에서 직접 "조회" 버튼을
// 눌러도 그리드가 계속 비어있다(Playwright로 확인, 10500 피벗과 동일한 패턴). 사용자가 이미
// 피벗 화면에서 "클라이언트 목업 생성"으로 방향을 정했으므로 여기서도 동일하게 적용한다 —
// 대용량(1만/5만/10만행) 렌더링 성능을 보여주는 게 이 화면의 요점이라 실제 행 수만큼
// 생성해야 의미가 있다.

const FIRST_NAMES = [
  "James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael", "Linda",
  "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica",
  "Thomas", "Sarah", "Charles", "Karen",
];
const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas",
];
const DOMAINS = ["example.com", "mail.com", "test.org", "sample.net"];
const GENDERS = ["Female", "Male"] as const;
const MARRIED = ["married", "single"] as const;

export interface LargeDataRow {
  no: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  married: string;
  date: string;
  money: number;
  number: number;
}

function randomDate(): string {
  const start = new Date(2020, 0, 1).getTime();
  const end = new Date(2026, 6, 18).getTime();
  const d = new Date(start + Math.random() * (end - start));
  return d.toISOString().slice(0, 10);
}

export function generateLargeDataRows(count: number): LargeDataRow[] {
  const rows: LargeDataRow[] = new Array(count);
  for (let i = 0; i < count; i++) {
    const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    const domain = DOMAINS[Math.floor(Math.random() * DOMAINS.length)];
    rows[i] = {
      no: i + 1,
      first_name: firstName,
      last_name: lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@${domain}`,
      gender: GENDERS[Math.floor(Math.random() * GENDERS.length)],
      married: MARRIED[Math.floor(Math.random() * MARRIED.length)],
      date: randomDate(),
      money: Math.round(1000 + Math.random() * 999000),
      number: Math.round(Math.random() * 100),
    };
  }
  return rows;
}

export const ROW_COUNT_OPTIONS = [10000, 50000, 100000];
