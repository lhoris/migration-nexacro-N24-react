(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridFilterPop");
            this.set_titletext("New Form");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_codeOperater", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">none</Col><Col id=\"nm\">None</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">contains</Col><Col id=\"nm\">Contains</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">startWith</Col><Col id=\"nm\">Start with</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">endWith</Col><Col id=\"nm\">End with</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">equal</Col><Col id=\"nm\">=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">notEqual</Col><Col id=\"nm\">&lt;&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThan</Col><Col id=\"nm\">&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThanOrEqual</Col><Col id=\"nm\">&gt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThan</Col><Col id=\"nm\">&lt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThanOrEqual</Col><Col id=\"nm\">&lt;=</Col><Col id=\"group\">All</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_combo","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_combo");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj.set_border("4px solid #6954e1");
            obj.set_background("#6954e1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"222\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"1\"/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:chk\" edittype=\"checkbox\" background=\"#ffffff\"/><Cell col=\"1\" text=\"bind:text\" textAlign=\"left\" verticalAlign=\"middle\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"number\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_operater",null,"10","101","26","123",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_innerdataset("ds_codeOperater");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            obj.set_itemheight("40");
            obj.set_buttonsize("23");
            obj.set_borderRadius("3px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_filter","33","10",null,"26","227",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.set_borderRadius("3px");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_filter","33","10",null,"26","227",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border("1px solid rgba(211,211,211,1)");
            obj.set_borderRadius("3px");
            obj.set_displaynulltext("search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,"10","58","26","62",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Apply");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GridFilterPop.xfdl", function() {
        /**
         * Form onload event handler - 로드시 초기 지정
         * @param {Form} obj 대상 Form Component
         * @param {LoadEventInfo} e LoadEventInfo
         */
        this.GridFilterDiv_onload = function (obj, e)
        {
        	//콤포는 포함으로 기본설정
        	this.cmb_operater.index = 1;
        };

        /**
         * onsetfocus Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {SetFocusEventInfo} e SetFocusEventInfo
         */
        this.edt_filter_onsetfocus = function (obj, e)
        {
        	obj.focusValue = obj.value;
        };

        /**
         * onkillfocus Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {KillFocusEventInfo} e KillFocusEventInfo
         */
        this.edt_filter_onkillfocus = function (obj, e)
        {
        	if (obj.focusValue != obj.value)
        	{
        		this.applyCheck(this.cmb_operater.value, obj.value, obj.value);
        	}
        };

        /**
         * onitemclick Event Handler
         * @param {Combo} obj Event가 발생한 Combo Component
         * @param {ListBoxClickEventInfo} e ListBoxClickEventInfo
         */
        this.cmb_operater_onitemchanged = function(obj,e)
        {
        	let value;
        	let type = this.parent.filterType;

        	if (type == "normal")
        	{
        		value = this.edt_filter.value;
        	}
        	else if (type == "number")
        	{
        		value = parseInt(this.edt_filter.value);
        	}
        	else if (type == "date")
        	{
        		value = this.cal_filter.value;
        	}
        	this.applyCheck(e.postvalue, value, value);
        };

        /**
         * oncloseup Event Handler
         * @param {Calendar} obj Event가 발생한 Calendar Component
         * @param {CalendarCloseUpEventInfo} e CalendarCloseUpEventInfo
         */
        this.cal_filter_oncloseup = function (obj, e)
        {
        	if (e.prevalue != e.postvalue)
        	{
        		this.applyCheck(this.cmb_operater.value, e.postvalue, e.postvalue);
        	}
        };

        /**
         * 필터 적용 - 팝업그리드에 입력 데이터에 체크박스
         * @param {string} operater 연산자
         * @param {string} value 비교값
         */
        this.applyCheck = function (operater, value, filterData)
        {
        	let grid = this.parent.grid;
        	let column = this.parent.filterColumn;
        	let headCellIndex = this.parent.headCellIndex;

        	let ds = this.gfn_Lookup(grid.parent, grid.binddataset);
        	let colType = ds.getColumnInfo(column).type;
        	let filterString = "";
        	let str = "";

        	gird = this.grd_combo;
        	ds = this.ds_combo;
        	let val = value;

        	//search값이 없으면 필터해제
        	if(nexacro.isEmpty(value)) return;
        	// filter string 생성

        	//if (!this.gfn_IsArray(value))
        	if(Object.prototype.toString.call( value ) != '[object Array]')
        	{
        		value = [value];
        	}

        	//필터에 해당하는 데이터에 체크박스 표시
        	for(let i = 0 ; i < ds.rowcount ; i++)
        	{
        		switch (operater)
        		{
        			case 'equal':
        				if( ds.getColumn(i, "val") == val ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = "==" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        				break;
        			case 'notEqual':
        				if(ds.getColumn(i, "val") != val ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = "!=" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        				break;
        			case 'greaterThan':
        				if(ds.getColumn(i, "val") > val ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = ">" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        				break;
        			case 'greaterThanOrEqual':
        				if(ds.getColumn(i, "val") >= val ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = ">=" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        				break;
        			case 'lessThan':
        				if(ds.getColumn(i, "val") < val ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = "<" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        				break;
        			case 'lessThanOrEqual':
        				if(ds.getColumn(i, "val") <= val ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = "<=" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        				break;
        			case 'startWith':
        				if( String(ds.getColumn(i, "val")).substr(0, val.length) == val ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = ".toString().substr(0, " + val.length + ") == '" + val + "'";
        				break;
        			case 'endWith':
        				var cellValue = String(ds.getColumn(i, "val"));
        				if(cellValue.substr(cellValue.length - val.length) == val ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = ".toString().substr(" + column + ".toString().length-" + val.length + ") == '" + val + "'";
        				break;
        			case 'contains':
        				if(String(ds.getColumn(i, "val")).indexOf(val) > -1 ) ds.setColumn(i, "chk", "1");
        				else ds.setColumn(i, "chk", "0");
        				//str = ".toString().search('" + val + "') > -1";
        				break;
        		}
        	}
        };


        /**
         * filter type 별 형태/데이터 지정
         */
        this.setFilterType = function ()
        {
        	let grid = this.parent.grid;

        	let type = this.parent.filterType;
        	let column = this.parent.filterColumn;
        	let bodyCellIndex = this.parent.bodyCellIndex;
        	let filterData = this.parent.filterData;

        	this.edt_filter.visible = false;
        	this.cal_filter.visible = false;
            //displaytype이 combo인경우에만,,필요
        	let dsName = grid.getCellProperty("body", bodyCellIndex, "combodataset");
        	let ds = this.gfn_Lookup(grid.parent, dsName);
        	let codeColumn = grid.getCellProperty("body", bodyCellIndex, "combocodecol");
        	let dataColumn = grid.getCellProperty("body", bodyCellIndex, "combodatacol");

        	this.ds_combo.enableevent = false;
        	this.ds_combo.deleteAll();

        	//데이터 distinct해서 넣기
        	let orginDataset = grid.getBindDataset();
        	let row = -1;
        	let defaultVal = nexacro.isEmpty(filterData) ? true : false;
        	for (var i = 0,len = orginDataset.rowcount; i < len; i++)
        	{
        		let searchValue = orginDataset.getColumn(i, column);
        		row = this.ds_combo.findRow("val", searchValue);

        		if(row < 0)
        		{
        			row = this.ds_combo.addRow();
        		}

        		//this.ds_combo.setColumn(row, "chk", (defaultVal ? 0 : filterData[i]));
        		this.ds_combo.setColumn(row, "chk", (defaultVal ? 1 : filterData[i]));
        		this.ds_combo.setColumn(row, "text", orginDataset.getColumn(i, column));
        		this.ds_combo.setColumn(row, "val", orginDataset.getColumn(i, column));
        	}

        	//datatype에 맞겠금 그리드 셀타입 변경하기
        	this.grd_combo.setCellProperty("body", 1,"displaytype", grid.getCellProperty("body",bodyCellIndex,"displaytype"));
        	this.grd_combo.setCellProperty("body", 1,"maskeditformat",grid.getCellProperty("body",bodyCellIndex,"maskeditformat"));
        	this.grd_combo.setCellProperty("body", 1,"maskedittype",grid.getCellProperty("body",bodyCellIndex,"maskedittype"));
        	this.grd_combo.setCellProperty("body", 1,"textAlign",grid.getCellProperty("body",bodyCellIndex,"textAlign"));

        	/*
        	var row;
        	var defaultVal = nexacro.isEmpty(filterData) ? true : false;
        	for (var i = 0,len = ds.rowcount; i < len; i++)
        	{
        		row = this.ds_combo.addRow();
        		this.ds_combo.setColumn(row, "chk", (defaultVal ? 0 : filterData[i]));
        		this.ds_combo.setColumn(row, "text", ds.getColumn(i, dataColumn));
        		this.ds_combo.setColumn(row, "val", ds.getColumn(i, codeColumn));
        	}
        	*/

        	this.ds_combo.rowposition = -1;
        	this.ds_combo.enableevent = true;
        	if (type == "combocontrol")
        	{
        		this.edt_filter.visible = false;
        		this.cal_filter.visible = false;

        		let dsName = grid.getCellProperty("body", bodyCellIndex, "combodataset");
        		let ds = this.gfn_Lookup(grid.parent, dsName);
        		let codeColumn = grid.getCellProperty("body", bodyCellIndex, "combocodecol");
        		let dataColumn = grid.getCellProperty("body", bodyCellIndex, "combodatacol");

        		this.ds_combo.enableevent = false;
        		this.ds_combo.deleteAll();

        		let row;
        		let defaultVal = nexacro.isEmpty(filterData) ? true : false;
        		for (let i = 0,len = ds.rowcount; i < len; i++)
        		{
        			row = this.ds_combo.addRow();
        			this.ds_combo.setColumn(row, "chk", (defaultVal ? 0 : filterData[i]));
        			this.ds_combo.setColumn(row, "text", ds.getColumn(i, dataColumn));
        			this.ds_combo.setColumn(row, "val", ds.getColumn(i, codeColumn));
        		}
        		this.ds_combo.rowposition = -1;
        		this.ds_combo.enableevent = true;
        	}
        	else if (type == "date")
        	{
        		this.edt_filter.visible = false;
        		this.cal_filter.visible = true;
        	}
        	else if (type == "number")
        	{
        		this.edt_filter.visible = true;
        		this.cal_filter.visible = false;
        		this.edt_filter.inputtype = "number";
        	}
        	else
        	{
        		this.edt_filter.visible = true;
        		this.cal_filter.visible = false;
        		this.edt_filter.inputtype = "normal";
        	}
        };

        /**
         * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * @public
         * @param {xpComp} p 찾을 대상
         * @param {string} name 찾을 대상 이름
         * @return {xpComp} 검색된 component, object
         * @example
         *
         * // this = Form
         * // Form 에 Button11 존재
         * trace(Base.XPComp.lookup(this, "Button11"));	// output : [object Button]
         *
         * // Button12 는 Div01 에 존재하지 않으나 Div01 의 상위 컴포넌트인 Form 에 존재
         * trace(Base.XPComp.lookup(Div01, "Button11"));	// output : [object Button]
         *
         * @memberOf Base.XPComp
         */
        this.gfn_Lookup = function (p, name)
        {
        	let o;
        	while (p)
        	{
        		o = p.components;
        		if (o && o[name])
        		{
        			return o[name];
        		}

        		o = p.objects;
        		if (o && o[name])
        		{
        			return o[name];
        		}

        		p = p.parent;
        	}
        	return null;
        };

        //닫기
        this.btn_apply_onclick = function(obj,e)
        {
        	let value = this.edt_filter.value;
        	let filterData = value;
        	//'||'로 죄다 엮어서 필터 테스트 하기
        	let grid = this.parent.grid;
        	let column = this.parent.filterColumn;
        	let headCellIndex = this.parent.headCellIndex;

        	let ds = this.gfn_Lookup(grid.parent, grid.binddataset);
        	let colType = ds.getColumnInfo(column).type;
        	let filterString = "";
        	let str = "";


        	// grd_combo에 선택된 값들 다 '||'로 엮어버리기
        	let cnt = this.ds_combo.rowcount;
        	for(let i = 0 ; i < cnt ; i++)
        	{
        		if(nexacro.isEmpty(this.ds_combo.getColumn(i, "chk")) || this.ds_combo.getColumn(i, "chk")=="0") continue;
        		if (!nexacro.isEmpty(filterString))
        		{
        			filterString += " || ";
        		}
        		filterString += column;
        		filterString += "==";
        		filterString += nexacro.wrapQuote(this.ds_combo.getColumn(i, "val"));
        	}

        	// 필터 표시 이미지 변경
        	if (nexacro.isEmpty(filterString))
        	{
        		//해당 그리의 expand img를 변경..
        		grid.setCellProperty( "head", headCellIndex, "expandimage", this.parent.parent.FILTER_ENABLE_IMAGE_URL );
        	}
        	else
        	{
        		filterString = "(" + filterString + ")";
        		grid.setCellProperty( "head", headCellIndex, "expandimage", this.parent.parent.FILTER_APPLY_IMAGE_URL );
        	}

        	//전체선택 또는 전체해재일 경우에는 필터지우기
        	if( this.ds_combo.rowcount == this.ds_combo.getCaseCount("chk==1") ||
        	    this.ds_combo.rowcount == this.ds_combo.getCaseCount("chk!=1"))
        	{
        		//필터지우기
        		filterString == "";
        		grid.setCellProperty( "head", headCellIndex, "expandimage", this.parent.parent.FILTER_ENABLE_IMAGE_URL );
        	}

        	// 부모화면 필터 실행
        	this.parent.parent.executeFilter(grid, headCellIndex, filterString, filterData);
        	this.parent.closePopup();
        };

        //전체선택 및 해제
        this.grd_combo_onheadclick = function(obj,e)
        {
        	//체크박스 아니면 return;
        	if(e.cell != 0) return;

        	let objGrid = obj;
        	let objDs = obj.getBindDataset();

        	let headValue = objGrid.getCellProperty("Head", e.cell, "text");
        	//전체선택
        	if(headValue == true || headValue == "1")
        	{
        		objDs.enableevent = false;
        		objDs.updatecontrol = false;
        		objGrid.enableevent = false;
        		objGrid.enableredraw = false;
        		for (let i = 0; i <= objDs.rowcount; i++)
        		{
        			objDs.setColumn(i, "chk", "0");
        		}
        		objGrid.setCellProperty("Head", 0, "text", "0");
        		objGrid.enableevent = true;
        		objGrid.enableredraw = true;
        		objDs.enableevent = true;
        		objDs.updatecontrol = true;
        	}
        	else
        	{
        		objDs.enableevent = false;
        		objDs.updatecontrol = false;
        		objGrid.enableevent = false;
        		objGrid.enableredraw = false;
        		for (let i = 0; i <= objDs.rowcount; i++)
        		{
        			objDs.setColumn(i, "chk", "1");
        		}
        		objGrid.setCellProperty("Head", 0, "text", "1");
        		objGrid.enableevent = true;
        		objGrid.enableredraw = true;
        		objDs.enableevent = true;
        		objDs.updatecontrol = true;
        	}
        };

        this.edt_filter_oninput = function(obj,e)
        {
        	this.applyCheck(this.cmb_operater.value, obj.value, obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridFilterDiv_onload,this);
            this.grd_combo.addEventHandler("onheadclick",this.grd_combo_onheadclick,this);
            this.cmb_operater.addEventHandler("onitemchanged",this.cmb_operater_onitemchanged,this);
            this.cal_filter.addEventHandler("oncloseup",this.cal_filter_oncloseup,this);
            this.edt_filter.addEventHandler("onsetfocus",this.edt_filter_onsetfocus,this);
            this.edt_filter.addEventHandler("onkillfocus",this.edt_filter_onkillfocus,this);
            this.edt_filter.addEventHandler("oninput",this.edt_filter_oninput,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
        };
        this.loadIncludeScript("GridFilterPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
