// 원본 comp::graphics.xfdl의 dsItems/dsLines Dataset(_setContents)에서 그대로 추출한
// 실제 데이터. Workflow.xjs가 이 두 Dataset을 읽어 플로우차트를 그린다.

export type WorkflowNodeType = "type01" | "type02" | "type03";

export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  title: string;
  x: number;
  y: number;
}

export interface WorkflowLine {
  id: string;
  from: string;
  fromPosition: "left" | "right" | "top" | "bottom";
  to: string;
  toPosition: "left" | "right" | "top" | "bottom";
  startCap?: boolean;
  endCap?: boolean;
}

export const WORKFLOW_ITEMS: WorkflowNode[] = [
  { id: "01", type: "type01", title: "customer visit", x: 400, y: 0 },
  { id: "02", type: "type01", title: "Investment trends identified", x: 600, y: 0 },
  { id: "03", type: "type02", title: "Existing customers", x: 600, y: 50 },
  { id: "04", type: "type02", title: "New customer on the bank", x: 400, y: 50 },
  { id: "05", type: "type01", title: "New customer registration", x: 200, y: 100 },
  { id: "06", type: "type01", title: "Opening a bankbook", x: 200, y: 150 },
  { id: "07", type: "type01", title: "Product consultation", x: 400, y: 150 },
  { id: "08", type: "type01", title: "Subscribe to the product", x: 400, y: 200 },
  { id: "09", type: "type02", title: "Condition change status", x: 600, y: 200 },
  { id: "10", type: "type01", title: "New move-in", x: 800, y: 100 },
  { id: "11", type: "type01", title: "Fund conversion", x: 800, y: 150 },
  { id: "12", type: "type01", title: "name change", x: 800, y: 200 },
  { id: "13", type: "type01", title: "Private equity fund reservation", x: 800, y: 250 },
  { id: "14", type: "type01", title: "Deposit", x: 400, y: 350 },
  { id: "15", type: "type02", title: "Transaction cancellation status", x: 400, y: 400 },
  { id: "16", type: "type02", title: "Before base time", x: 200, y: 400 },
  { id: "17", type: "type01", title: "Application for approval", x: 0, y: 450 },
  { id: "18", type: "type01", title: "Cancellation of transaction", x: 200, y: 450 },
  { id: "19", type: "type02", title: "Fund type", x: 400, y: 500 },
  { id: "20", type: "type01", title: "Multi-account deposit", x: 200, y: 550 },
  { id: "21", type: "type01", title: "MMF Deposit", x: 200, y: 600 },
  { id: "22", type: "type01", title: "General fund deposit", x: 200, y: 650 },
  { id: "23", type: "type01", title: "Withdrawal/Cancellation", x: 600, y: 350 },
  { id: "24", type: "type02", title: "Transaction cancellation status", x: 600, y: 400 },
  { id: "25", type: "type02", title: "Before base time", x: 800, y: 400 },
  { id: "26", type: "type01", title: "Withdrawal amount check", x: 600, y: 450 },
  { id: "27", type: "type01", title: "Cancellation of transaction", x: 800, y: 450 },
  { id: "28", type: "type02", title: "Fund type", x: 600, y: 500 },
  { id: "29", type: "type01", title: "Withdrawal termination", x: 800, y: 500 },
  { id: "30", type: "type01", title: "General withdrawal cancellation", x: 800, y: 550 },
  { id: "31", type: "type03", title: "Y", x: 310, y: 40 },
  { id: "32", type: "type03", title: "N", x: 410, y: 80 },
  { id: "33", type: "type03", title: "New", x: 500, y: 40 },
  { id: "34", type: "type03", title: "Existing", x: 620, y: 80 },
  { id: "35", type: "type03", title: "Y", x: 675, y: 190 },
  { id: "36", type: "type03", title: "N", x: 610, y: 230 },
  { id: "37", type: "type03", title: "After base time-Before closing work", x: 50, y: 380 },
  { id: "38", type: "type03", title: "Before base time", x: 250, y: 425 },
  { id: "39", type: "type03", title: "Y", x: 310, y: 390 },
  { id: "40", type: "type03", title: "N", x: 410, y: 430 },
  { id: "41", type: "type03", title: "Y", x: 670, y: 390 },
  { id: "42", type: "type03", title: "N", x: 610, y: 425 },
  { id: "43", type: "type03", title: "After base time:Unable to cancel", x: 920, y: 400 },
  { id: "44", type: "type03", title: "Before base time", x: 850, y: 425 },
];

