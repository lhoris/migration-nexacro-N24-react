(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","15","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","280","15","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_cssclass("btn_TF_topNav");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","425","15","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Component");
            obj.set_cssclass("btn_TF_topNav");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","570","15","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Device");
            obj.set_cssclass("btn_TF_topNav");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","715","15","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Sample");
            obj.set_cssclass("btn_TF_topNav");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1140","20","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_TF_function03");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","1190","20","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_TF_function02");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","1240","20","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_TF_function01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","1140","90","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_TF_function03ENG");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,80,this,function(p){});
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
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
