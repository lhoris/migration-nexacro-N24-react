// 원본 grid::pivot.xfdl은 svc::pivotdata 트랜잭션으로 서버에서 실제 판매 트랜잭션(3만~40만행)을
// 받아와 NxPivot 그리드에 렌더링한다. 이 프로젝트엔 그 백엔드가 없다 — 원본 화면에서 직접
// "조회" 버튼을 눌러도 "FAILED" 알럿만 뜬다(Playwright로 확인). 그래서 다른 화면들(Pagination/
// Personalization 등)처럼 xfdl에 임베딩된 실데이터를 추출하는 대신, 여기서는 동등한 형태의
// 목업 집계 데이터를 클라이언트에서 직접 생성한다.
//
// 차원(dimension) 6개월 x 3채널 x 4영업소 x 2팀 = 144개 조합에 대해, 사용자가 고른 rowCount
// (원본 콤보의 3만/10만/20만/40만 — 서버가 실제로 조회했을 원본 트랜잭션 건수)에 비례한 랜덤
// 합계를 만든다. rowCount개의 로우를 실제로 만들지는 않는다 — 어차피 전부 SUM으로 집계되어
// 그리드엔 144개 조합만 보이기 때문에, 건수는 합계 크기와 조회 소요시간 시뮬레이션에만 반영한다.

export type DimensionFieldId = "date" | "channel" | "salesDept" | "department";
export type MeasureFieldId =
  | "totalSales"
  | "totalReturnSales"
  | "overchargePrice"
  | "promotionAmount"
  | "netSales";
export type FieldId = DimensionFieldId | MeasureFieldId;

// 실제 xfdl의 NxPivot _setContents config.colAxis/rowAxis/values의 itemText 그대로 —
// TEXT()/messageid로 감싸지 않은 순수 리터럴이라 langCode와 무관하게 항상 영문으로 표시된다
// (Playwright로 한글 로케일에서도 "Date"/"Channel"/"Sales Depart..." 영문으로 뜨는 것 확인).
export const FIELD_LABEL: Record<FieldId, string> = {
  date: "Date",
  channel: "Channel",
  salesDept: "Sales Department",
  department: "Department",
  totalSales: "Total Sales",
  totalReturnSales: "Total Return Sales",
  overchargePrice: "Overcharge Price",
  promotionAmount: "Promotion Amount",
  netSales: "Net Sales",
};

export const DIMENSION_FIELDS: DimensionFieldId[] = ["date", "channel", "salesDept", "department"];
export const MEASURE_FIELDS: MeasureFieldId[] = [
  "totalSales",
  "totalReturnSales",
  "overchargePrice",
  "promotionAmount",
  "netSales",
];

export function isDimensionField(id: FieldId): id is DimensionFieldId {
  return (DIMENSION_FIELDS as string[]).includes(id);
}

export function isMeasureField(id: FieldId): id is MeasureFieldId {
  return (MEASURE_FIELDS as string[]).includes(id);
}

const DATES = ["2026-02-01", "2026-03-01", "2026-04-01", "2026-05-01", "2026-06-01", "2026-07-01"];
const CHANNELS = ["Online", "Offline", "Mobile"];
const SALES_DEPTS = ["Seoul Sales", "Busan Sales", "Daegu Sales", "Incheon Sales"];
const DEPARTMENTS = ["Team 1", "Team 2"];

export interface PivotFact {
  date: string;
  channel: string;
  salesDept: string;
  department: string;
  totalSales: number;
  totalReturnSales: number;
  overchargePrice: number;
  promotionAmount: number;
  netSales: number;
}

export const ROW_COUNT_OPTIONS = [30000, 100000, 200000, 400000];

export function generatePivotFacts(rowCount: number): PivotFact[] {
  const comboCount = DATES.length * CHANNELS.length * SALES_DEPTS.length * DEPARTMENTS.length;
  const facts: PivotFact[] = [];
  for (const date of DATES) {
    for (const channel of CHANNELS) {
      for (const salesDept of SALES_DEPTS) {
        for (const department of DEPARTMENTS) {
          const avgTicket = 80_000 + Math.random() * 70_000;
          const comboTxnCount = (rowCount / comboCount) * (0.7 + Math.random() * 0.6);
          const totalSales = Math.round(comboTxnCount * avgTicket);
          const totalReturnSales = Math.round(totalSales * (0.03 + Math.random() * 0.06));
          const overchargePrice = Math.round(totalSales * (0.01 + Math.random() * 0.015));
          const promotionAmount = Math.round(totalSales * (0.02 + Math.random() * 0.03));
          const netSales = totalSales - totalReturnSales - overchargePrice - promotionAmount;
          facts.push({
            date,
            channel,
            salesDept,
            department,
            totalSales,
            totalReturnSales,
            overchargePrice,
            promotionAmount,
            netSales,
          });
        }
      }
    }
  }
  return facts;
}
