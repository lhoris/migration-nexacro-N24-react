(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main_realosmu");
            this.set_titletext("New Form");
            this.set_background("#FBFBFE");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,1420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_conBox02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","29","440","70",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Real OSMU Solution");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","112","435","97",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("osmu.desc");
            obj.set_text("TEXT(\"osmu.desc\")");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"Static01:4","425","350","27",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::Main/img_WF_mainPR01.png\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_background("transparent");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","21","ImageViewer00:46","430","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"ide\",\"개발 생산성을 높이는 IDE\")");
            obj.set_cssclass("sta_WF_mainvisualTitle");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("ide");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","19","Static00_00:13","440","97",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_mainvisualTxt");
            obj.set_wordWrap("english");
            obj.getSetter("messageid").set("ide.desc");
            obj.set_text("TEXT(\"ide.desc\")");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00",null,"Static01_00:18","401","372","32",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'imagerc::Main/img_WF_mainPR03.png\')");
            obj.set_cssclass("img_WF_mainvisualImg");
            obj.set_text("");
            obj.set_background("transparent");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","1152","198","77",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("background color : \r\n#FBFBFE");
            obj.set_background("palegreen");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,1420,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_background("#FBFBFE");

                p.Static03.set_taborder("7");
                p.Static03.set_cssclass("sta_WF_conBox02");
                p.Static03.move("0","0",null,null,"0","0");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Real OSMU Solution");
                p.Static00.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00.set_fittocontents("height");
                p.Static00.move("21","29","440","70",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01.set_wordWrap("english");
                p.Static01.set_fittocontents("height");
                p.Static01.getSetter("messageid").set("osmu.desc");
                p.Static01.set_text("TEXT(\"osmu.desc\")");
                p.Static01.move("25","112","435","97",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'imagerc::Main/img_WF_mainPR01.png\')");
                p.ImageViewer00.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00.set_background("transparent");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.move(null,"Static01:4","425","350","27",null);

                p.Static00_00.set_taborder("3");
                p.Static00_00.set_text("TEXT(\"ide\",\"개발 생산성을 높이는 IDE\")");
                p.Static00_00.set_cssclass("sta_WF_mainvisualTitle");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.getSetter("messageid").set("ide");
                p.Static00_00.set_wordWrap("english");
                p.Static00_00.move("21","ImageViewer00:46","430","70",null,null);

                p.Static01_00.set_taborder("4");
                p.Static01_00.set_fittocontents("height");
                p.Static01_00.set_cssclass("sta_WF_mainvisualTxt");
                p.Static01_00.set_wordWrap("english");
                p.Static01_00.getSetter("messageid").set("ide.desc");
                p.Static01_00.set_text("TEXT(\"ide.desc\")");
                p.Static01_00.move("19","Static00_00:13","440","97",null,null);

                p.ImageViewer00_00.set_taborder("5");
                p.ImageViewer00_00.set_image("url(\'imagerc::Main/img_WF_mainPR03.png\')");
                p.ImageViewer00_00.set_cssclass("img_WF_mainvisualImg");
                p.ImageViewer00_00.set_text("");
                p.ImageViewer00_00.set_background("transparent");
                p.ImageViewer00_00.set_stretch("fit");
                p.ImageViewer00_00.move(null,"Static01_00:18","401","372","32",null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("background color : \r\n#FBFBFE");
                p.Static02.set_background("palegreen");
                p.Static02.set_visible("false");
                p.Static02.move("0","1152","198","77",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",1263,1150,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("40","200","490","70",null,null);

                p.Static01.set_wordWrap("english");
                p.Static01.set_text("TEXT(\"osmu.desc\")");
                p.Static01.move("40","283","530","97",null,null);

                p.ImageViewer00.set_stretch("none");
                p.ImageViewer00.move(null,"70","640","540","20",null);

                p.Static00_00.set_wordWrap("none");
                p.Static00_00.set_text("TEXT(\"ide\")");
                p.Static00_00.move("673","726","580","70",null,null);

                p.Static01_00.set_text("TEXT(\"ide.desc\")");
                p.Static01_00.move("673","809","557","97",null,null);

                p.ImageViewer00_00.set_stretch("none");
                p.ImageViewer00_00.move("20","596","490","460",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("main_realosmu.xfdl", function() {

        this.main_realosmu_onload = function(obj,e)
        {
        	/* AS-IS 다국어 처리 */
        	//nexacro.applyI18n(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_realosmu_onload,this);
        };
        this.loadIncludeScript("main_realosmu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
