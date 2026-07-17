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
                this._setFormPosition(920,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static04","20","15","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"grid.dynamic.add\",\"Add Row/Column\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.dynamic.add");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","Static04:2",null,"73","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.dynamic.add.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.dynamic.add.desc");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","20","Static00_00:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"grid.dynamic.merge\",\"Row merge\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.dynamic.merge");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","Static04_00:2",null,"73","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"grid.dynamic.merge.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.dynamic.merge.desc");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","Static00_00_00:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"grid.dynamic.design\",\"Cell Design\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.dynamic.design");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","Static04_00_00:2",null,"73","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.dynamic.design.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.dynamic.design.desc");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dynamic_desc.xfdl", function() {

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
        this.loadIncludeScript("dynamic_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
