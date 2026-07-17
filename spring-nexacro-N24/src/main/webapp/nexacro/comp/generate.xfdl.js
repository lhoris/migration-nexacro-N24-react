(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DynamicGenerate");
            this.set_titletext("컴포넌트 동적 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"comp_cnt\" type=\"INT\" size=\"256\"/><Column id=\"line_per_count\" type=\"INT\" size=\"256\"/><Column id=\"line_count\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"line_per_count\">1</Col><Col id=\"line_count\">20</Col><Col id=\"comp_cnt\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","20","20","221","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"comp.generate\",\"Dynamic Generate\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("comp.generate");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","740","121",null,"274","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#f4efff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","120","710","276",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_box02");
            this.addChild(obj.name, obj);

            obj = new Div("divCanvas","20","457",null,"393","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("20");
            obj.set_cssclass("div_WF_component");
            obj.set_borderRadius("0px 0px 20px 20px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","74",null,"40","90",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"comp.generate.guide\")");
            obj.set_cssclass("sta_WF_compTitle05");
            obj.getSetter("messageid").set("comp.generate.guide");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBtn","66","185","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCal","66","220","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Calendar");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkStc","66","255","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkImg","66","290","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Image");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkEdt","66","325","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Edit");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","225","185","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("TEXT(\"comp.generate.componentsamount\",\"컴포넌트 수\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("comp.generate.componentsamount");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03_00","225","227","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("TEXT(\"comp.generate.amountperline\",\"한 라인 표시 갯수\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("comp.generate.amountperline");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03_01","225","269","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("TEXT(\"comp.generate.lineamount\",\"라인 수\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("comp.generate.lineamount");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03_02","225","311","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("TEXT(\"comp.generate.total\",\"총 컴포넌트 갯수\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("comp.generate.total");
            this.addChild(obj.name, obj);

            obj = new Button("btnGenerate","603","217","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("TEXT(\"comp.generate.create\",\"생성\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("comp.generate.create");
            this.addChild(obj.name, obj);

            obj = new Static("edt_time","763","247","84","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("0.000");
            obj.set_cssclass("sta_WF_compTitle02_1");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","857","247","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("TEXT(\"comp.generate.sec\",\"초\")");
            obj.getSetter("messageid").set("comp.generate.sec");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","66","133","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("TEXT(\"comp.generate.select\",\"컴포넌트 선택\")");
            obj.set_cssclass("sta_WF_compTitle04");
            obj.getSetter("messageid").set("comp.generate.select");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","225","133","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("TEXT(\"comp.generate.option\",\"컴포넌트 생성 옵션\")");
            obj.set_cssclass("sta_WF_compTitle04");
            obj.getSetter("messageid").set("comp.generate.option");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","766","133","109","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("TEXT(\"comp.generate.gaptime\",\"생성 소요시간\")");
            obj.set_cssclass("sta_WF_compTitle04");
            obj.getSetter("messageid").set("comp.generate.gaptime");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","575","168","1","200",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Static01");
            obj.set_border("0px none,1px dashed #BABABA,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtCountComp","387","185","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtLinePerCnt","387","227","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtLineCnt","387","269","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            obj.set_value("20");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtTotCnt","387","311","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_value("100");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","940","460","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","940","514","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","940","574","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Static");
            obj.set_background("linear-gradient(to right,#a598ef,#ff9fa6)");
            obj.set_textAlign("center");
            obj.set_color("#111111");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","940","644","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_image("url(\'imagerc::img_WF_sample02.png\')");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","940","410","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("Edit");
            obj.set_visible("false");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","416",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Result");
            obj.set_cssclass("sta_WF_boxHead");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCanvas.form
            obj = new Layout("default","",0,0,this.divCanvas.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divCanvas.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCanvas.form
            obj = new Layout("Layout0","",0,0,this.divCanvas.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button02_01.move("20","118","120","40",null,null);
            	}
            );
            this.divCanvas.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",920,870,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCountComp","value","ds_cond","comp_cnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtLinePerCnt","value","ds_cond","line_per_count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtLineCnt","value","ds_cond","line_count");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("generate.xfdl", function() {

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.arrCompList = ["chkBtn", "chkCal", "chkStc", "chkImg", "chkEdt"];

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        this.DynamicGenerate_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	this.fnGetCheckbox();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnGetCheckbox : 체크박스의 체크 상태값 ds에 저장
        * @return : N/A
        * @example :
        */
        this.fnGetCheckbox = function ()
        {
        	let nSum = 0;
        	for (let i = 0; i < this.arrCompList.length; i++)
        	{
        		if (this.all[this.arrCompList[i]].value == true)
        		{
        			nSum++;
        		}
        	}
        	this.ds_cond.setColumn(0, "comp_cnt", nSum);
        };

        /**
        * fnDrawComponent : 컴포넌트 동적 생성
        * @return : N/A
        * @example :
        */
        this.fnDrawComponent = function ()
        {
        	let arrListup = [];
        	for (let ii = 0; ii < this.arrCompList.length; ii++)
        	{
        		if (this.all[this.arrCompList[ii]].value == true)
        		{
        			//arrListup.push(this.arrCompList[ii].split("_")[1]);
        			arrListup.push(this.arrCompList[ii].substring(3));
        		}
        	}

        	let oComp;
        	let nWidth = 120;
        	let nHeigth = 30;
        	let wGap = 5;
        	let hGap = 5;
        	let nLeft = 0;
        	let nTop = 0;
        	let nCntItem = this.edtLinePerCnt.value;
        	let nCntLine = this.edtLineCnt.value;
        	let nCntLoop = this.edtCountComp.value * nCntItem * nCntLine;

        	for (let x = 0; x < nCntLine; x++)
        	{
        		for (let y = 0; y < nCntItem; y++)
        		{
        			for (let z = 0; z < arrListup.length; z++)
        			{
        				switch (arrListup[z])
        				{
        					case "Btn":
        						oComp = new Button("btn_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.cssclass = "btn_WF_basic02";
        						oComp.text = "btn_" + x + "_" + y ;
        						break;
        					case "Cal":
        						oComp = new Calendar("cal_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.dateformat = "yyyy-MM-dd";
        						oComp.value = this.gfnGetDate();
        						break;
        					case "Stc":
        						oComp = new Static("stc_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.text = "Static" + x + "_" + y;
        						oComp.background = "linear-gradient(to right,#a598ef,#ff9fa6)";
        						oComp.color = "#111111";
        						oComp.textAlign = "center";
        						break;
        					case "Img":
        						oComp = new ImageViewer("img_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.image = "imagerc::img_WF_sample02.png";
        						break;
        					case "Edt":
        						oComp = new Edit("edt_" + x + "_" + y + "_" + z, nLeft + 10, nTop + 10, nWidth, nHeigth, null, null);
        						oComp.value = "edit" + x + "_" + y;
        						break;
        				}
        				this.divCanvas.form.addChild(oComp.name, oComp);
        				oComp.show();
        				nLeft = nLeft + nWidth + wGap;
        			}
        		}
        		nLeft = 0;
        		nTop = nTop + nHeigth + hGap;
        	}

        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 체크박스 선택 시 체크박스 상태값 ds에 저장
        */
        this.CheckBox_onchanged = function (obj, e)
        {
        	this.fnGetCheckbox();
        };

        /**
         * @description 생성 버튼 클릭
        */
        this.btnGenerate_onclick = function (obj, e)
        {
        	this.divCanvas.reload();

        	this.setWaitCursor(true);
        	this.alert("Start");

        	this.edt_time.text = "";
        	let stTime = new Date().getTime();

        	this.fnDrawComponent();

        	let edTime = new Date().getTime();
        	this.divCanvas.form.resetScroll();
        	this.edt_time.text = (edTime - stTime) / 1000;

        	this.setWaitCursor(false);
        };

        /**
         * @description 컴포넌트 생성 옵션 동적 카운팅
        */
        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if (e.col != "tot_count")
        	{
        		this.edtTotCnt.value = obj.getColumn(e.row, "comp_cnt") * obj.getColumn(e.row, "line_per_count") * obj.getColumn(e.row, "line_count");
        	}
        };

        /**
         * @class 현재일자를 구한다. <br>
         * @param {String} [sGubn] - date/null : 일자, time : 일자+시간, milli : Milliseconds
         * @return {String} 8자리 날짜(YYYYMMMDD)문자열
         */
        this.gfnGetDate = function(sGubn)
        {
        	if(this.gfnIsNull(sGubn)) sGubn = "date";
        	let d = new Date();

        	let s;

        	if (sGubn == "date") {
        		s = d.getFullYear()
        			  + ((d.getMonth() + 1) + "").padLeft(2, '0')
        			  + (d.getDate() + "").padLeft(2, '0');
        	}
        	else if (sGubn == "time") {
        		s = d.getFullYear()
        	      + ((d.getMonth() + 1) + "").padLeft(2, '0')
        	      + (d.getDate() + "").padLeft(2, '0')
        	      + (d.getHours() + "").padLeft(2, '0')
        	      + (d.getMinutes() + "").padLeft(2, '0')
        	      + (d.getSeconds() + "").padLeft(2, '0');
        	}
        	else if (sGubn == "milli") {
        		s = d.getFullYear()
        	      + ((d.getMonth() + 1) + "").padLeft(2, '0')
        	      + (d.getDate() + "").padLeft(2, '0')
        	      + (d.getHours() + "").padLeft(2, '0')
        	      + (d.getMinutes() + "").padLeft(2, '0')
        	      + (d.getSeconds() + "").padLeft(2, '0')
        		  + (d.getMilliseconds() + "").padLeft(3, '0');
        	}
        	return (s);
        };


        /**
         * @class 값이 존재하는지 여부 체크 <br>
         * @param {String} sValue
         * @return {Boolean} true/false
         * @example
         * var bNull = this.gfnIsNull("aaa");	// false
         */
        this.gfnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            let ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DynamicGenerate_onload,this);
            this.chkBtn.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.chkCal.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.chkStc.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.chkImg.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.chkEdt.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.btnGenerate.addEventHandler("onclick",this.btnGenerate_onclick,this);
            this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);
        };
        this.loadIncludeScript("generate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
