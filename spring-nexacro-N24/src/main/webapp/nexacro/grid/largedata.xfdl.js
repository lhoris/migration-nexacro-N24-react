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
                this._setFormPosition(920,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"first_name\" type=\"STRING\" size=\"256\"/><Column id=\"last_name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"married\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"money\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"first_name\" type=\"STRING\" size=\"256\"/><Column id=\"last_name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"married\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"money\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Female</Col><Col id=\"data\">Female</Col></Row><Row><Col id=\"code\">Male</Col><Col id=\"data\">Male</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.largedata\",\"Large Data\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("grid.largedata");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","66",null,"744","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("36");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("TEXT(\"grid.largedata.general\",\"General Expression\")");
            obj.getSetter("messageid").set("grid.largedata.general");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static03","0","94","120","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"inquiry.result\",\"Inquiry result\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("inquiry.result");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","13",null,"60","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","25","23","68","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"grid.rowcount\",\"Row count\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("grid.rowcount");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static02:20","23","150","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("40");
            var Tab00_Tabpage1_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Combo00_innerdataset", obj);
            Tab00_Tabpage1_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000</Col></Row><Row><Col id=\"codecolumn\">50000</Col><Col id=\"datacolumn\">50,000</Col></Row><Row><Col id=\"codecolumn\">100000</Col><Col id=\"datacolumn\">100,000</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Combo00_innerdataset);
            obj.set_text("10,000");
            obj.set_value("10000");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00",null,"20","46","46","10",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_inquiry");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","Static03:8",null,"514","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"No.\" color=\"#ffffff\"/><Cell col=\"1\" text=\"Name\" color=\"#ffffff\"/><Cell col=\"2\" text=\"Email\" color=\"#ffffff\"/><Cell col=\"3\" text=\"Gender\" color=\"#ffffff\"/><Cell col=\"4\" text=\"Married\" color=\"#ffffff\"/><Cell col=\"5\" text=\"Date\" color=\"#ffffff\"/><Cell col=\"6\" text=\"Money\" color=\"#ffffff\"/><Cell col=\"7\" text=\"Number\" color=\"#ffffff\"/><Cell col=\"8\" text=\"Button\" color=\"#ffffff\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:first_name\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:email\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:gender\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:married\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:money\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:number\" textAlign=\"right\"/><Cell col=\"8\" text=\"button\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"70\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"First name\"/><Cell col=\"2\" text=\"Last name\"/><Cell col=\"3\" text=\"Email\"/><Cell col=\"4\" text=\"Gender\"/><Cell col=\"5\" text=\"IP Address\"/><Cell col=\"6\" text=\"State\"/><Cell col=\"7\" text=\"Street\"/><Cell col=\"8\" text=\"Date\"/><Cell col=\"9\" text=\"Domain\"/><Cell col=\"10\" text=\"GUID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:first_name\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:last_name\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:email\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:gender\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ip_address\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:state\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:street\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:domain\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:guid\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stSearchTimeOrg","0","648","865","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"grid.largedata.networktime\")");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txt14px");
            obj.getSetter("messageid").set("grid.largedata.networktime");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("TEXT(\"grid.largedata.multi\",\"Multi Expression\")");
            obj.getSetter("messageid").set("grid.largedata.multi");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","13",null,"60","0",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02","25","23","68","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"grid.rowcount\",\"Row count\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("grid.rowcount");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static02:20","23","150","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("40");
            var Tab00_Tabpage2_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_Combo00_innerdataset", obj);
            Tab00_Tabpage2_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000</Col></Row><Row><Col id=\"codecolumn\">50000</Col><Col id=\"datacolumn\">50,000</Col></Row><Row><Col id=\"codecolumn\">100000</Col><Col id=\"datacolumn\">100,000</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_Combo00_innerdataset);
            obj.set_text("10,000");
            obj.set_value("10000");
            obj.set_index("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00",null,"20","46","46","10",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_inquiry");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static03","0","94","120","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"inquiry.result\",\"Inquiry result\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("inquiry.result");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("stSearchTimeOrg","0",null,"865","40",null,"20",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.largedata.networktime\")");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txt14px");
            obj.getSetter("messageid").set("grid.largedata.networktime");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","132",null,null,"0","62",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsList00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"No.\" color=\"#ffffff\"/><Cell col=\"1\" text=\"Name\" color=\"#ffffff\"/><Cell col=\"2\" text=\"Email\" color=\"#ffffff\"/><Cell col=\"3\" text=\"Gender\" color=\"#ffffff\"/><Cell col=\"4\" text=\"Married\" color=\"#ffffff\"/><Cell col=\"5\" text=\"Date\" color=\"#ffffff\"/><Cell col=\"6\" text=\"Money\" color=\"#ffffff\"/><Cell col=\"7\" text=\"Number\" color=\"#ffffff\"/><Cell col=\"8\" text=\"Button\" color=\"#ffffff\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:first_name\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:email\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:gender\" textAlign=\"left\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCombo\" combodatacol=\"data\" combocodecol=\"code\"/><Cell col=\"4\" text=\"bind:married\" textAlign=\"right\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"married\" checkboxfalsevalue=\"single\"/><Cell col=\"5\" text=\"bind:date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:money\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" text=\"bind:number\" textAlign=\"right\" displaytype=\"progressbarcontrol\" padding=\"5px\" progressbarsmooth=\"true\"/><Cell col=\"8\" text=\"button\" displaytype=\"buttoncontrol\" cursor=\"pointer\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"70\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"First name\"/><Cell col=\"2\" text=\"Last name\"/><Cell col=\"3\" text=\"Email\"/><Cell col=\"4\" text=\"Gender\"/><Cell col=\"5\" text=\"IP Address\"/><Cell col=\"6\" text=\"State\"/><Cell col=\"7\" text=\"Street\"/><Cell col=\"8\" text=\"Date\"/><Cell col=\"9\" text=\"Domain\"/><Cell col=\"10\" text=\"GUID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:first_name\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:last_name\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:email\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:gender\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ip_address\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:state\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:street\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:domain\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:guid\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("largedata.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	this.langCode = nexacro.getApplication().langCode;
        };

        this.Tab00_Tabpage1_Button00_onclick = function(obj,e)
        {
        	this.dsList.clearData();

        	if (this.langCode == "ko") {
        		this.Tab00.Tabpage1.form.stSearchTimeOrg.text = "서버/네트워크시간 <fc v='#d7381e'>0</fc> 초, 렌더링시간 <fc v='#d7381e'>0</fc> 초, 조회건수 <fc v='#d7381e'>0</fc> 건";
        	} else {
        		this.Tab00.Tabpage1.form.stSearchTimeOrg.text = "Server/Network <fc v='#d7381e'>0</fc> sec, UI Rendering <fc v='#d7381e'>0</fc> sec, <fc v='#d7381e'>0</fc> rows";
        	}

        	let strSvcId = "search";
        	let strSvcUrl = "svc::largedata";
        	let inData = "";
        	let outData = "dsList=output";
        	let strArg = "rowcount=" + nexacro.wrapQuote(this.Tab00.Tabpage1.form.Combo00.value);
        	let callBackFnc = "fnCallback";
        	let isAsync = true;
        	let nDataType = 2;

        	this.starttime = new Date();
        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync, nDataType);
        };

        this.Tab00_Tabpage2_Button00_onclick = function(obj,e)
        {
        	this.dsList00.clearData();

        	if (this.langCode == "ko") {
        		this.Tab00.Tabpage2.form.stSearchTimeOrg.text = "서버/네트워크시간 <fc v='#d7381e'>0</fc> 초, 렌더링시간 <fc v='#d7381e'>0</fc> 초, 조회건수 <fc v='#d7381e'>0</fc> 건";
        	} else {
        		this.Tab00.Tabpage2.form.stSearchTimeOrg.text = "Server/Network <fc v='#d7381e'>0</fc> sec, UI Rendering <fc v='#d7381e'>0</fc> sec, <fc v='#d7381e'>0</fc> rows";
        	}

        	let strSvcId = "search00";
        	let strSvcUrl = "svc::largedata";
        	let inData = "";
        	let outData = "dsList00=output";
        	let strArg = "rowcount=" + nexacro.wrapQuote(this.Tab00.Tabpage2.form.Combo00.value);
        	let callBackFnc = "fnCallback";
        	let isAsync = true;
        	let nDataType = 2;

        	this.starttime = new Date();
        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync, nDataType);

        };

        this.Tab00_Tabpage2_Grid00_oncellclick = function(obj,e)
        {
        	obj.dropdownCalendar();
        	obj.dropdownCombo();
        };

        this.fnCallback = function(svcId, errCode, errMsg, elapsedTime)
        {
        	if (errCode < 0) {
        		alert(errMsg);
        	} else {
        		// 탭1
        		if (svcId == "search") {
        			this.endtime = new Date();
        			let totaltime = nexacro.round((this.endtime - this.starttime) / 1000, 3);
        			let nRowCount = this.dsList.rowcount;
        			if (this.langCode == "ko") {
        				this.Tab00.Tabpage1.form.stSearchTimeOrg.text = "서버/네트워크시간 <fc v='#d7381e'>" + elapsedTime + "</fc> 초, 렌더링시간 <fc v='#d7381e'>" + nexacro.round(totaltime - elapsedTime, 3) + "</fc> 초, 조회건수 <fc v='#d7381e'>" +  this.gfnAppendComma(this.dsList.rowcount) + "</fc>" + " 건";
        			} else {
        				this.Tab00.Tabpage1.form.stSearchTimeOrg.text = "Server/Network <fc v='#d7381e'>" + elapsedTime + "</fc> sec, UI Rendering <fc v='#d7381e'>" + nexacro.round(totaltime - elapsedTime, 3) + "</fc> sec, <fc v='#d7381e'>" +  this.gfnAppendComma(this.dsList.rowcount) + "</fc>" + " rows";
        			}

        		// 탭2
        		} else if (svcId == "search00") {
        			this.endtime = new Date();
        			let totaltime = nexacro.round((this.endtime - this.starttime) / 1000, 3);
        			let nRowCount = this.dsList00.rowcount;
        			if (this.langCode == "ko") {
        				this.Tab00.Tabpage2.form.stSearchTimeOrg.text = "서버/네트워크시간 <fc v='#d7381e'>" + elapsedTime + "</fc> 초, 렌더링시간 <fc v='#d7381e'>" + nexacro.round(totaltime - elapsedTime, 3) + "</fc> 초, 조회건수 <fc v='#d7381e'>" +  this.gfnAppendComma(this.dsList00.rowcount) + "</fc>" + " 건";
        			} else {
        				this.Tab00.Tabpage2.form.stSearchTimeOrg.text = "Server/Network <fc v='#d7381e'>" + elapsedTime + "</fc> sec, UI Rendering <fc v='#d7381e'>" + nexacro.round(totaltime - elapsedTime, 3) + "</fc> sec, <fc v='#d7381e'>" +  this.gfnAppendComma(this.dsList00.rowcount) + "</fc>" + " rows";
        			}

        		}
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Tab00.Tabpage1.addEventHandler("onsize",this.Tab00_Tabpage1_onsize,this);
            this.Tab00.Tabpage1.form.Button00.addEventHandler("onclick",this.Tab00_Tabpage1_Button00_onclick,this);
            this.Tab00.Tabpage2.form.Button00.addEventHandler("onclick",this.Tab00_Tabpage2_Button00_onclick,this);
            this.Tab00.Tabpage2.form.Grid00.addEventHandler("oncellclick",this.Tab00_Tabpage2_Grid00_oncellclick,this);
        };
        this.loadIncludeScript("largedata.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
