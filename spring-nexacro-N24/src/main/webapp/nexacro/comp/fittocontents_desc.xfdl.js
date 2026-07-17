(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fittocontents_desc");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","15","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"comp.fittocontents\",\"컴포넌트 사이즈 자동 조정\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.fittocontents");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"comp.fittocontents.desc\",\"컴포넌트의 fittocontents 속성을 조정하면 텍스트 길이에 맞춰 자동으로 컴포넌트의 사이즈가 반영됩니다.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("comp.fittocontents.desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,140,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fittocontents_desc.xfdl", function() {

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
        this.loadIncludeScript("fittocontents_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
