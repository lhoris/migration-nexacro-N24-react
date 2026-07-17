(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mobile_leftMenu");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,717);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_MWF_leftBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","2","2","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MLF_homeBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"2","60","60","2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MLF_closeMenu");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","0","66",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.set_cssclass("btn_MLF_Lmenu01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","0","126",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Components");
            obj.set_cssclass("btn_MLF_Lmenu02,btn_MLF_LmenuS");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","0","537",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Devices");
            obj.set_cssclass("btn_MLF_Lmenu03");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","0","597",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Sample");
            obj.set_cssclass("btn_MLF_Lmenu04");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_00","0","657",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("3rd Party");
            obj.set_cssclass("btn_MLF_Lmenu05");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","187","480","352",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_MLF_subMenu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,"50","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Component");
            obj.set_cssclass("brn_MLF_subMenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","50",null,"50","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Dynamically Generate");
            obj.set_cssclass("brn_MLF_subMenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","100",null,"50","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Arrangement");
            obj.set_cssclass("brn_MLF_subMenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","0","150",null,"50","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Fit to Contents");
            obj.set_cssclass("brn_MLF_subMenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03","0","200",null,"50","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("File Transfer");
            obj.set_cssclass("brn_MLF_subMenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04","0","250",null,"50","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Tow-way Data binding");
            obj.set_cssclass("brn_MLF_subMenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04_00","0","300",null,"50","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Menu");
            obj.set_cssclass("brn_MLF_subMenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","62","2","35","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_TF_function03_M");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","97","2","35","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_TF_function02_M");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,717,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mobile_leftMenu.xfdl", function() {

        this.Button02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_01.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_00_00.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_00_00_00.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("mobile_leftMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
