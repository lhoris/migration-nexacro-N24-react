(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"INT\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/><Column id=\"ok\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"name\">Parry</Col><Col id=\"address\">73 Bowman Parkway</Col><Col id=\"amount\">11235</Col><Col id=\"date\">2020-08-01</Col><Col id=\"company\">Ratke and Sons</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"name\">Aland</Col><Col id=\"address\">971 Melrose Hill</Col><Col id=\"amount\">15698</Col><Col id=\"date\">2020-08-01</Col><Col id=\"company\">Littel and Sons</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"name\">Baxy</Col><Col id=\"address\">685 Sutherland Court</Col><Col id=\"amount\">15756</Col><Col id=\"date\">2020-08-02</Col><Col id=\"company\">Pfeffer-Becker</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">4</Col><Col id=\"name\">Lyndsey</Col><Col id=\"address\">8888 Daystar Avenue</Col><Col id=\"amount\">15756</Col><Col id=\"date\">2020-08-02</Col><Col id=\"company\">Marquardt LLC</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"id\">5</Col><Col id=\"name\">Jennifer</Col><Col id=\"address\">5872 American Ash Alley</Col><Col id=\"amount\">23317</Col><Col id=\"date\">2020-08-03</Col><Col id=\"company\">Nader Group</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">6</Col><Col id=\"name\">Fawnia</Col><Col id=\"address\">531 1st Plaza</Col><Col id=\"amount\">15756</Col><Col id=\"date\">2020-08-03</Col><Col id=\"company\">Huels and Sons</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"id\">7</Col><Col id=\"name\">Walsh</Col><Col id=\"address\">03970 Kinsman Hill</Col><Col id=\"amount\">23317</Col><Col id=\"date\">2020-08-04</Col><Col id=\"company\">Hartmann-Reinger</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_contextmenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"idx\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">hideColumn</Col><Col id=\"level\">0</Col><Col id=\"caption\">Hide Column</Col><Col id=\"enable\">true</Col><Col id=\"idx\">0</Col></Row><Row><Col id=\"id\">showColumn</Col><Col id=\"level\">0</Col><Col id=\"caption\">Show Column</Col><Col id=\"enable\">false</Col><Col id=\"idx\">0</Col></Row><Row><Col id=\"id\">hideRow</Col><Col id=\"level\">0</Col><Col id=\"caption\">Hide Row</Col><Col id=\"enable\">true</Col><Col id=\"idx\">0</Col></Row><Row><Col id=\"id\">showRow</Col><Col id=\"level\">0</Col><Col id=\"caption\">Show Row</Col><Col id=\"enable\">false</Col><Col id=\"idx\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","177","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.personalization\",\"Personalization\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("grid.personalization");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","79",null,"370","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"190\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"#\" border=\"0px none,1px solid lightgray,0px none,0px none\"/><Cell col=\"1\" text=\"TEXT(&quot;name&quot;,&quot;Name&quot;)\" messageid=\"name\" border=\"0px none,1px solid lightgray,0px none,0px none\"/><Cell col=\"2\" text=\"TEXT(&quot;address&quot;,&quot;Address&quot;)\" messageid=\"address\" border=\"0px none,1px solid lightgray,0px none,0px none\"/><Cell col=\"3\" text=\"TEXT(&quot;amount&quot;,&quot;Amount&quot;)\" border=\"0px none,1px solid lightgray,0px none,0px none\"/><Cell col=\"4\" text=\"TEXT(&quot;date&quot;,&quot;Date&quot;)\" border=\"0px none,1px solid lightgray,0px none,0px none\"/><Cell col=\"5\" text=\"TEXT(&quot;company&quot;,&quot;Company&quot;)\" messageid=\"company\" border=\"0px none,1px solid lightgray,0px none,0px none\"/><Cell col=\"6\" text=\"TEXT(&quot;approval&quot;,&quot;OK&quot;)\" border=\"0px none,1px solid lightgray,0px none,0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:id\" border=\"0px none,1px solid #e2e2e3,0px none,0px none\"/><Cell col=\"1\" text=\"bind:name\" border=\"0px none,1px solid #e2e2e3,0px none,0px none\"/><Cell col=\"2\" text=\"bind:address\" textAlign=\"left\" border=\"0px none,1px solid #e2e2e3,0px none,0px none\"/><Cell col=\"3\" text=\"bind:amount\" cssclass=\"grd_txtR\" displaytype=\"currency\" border=\"0px none,1px solid #e2e2e3,0px none,0px none\"/><Cell col=\"4\" text=\"bind:date\" border=\"0px none,1px solid #e2e2e3,0px none,0px none\"/><Cell col=\"5\" text=\"bind:company\" border=\"0px none,1px solid #e2e2e3,0px none,0px none\"/><Cell col=\"6\" text=\"bind:ok\" displaytype=\"imagecontrol\" border=\"0px none,1px solid #e2e2e3,0px none,0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"469","120","40","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"grid.personalization.save\",\"Save\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("grid.personalization.save");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"469","120","40","Button01:3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"grid.personalization.default\",\"Set Default\")");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("grid.personalization.default");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","266","10","129","160",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_contextmenu");
            obj.set_captioncolumn("caption");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_enablecolumn("enable");
            obj.set_itemheight("40");
            obj.set_navigationbuttonsize("40");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("personalization.xfdl", function() {
        this.orgColFullSize; //전체 Column 사이즈
        this.chkColFullSize; //숨김 Column 여부 사이즈
        this.orgRowFullSize; //전체 Row 사이즈
        this.chkRowFullSize; //숨김 Row 여부 사이즈
        this.chkSave = false; //개인화 여부 체크

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	this.fv_originFormats = this.Grid00.getFormatString();
        	this.fv_originRowSizeList = this.Grid00._rowSizeList.slice();

        	let grid_format = nexacro.getPrivateProfile("grid.personalization.format");
        	let grid_rowsize = nexacro.getPrivateProfile("grid.personalization.rowsize");
        	let grid_hidingInfo = nexacro.getPrivateProfile("grid.personalization.hidinginfo");
        	let grid_hidingRowInfo = nexacro.getPrivateProfile("grid.personalization.hidingrowinfo");

        	if (grid_format) {
        		this.Grid00.formats = grid_format;
        	}

        	if (grid_rowsize) {
        		let rowSize = grid_rowsize.split(",");
        		for (let i=0,len=rowSize.length; i<len; i++) {
        			this.Grid00.setRealRowSize(i, Number(rowSize[i]));
        		}
        	}

        	if (grid_hidingInfo && grid_hidingInfo != "undefined") {
        		this.chkSave = true;
        		this.Grid00.setHidingInfos(grid_hidingInfo);
        	}

        	if (grid_hidingRowInfo && grid_hidingRowInfo != "undefined") {
        		this.chkSave = true;
        		this.Grid00.setHidingRowInfos(grid_hidingRowInfo);
        	}

        	this.orgColFullSize = this.Grid00.getRealColFullSize();
        	this.orgRowFullSize = this.Grid00.getRealRowFullSize("body");
        };

        this.Grid00_onrbuttondown = function(obj,e)
        {
        	this.chkColFullSize = obj.getRealColFullSize();
        	this.chkRowFullSize = obj.getRealRowFullSize("body");

        	let ds = this.ds_contextmenu;
        	let hide = "false";
        	let show = "false";
        	let hidingInfos = obj._hidingInfos;
        	let hidingRowInfos = obj._hidingRowInfos;
        	let x = e.clientx, y = e.clienty, pmnu = this.PopupMenu00;
        	ds.filter("");

        	// head band
        	if (e.row == -1 && e.cell > -1) {
        		for (let i = ds.rowcount - 1; i > -1; i--) {
        			if (ds.getColumn(i, "level") == "1") {
        				ds.deleteRow(i);
        			}

        			//행 숨기기 메뉴 숨기기
        			if (ds.getColumn(i, "id") == "hideRow" || ds.getColumn(i, "id") == "showRow") {
        				ds.filterRow(i);
        			}
        		}

        		let hideColumnRowIndex = ds.findRow("id", "hideColumn");
        		let showColumnRowIndex = ds.findRow("id", "showColumn");

        		if (hidingInfos.length > 0)
        		{
        			// 개인화 저장 하지 않고 설정 후 나갔다가 들어왔을 때 메뉴 등록을 하지 않도록 처리
        			if (this.orgColFullSize != this.chkColFullSize || this.chkSave == true)
        			{
        				show = "true";

        				// 숨긴 칼럼 정보 재구성
        				let rowPos = ds.findRow("id", "showColumn");
        				rowPos = ds.insertRow(rowPos + 1);
        				ds.setColumn(rowPos, "id", "showColumn_all");
        				ds.setColumn(rowPos, "level", "1");
        				ds.setColumn(rowPos, "caption", "Show All Column");
        				ds.setColumn(rowPos, "enable", "true");

        				for (let i = 0, len = hidingInfos.length; i < len; i++)
        				{
        					rowPos = ds.insertRow(rowPos + 1);
        					ds.setColumn(rowPos, "id", "showColumn_" + i);
        					ds.setColumn(rowPos, "level", "1");
        					ds.setColumn(rowPos, "caption", hidingInfos[i].text);
        					ds.setColumn(rowPos, "enable", "true");

        					if (ds.getColumn(i, "caption") == ds.getColumn(rowPos, "caption")) {
        						ds.deleteRow(i);
        					}
        				}
        			}
        		}

        		if (e.cell > -1 && obj.getBodyCellIndex(e.cell) > -1) {
        			hide = "true";
        		} else {
        			hide = "false";
        		}

        		ds.setColumn(hideColumnRowIndex, "enable", hide);
        		ds.setColumn(showColumnRowIndex, "enable", show);

        		// 대상 그리드와 셀 정보를 추가
        		pmnu.grid = obj;
        		pmnu.healColIndex = e.col;
        		pmnu.headCellIndex = e.cell;
        	}
        	else if (e.row > -1)
        	{
        		for (let i = ds.rowcount - 1; i > -1; i--)
        		{
        			if (ds.getColumn(i, "level") == "1") {
        				ds.deleteRow(i);
        			}

        			//컬럼 숨기기 메뉴 숨기기
        			if (ds.getColumn(i, "id") == "hideColumn" || ds.getColumn(i, "id") == "showColumn") {
        				ds.filterRow(i);
        			}
        		}

        		let hideRowIndex = ds.findRow("id", "hideRow");
        		let showRowIndex = ds.findRow("id", "showRow");

        		if (hidingRowInfos.length > -1 || obj.getRealRowSize(e.row) > 0)
        		{
        			// 개인화 저장 하지 않고 설정 후 나갔다가 들어왔을 때 메뉴 등록을 하지 않도록 처리
        			if (this.orgRowFullSize != this.chkRowFullSize || this.chkSave == true)
        			{
        				if (obj._hidingRowInfos.length != 0) {
        					show = "true";
        					// 숨긴 행 정보 재구성
        					let rowPos = ds.findRow("id", "showRow");
        					rowPos = ds.insertRow(rowPos + 1);
        					ds.setColumn(rowPos, "id", "showRow_all");
        					ds.setColumn(rowPos, "level", "1");
        					ds.setColumn(rowPos, "caption", "Show All Row");
        					ds.setColumn(rowPos, "enable", "true");
        					ds.setColumn(rowPos, "idx", "0"); // 행 숨기기 정렬을 위한 Index 값
        				}

        				let chkRowText = "Row : ";
        				chkRowText += e.row+1;
        				let orderByIdx = "";

        				for (let i = 0, len = hidingRowInfos.length; i < len; i++)
        				{
        					rowPos = ds.insertRow(rowPos + 1);
        					ds.setColumn(rowPos, "id", "showRow_" + i);
        					ds.setColumn(rowPos, "level", "1");
        					ds.setColumn(rowPos, "caption", hidingRowInfos[i].text);
        					ds.setColumn(rowPos, "enable", "true");
        					orderByIdx = hidingRowInfos[i].text.substr(6);
        					ds.setColumn(rowPos, "idx", orderByIdx); // 행 숨기기 정렬을 위한 Index 값

        					//중복 여부 체크
        					if (chkRowText == hidingRowInfos[i].text)
        					{
        						if (ds.getColumn(i, "caption") == ds.getColumn(rowPos+1, "caption")) {
        							ds.deleteRow(i);
        						}
        					}
        				}
        			}
        		}

        		if (e.row > -1) {
        			hide = "true";
        		} else {
        			hide = "false";
        		}

        		ds.setColumn(hideRowIndex, "enable", hide);
        		ds.setColumn(showRowIndex, "enable", show);
        		ds.keystring = "S:idx"; // 행 숨기기 정렬을 위한 Index 값

        		// 대상 그리드와 행 정보를 추가
        		pmnu.grid = obj;
        		pmnu.bodyRowIndex = e.row;
        		//pmnu.bodyRowRealSize = obj.getRealRowSize(hideRowIndex);
        		pmnu.bodyRowRealSize = 46;
        		pmnu.bodyRowHideSize = 0;
        	}
        	else
        	{
        		return;
        	}
        	//trace(ds.saveXML());
        	this.Button01.enable = true;

        	pmnu.trackPopupByComponent(obj, x, y);
        };

        this.PopupMenu00_onmenuclick = function(obj,e)
        {
        	let col = obj.healColIndex;
        	let cell = obj.headCellIndex;
        	let row = obj.bodyRowIndex;
        	let rowRealSize = obj.bodyRowRealSize;
        	let rowHideSize = obj.bodyRowHideSize;
        	let grid = obj.grid;

        	switch(e.id)
        	{
        		case "hideColumn":
        				this.Grid00.hideGridColumn(col, cell);
        			break;
        		default:
        		if (e.id.substr(0, 11) == "showColumn_") {
        			// 칼럼 숨기기 취소
        			let showIndex = e.id.substr(11);
        			if (showIndex == "all") {
        				this.Grid00.showGridColumnAll();
        			} else {
        				showIndex = parseInt(showIndex);
        				this.Grid00.showGridColumnByIndex([showIndex]);
        			}
        		}
        	}

        	switch(e.id)
        	{
        		case "hideRow" :
        			this.Grid00.hideGridRow(row, rowHideSize);
        			break;

        		default:
        		if (e.id.substr(0, 8) == "showRow_")
        		{
        			// 행 숨기기 취소
        			let showIndex = e.id.substr(8);
        			if (showIndex == "all") {
        				this.Grid00.showGridRowAll(rowRealSize);
        			} else {
        				showIndex = parseInt(showIndex);
        				this.Grid00.showGridRowByIndex([showIndex], rowRealSize);
        			}
        		}
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.chkSave = false;
        	this.Grid00.enableredraw = false;
        	this.Grid00.formats = this.fv_originFormats;
        	for (let i=0,len=this.fv_originRowSizeList.length; i<len; i++) {
        		this.Grid00.setRealRowSize(i, Number(this.fv_originRowSizeList[i]));
        	}
        	this.Grid00.enableredraw = true;

        	this.Grid00._hidingInfos.length = 0;
        	this.Grid00._hidingRowInfos.length = 0;

        	let rowPos = this.ds_contextmenu.findRow("id", "showRow");
        	this.ds_contextmenu.setColumn(rowPos, "enable", false);

        	nexacro.setPrivateProfile("grid.personalization.format", "");
        	nexacro.setPrivateProfile("grid.personalization.rowsize", "");
        	nexacro.setPrivateProfile("grid.personalization.hidinginfo", "");
        	nexacro.setPrivateProfile("grid.personalization.hidingrowinfo", "");

        	this.Button01.enable = false;
        	this.Button01.click();
        	//alert("Initialized.");
        };

        this.Button01_onclick = function(obj,e)
        {
        	let formatString = this.Grid00.getCurFormatString();
        	let rowSizeList = this.Grid00._rowSizeList.toString();
        	let hidingInfos = this.Grid00.getHidingInfos();
        	let hidingRowInfos = this.Grid00.getHidingRowInfos();

        	this.chkSave = true;

        	nexacro.setPrivateProfile("grid.personalization.format", formatString);
        	nexacro.setPrivateProfile("grid.personalization.rowsize", rowSizeList);
        	nexacro.setPrivateProfile("grid.personalization.hidinginfo", hidingInfos);
        	nexacro.setPrivateProfile("grid.personalization.hidingrowinfo", hidingRowInfos);

        	alert("Changes saved.");
        };

        this.form_onbeforeclose = function(obj,e)
        {
        	// 개인화 저장 상태가 아닐 경우 초기화
        	if (this.chkSave != true) {
        		this.Grid00._hidingInfos.length = 0;
        		this.Grid00._hidingRowInfos.length = 0;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.Grid00.addEventHandler("onrbuttondown",this.Grid00_onrbuttondown,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.PopupMenu00.addEventHandler("onmenuclick",this.PopupMenu00_onmenuclick,this);
        };
        this.loadIncludeScript("personalization.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
