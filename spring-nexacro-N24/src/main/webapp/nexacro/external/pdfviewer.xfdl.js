(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pdfviewer");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">NEXACRO_N_kr.pdf</Col></Row><Row><Col id=\"Column0\">nexacro17_en.pdf</Col></Row><Row><Col id=\"Column0\">TOBESOFT-CONSULTING.pdf</Col></Row><Row><Col id=\"Column0\">Conversion-Service.pdf</Col></Row><Row><Col id=\"Column0\">X-PUSH-v28.pdf</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","14","128","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"external.pdfviewer\",\"PDF Viewer\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("external.pdfviewer");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","20","152",null,"588","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","66",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","40","76","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("PDF File");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","127","76","263","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_itemheight("40");
            obj.set_text("NEXACRO_N_kr.pdf");
            obj.set_value("NEXACRO_N_kr.pdf");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pdfviewer.xfdl", function() {

        this.pdfviewer_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	this.loadPdfViewer(this.Combo00.value);
        };

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.loadPdfViewer(e.postvalue);
        };

        this.loadPdfViewer = function(filename)
        {
        	let webrootUrl = nexacro.getProjectPath();
        	this.WebBrowser00.url = webrootUrl + "../pdfjs-dist/web/viewer.html?file=" + filename;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pdfviewer_onload,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };
        this.loadIncludeScript("pdfviewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
