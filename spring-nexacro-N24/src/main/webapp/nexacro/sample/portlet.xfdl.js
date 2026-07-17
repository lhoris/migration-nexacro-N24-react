(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","20","20","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.portlet\",\"Portlet\")");
            obj.getSetter("messageid").set("sample.portlet");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_pageTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divPortBg","20","100",null,"730","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divTile1","0","1","180","510",null,null,null,null,null,null,this.divPortBg.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_portBox");
            this.divPortBg.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divPortBg.form.divTile1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_portBg01");
            obj.set_text("2021 Illuminating\r\n\r\na bright and cheerful yellow sparkling with vivacity, a warming yellow shade imbued with solar power.\r\n");
            obj.set_tabstop("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divPortBg.form.divTile1.addChild(obj.name, obj);

            obj = new Button("btnMove",null,null,"20","20","0","0",null,null,null,null,this.divPortBg.form.divTile1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_portMove");
            this.divPortBg.form.divTile1.addChild(obj.name, obj);

            obj = new Div("divTile2","190","1","249","250",null,null,null,null,null,null,this.divPortBg.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_portBox");
            this.divPortBg.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divPortBg.form.divTile2.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_portBg02");
            obj.set_text("2021 Ultimate Gray\r\n\r\nemblematic of solid and dependable elements which are everlasting and provide a firm foundation.");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divPortBg.form.divTile2.addChild(obj.name, obj);

            obj = new Button("btnMove",null,"0","20","20","0",null,null,null,null,null,this.divPortBg.form.divTile2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_portMove");
            this.divPortBg.form.divTile2.addChild(obj.name, obj);

            obj = new Div("divTile3","449","1","252","250",null,null,null,null,null,null,this.divPortBg.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_portBox");
            obj.set_text("div_WF_portBox");
            this.divPortBg.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divPortBg.form.divTile3.form);
            obj.set_taborder("0");
            obj.set_text("2020 Classic Blue\r\n\r\na timeless and calming color full of confidence, perfect to start the new decade.");
            obj.set_cssclass("btn_WF_portBg03");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divPortBg.form.divTile3.addChild(obj.name, obj);

            obj = new Button("btnMove",null,"0","20","20","0",null,null,null,null,null,this.divPortBg.form.divTile3.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_portMove");
            this.divPortBg.form.divTile3.addChild(obj.name, obj);

            obj = new Div("divTile4","711","1",null,"250","0",null,null,null,null,null,this.divPortBg.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_portBox");
            this.divPortBg.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divPortBg.form.divTile4.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_portBg04");
            obj.set_text("2019 Living Coral\r\n\r\nan animating and life-affirming coral hue with a golden undertone that energizes and enlivens with a softer edge.");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divPortBg.form.divTile4.addChild(obj.name, obj);

            obj = new Button("btnMove",null,"0","20","20","0",null,null,null,null,null,this.divPortBg.form.divTile4.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_portMove");
            this.divPortBg.form.divTile4.addChild(obj.name, obj);

            obj = new Div("divTile5","190","261","354","250",null,null,null,null,null,null,this.divPortBg.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_portBox");
            this.divPortBg.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divPortBg.form.divTile5.form);
            obj.set_taborder("0");
            obj.set_text("2018 Ultra Violet\r\n\r\nsuggests the mysteries of the cosmos, the intrigue of what lies ahead, and the discoveries beyond where we are now.");
            obj.set_cssclass("btn_WF_portBg05");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divPortBg.form.divTile5.addChild(obj.name, obj);

            obj = new Button("btnMove",null,null,"20","20","0","0",null,null,null,null,this.divPortBg.form.divTile5.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_portMove");
            this.divPortBg.form.divTile5.addChild(obj.name, obj);

            obj = new Div("divTile6","554","261",null,"250","0",null,null,null,null,null,this.divPortBg.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_portBox");
            this.divPortBg.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divPortBg.form.divTile6.form);
            obj.set_taborder("0");
            obj.set_text("2017 Greenery\r\n\r\na grassy fresh, revitalizing shade that reflected new beginnings.");
            obj.set_cssclass("btn_WF_portBg06");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divPortBg.form.divTile6.addChild(obj.name, obj);

            obj = new Button("btnMove",null,null,"20","20","0","0",null,null,null,null,this.divPortBg.form.divTile6.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_portMove");
            this.divPortBg.form.divTile6.addChild(obj.name, obj);

            obj = new Div("divTile7","0","521","471",null,null,"0",null,null,null,null,this.divPortBg.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_portBox");
            this.divPortBg.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divPortBg.form.divTile7.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_portBg07");
            obj.set_text("2016 Rose Quartz&Serenity\r\n\r\nbalance between a warmer embracing rose tone and the cooler tranquil blue, reflecting connection and wellness as well as a soothing sense of order and peace.");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divPortBg.form.divTile7.addChild(obj.name, obj);

            obj = new Button("btnMove",null,"0","20","20","0",null,null,null,null,null,this.divPortBg.form.divTile7.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_portMove");
            this.divPortBg.form.divTile7.addChild(obj.name, obj);

            obj = new Div("divTile8","481","521",null,null,"0","0",null,null,null,null,this.divPortBg.form);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_portBox");
            this.divPortBg.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divPortBg.form.divTile8.form);
            obj.set_taborder("0");
            obj.set_text("2015 Marsala\r\n\r\nthis tasteful hue embodies the satisfying richness of a fulfilling meal while its grounding red-brown roots emanate a sophisticated, natural earthiness.");
            obj.set_cssclass("btn_WF_portBg08");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divPortBg.form.divTile8.addChild(obj.name, obj);

            obj = new Button("btnMove",null,"0","20","20","0",null,null,null,null,null,this.divPortBg.form.divTile8.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_portMove");
            this.divPortBg.form.divTile8.addChild(obj.name, obj);

            obj = new Div("divMove","1037","113","173","328",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_portBox2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTile","0","0",null,null,"0","0",null,null,null,null,this.divMove.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_portBg01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_wordWrap("english");
            this.divMove.addChild(obj.name, obj);

            obj = new Static("Static02","20","62","439","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"comp.animation.circlemenu\",\"Title\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.animation.circlemenu");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"62","200","30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("PANTONE color of the year");
            obj.set_cssclass("sta_WF_rightTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPortBg.form.divTile1.form
            obj = new Layout("default","",0,0,this.divPortBg.form.divTile1.form,function(p){});
            this.divPortBg.form.divTile1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPortBg.form.divTile2.form
            obj = new Layout("default","",0,0,this.divPortBg.form.divTile2.form,function(p){});
            this.divPortBg.form.divTile2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPortBg.form.divTile3.form
            obj = new Layout("default","",0,0,this.divPortBg.form.divTile3.form,function(p){});
            this.divPortBg.form.divTile3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPortBg.form.divTile4.form
            obj = new Layout("default","",0,0,this.divPortBg.form.divTile4.form,function(p){});
            this.divPortBg.form.divTile4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPortBg.form.divTile5.form
            obj = new Layout("default","",0,0,this.divPortBg.form.divTile5.form,function(p){});
            this.divPortBg.form.divTile5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPortBg.form.divTile6.form
            obj = new Layout("default","",0,0,this.divPortBg.form.divTile6.form,function(p){});
            this.divPortBg.form.divTile6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPortBg.form.divTile7.form
            obj = new Layout("default","",0,0,this.divPortBg.form.divTile7.form,function(p){});
            this.divPortBg.form.divTile7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPortBg.form.divTile8.form
            obj = new Layout("default","",0,0,this.divPortBg.form.divTile8.form,function(p){});
            this.divPortBg.form.divTile8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPortBg.form
            obj = new Layout("default","",0,0,this.divPortBg.form,function(p){});
            this.divPortBg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMove.form
            obj = new Layout("default","",0,0,this.divMove.form,function(p){});
            this.divMove.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,840,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("portlet.xfdl", function() {
        this.fvObjAni = false;
        this.fvObjDrag = false;
        this.fvTimerIdx = 0;
        this.fvTimerMax = 30;
        this.fvObjFrom;
        this.fvObjTo;

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        this.form_ondrop = function(obj,e)
        {
        	if (this.fvObjAni == false)
        	{
        		this.fvObjFrom = e.userdata;
        		this.fvObjTo = e.fromobject.parent.parent;

        		if (this.fvObjTo.name.indexOf("divTile") == -1) {
        			return;
        		}

        		this.fvObjFrom.orgLeft = this.fvObjFrom.getOffsetLeft();
        		this.fvObjFrom.orgTop = this.fvObjFrom.getOffsetTop();
        		this.fvObjFrom.orgWidth = this.fvObjFrom.getOffsetWidth();
        		this.fvObjFrom.orgHeight = this.fvObjFrom.getOffsetHeight();

        		this.fvObjTo.orgLeft = this.fvObjTo.getOffsetLeft();
        		this.fvObjTo.orgTop = this.fvObjTo.getOffsetTop();
        		this.fvObjTo.orgWidth = this.fvObjTo.getOffsetWidth();
        		this.fvObjTo.orgHeight = this.fvObjTo.getOffsetHeight();

        		this.fvObjAni = true;
        		this.setTimer(1, 10);
        	}
        };

        this.form_ondragmove = function(obj,e)
        {
        	this.divMove.move(e.clientx + 10, e.clienty + 10);
        };

        this.form_onlbuttonup = function(obj,e)
        {
        	if (this.fvObjDrag == true) {
        		this.fvObjDrag = false;

        		this.fnRemoveDragObj();
        	}
        };

        this.form_ontimer = function(obj,e)
        {
        	if (e.timerid == 1)
        	{
        		this.fvTimerIdx++;

        		let nLeft1 = this.fnMoveAni(this.fvTimerIdx, this.fvObjFrom.orgLeft, this.fvObjTo.orgLeft - this.fvObjFrom.orgLeft, this.fvTimerMax);
        		let nTop1 = this.fnMoveAni(this.fvTimerIdx, this.fvObjFrom.orgTop, this.fvObjTo.orgTop - this.fvObjFrom.orgTop, this.fvTimerMax);
        		let nWidth1 = this.fnMoveAni(this.fvTimerIdx, this.fvObjFrom.orgWidth, this.fvObjTo.orgWidth - this.fvObjFrom.orgWidth, this.fvTimerMax);
        		let nHeight1 = this.fnMoveAni(this.fvTimerIdx, this.fvObjFrom.orgHeight, this.fvObjTo.orgHeight - this.fvObjFrom.orgHeight, this.fvTimerMax);

        		let nLeft2 = this.fnMoveAni(this.fvTimerIdx, this.fvObjTo.orgLeft, this.fvObjFrom.orgLeft - this.fvObjTo.orgLeft, this.fvTimerMax);
        		let nTop2 = this.fnMoveAni(this.fvTimerIdx, this.fvObjTo.orgTop, this.fvObjFrom.orgTop - this.fvObjTo.orgTop, this.fvTimerMax);
        		let nWidth2 = this.fnMoveAni(this.fvTimerIdx, this.fvObjTo.orgWidth, this.fvObjFrom.orgWidth - this.fvObjTo.orgWidth, this.fvTimerMax);
        		let nHeight2 = this.fnMoveAni(this.fvTimerIdx, this.fvObjTo.orgHeight, this.fvObjFrom.orgHeight - this.fvObjTo.orgHeight, this.fvTimerMax);

        		this.fvObjFrom.move(nLeft1, nTop1, nWidth1, nHeight1);
        		this.fvObjTo.move(nLeft2, nTop2, nWidth2, nHeight2);


        		if (this.fvTimerIdx == this.fvTimerMax) {
        			this.fvObjAni = false;
        			this.fvTimerIdx = 0;

        			this.killTimer(e.timerid);
        		}
        	}
        };

        this.fnComBtnOnDrag = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnMove" :
        		case "btnTile" :
        			this.fvObjDrag = true;
        			e.userdata = obj.parent.parent;

        			this.fnMakeDragObj(obj.parent);

        			return true;
        			break;
        	}
        };

        this.fnMakeDragObj = function(obj)
        {
        	let nWidth = obj.getOffsetWidth();
        	let nHeight = obj.getOffsetHeight();
        	let sCssClass = obj.btnTile.cssclass;
        	let sMemo = obj.btnTile.text;

        	this.divMove.form.btnTile.cssclass = sCssClass;
        	this.divMove.form.btnTile.text = sMemo;

        	this.divMove.setOffsetWidth(nWidth);
        	this.divMove.setOffsetHeight(nHeight);
        	this.divMove.visible = true;
        };

        this.fnMoveAni = function(t, b, c, d)
        {
        	t /= d / 2;

        	if (t < 1) {
        		return c / 2 * t * t * t + b;
        	}

        	t -= 2;

        	return c / 2 * (t * t * t + 2) + b;
        };

        this.fnRemoveDragObj = function()
        {
        	this.divMove.visible = false;
        };

        this.form_ontouchend = function(obj,e)
        {
        	if (this.fvObjDrag == true) {
        		this.fvObjDrag = false;

        		this.fnRemoveDragObj();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("onlbuttonup",this.form_onlbuttonup,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("ontouchend",this.form_ontouchend,this);
            this.divPortBg.form.divTile1.form.btnTile.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile1.form.btnMove.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile2.form.btnTile.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile2.form.btnMove.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile3.form.btnTile.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile3.form.btnTile.addEventHandler("onclick",this.divTile3_stMemo_onclick,this);
            this.divPortBg.form.divTile3.form.btnMove.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile4.form.btnTile.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile4.form.btnMove.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile5.form.btnTile.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile5.form.btnMove.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile6.form.btnTile.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile6.form.btnMove.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile7.form.btnTile.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile7.form.btnMove.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile8.form.btnTile.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
            this.divPortBg.form.divTile8.form.btnMove.addEventHandler("ondrag",this.fnComBtnOnDrag,this);
        };
        this.loadIncludeScript("portlet.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