export const WORKFLOW_LINES: WorkflowLine[] = [
  { id: "01", from: "01", fromPosition: "right", to: "02", toPosition: "left", startCap: true, endCap: true },
  { id: "02", from: "02", fromPosition: "bottom", to: "03", toPosition: "top", startCap: true, endCap: true },
  { id: "03", from: "03", fromPosition: "left", to: "04", toPosition: "right", endCap: true },
  { id: "04", from: "03", fromPosition: "bottom", to: "09", toPosition: "top", endCap: true },
  { id: "05", from: "04", fromPosition: "left", to: "05", toPosition: "top", endCap: true },
  { id: "06", from: "04", fromPosition: "bottom", to: "07", toPosition: "top", endCap: true },
  { id: "07", from: "05", fromPosition: "bottom", to: "06", toPosition: "top", endCap: true },
  { id: "08", from: "06", fromPosition: "right", to: "07", toPosition: "left", endCap: true },
  { id: "09", from: "07", fromPosition: "bottom", to: "08", toPosition: "top", endCap: true },
  { id: "10", from: "08", fromPosition: "right", to: "09", toPosition: "left" },
  { id: "11", from: "09", fromPosition: "right", to: "10", toPosition: "left" },
  { id: "12", from: "09", fromPosition: "right", to: "11", toPosition: "left" },
  { id: "13", from: "09", fromPosition: "right", to: "12", toPosition: "left" },
  { id: "14", from: "09", fromPosition: "right", to: "13", toPosition: "left" },
  { id: "15", from: "09", fromPosition: "bottom", to: "14", toPosition: "top", endCap: true },
  { id: "16", from: "09", fromPosition: "bottom", to: "23", toPosition: "top", endCap: true },
  { id: "17", from: "14", fromPosition: "bottom", to: "15", toPosition: "top" },
  { id: "18", from: "15", fromPosition: "left", to: "16", toPosition: "right" },
  { id: "19", from: "15", fromPosition: "bottom", to: "19", toPosition: "top", endCap: true },
  { id: "20", from: "16", fromPosition: "left", to: "17", toPosition: "top", endCap: true },
  { id: "21", from: "16", fromPosition: "bottom", to: "18", toPosition: "top", endCap: true },
  { id: "22", from: "17", fromPosition: "right", to: "18", toPosition: "left", endCap: true },
  { id: "23", from: "19", fromPosition: "left", to: "20", toPosition: "right" },
  { id: "24", from: "19", fromPosition: "left", to: "21", toPosition: "right" },
  { id: "25", from: "19", fromPosition: "left", to: "22", toPosition: "right" },
  { id: "26", from: "23", fromPosition: "bottom", to: "24", toPosition: "top" },
  { id: "27", from: "24", fromPosition: "right", to: "25", toPosition: "left" },
  { id: "28", from: "24", fromPosition: "bottom", to: "26", toPosition: "top", endCap: true },
  { id: "29", from: "25", fromPosition: "bottom", to: "27", toPosition: "top", endCap: true },
  { id: "30", from: "26", fromPosition: "bottom", to: "28", toPosition: "top", endCap: true },
  { id: "31", from: "28", fromPosition: "right", to: "29", toPosition: "left" },
  { id: "32", from: "28", fromPosition: "right", to: "30", toPosition: "left" },
];
