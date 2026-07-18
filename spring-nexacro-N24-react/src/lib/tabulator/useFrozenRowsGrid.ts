import { useEffect, useRef, type RefObject } from "react";
import { TabulatorFull as Tabulator, type CellComponent, type ColumnDefinition, type Options } from "tabulator-tables";

export interface FrozenRowsGridHelpers {
  /** row는 전체 data 배열 기준 절대 인덱스(0-based)다. */
  getCell: (row: number, field: string) => CellComponent | undefined;
}

export interface UseFrozenRowsGridOptions<T extends object> {
  data: T[];
  frozenCount: number;
  indexField: keyof T & string;
  buildColumns: () => ColumnDefinition[];
  rowHeight: number;
  gridHeight: number;
  tableOptions?: Partial<Options>;
  /** 재생성 직후 선택 상태를 복원할 대상 행(절대 인덱스) — 이 값이 고정 영역/스크롤
   * 영역 중 어느 쪽 tableBuilt를 기다려야 하는지 결정하는 데만 쓰인다. */
  restoreTargetRow?: number;
  onTablesReady?: (helpers: FrozenRowsGridHelpers) => void;
}

export interface FrozenRowsGridHandle {
  mainMountRef: RefObject<HTMLDivElement | null>;
  frozenMountRef: RefObject<HTMLDivElement | null>;
  mainTableRef: RefObject<Tabulator | null>;
  frozenTableRef: RefObject<Tabulator | null>;
  /** 클릭/컨텍스트메뉴로 받은 cell이 전체 data 기준으로 몇 번째 행인지 계산한다
   * (고정 영역 셀이면 그대로, 스크롤 영역 셀이면 고정 개수만큼 더한다). */
  toAbsoluteRow: (cell: CellComponent) => number;
  /** 두 테이블 모두에 컬럼 정의를 통째로 갈아끼운다 — 컬럼별 updateDefinition을
   * 여러 번 부르면 그때마다 전체 재렌더링이 일어나 느리다(menu_id 10800 실측
   * 440ms -> 21ms). */
  setColumnsOnBoth: (columns: ColumnDefinition[]) => void;
}

/**
 * 행 N개를 스크롤 없이 상단에 고정하고 나머지는 평소처럼 스크롤되는 그리드(엑셀 "틀
 * 고정"과 동일한 UX)를 위한 재사용 훅.
 *
 * Tabulator 내장 `row.freeze()`와 CSS `position:sticky`를 행에 직접 거는 방식 둘 다
 * 컬럼이 많아 가로 스크롤이 필요한 그리드에서 깨지는 걸 확인했다(menu_id 10800,
 * `docs/migration/conversion-playbook.md` 5-11 참고: frozen-rows-holder가 스크롤
 * 밖에 위치하거나, 고정 행과 스크롤 중인 행의 픽셀 좌표가 우연히 겹침). 대신 "고정
 * 행만 담은 스크롤 없는 두 번째 Tabulator 인스턴스를 메인 그리드 위에 얹고, 메인
 * 그리드의 가로 스크롤 이벤트로 위치만 동기화"하는 방식을 쓴다 — 두 그리드가 물리적으로
 * 분리돼 있어 겹침 문제 자체가 없다.
 */
export function useFrozenRowsGrid<T extends object>(
  opts: UseFrozenRowsGridOptions<T>,
): FrozenRowsGridHandle {
  const {
    data,
    frozenCount,
    indexField,
    buildColumns,
    rowHeight,
    gridHeight,
    tableOptions,
    restoreTargetRow = 0,
    onTablesReady,
  } = opts;

  const mainMountRef = useRef<HTMLDivElement | null>(null);
  const frozenMountRef = useRef<HTMLDivElement | null>(null);
  const mainTableRef = useRef<Tabulator | null>(null);
  const frozenTableRef = useRef<Tabulator | null>(null);
  const frozenCountRef = useRef(frozenCount);

  useEffect(() => {
    if (!mainMountRef.current) return;
    frozenCountRef.current = frozenCount;

    // 고정된 행은 메인 그리드 데이터에서 아예 뺀다 — 안 그러면 고정 영역과 메인 영역에
    // 같은 레코드가 중복으로 보인다(menu_id 10800 사용자 리포트: "동일한 레코드가 보임").
    const mainData = data.slice(frozenCount);
    const mainTable = new Tabulator(mainMountRef.current, {
      ...tableOptions,
      data: mainData,
      height: `${gridHeight - frozenCount * rowHeight}px`,
      index: indexField,
      headerVisible: frozenCount === 0,
      columns: buildColumns(),
    });
    mainTableRef.current = mainTable;

    let frozenTable: Tabulator | null = null;
    if (frozenCount > 0 && frozenMountRef.current) {
      const frozenData = data.slice(0, frozenCount);
      frozenTable = new Tabulator(frozenMountRef.current, {
        ...tableOptions,
        data: frozenData,
        index: indexField,
        columns: buildColumns(),
      });
    }
    frozenTableRef.current = frozenTable;

    const getCell = (row: number, field: string): CellComponent | undefined => {
      const count = frozenCountRef.current;
      return row < count
        ? frozenTableRef.current?.getRows()[row]?.getCell(field)
        : mainTableRef.current?.getRows()[row - count]?.getCell(field);
    };

    const waitTable = restoreTargetRow < frozenCount && frozenTable ? frozenTable : mainTable;
    waitTable.on("tableBuilt", () => onTablesReady?.({ getCell }));

    mainTable.on("scrollHorizontal", (left: number) => {
      const holder = frozenTableRef.current?.element.querySelector<HTMLElement>(".tabulator-tableholder");
      if (holder) holder.scrollLeft = left;
    });

    // 고정 영역 인스턴스는 자기 컬럼 폭 합이 뷰포트보다 넓으면 자기 몫의 가로
    // 스크롤바를 따로 만들어버린다 — 원본은 그리드가 하나뿐이라 스크롤도 하나뿐인데,
    // 분리된 두 인스턴스라 각자 overflow:auto 기본값을 갖는 탓이다(menu_id 10800
    // 사용자 리포트: "고정행에도 좌우스크롤이 있고 아래 그리드에도 좌우스크롤이
    // 있어"). 스크롤바만 숨기고 위 scrollHorizontal 동기화로 위치는 계속 맞춘다
    // (overflow:hidden이어도 scrollLeft를 코드로 바꾸는 건 정상 동작한다).
    if (frozenTable) {
      const holder = frozenTable.element.querySelector<HTMLElement>(".tabulator-tableholder");
      if (holder) holder.style.overflowX = "hidden";
    }

    return () => {
      mainTable.destroy();
      frozenTable?.destroy();
      mainTableRef.current = null;
      frozenTableRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, frozenCount, indexField, rowHeight, gridHeight]);

  function toAbsoluteRow(cell: CellComponent): number {
    // getPosition()은 1부터 시작하는 위치값이다(실측 확인) — 0-based 인덱스로 쓰려면
    // 하나 빼야 한다.
    const localIndex = (cell.getRow().getPosition() as number) - 1;
    const isFromFrozenTable = cell.getTable() === frozenTableRef.current;
    return isFromFrozenTable ? localIndex : localIndex + frozenCountRef.current;
  }

  function setColumnsOnBoth(columns: ColumnDefinition[]) {
    for (const table of [mainTableRef.current, frozenTableRef.current]) {
      table?.setColumns(columns);
    }
  }

  return { mainMountRef, frozenMountRef, mainTableRef, frozenTableRef, toAbsoluteRow, setColumnsOnBoth };
}
