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
                this._setFormPosition(920,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","15","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"grid.function.sort\",\"Sort\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.function.sort");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"156","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.function.sort.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.function.sort.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Static01:10",null,"461","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_contentBg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","60","Static01:14","356","387",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_con01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","480","Static01:14","356","393",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_con02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","Static02:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.function.filter\",\"Filter\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.function.filter");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","Static05:2",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"grid.function.filter.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.function.filter.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00","20","Static06:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("TEXT(\"grid.function.search\",\"Search\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.function.search");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00","20","Static15_00:2",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TEXT(\"grid.function.search.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.function.search.desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,930,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("function_desc.xfdl", function() {

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
        this.loadIncludeScript("function_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
