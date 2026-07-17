(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sttntts");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLang", this);
            obj._setContents("<ColumnInfo><Column id=\"lang\" type=\"STRING\" size=\"256\"/><Column id=\"langCD\" type=\"STRING\" size=\"256\"/><Column id=\"langLo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lang\">Afrikaans</Col><Col id=\"langCD\">af-ZA</Col></Row><Row><Col id=\"lang\">አማርኛ</Col><Col id=\"langCD\">am-ET</Col></Row><Row><Col id=\"lang\">Azərbaycanca</Col><Col id=\"langCD\">az-AZ</Col></Row><Row><Col id=\"lang\">বাংলা</Col><Col id=\"langCD\">bn-BD,bn-IN</Col><Col id=\"langLo\">বাংলাদেশ,ভারত</Col></Row><Row><Col id=\"lang\">Bahasa Indonesia</Col><Col id=\"langCD\">id-ID</Col></Row><Row><Col id=\"lang\">Bahasa Melayu</Col><Col id=\"langCD\">ms-MY</Col></Row><Row><Col id=\"lang\">Català</Col><Col id=\"langCD\">ca-ES</Col></Row><Row><Col id=\"lang\">Čeština</Col><Col id=\"langCD\">cs-CZ</Col></Row><Row><Col id=\"lang\">Dansk</Col><Col id=\"langCD\">da-DK</Col></Row><Row><Col id=\"lang\">Deutsch</Col><Col id=\"langCD\">de-DE</Col></Row><Row><Col id=\"lang\">English</Col><Col id=\"langCD\">en-AU,en-CA,en-IN,en-KE,en-TZ,en-GH,en-NZ,en-NG,en-ZA,en-PH,en-GB,en-US</Col><Col id=\"langLo\">Australia,Canada,India,Kenya,Tanzania,Ghana,New Zealand,Nigeria,South Africa,Philippines,United Kingdom,United States</Col></Row><Row><Col id=\"lang\">Español</Col><Col id=\"langCD\">es-AR,es-BO,es-CL,es-CO,es-CR,es-EC,es-SV,es-ES,es-US,es-GT,es-HN,es-MX,es-NI,es-PA,es-PY,es-PE,es-PR,es-DO,es-UY,es-VE</Col><Col id=\"langLo\">Argentina,Bolivia,Chile,Colombia,Costa Rica,Ecuador,El Salvador,España,Estados Unidos,Guatemala,Honduras,México,Nicaragua,Panamá,Paraguay,Perú,Puerto Rico,República Dominicana,Uruguay,Venezuela</Col></Row><Row><Col id=\"lang\">Euskara</Col><Col id=\"langCD\">eu-ES</Col></Row><Row><Col id=\"lang\">Filipino</Col><Col id=\"langCD\">fil-PH</Col></Row><Row><Col id=\"lang\">Français</Col><Col id=\"langCD\">fr-FR</Col></Row><Row><Col id=\"lang\">Basa Jawa</Col><Col id=\"langCD\">jv-ID</Col></Row><Row><Col id=\"lang\">Galego</Col><Col id=\"langCD\">gl-ES</Col></Row><Row><Col id=\"lang\">ગુજરાતી</Col><Col id=\"langCD\">gu-IN</Col></Row><Row><Col id=\"lang\">Hrvatski</Col><Col id=\"langCD\">hr-HR</Col></Row><Row><Col id=\"lang\">IsiZulu</Col><Col id=\"langCD\">zu-ZA</Col></Row><Row><Col id=\"lang\">Íslenska</Col><Col id=\"langCD\">is-IS</Col></Row><Row><Col id=\"lang\">Italiano</Col><Col id=\"langCD\">it-IT,it-CH</Col><Col id=\"langLo\">Italia,Svizzera</Col></Row><Row><Col id=\"lang\">ಕನ್ನಡ</Col><Col id=\"langCD\">kn-IN</Col></Row><Row><Col id=\"lang\">ភាសាខ្មែរ</Col><Col id=\"langCD\">km-KH</Col></Row><Row><Col id=\"lang\">Latviešu</Col><Col id=\"langCD\">lv-LV</Col></Row><Row><Col id=\"lang\">Lietuvių</Col><Col id=\"langCD\">lt-LT</Col></Row><Row><Col id=\"lang\">മലയാളം</Col><Col id=\"langCD\">ml-IN</Col></Row><Row><Col id=\"lang\">मराठी</Col><Col id=\"langCD\">mr-IN</Col></Row><Row><Col id=\"lang\">Magyar</Col><Col id=\"langCD\">hu-HU</Col></Row><Row><Col id=\"lang\">ລາວ</Col><Col id=\"langCD\">lo-LA</Col></Row><Row><Col id=\"lang\">Nederlands</Col><Col id=\"langCD\">nl-NL</Col></Row><Row><Col id=\"lang\">नेपाली भाषा</Col><Col id=\"langCD\">ne-NP</Col></Row><Row><Col id=\"lang\">Norsk bokmål</Col><Col id=\"langCD\">nb-NO</Col></Row><Row><Col id=\"lang\">Polski</Col><Col id=\"langCD\">pl-PL</Col></Row><Row><Col id=\"lang\">Português</Col><Col id=\"langCD\">pt-BR,pt-PT</Col><Col id=\"langLo\">Brasil,Portugal</Col></Row><Row><Col id=\"lang\">Română</Col><Col id=\"langCD\">ro-RO</Col></Row><Row><Col id=\"lang\">සිංහල</Col><Col id=\"langCD\">si-LK</Col></Row><Row><Col id=\"lang\">Slovenščina</Col><Col id=\"langCD\">sl-SI</Col></Row><Row><Col id=\"lang\">Basa Sunda</Col><Col id=\"langCD\">su-ID</Col></Row><Row><Col id=\"lang\">Slovenčina</Col><Col id=\"langCD\">sk-SK</Col></Row><Row><Col id=\"lang\">Suomi</Col><Col id=\"langCD\">fi-FI</Col></Row><Row><Col id=\"lang\">Svenska</Col><Col id=\"langCD\">sv-SE</Col></Row><Row><Col id=\"lang\">Kiswahili</Col><Col id=\"langCD\">sw-TZ,sw-KE</Col><Col id=\"langLo\">Tanzania,Kenya</Col></Row><Row><Col id=\"lang\">ქართული</Col><Col id=\"langCD\">ka-GE</Col></Row><Row><Col id=\"lang\">Հայերեն</Col><Col id=\"langCD\">hy-AM</Col></Row><Row><Col id=\"lang\">தமிழ்</Col><Col id=\"langCD\">ta-IN,ta-SG,ta-LK,ta-MY</Col><Col id=\"langLo\">இந்தியா,சிங்கப்பூர்,இலங்கை,மலேசியா</Col></Row><Row><Col id=\"lang\">తెలుగు</Col><Col id=\"langCD\">te-IN</Col></Row><Row><Col id=\"lang\">Tiếng Việt</Col><Col id=\"langCD\">vi-VN</Col></Row><Row><Col id=\"lang\">Türkçe</Col><Col id=\"langCD\">tr-TR</Col></Row><Row><Col id=\"lang\">اُردُو</Col><Col id=\"langCD\">ur-PK,ur-IN</Col><Col id=\"langLo\">پاکستان,بھارت</Col></Row><Row><Col id=\"lang\">Ελληνικά</Col><Col id=\"langCD\">el-GR</Col></Row><Row><Col id=\"lang\">български</Col><Col id=\"langCD\">bg-BG</Col></Row><Row><Col id=\"lang\">Pусский</Col><Col id=\"langCD\">ru-RU</Col></Row><Row><Col id=\"lang\">Српски</Col><Col id=\"langCD\">sr-RS</Col></Row><Row><Col id=\"lang\">Українська</Col><Col id=\"langCD\">uk-UA</Col></Row><Row><Col id=\"lang\">한국어</Col><Col id=\"langCD\">ko-KR</Col></Row><Row><Col id=\"lang\">中文</Col><Col id=\"langCD\">cmn-Hans-CN,cmn-Hans-HK,cmn-Hant-TW,yue-Hant-HK</Col><Col id=\"langLo\">普通话 (中国大陆),普通话 (香港),中文 (台灣),粵語 (香港)</Col></Row><Row><Col id=\"lang\">日本語</Col><Col id=\"langCD\">ja-JP</Col></Row><Row><Col id=\"lang\">हिन्दी</Col><Col id=\"langCD\">hi-IN</Col></Row><Row><Col id=\"lang\">ภาษาไทย</Col><Col id=\"langCD\">th-TH</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLangLo", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","170",null,"40","500",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("STT(Speech to text)");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","200","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"external.sttntts.stt\",\"Press the button and speak.\")");
            obj.getSetter("messageid").set("external.sttntts.stt");
            obj.set_cssclass("sta_WF_compTitle05");
            this.addChild(obj.name, obj);

            obj = new Button("btnStt",null,"285","100","100","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MWF_voiceRecord");
            this.addChild(obj.name, obj);

            obj = new TextArea("tareStt","20","260",null,"150","btnStt:40",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","445",null,"40","500",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TTS(Text to speech)");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","475","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"external.sttntts.tts\",\"Enter the text and press the button.\")");
            obj.getSetter("messageid").set("external.sttntts.tts");
            obj.set_cssclass("sta_WF_compTitle05");
            this.addChild(obj.name, obj);

            obj = new Button("btnTts",null,"560","100","100","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MWF_voiceSpeaker");
            this.addChild(obj.name, obj);

            obj = new TextArea("tareTts","20","535",null,"150","btnTts:40",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","20","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("STT / TTS");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLang","20","120","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsLang");
            obj.set_datacolumn("lang");
            obj.set_codecolumn("langCD");
            obj.set_displayrowcount("10");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLangLo","cboLang:20","120","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsLangLo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_displayrowcount("10");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","70","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("TEXT(\"external.sttntts.selectlang\",\"언어를 선택해 주세요.\")");
            obj.getSetter("messageid").set("external.sttntts.selectlang");
            obj.set_cssclass("sta_WF_compTitle05");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sttntts.xfdl", function() {
        this.langCD;
        var propForm;

        this.sttntts_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        	this.cboLang.index = 55;
        	this.cboLangLo.visible = false;
        	this.langCD = "ko-KR";
        	propForm = this;
        	this.app = nexacro.getApplication();
        };

        this.cboLang_onitemchanged = function(obj,e)
        {
        	let langLo = this.dsLang.getColumn(e.postindex,"langLo");

        	if(!nexacro.isEmpty(langLo)){
        		this.cboLangLo.visible = true;
        		this.langCD = "";
        		let langLos = langLo.split(",");
        		let langCds = e.postvalue.split(",");
        		this.dsLangLo.clearData();
        		if(langLos.length == langCds.length){
        			let row;
        			for(let i=0; i<langLos.length; ++i){
        				row = this.dsLangLo.addRow();
        				this.dsLangLo.setColumn(row,"code",langCds[i]);
        				this.dsLangLo.setColumn(row,"data",langLos[i]);
        			}
        			this.cboLangLo.index = 0;
        			this.langCD = this.cboLangLo.value;
        		}

        	}else{
        		this.cboLangLo.visible = false;
        		this.langCD = e.postvalue;
        	}
        };

        this.cboLangLo_onitemchanged = function(obj,e)
        {
        	this.langCD = e.postvalue;
        };

        this.btnStt_onclick = function(obj,e)
        {
        	const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        	if(!Recognition){
        		if(this.app.langCode == "ko"){
        			alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
        		}else {
        			alert("This browser does not support speech recognition.");
        		}
        		return;
        	}

        	const recognition = new Recognition();
        	//interimResults - 임시 결과 반환여부
        	recognition.interimResults = true;
        	recognition.lang = this.langCD;

        	recognition.start();

        	recognition.onend = function(e) {
        		if(propForm.app.langCode == "ko"){
        			alert("음성인식 종료");
        		}else {
        			alert("End voice recognition");
        		}
        // 		console.log(e);
        	};

        	recognition.onresult = function (e)
        	{
        // 		trace("result");
        // 		console.log(e);

        		let text = e.results[0][0].transcript;
        // 		trace("text");
        // 		console.log('transcript',text);

        		propForm.tareStt.value = text;
        	};

        	recognition.onerror = function (e)
        	{
        // 		trace("error");
        // 		console.log(e);
        	};

        	recognition.onnomatch = function (e)
        	{
        // 		trace("nomatch");
        // 		console.log(e);
        	};
        };

        this.btnTts_onclick = function(obj,e)
        {
        	if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
        		if(this.app.langCode == "ko"){
        			alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
        		}else {
        			alert("This browser does not support speech synthesis.");
        		}
        		return;
        	}
        	if(nexacro.isEmpty(this.tareTts.value)){
        		if(this.app.langCode == "ko"){
        			alert("텍스트를 입력해 주세요.");
        		}else {
        			alert("Please enter your text.");
        		}
        	}else{
        		window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

        		const speechMsg = new SpeechSynthesisUtterance();
        		speechMsg.rate = 1; // 속도: 0.1 ~ 10
        		speechMsg.pitch = 1;// 음높이: 0 ~ 2
        		speechMsg.lang = this.langCD;
        		speechMsg.text = this.tareTts.value;

        		// SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
        		window.speechSynthesis.speak(speechMsg);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sttntts_onload,this);
            this.btnStt.addEventHandler("onclick",this.btnStt_onclick,this);
            this.btnTts.addEventHandler("onclick",this.btnTts_onclick,this);
            this.cboLang.addEventHandler("onitemchanged",this.cboLang_onitemchanged,this);
            this.cboLangLo.addEventHandler("onitemchanged",this.cboLangLo_onitemchanged,this);
        };
        this.loadIncludeScript("sttntts.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
