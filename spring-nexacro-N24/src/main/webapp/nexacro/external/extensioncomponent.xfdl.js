(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("extensioncomponent");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Seoul</Col><Col id=\"data\">Seoul</Col><Col id=\"check\">1</Col></Row><Row><Col id=\"code\">Incheon</Col><Col id=\"data\">Incheon</Col><Col id=\"check\">1</Col></Row><Row><Col id=\"code\">Busan</Col><Col id=\"data\">Busan</Col><Col id=\"check\">1</Col></Row><Row><Col id=\"code\">Jeju</Col><Col id=\"check\">1</Col><Col id=\"data\">Jeju</Col></Row><Row><Col id=\"code\">Gyeonggi</Col><Col id=\"check\">1</Col><Col id=\"data\">Gyeonggi</Col></Row><Row><Col id=\"code\">Ulsan</Col><Col id=\"check\">1</Col><Col id=\"data\">Ulsan</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cal", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data_en\" type=\"STRING\" size=\"256\"/><Column id=\"data_ko\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">true</Col><Col id=\"data_en\">month</Col><Col id=\"data_ko\">월별</Col></Row><Row><Col id=\"code\">false</Col><Col id=\"data_en\">day</Col><Col id=\"data_ko\">일별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"INT\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/><Column id=\"ok\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"name\">Parry</Col><Col id=\"address\">73 Bowman Parkway</Col><Col id=\"amount\">11235</Col><Col id=\"date\">2021-08-01</Col><Col id=\"company\">Ratke and Sons</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"name\">Aland</Col><Col id=\"address\">971 Melrose Hill</Col><Col id=\"amount\">15698</Col><Col id=\"date\">2020-06-01</Col><Col id=\"company\">Littel and Sons</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"name\">Baxy</Col><Col id=\"address\">685 Sutherland Court</Col><Col id=\"amount\">15756</Col><Col id=\"date\">2021-07-28</Col><Col id=\"company\">Pfeffer-Becker</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">4</Col><Col id=\"name\">Lyndsey</Col><Col id=\"address\">8888 Daystar Avenue</Col><Col id=\"amount\">15756</Col><Col id=\"date\">2007-08-02</Col><Col id=\"company\">Marquardt LLC</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"id\">5</Col><Col id=\"name\">Jennifer</Col><Col id=\"address\">5872 American Ash Alley</Col><Col id=\"amount\">23317</Col><Col id=\"date\">2018-01-03</Col><Col id=\"company\">Nader Group</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">6</Col><Col id=\"name\">Fawnia</Col><Col id=\"address\">531 1st Plaza</Col><Col id=\"amount\">15756</Col><Col id=\"date\">2020-08-03</Col><Col id=\"company\">Huels and Sons</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"id\">7</Col><Col id=\"name\">Walsh</Col><Col id=\"address\">03970 Kinsman Hill</Col><Col id=\"amount\">23317</Col><Col id=\"date\">2011-09-01</Col><Col id=\"company\">Hartmann-Reinger</Col><Col id=\"chk\">0</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">1</Col><Col id=\"name\">Parry</Col><Col id=\"address\">73 Bowman Parkway</Col><Col id=\"amount\">5700</Col><Col id=\"date\">2013-01-31</Col><Col id=\"company\">Ratke and Sons</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">2</Col><Col id=\"name\">Aland</Col><Col id=\"address\">971 Melrose Hill</Col><Col id=\"amount\">67800</Col><Col id=\"date\">2022-04-01</Col><Col id=\"company\">Littel and Sons</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">3</Col><Col id=\"name\">Baxy</Col><Col id=\"address\">685 Sutherland Court</Col><Col id=\"amount\">6570</Col><Col id=\"date\">2019-01-20</Col><Col id=\"company\">Pfeffer-Becker</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">4</Col><Col id=\"name\">Lyndsey</Col><Col id=\"address\">8888 Daystar Avenue</Col><Col id=\"amount\">3324</Col><Col id=\"date\">2021-12-01</Col><Col id=\"company\">Marquardt LLC</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">5</Col><Col id=\"name\">Jennifer</Col><Col id=\"address\">5872 American Ash Alley</Col><Col id=\"amount\">4876</Col><Col id=\"date\">2000-06-01</Col><Col id=\"company\">Nader Group</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">6</Col><Col id=\"name\">Fawnia</Col><Col id=\"address\">531 1st Plaza</Col><Col id=\"amount\">1684</Col><Col id=\"date\">2021-07-28</Col><Col id=\"company\">Huels and Sons</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">7</Col><Col id=\"name\">Walsh</Col><Col id=\"address\">03970 Kinsman Hill</Col><Col id=\"amount\">335</Col><Col id=\"date\">2007-08-02</Col><Col id=\"company\">Hartmann-Reinger</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">1</Col><Col id=\"name\">Parry</Col><Col id=\"address\">73 Bowman Parkway</Col><Col id=\"amount\">66756</Col><Col id=\"date\">2018-01-03</Col><Col id=\"company\">Ratke and Sons</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">2</Col><Col id=\"name\">Aland</Col><Col id=\"address\">971 Melrose Hill</Col><Col id=\"amount\">31050</Col><Col id=\"date\">2024-08-03</Col><Col id=\"company\">Littel and Sons</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">3</Col><Col id=\"name\">Baxy</Col><Col id=\"address\">685 Sutherland Court</Col><Col id=\"amount\">33500</Col><Col id=\"date\">2010-09-01</Col><Col id=\"company\">Pfeffer-Becker</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">4</Col><Col id=\"name\">Lyndsey</Col><Col id=\"address\">8888 Daystar Avenue</Col><Col id=\"amount\">300</Col><Col id=\"date\">2013-01-31</Col><Col id=\"company\">Marquardt LLC</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">5</Col><Col id=\"name\">Jennifer</Col><Col id=\"address\">5872 American Ash Alley</Col><Col id=\"amount\">50</Col><Col id=\"date\">2022-05-01</Col><Col id=\"company\">Nader Group</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">6</Col><Col id=\"name\">Fawnia</Col><Col id=\"address\">531 1st Plaza</Col><Col id=\"amount\">60470</Col><Col id=\"date\">2019-01-20</Col><Col id=\"company\">Huels and Sons</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">7</Col><Col id=\"name\">Walsh</Col><Col id=\"address\">03970 Kinsman Hill</Col><Col id=\"amount\">645870</Col><Col id=\"date\">2021-08-01</Col><Col id=\"company\">Hartmann-Reinger</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">1</Col><Col id=\"name\">Parry</Col><Col id=\"address\">73 Bowman Parkway</Col><Col id=\"amount\">50</Col><Col id=\"date\">2020-12-01</Col><Col id=\"company\">Ratke and Sons</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">2</Col><Col id=\"name\">Aland</Col><Col id=\"address\">971 Melrose Hill</Col><Col id=\"amount\">560</Col><Col id=\"date\">2021-07-28</Col><Col id=\"company\">Littel and Sons</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">3</Col><Col id=\"name\">Baxy</Col><Col id=\"address\">685 Sutherland Court</Col><Col id=\"amount\">8940</Col><Col id=\"date\">2007-08-02</Col><Col id=\"company\">Pfeffer-Becker</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">4</Col><Col id=\"name\">Lyndsey</Col><Col id=\"address\">8888 Daystar Avenue</Col><Col id=\"amount\">60</Col><Col id=\"date\">2018-03-03</Col><Col id=\"company\">Marquardt LLC</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">5</Col><Col id=\"name\">Jennifer</Col><Col id=\"address\">5872 American Ash Alley</Col><Col id=\"amount\">1102</Col><Col id=\"date\">2009-08-03</Col><Col id=\"company\">Nader Group</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">6</Col><Col id=\"name\">Fawnia</Col><Col id=\"address\">531 1st Plaza</Col><Col id=\"amount\">3260</Col><Col id=\"date\">2022-11-01</Col><Col id=\"company\">Huels and Sons</Col><Col id=\"ok\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"id\">7</Col><Col id=\"name\">Walsh</Col><Col id=\"address\">03970 Kinsman Hill</Col><Col id=\"amount\">11</Col><Col id=\"date\">2001-01-31</Col><Col id=\"company\">Hartmann-Reinger</Col><Col id=\"ok\">imagerc::img_grd_reject.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromto", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Parry</Col><Col id=\"Column1\">Seoul</Col><Col id=\"Column2\">20201128</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">I am Parry.</Col></Row><Row><Col id=\"Column0\">Jennifer</Col><Col id=\"Column1\">Incheon</Col><Col id=\"Column2\">20210331</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Jennifer.</Col></Row><Row><Col id=\"Column0\">Aland</Col><Col id=\"Column1\">Busan</Col><Col id=\"Column2\">20220105</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">I am Aland.</Col></Row><Row><Col id=\"Column0\">Rose</Col><Col id=\"Column1\">Gyeonggi</Col><Col id=\"Column2\">20220821</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Rose.</Col></Row><Row><Col id=\"Column0\">Lisa</Col><Col id=\"Column1\">Seoul</Col><Col id=\"Column2\">20220420</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Lisa.</Col></Row><Row><Col id=\"Column0\">Agatha </Col><Col id=\"Column1\">Seoul</Col><Col id=\"Column2\">20280905</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">I am Agatha .</Col></Row><Row><Col id=\"Column0\">Beatrice</Col><Col id=\"Column1\">Incheon</Col><Col id=\"Column2\">20241204</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Beatrice.</Col></Row><Row><Col id=\"Column0\">Aland</Col><Col id=\"Column1\">Jeju</Col><Col id=\"Column2\">20220105</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">I am Aland.</Col></Row><Row><Col id=\"Column0\">Dorothy</Col><Col id=\"Column1\">Gyeonggi</Col><Col id=\"Column2\">19990920</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Dorothy.</Col></Row><Row><Col id=\"Column0\">Emma</Col><Col id=\"Column1\">Ulsan</Col><Col id=\"Column2\">19950406</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Emma.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromtorad", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Seoul</Col><Col id=\"data\">Seoul</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"code\">Incheon</Col><Col id=\"data\">Incheon</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"code\">Busan</Col><Col id=\"data\">Busan</Col><Col id=\"check\">0</Col></Row><Row><Col id=\"code\">Jeju</Col><Col id=\"check\">0</Col><Col id=\"data\">Jeju</Col></Row><Row><Col id=\"code\">Gyeonggi</Col><Col id=\"check\">0</Col><Col id=\"data\">Gyeonggi</Col></Row><Row><Col id=\"code\">Ulsan</Col><Col id=\"check\">0</Col><Col id=\"data\">Ulsan</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_day", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customrdo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Basic</Col><Col id=\"data\">Basic</Col></Row><Row><Col id=\"code\">Standard</Col><Col id=\"data\">Standard</Col></Row><Row><Col id=\"code\">Premium</Col><Col id=\"data\">Premium</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customrdoSch", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data_en\" type=\"STRING\" size=\"256\"/><Column id=\"data_ko\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data_en\">1 Month</Col><Col id=\"data_ko\">1개월</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data_en\">3 Month</Col><Col id=\"data_ko\">3개월</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"data_en\">6 Month</Col><Col id=\"data_ko\">6개월</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01","20","27","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"external.extensioncomponent\",\"확장 컴포넌트\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("external.extensioncomponent");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20.00","Static00_01:15",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","0","32%","180",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_component");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static0_fromtocal","20","55",null,"40","20",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("external.extensioncomponent.fromtocalendar.desc");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            obj.set_text("TEXT(\"external.extensioncomponent.fromtocalendar.desc\",\"시작일부터 종료일까지 기간 선택\")");
            obj.set_wordWrap("english");
            obj.set_verticalAlign("top");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","8",null,"30","20",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("FromToCalendar");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio01","39.00","85","180","35",null,null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_cal");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data_en");
            obj.set_text("month");
            obj.set_value("true");
            obj.set_index("0");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new FromToCalendar("FromToCalendar01","20.00","127","240","36",null,null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_monthtype("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","Div00_00:17","0","32%","180",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static0_customcal","20","55",null,"40","20",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("external.extensioncomponent.customcalendar.desc");
            obj.set_usedecorate("true");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_text("TEXT(\"external.extensioncomponent.customcalendar.desc\",\"원하는 년/월/일을 지정하여 선택\")");
            obj.set_verticalAlign("top");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","8",null,"30","20",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("CustomCalendar");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new CustomCalendar("CustomCalendar01","20.00","102",null,"36","20",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("3");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00","Div00_00_00:17","0",null,"180","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_component");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","8",null,"30","20",null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("CustomRadio");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0.8000000000000114",null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static0_customrdo","20","55",null,"40","20",null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("external.extensioncomponent.customradio.desc");
            obj.set_usedecorate("true");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_text("TEXT(\"external.extensioncomponent.customradio.desc\",\"버튼모양의 라디오버튼 선택\")");
            obj.set_verticalAlign("top");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new CustomRadio("CustomRadio00","20","120",null,"36","20",null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_customrdo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_css_selected("btn_WF_basic01");
            obj.set_css_notselected("btn_WF_basic02");
            obj.set_buttongap("5");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","18.00","410",null,"230","15",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_fromto");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"267\"/></Columns><Rows><Row size=\"49\" band=\"head\"/><Row size=\"49\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Working area\"/><Cell col=\"2\" text=\"Working day\"/><Cell col=\"3\" text=\"Marital Status\"/><Cell col=\"4\" text=\"Remark\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\" editautoselect=\"true\" editdisplay=\"display\" displaytype=\"editcontrol\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column1\" combodataset=\"ds_fromtorad\" combocodecol=\"code\" combodatacol=\"data\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column2\" calendardisplay=\"display\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column4\" editautoselect=\"true\" editdisplay=\"display\" textAlign=\"left\" verticalAlign=\"middle\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divContainer","18.00","660",null,"221","15",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_conBox02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","116","60","130","30",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.divContainer.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","116","145",null,"57","20",null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_wordWrap("char");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static07","276","101","86","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"external.extensioncomponent.fromtocalendar.workday\",\"근무일\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("external.extensioncomponent.fromtocalendar.workday");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static09","14","101","95","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"comp.binding.marriage\",\"결혼여부\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("comp.binding.marriage");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static11","20","125","86","96",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"comp.binding.remark\",\"비고\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("comp.binding.remark");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static01","17","55","86","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"name\",\"이름\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("name");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static05","276","53","95","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"external.extensioncomponent.fromtocalendar.workarea\",\"근무 지역\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("external.extensioncomponent.fromtocalendar.workarea");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static14","11","10","411","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("7");
            obj.set_text("TEXT(\"comp.binding.information\",\"상세정보\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.binding.information");
            this.divContainer.addChild(obj.name, obj);

            obj = new CheckCombo("CheckCombo00","375","60","170","30",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("8");
            obj.set_text("선택하세요.");
            obj.set_innerdataset("ds_fromtorad");
            obj.set_valuecolumn("data");
            obj.set_codecolumn("code");
            obj.set_checkcolumn("check");
            this.divContainer.addChild(obj.name, obj);

            obj = new CustomCalendar("CustomCalendar00",null,"105","170","30","20",null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("9");
            this.divContainer.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","116","105","130","30",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("10");
            this.divContainer.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","375","105","170","30",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static07_00","566","100","130","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("12");
            obj.set_text("TEXT(\"external.extensioncomponent.fromtocalendar.today\",\"추가 근무일\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("external.extensioncomponent.fromtocalendar.today");
            obj.set_textAlign("center");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static01_00","18.00","341",null,"60","14",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fromto",null,"351","82","40","28",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.function.search\",\"검색\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("grid.function.search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","20.00","284","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"external.extensioncomponent.ex\",\"확장 컴포넌트 활용 예시\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("external.extensioncomponent.ex");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new FromToCalendar("FromToCalendar00","37","354","387","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new CustomRadio("CustomRadioSch","FromToCalendar00:5","360","287","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_customrdoSch");
            obj.set_datacolumn("data_en");
            obj.set_codecolumn("code");
            obj.set_css_notselected("btn_WF_basic02");
            obj.set_css_selected("btn_WF_basic01");
            obj.set_buttongap("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00_00.form,function(p){});
            this.Div01.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00_00_00.form,function(p){});
            this.Div01.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01_00.form,function(p){});
            this.Div01.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContainer.form
            obj = new Layout("default","",0,0,this.divContainer.form,function(p){});
            this.divContainer.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",920,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divContainer.form.Edit00","value","ds_fromto","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContainer.form.TextArea00","value","ds_fromto","Column4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContainer.form.CheckBox00","value","ds_fromto","Column3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContainer.form.CheckCombo00","value","ds_fromto","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContainer.form.Calendar00","value","ds_fromto","Column2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("extensioncomponent.xfdl", function() {

        /************************************************************************
        * checkcombo component 시작
        ************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload)
        **************************************************************************/
        /**
        * @description 화면 onload시 처리내역
        */


        this.extensioncomponent_onload = function(obj,e)
        {


        	if(nexacro.getApplication().langCode == "ko") {
        		this.Div01.form.Div00_00.form.Radio01.datacolumn = "data_ko";
        		this.CustomRadioSch.datacolumn = "data_ko";
        	}
        	else if(nexacro.getApplication().langCode == "en"){
        		this.Div01.form.Div00_00.form.Radio01.datacolumn = "data_en";
        		this.CustomRadioSch.datacolumn = "data_en";
        	}

        	let counut = this.ds_fromto.getCount("Column2");


        	//현재 오늘 년도 찾아 데이터 값에서 년도만 변경
        	this.getToday = function()
        	{
        		let date = new Date();
        		let year = date.getFullYear();

        		return year;
        	};

        	let year = this.getToday();

        	//ds_fromto -> data 년도 값 올해 값으로 변화
        	for(var i=0; i<counut; i++){

        		let arr = this.ds_fromto.getColumn(i,2);
        		let date = arr.substr(4,7);
        		this.ds_fromto.setColumn(i,2,year+date); //"2022"=> 해당 년월 변경시 변경

        	}

        	this.CustomRadioSch.index = 0;

        	this.gfnFormOnLoad();
        };


        //radio버튼 접고 펼치기
        this.rdoTreeStatus_onitemchanged = function(obj,e)
        {
        	this.Grid01.treeinitstatus = e.postvalue;
        };


        /************************************************************************
        * checkcombo component  끝
        ************************************************************************/




        /************************************************************************
        * FromToCalendar component  시작
        ************************************************************************/


        //from-to monthtype : true-월별로 선택하기 / false-일별 or 요일별로 선택하기
        this.Radio01_onitemchanged = function(obj,e)
        {
        	this.Div01.form.Div00_00.form.FromToCalendar01.monthtype = e.postvalue;
        };


        //from-to 선택 하여 날짜에 해당하는 정보 바인딩 처리
        this.btn_fromto_onclick = function(obj,e)
        {
        	let dsfrom=this.FromToCalendar00.fromdate;
        	let dsto=this.FromToCalendar00.todate;


        	this.ds_fromto.filter("Column2>='"+dsfrom+"'"+"&&"+"Column2<='"+dsto+"'");

        	if (this.ds_fromto.rowcount > 0) {
        		this.ds_fromto.rowposition = 0;
        	}

        };


        /************************************************************************
        * FromToCalendar component  끝
        ************************************************************************/




        /************************************************************************
        * CustomCalendar component  시작
        ************************************************************************/



        //변화하는 체크값
        this.ds_fromto_canrowposchange = function(obj,e)
        {
        	this.ds_fromtorad.reset();
        };



        this.divContainer_CustomCalendar00_onchanged = function(obj, e)
        {
        	let text = this.divContainer.form.TextArea00.value;
        	let today = this.divContainer.form.CustomCalendar00.value;
        	let year = today.substr(0,4);
        	let month = today.substr(4,2);
        	let date = today.substr(6,2);
        	let choose= year+"-"+month+"-"+date;

        	if(nexacro.getApplication().langCode == "ko") {
        		this.divContainer.form.TextArea00.value = text + " \n추가 근무일 : "+choose;
        	}
        	else if(nexacro.getApplication().langCode == "en"){
        		this.divContainer.form.TextArea00.value = text + " \nExtra working days : "+choose;
        	}

        	return;
        };

        /************************************************************************
        * CustomRadio component  시작
        ************************************************************************/
        this.CustomRadioSch_onitemchanged = function(obj, e)
        {
        	let code = e.postvalue;
        	let sToday = this.fnGetDate();
        	let sPreMonth = "";

        	// 1개월(1M)
        	if (code == "01") {
        		sPreMonth = this.fnAddMonth(sToday, -1);

        	// 3개월(3M)
        	} else if (code == "03") {
        		sPreMonth = this.fnAddMonth(sToday, -3);

        	// 6개월(6M)
        	} else if (code == "06") {
        		sPreMonth = this.fnAddMonth(sToday, -6);

        	} else {
        		return;
        	}

        	this.FromToCalendar00.fromdate = sPreMonth;
        	this.FromToCalendar00.todate = sToday;
        };

        /************************************************************************
        * CustomRadio component  끝
        ************************************************************************/

        /**
         * @class 현재일자를 구한다. <br>
         * @param {String} [sGubn] - date/null : 일자, time : 일자+시간, milli : Milliseconds
         * @param {Boolean} [bFormat] - format 지정 여부
         * @return {String} 날짜및시간 문자열
         */
        this.fnGetDate = function(sGubn, bFormat)
        {
        	if (this.fnIsNull(sGubn)) sGubn = "date";
        	if (this.fnIsNull(bFormat)) {
        		bFormat = false;
        		let sDFormat = "";
        		let sTFormat = "";
        		let sSplit = "";
        	}
        	else {
        		bFormat = true;
        		let sDFormat = "-";
        		let sTFormat = ":";
        		let sSplit = " ";
        	}

        	let s;

        	let d = new Date();
        	if (sGubn == "date") {
        		s = d.getFullYear() + sDFormat
        		  + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
        		  + (d.getDate() + "").padLeft(2, '0');
        	}
        	else if (sGubn == "day") {
        		s = d.getFullYear() + sDFormat
        		  + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
        		  + (d.getDate() + "").padLeft(2, '0') + sSplit
        		  + this.gfnGetDayKor(d.getFullYear()+((d.getMonth() + 1) + "").padLeft(2, '0')+(d.getDate() + "").padLeft(2, '0'));
        	}
        	else if (sGubn == "time") {
        		s = d.getFullYear() + sDFormat
        	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
        	      + (d.getDate() + "").padLeft(2, '0') + sSplit
        	      + (d.getHours() + "").padLeft(2, '0') + sTFormat
        	      + (d.getMinutes() + "").padLeft(2, '0') + sTFormat
        	      + (d.getSeconds() + "").padLeft(2, '0');
        	}
        	else if (sGubn == "milli") {
        		s = d.getFullYear() + sDFormat
        	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
        	      + (d.getDate() + "").padLeft(2, '0') + sSplit
        	      + (d.getHours() + "").padLeft(2, '0') + sTFormat
        	      + (d.getMinutes() + "").padLeft(2, '0') + sTFormat
        	      + (d.getSeconds() + "").padLeft(2, '0') + sTFormat
        		  + (d.getMilliseconds() + "").padLeft(3, '0');
        	}
        	return (s);
        };

        /**
         * @class null값 확인
         * @param {Object} objDs - 확인 대상 Dataset
         * @return {boolean}
         */
        this.fnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            let ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        /**
         * @class 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함 <br>
         * @param {String} strDate - String Date Format
         * @param {Number} OffSet - Integer Format
         * @return {String} date
         */
        this.fnAddMonth = function(strDate, OffSet)
        {
        	let date, d, s, mon, val;

        	/**
        	 * @class 입력일자 해당월의 마지막 일 <br>
        	 * @param {String} strMonth - 'yyyyMMdd' 형태로 표현된 날짜.
        	 * @return {Number} 해당월의 마지막일자 2자리
        	 */
        	let gfnGetMonthLastDate = function(strMonth) {
        		let iLastDay;
        		let iYear  = parseInt(strMonth.substr(0, 4),10) ;
        		let iMonth = parseInt(strMonth.substr(4, 2),10);
        		switch(iMonth)
        		{
        			case 2 :
        				if( ((iYear%4)==0) && ((iYear%100)!=0) || ((iYear%400)==0) )
        					iLastDay = 29;
        				else
        					iLastDay = 28;
        				break;
        			case 4 :
        			case 6 :
        			case 9 :
        			case 11 :
        				iLastDay = 30;
        				break;
        			default:
        				iLastDay = 31;
        				break;
        		}

        		return iLastDay;
        	};

            if (strDate) {
                date = this.fnStrToDate(strDate);
                d = (new Date(date)).addMonth(OffSet);
            } else {
            	date = this.fnStrToDate(this.gfnGetDate());
        		d = (new Date(date)).addMonth(OffSet);
            }

            if (gfnGetMonthLastDate(strDate) == date.getDate()) {
            	let sY = new Date(d).getFullYear();
            	let sM = new Date(d).getMonth();
            	let eY = date.getFullYear();
            	let eM = date.getMonth();

            	mon = -((eY - sY)* 12 + (eM - sM));

            	if (mon != OffSet) {
           			val = OffSet - mon;
            		d = (new Date(d)).addMonth(-1);
            	}

            	let ld = new Date((new Date(d)).getFullYear()
            			, (new Date(d)).getMonth()
            			, gfnGetMonthLastDate(this.fnDateToStr(new Date(d))));

            	s = (new Date(ld)).getFullYear()
        		   + (((new Date(ld)).getMonth() + 1) + "").padLeft(2, '0')
        		   + (((new Date(ld)).getDate()) + "").padLeft(2, '0');
            } else {
            	s = (new Date(d)).getFullYear()
        		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
        		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');
            }

        	return (s);
        };

        /**
         * @class 문자를 날짜로 변환. <br>
         * @param {String} strDate - String Date Format
         * @return {Date} date
         */
        this.fnStrToDate = function(inDate)
        {
          let date =  new Date(parseInt(inDate.substr(0,4)),parseInt(inDate.substr(4,2))-1,parseInt(inDate.substr(6,2)));
          return date;
        };

        /**
         * @class Date Type을 String으로 변환 <br>
         * @param {Date} date
         * @return {String} 'yyyyMMdd' 형태로 표현된 날짜
         */
        this.fnDateToStr = function(date)
        {
        	let strYear = date.getYear().toString();
        	let strMonth = (date.getMonth()+1).toString();
        	let strDate = date.getDate().toString();

        	if(strYear.length==2)
        		strYear = '19'+strYear;
        	else if(strYear.length==1)
        		strYear = '190'+strYear;

        	if(strMonth.length==1)
        		strMonth = '0'+strMonth;
        	if(strDate.length==1)
        		strDate = '0'+strDate;

        	return strYear+strMonth+strDate;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.extensioncomponent_onload,this);
            this.Div01.form.Div00_00.form.Radio01.addEventHandler("onitemchanged",this.Radio01_onitemchanged,this);
            this.Div01.form.Div00_00_00.form.CustomCalendar01.addEventHandler("onchanged",this.Div01_Div00_00_00_CustomCalendar01_onchanged,this);
            this.divContainer.form.CustomCalendar00.addEventHandler("onchanged",this.divContainer_CustomCalendar00_onchanged,this);
            this.btn_fromto.addEventHandler("onclick",this.btn_fromto_onclick,this);
            this.CustomRadioSch.addEventHandler("onitemchanged",this.CustomRadioSch_onitemchanged,this);
            this.ds_fromto.addEventHandler("canrowposchange",this.ds_fromto_canrowposchange,this);
        };
        this.loadIncludeScript("extensioncomponent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
