(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commCalc");
            this.set_titletext("계산기");
            if (Form == this.constructor)
            {
                this._setFormPosition(265,363);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","10","2","257","41",null,null,null,null,null,null,this);
            obj.set_taborder("");
            obj.set_cssclass("sta_cm_box05");
            this.addChild(obj.name, obj);

            obj = new Static("stCalc","7","2","257","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","7","37","250",null,null,"7",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_box03");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","21","142","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","81","142","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","137","142","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","137","195","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","21","195","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","81","195","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","137","248","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","21","248","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","81","248","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("btnBack","21","89","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_calculatorBack");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","21","301","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_culator","137","301","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text(".");
            obj.set_cssclass("btn_WF_calculatorNum");
            this.addChild(obj.name, obj);

            obj = new Button("btnDivision","195","89","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_division");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiple","195","142","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_multiple");
            this.addChild(obj.name, obj);

            obj = new Button("btnMinus","195","195","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_minus");
            this.addChild(obj.name, obj);

            obj = new Button("btnPlus","195","248","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_plus");
            this.addChild(obj.name, obj);

            obj = new Button("btnAnd","195","301","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_result");
            this.addChild(obj.name, obj);

            obj = new Button("btnCE","79","89","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("CE");
            obj.set_cssclass("btn_WF_calculatorNum");
            obj.set_font("18px \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnC","137","89","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("C");
            obj.set_cssclass("btn_WF_calculatorNum");
            obj.set_font("18px \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stNum","7","37","250","46",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_calculatorTotal");
            obj.set_background("#ffffff");
            obj.set_border("1px solid silver");
            obj.set_textAlign("right");
            obj.set_padding("0px 10px 0px 0px");
            obj.set_font("normal 700 20pt/normal \"gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"3","30","30","7",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_noteDel");
            this.addChild(obj.name, obj);

            obj = new Button("btnMove","0","20","29","29",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_widgetMove04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",265,363,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("widgetCalc.xfdl", function() {
        this.fvPushNum      = 0;    // 숫자를 누른 상태
        this.fvPushOperator = 1;    // 연산자를(+,-,*,/) 누른 상태
        this.fvPushEqual    = 2;    // '='를 누른 상태
        this.fvIsDecimalPoint;      // 소수점여부
        this.fvNumber;              // 출력장체 표시된 숫자
        this.fvResult;              // 연산 결과
        this.fvResultText;              // 연산 결과 텍스트
        this.fvMemory;              // 메모리 저장 변수
        this.fvIdxDecimalPoint;     // 소수점 Index
        this.fvPreOperator;         // 이전에 누른 연산자
        this.fvChkStatus;           // 숫자,'=',연산자 상태 변수
        this.fvFlagMemory;          // 메모리 사용 상태
        this.fvIsPushDot;           // 소수점를 누른 상태

        this.commCalc_onload = function(obj,e)
        {
        	this.fnSetC();
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnDivision" :
        			this.fnCalculate("/");
        			break;

        		case "btnMultiple" :
        			this.fnCalculate("*");
        			break;

        		case "btnMinus" :
        			this.fnCalculate("-");
        			break;

        		case "btnPlus" :
        			this.fnCalculate("+");
        			break;

        		case "btnAnd" :
        			this.fnCalculate("=");
        			break;

        		case "btnBack" :
        			this.fnSetBackspace();
        			break;

        		case "btnCE" :
        			this.fnSetCE();
        			break;

        		case "btnC" :
        			this.fvResultText = "";
        			this.stCalc.text = "";
        			this.fnSetC();
        			break;

        		case "btn_culator" :
        			this.fvIsDecimalPoint = true;
        			this.fvIsPushDot = true;
        			break;

        		case "btnClose" :
        			this.parent.parent.fnCloseWidget(this.parent);
        			break;
        	}
        };

        this.fn_callNumOnClick = function(obj,e)
        {
        	this.fnSetNum(obj.text);
        };

        this.fnSetNum = function(pushNumber)
        {
            if (this.fvChkStatus == this.fvPushOperator || this.fvFlagMemory == true) { // 직전에 fvPushOperator 또는 메모리 관련 버튼을 누른 상태
                this.fnSetCE();
            } else if (this.fvChkStatus == this.fvPushEqual) { // 직전에 '='를 누른 상태
                this.fnSetC();
            }

            this.fvFlagMemory = false;

            let prevString = this.stNum.text;

            if (this.fvIsDecimalPoint == true && this.fvIsPushDot == true)
        	{
                this.stNum.text = prevString + pushNumber;
            }
            else
            {
                if (prevString.charAt(0) == "0") { // 초기'0.'인 상태에선 '0'을 삭제하고 'pushNumber.'으로 세팅
                     this.stNum.text = pushNumber + prevString.substr(1);
                } else { // '.'의 position으로 pushNumber Add처리
                   let vBefore = prevString.substr(0, this.fvIdxDecimalPoint);
                   let vAfter = prevString.substr(this.fvIdxDecimalPoint);
                   this.stNum.text = vBefore + pushNumber + vAfter;
                   this.fvIdxDecimalPoint++;
                }
            }

             this.fvNumber = this.stNum.text;

            if (this.fvNumber.indexOf(".") ==  this.fvNumber.length-1) {
                 this.fvNumber = nexacro.toNumber(this.fvNumber);
            } else {
                this. fvNumber = nexacro.toNumber(this.fvNumber.substr(0, this.fvNumber.length));
            }

             this.fvChkStatus = this.fvPushNum;
        };

        this.fnCalculate = function(pushOperator)
        {
            // 입력받은 연산자 저장, 연산은 하지 않는다. (직전에 숫자가 입력되지 않은 경우)
            if (this.fvChkStatus!=this.fvPushNum)
            {
                if (pushOperator == "+" || pushOperator == "-" || pushOperator == "*" || pushOperator == "/") {
                    this.fvPreOperator = pushOperator;
                    this.fvChkStatus   = this.fvPushOperator;

        			return;
                }
            }

            // 직전에 입력받은 연산자에 따라 연산을 수행, 입력받은 연산자 저장
            switch (this.fvPreOperator)
            {
                case '+':
                    this.fvResult += this.fvNumber;
        			this.fvResultText = this.fvResultText + " + " + this.fvNumber;
                    break;

        		case '-':
                    this.fvResult -= this.fvNumber;
        			this.fvResultText = this.fvResultText + " - " + this.fvNumber;
                    break;

        		case '*':
                    this.fvResult *= this.fvNumber;
        			this.fvResultText = this.fvResultText + " * " + this.fvNumber;
                    break;

        		case '/':
                    this.fvResult /= this.fvNumber;
        			this.fvResultText = this.fvResultText + " / " + this.fvNumber;
                    break;

        		default:
                    this.fvResult = this.fvNumber;
        			this.fvResultText = this.fvNumber;
                    break;
            }

        	let vIdxPoint = this.fvResult.toString().substr(this.fvIdxDecimalPoint);
        	let resultText = this.fvResult;

            this.stNum.text = resultText.toString();
        	this.stCalc.text = this.fvResultText;

            // 연산자 및 상태 저장
            if (pushOperator == "=") {
                this.fvChkStatus = this.fvPushEqual;
            } else {
                this.fvPreOperator = pushOperator;
                this.fvChkStatus = this.fvPushOperator;
                this.fvNumber = nexacro.toNumber(this.stNum.text.text);
            }
        };

        /*----------------------------------------------------------------------------------------------
         * 설명 : 계산 결과 삭제
         ----------------------------------------------------------------------------------------------*/
        this.fnSetC = function()
        {
            this.fnSetCE();

            this.fvNumber = 0;
            this.fvResult = 0;
            this.fvPreOperator = " ";
            this.fvChkStatus = this.fvPushNum;
        };

        /*----------------------------------------------------------------------------------------------
         * 설명 : 출력된 결과 삭제
         ----------------------------------------------------------------------------------------------*/
        this.fnSetCE = function()
        {
            this.stNum.text = "0";

        	// '.'를 누른 상태
            if (this.fvIsPushDot) {
                this.fvIsDecimalPoint = true;
        	} else {
                this.fvIsDecimalPoint = false;
        	}

            this.fvIdxDecimalPoint = 1;
        };

        this.fnSetBackspace = function()
        {
            if (this.fvChkStatus == this.fvPushNum)
            {
                let resultText = this.stNum.text;

                // 소수점인 경우
                if (this.fvIsDecimalPoint)
                {
                    resultText = resultText.substr(0, resultText.length-1);
                    this.stNum.text = resultText;

                    if (resultText.charAt(resultText.length-2) == ".") {
                        this.fvIsDecimalPoint = false;
        			}
                }
                else
                {
                    resultText = resultText.substr(0, resultText.length-2) + ".";

        			this.fvIdxDecimalPoint--;
                    this.stNum.text = resultText;
                }

                if (resultText.length == 1) {
                    this.fnSetCE();
                }

                this.fvNumber = nexacro.toNumber(this.stNum.text);
                this.fvChkStatus = this.fvPushNum;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commCalc_onload,this);
            this.Button00.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.Button01.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.Button02.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.Button03.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.Button04.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.Button05.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.Button06.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.Button07.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.Button08.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.btnBack.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.Button10.addEventHandler("onclick",this.fn_callNumOnClick,this);
            this.btn_culator.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnDivision.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnMultiple.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnMinus.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnPlus.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnAnd.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnCE.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnC.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnClose.addEventHandler("onclick",this.fn_comBtnOnClick,this);
        };
        this.loadIncludeScript("widgetCalc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
