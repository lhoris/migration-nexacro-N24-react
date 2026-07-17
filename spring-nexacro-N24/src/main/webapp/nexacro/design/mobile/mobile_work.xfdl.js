(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mobile_work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,664);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","20",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Function");
            obj.set_cssclass("sta_WF_compTitle02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"50","50","20","75",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_descM");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,null,"50","50","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_toTop");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20","664","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("palegreen");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","664",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("palegreen");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","490","30","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Mobile 좌우 여백\r\n20px");
            obj.set_background("lightpink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("palegreen");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,664,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        this.loadIncludeScript("mobile_work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
