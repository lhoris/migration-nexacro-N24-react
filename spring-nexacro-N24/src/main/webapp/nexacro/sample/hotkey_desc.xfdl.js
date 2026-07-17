(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hotkey_desc");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","15","79","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.hotkey\",\"Hot Key\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("sample.hotkey");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"sample.hotkey.desc\",\"단축키 설명\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_fittocontents("height");
            obj.set_wordWrap("english");
            obj.getSetter("messageid").set("sample.hotkey.desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("hotkey_desc.xfdl", function() {

        this.hotkey_desc_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hotkey_desc_onload,this);
        };
        this.loadIncludeScript("hotkey_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
