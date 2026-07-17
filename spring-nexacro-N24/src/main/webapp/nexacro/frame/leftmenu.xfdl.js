(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("leftmenu");
            this.set_cssclass("frm_LF_leftBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(273,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcMainMenu","30","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("divSubMenu","0","60","273",null,null,"22",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_LF_subBg");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSubMenu.form
            obj = new Layout("default","",0,0,this.divSubMenu.form,function(p){});
            this.divSubMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",273,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("leftmenu.xfdl", function() {
        this.selectedMenuButtonId = "";
        this.first_menuId;

        this.showSubMenu = function(menuId, menuNm, isClick)
        {
        	let cssclass = "sta_LF_menuTitle0" + menuId.substr(0, 1);

        	this.stcMainMenu.cssclass = cssclass;
        	this.stcMainMenu.text = menuNm;
        	this.deleteSubMenu();
        	this.createSubMenuButton(menuId);

        	if (this.parent.parent.divWork.url != "frame::main.xfdl" && isClick) {
        		if(this.first_menuId) this.divSubMenu.form.components[this.first_menuId].click();
        	}
        };

        this.deleteSubMenu = function()
        {
        	let container = this.divSubMenu.form;
        	let comps = container.components;

        	for (let i = comps.length-1; i >= 0; i--) {
        		let comp = container.removeChild(comps[i].name);
        		comp.destroy();
        		comp = null;
        	}

        	this.selectedMenuButtonId = "";
        };

        this.createSubMenuButton = function(upperMenuId)
        {
        	let left=0;
        	let top=10;
        	let width=273;
        	let height=50;
        	const app=nexacro.getApplication();

        	app.gdsMenu.filter("level==1&&upid=='" + upperMenuId + "'");

        	for (let i=0, len=app.gdsMenu.rowcount; i<len; i++) {
        		let menuId = app.gdsMenu.getColumn(i, "id"),
        			id = "btnMenu_"+menuId,
        			button = new Button(id, left, top, width, height, null, null);

        		button.cssclass = "btn_LF_Lmenu";
        		button.text = app.gdsMenu.getColumn(i, "caption");
        		button.menuId = menuId;
        		button.menuUrl = app.gdsMenu.getColumn(i, "url");
        		button.tooltiptext = app.gdsMenu.getColumn(i, "tooltiptext");
        		button.addEventHandler("onclick", this.btnMenu_onclick, this);
        		this.divSubMenu.addChild(id, button);
        		button.show();

        		top += height;

        		if(i==0) this.first_menuId = id;
        	}
        };

        this.btnMenu_onclick = function(obj,e)
        {
        	const p = this.parent.parent;
        	let menuId = obj.menuId;
        	let menuUrl = obj.menuUrl;
        	p["showMenuPage"].call(p, menuId, menuUrl);

        	if(this.selectedMenuButtonId) this.divSubMenu.form.components[this.selectedMenuButtonId].cssclass = "btn_LF_Lmenu";
        	obj.set_cssclass("btn_LF_LmenuS");

        	this.selectedMenuButtonId = obj.name;

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Left Menu",
        			'event_label': 'Left Menu',
        			'value': obj.text
        		});

        		gtag('event', 'page_view', {
        			'page_path': menuUrl,
        			'page_title': obj.text
        		});
        	}


        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("leftmenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
