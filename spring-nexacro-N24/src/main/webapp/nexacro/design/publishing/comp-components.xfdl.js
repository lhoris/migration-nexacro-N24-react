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
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,2370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"checkbox\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"설정금액\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"승인\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">#101</Col><Col id=\"이름\">James</Col><Col id=\"설정금액\">11,235</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">#102</Col><Col id=\"이름\">Bill</Col><Col id=\"설정금액\">15,698</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">#103</Col><Col id=\"이름\">Elyse</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"ID\">#104</Col><Col id=\"이름\">Jenny</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row></Rows>");
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


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"caption\">Nexacro</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">2</Col><Col id=\"caption\">Overview</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"caption\">Introduce</Col><Col id=\"level\">1</Col><Col id=\"icon\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">5</Col><Col id=\"caption\">Products</Col><Col id=\"level\">2</Col><Col id=\"icon\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"id\">6</Col><Col id=\"caption\">Tobesoft</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">7</Col><Col id=\"caption\">History</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">8</Col><Col id=\"caption\">IT Solution</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">9</Col><Col id=\"caption\">Technology</Col><Col id=\"level\">1</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"id\">10</Col><Col id=\"caption\">News</Col><Col id=\"level\">0</Col><Col id=\"icon\"/></Row><Row><Col id=\"caption\">Notice</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">Social Activity</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">Recruit</Col><Col id=\"level\">1</Col><Col id=\"icon\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"caption\">Information</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"caption\">Contact</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","40","40",null,"2290","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","14","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Component");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("grid.renderer");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","25","79","420","190",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","30","68","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","160","118","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_enable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_01","30","118","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","312","68","40","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_inquiry");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_00","160","68","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_enable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","310","123","30","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_add");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","344","123","30","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_delete");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00",null,"290","420","190","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","50","68","150","40",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("Combo00");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","225","68","150","40",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","50","123","150","40",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","225","123","150","40",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("Combo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00",null,"501","420","190","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","50","68","150","40",null,null,null,null,null,null,this.Div00.form.Div00_00_00.form);
            obj.set_taborder("2");
            this.Div00.form.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","225","68","150","40",null,null,null,null,null,null,this.Div00.form.Div00_00_00.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.Div00.form.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","50","125","150","40",null,null,null,null,null,null,this.Div00.form.Div00_00_00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div00.form.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","225","125","150","40",null,null,null,null,null,null,this.Div00.form.Div00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("msk_WF_essential");
            this.Div00.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","25","501","420","190",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new Edit("Edit00","50","68","150","40",null,null,null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("2");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","225","68","150","40",null,null,null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","50","123","150","40",null,null,null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","225","123","150","40",null,null,null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("edit_WF_essential");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new Div("Div00_02","475","79","420","190",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("1");
            obj.set_text("Checkbox / Radio");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","40","67","100","30",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("2");
            obj.set_text("Checkbox");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","40","99","50","50",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("3");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","85","99","50","50",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("4");
            obj.set_value("true");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static02_00_02_00","244","67","100","30",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("5");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Radio("Radio00","244","99","82","50",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("1");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Div("Div00_00_01",null,"290","420","190","475",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("Listbox");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_00_01.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","50","63",null,"106","50",null,null,null,null,null,this.Div00.form.Div00_00_01.form);
            obj.set_taborder("2");
            this.Div00.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Div("Div00_01_00","25","712","870","300",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_01_00.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_01_00.form);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","65",null,"202","20",null,null,null,null,null,this.Div00.form.Div00_01_00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"설정금액\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"승인\"/></Band><Band id=\"body\"><Cell text=\"bind:checkbox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:설정금액\"/><Cell col=\"4\" text=\"bind:생성일\"/><Cell col=\"5\" text=\"bind:승인\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.Div00.form.Div00_01_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_01","25","1032","420","278",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_01_01.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_01_01.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_01_01.form);
            obj.set_taborder("1");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_01_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","20","65","160","40",null,null,null,null,null,null,this.Div00.form.Div00_01_01.form);
            obj.set_taborder("2");
            this.Div00.form.Div00_01_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00",null,"65","192","190","20",null,null,null,null,null,this.Div00.form.Div00_01_01.form);
            obj.set_taborder("3");
            obj.set_type("monthonly");
            this.Div00.form.Div00_01_01.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00",null,"1032","420","278","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Textarea");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","30","65",null,"190","30",null,null,null,null,null,this.Div00.form.Div00_00_00_00.form);
            obj.set_taborder("2");
            this.Div00.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_02","25","1330","420","190",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_01_02.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_01_02.form);
            obj.set_taborder("1");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_01","30","60","170","30",null,null,null,null,null,null,this.Div00.form.Div00_01_02.form);
            obj.set_taborder("2");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_compTitle01");
            this.Div00.form.Div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static01","30","104","120","60",null,null,null,null,null,null,this.Div00.form.Div00_01_02.form);
            obj.set_taborder("3");
            obj.set_text("Static01");
            this.Div00.form.Div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static02","234","104","120","60",null,null,null,null,null,null,this.Div00.form.Div00_01_02.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            this.Div00.form.Div00_01_02.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_01",null,"1330","420","190","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("Groupbox");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_00_00_01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","30","65","358","94",null,null,null,null,null,null,this.Div00.form.Div00_00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("GroupBox00");
            this.Div00.form.Div00_00_00_01.addChild(obj.name, obj);

            obj = new Div("Div00_01_02_00","25","1540","870","239",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_01_02_00.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_01_02_00.form);
            obj.set_taborder("1");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_01_02_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","30","95","234","115",null,null,null,null,null,null,this.Div00.form.Div00_01_02_00.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::img_WF_sample01.png\')");
            this.Div00.form.Div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","30","57","200","30",null,null,null,null,null,null,this.Div00.form.Div00_01_02_00.form);
            obj.set_taborder("3");
            obj.set_text("stretch:none");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.form.Div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00","318","57","200","30",null,null,null,null,null,null,this.Div00.form.Div00_01_02_00.form);
            obj.set_taborder("4");
            obj.set_text("stretch:fit");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.form.Div00_01_02_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","318","95","234","115",null,null,null,null,null,null,this.Div00.form.Div00_01_02_00.form);
            obj.set_taborder("5");
            obj.set_image("url(\'imagerc::img_WF_sample01.png\')");
            obj.set_stretch("fit");
            this.Div00.form.Div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00_00","604","57","200","30",null,null,null,null,null,null,this.Div00.form.Div00_01_02_00.form);
            obj.set_taborder("6");
            obj.set_text("stretch:fixaspectratio");
            obj.set_cssclass("sta_WF_compTitle03");
            this.Div00.form.Div00_01_02_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00","604","95","234","115",null,null,null,null,null,null,this.Div00.form.Div00_01_02_00.form);
            obj.set_taborder("7");
            obj.set_image("url(\'imagerc::img_WF_sample01.png\')");
            obj.set_stretch("fixaspectratio");
            this.Div00.form.Div00_01_02_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_01_00",null,"1799","420","190","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_00_00_01_00.form);
            obj.set_taborder("0");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_00_00_01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_00_00_01_00.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_00_00_01_00.addChild(obj.name, obj);

            obj = new Tab("Tab00","30","65","358","94",null,null,null,null,null,null,this.Div00.form.Div00_00_00_01_00.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.Div00.form.Div00_00_00_01_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Div00_00_00_01_00.form.Tab00);
            obj.set_text("Tabpage1");
            this.Div00.form.Div00_00_00_01_00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Div00_00_00_01_00.form.Tab00);
            obj.set_text("Tabpage2");
            this.Div00.form.Div00_00_00_01_00.form.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00_01_02_01","25","1799","420","190",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_01_02_01.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_01_02_01.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_01_02_01.form);
            obj.set_taborder("1");
            obj.set_text("Progressbar");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_01_02_01.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","30","77",null,"40","30",null,null,null,null,null,this.Div00.form.Div00_01_02_01.form);
            obj.set_taborder("2");
            obj.set_smooth("true");
            obj.set_text("60%");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("60");
            this.Div00.form.Div00_01_02_01.addChild(obj.name, obj);

            obj = new Div("Div00_01_02_00_00","25","2009","870","239",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_border("1px solid #e4e9f8");
            obj.set_borderRadius("20px");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div00.form.Div00_01_02_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#e4e9f8");
            this.Div00.form.Div00_01_02_00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8",null,"30","30",null,null,null,null,null,this.Div00.form.Div00_01_02_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Menu");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00_01_02_00_00.addChild(obj.name, obj);

            obj = new Menu("Menu00","30","75",null,"43","30",null,null,null,null,null,this.Div00.form.Div00_01_02_00_00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_menu");
            obj.set_captioncolumn("caption");
            obj.set_checkboxcolumn("check");
            obj.set_enablecolumn("enable");
            obj.set_hotkeycolumn("hotkey");
            obj.set_iconcolumn("icon");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_popupitemheight("40");
            this.Div00.form.Div00_01_02_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Button");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Button02.set_taborder("2");
                p.Button02.set_text("Button");
                p.Button02.set_cssclass("btn_WF_basic01");
                p.Button02.move("30","68","120","40",null,null);

                p.Button02_00_00.set_taborder("3");
                p.Button02_00_00.set_text("Button");
                p.Button02_00_00.set_cssclass("btn_WF_basic02");
                p.Button02_00_00.set_enable("false");
                p.Button02_00_00.move("160","118","120","40",null,null);

                p.Button02_01.set_taborder("4");
                p.Button02_01.set_text("Button");
                p.Button02_01.set_cssclass("btn_WF_basic02");
                p.Button02_01.move("30","118","120","40",null,null);

                p.Button00.set_taborder("5");
                p.Button00.set_cssclass("btn_WF_inquiry");
                p.Button00.move("312","68","40","40",null,null);

                p.Button02_00.set_taborder("6");
                p.Button02_00.set_text("Button");
                p.Button02_00.set_cssclass("btn_WF_basic01");
                p.Button02_00.set_enable("false");
                p.Button02_00.move("160","68","120","40",null,null);

                p.Button01.set_taborder("7");
                p.Button01.set_cssclass("btn_WF_add");
                p.Button01.move("310","123","30","30",null,null);

                p.Button01_00.set_taborder("8");
                p.Button01_00.set_cssclass("btn_WF_delete");
                p.Button01_00.move("344","123","30","30",null,null);
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button02.move("20","68","120","40",null,null);

                p.Button02_00_00.move("150","118","120","40",null,null);

                p.Button02_01.move("20","118","120","40",null,null);

                p.Button00.move("20","168","40","40",null,null);

                p.Button02_00.move("150","68","120","40",null,null);

                p.Button01.move("89","173","30","30",null,null);

                p.Button01_00.move("123","173","30","30",null,null);
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03_00.set_taborder("0");
                p.Static03_00.set_text("Combo");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Combo00.set_taborder("2");
                p.Combo00.set_itemheight("36");
                p.Combo00.set_innerdataset("ds_combo");
                p.Combo00.set_codecolumn("code");
                p.Combo00.set_datacolumn("data");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("50","68","150","40",null,null);

                p.Combo00_00.set_taborder("3");
                p.Combo00_00.set_enable("false");
                p.Combo00_00.set_text("Combo");
                p.Combo00_00.set_value("");
                p.Combo00_00.set_index("-1");
                p.Combo00_00.move("225","68","150","40",null,null);

                p.Combo00_00_00_00.set_taborder("4");
                p.Combo00_00_00_00.set_cssclass("cmb_WF_essential");
                p.Combo00_00_00_00.set_text("Combo");
                p.Combo00_00_00_00.set_value("");
                p.Combo00_00_00_00.set_index("-1");
                p.Combo00_00_00_00.move("50","123","150","40",null,null);

                p.Combo00_01.set_taborder("5");
                p.Combo00_01.set_readonly("true");
                p.Combo00_01.set_text("Combo");
                p.Combo00_01.set_value("");
                p.Combo00_01.set_index("-1");
                p.Combo00_01.move("225","123","150","40",null,null);
            	}
            );
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Combo00.move("24","68","39.64%","40",null,null);

                p.Combo00_00.move("Combo00:20","68",null,"40","24",null);

                p.Combo00_00_00_00.move("24","123","39.64%","40",null,null);

                p.Combo00_01.move("Combo00_00_00_00:20","123",null,"40","24",null);
            	}
            );
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03_00.set_taborder("0");
                p.Static03_00.set_text("MaskEdit");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.MaskEdit00.set_taborder("2");
                p.MaskEdit00.move("50","68","150","40",null,null);

                p.MaskEdit00_00.set_taborder("3");
                p.MaskEdit00_00.set_enable("false");
                p.MaskEdit00_00.move("225","68","150","40",null,null);

                p.MaskEdit00_01.set_taborder("4");
                p.MaskEdit00_01.set_readonly("true");
                p.MaskEdit00_01.move("50","125","150","40",null,null);

                p.MaskEdit00_00_01.set_taborder("5");
                p.MaskEdit00_00_01.set_cssclass("msk_WF_essential");
                p.MaskEdit00_00_01.move("225","125","150","40",null,null);
            	}
            );
            this.Div00.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.MaskEdit00_00.move("MaskEdit00:20","68",null,"40","24",null);

                p.MaskEdit00_00_01.move("MaskEdit00_01:20","118",null,"40","24",null);

                p.MaskEdit00.move("24","68","38.46%","40",null,null);

                p.MaskEdit00_01.move("24","118","38.46%","40",null,null);
            	}
            );
            this.Div00.form.Div00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Edit");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Edit00.set_taborder("2");
                p.Edit00.move("50","68","150","40",null,null);

                p.Edit00_00.set_taborder("3");
                p.Edit00_00.set_enable("false");
                p.Edit00_00.move("225","68","150","40",null,null);

                p.Edit00_01.set_taborder("4");
                p.Edit00_01.set_readonly("true");
                p.Edit00_01.move("50","123","150","40",null,null);

                p.Edit00_00_01.set_taborder("5");
                p.Edit00_00_01.set_cssclass("edit_WF_essential");
                p.Edit00_00_01.move("225","123","150","40",null,null);
            	}
            );
            this.Div00.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00_00.move("Edit00:20","68",null,"40","24",null);

                p.Edit00_00_01.move("Edit00_01:20","118",null,"40","24",null);

                p.Edit00.move("24","68","39.94%","40",null,null);

                p.Edit00_01.move("24","118","39.94%","40",null,null);
            	}
            );
            this.Div00.form.Div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Checkbox / Radio");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static02_02_00.set_taborder("2");
                p.Static02_02_00.set_text("Checkbox");
                p.Static02_02_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00.move("40","67","100","30",null,null);

                p.CheckBox00.set_taborder("3");
                p.CheckBox00.move("40","99","50","50",null,null);

                p.CheckBox00_00.set_taborder("4");
                p.CheckBox00_00.set_value("true");
                p.CheckBox00_00.move("85","99","50","50",null,null);

                p.Static02_00_02_00.set_taborder("5");
                p.Static02_00_02_00.set_text("Radio");
                p.Static02_00_02_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_00_02_00.move("244","67","100","30",null,null);

                p.Radio00.set_taborder("6");
                p.Radio00.set_innerdataset("ds_rdo");
                p.Radio00.set_codecolumn("code");
                p.Radio00.set_datacolumn("data");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_value("1");
                p.Radio00.set_index("1");
                p.Radio00.move("244","99","82","50",null,null);
            	}
            );
            this.Div00.form.Div00_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_02.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00_02_00.move(null,"67","82","30","40",null);

                p.Radio00.move(null,"99","82","50","40",null);
            	}
            );
            this.Div00.form.Div00_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00_01.form,
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
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.ListBox00.set_taborder("2");
                p.ListBox00.move("50","63",null,"106","50",null);
            	}
            );
            this.Div00.form.Div00_00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_00_01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div00_00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_01_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Grid");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("ds_grid");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_scrollbarsize("5");
                p.Grid00.move("20","65",null,"202","20",null);
            	}
            );
            this.Div00.form.Div00_01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_01_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div00_01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_01_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Calendar");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Calendar00.set_taborder("2");
                p.Calendar00.move("20","65","160","40",null,null);

                p.Calendar00_00.set_taborder("3");
                p.Calendar00_00.set_type("monthonly");
                p.Calendar00_00.move(null,"65","192","190","20",null);
            	}
            );
            this.Div00.form.Div00_01_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_01_01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_01_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar00.move("21.3%","75",null,"40","21.3%",null);

                p.Calendar00_00.move("21.3%","114",null,"190","21.3%",null);
            	}
            );
            this.Div00.form.Div00_01_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03_00.set_taborder("0");
                p.Static03_00.set_text("Textarea");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.TextArea00.set_taborder("2");
                p.TextArea00.move("30","65",null,"190","30",null);
            	}
            );
            this.Div00.form.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div00_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_01_02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Static");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static00_00_00_01_00_00_01.set_taborder("2");
                p.Static00_00_00_01_00_00_01.set_text("Static");
                p.Static00_00_00_01_00_00_01.set_cssclass("sta_WF_compTitle01");
                p.Static00_00_00_01_00_00_01.move("30","60","170","30",null,null);

                p.Static01.set_taborder("3");
                p.Static01.set_text("Static01");
                p.Static01.move("30","104","120","60",null,null);

                p.Static02.set_taborder("4");
                p.Static02.set_text("Static02");
                p.Static02.move("234","104","120","60",null,null);
            	}
            );
            this.Div00.form.Div00_01_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_01_02.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_text("<u v=\'true\'>Static</u> <fc v=\"red\">color</fc> <fs v=\"15\">Size</fs>");
                p.Static02.set_textAlign("center");
                p.Static02.set_usedecorate("true");
                p.Static02.move("Static01:16.67%","104",null,"60","15",null);

                p.Static01.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
                p.Static01.set_text("Static");
                p.Static01.set_textAlign("center");
                p.Static01.set_color("#ffffff");
                p.Static01.move("30","104","36.59%","60",null,null);
            	}
            );
            this.Div00.form.Div00_01_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_00_00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03_00.set_taborder("0");
                p.Static03_00.set_text("Groupbox");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.GroupBox00.set_taborder("2");
                p.GroupBox00.set_text("GroupBox00");
                p.GroupBox00.move("30","65","358","94",null,null);
            	}
            );
            this.Div00.form.Div00_00_00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_00_00_01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.GroupBox00.move("30","65",null,"94","30",null);
            	}
            );
            this.Div00.form.Div00_00_00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_01_02_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01_02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("ImageViewer");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'imagerc::img_WF_sample01.png\')");
                p.ImageViewer00.move("30","95","234","115",null,null);

                p.Static02_02_00.set_taborder("3");
                p.Static02_02_00.set_text("stretch:none");
                p.Static02_02_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00.move("30","57","200","30",null,null);

                p.Static02_02_00_00.set_taborder("4");
                p.Static02_02_00_00.set_text("stretch:fit");
                p.Static02_02_00_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00_00.move("318","57","200","30",null,null);

                p.ImageViewer00_00.set_taborder("5");
                p.ImageViewer00_00.set_image("url(\'imagerc::img_WF_sample01.png\')");
                p.ImageViewer00_00.set_stretch("fit");
                p.ImageViewer00_00.move("318","95","234","115",null,null);

                p.Static02_02_00_00_00.set_taborder("6");
                p.Static02_02_00_00_00.set_text("stretch:fixaspectratio");
                p.Static02_02_00_00_00.set_cssclass("sta_WF_compTitle03");
                p.Static02_02_00_00_00.move("604","57","200","30",null,null);

                p.ImageViewer00_00_00.set_taborder("7");
                p.ImageViewer00_00_00.set_image("url(\'imagerc::img_WF_sample01.png\')");
                p.ImageViewer00_00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00_00.move("604","95","234","115",null,null);
            	}
            );
            this.Div00.form.Div00_01_02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_01_02_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_01_02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_02_00_00.move("30","224","200","30",null,null);

                p.ImageViewer00_00.move("30","262","67.99%","115",null,null);

                p.ImageViewer00.move("30","95","67.99%","115",null,null);

                p.Static02_02_00_00_00.move("30","391","200","30",null,null);

                p.ImageViewer00_00_00.move("30","429","67.99%","115",null,null);
            	}
            );
            this.Div00.form.Div00_01_02_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_00_00_01_00.form.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00_00_01_00.form.Tab00.Tabpage1.form,function(p){});
            this.Div00.form.Div00_00_00_01_00.form.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_00_00_01_00.form.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00_00_01_00.form.Tab00.Tabpage2.form,function(p){});
            this.Div00.form.Div00_00_00_01_00.form.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_00_00_01_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00_00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03_00.set_taborder("0");
                p.Static03_00.set_text("Tab");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Tab00.set_taborder("2");
                p.Tab00.set_tabindex("0");
                p.Tab00.move("30","65","358","94",null,null);

                p.Tab00.Tabpage1.set_text("Tabpage1");

                p.Tab00.Tabpage2.set_text("Tabpage2");
            	}
            );
            this.Div00.form.Div00_00_00_01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_00_00_01_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_00_00_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Tab00.move("20","65",null,"94","20",null);
            	}
            );
            this.Div00.form.Div00_00_00_01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_01_02_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01_02_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Progressbar");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.ProgressBar00.set_taborder("2");
                p.ProgressBar00.set_smooth("true");
                p.ProgressBar00.set_text("60%");
                p.ProgressBar00.set_min("0");
                p.ProgressBar00.set_max("100");
                p.ProgressBar00.set_pos("60");
                p.ProgressBar00.move("30","77",null,"40","30",null);
            	}
            );
            this.Div00.form.Div00_01_02_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_01_02_01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_01_02_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div00_01_02_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_01_02_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01_02_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_background("#e4e9f8");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("Menu");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Menu00.set_taborder("2");
                p.Menu00.set_innerdataset("ds_menu");
                p.Menu00.set_captioncolumn("caption");
                p.Menu00.set_checkboxcolumn("check");
                p.Menu00.set_enablecolumn("enable");
                p.Menu00.set_hotkeycolumn("hotkey");
                p.Menu00.set_iconcolumn("icon");
                p.Menu00.set_idcolumn("id");
                p.Menu00.set_levelcolumn("level");
                p.Menu00.set_popupitemheight("40");
                p.Menu00.move("30","75",null,"43","30",null);
            	}
            );
            this.Div00.form.Div00_01_02_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_01_02_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_01_02_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03_00.set_text("Menu");
            	}
            );
            this.Div00.form.Div00_01_02_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01.set_taborder("0");
                p.Static00_01.set_text("Component");
                p.Static00_01.set_cssclass("sta_WF_pageTitle");
                p.Static00_01.getSetter("messageid").set("grid.renderer");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("30","14","300","40",null,null);

                p.Div00.set_taborder("1");
                p.Div00.set_border("1px solid #e4e9f8");
                p.Div00.set_borderRadius("20px");
                p.Div00.set_background("#ffffff");
                p.Div00.move("25","79","420","190",null,null);

                p.Div00_00.set_taborder("2");
                p.Div00_00.set_border("1px solid #e4e9f8");
                p.Div00_00.set_borderRadius("20px");
                p.Div00_00.set_background("#ffffff");
                p.Div00_00.set_text("");
                p.Div00_00.move(null,"290","420","190","25",null);

                p.Div00_00_00.set_taborder("3");
                p.Div00_00_00.set_border("1px solid #e4e9f8");
                p.Div00_00_00.set_borderRadius("20px");
                p.Div00_00_00.set_background("#ffffff");
                p.Div00_00_00.set_text("");
                p.Div00_00_00.move(null,"501","420","190","25",null);

                p.Div00_01.set_taborder("4");
                p.Div00_01.set_border("1px solid #e4e9f8");
                p.Div00_01.set_borderRadius("20px");
                p.Div00_01.set_background("#ffffff");
                p.Div00_01.move("25","501","420","190",null,null);

                p.Div00_02.set_taborder("5");
                p.Div00_02.set_border("1px solid #e4e9f8");
                p.Div00_02.set_borderRadius("20px");
                p.Div00_02.set_background("#ffffff");
                p.Div00_02.move("475","79","420","190",null,null);

                p.Div00_00_01.set_taborder("6");
                p.Div00_00_01.set_border("1px solid #e4e9f8");
                p.Div00_00_01.set_borderRadius("20px");
                p.Div00_00_01.set_background("#ffffff");
                p.Div00_00_01.set_text("");
                p.Div00_00_01.move(null,"290","420","190","475",null);

                p.Div00_01_00.set_taborder("7");
                p.Div00_01_00.set_border("1px solid #e4e9f8");
                p.Div00_01_00.set_borderRadius("20px");
                p.Div00_01_00.set_background("#ffffff");
                p.Div00_01_00.move("25","712","870","300",null,null);

                p.Div00_01_01.set_taborder("8");
                p.Div00_01_01.set_border("1px solid #e4e9f8");
                p.Div00_01_01.set_borderRadius("20px");
                p.Div00_01_01.set_background("#ffffff");
                p.Div00_01_01.move("25","1032","420","278",null,null);

                p.Div00_00_00_00.set_taborder("9");
                p.Div00_00_00_00.set_border("1px solid #e4e9f8");
                p.Div00_00_00_00.set_borderRadius("20px");
                p.Div00_00_00_00.set_background("#ffffff");
                p.Div00_00_00_00.set_text("");
                p.Div00_00_00_00.move(null,"1032","420","278","25",null);

                p.Div00_01_02.set_taborder("10");
                p.Div00_01_02.set_border("1px solid #e4e9f8");
                p.Div00_01_02.set_borderRadius("20px");
                p.Div00_01_02.set_background("#ffffff");
                p.Div00_01_02.move("25","1330","420","190",null,null);

                p.Div00_00_00_01.set_taborder("11");
                p.Div00_00_00_01.set_border("1px solid #e4e9f8");
                p.Div00_00_00_01.set_borderRadius("20px");
                p.Div00_00_00_01.set_background("#ffffff");
                p.Div00_00_00_01.set_text("");
                p.Div00_00_00_01.move(null,"1330","420","190","25",null);

                p.Div00_01_02_00.set_taborder("12");
                p.Div00_01_02_00.set_border("1px solid #e4e9f8");
                p.Div00_01_02_00.set_borderRadius("20px");
                p.Div00_01_02_00.set_background("#ffffff");
                p.Div00_01_02_00.move("25","1540","870","239",null,null);

                p.Div00_00_00_01_00.set_taborder("13");
                p.Div00_00_00_01_00.set_border("1px solid #e4e9f8");
                p.Div00_00_00_01_00.set_borderRadius("20px");
                p.Div00_00_00_01_00.set_background("#ffffff");
                p.Div00_00_00_01_00.set_text("");
                p.Div00_00_00_01_00.move(null,"1799","420","190","25",null);

                p.Div00_01_02_01.set_taborder("14");
                p.Div00_01_02_01.set_border("1px solid #e4e9f8");
                p.Div00_01_02_01.set_borderRadius("20px");
                p.Div00_01_02_01.set_background("#ffffff");
                p.Div00_01_02_01.move("25","1799","420","190",null,null);

                p.Div00_01_02_00_00.set_taborder("15");
                p.Div00_01_02_00_00.set_border("1px solid #e4e9f8");
                p.Div00_01_02_00_00.set_borderRadius("20px");
                p.Div00_01_02_00_00.set_background("#ffffff");
                p.Div00_01_02_00_00.move("25","2009","870","239",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","79",null,"241","20",null);

                p.Div00_00.move("20","550",null,"190","20",null);

                p.Div00_01.move("20","970",null,"190","20",null);

                p.Div00_01_00.move("20","1390",null,"300","20",null);

                p.Div00_01_01.move("20","1710",null,"340","20",null);

                p.Div00_01_02.move("20","2368",null,"190","20",null);

                p.Div00_01_02_00.set_text("");
                p.Div00_01_02_00.move("20","2788",null,"609","20",null);

                p.Div00_01_02_01.move("20","3627",null,"190","20",null);

                p.Div00_01_02_00_00.move("20","3837",null,"239","20",null);

                p.Div00_02.set_text("");
                p.Div00_02.move("20","340",null,"190","20",null);

                p.Static00_01.move("30","14","300","40",null,null);

                p.Div00_00_00_00.move("20","2070",null,"278","20",null);

                p.Div00_00_01.move("20","760",null,"190","20",null);

                p.Div00_00_00_01_00.move("20","3417",null,"190","20",null);

                p.Div00_00_00_01.move("20","2578",null,"190","20",null);

                p.Div00_00_00.move("20","1180",null,"190","20",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1000,2370,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_cssclass("div_WF_area");
                p.Div00.move("40","40",null,"2290","40",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",410,4140,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","20",null,"4100","20",null);
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
        this.registerScript("comp-components.xfdl", function() {

        this.components_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.components_onload,this);
        };
        this.loadIncludeScript("comp-components.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
