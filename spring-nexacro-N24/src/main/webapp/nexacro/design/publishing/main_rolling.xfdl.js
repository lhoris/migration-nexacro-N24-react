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
            if (Form == this.constructor)
            {
                this._setFormPosition(1263,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">test1</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">test2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","40","130","410","70",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid Component");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","45","213","465","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("The text about Grid Component function for information.\r\nDescription text area is here");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","45","280","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Read More");
            obj.set_cssclass("sta_WF_mainBtn01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"290","150","50","338",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Read More");
            obj.set_cssclass("sta_WF_mainBtn01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"90","700","480","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'imagerc::Main/img_WF_main01.gif\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"130","410","70","83",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Grid Component");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"213","465","60","23",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02",null,"213","465","60","63",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","30","90","700","480",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'imagerc::Main/img_WF_main02.gif\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","55","130","410","70",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Grid Component");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","60","213","465","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","60","290","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Read More");
            obj.set_cssclass("sta_WF_mainBtn01");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01",null,"90","700","480","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_image("url(\'imagerc::Main/img_WF_main03.gif\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02",null,"130","410","70","123",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Grid Component");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","735","290","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Read More");
            obj.set_cssclass("sta_WF_mainBtn01");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_02","30","90","700","480",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_image("url(\'imagerc::Main/img_WF_main04.gif\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1263,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_stepitemgap("7");
                p.set_stepitemsize("15");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Grid Component");
                p.Static00.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00.set_fittocontents("height");
                p.Static00.move("40","130","410","70",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("The text about Grid Component function for information.\r\nDescription text area is here");
                p.Static01.set_fittocontents("height");
                p.Static01.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01.move("45","213","465","60",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("Read More");
                p.Button00.set_cssclass("sta_WF_mainBtn01");
                p.Button00.move("45","280","150","50",null,null);

                p.Button00_00.set_taborder("6");
                p.Button00_00.set_text("Read More");
                p.Button00_00.set_cssclass("sta_WF_mainBtn01");
                p.Button00_00.set_positionstep("1");
                p.Button00_00.move(null,"290","150","50","338",null);

                p.ImageViewer00.set_taborder("3");
                p.ImageViewer00.set_image("url(\'imagerc::Main/img_WF_main01.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00.move(null,"90","700","480","30",null);

                p.Static00_00.set_taborder("4");
                p.Static00_00.set_text("Grid Component");
                p.Static00_00.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.set_positionstep("1");
                p.Static00_00.move(null,"130","410","70","83",null);

                p.Static01_00.set_taborder("5");
                p.Static01_00.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
                p.Static01_00.set_fittocontents("height");
                p.Static01_00.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01_00.set_positionstep("1");
                p.Static01_00.move(null,"213","465","60","23",null);

                p.Static01_02.set_taborder("13");
                p.Static01_02.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
                p.Static01_02.set_fittocontents("height");
                p.Static01_02.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01_02.set_positionstep("3");
                p.Static01_02.move(null,"213","465","60","63",null);

                p.ImageViewer00_00.set_taborder("7");
                p.ImageViewer00_00.set_image("url(\'imagerc::Main/img_WF_main02.gif\')");
                p.ImageViewer00_00.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00_00.set_positionstep("1");
                p.ImageViewer00_00.move("30","90","700","480",null,null);

                p.Static00_01.set_taborder("8");
                p.Static00_01.set_text("Grid Component");
                p.Static00_01.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00_01.set_fittocontents("height");
                p.Static00_01.set_positionstep("2");
                p.Static00_01.move("55","130","410","70",null,null);

                p.Static01_01.set_taborder("9");
                p.Static01_01.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
                p.Static01_01.set_fittocontents("height");
                p.Static01_01.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01_01.set_positionstep("2");
                p.Static01_01.move("60","213","465","60",null,null);

                p.Button00_01.set_taborder("10");
                p.Button00_01.set_text("Read More");
                p.Button00_01.set_cssclass("sta_WF_mainBtn01");
                p.Button00_01.set_positionstep("2");
                p.Button00_01.move("60","290","150","50",null,null);

                p.ImageViewer00_01.set_taborder("11");
                p.ImageViewer00_01.set_image("url(\'imagerc::Main/img_WF_main03.gif\')");
                p.ImageViewer00_01.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00_01.set_positionstep("2");
                p.ImageViewer00_01.move(null,"90","700","480","30",null);

                p.Static00_02.set_taborder("12");
                p.Static00_02.set_text("Grid Component");
                p.Static00_02.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00_02.set_fittocontents("height");
                p.Static00_02.set_positionstep("3");
                p.Static00_02.move(null,"130","410","70","123",null);

                p.Button00_02.set_taborder("14");
                p.Button00_02.set_text("Read More");
                p.Button00_02.set_cssclass("sta_WF_mainBtn01");
                p.Button00_02.set_positionstep("3");
                p.Button00_02.move("735","290","150","50",null,null);

                p.ImageViewer00_02.set_taborder("15");
                p.ImageViewer00_02.set_image("url(\'imagerc::Main/img_WF_main04.gif\')");
                p.ImageViewer00_02.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00_02.set_positionstep("3");
                p.ImageViewer00_02.move("30","90","700","480",null,null);
            	}
            );
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_02.set_positionstep("1");
                p.Static00_02.move("30","30",null,"70","30",null);

                p.ImageViewer00_00.set_positionstep("1");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.move("30","230",null,"430","30",null);

                p.ImageViewer00.set_text("");
                p.ImageViewer00.set_stretch("fixaspectratio");
                p.ImageViewer00.move("30","Button00_00:10",null,"430","30",null);

                p.ImageViewer00_02.set_positionstep("3");
                p.ImageViewer00_02.set_text("");
                p.ImageViewer00_02.set_stretch("fixaspectratio");
                p.ImageViewer00_02.move("30","230",null,"430","30",null);

                p.ImageViewer00_01.set_positionstep("2");
                p.ImageViewer00_01.set_stretch("fixaspectratio");
                p.ImageViewer00_01.move("30","230",null,"430","30",null);

                p.Button00_01.set_positionstep("2");
                p.Button00_01.move("30","170","150","50",null,null);

                p.Button00_00.set_positionstep("0");
                p.Button00_00.move("30","170","150","50",null,null);

                p.Button00.set_positionstep("1");
                p.Button00.move("30","170","150","50",null,null);

                p.Static01_02.set_positionstep("0");
                p.Static01_02.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
                p.Static01_02.move("30","100","420","60",null,null);

                p.Static01_01.set_positionstep("2");
                p.Static01_01.set_text("The text about Grid Component function for information.\r\nDescription text area is here.");
                p.Static01_01.move("30","100",null,"60","30",null);

                p.Static01_00.set_positionstep("1");
                p.Static01_00.move("30","100",null,"60","30",null);

                p.Static01.set_positionstep("3");
                p.Static01.move("30","100",null,"60","30",null);

                p.Static00_01.set_positionstep("3");
                p.Static00_01.move("30","30",null,"70","30",null);

                p.Static00_00.set_positionstep("0");
                p.Static00_00.move("30","30",null,"70","30",null);

                p.Static00.set_positionstep("2");
                p.Static00.move("30","30",null,"70","30",null);

                p.Button00_02.move("30","170","150","50",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("4");
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
        this.loadIncludeScript("main_rolling.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
