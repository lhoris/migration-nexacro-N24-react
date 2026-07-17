(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mobile_Top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,64);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","2","2","50","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MTF_prevBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"2","60","60","2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MTF_menuBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","Button00:10","2","354","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.set_cssclass("sta_MTF_title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,64,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("mobile_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
