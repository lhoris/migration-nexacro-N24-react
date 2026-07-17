(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Bottom");
            this.set_titletext("Form_Bottom");
            this.set_background("#2D345C");
            this.set_scrollbarsize("0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","40","64",null,"52","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서울시 강남구 봉은사로 617  I  대표이사 조강희  I   사업자등록번호 211086-61993  I  대표번호 02-2140-7700\r\nCOPYRIGHT© BY 2020 TOBESOFT.CO.LTD. ALL RIGHTS RESERVED");
            obj.set_cssclass("sta_BF_copyright");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","19.92%","15",null,"55","19.92%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","284","19","1","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Static01");
            obj.set_background("#868BA7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","7","15","120","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("투비소프트");
            obj.set_cssclass("btn_BF_link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","139","19","1","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Static01");
            obj.set_background("#868BA7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","152","15","120","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("TOBETONG");
            obj.set_cssclass("btn_BF_link");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","296","15","120","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("고객지원센터");
            obj.set_cssclass("btn_BF_link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","428","19","1","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Static01");
            obj.set_background("#868BA7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","440","15","120","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("교육신청");
            obj.set_cssclass("btn_BF_link");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","572","19","1","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Static01");
            obj.set_background("#868BA7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","584","15","179","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Technical Documents");
            obj.set_cssclass("btn_BF_link");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_00.set_taborder("3");
                p.Static01_00.set_text("Static01");
                p.Static01_00.set_background("#868BA7");
                p.Static01_00.move("284","19","1","16",null,null);

                p.Button00.set_taborder("0");
                p.Button00.set_text("투비소프트");
                p.Button00.set_cssclass("btn_BF_link");
                p.Button00.move("7","15","120","25",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("Static01");
                p.Static01.set_background("#868BA7");
                p.Static01.move("139","19","1","16",null,null);

                p.Button00_00.set_taborder("2");
                p.Button00_00.set_text("TOBETONG");
                p.Button00_00.set_cssclass("btn_BF_link");
                p.Button00_00.move("152","15","120","25",null,null);

                p.Button00_01.set_taborder("4");
                p.Button00_01.set_text("고객지원센터");
                p.Button00_01.set_cssclass("btn_BF_link");
                p.Button00_01.move("296","15","120","25",null,null);

                p.Static01_01.set_taborder("5");
                p.Static01_01.set_text("Static01");
                p.Static01_01.set_background("#868BA7");
                p.Static01_01.move("428","19","1","16",null,null);

                p.Button00_00_00.set_taborder("6");
                p.Button00_00_00.set_text("교육신청");
                p.Button00_00_00.set_cssclass("btn_BF_link");
                p.Button00_00_00.move("440","15","120","25",null,null);

                p.Static01_00_00.set_taborder("7");
                p.Static01_00_00.set_text("Static01");
                p.Static01_00_00.set_background("#868BA7");
                p.Static01_00_00.move("572","19","1","16",null,null);

                p.Button00_00_00_00.set_taborder("8");
                p.Button00_00_00_00.set_text("Technical Documents");
                p.Button00_00_00_00.set_cssclass("btn_BF_link");
                p.Button00_00_00_00.move("584","15","179","25",null,null);
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
                p.Button00.set_cssclass("btn_MBF_link");
                p.Button00.move("0","5",null,"25","Static01_00:10",null);

                p.Button00_00.set_cssclass("btn_MBF_link");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("73","25","100","25",null,null);

                p.Button00_01.set_cssclass("btn_MBF_link");
                p.Button00_01.set_text("고객지원센터");
                p.Button00_01.move("Static01_00:10","5",null,"25","0",null);

                p.Button00_00_00.set_cssclass("btn_MBF_link");
                p.Button00_00_00.set_text("교육신청");
                p.Button00_00_00.set_visible("false");
                p.Button00_00_00.move("180","25","100","25",null,null);

                p.Static01.set_visible("false");
                p.Static01.move("69","29","1","16",null,null);

                p.Static01_00.move("50.00%","9","1","16",null,null);

                p.Static01_01.set_visible("false");
                p.Static01_01.move("176","29","1","16",null,null);

                p.Static01_00_00.set_visible("false");
                p.Static01_00_00.move("283","29","1","16",null,null);

                p.Button00_00_00_00.set_cssclass("btn_MBF_link");
                p.Button00_00_00_00.set_visible("false");
                p.Button00_00_00_00.move("287","25","130","25",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,140,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Bottom");
                p.set_background("#2D345C");
                p.set_scrollbarsize("0");

                p.Static00.set_taborder("0");
                p.Static00.set_text("서울시 강남구 봉은사로 617  I  대표이사 조강희  I   사업자등록번호 211086-61993  I  대표번호 02-2140-7700\r\nCOPYRIGHT© BY 2020 TOBESOFT.CO.LTD. ALL RIGHTS RESERVED");
                p.Static00.set_cssclass("sta_BF_copyright");
                p.Static00.move("40","64",null,"52","40",null);

                p.Div00.set_taborder("1");
                p.Div00.set_text("Div00");
                p.Div00.set_background("transparent");
                p.Div00.move("19.92%","15",null,"55","19.92%",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,140,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_text("Div00");
                p.Div00.move("0","15",null,"59","0",null);

                p.Static00.set_text("서울시 강남구 봉은사로 617  I  02-2140-7700\r\nCOPYRIGHT©TOBESOFT.CO.LTD. ALL RIGHTS RESERVED");
                p.Static00.move("0","64",null,"52","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Bottom.xfdl", function() {

        this.Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Form_Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
