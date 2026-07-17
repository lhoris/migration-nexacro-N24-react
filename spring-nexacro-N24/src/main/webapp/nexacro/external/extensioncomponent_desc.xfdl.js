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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","30","70",null,"140","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("external.extensioncomponent.desc");
            obj.set_text("TEXT(\"external.extensioncomponent.desc\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","20","180",null,null,"Static01:10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"external.extensioncomponent\",\"ExtensionComponent\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("external.extensioncomponent");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,260,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("extensioncomponent_desc.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("extensioncomponent_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
