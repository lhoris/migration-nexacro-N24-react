(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDelPortList", this);
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"portName\" type=\"STRING\" size=\"256\"/><Column id=\"left\" type=\"STRING\" size=\"256\"/><Column id=\"top\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"height\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWidgetList", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"left\" type=\"STRING\" size=\"256\"/><Column id=\"top\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"height\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">memo</Col><Col id=\"left\">10</Col><Col id=\"top\">186</Col><Col id=\"width\">250</Col><Col id=\"height\">250</Col><Col id=\"url\">sample::widgetMemo.xfdl</Col></Row><Row><Col id=\"id\">watch</Col><Col id=\"left\">10</Col><Col id=\"top\">186</Col><Col id=\"width\">330</Col><Col id=\"height\">210</Col><Col id=\"url\">sample::widgetWatch.xfdl</Col></Row><Row><Col id=\"id\">calc</Col><Col id=\"left\">10</Col><Col id=\"top\">186</Col><Col id=\"width\">271</Col><Col id=\"height\">365</Col><Col id=\"url\">sample::widgetCalc.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPortInit", this);
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"left\" type=\"STRING\" size=\"256\"/><Column id=\"top\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"height\" type=\"STRING\" size=\"256\"/><Column id=\"portName\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitle","20","20","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Personalization");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("sample.personalization");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","374","66","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Widget Menu");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("left");
            obj.getSetter("messageid").set("sample.personalization.widget");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWidget","Static03_00:5","63","170","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("36");
            var cboWidget_innerdataset = new nexacro.NormalDataset("cboWidget_innerdataset", obj);
            cboWidget_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Choice...</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"codecolumn\">memo</Col><Col id=\"datacolumn\">Memo</Col></Row><Row><Col id=\"codecolumn\">calc</Col><Col id=\"datacolumn\">Calculator</Col></Row><Row><Col id=\"codecolumn\">watch</Col><Col id=\"datacolumn\">Clock</Col></Row></Rows>");
            obj.set_innerdataset(cboWidget_innerdataset);
            obj.set_text("---Choice---");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnWidgetAdd","cboWidget:5","63","80","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("sample.personalization.add");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","btnWidgetAdd:3","63","80","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Init");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("sample.personalization.init");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnInit:3","63","80","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("sample.personalization.save");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","115","47.28%","320",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("usePort").set("Y");
            obj.set_border("1px solid #a1abba");
            obj.getSetter("portName").set("Week Schedule");
            obj.set_cssclass("div_WF_widget01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","5",null,"45","30",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Overview");
            obj.set_cssclass("sta_WF_widgetTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","30","30","25",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_noteDel");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","30","65","41.67%","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Document");
            obj.set_cssclass("sta_WF_widgetBox01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","Static01:10","65",null,"80","30",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Schedule");
            obj.set_cssclass("sta_WF_widgetBox02");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","30","152",null,"151","30",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_widgetImg01");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","20","444","47.17%","320",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.getSetter("usePort").set("Y");
            obj.getSetter("portName").set("게시판(업무)");
            obj.set_formscrollbarsize("0");
            obj.set_border("1px solid #a1abba");
            obj.set_cssclass("div_WF_widget01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","5",null,"45","30",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Weekly Schedule");
            obj.set_cssclass("sta_WF_widgetTitle");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","30","30","25",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_noteDel");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","30","67","50","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("Mon\r\n<fc v=\'#111111\'>11</fc>");
            obj.set_cssclass("sta_WF_weeklyLabel01");
            obj.set_usedecorate("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","100","67","179","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("Team Meeting");
            obj.set_color("#111111");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","100","93","179","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("10:30am-11:30am");
            obj.set_color("#59618e");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"74","36","36","30",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_sampleMore");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"50","50","10","10",null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_sampleAdd");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","30","127","50","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("Mon\r\n<fc v=\'#111111\'>11</fc>");
            obj.set_cssclass("sta_WF_weeklyLabel01");
            obj.set_usedecorate("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01","100","127","179","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("Business Meeting");
            obj.set_color("#111111");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","100","151","179","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("14:00pm-15:00pm");
            obj.set_color("#59618e");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"134","36","36","30",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_sampleMore");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01","30","187","50","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("Wed\r\n<fc v=\'#111111\'>13</fc>");
            obj.set_cssclass("sta_WF_weeklyLabel01");
            obj.set_usedecorate("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_02","100","187","179","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("Monthly Report");
            obj.set_color("#111111");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","100","211","179","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("10:00am-11:30am");
            obj.set_color("#59618e");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"194","36","36","30",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_sampleMore");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div00","Div02:10","444",null,"320","19",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.getSetter("usePort").set("Y");
            obj.getSetter("portName").set("통합조회");
            obj.set_formscrollbarsize("0");
            obj.set_border("1px solid #a1abba");
            obj.set_cssclass("div_WF_widget01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","5",null,"45","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Today");
            obj.set_cssclass("sta_WF_widgetTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","30","30","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_noteDel");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","97","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("10:30am-11:30am");
            obj.set_color("#fe5252");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","30","127","196","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Topic : Technical meeting");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","30","238","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_sampleProfile01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","65","238","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_sampleProfile02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","100","238","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_sampleProfile03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","135","238","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_sampleProfile04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_01","170","238","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_sampleProfile05");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","205","238","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("+2");
            obj.set_cssclass("sta_WF_sampleMore");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"67","40","40","68",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_sampleWrite");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"67","40","40","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_samplesShare");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","30","157","196","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("MeetingRoom5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","30","67","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Team Meeting");
            obj.set_cssclass("sta_WF_widgetTxt01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,null,"50","50","10","10",null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_sampleAdd");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03","Div01:10","115",null,"320","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div03");
            obj.getSetter("usePort").set("Y");
            obj.getSetter("portName").set("Budget Report");
            obj.set_formscrollbarsize("0");
            obj.set_border("1px solid #a1abba");
            obj.set_cssclass("div_WF_widget01");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","30","30","25",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_noteDel");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","40","63",null,"90","40",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("txt_WF_design01");
            obj.set_displaynulltext("create new idea");
            obj.set_wordWrap("char");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","5",null,"45","42",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("Create New Idea");
            obj.set_cssclass("sta_WF_widgetTitle");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00","40","238","354","50",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("Done");
            obj.set_cssclass("btn_WF_basic02");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","40","180","30","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_ideaTag");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","81","175","40","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_sampleProfile03");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"177","36","36","40",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_samplesShare");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","135","175","113","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("Edward Lee");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("staMove","930","0","215","226",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("3px dashed silver");
            obj.set_visible("false");
            obj.set_borderRadius("20px");
            this.addChild(obj.name, obj);

            obj = new Div("Div03_01","935","115",null,"320","-451",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div03");
            obj.getSetter("usePort").set("Y");
            obj.getSetter("portName").set("Budget Report");
            obj.set_formscrollbarsize("0");
            obj.set_border("1px solid #a1abba");
            obj.set_cssclass("div_WF_widget02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,null,"10","10",null,null,null,null,this.Div03_01.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","30","30","25",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_noteDel");
            obj.set_visible("false");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Div("Div00","29","36","374",null,null,"19",null,null,null,null,this.Div03_01.form);
            obj.set_taborder("1");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static02","20","5",null,"257","20",null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("50");
            obj.set_borderRadius("20px");
            obj.set_cssclass("sta_WF_wdgCalendarBg");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","21","41",null,"30","21",null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("51");
            obj.set_text("");
            obj.set_cssclass("sta_WF_wdgWeekBg");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","6.4%","41","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Sun");
            obj.set_cssclass("sta_WF_wdgCalendarWeekH");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","72","41","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Mon");
            obj.set_cssclass("sta_WF_wdgCalendarWeek");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","120","41","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Tue");
            obj.set_cssclass("sta_WF_wdgCalendarWeek");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","168","41","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Wed");
            obj.set_cssclass("sta_WF_wdgCalendarWeek");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","216","41","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Thu");
            obj.set_cssclass("sta_WF_wdgCalendarWeek");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_04","264","41","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Fri");
            obj.set_cssclass("sta_WF_wdgCalendarWeek");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_05","312","41","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Sat");
            obj.set_cssclass("sta_WF_wdgCalendarWeek");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","24","78","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("btn_WF_widgetCalendarH");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","72","78","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("28");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","120","78","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("29");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","168","78","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("30");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03","216","78","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("31");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04","264","78","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_05","312","78","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_06","24","108","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_widgetCalendarH");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","72","108","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","120","108","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_widgetCalendar,btn_WF_widgetToday");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","168","108","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03_00","216","108","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04_00","264","108","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_05_00","312","108","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_07","24","138","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_widgetCalendarH");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","72","138","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","120","138","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_01","168","138","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("13");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03_01","216","138","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("14");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04_01","264","138","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("15");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_05_01","312","138","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("27");
            obj.set_text("16");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_08","24","168","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("17");
            obj.set_cssclass("btn_WF_widgetCalendarH");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02","72","168","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("18");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_02","120","168","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("19");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_02","168","168","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("20");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03_02","216","168","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("32");
            obj.set_text("21");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04_02","264","168","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("22");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_05_02","312","168","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("34");
            obj.set_text("23");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_09","24","198","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("24");
            obj.set_cssclass("btn_WF_widgetCalendarH");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_03","72","198","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("25");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_03","120","198","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("37");
            obj.set_text("26");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_03","168","198","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("38");
            obj.set_text("27");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03_03","216","198","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("28");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04_03","264","198","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("40");
            obj.set_text("29");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_05_03","312","198","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("41");
            obj.set_text("30");
            obj.set_cssclass("btn_WF_widgetCalendar");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_10","24","228","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("42");
            obj.set_text("31");
            obj.set_cssclass("btn_WF_widgetCalendarH");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_04","72","228","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_04","120","228","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_04","168","228","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("45");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_03_04","216","228","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("46");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_04_04","264","228","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("47");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_05_04","312","228","40","30",null,null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("48");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_widgetCalendar");
            obj.set_enable("false");
            this.Div03_01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","1",null,"40","20",null,null,null,null,null,this.Div03_01.form.Div00.form);
            obj.set_taborder("49");
            obj.set_text("January, 2021");
            obj.set_cssclass("sta_WF_wdgCalendarTitle");
            this.Div03_01.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03_01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div03_01.form.Div00.form,function(p){});
            this.Div03_01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03_01.form
            obj = new Layout("default","",0,0,this.Div03_01.form,function(p){});
            this.Div03_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample-personalization.xfdl", function() {
        this.bAni = false;
        this.fvObjDrag = false;
        this.fvTimerIdx = 0;
        this.fvTimerMax = 30;
        this.fvObjFrom;
        this.fvObjTo;
        this.fvMemocount = 1;

        // this.arrMonth = ["", "Jaunary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // this.arrDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	// 초기화 위해 현재 position 임시저장
        	var sComps = this.components;
        	var i;
        	var nRow;

        	for (i = 0; i < sComps.length; i++)
        	{
        		if (sComps[i].usePort == "Y")
        		{
        			nRow = this.dsPortInit.addRow();

        			this.dsPortInit.setColumn(nRow, "compId", sComps[i].name);
        			this.dsPortInit.setColumn(nRow, "portName", sComps[i].portName);
        			this.dsPortInit.setColumn(nRow, "left", sComps[i].getOffsetLeft());
        			this.dsPortInit.setColumn(nRow, "top", sComps[i].getOffsetTop());
        			this.dsPortInit.setColumn(nRow, "width", sComps[i].getOffsetWidth());
        			this.dsPortInit.setColumn(nRow, "height", sComps[i].getOffsetHeight());
        		}
        	}

        	var xmlPortInfo = nexacro.getPrivateProfile("portInfo");
        	var sCompId;
        	var nLeft, nTop, nWidth, nHeight;

        	if (xmlPortInfo) // 임시 저장된 포틀릿 위치 정보가 있을 경우
        	{
        		var portInfoDs = new Dataset();
        		portInfoDs.loadXML(xmlPortInfo);

        		if (portInfoDs != null && portInfoDs.rowcount > 0)
        		{
        			for (i = 0; i < portInfoDs.rowcount; i++)
        			{
        				sCompId = portInfoDs.getColumn(i, "compId");
        				nLeft = portInfoDs.getColumn(i, "left");
        				nTop = portInfoDs.getColumn(i, "top");
        				nWidth = portInfoDs.getColumn(i, "width");
        				nHeight = portInfoDs.getColumn(i, "height");

        				if (this.components[sCompId])
        				{
        					this.components[sCompId].setOffsetLeft(nexacro.toNumber(nLeft));
        					this.components[sCompId].setOffsetTop(nexacro.toNumber(nTop));
        					this.components[sCompId].setOffsetWidth(nexacro.toNumber(nWidth));
        					this.components[sCompId].setOffsetHeight(nexacro.toNumber(nHeight));
        				}
        				else
        				{
        					if (sCompId == "divTile_memo") {
        						this.fnLoadWidget(this.dsWidgetList.findRow("id", "memo"));

        						this.components[sCompId].setOffsetLeft(nexacro.toNumber(nLeft));
        						this.components[sCompId].setOffsetTop(nexacro.toNumber(nTop));
        						this.components[sCompId].setOffsetWidth(nexacro.toNumber(nWidth));
        						this.components[sCompId].setOffsetHeight(nexacro.toNumber(nHeight));
        						this.components[sCompId].form.fnSetTxt(portInfoDs.getColumn(i, "text"));
        					} else if(sCompId == "divTile_calc") {
        						this.fnLoadWidget(this.dsWidgetList.findRow("id", "calc"));

        						this.components[sCompId].setOffsetLeft(nexacro.toNumber(nLeft));
        						this.components[sCompId].setOffsetTop(nexacro.toNumber(nTop));
        						this.components[sCompId].setOffsetWidth(nexacro.toNumber(nWidth));
        						this.components[sCompId].setOffsetHeight(nexacro.toNumber(nHeight));
        					} else if(sCompId == "divTile_watch") {
        						this.fnLoadWidget(this.dsWidgetList.findRow("id", "watch"));

        						this.components[sCompId].setOffsetLeft(nexacro.toNumber(nLeft));
        						this.components[sCompId].setOffsetTop(nexacro.toNumber(nTop));
        						this.components[sCompId].setOffsetWidth(nexacro.toNumber(nWidth));
        						this.components[sCompId].setOffsetHeight(nexacro.toNumber(nHeight));
        					}
        				}
        			}
        		}
        	}

        	var xmlDelPortInfo = nexacro.getPrivateProfile("delPortInfo");

        	// 삭제된 포틀릿 위치 정보가 있을 경우
        	if (xmlDelPortInfo != null && xmlDelPortInfo != "") {
        		this.dsDelPortList.loadXML(xmlDelPortInfo);
        	}
        };

        this.form_ontimer = function(obj,e)
        {
        	if (e.timerid == 1)
        	{
        		this.fvTimerIdx++;

        		var nLeft1 = this.fnMoveAni(this.fvTimerIdx, this.fvObjFrom.orgLeft, this.fvObjTo.orgLeft - this.fvObjFrom.orgLeft, this.fvTimerMax);
        		var nTop1 = this.fnMoveAni(this.fvTimerIdx, this.fvObjFrom.orgTop, this.fvObjTo.orgTop - this.fvObjFrom.orgTop, this.fvTimerMax);
        		var nWidth1 = this.fnMoveAni(this.fvTimerIdx, this.fvObjFrom.orgWidth, this.fvObjTo.orgWidth - this.fvObjFrom.orgWidth, this.fvTimerMax);
        		var nHeight1 = this.fnMoveAni(this.fvTimerIdx, this.fvObjFrom.orgHeight, this.fvObjTo.orgHeight - this.fvObjFrom.orgHeight, this.fvTimerMax);

        		var nLeft2 = this.fnMoveAni(this.fvTimerIdx, this.fvObjTo.orgLeft, this.fvObjFrom.orgLeft - this.fvObjTo.orgLeft, this.fvTimerMax);
        		var nTop2 = this.fnMoveAni(this.fvTimerIdx, this.fvObjTo.orgTop, this.fvObjFrom.orgTop - this.fvObjTo.orgTop, this.fvTimerMax);
        		var nWidth2 = this.fnMoveAni(this.fvTimerIdx, this.fvObjTo.orgWidth, this.fvObjFrom.orgWidth - this.fvObjTo.orgWidth, this.fvTimerMax);
        		var nHeight2 = this.fnMoveAni(this.fvTimerIdx, this.fvObjTo.orgHeight, this.fvObjFrom.orgHeight - this.fvObjTo.orgHeight, this.fvTimerMax);

        		this.fvObjFrom.move(nLeft1, nTop1, nWidth1, nHeight1);
        		this.fvObjTo.move(nLeft2, nTop2, nWidth2, nHeight2);

        		if (this.fvTimerIdx == this.fvTimerMax) {
        			this.bAni = false;
         			this.fvTimerIdx = 0;
         			this.killTimer(e.timerid);
         		}
        	}
        	else if (e.timerid == 2)
        	{
        		this.killTimer(2);
        		this.fvObjNewMemo.bringToFront();
        	}
        };

        this.form_onlbuttonup = function(obj,e)
        {
        	if (this.fvObjDrag == true) {
        		this.fvObjDrag = false;

        		this.fnRemoveDragObj();
        	}
        };

        this.form_ondragmove = function(obj,e)
        {
        	if (e.sourceobject.usePort == "Y")
        	{
        		this.staMove.move(e.clientx + 10, e.clienty + 10);
        	}
        	else
        	{
        		var arrPoint = e.userdata.split(",");
        		var nLeft;
        		var nTop;
        		var nRight;
        		var nBottom;
        		var nWidth;
        		var nHeight;

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

        			nWidth = this.fvChildObj.getOffsetRight();
        			nHeight = this.fvChildObj.getOffsetBottom();

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

        this.form_ondrop = function(obj,e)
        {
        	if (this.bAni == false)
        	{
        		this.fvObjFrom = e.userdata;
        		this.fvObjTo = this.fnGetDragToObj(e.fromobject);

        		if (this.fvObjTo.usePort == "Y" && this.fvObjFrom instanceof Div)
        		{
        			this.fvObjFrom.orgLeft = this.fvObjFrom.getOffsetLeft();
        			this.fvObjFrom.orgTop = this.fvObjFrom.getOffsetTop();
        			this.fvObjFrom.orgWidth = this.fvObjFrom.getOffsetWidth();
        			this.fvObjFrom.orgHeight = this.fvObjFrom.getOffsetHeight();

        			this.fvObjTo.orgLeft = this.fvObjTo.getOffsetLeft();
        			this.fvObjTo.orgTop = this.fvObjTo.getOffsetTop();
        			this.fvObjTo.orgWidth = this.fvObjTo.getOffsetWidth();
        			this.fvObjTo.orgHeight = this.fvObjTo.getOffsetHeight();

        			this.bAni = true;
        			this.setTimer(1, 10);
        		}
        	}
        };

        this.fnComBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnWidgetAdd" :
        			var sTitle = this.cboWidget.value;

        			if (sTitle == 0) {
        				this.alert("추가할 위젯 종류를 설정해주세요");

        				return;
        			} else {
        				this.fnLoadWidget(this.dsWidgetList.findRow("id", sTitle));
        			}
        			break;

        		case "btnInit" :
        			var i;
        			var sComId;
        			var nLeft, nTop, nWidth, nHeith;

        			for (i = 0; i < this.dsPortInit.rowcount; i++)
        			{
        				sComId = this.dsPortInit.getColumn(i, "compId");
        				nLeft = this.dsPortInit.getColumn(i, "left");
        				nTop = this.dsPortInit.getColumn(i, "top");
        				nWidth = this.dsPortInit.getColumn(i, "width");
        				nHeith = this.dsPortInit.getColumn(i, "height");

        				this.components[sComId].setOffsetLeft(nexacro.toNumber(nLeft));
        				this.components[sComId].setOffsetTop(nexacro.toNumber(nTop));
        				this.components[sComId].setOffsetWidth(nexacro.toNumber(nWidth));
        				this.components[sComId].setOffsetHeight(nexacro.toNumber(nHeith));
        			}

        			this.dsDelPortList.clearData();

        			nexacro.setPrivateProfile("portInfo", "");
        			nexacro.setPrivateProfile("delPortInfo", "");

        			this.reload();
        			break;

        		case "btnSave" :
        			if (!this.confirm("저장하시겠습니까?")) {
        				return;
        			}

        			var arrPortComp = [];
        			var tmpDs = new Dataset();

        			tmpDs.addColumn("compId", "string");
        			tmpDs.addColumn("left", "string");
        			tmpDs.addColumn("top", "string");
        			tmpDs.addColumn("width", "string");
        			tmpDs.addColumn("height", "string");
        			tmpDs.addColumn("text", "string");

        			var sComps = this.components;
        			var i;
        			var nRow;

        			for (i = 0; i < sComps.length; i++)
        			{
        				if (sComps[i].usePort == "Y")
        				{
        					nRow = tmpDs.addRow();

        					tmpDs.setColumn(nRow, "compId",  sComps[i].name);
        					tmpDs.setColumn(nRow, "left",  sComps[i].getOffsetLeft());
        					tmpDs.setColumn(nRow, "top",  sComps[i].getOffsetTop());
        					tmpDs.setColumn(nRow, "width",  sComps[i].getOffsetWidth());
        					tmpDs.setColumn(nRow, "height",  sComps[i].getOffsetHeight());

        					if (sComps[i].name == "divTile_memo") {
        						tmpDs.setColumn(nRow, "text",  sComps[i].form.fnGetTxt());
        					}
        				}
        			}

        			nexacro.setPrivateProfile( "portInfo", tmpDs.saveXML());
        			tmpDs.destroy();

        			if (this.dsDelPortList.rowcount > 0) {
        				nexacro.setPrivateProfile("delPortInfo", this.dsDelPortList.saveXML());
        			}
        			break;

        		case "btnClose" :
        			var nRow = this.dsDelPortList.addRow();

        			this.dsDelPortList.setColumn(nRow, "portName", obj.parent.parent.portName);
        			this.dsDelPortList.setColumn(nRow, "compId", obj.parent.parent.name);
        			this.dsDelPortList.setColumn(nRow, "left", obj.parent.parent.getOffsetLeft());
        			this.dsDelPortList.setColumn(nRow, "top", obj.parent.parent.getOffsetTop());
        			this.dsDelPortList.setColumn(nRow, "width", obj.parent.parent.getOffsetWidth());
        			this.dsDelPortList.setColumn(nRow, "height", obj.parent.parent.getOffsetHeight());

        			obj.parent.parent.setOffsetWidth(0);
        			obj.parent.parent.setOffsetHeight(0);
        			break;
        	}
        };

        this.form_onsize = function(obj,e)
        {
        	// Form Size 변경 시 달력 Center 위치
        	var nLeft = (this.Div03.getOffsetWidth() / 2) - (this.Div03.form.Div00.getOffsetWidth() / 2);

        	this.Div03.form.Div00.move(nLeft, 36);
        };

        this.fnObjTile_onclick = function(obj, e)
        {
        	obj.targetDiv.bringToFront();
        }

        this.fnComDivOnDrag = function(obj,e)
        {
        	this.fvObjDrag = true;
        	e.userdata = obj;

        	this.fnMakeDragObj(obj);

        	return true;
        };

        this.fnLoadWidget = function(i)
        {
        	var i, j;
        	var sId;
        	var sUrl;
        	var nLeft;
        	var nTop;
        	var nWidth;
        	var nHeight;
        	var objTile;
        	var sMsg;

        	this.fvMemocount = 1;

        	sId = this.dsWidgetList.getColumn(i, "id");
        	sUrl = this.dsWidgetList.getColumn(i, "url");
        	nLeft = this.dsWidgetList.getColumn(i, "left");
        	nTop = this.dsWidgetList.getColumn(i, "top");
        	nWidth = this.dsWidgetList.getColumn(i, "width");
        	nHeight = this.dsWidgetList.getColumn(i, "height");

        	objTile = new Div("divTile_" + sId, nLeft, nTop, nWidth, nHeight);
        	objTile.set_async(false);
        	objTile.set_url(sUrl);
        	objTile.portName = "위젯";
        	objTile.usePort = "Y";

        	for (i = 0; i < this.components.length; i++)
        	{
        		if (this.components[i].name == objTile.name) {
        			sMsg = this.cboWidget.text;
        			alert(sMsg + "는 이미 추가된 위젯입니다.");

        			return;
        		}
        	}

        	this.addChild(objTile.name, objTile);
        	objTile.show();

        	if (sId == "memo") {
        		objTile.form.btnResize.addEventHandler("ondrag", this.fnObjTile_ondrag, this);
        		objTile.form.btnResize.addEventHandler("onlbuttonup", this.fnObjTile_onlbuttonup, this);
        	}

        	objTile.form.btnMove.addEventHandler("ondrag", this.fnObjTile_ondrag, this);
        	objTile.form.btnMove.addEventHandler("onlbuttonup", this.fnObjTile_onlbuttonup, this);

        	for (j = 0; j < objTile.form.components.length; j++)
        	{
        		objTile.form.components[j].targetDiv = objTile;
        		objTile.form.components[j].addEventHandler("onclick", this.fnObjTile_onclick, this);
        	}
        };

        this.fnGetDragToObj = function(obj)
        {
        	if (obj.parent.parent.usePort == "Y") {
        		return obj.parent.parent;
        	} else {
        		return obj;
        	}
        };

        this.fnMakeDragObj = function(obj)
        {
        	var nWidth = obj.getOffsetWidth();
        	var nHeight = obj.getOffsetHeight();
        	var sMemo = obj.text;

        	this.staMove.setOffsetWidth(nWidth);
        	this.staMove.setOffsetHeight(nHeight);
        	this.staMove.set_visible(true);
        };

        this.fnRemoveDragObj = function()
        {
        	this.staMove.set_visible(false);
        };

        this.fnObjTile_ondrag = function(obj, e)
        {
        	this.bDrag = true;
        	this.fvTargetObj = obj.parent.parent;
        	this.fvChildObj = obj;

        	var nX;
        	var nY;

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

        this.fnMoveAni = function (t, b, c, d)
        {
        	t /= d / 2;

        	if (t < 1) {
        		return c / 2 * t * t * t + b;
        	}

        	t -= 2;

        	return c / 2 * (t * t * t + 2) + b;
        };

        this.fnCloseMemo = function(obj)
        {
        	if (this.confirm("현재 메모를 삭제하시겠습니까?") == true) {
        		this.removeChild(obj.name);
        	}
        }

        this.fnCloseWidget = function(obj)
        {
        	switch (obj.name)
        	{
        		case "divTile_calc" :
        		case "divTile_watch" :
        			this.removeChild(obj.name);
        			break;
        	}
        };

        this.fnAddMemo = function(obj)
        {
        	var nLeft = obj.getOffsetLeft();
        	var nTop = obj.getOffsetTop() + 30;
        	var nWidth = obj.getOffsetWidth();
        	var nHeight = obj.getOffsetHeight();
        	var j;

        	var objTile = new Div("divTile_memo" + this.fvMemocount, nLeft, nTop, nWidth, nHeight);
        	this.addChild(objTile.name, objTile);
        	objTile.show();
        	objTile.set_async(false);
        	objTile.set_url("comm::commMemo.xfdl");
        	objTile.form.btnResize.addEventHandler("ondrag", this.fnObjTile_ondrag, this);
        	objTile.form.btnResize.addEventHandler("onlbuttonup", this.fnObjTile_onlbuttonup, this);
        	objTile.form.btnMove.addEventHandler("ondrag", this.fnObjTile_ondrag, this);
        	objTile.form.btnMove.addEventHandler("onlbuttonup", this.fnObjTile_onlbuttonup, this);

        	for (j = 0; j < objTile.form.components.length; j++)
        	{
        		objTile.form.components[j].targetDiv = objTile;
        		objTile.form.components[j].addEventHandler("onclick", this.fnObjTile_onclick, this);
        	}

        	this.fvMemocount++;
        	this.fvObjNewMemo = objTile;

        	this.setTimer(2, 10);
        };

        this.fnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0) return true;

            return false;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("onlbuttonup",this.form_onlbuttonup,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnWidgetAdd.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnInit.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Div01.addEventHandler("ondrag",this.fnComDivOnDrag,this);
            this.Div01.form.btnClose.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Div02.addEventHandler("ondrag",this.fnComDivOnDrag,this);
            this.Div02.form.btnClose.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Div00.addEventHandler("ondrag",this.fnComDivOnDrag,this);
            this.Div00.form.btnClose.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Div03.addEventHandler("ondrag",this.fnComDivOnDrag,this);
            this.Div03.form.btnClose.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.Div03_01.addEventHandler("ondrag",this.fnComDivOnDrag,this);
            this.Div03_01.form.btnClose.addEventHandler("onclick",this.fnComBtnOnClick,this);
        };
        this.loadIncludeScript("sample-personalization.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
