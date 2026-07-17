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
                this._setFormPosition(920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"50\"/><Column id=\"col2\" type=\"STRING\" size=\"50\"/><Column id=\"col3\" type=\"STRING\" size=\"50\"/><Column id=\"col4\" type=\"STRING\" size=\"50\"/><Column id=\"col5\" type=\"STRING\" size=\"50\"/><Column id=\"col6\" type=\"STRING\" size=\"50\"/><Column id=\"col7\" type=\"STRING\" size=\"50\"/><Column id=\"col8\" type=\"STRING\" size=\"50\"/><Column id=\"col9\" type=\"STRING\" size=\"50\"/><Column id=\"col10\" type=\"STRING\" size=\"50\"/><Column id=\"col11\" type=\"STRING\" size=\"50\"/><Column id=\"col12\" type=\"INT\" size=\"8\"/><Column id=\"col13\" type=\"INT\" size=\"8\"/><Column id=\"col14\" type=\"INT\" size=\"8\"/><Column id=\"col15\" type=\"INT\" size=\"8\"/><Column id=\"col16\" type=\"INT\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new ExcelExportObject("ExcelExportObject00", this);
            obj.set_exportuitype("exportprogress");
            obj.set_exportactivemode("active");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","59","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.pivot\",\"Pivot\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("grid.pivot");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","71",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","45","81","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Row count");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("grid.rowcount");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static02:20","81","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("40");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">30000</Col><Col id=\"datacolumn\">30,000</Col></Row><Row><Col id=\"codecolumn\">100000</Col><Col id=\"datacolumn\">100,000</Col></Row><Row><Col id=\"codecolumn\">200000</Col><Col id=\"datacolumn\">200,000</Col></Row><Row><Col id=\"codecolumn\">400000</Col><Col id=\"datacolumn\">400,000</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("10,000");
            obj.set_value("10000");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"78","46","46","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_inquiry");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","152","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"inquiry.result\",\"Inquiry result\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("inquiry.result");
            this.addChild(obj.name, obj);

            obj = new NxPivot("NxPivot00","20","Static03:10",null,"542","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_gridbodyheight("36");
            obj.set_gridheadheight("36");
            obj.set_gridsummheight("36");
            obj._setContents({"config":{
            		"fields": [],
            		"colAxis": [
            			{
            				"id": "col1",
            				"itemText": "Date",
            				"type": "date",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "CNT"
            			},
            			{
            				"id": "col9",
            				"itemText": "Channel",
            				"type": "string",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "CNT"
            			}
            		],
            		"rowAxis": [
            			{
            				"id": "col3",
            				"itemText": "Sales Department",
            				"type": "string",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "CNT"
            			},
            			{
            				"id": "col5",
            				"itemText": "Department",
            				"type": "string",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "CNT"
            			}
            		],
            		"values": [
            			{
            				"id": "col12",
            				"itemText": "Total Sales",
            				"type": "number",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "SUM"
            			},
            			{
            				"id": "col13",
            				"itemText": "Total Return Sales",
            				"type": "number",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "SUM"
            			},
            			{
            				"id": "col14",
            				"itemText": "Overcharge Price",
            				"type": "number",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "SUM"
            			},
            			{
            				"id": "col15",
            				"itemText": "Promotion Amount",
            				"type": "number",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "SUM"
            			},
            			{
            				"id": "col16",
            				"itemText": "Net Sales",
            				"type": "number",
            				"itemWidth": "100",
            				"sort": "ASC",
            				"aggregator": "SUM"
            			}
            		],
            		"filters": []
            	},
            	"panel":{
            		"toolbar": {
            			"size": "28",
            			"padding": "3 3 3 3",
            			"gap": "2",
            			"buttonsize": "20",
            			"cssclass": "NxPivot_toolbarArea",
            			"lbuttons": {
            				"9d5d6862-9a9f-dc4f-383a-ebaacda08ec1": {
            					"type": "rowsstatus",
            					"id": "addnew",
            					"toggle": "1",
            					"togglevalue": "0",
            					"tooltip": "expand row,collapse row",
            					"cssclass": "NxPivot_toolbarButton_rowstatus_expand,NxPivot_toolbarButton_rowstatus_collapse",
            					"align": "left"
            				},
            				"e98d42fb-8763-cba2-08f8-ebaad54eb13a": {
            					"type": "columnsstatus",
            					"id": "addnew",
            					"toggle": "1",
            					"togglevalue": "0",
            					"tooltip": "expand column, collapse column",
            					"cssclass": "NxPivot_toolbarButton_colstatus_expand,NxPivot_toolbarButton_colstatus_collapse",
            					"align": "left"
            				}
            			},
            			"rbuttons": {
            				"d5aa4f21-94f5-083d-4197-ebaadcae1c59": {
            					"type": "toolbarstatus",
            					"id": "addnew",
            					"toggle": "1",
            					"togglevalue": "0",
            					"tooltip": "collapse panel, expand panel",
            					"cssclass": "NxPivot_toolbarButton_show, NxPivot_toolbarButton_hide",
            					"align": "right"
            				},
            				"938f5595-2cda-51f5-409a-ebaae39fd6e3": {
            					"type": "execute",
            					"id": "addnew",
            					"toggle": "0",
            					"tooltip": "execute",
            					"cssclass": "NxPivot_toolbarButton_execute",
            					"align": "right"
            				},
            				"7a5dea33-a3ce-7e3d-57fb-ebaaeafedc2d": {
            					"type": "initialization",
            					"id": "addnew",
            					"toggle": "0",
            					"tooltip": "init",
            					"cssclass": "NxPivot_toolbarButton_init",
            					"align": "right"
            				},
            				"9c1d7a87-78a8-8c26-3789-ebaaf28e5bd1": {
            					"type": "autoexecute",
            					"id": "addnew",
            					"toggle": "1",
            					"togglevalue": "0",
            					"tooltip": "manual execute,auto execute",
            					"cssclass": "NxPivot_toolbarButton_manual,NxPivot_toolbarButton_auto",
            					"align": "right"
            				}
            			}
            		},
            		"items": {
            			"size": "120",
            			"cssclass1": "NxPivot_axisArea1",
            			"cssclass2": "NxPivot_axisArea2",
            			"padding": "5 5 5 5",
            			"gap": "3",
            			"titlebarsize": "20",
            			"titlebarcssclass": "NxPivot_axisArea_title",
            			"indicatorwidth": "16",
            			"indicatorheight": "42",
            			"indicatorcssclass": "NxPivot_drag_indicator",
            			"item": {
            				"width": "150",
            				"height": "35",
            				"padding": "6 6 6 6",
            				"gap": "4",
            				"cssclass": "NxPivot_axisArea_item",
            				"sortasccssclass": "NxPivot_axisArea_item_asc",
            				"sortdesccssclass": "NxPivot_axisArea_item_desc",
            				"filtercssclass": "NxPivot_axisArea_item_filter",
            				"aggregatorcssclass": "NxPivot_axisArea_item_aggregator",
            				"settingcssclass": "NxPivot_axisArea_item_setting",
            				"namecssclass": "NxPivot_axisArea_item_name",
            				"sortsize": "14",
            				"filtersize": "14",
            				"aggregatorsize": "20",
            				"buttonsize": "14"
            			}
            		}
            	},
            	"settingpopup":{
            		"cssclass": "NxPivot_popup",
            		"width": "200",
            		"height": "200",
            		"padding": "10 10 10 10",
            		"buttonwidth": "50",
            		"buttonheight": "25",
            		"buttonalign": "center",
            		"okbuttoncssclass": "NxPivot_popup_submit",
            		"cancelbuttoncssclass": "NxPivot_popup_close",
            		"labelcssclass": "NxPivot_popup_subtitle",
            		"dateformat": "yyyy-MM-dd"
            	}});
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","NxPivot00:6","865","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Server/Network <fc v=\'red\'>0</fc> sec, UI Rendering <fc v=\'red\'>0</fc> sec, <fc v=\'red\'>0</fc> rows");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txt14px");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"147","100","40","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TEXT(\"grid.export\",\"Export\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("grid.export");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pivot.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	this.langCode = nexacro.getApplication().langCode;
        	this.clearResult();

        	// 피벗 다국어 처리
        	this.gfnChangeLanguage(this.NxPivot00, this.langCode == "ko" ? "ko_kr" : "en_us");
        };

        this.clearResult = function()
        {
        	if (this.langCode == "ko") {
        		this.Static00.text = "서버/네트워크시간 <fc v='#d7381e'>0</fc> 초, 렌더링시간 <fc v='#d7381e'>0</fc> 초, 조회건수 <fc v='#d7381e'>0</fc> 건";
        	} else {
        		this.Static00.text = "Server/Network <fc v='#d7381e'>0</fc> sec, UI Rendering <fc v='#d7381e'>0</fc> sec, <fc v='#d7381e'>0</fc> rows";
        	}
        };

        // 피벗 다국어처리
        this.gfnChangeLanguage = function(objPivot, sLang)
        {
        	let objPanel = objPivot.pivot.view.panel;
        	objPanel.language = objPivot.pivot.message.language[sLang];
        	objPanel.commCodeToolbar = objPanel.language.toolbar;
        	objPanel.toolbarButtonType = [ objPanel.commCodeToolbar.buttontypes[0].key , objPanel.commCodeToolbar.buttontypes[1].key , objPanel.commCodeToolbar.buttontypes[2].key
        							, objPanel.commCodeToolbar.buttontypes[3].key , objPanel.commCodeToolbar.buttontypes[4].key , objPanel.commCodeToolbar.buttontypes[5].key ];

        	objPanel.commCodeAxis = objPanel.language.axisArea;
        	objPanel.axisAreaInfo = {
        		axistypes : [ objPanel.commCodeAxis.types[0].key ,objPanel.commCodeAxis.types[1].key ,objPanel.commCodeAxis.types[2].key ,objPanel.commCodeAxis.types[3].key ],
        		axistext : [ objPanel.commCodeAxis.types[0].text ,objPanel.commCodeAxis.types[1].text ,objPanel.commCodeAxis.types[2].text ,objPanel.commCodeAxis.types[3].text	]
        	}
        	objPivot.redraw();
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.dsList.clearData();

        	this.clearResult();

        	let strSvcId = "search";
        	let strSvcUrl = "svc::pivotdata";
        	let inData = "";
        	let outData = "dsList=output";
        	let strArg = "rowcount=" + nexacro.wrapQuote(this.Combo00.value) + " langCode=" + this.langCode;
        	let callBackFnc = "fnCallback";
        	let isAsync = true;
        	let nDataType = 2;

        	this.starttime = new Date();
        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync, nDataType);
        };

        this.fnCallback = function(svcId, errCode, errMsg, elapsedTime)
        {
        	if (errCode < 0) {
        		alert(errMsg);
        	} else {
        		if (svcId == "search") {
        			this.endtime = new Date();

        			this.NxPivot00.updateToDataset();
        			this.NxPivot00.render();
        		}
        	}
        };

        this.NxPivot00_onrender = function(obj, e)
        {
        	this.rendertime = new Date();

        	let nTranTime = nexacro.round((this.endtime - this.starttime) / 1000, 3);
        	let nRenderTime = nexacro.round((this.rendertime - this.endtime) / 1000, 3);

        	if (this.langCode == "ko") {
        		this.Static00.text = "서버/네트워크시간 <fc v='#d7381e'>" + nTranTime + "</fc> 초, 렌더링시간 <fc v='#d7381e'>" + nRenderTime + "</fc> 초, 조회건수 <fc v='#d7381e'>" +  this.gfnAppendComma(this.dsList.rowcount) + "</fc>" + " 건";
        	} else {
        		this.Static00.text = "Server/Network <fc v='#d7381e'>" + nTranTime + "</fc> sec, UI Rendering <fc v='#d7381e'>" + nRenderTime + "</fc> sec, <fc v='#d7381e'>" +  this.gfnAppendComma(this.dsList.rowcount) + "</fc>" + " rows";
        	}
        };

        this.Tab00_Tabpage1_Button02_onclick = function(obj,e)
        {
        	this.ExcelExportObject00.clear();

        	this.ExcelExportObject00.exporttype = nexacro.ExportTypes.EXCEL2007;
        	this.ExcelExportObject00.exporturl = "xeni::XExportImport";
        	this.ExcelExportObject00.exportfilename = "PivotExportSample";

        	this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.NxPivot00.getPivotGrid(), "Sheet1!A1", "allband", "allrecord", "suppress", "allstyle", "none", "border", "both");

        	this.ExcelExportObject00.exportData();
        };

        this.ExcelImportObject00_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.NxPivot00.addEventHandler("onrender",this.NxPivot00_onrender,this);
            this.Button02.addEventHandler("onclick",this.Tab00_Tabpage1_Button02_onclick,this);
            this.dsList.addEventHandler("onload",this.dsList_onload,this);
            this.ExcelExportObject00.addEventHandler("onerror",this.ExcelExportObject00_onerror,this);
        };
        this.loadIncludeScript("pivot.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
