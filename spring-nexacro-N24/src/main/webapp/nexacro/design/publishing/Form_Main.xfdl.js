(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_All");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1263,3410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Top");
            obj.set_url("design::publishing/Form_Top.xfdl");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,1px solid #8D8D8D");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1290","0","264","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("background : #F5F7FC\r\n-nexa-border : \r\n0px none,0px none,1px solid #8D8D8D");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,1px solid #8D8D8D");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","80","1263","600",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","90","410","70",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Grid Component");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","45","173","410","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","45","250","150","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Read More");
            obj.set_cssclass("sta_WF_mainBtn01");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"40","620","480","40",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_image("url(\'imagerc::Main/img_WF_mainTest01.gif\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","385",null,"120","5",null,"20",null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_border("0px none");
            obj.set_cssclass("btn_WF_mainPageS");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_00","Button01:3",null,"120","5",null,"20",null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_border("0px none");
            obj.set_cssclass("btn_WF_mainPage");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_01","Button01_00:3",null,"120","5",null,"20",null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_border("0px none");
            obj.set_cssclass("btn_WF_mainPage");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_02","Button01_01:3",null,"120","5",null,"20",null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_border("0px none");
            obj.set_cssclass("btn_WF_mainPage");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","680","1263","560",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","481","30","300","60",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Key Menu");
            obj.set_cssclass("sta_WF_mainboxTitle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","5","126","300","360",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("sta_WF_mainbox01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","322","126","300","360",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("sta_WF_mainbox02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01","639","126","300","360",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("sta_WF_mainbox03");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_02",null,"126","300","360","7",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("sta_WF_mainbox04");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","0","1240","1263","580",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","190","490","70",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("Real OSMU Solution");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","45","273","525","97",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("현재는 탁월한 고객 경험이 기업 가치를 결정합니다.\r\n사용자중심의 IT환경 구축을 실현해 줄 유일한 Real OSMU 솔루션!\r\n웹과 네이티브의 경계를 허물고 하나의 소스로 모든 비즈니스 환경에 완벽하게 대응할 수 있습니다.");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"60","620","502","40",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::Main/img_WF_mainPR01.png\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div03_00","0","1820","1263","600",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","673","150","580","70",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("0");
            obj.set_text("최고의 개발편의와 생산성");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static01","673","233","550","97",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("1");
            obj.set_text("사용성 모델 기반의 분석과 실제 사용자 테스트를 거쳐 최고의 개발 도구로\r\n새롭게 태어난 넥사크로 스튜디오는 개발자의 편의성을 높이는 기능을 대폭 강화하고 디자이너, 퍼블리셔 등 역할에 따른 개별 인터페이스를 제공합니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.set_wordWrap("char");
            this.Div03_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"20","620","480","625",null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::Main/img_WF_mainPR02.png\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Div("Div04","0","2820","1263","580",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","200","35",null,"80","200",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("Major Customers(Partners)");
            obj.set_cssclass("sta_WF_mainboxTxt05");
            obj.set_fittocontents("height");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","111","175","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_reference01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00","326","175","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_reference02");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01","541","175","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_reference03");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_02","756","175","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_reference04");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_03","971","175","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_reference05");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_04","111","255","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_reference06");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","326","255","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_reference07");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","541","255","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_reference08");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","756","255","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_reference09");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_03_00","971","255","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_reference10");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_05","111","335","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_reference11");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","326","335","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_reference12");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","541","335","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_reference13");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","756","335","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_reference14");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_03_01","971","335","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_reference15");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","111","415","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_reference16");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","326","415","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_reference17");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","541","415","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_reference18");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","756","415","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_reference19");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00","971","415","180","60",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_reference20");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div04_00","0","2420","1263","400",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#59618E");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","250","40",null,"80","250",null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("0");
            obj.set_text("TOBESOFT By the Numbers");
            obj.set_cssclass("sta_WF_mainboxTxt06");
            obj.set_fittocontents("height");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static01","110","175","250","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("1");
            obj.set_text("Korea");
            obj.set_cssclass("sta_WF_mainboxTxt03");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","374","175","250","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("2");
            obj.set_text("History");
            obj.set_cssclass("sta_WF_mainboxTxt03");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","638","175","250","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("3");
            obj.set_text("Nexacro\r\nReference");
            obj.set_cssclass("sta_WF_mainboxTxt03");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static02","163","253","80","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("4");
            obj.set_text("No.");
            obj.set_cssclass("sta_WF_mainboxTxt06");
            obj.set_textAlign("right");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","395","248","80","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_mainboxTxt04");
            obj.set_textAlign("right");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static02_01","638","248","250","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("6");
            obj.set_text("1,400");
            obj.set_cssclass("sta_WF_mainboxTxt04");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","902","175","250","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("7");
            obj.set_text("Tobesoft\r\nReference");
            obj.set_cssclass("sta_WF_mainboxTxt03");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","902","248","250","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("8");
            obj.set_text("4,600");
            obj.set_cssclass("sta_WF_mainboxTxt04");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static02_02","253","248","60","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("9");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_mainboxTxt04");
            obj.set_textAlign("left");
            this.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","495","253","100","60",null,null,null,null,null,null,this.Div04_00.form);
            obj.set_taborder("10");
            obj.set_text("years");
            obj.set_cssclass("sta_WF_mainboxTxt06");
            obj.set_textAlign("left");
            this.Div04_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Grid Component");
                p.Static00.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00.set_fittocontents("height");
                p.Static00.move("40","90","410","70",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
                p.Static01.set_fittocontents("height");
                p.Static01.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01.move("45","173","410","60",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("Read More");
                p.Button00.set_cssclass("sta_WF_mainBtn01");
                p.Button00.move("45","250","150","50",null,null);

                p.ImageViewer00.set_taborder("3");
                p.ImageViewer00.set_image("url(\'imagerc::Main/img_WF_mainTest01.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00.move(null,"40","620","480","40",null);

                p.Button01.set_taborder("4");
                p.Button01.set_border("0px none");
                p.Button01.set_cssclass("btn_WF_mainPageS");
                p.Button01.move("385",null,"120","5",null,"20");

                p.Button01_00.set_taborder("5");
                p.Button01_00.set_border("0px none");
                p.Button01_00.set_cssclass("btn_WF_mainPage");
                p.Button01_00.move("Button01:3",null,"120","5",null,"20");

                p.Button01_01.set_taborder("6");
                p.Button01_01.set_border("0px none");
                p.Button01_01.set_cssclass("btn_WF_mainPage");
                p.Button01_01.move("Button01_00:3",null,"120","5",null,"20");

                p.Button01_02.set_taborder("7");
                p.Button01_02.set_border("0px none");
                p.Button01_02.set_cssclass("btn_WF_mainPage");
                p.Button01_02.move("Button01_01:3",null,"120","5",null,"20");
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
                p.Static00.set_taborder("0");
                p.Static00.set_text("Key Menu");
                p.Static00.set_cssclass("sta_WF_mainboxTitle");
                p.Static00.move("481","30","300","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_border("1px solid #dddddd");
                p.Static01.set_cssclass("sta_WF_mainbox01");
                p.Static01.move("5","126","300","360",null,null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_border("1px solid #dddddd");
                p.Static01_00.set_cssclass("sta_WF_mainbox02");
                p.Static01_00.move("322","126","300","360",null,null);

                p.Static01_01.set_taborder("3");
                p.Static01_01.set_border("1px solid #dddddd");
                p.Static01_01.set_cssclass("sta_WF_mainbox03");
                p.Static01_01.move("639","126","300","360",null,null);

                p.Static01_02.set_taborder("4");
                p.Static01_02.set_border("1px solid #dddddd");
                p.Static01_02.set_cssclass("sta_WF_mainbox04");
                p.Static01_02.move(null,"126","300","360","7",null);
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
            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Real OSMU Solution");
                p.Static00.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00.set_fittocontents("height");
                p.Static00.move("40","190","490","70",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("현재는 탁월한 고객 경험이 기업 가치를 결정합니다.\r\n사용자중심의 IT환경 구축을 실현해 줄 유일한 Real OSMU 솔루션!\r\n웹과 네이티브의 경계를 허물고 하나의 소스로 모든 비즈니스 환경에 완벽하게 대응할 수 있습니다.");
                p.Static01.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01.set_wordWrap("char");
                p.Static01.set_fittocontents("height");
                p.Static01.move("45","273","525","97",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'imagerc::Main/img_WF_mainPR01.png\')");
                p.ImageViewer00.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00.move(null,"60","620","502","40",null);
            	}
            );
            this.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_00.form
            obj = new Layout("default","",0,0,this.Div03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("최고의 개발편의와 생산성");
                p.Static00.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00.set_fittocontents("height");
                p.Static00.move("673","150","580","70",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("사용성 모델 기반의 분석과 실제 사용자 테스트를 거쳐 최고의 개발 도구로\r\n새롭게 태어난 넥사크로 스튜디오는 개발자의 편의성을 높이는 기능을 대폭 강화하고 디자이너, 퍼블리셔 등 역할에 따른 개별 인터페이스를 제공합니다.");
                p.Static01.set_fittocontents("height");
                p.Static01.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01.set_wordWrap("char");
                p.Static01.move("673","233","550","97",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'imagerc::Main/img_WF_mainPR02.png\')");
                p.ImageViewer00.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00.move(null,"20","620","480","625",null);
            	}
            );
            this.Div03_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_00.form
            obj = new Layout("Layout0","",0,0,this.Div03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div03_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Major Customers(Partners)");
                p.Static00.set_cssclass("sta_WF_mainboxTxt05");
                p.Static00.set_fittocontents("height");
                p.Static00.move("200","35",null,"80","200",null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_reference01");
                p.Static01.move("111","175","180","60",null,null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_cssclass("sta_WF_reference02");
                p.Static01_00.move("326","175","180","60",null,null);

                p.Static01_01.set_taborder("3");
                p.Static01_01.set_cssclass("sta_WF_reference03");
                p.Static01_01.move("541","175","180","60",null,null);

                p.Static01_02.set_taborder("4");
                p.Static01_02.set_cssclass("sta_WF_reference04");
                p.Static01_02.move("756","175","180","60",null,null);

                p.Static01_03.set_taborder("5");
                p.Static01_03.set_cssclass("sta_WF_reference05");
                p.Static01_03.move("971","175","180","60",null,null);

                p.Static01_04.set_taborder("6");
                p.Static01_04.set_cssclass("sta_WF_reference06");
                p.Static01_04.move("111","255","180","60",null,null);

                p.Static01_00_00.set_taborder("7");
                p.Static01_00_00.set_cssclass("sta_WF_reference07");
                p.Static01_00_00.move("326","255","180","60",null,null);

                p.Static01_01_00.set_taborder("8");
                p.Static01_01_00.set_cssclass("sta_WF_reference08");
                p.Static01_01_00.move("541","255","180","60",null,null);

                p.Static01_02_00.set_taborder("9");
                p.Static01_02_00.set_cssclass("sta_WF_reference09");
                p.Static01_02_00.move("756","255","180","60",null,null);

                p.Static01_03_00.set_taborder("10");
                p.Static01_03_00.set_cssclass("sta_WF_reference10");
                p.Static01_03_00.move("971","255","180","60",null,null);

                p.Static01_05.set_taborder("11");
                p.Static01_05.set_cssclass("sta_WF_reference11");
                p.Static01_05.move("111","335","180","60",null,null);

                p.Static01_00_01.set_taborder("12");
                p.Static01_00_01.set_cssclass("sta_WF_reference12");
                p.Static01_00_01.move("326","335","180","60",null,null);

                p.Static01_01_01.set_taborder("13");
                p.Static01_01_01.set_cssclass("sta_WF_reference13");
                p.Static01_01_01.move("541","335","180","60",null,null);

                p.Static01_02_01.set_taborder("14");
                p.Static01_02_01.set_cssclass("sta_WF_reference14");
                p.Static01_02_01.move("756","335","180","60",null,null);

                p.Static01_03_01.set_taborder("15");
                p.Static01_03_01.set_cssclass("sta_WF_reference15");
                p.Static01_03_01.move("971","335","180","60",null,null);

                p.Static01_04_00.set_taborder("16");
                p.Static01_04_00.set_cssclass("sta_WF_reference16");
                p.Static01_04_00.move("111","415","180","60",null,null);

                p.Static01_00_00_00.set_taborder("17");
                p.Static01_00_00_00.set_cssclass("sta_WF_reference17");
                p.Static01_00_00_00.move("326","415","180","60",null,null);

                p.Static01_01_00_00.set_taborder("18");
                p.Static01_01_00_00.set_cssclass("sta_WF_reference18");
                p.Static01_01_00_00.move("541","415","180","60",null,null);

                p.Static01_02_00_00.set_taborder("19");
                p.Static01_02_00_00.set_cssclass("sta_WF_reference19");
                p.Static01_02_00_00.move("756","415","180","60",null,null);

                p.Static01_03_00_00.set_taborder("20");
                p.Static01_03_00_00.set_cssclass("sta_WF_reference20");
                p.Static01_03_00_00.move("971","415","180","60",null,null);
            	}
            );
            this.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div04.form
            obj = new Layout("Layout0","",0,0,this.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div04_00.form
            obj = new Layout("default","",0,0,this.Div04_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("TOBESOFT By the Numbers");
                p.Static00.set_cssclass("sta_WF_mainboxTxt06");
                p.Static00.set_fittocontents("height");
                p.Static00.move("250","40",null,"80","250",null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("Korea");
                p.Static01.set_cssclass("sta_WF_mainboxTxt03");
                p.Static01.move("110","175","250","60",null,null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_text("History");
                p.Static01_00.set_cssclass("sta_WF_mainboxTxt03");
                p.Static01_00.move("374","175","250","60",null,null);

                p.Static01_01.set_taborder("3");
                p.Static01_01.set_text("Nexacro\r\nReference");
                p.Static01_01.set_cssclass("sta_WF_mainboxTxt03");
                p.Static01_01.move("638","175","250","60",null,null);

                p.Static02.set_taborder("4");
                p.Static02.set_text("No.");
                p.Static02.set_cssclass("sta_WF_mainboxTxt06");
                p.Static02.set_textAlign("right");
                p.Static02.move("163","253","80","60",null,null);

                p.Static02_00.set_taborder("5");
                p.Static02_00.set_text("20");
                p.Static02_00.set_cssclass("sta_WF_mainboxTxt04");
                p.Static02_00.set_textAlign("right");
                p.Static02_00.move("395","248","80","60",null,null);

                p.Static02_01.set_taborder("6");
                p.Static02_01.set_text("1,400");
                p.Static02_01.set_cssclass("sta_WF_mainboxTxt04");
                p.Static02_01.move("638","248","250","60",null,null);

                p.Static01_01_00.set_taborder("7");
                p.Static01_01_00.set_text("Tobesoft\r\nReference");
                p.Static01_01_00.set_cssclass("sta_WF_mainboxTxt03");
                p.Static01_01_00.move("902","175","250","60",null,null);

                p.Static02_01_00.set_taborder("8");
                p.Static02_01_00.set_text("4,600");
                p.Static02_01_00.set_cssclass("sta_WF_mainboxTxt04");
                p.Static02_01_00.move("902","248","250","60",null,null);

                p.Static02_02.set_taborder("9");
                p.Static02_02.set_text("1");
                p.Static02_02.set_cssclass("sta_WF_mainboxTxt04");
                p.Static02_02.set_textAlign("left");
                p.Static02_02.move("253","248","60","60",null,null);

                p.Static02_00_00.set_taborder("10");
                p.Static02_00_00.set_text("years");
                p.Static02_00_00.set_cssclass("sta_WF_mainboxTxt06");
                p.Static02_00_00.set_textAlign("left");
                p.Static02_00_00.move("495","253","100","60",null,null);
            	}
            );
            this.Div04_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div04_00.form
            obj = new Layout("Layout0","",0,0,this.Div04_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div04_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1263,3410,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Div00.set_taborder("0");
                p.Div00.set_text("Top");
                p.Div00.set_url("design::publishing/Form_Top.xfdl");
                p.Div00.set_background("#ffffff");
                p.Div00.set_border("0px none,0px none,1px solid #8D8D8D");
                p.Div00.move("0","0",null,"80","0",null);

                p.Static02.set_taborder("1");
                p.Static02.set_text("background : #F5F7FC\r\n-nexa-border : \r\n0px none,0px none,1px solid #8D8D8D");
                p.Static02.set_background("#ffffff");
                p.Static02.set_border("0px none,0px none,1px solid #8D8D8D");
                p.Static02.set_visible("false");
                p.Static02.move("1290","0","264","80",null,null);

                p.Div01.set_taborder("2");
                p.Div01.set_text("Div01");
                p.Div01.move("0","80","1263","600",null,null);

                p.Div02.set_taborder("3");
                p.Div02.set_background("aliceblue");
                p.Div02.move("0","680","1263","560",null,null);

                p.Div03.set_taborder("4");
                p.Div03.set_text("");
                p.Div03.move("0","1240","1263","580",null,null);

                p.Div03_00.set_taborder("5");
                p.Div03_00.move("0","1820","1263","600",null,null);

                p.Div04.set_taborder("6");
                p.Div04.set_text("");
                p.Div04.move("0","2820","1263","580",null,null);

                p.Div04_00.set_taborder("7");
                p.Div04_00.set_background("#59618E");
                p.Div04_00.move("0","2420","1263","400",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","design::publishing/Form_Top.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
