(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MegaMenu");
            this.set_titletext("New Form");
            this.set_background("#F5F7FC");
            this.set_border("1px solid #8D8D8D");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1280","780",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #eeeeee");
            obj.set_boxShadow("5px 5px 5px RGBA(155,155,155,0.45)");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","80","256","650",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","8","15","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Function");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","8","65","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Renderer");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","8","165","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Export");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01","8","115","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Pagination");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02","8","215","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("Import");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","8","265","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("Personalization");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","8","315","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("Large Data");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","8","365","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("Pivot");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","8","515","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("Quantum Grid");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","8","465","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("Dynamic Grid");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","8","415","240","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("Drag & Drop");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","256","80","256","650",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","8","15","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Component");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","8","65","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Dynamically generate");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","8","115","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("Arrangement");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","8","165","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("Fit to contents");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_02","8","215","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("File transfer");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","8","265","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("Two-way data binding");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","8","315","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("Menu ");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","8","365","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("List View");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","8","415","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("Animation");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","8","465","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("9");
            obj.set_text("Chart");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","8","515","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("10");
            obj.set_text("Graphics");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","8","565","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("11");
            obj.set_text("Google Map");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","768","80","256","650",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","8","15","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Popup");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","8","65","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Widget");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","8","115","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("Portlet");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","8","165","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("Personalization");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02","8","215","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("Gantt");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","8","265","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("Kakaotalk Share");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","8","315","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("RESTful");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","8","365","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00.form);
            obj.set_taborder("7");
            obj.set_text("Reference");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_01","512","80","256","650",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","8","15","240","50",null,null,null,null,null,null,this.Div00.form.Div01_01.form);
            obj.set_taborder("0");
            obj.set_text("Camera");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00","8","65","240","50",null,null,null,null,null,null,this.Div00.form.Div01_01.form);
            obj.set_taborder("1");
            obj.set_text("Bluetooth Low Energy");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_01","8","115","240","50",null,null,null,null,null,null,this.Div00.form.Div01_01.form);
            obj.set_taborder("2");
            obj.set_text("Contacts");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","8","165","240","50",null,null,null,null,null,null,this.Div00.form.Div01_01.form);
            obj.set_taborder("3");
            obj.set_text("Lite DB");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_02","8","215","240","50",null,null,null,null,null,null,this.Div00.form.Div01_01.form);
            obj.set_taborder("4");
            obj.set_text("File Read & Write");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","8","265","240","50",null,null,null,null,null,null,this.Div00.form.Div01_01.form);
            obj.set_taborder("5");
            obj.set_text("Voice Recognition");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01_00_00_00","1024","80","254","650",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","8","15","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Chart");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","8","65","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Chart & Grid");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","8","115","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("Report");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","8","165","240","50",null,null,null,null,null,null,this.Div00.form.Div01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("PDF Viewer");
            obj.set_cssclass("btn_WF_megaMenu");
            this.Div00.form.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","256","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_megaTitle01");
            obj.set_text("Grid");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","256","0","256","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_megaTitle02");
            obj.set_text("UI Component");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","512","0","256","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_megaTitle03");
            obj.set_text("Device");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","768","0","256","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_megaTitle04");
            obj.set_text("Sample");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","1024","0","254","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_megaTitle05");
            obj.set_text("3rd Party");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"15","50","50","17",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_megaClose");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01_00.form,function(p){});
            this.Div00.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01_00_00.form,function(p){});
            this.Div00.form.Div01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01_01.form,function(p){});
            this.Div00.form.Div01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01_00_00_00.form,function(p){});
            this.Div00.form.Div01_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1500,this,function(p){});
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
            this.btnClose.addEventHandler("onclick",this.Div00_btnClose_onclick,this);
        };
        this.loadIncludeScript("MegaMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
