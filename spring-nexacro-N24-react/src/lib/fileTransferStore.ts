// comp::filetransfer.xfdl(메뉴 "파일 전송", 실제 menu_id 20300)이 호출하는 실제 서버
// 트랜잭션(svc::getFileList/uploadFiles/downloadFile/svc::deleteFile)이 이 프로젝트엔 없다
// (Playwright로 원본 "조회" 버튼을 눌러 404 확인 — Pivot/Export&Import와 같은 케이스).
// 사용자가 "브라우저 저장소로 실제 동작하게 만들자"를 선택해 IndexedDB로 실제 업로드
// 파일(Blob 포함)을 영구 저장하고, 조회/다운로드/삭제가 전부 실제로 동작하게 구현했다.

const DB_NAME = "nexacro-filetransfer";
const DB_VERSION = 1;
const STORE_NAME = "files";

export interface StoredFile {
  id: number;
  name: string;
  size: number;
  blob: Blob;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function listStoredFiles(): Promise<StoredFile[]> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const req = tx.objectStore(STORE_NAME).getAll();
    req.onsuccess = () => resolve(req.result as StoredFile[]);
    req.onerror = () => reject(req.error);
  });
}

export async function addStoredFile(name: string, size: number, blob: Blob): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).add({ name, size, blob });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function deleteStoredFile(id: number): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// 원본 fnGetFileSize 그대로: 1024 미만이 될 때까지 KB→YB로 나눠가며 소수점 3자리로 표시.
export function formatFileSize(filesize: number): string {
  let output = `${filesize} bytes`;
  const multiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  for (let n = 0, approx = filesize / 1024; approx > 1; approx /= 1024, n++) {
    output = `${approx.toFixed(3)} ${multiples[n]}`;
  }
  return output;
}
