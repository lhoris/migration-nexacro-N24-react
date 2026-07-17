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
                this._setFormPosition(920,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"INT\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"productName\" type=\"STRING\" size=\"256\"/><Column id=\"unitPrice\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"qty\" type=\"INT\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"productId\">A10001</Col><Col id=\"productName\">TV</Col><Col id=\"unitPrice\">2000000</Col><Col id=\"qty\">1</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"productId\">A10002</Col><Col id=\"productName\">Tablet</Col><Col id=\"unitPrice\">900000</Col><Col id=\"qty\">3</Col></Row><Row><Col id=\"no\">3</Col><Col id=\"productId\">A10003</Col><Col id=\"productName\">Phone</Col><Col id=\"unitPrice\">1500000</Col><Col id=\"qty\">8</Col></Row><Row><Col id=\"no\">4</Col><Col id=\"productId\">A10004</Col><Col id=\"productName\">Keyboard</Col><Col id=\"unitPrice\">20000</Col><Col id=\"qty\">5</Col></Row><Row><Col id=\"no\">5</Col><Col id=\"productId\">A10005</Col><Col id=\"productName\">Mouse</Col><Col id=\"unitPrice\">30000</Col><Col id=\"qty\">3</Col></Row><Row><Col id=\"no\">6</Col><Col id=\"productId\">A10006</Col><Col id=\"productName\">Watch</Col><Col id=\"unitPrice\">500000</Col><Col id=\"qty\">2</Col></Row><Row><Col id=\"no\">7</Col><Col id=\"productId\">A10007</Col><Col id=\"productName\">Laptop</Col><Col id=\"unitPrice\">2200000</Col><Col id=\"qty\">10</Col></Row><Row><Col id=\"no\">8</Col><Col id=\"productId\">A10008</Col><Col id=\"productName\">Monitor</Col><Col id=\"unitPrice\">200000</Col><Col id=\"qty\">10</Col></Row><Row><Col id=\"no\">9</Col><Col id=\"productId\">B10001</Col><Col id=\"productName\">Notebook</Col><Col id=\"unitPrice\">5000</Col><Col id=\"qty\">30</Col></Row><Row><Col id=\"no\">10</Col><Col id=\"productId\">B10002</Col><Col id=\"productName\">Tumbler</Col><Col id=\"unitPrice\">30000</Col><Col id=\"qty\">5</Col></Row><Row><Col id=\"no\">11</Col><Col id=\"productId\">B10003</Col><Col id=\"productName\">Pen</Col><Col id=\"unitPrice\">2000</Col><Col id=\"qty\">200</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSheet", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new ExcelExportObject("ExcelExportObject00", this);
            obj.set_exportuitype("exportprogress");
            obj.set_exportactivemode("active");
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","20","20","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.export.import\",\"Export & Import\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("grid.export.import");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","76",null,"564","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("36");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Export");
            obj.getSetter("messageid").set("grid.export");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01","0","20",null,"60","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","20","30","80","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"grid.export.type\",\"Export type\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("grid.export.type");
            obj.set_fittocontents("none");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static02:20","30","150","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("40");
            var Tab00_Tabpage1_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Combo00_innerdataset", obj);
            Tab00_Tabpage1_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">288</Col><Col id=\"datacolumn\">Excel</Col></Row><Row><Col id=\"codecolumn\">1040</Col><Col id=\"datacolumn\">Hancell</Col></Row><Row><Col id=\"codecolumn\">1280</Col><Col id=\"datacolumn\">CSV</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Combo00_innerdataset);
            obj.set_text("Excel");
            obj.set_value("288");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","0","101","120","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"inquiry.result\",\"Inquiry result\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("inquiry.result");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","Static03:10",null,null,"0","10",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"#\"/><Cell col=\"1\" text=\"Product ID\"/><Cell col=\"2\" text=\"Product Name\"/><Cell col=\"3\" text=\"Unit Price\"/><Cell col=\"4\" text=\"Qty\"/><Cell col=\"5\" text=\"Amount\"/><Cell col=\"6\" text=\"notes\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\" text=\"bind:productId\"/><Cell col=\"2\" text=\"bind:productName\"/><Cell col=\"3\" text=\"bind:unitPrice\" displaytype=\"currency\"/><Cell col=\"4\" text=\"bind:qty\"/><Cell col=\"5\" text=\"expr:unitPrice*qty\" displaytype=\"currency\"/><Cell col=\"6\" text=\"bind:notes\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02",null,"30","100","40","10",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.export\",\"Export\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("grid.export");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","381","30","70","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"grid.import.password\",\"Password\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("grid.import.password");
            obj.set_fittocontents("none");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static02_00_00:20","30","103","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_password("true");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Import");
            obj.getSetter("messageid").set("grid.import");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01","0","20",null,"60","0",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02","20","30","80","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"grid.import.type\",\"Import type\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("grid.import.type");
            obj.set_fittocontents("none");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static02:10","30","150","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage2_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_Combo00_innerdataset", obj);
            Tab00_Tabpage2_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">288</Col><Col id=\"datacolumn\">Excel</Col></Row><Row><Col id=\"codecolumn\">1040</Col><Col id=\"datacolumn\">Hancell</Col></Row><Row><Col id=\"codecolumn\">1280</Col><Col id=\"datacolumn\">CSV</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_Combo00_innerdataset);
            obj.set_text("Excel");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static03","5","106","120","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"inquiry.result\",\"Sheet List\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("inquiry.result");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("Grid00","140","148",null,null,"0","10",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsImport");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_cssclass("grd_WF_part");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button02",null,"30","100","40","10",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.import\",\"Import\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("grid.import");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02_00","Combo00:20","30","223","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"grid.import.include.header\",\"Include Column Names as Header\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("grid.import.include.header");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","Static02_00:10","30","28","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","CheckBox00:20","30","64","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("TEXT(\"grid.import.password\",\"Password\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("grid.import.password");
            obj.set_fittocontents("none");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static02_00_00:10","30","103","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_password("true");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","5","148","130",null,null,"10",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsSheet");
            obj.set_codecolumn("number");
            obj.set_datacolumn("sheetname");
            obj.set_itemheight("40");
            obj.set_text("Sheet1");
            obj.set_value("Sheet1");
            obj.set_index("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00",null,"101","150","40","0",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("TEXT(\"grid.import.download.testfile\",\"Download Test File\")");
            obj.getSetter("messageid").set("grid.import.download.testfile");
            obj.set_cssclass("btn_WF_basic02");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,610,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("export.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        this.Tab00_Tabpage1_Button02_onclick = function(obj,e)
        {
        	let exportType = this.Tab00.Tabpage1.form.Combo00.value;
        	let password = this.Tab00.Tabpage1.form.Edit00.value;

        	this.ExcelExportObject00.clear();

        	this.ExcelExportObject00.exporttype = exportType;
        	this.ExcelExportObject00.exporturl = "xeni::XExportImport";
        	this.ExcelExportObject00.exportfilename = "ExportSample";
        	this.ExcelExportObject00.exportfilepassword = password;

        	this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, this.Tab00.Tabpage1.form.Grid00, "Sheet1!A1", "allband", "allrecord", "suppress", "allstyle", "none", "border", "both");

        	this.ExcelExportObject00.exportData();
        };

        this.Tab00_Tabpage2_Button02_onclick = function(obj,e)
        {
        	this.dsSheet.clear();
        	this.dsImport.clear();
        	this.Tab00.Tabpage2.form.Grid00.createFormat();
        	this.Tab00.Tabpage2.form.ListBox00.index = -1;

        	let importType = nexacro.toNumber(this.Tab00.Tabpage2.form.Combo00.value);
        	let useHeader = this.Tab00.Tabpage2.form.CheckBox00.isChecked();
        	let password = this.Tab00.Tabpage2.form.Edit00.value;
        	let accept= "", strArgument = "";

        	if (!(password)) {
        		strArgument = "filepassword=" + password;
        	}

        	switch (importType) {
        		case nexacro.ImportTypes.EXCEL2007 :
        			accept = "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        			break;
        		case nexacro.ImportTypes.HANCELL2014 :
        			accept = ".cell";
        			break;
        		case nexacro.ImportTypes.CSV :
        			accept = "text/plain,.csv";
        			break;
        	}

        	this.ExcelImportObject00.accept = accept;
        	this.ExcelImportObject00.importfilemode = "local";
        	this.ExcelImportObject00.importtype = importType;
        	this.ExcelImportObject00.importurl = "xeni::XExportImport";

        	if (importType == nexacro.ImportTypes.CSV) {
        		this.ExcelImportObject00.importData("local", "[Command=getsheetdata;Output=output]", "dsImport=output", strArgument);
        	} else {
        		this.ExcelImportObject00.importData("local", "[Command=getsheetlist;Output=sheetlist]", "dsSheet=sheetlist", strArgument);
        	}
        };

        this.ExcelImportObject00_onsuccess = function(obj,e)
        {
        	var useHeader = this.Tab00.Tabpage2.form.CheckBox00.isChecked();

        	if (useHeader) {
        		this.dsImport.deleteRow(0);
        	}

        	//this.importedUrl = obj.importfilemode=="server"?e.url:"xeni::import"+e.url;
        	//this.importedUrl = obj.importfilemode=="server"?e.url:nexacro.getEnvironment().services["xeni"].url+"import"+e.url;
        	this.importedUrl = e.url;
        	//trace(this.importedUrl);
        	//trace(this.dsSheet.saveXML());
        	//trace(this.dsImport.saveXML());
        	let grid = this.Tab00.Tabpage2.form.Grid00;
        	grid.createFormat();
        	grid.setFormatRowProperty(0, "size", 46);
        	grid.setFormatRowProperty(1, "size", 46);
        };

        this.ExcelImportObject00_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        this.Tab00_Tabpage2_ListBox00_onitemchanged = function(obj,e)
        {
        	let useHeader = this.Tab00.Tabpage2.form.CheckBox00.isChecked();
        	let password = this.Tab00.Tabpage2.form.Edit00.value;
        	let strArgument = "";

        	if (!(password)) {
        		strArgument = "filepassword=" + password;
        	}
        	//trace("[Command=getsheetdata;Output=output;"+(useHeader?"Head="+e.posttext+"!A1:Z1;":"")+"Body="+e.posttext+"!]");
        	//trace(this.importedUrl);
        	this.ExcelImportObject00.importfilemode = "server";
        	this.ExcelImportObject00.importData(this.importedUrl, "[Command=getsheetdata;Output=output;"+(useHeader?"Head="+e.posttext+"!A1:Z1;":"")+"Body="+e.posttext+"!]", "dsImport=output", strArgument);
        };

        this.Tab00_Tabpage2_Button00_onclick = function(obj,e)
        {
        	this.FileDownTransfer00.download(nexacro.getEnvironment().services["xeni"].url+"download/import-sample");
        };

        this.ExcelExportObject00_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.Button02.addEventHandler("onclick",this.Tab00_Tabpage1_Button02_onclick,this);
            this.Tab00.Tabpage2.form.Button02.addEventHandler("onclick",this.Tab00_Tabpage2_Button02_onclick,this);
            this.Tab00.Tabpage2.form.ListBox00.addEventHandler("onitemchanged",this.Tab00_Tabpage2_ListBox00_onitemchanged,this);
            this.Tab00.Tabpage2.form.Button00.addEventHandler("onclick",this.Tab00_Tabpage2_Button00_onclick,this);
            this.ExcelExportObject00.addEventHandler("onerror",this.ExcelExportObject00_onerror,this);
            this.ExcelImportObject00.addEventHandler("onsuccess",this.ExcelImportObject00_onsuccess,this);
            this.ExcelImportObject00.addEventHandler("onerror",this.ExcelImportObject00_onerror,this);
        };
        this.loadIncludeScript("export.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
