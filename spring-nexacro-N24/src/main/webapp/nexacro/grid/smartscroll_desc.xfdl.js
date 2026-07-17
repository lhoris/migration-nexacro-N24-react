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
                this._setFormPosition(920,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static11","20","15","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.function.smartscroll\",\"Smart Scroll\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.function.smartscroll");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","Static11:2",null,"140","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"grid.function.smartscroll.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.function.smartscroll.desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smartscroll_desc.xfdl", function() {

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
        this.loadIncludeScript("smartscroll_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
