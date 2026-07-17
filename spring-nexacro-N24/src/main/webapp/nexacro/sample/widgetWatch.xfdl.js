(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commWatch");
            this.set_titletext("시계");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_clockBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","77","160","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("LA");
            obj.set_cssclass("sta_WF_clockLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","16","160","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("베이징");
            obj.set_cssclass("sta_WF_clockLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","138","160","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("뉴욕");
            obj.set_cssclass("sta_WF_clockLabel");
            this.addChild(obj.name, obj);

            obj = new Static("stTime1","101","24","69","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("17:59");
            obj.set_cssclass("sta_WF_clockTime");
            this.addChild(obj.name, obj);

            obj = new Static("stTime2","101","85","69","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("16:59");
            obj.set_cssclass("sta_WF_clockTime");
            this.addChild(obj.name, obj);

            obj = new Static("stTime3","101","146","69","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("16:59");
            obj.set_cssclass("sta_WF_clockTime");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","194","42","120","120",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_clock01");
            this.addChild(obj.name, obj);

            obj = new Static("stTime","213","74","82","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("17:59");
            obj.set_cssclass("sta_WF_timer");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","214","118","81","19",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("SEOUL");
            obj.set_cssclass("sta_cm_text14CWhite");
            this.addChild(obj.name, obj);

            obj = new Button("btnMove","240","147","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_widgetMove03");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"5","30","30","5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_noteDel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",330,210,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("widgetWatch.xfdl", function() {
        this.fvbType = true;

        this.commWatch_onload = function(obj,e)
        {
        	this.fnCheckTime();
        	this.setTimer(1, 1000);
        };

        this.commWatch_ontimer = function(obj,e)
        {
        	if (e.timerid == 1) {
        		this.fnCheckTime();
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.parent.parent.fnCloseWidget(this.parent);
        };

        this.fnCheckTime = function()
        {
        	if (this.fvbType == true) {
        		this.fvbType=false;
        	} else {
        		this.fvbType=true;
        	}

        	this.stTime.text = this.gfnTodayTime(9);
        	this.stTime1.text = this.gfnTodayTime(8);
        	this.stTime2.text = this.gfnTodayTime(-8);
        	this.stTime3.text = this.gfnTodayTime(-5);
        };

        this.gfnTodayTime = function (nHour)
        {
        	let strToday = "";
        	let objDate  = new Date();

        	objDate.addHours(nHour);

        	let hh = objDate.getUTCHours();
        	let mm = objDate.getUTCMinutes();
        	let ss = objDate.getUTCSeconds();

        	let year  = objDate.getUTCFullYear();
        	let month = objDate.getUTCMonth() + 1;
        	let day   = objDate.getUTCDate();

        	if (this.fvbType == true) {
        		strToday = String(hh).padLeft(2, "0")+ ":" + String(mm).padLeft(2, "0") ; // +"."+ String(ss).padLeft(2, "0");
        	} else {
        		strToday = String(hh).padLeft(2, "0")+ " " + String(mm).padLeft(2, "0"); // +"."+ String(ss).padLeft(2, "0");
        	}

        	objDate  = null;

        	return strToday;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commWatch_onload,this);
            this.addEventHandler("ontimer",this.commWatch_ontimer,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("widgetWatch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
