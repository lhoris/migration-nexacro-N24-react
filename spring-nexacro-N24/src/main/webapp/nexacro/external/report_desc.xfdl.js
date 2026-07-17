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
                this._setFormPosition(920,265);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","19","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"external.report\",\"Report\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("external.report");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2","880","60","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"external.report.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("external.report.desc");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","Static01:10","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"external.report.autogrid\",\"Auto (Grid)\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("external.report.autogrid");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","Static02:2","880","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"external.report.autogrid.desc\",\"A feature that automatically interprets the grid to create a report. Click the radio button to change the format of the grid and click the \'Preview\' button. Ubi Report automatically create report files without having to create report files by format.\r\nDrag & drop the grid heads to change order or click the \'Preview\' button after you click the head to sort the data. The report is created as it appears on the screen.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("external.report.autogrid.desc");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","Static03:10","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"external.report.autopivot\",\"Auto (Pivot)\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("external.report.autopivot");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","Static04:2","880","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"external.report.autopivot.desc\",\"A feature that automatically interprets pivot grids to create reports. Try changing the Pivot\'s row/column, alignment, and filter conditions and clicking the Preview button.  The report is created as it appears on the screen.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("external.report.autopivot.desc");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,265,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("report_desc.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("report_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
