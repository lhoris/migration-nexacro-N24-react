(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mobilecomponents");
            this.set_titletext("모바일 퍼스트 컴포넌트");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,1340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","20","20","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"comp.mobilecomponents\",\"Mobile First Components\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("comp.mobilecomponents");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","Static01:20",null,"200","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_component");
            obj.set_flexgrow("1");
            obj.set_text("");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","29.00","10","820","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("TextField");
            obj.set_cssclass("sta_WF_txt20px");
            obj.set_flexgrow("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40","100%","1",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            obj.set_flexgrow("1");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TF_overlap","41.00","63","195","88",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_labeltext("Overlap");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TF_readonly","845","92","195","88",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_labeltext("e-mail");
            obj.set_flexgrow("1");
            obj.set_inputtype("email");
            obj.set_displaynulltext("abc@abc.com");
            obj.set_usecharcount("false");
            obj.set_useleadingbutton("true");
            obj.set_usetrailingbutton("true");
            obj.set_invalidtext("Input value is invalid.");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TF_inside","41.00","63","195","77",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_labelposition("inside");
            obj.set_labeltext("Inside");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TF_outside","234.00","60","195","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_labelposition("outside");
            obj.set_labeltext("Outside");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","433","70","100%","150",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("3");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("end");
            obj.set_spacing("12px 0px 20px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TF_outside\"/><PanelItem id=\"PanelItem02\" componentid=\"TF_inside\"/><PanelItem id=\"PanelItem03\" componentid=\"TF_overlap\"/><PanelItem id=\"PanelItem04\" componentid=\"TF_readonly\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Div00:20",null,"255","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div02\"/><PanelItem id=\"PanelItem01\" componentid=\"Div03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","20","Panel00:20",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_component");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8","100%","30",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_text("PopupRangePicker");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","0","40","100%","1",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div04.addChild(obj.name, obj);

            obj = new DateField("DF_start","38.00","71","200","85",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_labeltext("Start Date");
            obj.set_flexgrow("1");
            this.Div04.addChild(obj.name, obj);

            obj = new DateField("DF_end","448.00","71","200","85",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_labeltext("End Date");
            obj.set_flexgrow("1");
            this.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100%","100",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("30");
            obj.set_verticalgap("5");
            obj.set_spacing("20px 20px 20px 20px");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"DF_start\"/><PanelItem id=\"PanelItem01\" componentid=\"DF_end\"/></Contents>");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div06","20.00","Div04:20",null,"530","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","40",null,"1","20",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("DateRangePicker");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div06.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00","35","103",null,"390","35",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_displaytype("date");
            obj.set_tabbuttonheight("36");
            obj.set_headlineposition("top");
            obj.set_displaymonthcount("3");
            this.Div06.addChild(obj.name, obj);

            obj = new Radio("Radio01_00",null,"60","258","30","30",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var Div06_form_Radio01_00_innerdataset = new nexacro.NormalDataset("Div06_form_Radio01_00_innerdataset", obj);
            Div06_form_Radio01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">date</Col><Col id=\"datacolumn\">date</Col></Row><Row><Col id=\"codecolumn\">datetime</Col><Col id=\"datacolumn\">datetime</Col></Row><Row><Col id=\"codecolumn\">time</Col><Col id=\"datacolumn\">time</Col></Row></Rows>");
            obj.set_innerdataset(Div06_form_Radio01_00_innerdataset);
            obj.set_text("date");
            obj.set_value("date");
            obj.set_index("0");
            this.Div06.addChild(obj.name, obj);

            obj = new PopupDateRangePicker("PopupDateRangePicker00","960.00","290","390","330",null,null,null,null,null,null,this);
            obj.set_displaytype("date");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","471.00","290","430","255",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("DateField");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","20","40",null,"1","20",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div03.addChild(obj.name, obj);

            obj = new DateField("DateField00","30","75",null,"100","30",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_labeltext("DateField");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("Radio01_00",null,"DateField00:30","258","30","29",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var Div03_form_Radio01_00_innerdataset = new nexacro.NormalDataset("Div03_form_Radio01_00_innerdataset", obj);
            Div03_form_Radio01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">date</Col><Col id=\"datacolumn\">date</Col></Row><Row><Col id=\"codecolumn\">datetime</Col><Col id=\"datacolumn\">datetime</Col></Row><Row><Col id=\"codecolumn\">time</Col><Col id=\"datacolumn\">time</Col></Row></Rows>");
            obj.set_innerdataset(Div03_form_Radio01_00_innerdataset);
            obj.set_text("date");
            obj.set_value("date");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div02","20.00","290","430","255",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("MultiLineTextField");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","20","40",null,"1","20",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div02.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00","30.00","66",null,"135","30",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_labeltext("MultiLineTextField");
            obj.set_wordWrap("char");
            this.Div02.addChild(obj.name, obj);

            obj = new Radio("Radiomulti",null,"MultiLineTextField00:4","279","30","30",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var Div02_form_Radiomulti_innerdataset = new nexacro.NormalDataset("Div02_form_Radiomulti_innerdataset", obj);
            Div02_form_Radiomulti_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">overlap</Col><Col id=\"datacolumn\">overlap</Col></Row><Row><Col id=\"codecolumn\">outside</Col><Col id=\"datacolumn\">outside</Col></Row><Row><Col id=\"codecolumn\">inside</Col><Col id=\"datacolumn\">inside</Col></Row></Rows>");
            obj.set_innerdataset(Div02_form_Radiomulti_innerdataset);
            obj.set_text("overlap");
            obj.set_value("overlap");
            obj.set_index("0");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_spacing("8px 15px 0px 15px");
            obj.set_tablecellincompalign("start");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("8px 20px 20px 20px");
            obj.set_verticalgap("5");
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,function(p){});
            this.Div06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03_00.set_taborder("0");
                p.Static03_00.set_text("MultiLineTextField");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Static00");
                p.Static00.set_cssclass("sta_WF_titleLine");
                p.Static00.move("20","40",null,"1","20",null);

                p.MultiLineTextField00.set_taborder("2");
                p.MultiLineTextField00.set_labeltext("MultiLineTextField");
                p.MultiLineTextField00.set_wordWrap("char");
                p.MultiLineTextField00.move("30.00","66",null,"135","30",null);

                p.Radiomulti.set_taborder("3");
                p.Radiomulti.set_innerdataset(Div02_form_Radiomulti_innerdataset);
                p.Radiomulti.set_codecolumn("codecolumn");
                p.Radiomulti.set_datacolumn("datacolumn");
                p.Radiomulti.set_direction("vertical");
                p.Radiomulti.set_fittocontents("width");
                p.Radiomulti.set_value("overlap");
                p.Radiomulti.set_index("0");
                p.Radiomulti.move(null,"MultiLineTextField00:4","279","30","30",null);
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",920,1340,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mobilecomponents.xfdl", function() {
        /**
        *  Nexacro DEMO
        *  @FileName 	mobilecomponents.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/11/27
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/11/27			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
        * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        var objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.mobilecomponents_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        	if(objApp.mainframe.width<600){
        	    this.Div06.form.DateRangePicker00.displaymonthcount="1";
        	}else{
        		this.Div06.form.DateRangePicker00.displaymonthcount="3";
        	}

        	//panel 동작 시 가장 밑의 컴포넌트 bottom 값으로 화면 높이 재계산
        	//this.set_height(this.Div06.getOffsetBottom()+20);
        	//this.resetScroll();

        	//frame resize
        	//var p = this.parent.parent;
        	//p["mainPageOnLoad"].call(p, this.getOffsetHeight());
        };

        this.mobilecomponents_onsize = function(obj,e)
        {
        	if(objApp.mainframe.width<600){
        	    this.Div06.form.DateRangePicker00.displaymonthcount="1";
        	}else{
        		this.Div06.form.DateRangePicker00.displaymonthcount="3";
        	}
        };

        /*******************************************************************************************************************************
        * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
        * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
        * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Div04_DF_start_ondropdown = function(obj,e)
        {
        	this.PopupDateRangePicker00.displaymonthcount = 1;
        	this.PopupDateRangePicker00.useclosebutton = false;
        	this.PopupDateRangePicker00.useheadline = true;

        	this.PopupDateRangePicker00.headlineposition = "top";
        	this.PopupDateRangePicker00.trackPopupCenter("start", 400, 450);

        	e.preventDefault();
        };

        this.Div04_DF_end_ondropdown = function(obj,e)
        {
        	this.PopupDateRangePicker00.displaymonthcount = 1;
        	this.PopupDateRangePicker00.useclosebutton = false;
        	this.PopupDateRangePicker00.useheadline = true;

        	this.PopupDateRangePicker00.headlineposition = "top";
        	this.PopupDateRangePicker00.trackPopupCenter("end", 400, 450);

        	e.preventDefault();
        };

        this.PopupDateRangePicker00_onchanged = function(obj,e)
        {
        	this.Div04.form.DF_start.value = this.PopupDateRangePicker00.startdate;
        	this.Div04.form.DF_end.value = this.PopupDateRangePicker00.enddate;
        };


        this.Div00_Radio00_onitemchanged = function(obj,e)
        {
        	this.Div00.form.TextField00.labelposition = obj.value;
        };


        this.Div02_Radiomulti_onitemchanged = function(obj,e)
        {
        	this.Div02.form.MultiLineTextField00.labelposition = obj.value;
        	this.Div02.form.MultiLineTextField00.setFocus();
        };


        this.Div03_Radio01_00_onitemchanged = function(obj,e)
        {
        	this.Div03.form.DateField00.inputtype = obj.value;
        	this.Div03.form.DateField00.setFocus();
        };

        this.Div06_Radio01_00_onitemchanged = function(obj,e)
        {
        	this.Div06.form.DateRangePicker00.displaytype = obj.value;
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.components_ontimer,this);
            this.addEventHandler("onload",this.mobilecomponents_onload,this);
            this.addEventHandler("onsize",this.mobilecomponents_onsize,this);
            this.Div04.form.DF_start.addEventHandler("ondropdown",this.Div04_DF_start_ondropdown,this);
            this.Div04.form.DF_start.addEventHandler("onchanged",this.Div04_DF_start_onchanged,this);
            this.Div04.form.DF_end.addEventHandler("ondropdown",this.Div04_DF_end_ondropdown,this);
            this.Div06.addEventHandler("onsize",this.Div06_onsize,this);
            this.Div06.form.Radio01_00.addEventHandler("onitemchanged",this.Div06_Radio01_00_onitemchanged,this);
            this.PopupDateRangePicker00.addEventHandler("onchanged",this.PopupDateRangePicker00_onchanged,this);
            this.Div03.form.Radio01_00.addEventHandler("onitemchanged",this.Div03_Radio01_00_onitemchanged,this);
            this.Div02.form.Radiomulti.addEventHandler("onitemchanged",this.Div02_Radiomulti_onitemchanged,this);
        };
        this.loadIncludeScript("mobilecomponents.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
