(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("components");
            this.set_titletext("기본 컴포넌트");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,3810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">James</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">Jenny</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"checkbox\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"설정금액\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"승인\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">#101</Col><Col id=\"이름\">James</Col><Col id=\"설정금액\">11,235</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">#102</Col><Col id=\"이름\">Bill</Col><Col id=\"설정금액\">15,698</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">#103</Col><Col id=\"이름\">Elyse</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"ID\">#104</Col><Col id=\"이름\">Jenny</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"caption\">Nexacro</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">2</Col><Col id=\"caption\">Overview</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"caption\">Introduce</Col><Col id=\"level\">1</Col><Col id=\"icon\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">5</Col><Col id=\"caption\">Products</Col><Col id=\"level\">2</Col><Col id=\"icon\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">6</Col><Col id=\"caption\">Tobesoft</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">7</Col><Col id=\"caption\">History</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">8</Col><Col id=\"caption\">IT Solution</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">9</Col><Col id=\"caption\">Technology</Col><Col id=\"level\">1</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"id\">10</Col><Col id=\"caption\">News</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"caption\">Notice</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">Social Activity</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">Recruit</Col><Col id=\"level\">1</Col><Col id=\"icon\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"caption\">Information</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"caption\">Contact</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">list1</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"data\">list2</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"data\">list3</Col><Col id=\"code\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo_toggle", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BRITHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ORG_NM\">TOBESOFT</Col><Col id=\"EMP_NM\">James</Col><Col id=\"IMG_URL\">imagerc::img_WF_lstvProfile01.png</Col><Col id=\"JOB_NM\">CEO</Col><Col id=\"EMP_NO\">01070101</Col><Col id=\"TEL_NO\">010-1111-1234</Col><Col id=\"EMAIL\">ceo@tobesoft.com</Col><Col id=\"BRITHDAY\">19650105</Col><Col id=\"REMARK\">Remark1</Col></Row><Row><Col id=\"ORG_NM\">R&amp;D</Col><Col id=\"EMP_NM\">Bill</Col><Col id=\"IMG_URL\">imagerc::img_WF_lstvProfile02.png</Col><Col id=\"JOB_NM\">Team Leader</Col><Col id=\"EMP_NO\">01070102</Col><Col id=\"TEL_NO\">010-2222-2345</Col><Col id=\"EMAIL\">Bill@tobesoft.com</Col><Col id=\"BRITHDAY\">19800701</Col><Col id=\"REMARK\">Remark2</Col></Row><Row><Col id=\"ORG_NM\">Strategy Team</Col><Col id=\"EMP_NM\">Elyse</Col><Col id=\"IMG_URL\">imagerc::img_WF_lstvProfile03.png</Col><Col id=\"JOB_NM\">General Manager</Col><Col id=\"EMP_NO\">01070103</Col><Col id=\"TEL_NO\">010-3333-4567</Col><Col id=\"EMAIL\">Elyse@tobesoft.com</Col><Col id=\"BRITHDAY\">19810725</Col><Col id=\"REMARK\">Remark3</Col></Row><Row><Col id=\"ORG_NM\">IT Infra Team</Col><Col id=\"EMP_NM\">Jenny</Col><Col id=\"IMG_URL\">imagerc::img_WF_lstvProfile04.png</Col><Col id=\"JOB_NM\">General Manager</Col><Col id=\"EMP_NO\">01070104</Col><Col id=\"TEL_NO\">010-4444-5555</Col><Col id=\"EMAIL\">Jenny@tobesoft.com</Col><Col id=\"BRITHDAY\">19750302</Col><Col id=\"REMARK\">Remark4</Col></Row><Row><Col id=\"ORG_NM\">Law Team</Col><Col id=\"EMP_NM\">John</Col><Col id=\"IMG_URL\">imagerc::img_WF_lstvProfile05.png</Col><Col id=\"JOB_NM\">General Manager</Col><Col id=\"EMP_NO\">01070105</Col><Col id=\"TEL_NO\">010-5555-9874</Col><Col id=\"EMAIL\">John@tobesoft.com</Col><Col id=\"BRITHDAY\">19790909</Col><Col id=\"REMARK\">Remark5</Col></Row><Row><Col id=\"IMG_URL\">imagerc::img_WF_lstvProfile06.png</Col><Col id=\"ORG_NM\">General Affairs Team</Col><Col id=\"EMP_NM\">Edward</Col><Col id=\"JOB_NM\">Assistant Manager</Col><Col id=\"EMP_NO\">01070106</Col><Col id=\"TEL_NO\">010-6666-9632</Col><Col id=\"EMAIL\">Edward@tobesoft.com</Col><Col id=\"BRITHDAY\">19860129</Col><Col id=\"REMARK\">Remark6</Col></Row><Row><Col id=\"IMG_URL\">imagerc::img_WF_lstvProfile07.png</Col><Col id=\"ORG_NM\">HR Team</Col><Col id=\"EMP_NM\">Michael</Col><Col id=\"JOB_NM\">Assistant Manager</Col><Col id=\"EMP_NO\">01070107</Col><Col id=\"TEL_NO\">010-7777-0258</Col><Col id=\"EMAIL\">Michael@tobesoft.com</Col><Col id=\"BRITHDAY\">19900701</Col><Col id=\"REMARK\">Remark7</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sketch", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">data:image/png;base64,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</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkboxset", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"readonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">James</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">Bill</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"data\">Elyse</Col><Col id=\"code\">2</Col><Col id=\"readonly\">1</Col></Row><Row><Col id=\"data\">Jenny</Col><Col id=\"code\">3</Col><Col id=\"readonly\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_multicombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"readonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">James</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">Bill</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"data\">Elyse</Col><Col id=\"code\">2</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"data\">Jenny</Col><Col id=\"code\">3</Col><Col id=\"readonly\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","79","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","30","68","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04","160","118","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","30","118","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","312","68","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_inquiry");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","160","68","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05","310","123","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_add");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button06","344","123","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_delete");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03","20","501","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo00","50","68","150","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("list1");
            obj.set_value("1");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo01","227","68","150","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_itemheight("36");
            obj.set_text("list1");
            obj.set_value("1");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo02","50","123","150","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_itemheight("36");
            obj.set_readonly("true");
            obj.set_text("list1");
            obj.set_value("1");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo03","227","123","150","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_itemheight("36");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("list1");
            obj.set_value("1");
            obj.set_index("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div05","471","711","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div05.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","50","68","150","40",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("2");
            obj.set_format("###-{####}-####");
            obj.set_value("00123456789");
            obj.set_type("string");
            this.Div05.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","227","68","150","40",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_format("###-{####}-####");
            obj.set_value("00123456789");
            obj.set_type("string");
            this.Div05.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","50","126","150","40",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_format("###-{####}-####");
            obj.set_value("00123456789");
            obj.set_type("string");
            this.Div05.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","227","126","150","40",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("5");
            obj.set_cssclass("msk_WF_essential");
            obj.set_format("###-{####}-####");
            obj.set_value("00123456789");
            obj.set_type("string");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div04","20","711","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00","50","68","150","40",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_value("James");
            obj.set_text("James");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit01","227","68","150","40",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_value("James");
            obj.set_text("James");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit02","50","124","150","40",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_value("James");
            obj.set_text("James");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit03","227","124","150","40",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_cssclass("edit_WF_essential");
            obj.set_value("James");
            obj.set_text("James");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div01","471","79","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","50","67","100","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","50","99","220","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_02_00_00","320","67","70","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("Toggle");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00","318","99","60","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_value("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","471","290","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Listbox");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div02.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","50","63",null,"106","50",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_grid");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("이름");
            obj.set_text("James");
            obj.set_value("#101");
            obj.set_index("0");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div06","20","922","880","300",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div06.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","65",null,"202","30",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Price\"/><Cell col=\"4\" text=\"Creation Date\"/><Cell col=\"5\" text=\"Approval\"/></Band><Band id=\"body\"><Cell text=\"bind:checkbox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:설정금액\"/><Cell col=\"4\" text=\"bind:생성일\"/><Cell col=\"5\" text=\"bind:승인\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("Div08","471","1243","430","278",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("0");
            obj.set_text("Textarea");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div08.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","30","65",null,null,"30","21",null,null,null,null,this.Div08.form);
            obj.set_taborder("2");
            obj.set_value("Nexacro Overview\n\nUI/UX development platform that provides a system development environment optimized for businesses.\nUnified Framework-based HTML5 solution that ensures the best performance and speed.\nA WYSIWYG-based development tool ‘nexacro studio’ and a full array of UI/UX components.\nNo-Download, No-Install, One Source Multi-Use support.");
            obj.set_wordWrap("english");
            this.Div08.addChild(obj.name, obj);

            obj = new Div("Div09","20.00","1542","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div09.form);
            obj.set_taborder("1");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_01","30","60","170","30",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("2");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static01","30","104","120","60",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("3");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_compTitle02");
            this.Div09.addChild(obj.name, obj);

            obj = new Static("Static02","234","104","130","60",null,null,null,null,null,null,this.Div09.form);
            obj.set_taborder("4");
            obj.set_text("Static03");
            obj.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
            this.Div09.addChild(obj.name, obj);

            obj = new Div("Div10","471.00","1542","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("0");
            obj.set_text("Groupbox");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div10.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div10.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","30","65",null,"94","30",null,null,null,null,null,this.Div10.form);
            obj.set_taborder("2");
            obj.set_text("GroupBox");
            this.Div10.addChild(obj.name, obj);

            obj = new Div("Div11","20.00","1752","880","239",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div11.form);
            obj.set_taborder("1");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div11.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","30","95","234","115",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::img_WF_sample01.png\')");
            obj.set_text("");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","30","57","200","30",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("3");
            obj.set_text("stretch:none");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00","321","57","200","30",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("4");
            obj.set_text("stretch:fit");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div11.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","321","95","234","115",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("5");
            obj.set_image("url(\'imagerc::img_WF_sample01.png\')");
            obj.set_stretch("fit");
            this.Div11.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00_00","610","57","200","30",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("6");
            obj.set_text("stretch:fixaspectratio");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div11.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","610","95","234","115",null,null,null,null,null,null,this.Div11.form);
            obj.set_taborder("7");
            obj.set_image("url(\'imagerc::img_WF_sample01.png\')");
            obj.set_stretch("fixaspectratio");
            this.Div11.addChild(obj.name, obj);

            obj = new Div("Div13","471.00","2011","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("0");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div13.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div13.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div13.addChild(obj.name, obj);

            obj = new Tab("Tab00","30","65","358","94",null,null,null,null,null,null,this.Div13.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_tabbuttonwidth("100");
            obj.set_tabbuttonheight("30");
            this.Div13.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div13.form.Tab00);
            obj.set_text("Tabpage1");
            this.Div13.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div13.form.Tab00);
            obj.set_text("Tabpage2");
            this.Div13.form.Tab00.addChild(obj.name, obj);

            obj = new Div("Div12","20.00","2011","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div12.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("1");
            obj.set_text("Progressbar");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div12.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","30","77",null,"40","30",null,null,null,null,null,this.Div12.form);
            obj.set_taborder("2");
            obj.set_smooth("true");
            obj.set_text("60%");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("60");
            this.Div12.addChild(obj.name, obj);

            obj = new Div("Div14","20.00","2221","880","169",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("1");
            obj.set_text("Menu");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div14.addChild(obj.name, obj);

            obj = new Menu("Menu00","30","65",null,"43","30",null,null,null,null,null,this.Div14.form);
            obj.set_taborder("2");
            obj.set_popupitemheight("40");
            obj.set_innerdataset("ds_menu");
            obj.set_captioncolumn("caption");
            obj.set_checkboxcolumn("check");
            obj.set_enablecolumn("enable");
            obj.set_hotkeycolumn("hotkey");
            obj.set_iconcolumn("icon");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            this.Div14.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("comp.components");
            obj.set_text("TEXT(\"comp.components\")");
            this.addChild(obj.name, obj);

            obj = new Div("Div15","20.00","2410","880","389",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div15.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div15.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div15.form);
            obj.set_taborder("1");
            obj.set_text("ListView");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div15.addChild(obj.name, obj);

            obj = new ListView("lstList","30","60",null,"307","30",null,null,null,null,null,this.Div15.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_bandinitstatus("collapse");
            obj.set_bandexpandtype("accordion");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" left=\"0\" width=\"100%\" top=\"0\" height=\"50\" expandbartype=\"true\" expandbarsize=\"50 50\"><Cell id=\"Cell00\" left=\"10\" top=\"6\" width=\"155\" height=\"35\" text=\"bind:ORG_NM\" font=\"bold 12pt/normal &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/><Cell id=\"Cell01\" left=\"172\" top=\"6\" height=\"35\" text=\"bind:EMP_NM\" right=\"60\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/></Band><Band id=\"detail\" left=\"0\" width=\"100%\" top=\"0\" height=\"180\"><Cell id=\"Cell00\" left=\"8\" top=\"10\" width=\"150\" displaytype=\"imagecontrol\" text=\"bind:IMG_URL\" bottom=\"10\"/><Cell id=\"Cell01\" left=\"160\" top=\"10\" width=\"80\" height=\"40\" text=\"Name :\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/><Cell id=\"Cell02\" left=\"237\" top=\"10\" width=\"257\" height=\"40\" text=\"bind:EMP_NM\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/><Cell id=\"Cell03\" left=\"160\" top=\"49\" width=\"80\" height=\"40\" text=\"Position :\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/><Cell id=\"Cell04\" left=\"237\" top=\"49\" width=\"257\" height=\"40\" text=\"bind:JOB_NM\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/><Cell id=\"Cell05\" left=\"160\" top=\"88\" width=\"80\" height=\"40\" text=\"Tel :\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/><Cell id=\"Cell06\" left=\"237\" top=\"88\" width=\"257\" height=\"40\" text=\"bind:TEL_NO\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/><Cell id=\"Cell07\" left=\"160\" top=\"127\" width=\"80\" height=\"40\" text=\"E-mail :\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/><Cell id=\"Cell08\" left=\"237\" top=\"127\" width=\"257\" height=\"40\" text=\"bind:EMAIL\" font=\"normal 11pt &quot;맑은 고딕&quot;,&quot;Noto Sans KR&quot;,&quot;Helvetica&quot;\"/></Band></Format></Formats>");
            this.Div15.addChild(obj.name, obj);

            obj = new Div("Div16","20.00","2819","430","278",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div16.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div16.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div16.form);
            obj.set_taborder("1");
            obj.set_text("Sketch");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div16.addChild(obj.name, obj);

            obj = new Sketch("Sketch00","30","65",null,"181","30",null,null,null,null,null,this.Div16.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("0px none");
            this.Div16.addChild(obj.name, obj);

            obj = new Div("Div17","471.00","2819","430","278",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div17.form);
            obj.set_taborder("0");
            obj.set_text("VideoPlayer");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div17.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div17.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div17.addChild(obj.name, obj);

            obj = new VideoPlayer("VideoPlayer00","30","65",null,"181","30",null,null,null,null,null,this.Div17.form);
            obj.set_taborder("2");
            obj.set_repeat("true");
            obj.set_url("https://demo.tobesoft.com/nexacro-n-demo/ubi4/nexaCnP.mp4");
            obj.set_autoplay("true");
            obj.set_showcontrolbar("true");
            this.Div17.addChild(obj.name, obj);

            obj = new Div("Div18","20.00","3117","430","278",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div18.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div18.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div18.form);
            obj.set_taborder("1");
            obj.set_text("Graphic");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div18.addChild(obj.name, obj);

            obj = new Graphics("Graphics00","30","65",null,null,"30","30",null,null,null,null,this.Div18.form);
            obj.set_taborder("2");
            this.Div18.addChild(obj.name, obj);

            obj = new Div("Div19","471.00","3117","430","278",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div19.form);
            obj.set_taborder("0");
            obj.set_text("WebBrowser");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div19.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div19.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div19.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","30","65",null,"181","30",null,null,null,null,null,this.Div19.form);
            obj.set_taborder("2");
            this.Div19.addChild(obj.name, obj);

            obj = new Div("Div20","20.00","3415","880","369",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div20.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div20.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div20.form);
            obj.set_taborder("1");
            obj.set_text("Map");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div20.addChild(obj.name, obj);

            obj = new GoogleMap("GoogleMap00","0","40",null,null,"0","0",null,null,null,null,this.Div20.form);
            obj.set_taborder("2");
            this.Div20.addChild(obj.name, obj);

            obj = new Div("Div01_00","20","290","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("CheckBox / CheckBoxSet");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","50","57","100","30",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("Checkbox");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","50","106","50","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","95","106","50","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_value("true");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_02_00","179","57","100","30",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("CheckBoxSet");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","179","95","226","76",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_checkboxset");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            obj.set_columncount("2");
            obj.set_text("Bill,Jenny");
            obj.set_value("1,3");
            obj.set_index("1,3");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div03_00","471","501","430","190",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("0");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div03_00.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","30","68","170","40",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_multicombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            obj.set_showselectallcheckbox("true");
            obj.set_text("James,Bill");
            obj.set_value("0,1");
            obj.set_index("0,1");
            this.Div03_00.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo01","30","123","170","40",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_multicombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            obj.set_edittype("count");
            obj.set_showselectallcheckbox("true");
            obj.set_text("James,Bill");
            obj.set_value("0,1");
            obj.set_index("0,1");
            this.Div03_00.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo02","227","68",null,"95","30",null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_multicombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_edittype("multitag");
            obj.set_showselectallcheckbox("true");
            obj.set_buttonsize("36");
            obj.set_tagboxscrollbartype("autoindicator");
            obj.set_text("James,Bill,Elyse");
            obj.set_value("0,1,2");
            obj.set_index("0,1,2");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Div("Div07","20","1243","430","278",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div07");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("1");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div07.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","20","65","160","40",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("2");
            obj.set_datepickerchangetype("button");
            this.Div07.addChild(obj.name, obj);

            obj = new Calendar("Calendar01",null,"65","192","190","20",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("3");
            obj.set_type("monthonly");
            obj.set_datepickerchangetype("button");
            this.Div07.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form
            obj = new Layout("default","",0,0,this.Div05.form,function(p){});
            this.Div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_cssclass("sta_WF_titleLine");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Radio");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static02_02_00.set_taborder("2");
                p.Static02_02_00.set_text("Radio");
                p.Static02_02_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00.move("50","67","100","30",null,null);

                p.Radio00.set_taborder("3");
                p.Radio00.set_innerdataset("ds_rdo");
                p.Radio00.set_codecolumn("code");
                p.Radio00.set_datacolumn("data");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_value("1");
                p.Radio00.set_index("1");
                p.Radio00.move("50","99","220","50",null,null);

                p.Static02_00_02_00_00.set_taborder("4");
                p.Static02_00_02_00_00.set_text("Toggle");
                p.Static02_00_02_00_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_00_02_00_00.move("320","67","70","30",null,null);

                p.CheckBox01_00.set_taborder("5");
                p.CheckBox01_00.set_cssclass("chk_WF_toggle");
                p.CheckBox01_00.set_value("true");
                p.CheckBox01_00.move("318","99","60","50",null,null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_02_00.move("38","67","100","30",null,null);

                p.Radio00.move("50","99","220","50",null,null);

                p.Static02_00_02_00_00.move("308","67","70","30",null,null);

                p.CheckBox01_00.move("308","99","60","50",null,null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03_00.set_taborder("0");
                p.Static03_00.set_text("Listbox");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Static00");
                p.Static00.set_cssclass("sta_WF_titleLine");
                p.Static00.move("0","40",null,"1","0",null);

                p.ListBox00.set_taborder("2");
                p.ListBox00.set_innerdataset("ds_grid");
                p.ListBox00.set_codecolumn("ID");
                p.ListBox00.set_datacolumn("이름");
                p.ListBox00.set_value("#101");
                p.ListBox00.set_index("0");
                p.ListBox00.move("50","63",null,"106","50",null);
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
            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_cssclass("sta_WF_titleLine");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Grid");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("ds_grid");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_scrollbarsize("5");
                p.Grid00.move("30","65",null,"202","30",null);
            	}
            );
            this.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div06.form
            obj = new Layout("Layout0","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div06.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div08.form
            obj = new Layout("default","",0,0,this.Div08.form,function(p){});
            this.Div08.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div09.form
            obj = new Layout("default","",0,0,this.Div09.form,function(p){});
            this.Div09.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div10.form
            obj = new Layout("default","",0,0,this.Div10.form,function(p){});
            this.Div10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div11.form
            obj = new Layout("default","",0,0,this.Div11.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_cssclass("sta_WF_titleLine");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("ImageViewer");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'imagerc::img_WF_sample01.png\')");
                p.ImageViewer00.set_text("");
                p.ImageViewer00.move("30","95","234","115",null,null);

                p.Static02_02_00.set_taborder("3");
                p.Static02_02_00.set_text("stretch:none");
                p.Static02_02_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00.move("30","57","200","30",null,null);

                p.Static02_02_00_00.set_taborder("4");
                p.Static02_02_00_00.set_text("stretch:fit");
                p.Static02_02_00_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00_00.move("321","57","200","30",null,null);

                p.ImageViewer01.set_taborder("5");
                p.ImageViewer01.set_image("url(\'imagerc::img_WF_sample01.png\')");
                p.ImageViewer01.set_stretch("fit");
                p.ImageViewer01.move("321","95","234","115",null,null);

                p.Static02_02_00_00_00.set_taborder("6");
                p.Static02_02_00_00_00.set_text("stretch:fixaspectratio");
                p.Static02_02_00_00_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00_00_00.move("610","57","200","30",null,null);

                p.ImageViewer02.set_taborder("7");
                p.ImageViewer02.set_image("url(\'imagerc::img_WF_sample01.png\')");
                p.ImageViewer02.set_stretch("fixaspectratio");
                p.ImageViewer02.move("610","95","234","115",null,null);
            	}
            );
            this.Div11.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div11.form
            obj = new Layout("Layout0","",0,0,this.Div11.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.ImageViewer00.move("20","95","98","115",null,null);

                p.ImageViewer01.move("151","95","98","115",null,null);

                p.ImageViewer02.move("282","95","98","115",null,null);

                p.Static02_02_00_00_00.move("263","57",null,"30","2",null);

                p.Static02_02_00_00.move("158","57","81","30",null,null);

                p.Static02_02_00.move("20","57","95","30",null,null);
            	}
            );
            this.Div11.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div13.form.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Div13.form.Tab00.Tabpage1.form,function(p){});
            this.Div13.form.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div13.form.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Div13.form.Tab00.Tabpage2.form,function(p){});
            this.Div13.form.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div13.form
            obj = new Layout("default","",0,0,this.Div13.form,function(p){});
            this.Div13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div12.form
            obj = new Layout("default","",0,0,this.Div12.form,function(p){});
            this.Div12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div14.form
            obj = new Layout("default","",0,0,this.Div14.form,function(p){});
            this.Div14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div15.form
            obj = new Layout("default","",0,0,this.Div15.form,function(p){});
            this.Div15.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div16.form
            obj = new Layout("default","",0,0,this.Div16.form,function(p){});
            this.Div16.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div17.form
            obj = new Layout("default","",0,0,this.Div17.form,function(p){});
            this.Div17.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div18.form
            obj = new Layout("default","",0,0,this.Div18.form,function(p){});
            this.Div18.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div19.form
            obj = new Layout("default","",0,0,this.Div19.form,function(p){});
            this.Div19.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div20.form
            obj = new Layout("default","",0,0,this.Div20.form,function(p){});
            this.Div20.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_cssclass("sta_WF_titleLine");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("CheckBox / CheckBoxSet");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static02_02_00.set_taborder("2");
                p.Static02_02_00.set_text("Checkbox");
                p.Static02_02_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00.move("50","57","100","30",null,null);

                p.CheckBox00.set_taborder("3");
                p.CheckBox00.move("50","106","50","50",null,null);

                p.CheckBox01.set_taborder("4");
                p.CheckBox01.set_value("true");
                p.CheckBox01.move("95","106","50","50",null,null);

                p.Static02_00_02_00.set_taborder("5");
                p.Static02_00_02_00.set_text("CheckBoxSet");
                p.Static02_00_02_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_00_02_00.move("179","57","100","30",null,null);

                p.CheckBoxSet00.set_taborder("6");
                p.CheckBoxSet00.set_innerdataset("ds_checkboxset");
                p.CheckBoxSet00.set_codecolumn("code");
                p.CheckBoxSet00.set_datacolumn("data");
                p.CheckBoxSet00.set_readonlycolumn("readonly");
                p.CheckBoxSet00.set_columncount("2");
                p.CheckBoxSet00.set_value("1,3");
                p.CheckBoxSet00.set_index("1,3");
                p.CheckBoxSet00.move("179","95","226","76",null,null);
            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_02_00.move("38","67","100","30",null,null);

                p.CheckBox00.move("38","99","50","50",null,null);

                p.CheckBox01.move("83","99","50","50",null,null);

                p.Static02_00_02_00.move("187","67","100","30",null,null);

                p.CheckBoxSet00.move("179","95","219","76",null,null);
            	}
            );
            this.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_00.form
            obj = new Layout("default","",0,0,this.Div03_00.form,function(p){});
            this.Div03_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div07.form
            obj = new Layout("default","",0,0,this.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_cssclass("sta_WF_titleLine");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Calendar");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Calendar00.set_taborder("2");
                p.Calendar00.set_datepickerchangetype("button");
                p.Calendar00.move("20","65","160","40",null,null);

                p.Calendar01.set_taborder("3");
                p.Calendar01.set_type("monthonly");
                p.Calendar01.set_datepickerchangetype("button");
                p.Calendar01.move(null,"65","192","190","20",null);
            	}
            );
            this.Div07.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div07.form
            obj = new Layout("Layout0","",0,0,this.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar00.set_datepickerchangetype("button");
                p.Calendar00.move("20","65","160","40",null,null);

                p.Calendar01.set_datepickerchangetype("button");
                p.Calendar01.move("46.733668341708544%","65","192","190",null,null);
            	}
            );
            this.Div07.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",920,3810,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("기본 컴포넌트");

                p.Div00.set_taborder("0");
                p.Div00.set_cssclass("div_WF_component");
                p.Div00.move("20","79","430","190",null,null);

                p.Div03.set_taborder("1");
                p.Div03.set_text("");
                p.Div03.set_cssclass("div_WF_component");
                p.Div03.move("20","501","430","190",null,null);

                p.Div05.set_taborder("2");
                p.Div05.set_text("");
                p.Div05.set_cssclass("div_WF_component");
                p.Div05.move("471","711","430","190",null,null);

                p.Div04.set_taborder("3");
                p.Div04.set_cssclass("div_WF_component");
                p.Div04.move("20","711","430","190",null,null);

                p.Div01.set_taborder("4");
                p.Div01.set_text("");
                p.Div01.set_cssclass("div_WF_component");
                p.Div01.move("471","79","430","190",null,null);

                p.Div02.set_taborder("5");
                p.Div02.set_text("");
                p.Div02.set_cssclass("div_WF_component");
                p.Div02.move("471","290","430","190",null,null);

                p.Div06.set_taborder("6");
                p.Div06.set_text("");
                p.Div06.set_cssclass("div_WF_component");
                p.Div06.move("20","922","880","300",null,null);

                p.Div08.set_taborder("8");
                p.Div08.set_text("");
                p.Div08.set_cssclass("div_WF_component");
                p.Div08.move("471","1243","430","278",null,null);

                p.Div09.set_taborder("9");
                p.Div09.set_cssclass("div_WF_component");
                p.Div09.move("20.00","1542","430","190",null,null);

                p.Div10.set_taborder("10");
                p.Div10.set_text("");
                p.Div10.set_cssclass("div_WF_component");
                p.Div10.move("471.00","1542","430","190",null,null);

                p.Div11.set_taborder("11");
                p.Div11.set_text("");
                p.Div11.set_cssclass("div_WF_component");
                p.Div11.move("20.00","1752","880","239",null,null);

                p.Div13.set_taborder("12");
                p.Div13.set_text("");
                p.Div13.set_cssclass("div_WF_component");
                p.Div13.move("471.00","2011","430","190",null,null);

                p.Div12.set_taborder("13");
                p.Div12.set_text("");
                p.Div12.set_cssclass("div_WF_component");
                p.Div12.move("20.00","2011","430","190",null,null);

                p.Div14.set_taborder("14");
                p.Div14.set_text("");
                p.Div14.set_cssclass("div_WF_component");
                p.Div14.move("20.00","2221","880","169",null,null);

                p.Static01.set_taborder("15");
                p.Static01.set_cssclass("sta_WF_pageTitle");
                p.Static01.getSetter("messageid").set("comp.components");
                p.Static01.set_text("TEXT(\"comp.components\")");
                p.Static01.move("20","20","176","40",null,null);

                p.Div15.set_taborder("16");
                p.Div15.set_text("");
                p.Div15.set_cssclass("div_WF_component");
                p.Div15.move("20.00","2410","880","389",null,null);

                p.Div16.set_taborder("17");
                p.Div16.set_cssclass("div_WF_component");
                p.Div16.move("20.00","2819","430","278",null,null);

                p.Div17.set_taborder("18");
                p.Div17.set_text("");
                p.Div17.set_cssclass("div_WF_component");
                p.Div17.move("471.00","2819","430","278",null,null);

                p.Div18.set_taborder("19");
                p.Div18.set_text("");
                p.Div18.set_cssclass("div_WF_component");
                p.Div18.move("20.00","3117","430","278",null,null);

                p.Div19.set_taborder("20");
                p.Div19.set_text("");
                p.Div19.set_cssclass("div_WF_component");
                p.Div19.move("471.00","3117","430","278",null,null);

                p.Div20.set_taborder("21");
                p.Div20.set_text("");
                p.Div20.set_visible("false");
                p.Div20.set_formscrolltype("none");
                p.Div20.set_cssclass("div_WF_component");
                p.Div20.move("20.00","3415","880","369",null,null);

                p.Div01_00.set_taborder("22");
                p.Div01_00.set_text("");
                p.Div01_00.set_cssclass("div_WF_component");
                p.Div01_00.move("20","290","430","190",null,null);

                p.Div03_00.set_taborder("23");
                p.Div03_00.set_text("");
                p.Div03_00.set_cssclass("div_WF_component");
                p.Div03_00.move("471","501","430","190",null,null);

                p.Div07.set_taborder("7");
                p.Div07.set_text("Div07");
                p.Div07.set_cssclass("div_WF_component");
                p.Div07.move("20","1243","430","278",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Mobile_screen",440,5950,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","79",null,"190","20",null);

                p.Div02.move("20","709",null,"190","20",null);

                p.Div03.set_text("");
                p.Div03.move("20","919",null,"190","20",null);

                p.Div05.set_text("");
                p.Div05.move("20","1549",null,"190","20",null);

                p.Div04.move("20","1339",null,"190","20",null);

                p.Div01.move("20","289",null,"190","20",null);

                p.Div08.set_text("");
                p.Div08.move("20","2377",null,"278","20",null);

                p.Div06.set_text("");
                p.Div06.move("20","1759",null,"300","20",null);

                p.Div11.set_text("");
                p.Div11.move("20","3095",null,"239","20",null);

                p.Div09.move("20","2675",null,"190","20",null);

                p.Div10.move("20","2885",null,"190","20",null);

                p.Div15.move("20","3963",null,"389","20",null);

                p.Div14.move("20","3774",null,"169","20",null);

                p.Div13.set_text("");
                p.Div13.move("20","3564",null,"190","20",null);

                p.Div12.move("20","3354",null,"190","20",null);

                p.Div16.set_text("");
                p.Div16.move("20","4372",null,"278","20",null);

                p.Div17.move("20","4670",null,"278","20",null);

                p.Div18.move("20","4968",null,"278","20",null);

                p.Div19.move("20","5266",null,"278","20",null);

                p.Div20.move("20","5564",null,"369","20",null);

                p.Static01.move("20","14","260","40",null,null);

                p.Div03_00.move("20","1129",null,"190","20",null);

                p.Div01_00.move("20","499",null,"190","20",null);

                p.Div07.set_text("Div07");
                p.Div07.move("20","2079",null,"278","20",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("components_org.xfdl", function() {

        this.components_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	//Map component (IE10  IE11  Edge  Chrome  Safari  Firefox  Opera & mobile)
        	let osVersion = system.osversion;
        	if( ((osVersion.indexOf("Android") != -1 || osVersion.indexOf("iOS") != -1) && nexacro._Browser == "Runtime")
        	    || (nexacro._Browser == "IE" && nexacro._BrowserVersion >= 10)
        		|| nexacro._Browser == "Edge" || nexacro._Browser == "Chrome" || nexacro._Browser == "Safari" || nexacro._Browser == "Firefox")
        	{
        		this.Div20.visible = true;
        		this.resetScroll();
        	}

        	//Sketch Component
        	this.Div16.form.Sketch00.setBrushSize( 3 );
        	this.Div16.form.Sketch00.loadSketch( this.ds_sketch.getColumn(0,0) );


        	//WebBrowser Component (운영서버에서 정상작동을 위해서는 https로 호출되어야 함)
        	this.Div19.form.WebBrowser00.url = "https://www.tobesoft.com/";


        	//Graphics Component
        	//GraphicsRect
        	let objGRect = new nexacro.GraphicsRect();
        	this.Div18.form.Graphics00.addChild( "GraphicsRect00", objGRect );
        	objGRect.x = 50;
        	objGRect.y = 50;
        	objGRect.width = 50;
        	objGRect.height = 50;
        	objGRect.strokepen = "2px dashed green";

        	// GraphicsEllipse
        	let objGEllipse = new nexacro.GraphicsEllipse();
        	objGEllipse.x = 150;
        	objGEllipse.y = 75;
         	objGEllipse.width = 50;
         	objGEllipse.height = 50;
        	objGEllipse.strokepen = "3px solid gray";

        	// GraphicsText
        	let objGText = new nexacro.GraphicsText();
        	objGText.x = 200;
        	objGText.y = 50;
        	objGText.color = 'red';
        	objGText.font = '14pt/normal Verdana';
         	objGText.text = 'tobesoft';

        	// GraphicsImage
        	let objGImage = new nexacro.GraphicsImage();
        	objGImage.x = 180;
        	objGImage.y = 100;
        	objGImage.image = "url('imagerc::img_WF_sample02.png')";

        	// GraphicsLine
        	let objGLine = new nexacro.GraphicsLine();
        	objGLine.x = 50;
        	objGLine.y = 120;
        	objGLine.x2 = 100;
        	objGLine.y2 = 0;
        	objGLine.strokepen = '2px solid red';

        	// GraphicsPaths
        	let objGPaths = new nexacro.GraphicsPaths();
        	objGPaths.x = 50;
        	objGPaths.y = 120;
        	objGPaths.strokepen = '5px dotted blue';


        	let objGPath = new nexacro.GraphicsPath();
        	//trace(objGPath.hasSegments());
        	objGPaths.addChild( "GraphicsPath00", objGPath );
        	objGPath.moveTo(0,0);
        	objGPath.arcTo( 50, 50, 50, 100, 0, true, false );
        	trace(objGPath.hasSegments());

        	// GraphicsGroup
        	let objGGroup = new nexacro.GraphicsGroup();
        	this.Div18.form.Graphics00.addChild( "GraphicsGroup00", objGGroup );
        	objGGroup.addChild("GraphicsEllipse00", objGEllipse);
        	objGGroup.addChild("GraphicsText00", objGText);
        	objGGroup.addChild("GraphicsImage00", objGImage);
        	objGGroup.addChild("GraphicsLine00", objGLine);
        	objGGroup.addChild("GraphicsPaths00", objGPaths);
        	this.Div18.form.Graphics00.redraw();


        	//MAP Component
        	this.Div20.form.GoogleMap00.apikey = nexacro.getApplication().googlemap;
        	this.Div20.form.GoogleMap00.load(false, 37.5240220, 126.9265940, 0, 15);
        };

        this.GoogleMap00_onload = function(obj,e)
        {
        	let objGoogleMapMaker = new nexacro.GoogleMapMarker();
        	objGoogleMapMaker.set_latitude(37.5148693);
        	objGoogleMapMaker.set_longitude(127.0607522);
        	objGoogleMapMaker.text = "TOBESOFT";
        	objGoogleMapMaker.visible = true;

        	this.Div20.form.GoogleMap00.addItem("MapMarker", objGoogleMapMaker);
        };


        this.Div04_Static03_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.components_onload,this);
            this.addEventHandler("ontimer",this.components_ontimer,this);
            this.Div04.form.Static03_00.addEventHandler("onclick",this.Div04_Static03_00_onclick,this);
            this.Div15.form.lstList.addEventHandler("oncellclick",this.lstList_oncellclick,this);
            this.Div15.form.lstList.addEventHandler("onbandstatuschanged",this.lstList_onbandstatuschanged,this);
            this.Div20.form.GoogleMap00.addEventHandler("onload",this.GoogleMap00_onload,this);
            this.Div03_00.form.MultiCombo01.addEventHandler("onitemchanged",this.Div03_00_MultiCombo00_00_onitemchanged,this);
            this.Div07.form.Static00.addEventHandler("onclick",this.Div07_Static00_onclick,this);
            this.Div07.form.Static03_00.addEventHandler("onclick",this.Div07_Static03_00_onclick,this);
        };
        this.loadIncludeScript("components_org.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
