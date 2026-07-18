// Nexacro grid::dragndrop.xfdl의 dsGrid Dataset(_setContents)은 grid::quantum.xfdl의 dsGrid와
// 같은 6개 컬럼/500행 샘플 데이터다. 같은 원본 데이터이므로 중복 복사하지 않고 재사용한다.
import { QUANTUM_RECORDS, type QuantumRecord } from "./quantumRealData";

export type DragDropRecord = QuantumRecord;
export type DragDropField = keyof DragDropRecord;

export const DRAGDROP_FIELDS: DragDropField[] = ["first_name", "last_name", "email", "gender", "ip_address", "state"];

export const DRAGDROP_RECORDS: DragDropRecord[] = QUANTUM_RECORDS;
