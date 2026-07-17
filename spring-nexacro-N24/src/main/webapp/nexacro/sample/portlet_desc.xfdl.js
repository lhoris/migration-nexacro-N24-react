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
                this._setFormPosition(920,485);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","15","79","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"sample.portlet\",\"Portlet\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("sample.portlet");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.portlet.desc\",\"You can configure the portlet screen in the form of the Metro UI.\r\nTry repositioning the portlets with drag and drop.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("sample.portlet.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","Static01:10","435","378",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("url(\'imagerc::Portlet/portlelt01.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","Static03_00:10","Static01:10","435","378",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("url(\'imagerc::Portlet/portlelt02.PNG\') no-repeat center center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,485,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("portlet_desc.xfdl", function() {
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
        this.loadIncludeScript("portlet_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
