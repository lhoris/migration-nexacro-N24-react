(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("root");
            this.set_cssclass("frm_WF_main");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new FileDownTransfer("FileDownTransfer00", this);
            obj.getSetter("onclick").set("FileDownTransfer00_onclick");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","0","1960",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_conBox03");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","Static04:0",null,null,"0","-1440",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_conBox04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","780",null,"1180","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_conBox02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","80",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_conBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_cssclass("sta_TF_topArea");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"64","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_TF_topArea");
            obj.set_semantictag("header");
            this.addChild(obj.name, obj);

            obj = new Div("divLeftMenu","0","0","0","1250",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_url("frame::leftmenu.xfdl");
            obj.set_cssclass("div_LF_leftBg");
            obj.set_semantictag("nav");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","0","64",null,"800","0",null,null,null,"720",null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_conBox01");
            obj.set_fittocontents("height");
            obj.set_semantictag("section");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","divWork:0",null,"155","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_BF_footerArea");
            this.addChild(obj.name, obj);

            obj = new Div("divFooter","0","divWork:0",null,"155","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_BF_footerArea");
            obj.set_semantictag("footer");
            this.addChild(obj.name, obj);

            obj = new Div("divMegaMenu","1280","0","1280","740",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_cssclass("div_WF_megaBg");
            obj.set_semantictag("nav");
            this.addChild(obj.name, obj);

            obj = new Div("divFloating","divWork:-60","751","50","160",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_semantictag("aside");
            this.addChild(obj.name, obj);

            obj = new Button("btnContact","0","0","50","50",null,null,null,null,null,null,this.divFloating.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_contact");
            obj.getSetter("tooltipmessageid").set("go.to.ask");
            obj.set_visible("false");
            this.divFloating.addChild(obj.name, obj);

            obj = new Button("btnToTop","0","110","50","50",null,null,null,null,null,null,this.divFloating.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_toTop");
            obj.getSetter("tooltipmessageid").set("scroll.to.top");
            this.divFloating.addChild(obj.name, obj);

            obj = new Button("btnDesc",null,"55","50","50","0",null,null,null,null,null,this.divFloating.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_descM");
            this.divFloating.addChild(obj.name, obj);

            obj = new Button("btnSource",null,"55","50","50","0",null,null,null,null,null,this.divFloating.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_source");
            obj.set_visible("false");
            obj.getSetter("tooltipmessageid").set("source.download");
            this.divFloating.addChild(obj.name, obj);

            obj = new Button("btnUrl",null,"55","50","50","0",null,null,null,null,null,this.divFloating.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.getSetter("tooltipmessageid").set("source.download");
            obj.set_cssclass("btn_WF_link");
            this.divFloating.addChild(obj.name, obj);

            obj = new Static("sta00","divTop:-10","0","10","64",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeftMenu
            obj = new Layout("default","",0,0,this.divLeftMenu.form,function(p){});
            this.divLeftMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFooter
            obj = new Layout("default","",0,0,this.divFooter.form,function(p){});
            this.divFooter.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMegaMenu
            obj = new Layout("default","",0,0,this.divMegaMenu.form,function(p){});
            this.divMegaMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFloating.form
            obj = new Layout("default","",0,0,this.divFloating.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnContact.set_taborder("0");
                p.btnContact.set_cssclass("btn_WF_contact");
                p.btnContact.getSetter("tooltipmessageid").set("go.to.ask");
                p.btnContact.set_visible("false");
                p.btnContact.move("0","0","50","50",null,null);

                p.btnToTop.set_taborder("1");
                p.btnToTop.set_cssclass("btn_WF_toTop");
                p.btnToTop.getSetter("tooltipmessageid").set("scroll.to.top");
                p.btnToTop.move("0","110","50","50",null,null);

                p.btnDesc.set_taborder("2");
                p.btnDesc.set_visible("false");
                p.btnDesc.set_cssclass("btn_WF_descM");
                p.btnDesc.move(null,"55","50","50","0",null);

                p.btnSource.set_taborder("3");
                p.btnSource.set_cssclass("btn_WF_source");
                p.btnSource.set_visible("false");
                p.btnSource.getSetter("tooltipmessageid").set("source.download");
                p.btnSource.move(null,"55","50","50","0",null);

                p.btnUrl.set_taborder("4");
                p.btnUrl.set_visible("false");
                p.btnUrl.getSetter("tooltipmessageid").set("source.download");
                p.btnUrl.set_cssclass("btn_WF_link");
                p.btnUrl.move(null,"55","50","50","0",null);
            	}
            );
            this.divFloating.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divFloating.form
            obj = new Layout("large","",0,0,this.divFloating.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnDesc.set_visible("false");
                p.btnDesc.move(null,"55","50","50","0",null);

                p.btnContact.set_visible("true");
                p.btnContact.move("0","0","50","50",null,null);

                p.btnSource.set_visible("true");
                p.btnSource.move(null,"110","50","50","0",null);

                p.btnToTop.move("0","165","50","50",null,null);

                p.btnUrl.getSetter("tooltipmessageid").set("url.share");
                p.btnUrl.set_visible("true");
                p.btnUrl.move(null,"55","50","50","0",null);
            	}
            );
            this.divFloating.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,940,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_main");

                p.Static04.set_taborder("10");
                p.Static04.set_visible("false");
                p.Static04.set_cssclass("sta_WF_conBox03");
                p.Static04.move("0","1960",null,"400","0",null);

                p.Static05.set_taborder("11");
                p.Static05.set_cssclass("sta_WF_conBox04");
                p.Static05.set_visible("false");
                p.Static05.move("0","Static04:0",null,null,"0","-1440");

                p.Static03.set_taborder("9");
                p.Static03.set_visible("false");
                p.Static03.set_cssclass("sta_WF_conBox02");
                p.Static03.move("0","780",null,"1180","0",null);

                p.Static01.set_taborder("7");
                p.Static01.set_visible("false");
                p.Static01.set_cssclass("sta_WF_conBox01");
                p.Static01.move("0","80",null,null,"0","0");

                p.Static02.set_taborder("6");
                p.Static02.set_visible("false");
                p.Static02.set_cssclass("sta_TF_topArea");
                p.Static02.move("0","0",null,"80","0",null);

                p.divTop.set_taborder("0");
                p.divTop.set_formscrolltype("none");
                p.divTop.set_cssclass("div_TF_topArea");
                p.divTop.set_semantictag("header");
                p.divTop.move("0","0",null,"64","0",null);

                p.divLeftMenu.set_taborder("1");
                p.divLeftMenu.set_visible("false");
                p.divLeftMenu.set_url("frame::leftmenu.xfdl");
                p.divLeftMenu.set_cssclass("div_LF_leftBg");
                p.divLeftMenu.set_semantictag("nav");
                p.divLeftMenu.move("0","0","0","1250",null,null);

                p.divWork.set_taborder("2");
                p.divWork.set_text("");
                p.divWork.set_cssclass("div_WF_conBox01");
                p.divWork.set_fittocontents("height");
                p.divWork.set_semantictag("section");
                p.divWork.set_async("false");
                p.divWork.set_minheight("720");
                p.divWork.set_maxheight("");
                p.divWork.move("0","64",null,"800","0",null);

                p.Static00.set_taborder("5");
                p.Static00.set_cssclass("sta_BF_footerArea");
                p.Static00.move("0","divWork:0",null,"155","0",null);

                p.divFooter.set_taborder("3");
                p.divFooter.set_cssclass("div_BF_footerArea");
                p.divFooter.set_semantictag("footer");
                p.divFooter.move("0","divWork:0",null,"155","0",null);

                p.divMegaMenu.set_taborder("4");
                p.divMegaMenu.set_visible("false");
                p.divMegaMenu.set_cssclass("div_WF_megaBg");
                p.divMegaMenu.set_semantictag("nav");
                p.divMegaMenu.move("1280","0","1280","740",null,null);

                p.divFloating.set_taborder("8");
                p.divFloating.set_semantictag("aside");
                p.divFloating.move("divWork:-60","751","50","160",null,null);

                p.sta00.set_taborder("12");
                p.sta00.move("divTop:-10","0","10","64",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",1263,940,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divWork.set_text("");
                p.divWork.move("divLeftMenu:0","80","990","720",null,null);

                p.divLeftMenu.set_visible("true");
                p.divLeftMenu.move("0","80","273","720",null,null);

                p.divTop.set_visible("true");
                p.divTop.set_border("0px none,0px none,1px solid #8d8d8d");
                p.divTop.move("0","0","1263","80",null,null);

                p.Static02.set_border("0px none,0px none,1px solid #8D8D8D");
                p.Static02.set_visible("true");

                p.divFooter.move("0","divWork:0","1263","140",null,null);

                p.divFloating.move("divWork:-60","700","50","221",null,null);

                p.Static00.set_visible("true");

                p.Static01.set_visible("true");

                p.Static04.move("0","1930",null,"400","0",null);

                p.Static03.move("0","780",null,"1150","0",null);

                p.Static05.set_visible("true");
                p.Static05.move("0","Static04:0",null,"580","0",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::leftmenu.xfdl");
        };
        
        // User Script
        this.registerScript("root.xfdl", function() {

        this.root_onload = function(obj,e)
        {
        	//PC&&NRE 일 경우 Description 버튼 숨기고 위치 재조정
        	if(nexacro.getApplication().IsNRE && !nexacro.getApplication().IsMobile){
        		let y = this.divFloating.form.btnUrl.getOffsetTop();

        		this.divFloating.form.btnUrl.visible = false;
        		this.divFloating.form.btnSource.setOffsetTop(y);
        		this.divFloating.form.btnToTop.setOffsetTop(y+55);
        		this.divFloating.height = this.divFloating.form.btnToTop.getOffsetBottom()+5;
        		this.divFloating.top = 700;
        	}

        	this.moveToCenter(obj.width, obj.height);
        	this.moveToFloatingButton(0);
        	this.fnIOFixed();

        	nexacro._OnceCallbackTimer.callonce(this, function() {
        		this.divTop.url = "frame::top.xfdl";
        		this.divMegaMenu.url = "frame::megamenu.xfdl";
        		this.divWork.url = "frame::work.xfdl";
        		this.divFooter.url = "frame::footer.xfdl";

        		nexacro.applyI18n(this.divFloating.form);

        		// 콜드 진입(직접 URL 접속/새로고침) 시 URL 해시나 menu_id 쿼리파라미터를 읽어
        		// 초기 화면을 연다. MyHistory.init()은 popstate(뒤로/앞으로가기)만 구독하고
        		// 최초 진입 시점은 처리하지 않으므로 별도로 호출해 그 공백을 메운다.
        		// (주의: 코어 런타임이 로드 직후 location.hash를 지워버리므로, launch.html
        		//  최상단에서 미리 캡처해둔 window.__initialMenuHash를 대신 읽는다.)
        		nexacro._OnceCallbackTimer.callonce(this, function() {
        			try {
        				let initialHash = (typeof window !== "undefined" && window.__initialMenuHash) || "";
        				this.onChangeHistory(initialHash);
        			} catch (ex) {
        				// no-op: 콜드 딥링크 실패 시 홈 화면으로 남는다.
        			}
        		}, 300);
        	}, 10);

        	//desc 부분 decorate된 링크 색상을 #2693D1로 바꾸기 위함
        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		let sheet = document.createElement('style');
        		let sheet_str = " a:link { color: #2693D1; text-decoration: none;}\na:visited { color: #2693D1; text-decoration: none;}";
        		let head = document.head || document.getElementsByTagName('head')[0];
        		sheet.type = 'text/css';
        		sheet.appendChild(document.createTextNode(sheet_str));
        		head.appendChild(sheet);
        	}

        	//v24에서 Android/iOS 모두 웹뷰방식으로 일원화되면서 모바일도 History 적용함. //20231219 milpaso
        	//if (system.navigatorname.indexOf("nexacro") == -1) {
        	if (nexacro.getApplication().IsMobile || system.navigatorname.indexOf("nexacro") == -1) {
        		// History 기능 사용을 위해 초기화 (application 실행 시 한번만 호출)
        		// 첫번째 인자는 뒤로가기, 앞으로가기가 실행됬을때 호출될 함수
        		// 두번째 인자는 함수내에서 this 로 사용할 scope
        		MyHistory.init(this.onChangeHistory, this);
        	}
        };

        this.root_onsize = function(obj,e)
        {
        	this.moveToCenter(e.cx, e.cy);
        	this.moveToFloatingButton(this.vscrollbar.pos);
        };

        this.root_onkeydown = function(obj,e)
        {
        	if (e.keycode == 27 && this.divMegaMenu.visible) {
        		this.divMegaMenu.visible = false;
        	}
        };

        this.root_onvscroll = function(obj,e)
        {
        	this.moveToFloatingButton(e.pos);
        };

        // 브라우저의 뒤로가기, 앞으로가기 실행시 호출됨
        this.onChangeHistory = function(hash)
        {
        	const app = nexacro.getApplication();

        	app.setAllMenu();

        	if (nexacro.isEmpty(hash) || hash == "main") {

        		const menu_id = app.getParameter("menu_id");

        		if(menu_id != "") {
        			let gdsMenuIdx = app.gdsAllMenu.findRow('id', menu_id);

        			if(gdsMenuIdx == -1) this.openMain();
        			else this.openMenu(menu_id+"");
        		} else {
        			// 메인화면
        			this.openMain();
        		}
        	} else {
        		// hash id 를 확인하여 필요한 처리를 진행한다.
        		this.openMenu(hash);
        	}
        };

        this.moveToCenter = function(width, height)
        {
        	let x = 0;

        	if (width > 1293+30) {
        		x = (width - 1293+30) / 2;
        		this.divFloating.left = "divWork:0";
        	} else {
         		this.divFloating.left = "divWork:-60";
        	}

        	this.divTop.left = x;
        	this.divMegaMenu.left = x;
        	this.divLeftMenu.left = x;
        	this.divFooter.left = x;

        	if(nexacro.getApplication().IsMobile) this.divWork.setOffsetRight(width);

        	this.resetScroll();
        };

        this.moveToFloatingButton = function(pos)
        {
        	let height = nexacro.getApplication().mainframe.height;
        	let y = height - 280 + pos;
        	this.divFloating.top = y;
        };

        this.showMegaMenu = function()
        {
        	this.divMegaMenu.visible = true;
        };

        this.hideMegaMenu = function()
        {
        	this.divMegaMenu.visible = false;
        };

        this.showSubMenu = function(menuId, menuNm, isClick)
        {
        	const form = this.divLeftMenu.form;
        	form["showSubMenu"].call(form, menuId, menuNm, isClick);

        	if (this.divWork.url == "frame::main.xfdl") {
        		const app = nexacro.getApplication();
        		let firstMenuId = app.gdsMenu.lookupNF("upid", menuId, "id");

        		this.openMenu(firstMenuId);
        	}
        };

        this.showMenuPage = function(menuId, menuUrl)
        {
        	this.vscrollbar.set_pos(0);

        	//v24에서 Android/iOS 모두 웹뷰방식으로 일원화되면서 모바일도 History 적용함. //20231219 milpaso
        	//if (system.navigatorname.indexOf("nexacro") == -1) {
        	if (nexacro.getApplication().IsMobile || system.navigatorname.indexOf("nexacro") == -1) {
        		// hash를 변경하여 History 에 등록 (현재 hash 와 같을 경우 History 가 생기지 않는다.)
        		MyHistory.setLocationHash(menuId, "", "?menu_id=" + menuId);
        	}

        	const workForm = this.divWork.form;
        	workForm["loadMenuPage"].call(workForm, menuId, menuUrl);
        };

        this.menuPageOnLoad = function()
        {
        	this.resetScroll();

        	// min height 720
        	let height = this.divWork.form.height;
        	height = (height < 720) ? 720 : height;
        	this.Static01.height = height;
        	this.divLeftMenu.height = height;
        };

        this.divFloating_btnContact_onclick = function(obj,e)
        {
        	let url = "https://www.tobesoft.com/support/qna";
        	if (nexacro.getApplication().langCode == "ko") {
        		url = "https://www.tobesoft.com/support/qna";
        	}

        	system.execDefaultBrowser(url);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Link",
        			'event_label': 'Go to Ask',
        			'value': url
        		});
        	}
        };

        this.divFloating_btnToTop_onclick = function(obj,e)
        {
        	this.vscrollbar.set_pos(0);
        };

        this.divFloating_btnDesc_onclick = function(obj,e)
        {
        	const form = this.divWork.form;
        	form["showDescription"].call(form);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Description",
        			'event_label': 'Description',
        			'value': form.menuInfo.menuName
        		});
        	}
        };

        this.setDescVisible = function(flag)
        {
        	this.divFloating.form.btnDesc.visible = flag;
        };

        this.root_onlayoutchanged = function(obj,e)
        {
        	this.resetScroll();
        };

        this.divFloating_btnSource_onclick = function(obj,e)
        {
        	this.FileDownTransfer00.download(nexacro.getEnvironment().services["svc"].url+"/download/source");

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Download",
        			'event_label': 'sourceDownload',
        			'value': '소스 다운로드'
        		});

        		gtag('event', 'page_view', {
        			'page_path': 'source download',
        			'page_title': '소스 다운로드'
        		});
        	}
        };

        this.divFloating_btnUrl_onclick = function(obj,e)
        {
        	system.setClipboard("CF_TEXT", MyHistory.getContext().location.href);

        	if(nexacro.getApplication().langCode == "ko"){
        		this.alert("클립 보드에 주소가 복사되었습니다.");
        	} else {
        		this.alert("Address copied to clipboard.");
        	}
        };

        this.root_ondevicebuttonup = function(obj,e)
        {
        	//Android 디바이스에서 입력된 디바이스 버튼
        	if(e.button == 1) // MENU
        	{

        	}
        	else if(e.button == 2) // CANCEL
        	{
        		//경우: 1.Main 화면에서 back, 2.work에서 back (3.메뉴 팝업에서 back : mobilemenu.xfdl에서 처리)
        		if (nexacro.getApplication().IsMobile) {

        			if (this.gfnIsNull(this.divWork.url) || (this.divWork.url == "frame::main.xfdl")) {
        				let sText="";
        				if(nexacro.getApplication().langCode == "ko"){
        					sText="종료하시겠습니까?";
        				} else {
        					sText="Are you sure you want to quit?";
        				}

        				if (this.confirm(sText)) {
        					nexacro.getApplication().exit();	//앱종료
        				}
        			} else {
        				MyHistory.back();
        			}
        		}
        	}
        };

        /************************************************************************
         * message popup
         ************************************************************************/
        this.fvNotiCount = 0;
        this.createMessage = function(sMessage, sUserId)
        {
        	let sId = "NOTI";
        	let sUrl = "external::xpush_noti_pop.xfdl";
        	let nLeft = null;
        	let nTop = 81 + (this.fvNotiCount * 55);
        	let nWidth = 250;
        	let nHeight = 120;
        	let nRight = 30;
        	let nBottom = null;

        	let objTile = new Div("divTile_" + sId + this.fvNotiCount, nLeft, nTop, nWidth, nHeight, nRight, nBottom);
        	objTile.async = false;
        	objTile.url = sUrl;
        	objTile.portName = "위젯";
        	objTile.usePort = "Y";
        	objTile.form.MSG = {
        		"sUserId" : sUserId,
        		"sMessage" : sMessage
        	}

        	this.addChild(objTile.name, objTile);
        	objTile.show();

        	objTile.form.btnResize.addEventHandler("ondrag", this.fnObjTile_ondrag, this);
        	objTile.form.btnMove.addEventHandler("ondrag", this.fnObjTile_ondrag, this);

        	for (let j = 0; j < objTile.form.components.length; j++)
        	{
        		objTile.form.components[j].targetDiv = objTile;
        		objTile.form.components[j].addEventHandler("onclick", this.fnObjTile_onclick, this);
        	}

        	this.fvNotiCount++;
        };

        this.fnObjTile_onclick = function(obj, e)
        {
        	obj.targetDiv.bringToFront();
        }

        this.fnObjTile_ondrag = function(obj, e)
        {
        	this.bDrag = true;
        	this.fvTargetObj = obj.parent.parent;
        	this.fvChildObj = obj;

        	let nX;
        	let nY;

        	if (obj.name == "btnResize") {
        		nX = nexacro.toNumber(e.canvasx);
        		nY = nexacro.toNumber(e.canvasy);
        	} else if (obj.name == "btnMove") {
        		nX = nexacro.toNumber(obj.getOffsetLeft()) + nexacro.toNumber(e.canvasx);
        		nY = nexacro.toNumber(obj.getOffsetTop()) + nexacro.toNumber(e.canvasy);
        	}

        	e.userdata = nX + "," + nY;

        	this.fvTargetObj.bringToFront();

        	return true;
        };

        this.root_ondragmove = function(obj,e)
        {
        	if(this.fvChildObj){
        		let arrPoint = e.userdata.split(",");
        		let nLeft, nTop, nRight, nBottom, nWidth, nHeight;

        		if (this.fvChildObj.name == "btnResize") {
        			nLeft = e.canvasx - this.getOffsetLeft() - this.fvTargetObj.getOffsetLeft() - arrPoint[0];
        			nTop = e.canvasy - this.getOffsetTop() - this.fvTargetObj.getOffsetTop() - arrPoint[1];

        			if (nLeft < 100) {
        				nLeft = 100;
        			}

        			if (nTop < 100) {
        				nTop = 100;
        			}

        			this.fvChildObj.move(nLeft, nTop);

        			nWidth = this.fvChildObj.getOffsetRight() + 10;
        			nHeight = this.fvChildObj.getOffsetBottom() + 10;

        			this.fvTargetObj.setOffsetWidth(nWidth);
        			this.fvTargetObj.setOffsetHeight(nHeight);
        		} else if (this.fvChildObj.name == "btnMove") {
        			nLeft = e.canvasx - this.getOffsetLeft() - arrPoint[0];
        			nTop = e.canvasy - this.getOffsetTop() - arrPoint[1];
        			nRight = nLeft + this.fvTargetObj.getOffsetWidth();
        			nBottom = nTop + this.fvTargetObj.getOffsetHeight();

        			if (nLeft < 0) {
        				nLeft = 0;
        			} else if (nRight > this.getOffsetWidth()) {
        				nLeft = this.getOffsetWidth() - this.fvTargetObj.getOffsetWidth();
        			}

        			if (nTop < 0) {
        				nTop = 0;
        			} else if (nBottom > this.getOffsetHeight()) {
        				nTop = this.getOffsetHeight() - this.fvTargetObj.getOffsetHeight();
        			}

        			this.fvTargetObj.move(nLeft, nTop);
        		}
        	}
        };

        this.fnCloseMemo = function(obj)
        {
        	this.removeChild(obj.name);
        };

        this.fnCloseAllMemo = function()
        {
        	for(let i=0; i<this.fvNotiCount; i++) {
        		this.removeChild("divTile_NOTI" + i);
        	}
        };

        //TitleBar Fix
        this.fnIOFixed = function ()
        {
        	const app = nexacro.getApplication();
        	if (app.IsNRE && !app.IsMobile) return; // NRE 환경에서는 top 고정X. v24 모바일 WRE/NRE 고정 가능
        	//if (system.navigatorname.indexOf("nexacro") > -1) return;	// NRE 환경에서는 top 고정X

        	const oFixedTarget01 = document.getElementById(this.nexacroDomId(this.divTop));		// divTop
        	const oFixedTarget02 = document.getElementById(this.nexacroDomId(this.Static02));	// divTop line
        	const oDivMegaMenu = document.getElementById(this.nexacroDomId(this.divMegaMenu));	// divMegaMenu
        	const target = document.getElementById(this.nexacroDomId(this.sta00));				// 임의로 추가한 static
        	const oVscroll = document.getElementById(this.nexacroDomId(this.vscrollbar));		// 세로스크롤바

        	oFixedTarget01.style.position = 'fixed';
        	oFixedTarget01.style.zIndex = 2;
        	oFixedTarget02.style.position = 'fixed';
        	oFixedTarget02.style.zIndex = 1;
        	oVscroll.style.zIndex = 100;
        	oDivMegaMenu.style.position = 'fixed';
        	oDivMegaMenu.style.zIndex = 3;

        // 	let options = {
        // 		root		: null,
        // 		// rootMargin	: '0px 0px ' + '-' + this.nFormMarginBottom + 'px' + ' 0px',
        // 		threshold	: 0.45
        // 	};
        //
        // 	let pThis = this;
        // 	const io = new IntersectionObserver( function (entries, observer) {
        // 			entries.forEach(function (entry) {
        // 					// 요소가 사라지는 시점
        // 					if (!entry.isIntersecting) {
        // 						oFixedTarget01.style.position = 'fixed';
        // 						oFixedTarget01.style.zIndex = 2;
        // 						oFixedTarget02.style.position = 'fixed';
        // 						oFixedTarget02.style.zIndex = 1;
        // 						oVscroll.style.zIndex = 100;
        // 						oDivMegaMenu.style.position = 'fixed';
        // 						oDivMegaMenu.style.zIndex = 3;
        //
        // 					// 다시 요소가 보이는 시점
        // 					} else {
        // 						oFixedTarget01.style.position = '';
        // 						oFixedTarget01.style.zIndex = '';
        // 						oFixedTarget02.style.position = '';
        // 						oFixedTarget02.style.zIndex = '';
        // 						oVscroll.style.zIndex = '';
        // 						oDivMegaMenu.style.position = '';
        // 						oDivMegaMenu.style.zIndex = '';
        // 					}
        // 				});
        // 		},options);
        //
        // 	io.observe(target);
        };

        this.nexacroDomId = function (objID)
        {
        	let generateID = "";
        	let prtID = objID;
        	let i = 0;
        	const objApp = nexacro.getApplication();
        	const mainFrm = objApp.mainframe;

        	while(prtID != mainFrm){
        		if(prtID.toString() == "[object Form]") generateID = "form." + generateID;
        		else generateID = prtID.name + ((generateID != "")?".":"") + generateID;
        		i++;
        		prtID = prtID.parent;
        	}
        	return "mainframe." + generateID;
        };



        /**
         * @class 값이 존재하는지 여부 체크 <br>
         * @param {String} sValue
         * @return {Boolean} true/false
         * @example
         * var bNull = this.gfnIsNull("aaa");	// false
         */
        this.gfnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            let ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.root_onload,this);
            this.addEventHandler("onsize",this.root_onsize,this);
            this.addEventHandler("onkeydown",this.root_onkeydown,this);
            this.addEventHandler("onvscroll",this.root_onvscroll,this);
            this.addEventHandler("onlayoutchanged",this.root_onlayoutchanged,this);
            this.addEventHandler("ondragmove",this.root_ondragmove,this);
            this.addEventHandler("ondevicebuttonup",this.root_ondevicebuttonup,this);
            this.divFloating.form.btnContact.addEventHandler("onclick",this.divFloating_btnContact_onclick,this);
            this.divFloating.form.btnToTop.addEventHandler("onclick",this.divFloating_btnToTop_onclick,this);
            this.divFloating.form.btnDesc.addEventHandler("onclick",this.divFloating_btnDesc_onclick,this);
            this.divFloating.form.btnSource.addEventHandler("onclick",this.divFloating_btnSource_onclick,this);
            this.divFloating.form.btnUrl.addEventHandler("onclick",this.divFloating_btnUrl_onclick,this);
        };
        this.loadIncludeScript("root.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
