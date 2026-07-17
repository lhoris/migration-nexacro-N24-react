(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mobilemenu");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,717);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"upid\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MWF_leftBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome","2","2","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MLF_homeBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"2","60","60","2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MLF_closeMenu");
            this.addChild(obj.name, obj);

            obj = new Button("btnLanguage","62","2","35","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_function03_M");
            this.addChild(obj.name, obj);

            obj = new Button("btnTheme","107","2","35","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_function02Dark_M");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("mobilemenu.xfdl", function() {
        this.selectedMenu = "";

        this.mobilemenu_onload = function(obj,e)
        {
        	this.createMenuButton();

        	this.btnLanguage.cssclass = nexacro.getApplication().langCode=="en"?"btn_TF_function03_M":"btn_TF_function03ENG_M";
        	this.btnTheme.cssclass = nexacro.getApplication().themeMode=="L"?"btn_TF_function02Dark_M":"btn_TF_function02_M";
        };

        this.createMenuButton = function()
        {
        	const app = nexacro.getApplication();

        	this.dsMenu.clearData();
        	app.gdsMenu.filter("");

        	for (let i=0,len=app.gdsMenu.rowcount; i<len; i++) {
        		let r = this.dsMenu.addRow();
        		this.dsMenu.copyRow(r, app.gdsMenu, i, "id=id,caption=caption,level=level,upid=upid,url=url");
        	}

        	this.dsMenu.applyChange();

        	let left=0;
        	let mainTop=66;
        	let subTop=0;
        	let mainHeight=60;
        	let subHeight=50;
        	let right=0;
        	let gap=0;

        	for (let i = 0, len = this.dsMenu.rowcount; i < len; i++) {
        		let id = this.dsMenu.getColumn(i, "id");
        		let caption = this.dsMenu.getColumn(i, "caption");
        		let level = this.dsMenu.getColumn(i, "level");
        		let upid = this.dsMenu.getColumn(i, "upid");

        		if (level == 0) {
        			let objId = "btnMenu_"+id;
        			let menuTitle = new Button(objId, left, mainTop, null, mainHeight, right, null);
        			let cssclass = "";

        			switch(id) {
        			case "10000":
        				cssclass = "btn_MLF_Lmenu01";
        				break;
        			case "20000":
        				cssclass = "btn_MLF_Lmenu02";
        				break;
        			case "30000":
        				cssclass = "btn_MLF_Lmenu03";
        				break;
        			case "40000":
        				cssclass = "btn_MLF_Lmenu04";
        				break;
        			case "50000":
        				cssclass = "btn_MLF_Lmenu05";
        				break;
        			}

        			menuTitle.cssclass = cssclass;
        			menuTitle.text = caption;
        			menuTitle.menuId = id;
        			menuTitle.addEventHandler("onclick", this.menuTitle_onclick, this);

        			this.addChild(objId, menuTitle);
        			menuTitle.show();

        			mainTop = objId + ":0";
        			objId = "divSubMenu_"+id;

        			let container = new Div(objId, left, mainTop, null, 0, right, null);
        			container.cssclass = "div_MLF_subMenu";
        			this.addChild(objId, container);
        			container.show();

        			mainTop = objId + ":0";
        		} else {
        			let objId = "btnMenu_"+id;
        			let button = new Button(objId, left, subTop, null, subHeight, right, null);

        			button.cssclass = "brn_MLF_subMenu";
        			button.text = caption;
        			button.menuId = id;
        			button.addEventHandler("onclick", this.menuButton_onclick, this);

        			this.components["divSubMenu_"+upid].addChild(objId, button);
        			button.show();

        			subTop = objId + ":0";
        		}
        	}
        };

        this.menuTitle_onclick = function(obj,e)
        {
        	var cssclasses = obj.cssclass.split(","),
        		container = this.components["divSubMenu_"+obj.menuId];

        	// expanded
        	if (cssclasses.length > 1 && cssclasses[1] == "btn_MLF_LmenuS") {
        		container.height = 0;
        		obj.cssclass = cssclasses[0];
        		this.selectedMenu = "";
        	}
        	// collapsed
        	else {
        		if (this.selectedMenu)	this.components[this.selectedMenu].click();

        		container.height = container.form.components.length * 50 + 2;
        		obj.cssclass = cssclasses[0] + ",btn_MLF_LmenuS";
        		this.selectedMenu = obj.name;
        	}

        	this.resetScroll();
        };

        this.menuButton_onclick = function(obj,e)
        {
        	this.close(obj.menuId);
        };

        this.btnHome_onclick = function(obj,e)
        {
        	this.openMain();
        	this.close();
        };

        this.btnLanguage_onclick = function(obj,e)
        {
        	var app = nexacro.getApplication(),
        		langCode = app.langCode=="en"?"ko":"en";

        	app["changeLanguage"].call(app, langCode);
        	this.reload();
        };

        this.btnTheme_onclick = function(obj,e)
        {
        	var app = nexacro.getApplication(),
            rootForm = app.mainframe.childframe.form,
            topForm = app.mainframe.childframe.form.divTop.form,
        	themeMode = app.themeMode=="L"?"D":"L";

        	app.themeMode = themeMode;

        	nexacro.loadStyle("xcssrc::demo_"+themeMode+".xcss");
          //trace("[테마 변경] xcssrc::demo_"+themeMode+".xcss");

          /**
        		버튼 css 변경을 위해 reload해야하지만 초기화로 대체처리
        	**/
          obj.cssclass = "";
         	obj.cssclass = app.themeMode=="L"?"btn_TF_function02Dark_M":"btn_TF_function02_M";

        	this.btnLanguage.cssclass = "";
        	this.btnLanguage.cssclass = app.langCode=="en"?"btn_TF_function03_M":"btn_TF_function03ENG_M";

        	this.btnHome.cssclass = "";
        	this.btnHome.cssclass = "btn_MLF_homeBtn";

        	this.btnClose.cssclass = "";
        	this.btnClose.cssclass = "btn_MLF_closeMenu";

        	topForm.btnMobileMenu.cssclass = "";
        	topForm.btnMobileMenu.cssclass = "btn_MTF_menuBtn";

        	topForm.btnBack.cssclass = "";
        	topForm.btnBack.cssclass = "btn_MTF_prevBtn";

        	//메인 롤링이미지 변경(배경색 다른 gif)
        	if(rootForm.divWork.url == "frame::main.xfdl")
        	{
        		rootForm.divWork.form.div_rolling.form.mainImgDis();
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        this.mobilemenu_ondevicebuttonup = function(obj,e)
        {
        	//Android 디바이스에서 입력된 디바이스 버튼
        	if(e.button == 1) // MENU
        	{

        	}
        	else if(e.button == 2) // CANCEL
        	{
        		//경우: 1.메뉴 팝업에서 back, (2.Main 화면에서 back, 3.work에서 back)
        		if (nexacro.getApplication().IsMobile) {
        			this.close();
        		}
        	}

        	return true;	//상위폼 버블 안함
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mobilemenu_onload,this);
            this.addEventHandler("ondevicebuttonup",this.mobilemenu_ondevicebuttonup,this);
            this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnLanguage.addEventHandler("onclick",this.btnLanguage_onclick,this);
            this.btnTheme.addEventHandler("onclick",this.btnTheme_onclick,this);
        };
        this.loadIncludeScript("mobilemenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
