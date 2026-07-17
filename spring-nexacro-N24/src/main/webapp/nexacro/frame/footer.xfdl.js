(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("footer");
            this.set_background("#2D345C");
            this.set_scrollbarsize("0");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","10","38",null,"97","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"copyright.short\")");
            obj.set_cssclass("sta_BF_copyright");
            obj.getSetter("messageid").set("copyright.short");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","5",null,"59","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","50%","9","1","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_background("#868BA7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","5",null,"25","Static01:10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MBF_link");
            obj.getSetter("messageid").set("tobesoft");
            obj.set_text("TEXT(\"tobesoft\",\"TOBESOFT\")");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","609","29","1","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_background("#868BA7");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","768","29","1","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_background("#868BA7");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","Static02:15","25","128","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("PlayNexacro");
            obj.set_cssclass("btn_MBF_link");
            obj.set_visible("false");
            obj.getSetter("messageid").set("apply.playnexacro");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","504","29","1","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_background("#868BA7");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","Static04:15","25","74","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("TOBETONG");
            obj.set_cssclass("btn_MBF_link");
            obj.set_visible("false");
            obj.getSetter("messageid").set("tobetong");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","Static01:10","5",null,"25","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"support.center\",\"Support Center\")");
            obj.set_cssclass("btn_MBF_link");
            obj.getSetter("messageid").set("support.center");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04","Static03:15","25","140","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Technical Documents");
            obj.set_cssclass("btn_MBF_link");
            obj.set_visible("false");
            obj.getSetter("messageid").set("technical.documents");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("1");
                p.Static01.set_background("#868BA7");
                p.Static01.move("50%","9","1","16",null,null);

                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_MBF_link");
                p.Button00.getSetter("messageid").set("tobesoft");
                p.Button00.set_text("TEXT(\"tobesoft\",\"TOBESOFT\")");
                p.Button00.move("0","5",null,"25","Static01:10",null);

                p.Static02.set_taborder("3");
                p.Static02.set_background("#868BA7");
                p.Static02.set_visible("false");
                p.Static02.move("609","29","1","16",null,null);

                p.Static03.set_taborder("5");
                p.Static03.set_background("#868BA7");
                p.Static03.set_visible("false");
                p.Static03.move("768","29","1","16",null,null);

                p.Button03.set_taborder("6");
                p.Button03.set_text("PlayNexacro");
                p.Button03.set_cssclass("btn_MBF_link");
                p.Button03.set_visible("false");
                p.Button03.getSetter("messageid").set("apply.playnexacro");
                p.Button03.move("Static02:15","25","128","25",null,null);

                p.Static04.set_taborder("7");
                p.Static04.set_background("#868BA7");
                p.Static04.set_visible("false");
                p.Static04.move("504","29","1","16",null,null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("TOBETONG");
                p.Button01.set_cssclass("btn_MBF_link");
                p.Button01.set_visible("false");
                p.Button01.getSetter("messageid").set("tobetong");
                p.Button01.move("Static04:15","25","74","25",null,null);

                p.Button02.set_taborder("4");
                p.Button02.set_text("TEXT(\"support.center\",\"Support Center\")");
                p.Button02.set_cssclass("btn_MBF_link");
                p.Button02.getSetter("messageid").set("support.center");
                p.Button02.move("Static01:10","5",null,"25","0",null);

                p.Button04.set_taborder("8");
                p.Button04.set_text("Technical Documents");
                p.Button04.set_cssclass("btn_MBF_link");
                p.Button04.set_visible("false");
                p.Button04.getSetter("messageid").set("technical.documents");
                p.Button04.move("Static03:15","25","140","25",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("large","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_BF_link");
                p.Button00.move("27","15","86","25",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_background("#868BA7");
                p.Static01.move("133","19","1","16",null,null);

                p.Button01.set_taborder("2");
                p.Button01.set_cssclass("btn_BF_link");
                p.Button01.set_visible("true");
                p.Button01.set_text("TEXT(\"tobetong\",\"TOBETONG\")");
                p.Button01.move("Static01:20","15","90","25",null,null);

                p.Static02.set_taborder("3");
                p.Static02.set_background("#868BA7");
                p.Static02.set_visible("true");
                p.Static02.move("264","19","1","16",null,null);

                p.Button02.set_taborder("4");
                p.Button02.set_cssclass("btn_BF_link");
                p.Button02.set_text("TEXT(\"support.center\",\"Support Center\")");
                p.Button02.move("Static02:20","15","122","25",null,null);

                p.Static03.set_taborder("5");
                p.Static03.set_background("#868BA7");
                p.Static03.set_visible("true");
                p.Static03.move("427","19","1","16",null,null);

                p.Button03.set_taborder("6");
                p.Button03.set_cssclass("btn_BF_link");
                p.Button03.set_visible("true");
                p.Button03.set_text("TEXT(\"apply.playnexacro\",\"PlayNexacro\")");
                p.Button03.move("Static03:20","15","126","25",null,null);

                p.Static04.set_taborder("7");
                p.Static04.set_background("#868BA7");
                p.Static04.set_visible("true");
                p.Static04.move("594","19","1","16",null,null);

                p.Button04.set_taborder("8");
                p.Button04.set_cssclass("btn_BF_link");
                p.Button04.set_visible("true");
                p.Button04.set_text("TEXT(\"technical.documents\",\"Technical Documents\")");
                p.Button04.move("Static04:20","15","170","25",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,140,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_background("#2D345C");
                p.set_scrollbarsize("0");

                p.Static00.set_taborder("0");
                p.Static00.set_text("TEXT(\"copyright.short\")");
                p.Static00.set_cssclass("sta_BF_copyright");
                p.Static00.getSetter("messageid").set("copyright.short");
                p.Static00.set_wordWrap("char");
                p.Static00.move("10","38",null,"97","10",null);

                p.Div00.set_taborder("1");
                p.Div00.set_background("transparent");
                p.Div00.set_text("");
                p.Div00.move("0","5",null,"59","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",1263,140,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_BF_copyright");
                p.Static00.getSetter("messageid").set("copyright.long");
                p.Static00.set_text("TEXT(\"copyright.long\")");
                p.Static00.move("40","64",null,"72","40",null);

                p.Div00.set_taborder("1");
                p.Div00.set_background("transparent");
                p.Div00.set_text("");
                p.Div00.move("17.89%","15",null,"55","17.97%",null);
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
        this.registerScript("footer.xfdl", function() {

        this.footer_onload = function(obj,e)
        {
        	/* AS-IS 다국어 처리 */
        	//nexacro.applyI18n(this);
        };

        this.Div00_Button00_onclick = function(obj,e)
        {
        	const app = nexacro.getApplication();
        	const url = app.langCode=="en"?"http://www.nexacro.com/":"http://www.tobesoft.co.kr/";
        	system.execDefaultBrowser(url);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Link",
        			'event_label': 'Company',
        			'value': url
        		});
        	}
        };

        this.Div00_Button01_onclick = function(obj,e)
        {
        	const url = "http://tobetong.com/";
        	system.execDefaultBrowser(url);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Link",
        			'event_label': 'Tobetong',
        			'value': url
        		});
        	}
        };

        this.Div00_Button02_onclick = function(obj,e)
        {
        	const url = "http://support.tobesoft.co.kr/";
        	system.execDefaultBrowser(url);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Link",
        			'event_label': 'Support',
        			'value': url
        		});
        	}
        };

        this.Div00_Button03_onclick = function(obj,e)
        {
        	const url = "https://www.playnexacro.com/";
        	system.execDefaultBrowser(url);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Link",
        			'event_label': 'Education',
        			'value': url
        		});
        	}
        };

        this.Div00_Button04_onclick = function(obj,e)
        {
        	const url = "http://docs.tobesoft.com/";
        	system.execDefaultBrowser(url);

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'Button Click', {
        			'event_category': "Link",
        			'event_label': 'Technical Documents',
        			'value': url
        		});
        	}
        };

        this.footer_onsize = function(obj,e)
        {
        	//임시처리 - Div > Layout 이 여러개일 경우 컴포넌트 속성이 onsize 및 layoutchange 시 초기화됨(버그) tops 에 등록되어있는 부분

        	/* AS-IS 다국어 처리 */
        	//nexacro.applyI18n(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.footer_onload,this);
            this.addEventHandler("onsize",this.footer_onsize,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Button03.addEventHandler("onclick",this.Div00_Button03_onclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button02.addEventHandler("onclick",this.Div00_Button02_onclick,this);
            this.Div00.form.Button04.addEventHandler("onclick",this.Div00_Button04_onclick,this);
        };
        this.loadIncludeScript("footer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
