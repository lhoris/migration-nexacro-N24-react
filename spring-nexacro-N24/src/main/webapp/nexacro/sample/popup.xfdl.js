(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","20","20","114","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.popup\",\"Popup\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("sample.popup");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","780","250","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("TEXT(\"sample.popup.call\",\"Popup Call\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("sample.popup.call");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","40","80","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Modaless");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkModeless","Static02:20","80","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("chk_WF_toggle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","342","80","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Titlebar");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkTitlebar","Static03:20","80","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("chk_WF_toggle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","342","125","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Width");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Spin("spnWidth","Static04:20","125","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_increment("50");
            obj.set_enable("false");
            obj.set_min("100");
            obj.set_max("1000");
            obj.set_value("600");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","644","125","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Height");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Spin("spnHeight","Static05:20","125","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_increment("50");
            obj.set_enable("false");
            obj.set_min("100");
            obj.set_max("1000");
            obj.set_value("500");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","40","125","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Autosize");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAutosize","Static02_00:20","125","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","644","80","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Statusbar");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkStatusbar","Static03_00:20","80","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("chk_WF_toggle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","40","170","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Resizable");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkResizable","Static02_00_00:20","170","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","644","170","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Opacity");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Spin("spnOpacity","Static04_00:20","170","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_increment("0.1");
            obj.set_min("0.1");
            obj.set_max("1");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","342","170","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Maximize");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkMaximize","Static02_00_00_00:20","170","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","40","220","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Dual Monitor");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDualMonitor","139","220","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","40","250","90","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("(Modaless only)");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,310,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popup.xfdl", function() {
        this.popup_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	let objTargetForm = this;

        	// Multi-Screen Window Placement API를 사용하기 위하여 사용자에게 권한을 요청 (필수)
        	// window-placement 권한은 다음과 같이 Permissions API를 사용
        	navigator.permissions.query({name:'window-placement'}).then(function(result) {
        		let sState = result.state;
        		objTargetForm.fnPremissionCallback(sState);
        	});
        };

        this.fnPremissionCallback = function(sState)
        {
        	if (sState=="granted") bWindowPlacement = true;
        };

        this.Button00_onclick = function(obj,e)
        {
        	let bModeless = this.chkModeless.value;
        	let bTitlebar = this.chkTitlebar.value;
        	let bStatusbar = this.chkStatusbar.value;
        	let bAutosize = this.chkAutosize.value;
        	let nWidth = this.spnWidth.value;
        	let nHeight = this.spnHeight.value;
        	let bResizable = this.chkResizable.value;
        	let nOpacity = this.spnOpacity.value;
        	let sOption = "titlebar="+bTitlebar+" statusbar="+bStatusbar+" autosize="+bAutosize+" width="+nWidth+" height="+nHeight+" resizable="+bResizable+" opacity="+nOpacity;

        	if (this.chkMaximize.isChecked()) {
        		sOption += " openstatus=maximize";
        	}

        	let sDualMonitorFlag = this.chkDualMonitor.value;
        	if (sDualMonitorFlag == true) this.fnGetScrrenDetails(sOption, bModeless);
        	else this.openPopup("modalPop", "sample::samplePop.xfdl", {}, sOption, "popupCallback", bModeless);
        };

        this.popupCallback = function(id, variant)
        {
        	//trace(id, variant);
        };

        this.chkAutosize_onchanged = function(obj,e)
        {
        	this.spnWidth.enable = !e.postvalue;
        	this.spnHeight.enable = !e.postvalue;
        };

        this.fnComChkOnChanged = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "chkModeless" :
        			if (e.postvalue == true) {
        				this.chkDualMonitor.enable = true;
        			} else {
        				this.chkDualMonitor.enable = false;
        				this.chkDualMonitor.value = false;
        			}
        			break;
        	}
        };

        this.fnGetScrrenDetails = function(sOption, bModeless)
        {
        	let objTargetForm = this;

        	// window.getScreenDetails()를 사용하여 두 번째 화면에 대한 자세한 정보 획득
        	window.getScreenDetails().then(function(result){
        		objTargetForm.fnGetScreenDetailsCallback(result, sOption, bModeless);
        	});
        };

        this.fnGetScreenDetailsCallback = function(result, sOption, bModeless)
        {
        	let objScreens = result.screens;

        	let nLeft = result.currentScreen.left; // 현재 화면 ScreenDetailed을 설명하는 객체 반환 (left 값)
        	let nTop = 0;
        	let nWidth = 600;
        	let nHeight = 500;

        	let aVal = sOption.trim().split(" ");
        	  for (let i = 0; i < aVal.length; i++) {
        		let aVal2 = aVal[i].trim().split("=");
        		switch (aVal2[0]) {
        		  case "width":
        			nWidth = parseInt(aVal2[1]);
        			break;
        		  case "height":
        			nHeight = parseInt(aVal2[1]);
        			break;
        		}
        	}

        	for (let i = 0; i < objScreens.length; i++)
        	{
        		if (nLeft != objScreens[i].availLeft) {
        			nLeft = objScreens[i].availLeft;
        			nexacro.open("modalPop", "sample::samplePop.xfdl", this.getOwnerFrame(), "", sOption, nLeft,nTop,nWidth,nHeight, this);
        			return;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.popup_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.chkModeless.addEventHandler("onchanged",this.fnComChkOnChanged,this);
            this.chkAutosize.addEventHandler("onchanged",this.chkAutosize_onchanged,this);
            this.chkDualMonitor.addEventHandler("onchanged",this.fnComChkOnChanged,this);
        };
        this.loadIncludeScript("popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
