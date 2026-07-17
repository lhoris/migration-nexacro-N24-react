(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main_rolling");
            this.set_titletext("New Form");
            this.set_stepitemgap("7");
            this.set_stepitemsize("15");
            this.set_stepshowtype("always");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","30","30",null,"70","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"rolling.grid.title\",\"그리드 컴포넌트\")");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.getSetter("messageid").set("rolling.grid.title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","Static00:0",null,"127","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"rolling.grid.sub\")");
            obj.set_positionstep("0");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.getSetter("messageid").set("rolling.grid.sub");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grid","30","Static01:10","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"main.learnmore\",\"더 알아보기\")");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_mainBtn01");
            obj.getSetter("messageid").set("main.learnmore");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","30","btn_grid:5",null,"300","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("0");
            obj.set_image("url(\'imagerc::DarkMode/img_WF_main01.gif\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_stretch("fit");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","30",null,"70","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"rolling.component.title\",\"넥사크로 컴포넌트\")");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.getSetter("messageid").set("rolling.component.title");
            obj.set_fittocontents("height");
            obj.set_textAlign("left");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","Static02:0",null,"127","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"rolling.component.sub\",\"Static03\")");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.getSetter("messageid").set("rolling.component.sub");
            obj.set_fittocontents("height");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn_comp","30","Static03:10","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"main.learnmore\",\"Button02\")");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_mainBtn01");
            obj.getSetter("messageid").set("main.learnmore");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","30","btn_comp:5",null,"300","30",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_positionstep("1");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_image("url(\'imagerc::Main/img_WF_main02.gif\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","1995","33",null,"70","-1935",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("TEXT(\"rolling.useful.title\",\"유용한 편의 기능\")");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.getSetter("messageid").set("rolling.useful.title");
            obj.set_wordWrap("english");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","1995","Static04:0",null,"127","-1935",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TEXT(\"rolling.useful.sub\",\"Static05\")");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.getSetter("messageid").set("rolling.useful.sub");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sample","1995","Static05:10","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("TEXT(\"main.learnmore\",\"Button03\")");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_mainBtn01");
            obj.getSetter("messageid").set("main.learnmore");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","1995","btn_sample:5",null,"300","-1935",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_positionstep("0");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_image("url(\'imagerc::Main/img_WF_main04.gif\')");
            obj.set_stretch("fit");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","30",null,"70","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("TEXT(\"rolling.interface.title\",\"유연한 연동 그리고 확장\")");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_textAlign("left");
            obj.set_fittocontents("height");
            obj.set_wordWrap("english");
            obj.getSetter("messageid").set("rolling.interface.title");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","30","Static06:0",null,"127","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("TEXT(\"rolling.interface.sub\",\"Static07\")");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.getSetter("messageid").set("rolling.interface.sub");
            obj.set_fittocontents("height");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn_external","30","Static07:10","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("TEXT(\"main.learnmore\",\"Button04\")");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_mainBtn01");
            obj.getSetter("messageid").set("main.learnmore");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","30","btn_external:5",null,"300","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_positionstep("2");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_image("url(\'imagerc::Main/img_WF_main03.gif\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_stepitemgap("7");
                p.set_stepitemsize("15");
                p.set_stepshowtype("always");

                p.Static00.set_taborder("0");
                p.Static00.set_text("TEXT(\"rolling.grid.title\",\"그리드 컴포넌트\")");
                p.Static00.set_positionstep("0");
                p.Static00.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00.getSetter("messageid").set("rolling.grid.title");
                p.Static00.set_fittocontents("width");
                p.Static00.move("30","30",null,"70","30",null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("TEXT(\"rolling.grid.sub\")");
                p.Static01.set_positionstep("0");
                p.Static01.set_fittocontents("height");
                p.Static01.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01.getSetter("messageid").set("rolling.grid.sub");
                p.Static01.set_wordWrap("english");
                p.Static01.move("30","Static00:0",null,"127","30",null);

                p.btn_grid.set_taborder("2");
                p.btn_grid.set_text("TEXT(\"main.learnmore\",\"더 알아보기\")");
                p.btn_grid.set_positionstep("0");
                p.btn_grid.set_cssclass("sta_WF_mainBtn01");
                p.btn_grid.getSetter("messageid").set("main.learnmore");
                p.btn_grid.move("30","Static01:10","150","50",null,null);

                p.ImageViewer00.set_taborder("3");
                p.ImageViewer00.set_positionstep("0");
                p.ImageViewer00.set_image("url(\'imagerc::DarkMode/img_WF_main01.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_text("");
                p.ImageViewer00.move("30","btn_grid:5",null,"300","30",null);

                p.Static02.set_taborder("4");
                p.Static02.set_text("TEXT(\"rolling.component.title\",\"넥사크로 컴포넌트\")");
                p.Static02.set_positionstep("1");
                p.Static02.set_cssclass("sta_WF_mainvisualTitle");
                p.Static02.getSetter("messageid").set("rolling.component.title");
                p.Static02.set_fittocontents("height");
                p.Static02.set_textAlign("left");
                p.Static02.set_wordWrap("english");
                p.Static02.move("20","30",null,"70","15",null);

                p.Static03.set_taborder("5");
                p.Static03.set_text("TEXT(\"rolling.component.sub\",\"Static03\")");
                p.Static03.set_positionstep("1");
                p.Static03.set_cssclass("sta_WF_mainvisualTxt");
                p.Static03.getSetter("messageid").set("rolling.component.sub");
                p.Static03.set_fittocontents("height");
                p.Static03.set_wordWrap("english");
                p.Static03.move("30","Static02:0",null,"127","30",null);

                p.btn_comp.set_taborder("6");
                p.btn_comp.set_text("TEXT(\"main.learnmore\",\"Button02\")");
                p.btn_comp.set_positionstep("1");
                p.btn_comp.set_cssclass("sta_WF_mainBtn01");
                p.btn_comp.getSetter("messageid").set("main.learnmore");
                p.btn_comp.move("30","Static03:10","150","50",null,null);

                p.ImageViewer01.set_taborder("13");
                p.ImageViewer01.set_positionstep("1");
                p.ImageViewer01.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer01.set_image("url(\'imagerc::Main/img_WF_main02.gif\')");
                p.ImageViewer01.set_stretch("fit");
                p.ImageViewer01.move("30","btn_comp:5",null,"300","30",null);

                p.Static04.set_taborder("7");
                p.Static04.set_text("TEXT(\"rolling.useful.title\",\"유용한 편의 기능\")");
                p.Static04.set_positionstep("0");
                p.Static04.set_cssclass("sta_WF_mainvisualTitle");
                p.Static04.getSetter("messageid").set("rolling.useful.title");
                p.Static04.set_wordWrap("english");
                p.Static04.set_visible("false");
                p.Static04.move("1995","33",null,"70","-1935",null);

                p.Static05.set_taborder("8");
                p.Static05.set_text("TEXT(\"rolling.useful.sub\",\"Static05\")");
                p.Static05.set_positionstep("0");
                p.Static05.set_cssclass("sta_WF_mainvisualTxt");
                p.Static05.getSetter("messageid").set("rolling.useful.sub");
                p.Static05.set_wordWrap("english");
                p.Static05.set_fittocontents("height");
                p.Static05.set_visible("false");
                p.Static05.move("1995","Static04:0",null,"127","-1935",null);

                p.btn_sample.set_taborder("9");
                p.btn_sample.set_text("TEXT(\"main.learnmore\",\"Button03\")");
                p.btn_sample.set_positionstep("0");
                p.btn_sample.set_cssclass("sta_WF_mainBtn01");
                p.btn_sample.getSetter("messageid").set("main.learnmore");
                p.btn_sample.set_visible("false");
                p.btn_sample.move("1995","Static05:10","150","50",null,null);

                p.ImageViewer02.set_taborder("14");
                p.ImageViewer02.set_positionstep("0");
                p.ImageViewer02.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer02.set_image("url(\'imagerc::Main/img_WF_main04.gif\')");
                p.ImageViewer02.set_stretch("fit");
                p.ImageViewer02.set_visible("false");
                p.ImageViewer02.set_text("");
                p.ImageViewer02.move("1995","btn_sample:5",null,"300","-1935",null);

                p.Static06.set_taborder("10");
                p.Static06.set_text("TEXT(\"rolling.interface.title\",\"유연한 연동 그리고 확장\")");
                p.Static06.set_positionstep("2");
                p.Static06.set_cssclass("sta_WF_mainvisualTitle");
                p.Static06.set_textAlign("left");
                p.Static06.set_fittocontents("height");
                p.Static06.set_wordWrap("english");
                p.Static06.getSetter("messageid").set("rolling.interface.title");
                p.Static06.move("20","30",null,"70","20",null);

                p.Static07.set_taborder("11");
                p.Static07.set_text("TEXT(\"rolling.interface.sub\",\"Static07\")");
                p.Static07.set_positionstep("2");
                p.Static07.set_cssclass("sta_WF_mainvisualTxt");
                p.Static07.getSetter("messageid").set("rolling.interface.sub");
                p.Static07.set_fittocontents("height");
                p.Static07.set_wordWrap("english");
                p.Static07.move("30","Static06:0",null,"127","30",null);

                p.btn_external.set_taborder("12");
                p.btn_external.set_text("TEXT(\"main.learnmore\",\"Button04\")");
                p.btn_external.set_positionstep("2");
                p.btn_external.set_cssclass("sta_WF_mainBtn01");
                p.btn_external.getSetter("messageid").set("main.learnmore");
                p.btn_external.move("30","Static07:10","150","50",null,null);

                p.ImageViewer03.set_taborder("15");
                p.ImageViewer03.set_positionstep("2");
                p.ImageViewer03.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer03.set_image("url(\'imagerc::Main/img_WF_main03.gif\')");
                p.ImageViewer03.set_stretch("fit");
                p.ImageViewer03.move("30","btn_external:5",null,"300","30",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",1263,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn_grid.move("50","Static01:7","150","50",null,null);

                p.ImageViewer00.set_stretch("none");
                p.ImageViewer00.move(null,"90","700","480","30",null);

                p.Static01.move("45","213","465","60",null,null);

                p.Static00.move("40","130","410","70",null,null);

                p.Static03.move(null,"213","465","60","23",null);

                p.btn_comp.move(null,"Static03:17","150","50","338",null);

                p.ImageViewer01.set_stretch("none");
                p.ImageViewer01.move("30","90","700","480",null,null);

                p.Static02.set_wordWrap("none");
                p.Static02.move("770","130","470","70",null,null);

                p.Static05.set_positionstep("2");
                p.Static05.set_visible("true");
                p.Static05.move("45","213","465","60",null,null);

                p.btn_sample.set_positionstep("2");
                p.btn_sample.set_visible("true");
                p.btn_sample.move("45","Static05:7","150","50",null,null);

                p.ImageViewer02.set_positionstep("2");
                p.ImageViewer02.set_visible("true");
                p.ImageViewer02.set_stretch("none");
                p.ImageViewer02.move(null,"90","700","480","30",null);

                p.Static04.set_wordWrap("none");
                p.Static04.set_positionstep("2");
                p.Static04.set_visible("true");
                p.Static04.move("40","130","460","70",null,null);

                p.Static06.set_fittocontents("both");
                p.Static06.set_wordWrap("none");
                p.Static06.set_positionstep("3");
                p.Static06.move("765","130",null,"70","33",null);

                p.Static07.set_positionstep("3");
                p.Static07.move(null,"Static06:13","465","60","33",null);

                p.btn_external.set_positionstep("3");
                p.btn_external.move(null,"Static07:17","150","50","348",null);

                p.ImageViewer03.set_positionstep("3");
                p.ImageViewer03.set_stretch("none");
                p.ImageViewer03.move("30","90","700","480",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("main_rolling.xfdl", function() {

        this.main_rolling_onload = function(obj,e)
        {
        	this.mainImgDis();

        	//	this.gfnFormOnLoad();

        	/* AS-IS 다국어 처리 */
        	//nexacro.applyI18n(this);

        	//(nexacro.getApplication().IsMobile?false:true)

        	//스텝 바뀔때 사라지고 나타나는 총 시간 = 680ms
        	this.setTimer(2,3780);

        	this.appTopform = nexacro.getApplication().mainframe.all[0].form.divTop.form;

        };

        //메인 롤링이미지 변경(배경색 다른 gif)
        this.mainImgDis = function()
        {
        	const app = nexacro.getApplication();
        	this.ImageViewer00.background = app.themeMode=="L"?"#ffffff":"#2D2E40";
        	this.ImageViewer00.image = app.themeMode=="L"?"imagerc::Main/img_WF_main01.gif":"imagerc::DarkMode/img_WF_main01.gif";

        	this.ImageViewer01.background = app.themeMode=="L"?"#ffffff":"#2D2E40";
        	this.ImageViewer01.image = app.themeMode=="L"?"imagerc::Main/img_WF_main02.gif":"imagerc::DarkMode/img_WF_main02.gif";

        	this.ImageViewer02.background = app.themeMode=="L"?"#ffffff":"#2D2E40";
        	this.ImageViewer02.image = app.themeMode=="L"?"imagerc::Main/img_WF_main04.gif":"imagerc::DarkMode/img_WF_main04.gif";

        	this.ImageViewer03.background = app.themeMode=="L"?"#ffffff":"#2D2E40";
        	this.ImageViewer03.image = app.themeMode=="L"?"imagerc::Main/img_WF_main03.gif":"imagerc::DarkMode/img_WF_main03.gif";
        }

        this.main_rolling_ontimer = function(obj,e)
        {
        	switch(e.timerid) {
        	case 0:{
        		let nStepIndex = this.getStepIndex();
        		nStepIndex++;

        		if(nStepIndex >= this.getStepCount()){
        			nStepIndex = 0;
        		}

        		obj.visible = false;
        		//step 을 바꿀때 380ms 가 넘어가면 화면이 변경되는게 보임
        		this.setStepIndex(nStepIndex);
        		this.setTimer(1,380);
        		this.killTimer(0);
        		}break;

        	case 1:
        		obj.visible = true;
        		this.setTimer(5,50);
        		this.killTimer(1);
        		break;

        	///////
        	case 2:
        		obj.opacity = 0.8;
        		this.setTimer(3,50);
        		break;

        	case 3:
        		obj.opacity = 0.5;
        		this.setTimer(4,50);
        		this.killTimer(3);
        		break;

        	case 4:
        		obj.opacity = 0.3;
        		this.setTimer(0,50);
        		this.killTimer(4);
        		break;

        	case 5:
        		obj.opacity = 0.5;
        		this.setTimer(6,50);
        		this.killTimer(5);
        		break;
        	case 6:
        		obj.opacity = 0.8;
        		this.setTimer(7,50);
        		this.killTimer(6);
        		break;
        	case 7:
        		obj.opacity = 1.0;
        		this.killTimer(7);
        		break;

        	default:
        	}

        };

        //step 에서 더 알아보기 버튼 클릭시 이벤트 4개
        this.btn_grid_onclick = function(obj,e)
        {
        	const app = nexacro.getApplication();
        	if(app.IsMobile) this.openMenu("10200");
        	else this.appTopform.btnMenu_10000.click();
        };

        this.btn_comp_onclick = function(obj,e)
        {	this.appTopform.btnMenu_20000.click();		};

        this.btn_sample_onclick = function(obj,e)
        {	this.appTopform.btnMenu_40000.click();		};

        this.btn_external_onclick = function(obj,e)
        {	this.appTopform.btnMenu_50000.click();		};



        //step 버튼 클릭했을때 이벤트 있다면 변경
        this.main_rolling_onstepchanged = function(obj,e)
        {
        	//클릭했을때 다음화면으로 바로 안가게
        	this.killTimer(2);
        	this.setTimer(2,3780);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_rolling_onload,this);
            this.addEventHandler("ontimer",this.main_rolling_ontimer,this);
            this.addEventHandler("onstepchanged",this.main_rolling_onstepchanged,this);
            this.btn_grid.addEventHandler("onclick",this.btn_grid_onclick,this);
            this.btn_comp.addEventHandler("onclick",this.btn_comp_onclick,this);
            this.btn_sample.addEventHandler("onclick",this.btn_sample_onclick,this);
            this.btn_external.addEventHandler("onclick",this.btn_external_onclick,this);
        };
        this.loadIncludeScript("main_rolling.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
