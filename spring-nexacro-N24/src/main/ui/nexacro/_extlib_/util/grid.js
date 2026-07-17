/**
 * @fileoverview 그리드 공통 기능 라이브러리
 */

/**
 * 컬럼 숨김 정보 구분자
 * @type {String}
 * @const
 */
const SEPARATOR_HIDING_INFOS = "||^||";

/**
 * 컬럼 숨김 정보
 * @type {Array}
 */
nexacro.Grid.prototype._hidingInfos = [];

/**
 * 행 숨김 정보 구분자
 * @type {String}
 * @const
 */
const SEPARATOR_HIDING_ROW_INFOS = "||^||";

/**
 * 행 숨김 정보
 * @type {Array}
 */
nexacro.Grid.prototype._hidingRowInfos = [];


/**
 * head cell에 match되는 body cell을 얻어온다
 * @param {number} headCellIndex head cell index
 * @param {boolean=} useColspan head cell 이 colspan 일 경우에도 반환값을 받을지 여부
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.getBodyCellIndex = function (headCellIndex, useColspan) {
    // Max Head Row Index
    let maxHeadRow = 0;
    for (let i = 0, len = this.getCellCount("head"); i < len; i++) {
        let row = this.getCellProperty("head", i, "row");
        if (maxHeadRow < row) {
            maxHeadRow = row;
        }
    }
    // Max Body Row Index
    let maxBodyRow = 0;
    for (let i = 0, len = this.getCellCount("body"); i < len; i++) {
        let row = this.getCellProperty("body", i, "row");
        if (maxBodyRow < row) {
            maxBodyRow = row;
        }
    }

    if (maxHeadRow == 0 && maxBodyRow == 0) {
        return headCellIndex;
    }

    // Body Row 가 1개 이상일 경우
    // Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
    // Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
    let cellIndex = -1;
    let sRow = -1;
    let nRow = parseInt(this.getCellProperty("head", headCellIndex, "row"));
    let nCol = parseInt(this.getCellProperty("head", headCellIndex, "col"));
    let nColspan = parseInt(this.getCellProperty("head", headCellIndex, "colspan"));

    if (maxHeadRow > maxBodyRow) {
        sRow = nRow - (maxHeadRow - maxBodyRow);
        sRow = (sRow < 0 ? 0 : sRow);
    } else {
        sRow = nRow;
    }

    let cRow, cCol, cColspan;
    for (let i = 0, len = this.getCellCount("body"); i < len; i++) {
        cRow = parseInt(this.getCellProperty("body", i, "row"));
        cCol = parseInt(this.getCellProperty("body", i, "col"));
        cColspan = parseInt(this.getCellProperty("body", i, "colspan"));

        // colspan 이 적용된 cell 도 반환값을 사용할 경우 첫번째 항목에 매칭되는 index
        if (useColspan) {
            if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) {
                cellIndex = i;
                break;
            }
        } else {
            if (sRow == cRow && nCol == cCol && nColspan == cColspan) {
                cellIndex = i;
                break;
            }
        }
    }
    return cellIndex;
};

/**
 * 주어진 칼럼정보에 해당하는 칼럼을 찾아 숨긴다.
 * @param  {number} col 컬럼 인덱스
 * @param  {number} headCellIndex 셀 인덱스
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.hideGridColumn = function (col, headCellIndex) {
    let columns = [];
    let info = {
        'col': col,
        'band': this.getFormatColProperty(col, "band"),
        'size': this.getRealColSize(col)
    };
    columns.push(info);

    // 해당 칼럼의 subcell 여부를 체크
    let band;
	let bands = ["head", "body", "summ"];
    let cnt;
	let subCell = 0;
    let colspan = 0;
    for (let i = 0, len = bands.length; i < len; i++) {
        band = bands[i];
        cnt = this.getCellCount(band);
        for (let j = 0; j < cnt; j++) {
            if (col == this.getCellProperty(band, j, "col")) {
                subCell = Math.max(subCell, this.getCellProperty(band, j, "subcell"));
                colspan = Math.max(colspan, this.getCellProperty(band, j, "colspan"));
            }
        }
    }

    if (colspan > 1 && subCell > 0) {
        for (let i = 1; i < subCell; i++) {
            info = {
                'col': col + 1,
                'band': this.getFormatColProperty(col + 1, "band"),
                'size': this.getRealColSize(col + 1)
            };
            columns.push(info);
        }
    }

    let text = "";
    // checkbox 로 사용시
    if (this.getCellProperty("head", headCellIndex, "displaytype") == "checkbox") {
        text = "[CheckBox]]";
    }
    else {
        text = this.getCellProperty("head", headCellIndex, "text");
        if (nexacro.isEmpty(text)) {
            // subcell 이 존재할 경우
            let subcell = grid.getCellProperty("head", headCellIndex, "subcell");
            if (subcell > 0) {
                text = "";
                for (let i = 0; i < subcell; i++) {
                    if (i > 0) text += ' ';
                    text += this.getSubCellProperty("head", headCellIndex, i, "text");
                }
            }
        }
    }

    // 숨김 처리
    this.enableevent = false;
    for (let i = 0, len = columns.length; i < len; i++) {
        this.setFormatColProperty(columns[i].col, "size", 0);
    }
    this.enableevent = true;

    let hidingInfo = {
        'columns': columns,
        'text': text
    };
    this._hidingInfos.push(hidingInfo);
};

/**
 * 주어진 행 정보에 해당하는 행을 찾아 숨긴다.
 * @param  {number} row 행 인덱스
 * @param  {number} bodyRowSize 행 사이즈
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.hideGridRow = function (row, bodyRowSize) {
    let rows = [];
    let info = {
        'row': row,
        'size': bodyRowSize
    };
    
	rows.push(info);
    
    let text = "Row : ";
    text += row+1;
    
    // 숨김 처리
    this.enableevent = false;
    for (let i = 0, len = rows.length; i < len; i++) {
		this.setRealRowSize(rows[i].row, rows[i].size);
    }
    this.enableevent = true;

    let hidingRowInfo = {
        'rows': rows,
        'text': text
    };
    
    this._hidingRowInfos.push(hidingRowInfo);
};

/**
 * 대상 그리드에 숨겨진 모든 칼럼을 보여준다.
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.showGridColumnAll = function () {
    let hidingInfos = this._hidingInfos;
    let info, columns;
     
    this.enableevent = false;
    for (let i = 0, len = hidingInfos.length; i < len; i++) {
        info = hidingInfos[i];
        columns = info.columns;

        for (let j = 0, len2 = columns.length; j < len2; j++) {
            this.setFormatColProperty(columns[j].col, "size", columns[j].size);
        }
    }
    this.enableevent = true;

    this._hidingInfos = [];
};

/**
 * 대상 그리드에 숨겨진 모든 행을 보여준다.
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.showGridRowAll = function (rowRealSize) {
    let hidingRowInfos = this._hidingRowInfos;
    let info, rows;
    this.enableevent = false;
    for (let i = 0, len = hidingRowInfos.length; i < len; i++) {
        info = hidingRowInfos[i];
        rows = info.rows;

        for (let j = 0, len2 = rows.length; j < len2; j++) {
			this.setRealRowSize(rows[j].row, rowRealSize);
        }
    }
    this.enableevent = true;

    this._hidingRowInfos = [];
};

/**
 * 주어진 칼럼정보 index 에 해당하는 칼럼을 찾아 보여준다.
 * @param  {array} indexes 보여질 칼럼 정보 index
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.showGridColumnByIndex = function (indexes) {
    let hidingInfos = this._hidingInfos;
    let index, info, columns;

    this.enableevent = false;
    for (let i = 0, len = indexes.length; i < len; i++) {
        index = indexes[i];
        info = hidingInfos[index];
        columns = info.columns;

        for (let j = 0, len2 = columns.length; j < len2; j++) {
            this.setFormatColProperty(columns[j].col, "size", columns[j].size);
        }

        hidingInfos.removeAt(index);
    }
    this.enableevent = true;
    this._hidingInfos = hidingInfos;
};

/**
 * 주어진 행 정보 row index 에 해당하는 행을 찾아 보여준다.
 * @param  {array} indexes 보여질 행 정보  row index
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.showGridRowByIndex = function (indexes, rowRealSize) {
    let hidingRowInfos = this._hidingRowInfos;
    let index, info, rows;

    this.enableevent = false;
    for (let i = 0, len = indexes.length; i < len; i++) {
        index = indexes[i];
        info = hidingRowInfos[index];
        rows = info.rows;

        for (let j = 0, len2 = rows.length; j < len2; j++) {
			this.setRealRowSize(rows[j].row, rowRealSize);
        }

        hidingRowInfos.removeAt(index);
    }
    this.enableevent = true;
    
    this._hidingRowInfos = hidingRowInfos;
};

/**
 * 컬럼 숨김 정보를 String으로 변환하여 가져온다.
 * @return {string} 컬럼 숨김 정보
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.getHidingInfos = function () {
    let hidingInfos = this._hidingInfos;

    if (hidingInfos.length == 0) {
        return;
    }

    let tmpStr = "";

    for (let i = 0, len = hidingInfos.length; i < len; i++) {
        if (hidingInfos[i]) {
            tmpStr += "{";
            let columns = hidingInfos[i].columns;
            let tmpColStr = "[";

            for (let j = 0, colLen = columns.length; j < colLen; j++) {
                tmpColStr += "{'col': " + columns[j].col + ", ";
                tmpColStr += "'band': '" + columns[j].band + "', ";
                tmpColStr += "'size': " + columns[j].size + "}";

                if (j < colLen - 1) tmpColStr += ", ";
            }

            tmpColStr += "]";

            tmpStr += "'columns': " + tmpColStr + ", ";
            tmpStr += "'text': '" + hidingInfos[i].text + "'";
            tmpStr += "}";

            if (i < len - 1) tmpStr += SEPARATOR_HIDING_INFOS;
        }
    }

    return tmpStr;
};

/**
 * string으로 된 컬럼 숨김 정보를 그리드에 설정한다.
 * @param {string} text 컬럼 숨김 정보
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.setHidingInfos = function (text) {
    this._hidingInfos = [];
    let hidingInfos = text.split(SEPARATOR_HIDING_INFOS);

    for (let i = 0, len = hidingInfos.length; i < len; i++) {
        let hidingInfo = eval("(" + hidingInfos[i] + ")");
        this._hidingInfos.push(hidingInfo);
    }
};

/**
 * 행 숨김 정보를 String으로 변환하여 가져온다.
 * @return {string} 행 숨김 정보
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.getHidingRowInfos = function () {
    let hidingRowInfos = this._hidingRowInfos;

    if (hidingRowInfos.length == 0) {
        return;
    }

    let tmpStr = "";

    for (let i = 0, len = hidingRowInfos.length; i < len; i++) {
        if (hidingRowInfos[i]) {
            tmpStr += "{";
            let rows = hidingRowInfos[i].rows;
            let tmpRowStr = "[";

            for (let j = 0, rowLen = rows.length; j < rowLen; j++) {
                tmpRowStr += "{'row': " + rows[j].row + ", ";
                tmpRowStr += "'size': " + rows[j].size + "}";

                if (j < rowLen - 1) tmpRowStr += ", ";
            }

            tmpRowStr += "]";

            tmpStr += "'rows': " + tmpRowStr + ", ";
            tmpStr += "'text': '" + hidingRowInfos[i].text + "'";
            tmpStr += "}";

            if (i < len - 1) tmpStr += SEPARATOR_HIDING_ROW_INFOS;
        }
    }

    return tmpStr;
};

/**
 * string으로 된 행 숨김 정보를 그리드에 설정한다.
 * @param {string} text 행 숨김 정보
 * @memberOf nexacro.Grid
 */
nexacro.Grid.prototype.setHidingRowInfos = function (text) {
    this._hidingRowInfos = [];
    
    let hidingRowInfos = text.split(SEPARATOR_HIDING_ROW_INFOS);

    for (let i = 0, len = hidingRowInfos.length; i < len; i++) {
        hidingRowInfo = eval("(" + hidingRowInfos[i] + ")");
        this._hidingRowInfos.push(hidingRowInfo);
    }
};