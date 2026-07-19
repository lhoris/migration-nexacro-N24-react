import { useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator, type CellComponent, type ColumnDefinition } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import { useLanguage } from "../../shell/LanguageContext";
import { addStoredFile, deleteStoredFile, formatFileSize, listStoredFiles } from "../../lib/fileTransferStore";
import "./fileTransfer.css";

type Translate = (key: string, fallback?: string) => string;

// 원본 nMaxFileSize(2 MByte) 그대로.
const MAX_FILE_SIZE = 2_000_000;

interface UploadRow {
  id: number;
  file: File;
  name: string;
  size: number;
  sizeText: string;
  checked: boolean;
}

interface DownloadRow {
  id: number;
  name: string;
  size: number;
  sizeText: string;
  checked: boolean;
}

/**
 * Nexacro comp::filetransfer.xfdl(메뉴 "파일 전송", 실제 menu_id 20300)을 React로 옮긴 화면.
 * 원본은 svc::getFileList/uploadFiles/downloadFile/svc::deleteFile 실제 서버 트랜잭션을
 * 호출하는데, 이 프로젝트엔 그 백엔드가 없다(Playwright로 원본 "조회" 버튼을 직접 눌러
 * 404 확인 — Pivot/Export&Import와 같은 "리소스 자체가 없음" 케이스). 사용자에게 물어봤고
 * "브라우저 저장소(IndexedDB)로 실제 동작하게 만들자"를 선택해 실제 업로드 파일(Blob
 * 포함)을 IndexedDB에 영구 저장하고 조회/다운로드/삭제가 전부 실제로 동작하게 구현했다.
 *
 * 원본 로직 그대로 재현한 것들:
 * - 파일당 최대 2MB, 초과 시 "첨부파일 최대용량은 2 MByte 입니다." 알럿(비지역화 원문).
 * - 같은 이름 파일 중복 추가 시 "이미추가된 파일이 있습니다." 알럿.
 * - 업로드 그리드 삭제 버튼: 헤더 체크(전체선택) 상태면 전체 삭제, 개별 체크된 행이 있으면
 *   그 행들만 삭제, 아무 것도 안 체크했으면 마지막으로 클릭(포커스)한 행 하나만 삭제
 *   (`btnDel_onclick`의 3단 분기 그대로).
 * - 전송 완료 시 "전송완료" 알럿, 다운로드할 파일 0개 선택 시 "다운로드 할 파일을
 *   선택하세요." 알럿 — 전부 원본 소스의 비지역화 리터럴 그대로.
 * - 다운로드 그리드 행 더블클릭(이름/사이즈 칸) 시 그 파일 하나만 즉시 다운로드, DEL
 *   아이콘 칸 클릭 시 확인 없이 즉시 삭제 — 원본 `oncelldblclick`/`oncellclick` 그대로.
 * - 파일 크기 표시 포맷(`fnGetFileSize`, 소수점 3자리)도 그대로.
 *
 * 원본과 다르게 판단한 것 (사용자에게 보고할 부분): 여러 파일을 동시에 다운로드하면
 * 원본은 zip으로 묶어 내려주지만, 여기서는 zip 압축 라이브러리를 새로 추가하는 대신
 * 선택한 파일을 각각 개별 다운로드한다(실제로 전부 받아지는 결과는 동일).
 */
export function FileTransfer() {
  const { t } = useLanguage();

  return (
    <main className="work">
      <div className="work-card react ft-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#20300">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="ft-page-title">{t("comp.filetransfer")}</h1>

        <FileUploadSection t={t} />
        <FileDownloadSection t={t} />

        <DescriptionSection t={t} />
      </div>
    </main>
  );
}

let nextUploadId = 1;

