(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            this.set_scrollbarsize("0");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","30","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid");
            obj.set_cssclass("sta_LF_menuTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","60","280",null,null,"22",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","10","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Function");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","60","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Renderer");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","110","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Pagination");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","0","160","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Export");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","0","210","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Import");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","0","260","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Personalization");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03","0","310","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Large Data");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02","0","360","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Pivot");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","0","410","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Drag & Drop");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","0","460","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Dynamic Grid");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","0","510","280","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("Quantum Grid");
            obj.set_cssclass("btn_LF_Lmenu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","290","70","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Function");
            obj.set_cssclass("btn_LF_LmenuS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","450","135","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택된 상태");
            obj.set_background("lemonchiffon");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",280,720,this,function(p){});
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
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
