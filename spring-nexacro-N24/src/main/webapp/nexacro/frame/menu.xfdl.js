(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("menu");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose",null,"0","50","50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("X");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("LOGO");
            obj.set_cssclass("Noto_Bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","65",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.set_cssclass("Noto_Bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","115",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Renderer");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","165",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Pagination");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","215",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Large Data");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("menu.xfdl", function() {

        this.menu_onload = function(obj,e)
        {
        	this.setMenu();
        };

        this.setMenu = function()
        {
        	let nTop = 0;
        	const app = nexacro.getApplication();
        	let isMobile = system.getScreenWidth()>720?false:true;
        	let isNRE = system.navigatorname.indexOf("nexacro")==-1?false:true;
        	let filterExpr = "";

        	filterExpr += isMobile?"mobile=='1'":"desktop=='1'";
        	filterExpr += isNRE?"&&nre=='1'":"&&wre=='1'";

        	app.gdsMenu.filter(filterExpr);
        	this.dsMenu.copyData(app.gdsMenu, true);
        	app.gdsMenu.filter("");
        };

        this.menu_onclick = function(obj,e)
        {
        	this.close(obj.text);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.menu_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Static01.addEventHandler("onclick",this.menu_onclick,this);
            this.Static02.addEventHandler("onclick",this.menu_onclick,this);
            this.Static03.addEventHandler("onclick",this.menu_onclick,this);
        };
        this.loadIncludeScript("menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
