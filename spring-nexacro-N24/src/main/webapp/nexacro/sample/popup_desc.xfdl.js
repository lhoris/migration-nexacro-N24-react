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
                this._setFormPosition(920,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","19","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.popup\",\"Popup\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("sample.popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","51","880","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"sample.popup.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.getSetter("messageid").set("sample.popup.desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,130,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popup_desc.xfdl", function() {

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
        this.loadIncludeScript("popup_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