function FileUploadSection({ t }: { t: Translate }) {
  const [rows, setRows] = useState<UploadRow[]>([]);
  const focusedIdRef = useRef<number | null>(null);
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  // 파일 추가 시 alert(중복/용량초과)이 있는데, 이 부수효과를 setRows 업데이터 함수
  // 안에 두면 React 18 StrictMode가 업데이터의 순수성을 검사하려고 일부러 두 번
  // 호출해서 alert도 두 번 뜬다 — 그래서 현재 목록은 rowsRef(항상 최신 rows를 담아두는
  // ref)로 미리 읽어 부수효과를 setRows 밖에서 한 번만 실행하고, setRows엔 순수한
  // 배열만 넘긴다.
  const addFiles = (files: FileList | File[]) => {
    const list = Array.from(files);
    const existingNames = new Set(rowsRef.current.map((r) => r.name));
    const toAdd: UploadRow[] = [];
    for (const file of list) {
      if (existingNames.has(file.name)) {
        window.alert("이미추가된 파일이 있습니다.");
        continue;
      }
      if (file.size > MAX_FILE_SIZE) {
        window.alert("첨부파일 최대용량은 2 MByte 입니다.");
        continue;
      }
      existingNames.add(file.name);
      toAdd.push({ id: nextUploadId++, file, name: file.name, size: file.size, sizeText: formatFileSize(file.size), checked: false });
    }
    if (toAdd.length > 0) setRows((prev) => [...prev, ...toAdd]);
  };

  const toggleRow = (id: number) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, checked: !r.checked } : r)));
  };

  const toggleAll = () => {
    setRows((prev) => {
      const allChecked = prev.length > 0 && prev.every((r) => r.checked);
      return prev.map((r) => ({ ...r, checked: !allChecked }));
    });
  };

  const buildColumns = (): ColumnDefinition[] => {
    const allChecked = rowsRef.current.length > 0 && rowsRef.current.every((r) => r.checked);
    return [
      {
        title: "",
        field: "checked",
        width: 44,
        hozAlign: "center",
        headerHozAlign: "center",
        headerSort: false,
        formatter: (cell) => `<input type="checkbox" class="ft-checkbox" ${cell.getValue() ? "checked" : ""} />`,
        titleFormatter: () => `<input type="checkbox" class="ft-checkbox" ${allChecked ? "checked" : ""} />`,
        cellClick: (_e, cell: CellComponent) => toggleRow(cell.getRow().getData().id),
        headerClick: () => toggleAll(),
      },
      { title: "FILE_NAME", field: "name", headerSort: false },
      { title: "SIZE", field: "sizeText", headerSort: false, width: 110, hozAlign: "right", headerHozAlign: "right" },
    ];
  };

  const uploadReadyRef = useRef(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: rows,
      height: "260px",
      layout: "fitColumns",
      placeholder: "Drag & Drop files Here",
      columns: buildColumns(),
    });
    table.on("tableBuilt", () => {
      uploadReadyRef.current = true;
    });
    table.on("rowClick", (_e, row) => {
      focusedIdRef.current = row.getData().id;
    });
    tableRef.current = table;
    return () => {
      uploadReadyRef.current = false;
      table.destroy();
      tableRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 원본 grdFileUpload_onheadclick처럼 헤더 체크박스가 "행이 전부 체크됐는지"를 반영해야
  // 하는데, 그때마다 table.setColumns()로 컬럼을 통째로 재생성하면 Tabulator의 행
  // 매니저까지 다시 만들어지면서 처음에 한 번만 등록해둔 table.on("rowClick", ...)
  // 리스너가 새 행 인스턴스를 못 찾는 문제가 생긴다("Event Target Lookup Error" 경고가
  // 바로 이 증상 — 개발 모드에서만 보이는 게 아니라 실제로 focusedIdRef가 갱신 안 되는
  // 진짜 버그였다). 그래서 컬럼은 생성 시 한 번만 만들고, 데이터가 바뀔 때는
  // setData()만 호출한 뒤 헤더 체크박스 DOM만 직접 갱신한다.
  useEffect(() => {
    const table = tableRef.current;
    if (!table || !uploadReadyRef.current) return;
    const allChecked = rows.length > 0 && rows.every((r) => r.checked);
    table.setData(rows).then(() => {
      const headerBox = table.getColumn("checked")?.getElement()?.querySelector<HTMLInputElement>("input.ft-checkbox");
      if (headerBox) headerBox.checked = allChecked;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    function onDragOver(e: DragEvent) {
      e.preventDefault();
    }
    function onDrop(e: DragEvent) {
      e.preventDefault();
      if (e.dataTransfer?.files?.length) addFiles(e.dataTransfer.files);
    }
    el.addEventListener("dragover", onDragOver);
    el.addEventListener("drop", onDrop);
    return () => {
      el.removeEventListener("dragover", onDragOver);
      el.removeEventListener("drop", onDrop);
    };
  }, []);

  const onAddClick = () => fileInputRef.current?.click();

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) addFiles(e.target.files);
    e.target.value = "";
  };

  const onDeleteClick = () => {
    const allChecked = rows.length > 0 && rows.every((r) => r.checked);
    if (allChecked) {
      setRows([]);
      return;
    }
    const anyChecked = rows.some((r) => r.checked);
    if (anyChecked) {
      setRows((prev) => prev.filter((r) => !r.checked));
      return;
    }
    if (focusedIdRef.current != null) {
      // setRows의 업데이터 함수는 React가 나중에(커밋 단계에서) 호출할 수 있다 — 그 시점에
      // focusedIdRef.current를 다시 읽으면 바로 아래에서 null로 리셋한 값을 읽어버려
      // 아무 행도 안 지워지는 버그가 있었다(실제로 발생 확인). 그래서 지울 id를 미리 지역
      // 변수로 캡처해서 업데이터 클로저에 넘긴다.
      const idToDelete = focusedIdRef.current;
      setRows((prev) => prev.filter((r) => r.id !== idToDelete));
      focusedIdRef.current = null;
    }
  };

  const onTransferClick = async () => {
    if (rows.length === 0) return;
    for (const row of rows) {
      await addStoredFile(row.name, row.size, row.file);
    }
    setRows([]);
    window.alert("전송완료");
  };

  return (
    <section className="ft-section">
      <div className="ft-section-header">
        <h2 className="ft-section-title">FileUpload</h2>
        <div className="ft-btn-row">
          <button type="button" className="ft-btn ft-btn-primary" onClick={onAddClick}>
            {t("filetransfer.add")}
          </button>
          <button type="button" className="ft-btn ft-btn-primary" onClick={onDeleteClick}>
            {t("comp.filetransfer.delete")}
          </button>
          <button type="button" className="ft-btn ft-btn-secondary" onClick={onTransferClick}>
            {t("comp.filetransfer.transfer")}
          </button>
        </div>
      </div>
      <input ref={fileInputRef} type="file" multiple className="ft-file-input" onChange={onFileInputChange} />
      <div ref={mountRef} className="ft-grid-mount" />
    </section>
  );
}

