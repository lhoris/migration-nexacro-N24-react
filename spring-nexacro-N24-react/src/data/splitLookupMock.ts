// 원본 grid::progressload.xfdl은 dsList(set_progressload("true"))를 svc::progressload.do
// 서버 트랜잭션으로 채운다 — 서버가 row 단위로 데이터를 분할 전송하면 dsList_onload가 배치마다
// 반복 호출되어 "조회 건수 X / 100,000 건" 카운터가 점점 올라가는 방식이다. 이 프로젝트엔 그
// 백엔드가 없다(원본에서 직접 조회해도 0/100,000에서 멈춤 — Playwright로 확인, 10500/10600과
// 동일한 패턴). 이미 정해둔 방침대로 클라이언트에서 동등한 배치 분할 로딩을 흉내낸다.

const FIRST_NAMES = [
  "James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael", "Linda",
  "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica",
];
const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez",
];
const DOMAINS = ["example.com", "mail.com", "test.org", "sample.net"];
const GENDERS = ["Female", "Male"];
const CITIES = [
  "Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan",
];
const COLORS = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Teal", "Maroon"];

export interface SplitLookupRow {
  no: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  city: string;
  color: string;
}

function randomIp(): string {
  return `${1 + Math.floor(Math.random() * 254)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${1 + Math.floor(Math.random() * 254)}`;
}

export function generateSplitLookupBatch(startNo: number, count: number): SplitLookupRow[] {
  const rows: SplitLookupRow[] = new Array(count);
  for (let i = 0; i < count; i++) {
    const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    const domain = DOMAINS[Math.floor(Math.random() * DOMAINS.length)];
    const no = startNo + i;
    rows[i] = {
      no,
      first_name: firstName,
      last_name: lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${no}@${domain}`,
      gender: GENDERS[Math.floor(Math.random() * GENDERS.length)],
      ip_address: randomIp(),
      city: CITIES[Math.floor(Math.random() * CITIES.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }
  return rows;
}

export const TOTAL_ROW_COUNT = 100_000;
export const BATCH_SIZE = 10_000;
