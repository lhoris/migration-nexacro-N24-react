(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("top");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,64);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MWF_topBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","28.33%","8",null,"50","30%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_logo");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btnLanguage","1113","20","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_function03");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTheme","1163","20","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_function02Dark");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMegaMenu","1213","20","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_function01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnBack","2","2","50","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MTF_prevBtn");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnMobileMenu",null,"2","60","60","2",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MTF_menuBtn");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","62","2","208","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MTF_title");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,64,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("7");
                p.Static01.set_cssclass("sta_MWF_topBg");
                p.Static01.move("0","0",null,null,"0","0");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_TF_logo");
                p.Static00.set_visible("true");
                p.Static00.set_cursor("pointer");
                p.Static00.move("28.33%","8",null,"50","30%",null);

                p.btnLanguage.set_taborder("1");
                p.btnLanguage.set_cssclass("btn_TF_function03");
                p.btnLanguage.set_visible("false");
                p.btnLanguage.move("1113","20","40","40",null,null);

                p.btnTheme.set_taborder("2");
                p.btnTheme.set_cssclass("btn_TF_function02Dark");
                p.btnTheme.set_text("");
                p.btnTheme.set_visible("false");
                p.btnTheme.move("1163","20","40","40",null,null);

                p.btnMegaMenu.set_taborder("3");
                p.btnMegaMenu.set_cssclass("btn_TF_function01");
                p.btnMegaMenu.set_visible("false");
                p.btnMegaMenu.move("1213","20","40","40",null,null);

                p.btnBack.set_taborder("4");
                p.btnBack.set_cssclass("btn_MTF_prevBtn");
                p.btnBack.set_visible("false");
                p.btnBack.set_text("");
                p.btnBack.move("2","2","50","60",null,null);

                p.btnMobileMenu.set_taborder("5");
                p.btnMobileMenu.set_cssclass("btn_MTF_menuBtn");
                p.btnMobileMenu.set_visible("true");
                p.btnMobileMenu.set_text("");
                p.btnMobileMenu.move(null,"2","60","60","2",null);

                p.stcTitle.set_taborder("6");
                p.stcTitle.set_cssclass("sta_MTF_title");
                p.stcTitle.set_visible("false");
                p.stcTitle.set_fittocontents("width");
                p.stcTitle.set_text("");
                p.stcTitle.move("62","2","208","60",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",1263,80,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_visible("true");
                p.Static00.move("0","15","200","50",null,null);

                p.btnLanguage.set_visible("true");
                p.btnLanguage.move("1163","20","40","40",null,null);

                p.btnTheme.set_visible("true");
                p.btnTheme.move("1113","20","40","40",null,null);

                p.btnMegaMenu.set_visible("true");
                p.btnMegaMenu.move("1213","20","40","40",null,null);

                p.btnBack.set_visible("false");

                p.stcTitle.set_visible("false");
                p.stcTitle.move("62","2","208","60",null,null);

                p.btnMobileMenu.set_visible("false");
                p.btnMobileMenu.move(null,"8","60","60","2",null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("top.xfdl", function() {
        this.buttonNames = [];

        this.top_onload = function(obj,e)
        {
        	nexacro._OnceCallbackTimer.callonce(this, function() {
        		this.createMenuButton();

        		this.btnTheme.cssclass = nexacro.getApplication().themeMode=="L"?"btn_TF_function02Dark":"btn_TF_function02";
        		this.btnLanguage.cssclass = nexacro.getApplication().langCode=="en"?"btn_TF_function03":"btn_TF_function03ENG";

        		//v24에서 Android/iOS 모두 웹뷰방식으로 일원화되면서 모바일도 History 적용함. //20231219 milpaso
        		//if (system.navigatorname.indexOf("nexacro") == -1) {
        		if (nexacro.getApplication().IsMobile || system.navigatorname.indexOf("nexacro") == -1) {
        			let hash = MyHistory.getLocationHash();
        			const p = this.parent.parent;
        			p["onChangeHistory"].call(p, hash);
        		}else{
        		    //NRE에서(모바일 포함) 메인 로드를 위해 일시적으로 추가함
        			this.parent.parent.openMain();
        		}
        	}, 10);
        };

        this.btnLanguage_onclick = function(obj,e)
        {
        	const app = nexacro.getApplication();
        	let langCode = app.langCode=="en"?"ko":"en";

        	app["changeLanguage"].call(app, langCode);
        };

        this.btnTheme_onclick = function(obj,e)
        {
        	const app = nexacro.getApplication();
        	let themeMode = app.themeMode=="L"?"D":"L";
        	const rootForm = app.mainframe.childframe.form;

        	app.themeMode = themeMode;

        	nexacro.loadStyle("xcssrc::demo_"+themeMode+".xcss");
        	//trace("[테마 변경] xcssrc::demo_"+themeMode+".xcss");

        	obj.cssclass = app.themeMode=="L"?"btn_TF_function02Dark":"btn_TF_function02";

        	/**
        		다국어,메가메뉴 css가 안바껴 reload해야하지만 초기화로 대체처리
        	**/
        	this.btnLanguage.cssclass = "";
        	this.btnLanguage.cssclass = app.langCode=="en"?"btn_TF_function03":"btn_TF_function03ENG";

        	this.btnMegaMenu.cssclass = "";
        	this.btnMegaMenu.cssclass = "btn_TF_function01";

        	//메인 롤링이미지 변경(배경색 다른 gif)
        // 	if(rootForm.divWork.url == "frame::main.xfdl")
        // 	{
        // 		rootForm.divWork.form.div_rolling.form.mainImgDis();
        // 	}

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Change Theme",
        			'event_label': 'Change Theme',
        			'value': themeMode=="L"?"Light":"Dark"
        		});
        	}

        };

        this.btnMegaMenu_onclick = function(obj,e)
        {
        	const p = this.parent.parent;
        	p["showMegaMenu"].call(p);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Mega Menu",
        			'event_label': 'Mega Menu'
        		});
        	}
        };

        this.createMenuButton = function()
        {
        	let left=280;
        	let top=15;
        	let width=140;
        	let height=50;
        	let gap=5;
        	const app=nexacro.getApplication();

        	app.gdsMenu.filter("level==0");

        	for (let i=0, len=app.gdsMenu.rowcount; i<len; i++) {
        		let menuId = app.gdsMenu.getColumn(i, "id");
        		let id = "btnMenu_"+menuId;
        		let button = new Button(id, left, top, width, height, null, null);

        		button.cssclass = "btn_TF_topNav";
        		button.text = app.gdsMenu.getColumn(i, "caption");
        		//button.set_visible(this.getCurrentLayoutID()=="large"?true:false);
        		button.visible = nexacro.getApplication().IsMobile?false:true;
        		button.menuId = menuId;
        		button.addEventHandler("onclick", this.btnMenu_onclick, this);
        		this.addChild(id, button);
        		button.show();

        		left += width + gap;
        		this.buttonNames.push(id);
        	}

        	app.gdsMenu.filter("");
        };

        this.btnMenu_onclick = function(obj,e)
        {
         	const p = this.parent.parent;
        	let menuId = obj.menuId;
        	let menuNm = obj.text;
        	p["showSubMenu"].call(p, menuId, menuNm, e.clientx==-1?false:true);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Sub Menu",
        			'event_label': 'Sub Menu',
        			'value': menuNm
        		});
        	}
        };

        this.btnBack_onclick = function(obj,e)
        {
        	//v24에서 Android/iOS 모두 웹뷰방식으로 일원화되면서 모바일도 History 적용함. //20231219 milpaso
        	//if (system.navigatorname.indexOf("nexacro") == -1) {
        	if (nexacro.getApplication().IsMobile || system.navigatorname.indexOf("nexacro") == -1) {
        		MyHistory.back();
        	}
        };

        this.btnMobileMenu_onclick = function(obj,e)
        {
        	this.openPopup("mobilemenu", "frame::mobilemenu.xfdl", null, "showtitlebar=false autosize=false openstatus=maximize", "popupCallback");

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Mobile Menu",
        			'event_label': 'Mobile Menu'
        		});
        	}
        };

        this.popupCallback = function(id, variant)
        {
        	if (id == "mobilemenu") {
        		this.openMenu(variant);
        	}
        };

        this.top_onlayoutchanged = function(obj,e)
        {
        	const pThis = this
        	let layout = e.newlayout;
        	this.buttonNames.forEach(function(buttonName) {
        		pThis.components[buttonName].set_visible(nexacro.getApplication().IsMobile?false:true);
        	});
        };

        this.setMenuTitle = function(v)
        {
        	this.stcTitle.text = v;
        	this.stcTitle.visible = true;
        	this.btnBack.visible = true;
        	this.Static00.visible = false;
        	this.resetScroll();
        };

        this.setMainTitle = function()
        {
        	this.stcTitle.visible = false;
        	this.btnBack.visible = false;
        	this.Static00.visible = true;
        };

        this.Static00_onclick = function(obj,e)
        {
        	const p = this.parent.parent;
        	p.vscrollbar.set_pos(0);

        	this.openMain();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.top_onload,this);
            this.addEventHandler("onlayoutchanged",this.top_onlayoutchanged,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btnLanguage.addEventHandler("onclick",this.btnLanguage_onclick,this);
            this.btnTheme.addEventHandler("onclick",this.btnTheme_onclick,this);
            this.btnMegaMenu.addEventHandler("onclick",this.btnMegaMenu_onclick,this);
            this.btnBack.addEventHandler("onclick",this.btnBack_onclick,this);
            this.btnMobileMenu.addEventHandler("onclick",this.btnMobileMenu_onclick,this);
        };
        this.loadIncludeScript("top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
