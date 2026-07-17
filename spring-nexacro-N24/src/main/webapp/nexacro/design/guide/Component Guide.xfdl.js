(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Menu1_01_Function");
            this.set_titletext("New Form");
            this.set_background("#F5F7FC");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,2380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"checkbox\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"설정금액\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"직장\" type=\"STRING\" size=\"256\"/><Column id=\"승인\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">#101</Col><Col id=\"이름\">James</Col><Col id=\"주소\">서울특별시 중구 세종대로 40</Col><Col id=\"설정금액\">11,235</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"직장\">투비소프트</Col></Row><Row><Col id=\"ID\">#102</Col><Col id=\"이름\">Bill</Col><Col id=\"주소\">경상북도 경부시 불국로 873-243</Col><Col id=\"설정금액\">15,698</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"직장\">강남구청</Col></Row><Row><Col id=\"ID\">#103</Col><Col id=\"이름\">Elyse</Col><Col id=\"주소\">경기도 수원시 장안구 연무동 190</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"직장\">투비소프트</Col></Row><Row><Col id=\"ID\">#104</Col><Col id=\"이름\">Jenny</Col><Col id=\"주소\">경기도 수원시 장안구 연무동 190</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"직장\">투비소프트</Col></Row><Row><Col id=\"ID\">#105</Col><Col id=\"이름\">William</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">23,317</Col><Col id=\"생성일\">2020-08-03</Col><Col id=\"직장\">서울시청</Col></Row><Row><Col id=\"ID\">#106</Col><Col id=\"이름\">Daniel</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-03</Col><Col id=\"직장\">투비소프트</Col></Row><Row><Col id=\"ID\">#107</Col><Col id=\"이름\">Ann</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">23,317</Col><Col id=\"생성일\">2020-08-04</Col><Col id=\"직장\">서울시청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo_toggle", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">list1</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"data\">list2</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"data\">list3</Col><Col id=\"code\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","40","40",null,"2300","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_WF_area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","145","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","307","187","46","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_inquiry");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","375","195","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_add");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","409","195","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_delete");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","1325","840","275",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"206\"/><Column size=\"95\"/><Column size=\"98\"/><Column size=\"90\"/><Column size=\"46\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"checkbox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"설정금액\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"직장\"/><Cell col=\"7\" text=\"승인\"/></Band><Band id=\"body\"><Cell text=\"bind:checkbox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:주소\"/><Cell col=\"4\" text=\"bind:설정금액\" cssclass=\"grd_txtR\"/><Cell col=\"5\" text=\"bind:생성일\"/><Cell col=\"6\" text=\"bind:직장\"/><Cell col=\"7\" text=\"bind:승인\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","95","28","700","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_pageTitle02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","40","380","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Normal");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","40","190","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_00","165","190","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_01","40","240","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","165","240","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","40","340","170","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Edit/MaskEdit");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","40","415","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","40","465","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","215","380","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","215","415","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","215","465","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01","390","380","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("ReadOnly");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","390","415","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","390","465","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","565","380","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("NullText");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","565","415","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("Edit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","565","465","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("1234567");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","740","380","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("(필수입력)");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","740","415","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("edit_WF_essential");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","740","465","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("msk_WF_essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","40","550","170","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02","40","590","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("Normal");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_02","215","590","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","390","590","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("ReadOnly");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","565","590","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("NullText");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00","740","590","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("(필수입력)");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","40","625","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","215","625","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","390","625","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","565","625","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_displaynulltext("Combo");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","740","625","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","40","710","170","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("Checkbox");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","40","776","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","85","776","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","40","865","170","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","40","750","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("Normal");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_02_00","215","750","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("Toggle");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","40","902","82","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","40","990","170","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","40","1049","160","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","232","1049","192","190",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_type("monthonly");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","40","1280","170","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","40","1640","170","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("Progressbar");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_01","40","1770","170","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","40","1684","500","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_smooth("true");
            obj.set_text("60%");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("60");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","40","1817","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("1. Tilte");
            obj.set_cssclass("sta_WF_pageTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_03","40","1962","92","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","132","1962","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","40","2026","840","104",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("Contents Text :\r\nYou can sort the data by the field values that the column references by clicking the column header in the grid.\r\nClicking the same field repeatedly converts it to an ascending/ descending/cancel state; pressing the \'Ctrl\' key and clicking the header allows you to sort multiple columns in the order you clicked.\r\n");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("char");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","215","776","60","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_cssclass("chk_WF_toggle");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00","278","776","60","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00_00","341","776","60","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_enable("false");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","470","242","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_cssclass("btn_WF_toTop");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","470","187","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_contact");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","40","1875","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("2. SubTitle");
            obj.set_cssclass("sta_WF_compTitle02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","40","1915","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_text("3. SubTitle");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,2380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Component Guide.xfdl", function() {

        this.Div00_Static02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static02_00.addEventHandler("onclick",this.Div00_Static02_00_onclick,this);
            this.Div00.form.Static02_00_02.addEventHandler("onclick",this.Div00_Static02_00_onclick,this);
            this.Div00.form.Static02_00_02_00.addEventHandler("onclick",this.Div00_Static02_00_onclick,this);
        };
        this.loadIncludeScript("Component Guide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
