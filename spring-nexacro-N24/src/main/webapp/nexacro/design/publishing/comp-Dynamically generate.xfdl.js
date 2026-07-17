(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("compD");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","40","40","920","870",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_area");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","700","111",null,"274","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_background("#f4efff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","40","110","650","276",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_background("#f5f4f6");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","14","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Dynamically generate");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("grid.renderer");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","40","405",null,"435","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
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
            obj.set_text("Result");
            obj.set_cssclass("sta_WF_txt20px");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_01","30","59","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","155","59","150","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","310","59","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Static");
            obj.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
            obj.set_textAlign("center");
            obj.set_color("#111111");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","435","59","160","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_image("url(\'imagerc::img_WF_sample02.png\')");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","600","59","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","30","109","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","155","109","150","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","310","109","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Static");
            obj.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
            obj.set_textAlign("center");
            obj.set_color("#111111");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","435","109","160","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_image("url(\'imagerc::img_WF_sample02.png\')");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","600","109","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00","30","209","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","155","209","150","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("13");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","310","209","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Static");
            obj.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
            obj.set_textAlign("center");
            obj.set_color("#111111");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00","435","209","160","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("15");
            obj.set_image("url(\'imagerc::img_WF_sample02.png\')");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","600","209","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("16");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_01_01","30","159","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01","155","159","150","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("18");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","310","159","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("Static");
            obj.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
            obj.set_textAlign("center");
            obj.set_color("#111111");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","435","159","160","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("20");
            obj.set_image("url(\'imagerc::img_WF_sample02.png\')");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","600","159","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("21");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","600","259","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("22");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00_00","435","259","160","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("23");
            obj.set_image("url(\'imagerc::img_WF_sample02.png\')");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","310","259","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("Static");
            obj.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
            obj.set_textAlign("center");
            obj.set_color("#111111");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","155","259","150","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("25");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_01_00_00_00","30","259","120","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","40","74",null,"40","50",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Select the components to create, change the options and click the ‘Create’ button");
            obj.set_cssclass("sta_WF_txt15px");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","66","175","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Button");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","66","210","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Calendar");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","66","245","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Static");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_02","66","280","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Image");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_03","66","315","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Edit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_03","225","175","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("컴포넌트 수");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","357","175","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_03_00","225","217","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("한 라인 표시 갯수");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","357","217","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_03_01","225","259","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("라인 수");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","357","259","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_03_02","225","301","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("총 컴포넌트 갯수");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","357","301","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","563","207","100","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("Generate");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","731","237","94","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("0.113");
            obj.set_cssclass("sta_WF_compTitle02_1");
            obj.set_textAlign("right");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","835","237","30","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("초");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","66","123","158","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("컴포넌트 선택");
            obj.set_cssclass("sta_WF_compTitle04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","225","123","158","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("컴포넌트 생성 옵션");
            obj.set_cssclass("sta_WF_compTitle04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","711","123","158","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("생성 소요시간");
            obj.set_cssclass("sta_WF_compTitle04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","535","158","1","200",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("Static01");
            obj.set_border("0px none,1px dashed #BABABA,0px none,0px none");
            this.Div00.addChild(obj.name, obj);
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
                p.Static03_00.set_text("Result");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.move("30","8",null,"30","30",null);

                p.Button02_01.set_taborder("2");
                p.Button02_01.set_text("Button");
                p.Button02_01.set_cssclass("btn_WF_basic02");
                p.Button02_01.move("30","59","120","40",null,null);

                p.Calendar00.set_taborder("3");
                p.Calendar00.move("155","59","150","40",null,null);

                p.Static01.set_taborder("4");
                p.Static01.set_text("Static");
                p.Static01.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
                p.Static01.set_textAlign("center");
                p.Static01.set_color("#111111");
                p.Static01.move("310","59","120","40",null,null);

                p.ImageViewer00.set_taborder("5");
                p.ImageViewer00.set_image("url(\'imagerc::img_WF_sample02.png\')");
                p.ImageViewer00.move("435","59","160","40",null,null);

                p.Edit00.set_taborder("6");
                p.Edit00.set_value("Edit");
                p.Edit00.move("600","59","120","40",null,null);

                p.Button02_01_00.set_taborder("7");
                p.Button02_01_00.set_text("Button");
                p.Button02_01_00.set_cssclass("btn_WF_basic02");
                p.Button02_01_00.move("30","109","120","40",null,null);

                p.Calendar00_00.set_taborder("8");
                p.Calendar00_00.move("155","109","150","40",null,null);

                p.Static01_00.set_taborder("9");
                p.Static01_00.set_text("Static");
                p.Static01_00.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
                p.Static01_00.set_textAlign("center");
                p.Static01_00.set_color("#111111");
                p.Static01_00.move("310","109","120","40",null,null);

                p.ImageViewer00_00.set_taborder("10");
                p.ImageViewer00_00.set_image("url(\'imagerc::img_WF_sample02.png\')");
                p.ImageViewer00_00.move("435","109","160","40",null,null);

                p.Edit00_00.set_taborder("11");
                p.Edit00_00.set_value("Edit");
                p.Edit00_00.move("600","109","120","40",null,null);

                p.Button02_01_00_00.set_taborder("12");
                p.Button02_01_00_00.set_text("Button");
                p.Button02_01_00_00.set_cssclass("btn_WF_basic02");
                p.Button02_01_00_00.move("30","209","120","40",null,null);

                p.Calendar00_00_00.set_taborder("13");
                p.Calendar00_00_00.move("155","209","150","40",null,null);

                p.Static01_00_00.set_taborder("14");
                p.Static01_00_00.set_text("Static");
                p.Static01_00_00.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
                p.Static01_00_00.set_textAlign("center");
                p.Static01_00_00.set_color("#111111");
                p.Static01_00_00.move("310","209","120","40",null,null);

                p.ImageViewer00_00_00.set_taborder("15");
                p.ImageViewer00_00_00.set_image("url(\'imagerc::img_WF_sample02.png\')");
                p.ImageViewer00_00_00.move("435","209","160","40",null,null);

                p.Edit00_00_00.set_taborder("16");
                p.Edit00_00_00.set_value("Edit");
                p.Edit00_00_00.move("600","209","120","40",null,null);

                p.Button02_01_01.set_taborder("17");
                p.Button02_01_01.set_text("Button");
                p.Button02_01_01.set_cssclass("btn_WF_basic02");
                p.Button02_01_01.move("30","159","120","40",null,null);

                p.Calendar00_01.set_taborder("18");
                p.Calendar00_01.move("155","159","150","40",null,null);

                p.Static01_01.set_taborder("19");
                p.Static01_01.set_text("Static");
                p.Static01_01.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
                p.Static01_01.set_textAlign("center");
                p.Static01_01.set_color("#111111");
                p.Static01_01.move("310","159","120","40",null,null);

                p.ImageViewer00_01.set_taborder("20");
                p.ImageViewer00_01.set_image("url(\'imagerc::img_WF_sample02.png\')");
                p.ImageViewer00_01.move("435","159","160","40",null,null);

                p.Edit00_01.set_taborder("21");
                p.Edit00_01.set_value("Edit");
                p.Edit00_01.move("600","159","120","40",null,null);

                p.Edit00_00_00_00.set_taborder("22");
                p.Edit00_00_00_00.set_value("Edit");
                p.Edit00_00_00_00.move("600","259","120","40",null,null);

                p.ImageViewer00_00_00_00.set_taborder("23");
                p.ImageViewer00_00_00_00.set_image("url(\'imagerc::img_WF_sample02.png\')");
                p.ImageViewer00_00_00_00.move("435","259","160","40",null,null);

                p.Static01_00_00_00.set_taborder("24");
                p.Static01_00_00_00.set_text("Static");
                p.Static01_00_00_00.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
                p.Static01_00_00_00.set_textAlign("center");
                p.Static01_00_00_00.set_color("#111111");
                p.Static01_00_00_00.move("310","259","120","40",null,null);

                p.Calendar00_00_00_00.set_taborder("25");
                p.Calendar00_00_00_00.move("155","259","150","40",null,null);

                p.Button02_01_00_00_00.set_taborder("26");
                p.Button02_01_00_00_00.set_text("Button");
                p.Button02_01_00_00_00.set_cssclass("btn_WF_basic02");
                p.Button02_01_00_00_00.move("30","259","120","40",null,null);
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
                p.Button02_01.move("20","118","120","40",null,null);
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,950,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("comp-Dynamically generate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
