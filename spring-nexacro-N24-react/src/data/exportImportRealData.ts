// Nexacro grid::export.xfdl의 dsList Dataset(_setContents)에서 그대로 추출한 실제 데이터. 11행 전부.
export interface ExportProduct {
  no: number;
  productId: string;
  productName: string;
  unitPrice: number;
  qty: number;
  notes: string;
}

export const EXPORT_PRODUCTS: ExportProduct[] = [
  { no: 1, productId: "A10001", productName: "TV", unitPrice: 2000000, qty: 1, notes: "" },
  { no: 2, productId: "A10002", productName: "Tablet", unitPrice: 900000, qty: 3, notes: "" },
  { no: 3, productId: "A10003", productName: "Phone", unitPrice: 1500000, qty: 8, notes: "" },
  { no: 4, productId: "A10004", productName: "Keyboard", unitPrice: 20000, qty: 5, notes: "" },
  { no: 5, productId: "A10005", productName: "Mouse", unitPrice: 30000, qty: 3, notes: "" },
  { no: 6, productId: "A10006", productName: "Watch", unitPrice: 500000, qty: 2, notes: "" },
  { no: 7, productId: "A10007", productName: "Laptop", unitPrice: 2200000, qty: 10, notes: "" },
  { no: 8, productId: "A10008", productName: "Monitor", unitPrice: 200000, qty: 10, notes: "" },
  { no: 9, productId: "B10001", productName: "Notebook", unitPrice: 5000, qty: 30, notes: "" },
  { no: 10, productId: "B10002", productName: "Tumbler", unitPrice: 30000, qty: 5, notes: "" },
  { no: 11, productId: "B10003", productName: "Pen", unitPrice: 2000, qty: 200, notes: "" },
];
