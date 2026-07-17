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
                this._setFormPosition(920,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","15","42","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"grid.pivot\",\"Pivot\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.pivot");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.pivot.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.pivot.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","Static01:10","123","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"grid.pivot.largedata\",\"Large data pivot\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.pivot.largedata");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","Static02:2",null,"120","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"grid.pivot.largedata.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.pivot.largedata.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","Static03:20",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"grid.pivot.value.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.pivot.value.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","Static04:10","113","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.pivot.export\",\"Export to Excel\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.pivot.export");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","Static05:2",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"grid.pivot.export.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.pivot.export.desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,480,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pivot_desc.xfdl", function() {

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
        this.loadIncludeScript("pivot_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
