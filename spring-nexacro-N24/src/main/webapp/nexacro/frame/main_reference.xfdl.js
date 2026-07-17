(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main_reference");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","0","0",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_conBox03");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","Static03:0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_conBox04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","210","50",null,"80","270",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TOBESOFT By the Numbers");
            obj.set_cssclass("sta_WF_mainboxTxt06");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-19","13","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Korea");
            obj.set_cssclass("sta_WF_mainboxTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","225","13","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("History");
            obj.set_cssclass("sta_WF_mainboxTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","1","213","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Nexacro\r\nReference");
            obj.set_cssclass("sta_WF_mainboxTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","34","91","80","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("No.");
            obj.set_cssclass("sta_WF_mainboxTxt06");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("st_2","246","80","80","80",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("23");
            obj.set_cssclass("sta_WF_mainboxTxt04");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("st_3","1","280","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("1,800");
            obj.set_cssclass("sta_WF_mainboxTxt04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","244","213","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Tobesoft\r\nReference");
            obj.set_cssclass("sta_WF_mainboxTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("st_4","244","280","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("7,000");
            obj.set_cssclass("sta_WF_mainboxTxt04");
            this.addChild(obj.name, obj);

            obj = new Static("st_1","124","80","60","80",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_mainboxTxt04");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","346","91","106","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("years");
            obj.set_cssclass("sta_WF_mainboxTxt06");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","664","240",null,"80","-264",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Major Customers(Partners)");
            obj.set_cssclass("sta_WF_mainboxTxt05");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","575","380","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_reference01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","790","380","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_reference02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","1005","380","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_reference03");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1220","380","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_reference04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","1435","380","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_reference05");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","575","460","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_reference06");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","790","460","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_reference07");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1005","460","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_reference08");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","1220","460","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_reference09");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00","1435","460","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_reference10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","575","540","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_reference11");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","790","540","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_reference12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","1005","540","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_reference13");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","1220","540","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_reference14");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_01","1435","540","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_reference15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","575","620","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_reference16");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","790","620","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_reference17");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1005","620","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_reference18");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","1220","620","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_reference19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00","1435","620","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_reference20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Static03.set_taborder("0");
                p.Static03.set_cssclass("sta_WF_conBox03");
                p.Static03.move("0","0",null,"400","0",null);

                p.Static04.set_taborder("33");
                p.Static04.set_cssclass("sta_WF_conBox04");
                p.Static04.set_visible("false");
                p.Static04.move("0","Static03:0",null,"60","0",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("TOBESOFT By the Numbers");
                p.Static00.set_cssclass("sta_WF_mainboxTxt06");
                p.Static00.set_fittocontents("height");
                p.Static00.set_visible("false");
                p.Static00.move("210","50",null,"80","270",null);

                p.Static01.set_taborder("2");
                p.Static01.set_text("Korea");
                p.Static01.set_cssclass("sta_WF_mainboxTxt03");
                p.Static01.move("-19","13","250","60",null,null);

                p.Static01_00.set_taborder("3");
                p.Static01_00.set_text("History");
                p.Static01_00.set_cssclass("sta_WF_mainboxTxt03");
                p.Static01_00.move("225","13","250","60",null,null);

                p.Static01_01.set_taborder("4");
                p.Static01_01.set_text("Nexacro\r\nReference");
                p.Static01_01.set_cssclass("sta_WF_mainboxTxt03");
                p.Static01_01.move("1","213","220","60",null,null);

                p.Static02.set_taborder("5");
                p.Static02.set_text("No.");
                p.Static02.set_cssclass("sta_WF_mainboxTxt06");
                p.Static02.set_textAlign("right");
                p.Static02.move("34","91","80","60",null,null);

                p.st_2.set_taborder("6");
                p.st_2.set_text("23");
                p.st_2.set_cssclass("sta_WF_mainboxTxt04");
                p.st_2.set_textAlign("right");
                p.st_2.move("246","80","80","80",null,null);

                p.st_3.set_taborder("7");
                p.st_3.set_text("1,800");
                p.st_3.set_cssclass("sta_WF_mainboxTxt04");
                p.st_3.move("1","280","220","80",null,null);

                p.Static01_01_00.set_taborder("8");
                p.Static01_01_00.set_text("Tobesoft\r\nReference");
                p.Static01_01_00.set_cssclass("sta_WF_mainboxTxt03");
                p.Static01_01_00.move("244","213","220","60",null,null);

                p.st_4.set_taborder("9");
                p.st_4.set_text("7,000");
                p.st_4.set_cssclass("sta_WF_mainboxTxt04");
                p.st_4.move("244","280","220","80",null,null);

                p.st_1.set_taborder("10");
                p.st_1.set_text("1");
                p.st_1.set_cssclass("sta_WF_mainboxTxt04");
                p.st_1.set_textAlign("left");
                p.st_1.move("124","80","60","80",null,null);

                p.Static02_00_00.set_taborder("11");
                p.Static02_00_00.set_text("years");
                p.Static02_00_00.set_cssclass("sta_WF_mainboxTxt06");
                p.Static02_00_00.set_textAlign("left");
                p.Static02_00_00.move("346","91","106","60",null,null);

                p.Static00_00.set_taborder("12");
                p.Static00_00.set_text("Major Customers(Partners)");
                p.Static00_00.set_cssclass("sta_WF_mainboxTxt05");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.set_visible("false");
                p.Static00_00.move("664","240",null,"80","-264",null);

                p.Static01_02.set_taborder("13");
                p.Static01_02.set_cssclass("sta_WF_reference01");
                p.Static01_02.set_visible("false");
                p.Static01_02.move("575","380","180","60",null,null);

                p.Static01_00_00.set_taborder("14");
                p.Static01_00_00.set_cssclass("sta_WF_reference02");
                p.Static01_00_00.set_visible("false");
                p.Static01_00_00.move("790","380","180","60",null,null);

                p.Static01_01_01.set_taborder("15");
                p.Static01_01_01.set_cssclass("sta_WF_reference03");
                p.Static01_01_01.set_visible("false");
                p.Static01_01_01.move("1005","380","180","60",null,null);

                p.Static01_02_00.set_taborder("16");
                p.Static01_02_00.set_cssclass("sta_WF_reference04");
                p.Static01_02_00.set_visible("false");
                p.Static01_02_00.move("1220","380","180","60",null,null);

                p.Static01_03.set_taborder("17");
                p.Static01_03.set_cssclass("sta_WF_reference05");
                p.Static01_03.set_visible("false");
                p.Static01_03.move("1435","380","180","60",null,null);

                p.Static01_04.set_taborder("18");
                p.Static01_04.set_cssclass("sta_WF_reference06");
                p.Static01_04.set_visible("false");
                p.Static01_04.move("575","460","180","60",null,null);

                p.Static01_00_00_00.set_taborder("19");
                p.Static01_00_00_00.set_cssclass("sta_WF_reference07");
                p.Static01_00_00_00.set_visible("false");
                p.Static01_00_00_00.move("790","460","180","60",null,null);

                p.Static01_01_00_00.set_taborder("20");
                p.Static01_01_00_00.set_cssclass("sta_WF_reference08");
                p.Static01_01_00_00.set_visible("false");
                p.Static01_01_00_00.move("1005","460","180","60",null,null);

                p.Static01_02_00_00.set_taborder("21");
                p.Static01_02_00_00.set_cssclass("sta_WF_reference09");
                p.Static01_02_00_00.set_visible("false");
                p.Static01_02_00_00.move("1220","460","180","60",null,null);

                p.Static01_03_00.set_taborder("22");
                p.Static01_03_00.set_cssclass("sta_WF_reference10");
                p.Static01_03_00.set_visible("false");
                p.Static01_03_00.move("1435","460","180","60",null,null);

                p.Static01_05.set_taborder("23");
                p.Static01_05.set_cssclass("sta_WF_reference11");
                p.Static01_05.set_visible("false");
                p.Static01_05.move("575","540","180","60",null,null);

                p.Static01_00_01.set_taborder("24");
                p.Static01_00_01.set_cssclass("sta_WF_reference12");
                p.Static01_00_01.set_visible("false");
                p.Static01_00_01.move("790","540","180","60",null,null);

                p.Static01_01_01_00.set_taborder("25");
                p.Static01_01_01_00.set_cssclass("sta_WF_reference13");
                p.Static01_01_01_00.set_visible("false");
                p.Static01_01_01_00.move("1005","540","180","60",null,null);

                p.Static01_02_01.set_taborder("26");
                p.Static01_02_01.set_cssclass("sta_WF_reference14");
                p.Static01_02_01.set_visible("false");
                p.Static01_02_01.move("1220","540","180","60",null,null);

                p.Static01_03_01.set_taborder("27");
                p.Static01_03_01.set_cssclass("sta_WF_reference15");
                p.Static01_03_01.set_visible("false");
                p.Static01_03_01.move("1435","540","180","60",null,null);

                p.Static01_04_00.set_taborder("28");
                p.Static01_04_00.set_cssclass("sta_WF_reference16");
                p.Static01_04_00.set_visible("false");
                p.Static01_04_00.move("575","620","180","60",null,null);

                p.Static01_00_00_00_00.set_taborder("29");
                p.Static01_00_00_00_00.set_cssclass("sta_WF_reference17");
                p.Static01_00_00_00_00.set_visible("false");
                p.Static01_00_00_00_00.move("790","620","180","60",null,null);

                p.Static01_01_00_00_00.set_taborder("30");
                p.Static01_01_00_00_00.set_cssclass("sta_WF_reference18");
                p.Static01_01_00_00_00.set_visible("false");
                p.Static01_01_00_00_00.move("1005","620","180","60",null,null);

                p.Static01_02_00_00_00.set_taborder("31");
                p.Static01_02_00_00_00.set_cssclass("sta_WF_reference19");
                p.Static01_02_00_00_00.set_visible("false");
                p.Static01_02_00_00_00.move("1220","620","180","60",null,null);

                p.Static01_03_00_00.set_taborder("32");
                p.Static01_03_00_00.set_cssclass("sta_WF_reference20");
                p.Static01_03_00_00.set_visible("false");
                p.Static01_03_00_00.move("1435","620","180","60",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",1263,980,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_visible("true");
                p.Static00.move("250","40",null,"80","250",null);

                p.Static01.move("110","175","250","60",null,null);

                p.Static02.move("163","253","80","60",null,null);

                p.st_1.move("253","242","60","80",null,null);

                p.Static01_00.move("374","175","250","60",null,null);

                p.st_2.move("395","242","80","80",null,null);

                p.Static02_00_00.move("495","253","106","60",null,null);

                p.Static01_01.move("638","175","250","60",null,null);

                p.st_3.move("638","242","250","80",null,null);

                p.Static01_01_00.move("902","175","250","60",null,null);

                p.st_4.move("902","242","250","80",null,null);

                p.Static00_00.set_visible("true");
                p.Static00_00.move("200","435",null,"80","200",null);

                p.Static01_02.set_visible("true");
                p.Static01_02.move("111","575","180","60",null,null);

                p.Static01_01_01.set_visible("true");
                p.Static01_01_01.move("541","575","180","60",null,null);

                p.Static01_02_00.set_visible("true");
                p.Static01_02_00.move("756","575","180","60",null,null);

                p.Static01_03.set_visible("true");
                p.Static01_03.move("971","575","180","60",null,null);

                p.Static01_04.set_visible("true");
                p.Static01_04.move("111","655","180","60",null,null);

                p.Static01_00_00_00.set_visible("true");
                p.Static01_00_00_00.move("326","655","180","60",null,null);

                p.Static01_01_00_00.set_visible("true");
                p.Static01_01_00_00.move("541","655","180","60",null,null);

                p.Static01_02_00_00.set_visible("true");
                p.Static01_02_00_00.move("756","655","180","60",null,null);

                p.Static01_03_00.set_visible("true");
                p.Static01_03_00.move("971","655","180","60",null,null);

                p.Static01_00_00.set_visible("true");
                p.Static01_00_00.move("326","575","180","60",null,null);

                p.Static01_05.set_visible("true");
                p.Static01_05.move("111","735","180","60",null,null);

                p.Static01_00_01.set_visible("true");
                p.Static01_00_01.move("326","735","180","60",null,null);

                p.Static01_01_01_00.set_visible("true");
                p.Static01_01_01_00.move("541","735","180","60",null,null);

                p.Static01_02_01.set_visible("true");
                p.Static01_02_01.move("756","735","180","60",null,null);

                p.Static01_03_01.set_visible("true");
                p.Static01_03_01.move("971","735","180","60",null,null);

                p.Static01_04_00.set_visible("true");
                p.Static01_04_00.move("111","815","180","60",null,null);

                p.Static01_00_00_00_00.set_visible("true");
                p.Static01_00_00_00_00.move("326","815","180","60",null,null);

                p.Static01_01_00_00_00.set_visible("true");
                p.Static01_01_00_00_00.move("541","815","180","60",null,null);

                p.Static01_02_00_00_00.set_visible("true");
                p.Static01_02_00_00_00.move("756","815","180","60",null,null);

                p.Static01_03_00_00.set_visible("true");
                p.Static01_03_00_00.move("971","815","180","60",null,null);

                p.Static04.set_visible("true");
                p.Static04.move("0","Static03:0",null,null,"0","0");
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
        this.registerScript("main_reference.xfdl", function() {
        this.main_reference_onload = function(obj,e)
        {
        	const app = nexacro.getApplication();

        	//countUp 오픈소스 활용 숫자 증가 효과 적용 (IE 제외한 웹브라우저 지원)
        	if(nexacro._Browser == "IE" || app.IsNRE) return;

        	let jScript = document.createElement("script");
        	jScript.onload = function () {
        		let options = { threshold : 0.3 };
        		const io = new IntersectionObserver( function (entries, observer) {
        			entries.forEach(function (entry) {
        				if (entry.isIntersecting) {
        					let demo = new countUp.CountUp(entry.target, entry.target.innerText.replace(/,/g, ''));
        					demo.start();
        					observer.unobserve(entry.target);
        				}
        			});
        		},options);
        		io.observe(document.getElementById( obj.nexacroDomId(obj.st_1) + ":text"));
        		io.observe(document.getElementById( obj.nexacroDomId(obj.st_2) + ":text"));
        		io.observe(document.getElementById( obj.nexacroDomId(obj.st_3) + ":text"));
        		io.observe(document.getElementById( obj.nexacroDomId(obj.st_4) + ":text"));
        	}
        	jScript.src = "https://inorganik.github.io/countUp.js/dist/countUp.umd.js";
        	document.body.appendChild(jScript);
        };

        this.nexacroDomId = function(objID)
        {
        	let generateID = "";
        	let prtID = objID;
        	let i = 0;
        	const objApp = nexacro.getApplication();
        	const mainFrm = objApp.mainframe;
        	while(prtID != mainFrm){
        		if(prtID.toString() == "[object Form]") generateID = "form." + generateID;
        		else generateID = prtID.name + ((generateID != "")?".":"") + generateID;
        		i++;
        		prtID = prtID.parent;
        	}
        	return "mainframe." + generateID;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_reference_onload,this);
        };
        this.loadIncludeScript("main_reference.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