function FileDownloadSection({ t }: { t: Translate }) {
  const [rows, setRows] = useState<DownloadRow[]>([]);
  const mountRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const toggleRow = (id: number) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, checked: !r.checked } : r)));
  };

  const toggleAll = () => {
    setRows((prev) => {
      const allChecked = prev.length > 0 && prev.every((r) => r.checked);
      return prev.map((r) => ({ ...r, checked: !allChecked }));
    });
  };

  const downloadOne = async (id: number) => {
    const stored = await listStoredFiles();
    const found = stored.find((s) => s.id === id);
    if (!found) return;
    const url = URL.createObjectURL(found.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = found.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const deleteOne = async (id: number) => {
    await deleteStoredFile(id);
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const buildColumns = (): ColumnDefinition[] => {
    const allChecked = rowsRef.current.length > 0 && rowsRef.current.every((r) => r.checked);
    return [
      {
        title: "",
        field: "checked",
        width: 44,
        hozAlign: "center",
        headerHozAlign: "center",
        headerSort: false,
        formatter: (cell) => `<input type="checkbox" class="ft-checkbox" ${cell.getValue() ? "checked" : ""} />`,
        titleFormatter: () => `<input type="checkbox" class="ft-checkbox" ${allChecked ? "checked" : ""} />`,
        cellClick: (_e, cell: CellComponent) => toggleRow(cell.getRow().getData().id),
        headerClick: () => toggleAll(),
      },
      {
        title: "FILE_NAME",
        field: "name",
        headerSort: false,
        cellDblClick: (_e, cell: CellComponent) => void downloadOne(cell.getRow().getData().id),
      },
      {
        title: "SIZE",
        field: "sizeText",
        headerSort: false,
        width: 110,
        hozAlign: "right",
        headerHozAlign: "right",
        cellDblClick: (_e, cell: CellComponent) => void downloadOne(cell.getRow().getData().id),
      },
      {
        title: "DEL",
        field: "id",
        headerSort: false,
        width: 60,
        hozAlign: "center",
        formatter: () => `<img src="/nexacro-icons/img_grd_reject.png" alt="delete" style="height:16px;vertical-align:middle;cursor:pointer;" />`,
        cellClick: (_e, cell: CellComponent) => void deleteOne(cell.getRow().getData().id),
      },
    ];
  };

  const downloadReadyRef = useRef(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const table = new Tabulator(mountRef.current, {
      data: rows,
      height: "260px",
      layout: "fitColumns",
      columns: buildColumns(),
    });
    table.on("tableBuilt", () => {
      downloadReadyRef.current = true;
    });
    tableRef.current = table;
    return () => {
      downloadReadyRef.current = false;
      table.destroy();
      tableRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // FileUpload와 같은 이유(setColumns 재생성이 rowClick 리스너를 무효화하는 문제)로
  // 컬럼은 생성 시 한 번만 만들고, 데이터 변경 시엔 setData + 헤더 체크박스 DOM만 갱신.
  useEffect(() => {
    const table = tableRef.current;
    if (!table || !downloadReadyRef.current) return;
    const allChecked = rows.length > 0 && rows.every((r) => r.checked);
    table.setData(rows).then(() => {
      const headerBox = table.getColumn("checked")?.getElement()?.querySelector<HTMLInputElement>("input.ft-checkbox");
      if (headerBox) headerBox.checked = allChecked;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const onSearchClick = async () => {
    const stored = await listStoredFiles();
    setRows(stored.map((s) => ({ id: s.id, name: s.name, size: s.size, sizeText: formatFileSize(s.size), checked: false })));
  };

  const onDownloadClick = async () => {
    const checked = rows.filter((r) => r.checked);
    if (checked.length === 0) {
      window.alert("다운로드 할 파일을 선택하세요.");
      return;
    }
    for (const row of checked) {
      // eslint-disable-next-line no-await-in-loop
      await downloadOne(row.id);
    }
  };

  return (
    <section className="ft-section">
      <div className="ft-section-header">
        <h2 className="ft-section-title">FileDownload</h2>
        <div className="ft-btn-row">
          <button type="button" className="ft-btn ft-btn-secondary" onClick={onDownloadClick}>
            {t("comp.filetransfer.downloadBtn")}
          </button>
          <button type="button" className="ft-btn ft-btn-primary" onClick={() => void onSearchClick()}>
            {t("filetransfer.search")}
          </button>
        </div>
      </div>
      <div ref={mountRef} className="ft-grid-mount" />
    </section>
  );
}

function DescriptionSection({ t }: { t: Translate }) {
  return (
    <section className="ft-desc">
      <h3 className="ft-desc-title">{t("comp.filetransfer")}</h3>
      <p className="ft-desc-body">{t("comp.filetransfer.desc")}</p>
      <h3 className="ft-desc-title">{t("comp.filetransfer.upload")}</h3>
      <p className="ft-desc-body">{t("comp.filetransfer.upload.desc")}</p>
      <h3 className="ft-desc-title">{t("comp.filetransfer.download")}</h3>
      <p className="ft-desc-body">{t("comp.filetransfer.download.desc")}</p>
    </section>
  );
}
