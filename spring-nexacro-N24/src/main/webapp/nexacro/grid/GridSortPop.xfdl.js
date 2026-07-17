(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridSortPop");
            this.set_titletext("New Form");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_columnNotSelect", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"index\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"column\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"index\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"INT\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">1</Col><Col id=\"nm\">오름차순</Col></Row><Row><Col id=\"cd\">2</Col><Col id=\"nm\">내림차순</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_column", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"index\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_item","10","51",null,"207","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_item");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/><Cell col=\"1\" text=\"정렬\"/></Band><Band id=\"body\"><Cell edittype=\"combo\" text=\"bind:column\" combodataset=\"ds_column\" combocodecol=\"cd\" combodatacol=\"nm\" comboitemheight=\"29\" combodisplayrowcount=\"5\" displaytype=\"combocontrol\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:status\" combodataset=\"ds_status\" combocodecol=\"cd\" combodatacol=\"nm\" comboitemheight=\"29\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","103","13","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","136","13","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_up","175","13","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_btnUp");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down","208","13","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_btnDown");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply","95","266","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_popupBtn01");
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
        this.registerScript("GridSortPop.xfdl", function() {
        /*
         * Grid Sort Sample at XPLATFORM
         *
         * Copyright (c) 2014 EcoSystem of TOBESOFT
         * Licensed Free under XPLATFORM.
         */

        /**
         * oncolumnchanged event handler
         * @param {Dataset} obj 이벤트가 발생한 Dataset
         * @param {DSColChangeEventInfo} e DSColChangeEventInfo
         */
        this.ds_item_oncolumnchanged = function (obj, e)
        {
        	if (e.columnid == "column")
        	{
        		this.ds_item.setColumn(e.row, "index", this.ds_column.lookup("cd", e.newvalue, "index"));
        		//this.ds_item.setColumn(e.row, "column", this.ds_column.lookup("cd", e.newvalue, "nm"));
        	}
        };

        /**
         * 소팅 정보를 화면에 표시
         * @param {Grid} grid 소트 대상 Grid
         * @param {array} cells Cell 별 소트 정보
         */
        this.setSortInfo = function (grid, cells)
        {
        	let cellInfos = grid.cellInfos;
        	let sortItems = grid.sortItems;
        	let columnName,cellInfo,index,status,text,row,cell;

        	// 컬럼 정보 구성
        	this.ds_column.deleteAll();

        	for (let i = 0; i < cells.length; i++)
        	{
        		cell = cells[i];
        		row = this.ds_column.addRow();
        		this.ds_column.setColumn(row, "cd", cell.column);
        		this.ds_column.setColumn(row, "nm", nexacro._getTextTemplateValue(cell.text));
        		this.ds_column.setColumn(row, "index", cell.index);
        	}
        	//trace(this.ds_column.saveXML());

        	// 현재 소팅 정보 표시
        	this.ds_item.deleteAll();
        	if (!nexacro.isEmpty(sortItems))
        	{
        		for (let i = 0,len = sortItems.length; i < len; i++)
        		{
        			columnName = sortItems[i];
        			cellInfo = cellInfos[columnName];
        			index = cellInfo.index;
        			status = cellInfo.status;
        			//alert(cellInfo.status);
        			text = cellInfo.text;

        			if (status > 0)
        			{
        				row = this.ds_item.addRow();
        				this.ds_item.setColumn(row, "column", columnName);
        				this.ds_item.setColumn(row, "status", status);
        				this.ds_item.setColumn(row, "index", index);
        			}
        		}
        	}
        	//trace(this.ds_item.saveXML());
        };

        /**
         * onclick Event Handler - 항목 추가
         * @param {Button} obj Event가 발생한 Button Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_add_onclick = function (obj, e)
        {
        	this.ds_item.addRow();
        	this.grd_item.setCellPos(0);
        	this.grd_item.showEditor();
        	this.grd_item.dropdownCombo();
        };

        /**
         * onclick Event Handler - 항목 삭제
         * @param {Button} obj Event가 발생한 Button Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_delete_onclick = function (obj, e)
        {
        	this.ds_item.deleteRow(this.ds_item.rowposition);
        };

        /**
         * onclick Event Handler - 항목 위로 이동
         * @param {Button} obj Event가 발생한 Button Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_up_onclick = function (obj, e)
        {
        	let rowposition = this.ds_item.rowposition;
        	if (rowposition > 0)
        	{
        		this.ds_item.exchangeRow(rowposition, rowposition - 1);
        	}
        };

        /**
         * onclick Event Handler - 항목 아래로 이동
         * @param {Button} obj Event가 발생한 Button Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_down_onclick = function (obj, e)
        {
        	let rowposition = this.ds_item.rowposition;
        	if (rowposition < this.ds_item.rowcount - 1)
        	{
        		this.ds_item.exchangeRow(rowposition, rowposition + 1);
        	}
        };

        /**
         * onclick Event Handler - 소트 적용
         * @param {Button} obj Event가 발생한 Button Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_apply_onclick = function (obj, e)
        {
        	let items = [],index,status;
        	for (let i = 0,len = this.ds_item.rowcount; i < len; i++)
        	{
        		index = this.ds_item.getColumn(i, "index");
        		status = this.ds_item.getColumn(i, "status");

        		if (nexacro.isEmpty(index) || nexacro.isEmpty(status))
        		{
        			continue;
        		}

        		items.push({
        			index : index,
        			status : parseInt(status)
        		});
        	}
        	//trace(this.ds_item.saveXML());
        	this.parent.closePopup(items);
        };


        /**
         * value의 Date 여부 반환.
         * @param {date} value 확인할 value.
         * @return {boolean} Date 여부.
         * @example
         * var a = new Date();
         * trace(Base.isDate(a));	// output : true
         *
         * var a = "20130501";
         * trace(Base.isDate(a));	// output : false
         * @memberOf Base
         */
        this.gfn_IsDate = function (value)
        {
        	// 아래내용을 9.2 Rumtiem 지원안함.
        	// 그리고 성능이슈가 발생할 수 있음(느림).
        	// 그런데 많은 곳에서 사용하고 있음.
        	// return toString.call(value) === '[object Date]';
        	// return Object.prototype.toString.call(value) === '[object Date]';
        	// typeof보다는 느리지만 아래처럼 사용하는것과는 대동소이?

        	if (typeof value == 'object' && value instanceof Date)
        	{
        		return true;
        	}

        	return false;
        };

        /**
         * value의 Array 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} Array 여부.
         * @example
         * var a = new Array();
         * trace(this.gfn_IsArray(a));	// output : true
         *
         * var a = [1,2,3];
         * trace(this.gfn_IsArray(a));	// output : true
         * @memberOf Base
         */
        this.gfn_IsArray = function (value)
        {
        	// TODO
        	/*
        	 V13에서는 아래처럼하자(또는 HTML5)
        	 return Object.prototype.toString.call( value ) === '[object Array]';
        	 */

        	if (value === null || value === undefined)
        	{
        		return false;
        	}

        	// constructor 에 접근시 XP Comp 는 에러발생
        	if (this.gfnIsNexaComponent(value))
        	{
        		return false;
        	}

        	return typeof value == "object" &&
        		'constructor' in value &&
        		value.constructor === Array;
        };

        /**
         * value의 Object 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} Object 여부.
         * @example
         * var o = new Object();
         * trace(Base.isObject(o));	// output : true
         *
         * var o = {};
         * trace(Base.isObject(o));	// output : true
         *
         * var o = [1,2,3];
         * trace(Base.isObject(o));	// output : false
         *
         * var o = new Button();
         * trace(Base.isObject(o));	// output : false
         *
         * var o = new Rect();
         * trace(Base.isObject(o));	// output : false
         *
         * @memberOf Base
         */
        this.gfn_IsObject = function (value)
        {
        	if (value === null || value === undefined)
        	{
        		return false;
        	}

        	// constructor 에 접근시 XP Comp 는 에러발생
        	if (this.gfnIsNexaComponent(value))
        	{
        		return false;
        	}

        	// 신규추가 2013.11.27 pbh. 데이터셋과 같은 xp object 거르기.
        	if (!nexacro.isEmpty(value._type))
        	{
        		if (value._type.substr(0, 4) == "TOBE")
        		{
        			return false;
        		}
        	}

        	return typeof value == "object" &&
        		'constructor' in value &&
        		value.constructor === Object;
        };


        this.grd_item_oncloseup = function(obj,e)
        {
        	if(e.col == 0){
        		obj.setCellPos(1);
        		obj.dropdownCombo();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_item.addEventHandler("oncloseup",this.grd_item_oncloseup,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_up.addEventHandler("onclick",this.btn_up_onclick,this);
            this.btn_down.addEventHandler("onclick",this.btn_down_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.ds_item.addEventHandler("oncolumnchanged",this.ds_item_oncolumnchanged,this);
            this.ds_item.addEventHandler("onrowposchanged",this.ds_item_onrowposchanged,this);
            this.ds_column.addEventHandler("oncolumnchanged",this.ds_column_oncolumnchanged,this);
        };
        this.loadIncludeScript("GridSortPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
