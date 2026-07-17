(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dataobject");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,880);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataStructure", this);
            obj._setContents("<ColumnInfo><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_ROOT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"CHILD_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_ROOT_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataExpr", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.dataobject\",\"DataObject\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("sample.dataobject");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnCall","780","121","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"sample.dataobject.sendrequest\",\"Send Request\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("sample.dataobject.sendrequest");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","121","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("URL");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMethod","144","121","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_itemheight("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboMethod_innerdataset = new nexacro.NormalDataset("cboMethod_innerdataset", obj);
            cboMethod_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GET</Col><Col id=\"datacolumn\">GET</Col></Row><Row><Col id=\"codecolumn\">POST</Col><Col id=\"datacolumn\">POST</Col></Row><Row><Col id=\"codecolumn\">OPTIONS</Col><Col id=\"datacolumn\">OPTIONS</Col></Row><Row><Col id=\"codecolumn\">PUT</Col><Col id=\"datacolumn\">PUT</Col></Row><Row><Col id=\"codecolumn\">DELETE</Col><Col id=\"datacolumn\">DELETE</Col></Row><Row><Col id=\"codecolumn\">HEAD</Col><Col id=\"datacolumn\">HEAD</Col></Row></Rows>");
            obj.set_innerdataset(cboMethod_innerdataset);
            obj.set_text("GET");
            obj.set_value("GET");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","30","171","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Parameter");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","30","350","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Data");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","144","350","756","450",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("36");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("TEXT(\"sample.dataobject.dataexpression\",\"Data Expression\")");
            obj.getSetter("messageid").set("sample.dataobject.dataexpression");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdDataExpr","0","3",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("TEXT(\"sample.dataobject.datastructure\",\"Data Structure\")");
            obj.getSetter("messageid").set("sample.dataobject.datastructure");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdDataStructure","363","3",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDataStructure");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"KEY\"/><Cell col=\"1\" text=\"VALUE\"/></Band><Band id=\"body\"><Cell text=\"bind:KEY\" textAlign=\"left\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPTH\"/><Cell col=\"1\" text=\"bind:VALUE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new TextArea("txtJson","0","3","360",null,null,"0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_scrolltype("vertical");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtDataObjectPath","750","350","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"345","107","35","edtDataObjectPath:10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("TEXT(\"sample.dataobject.path\",\"dataobjectpath\\n(filtering value)\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.getSetter("messageid").set("sample.dataobject.path");
            obj.set_fittocontents("height");
            obj.set_wordWrap("english");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtUrl","cboMethod:0","121","480","40",null,null,null,null,"40","300",this);
            obj.set_taborder("8");
            obj.set_wordWrap("char");
            obj.set_value("https://jsonplaceholder.typicode.com/users");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtParams","144","171","756","159",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtUrl00","927","121","486","40",null,null,null,null,"40","300",this);
            obj.set_taborder("10");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","66","760","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_compTitle05");
            obj.set_text("TEXT(\"sample.dataobject.top.desc\")");
            obj.getSetter("messageid").set("sample.dataobject.top.desc");
            obj.set_usedecorate("true");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,880,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dataobject.xfdl", function() {
        /**
        *  dataobject.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023.5.8
        *  @Desction
        ******************* 소스 수정 이력 *****************************************************************
        *  date          		Modifier                Description
        *************************************************************************************************
        *  2023.5.8     	    TOBESOFT 	           	    최초 생성
        *************************************************************************************************
        */

        /***********************************************************************************************
        * 0. 폼로드
        ***********************************************************************************************/
        /***********************************************************************************************
        * 00.01. Form Include 선언
        ***********************************************************************************************/
        /***********************************************************************************************
        * 00.02. Form 변수 선언
        ***********************************************************************************************/
        this.arrRootPath = [];
        this.arrObjType = [];
        this.isArray;
        this.isTxtExtension = false;

        this.finVscrollPos = -1;
        /***********************************************************************************************
        * 00.03. Form Onload 이벤트
        ***********************************************************************************************/
        this.fnFormOnload = function (obj, e)
        {
        	this.gfnFormOnLoad();
        	this.txtUrl.bringToFront();
        }

        /***********************************************************************************************
        * 1. 폼 이벤트
        ***********************************************************************************************/
        this.form_ontimer = function(obj,e)
        {
        	if (e.timerid == 0) {
        		// trace("timer");
        		if (this.isTxtExtension == false) {
        			this.killTimer(0);
        			this.txtUrl.height = 40;
        		} else {
        			let sTxtUrl = this.txtUrl.value;
        			if (!nexacro.isEmpty(sTxtUrl)) {
        				let nHeight = 40 + this.finVscrollPos;
        				this.txtUrl.height = nHeight;
        			} else {
        				this.txtUrl.height = 40;
        			}
        		}
        	}
        };

        this.form_onlbuttonup = function(obj,e)
        {
        	let fromObjId = e.fromobject.id;

        	if (fromObjId != "txtUrl") {
        		this.isTxtExtension = false;
        	}
        };

        /************************************************************************************************
        * 2. CALLBACK 처리부분(Transaction, Popup)
        ************************************************************************************************/
        //
        this.fnPopupCallback = function(strId, rtnValue)
        {

        };
        // 메시지 콜백
        this.fnMsgCallback = function(strId, rtnValue)
        {
        };

        /***********************************************************************************************
        * 3. 사용자 함수
        ***********************************************************************************************/
        this.fnSetDataObjectInit = function ()
        {
        	// trace("=========================================");

        	this.Tab00.Tabpage1.form.grdDataExpr.enableredraw = false;
        	this.dsDataStructure.enableevent = false;

        	let oDataObjData = this.DataObject00.data;
        	// Json 검사
        	if (nexacro.isEmpty(oDataObjData) || !this.fnIsJson(oDataObjData)) {
        		alert("JSON 구조가 올바르지 않습니다.");
        		return;
        	}

        	// Json 텍스트 세팅
        	let sJsondata = JSON.stringify(oDataObjData, null, 2);
        	this.Tab00.Tabpage2.form.txtJson.value = sJsondata;

        	// 데이터오브젝트 데이터가 배열형식이라면
        	if (Array.isArray(oDataObjData)) {
        		this.isArray = true;
        	} else {
        		this.isArray = false;
        	}

        	let arrayData = new Array(oDataObjData);	// 배열형식의 데이터 저장

        	// 함수실행
        	this.fnSetDataObject(arrayData);
        	// trace(this.dsDataStructure.saveXML());

        	// var sDataObjPath = this.dsDataStructure.lookup("TYPE", "array", "ROOT_PATH");
        	let sDataObjPath = this.dsDataStructure.lookup("TYPE", "array object", "UPPER_ROOT_PATH");
        	this.edtDataObjectPath.value = sDataObjPath;

         	let sExpr = "UPPER_ROOT_PATH == '" + sDataObjPath + "' && (TYPE != 'array' && TYPE != 'array object' && TYPE != 'object')";

         	this.dsDataStructure.filter(sExpr);
        	this.dsTemp.copyData(this.dsDataStructure, true);
        	this.dsDataStructure.filter("");

        	// 데이터셋(결과 그리드를 표현하기 위한) 컬럼 생성 -> this.dsDataExpr
        	this.fnSetDataset();

        	// 결과 그리드 그리기
        	this.fnRedrawGrid();

        	this.Tab00.Tabpage1.form.grdDataExpr.enableredraw = true;
        	this.dsDataStructure.enableevent = true;

        	//// 후처리
        	// 데이터표현 tab - 그리드 col size 조절
        	this.Tab00.Tabpage1.form.grdDataExpr.scrollTo(0, 100);	// 임의로 v스크롤을 100으로 옮긴 후
        	let nGridVscroll = this.Tab00.Tabpage1.form.grdDataExpr.getVScrollPos();	// v스크롤의 위치를 구한다.
        	this.Tab00.Tabpage1.form.grdDataExpr.scrollTo(0, 0);	// v스크롤을 원래대로

        	let nGridWidth = 0;
        	// v스크롤의 위치가 0 이상이면 스크롤바가 생긴것이므로 스크롤의 width(18px) 를 더 뺀다
        	if (nGridVscroll > 0) {
        		nGridWidth = this.Tab00.Tabpage1.form.grdDataExpr.getOffsetWidth()-20;

        	// v스크롤의 위치가 0 미만이면 스크롤바가 생기지 않은것
        	} else {
        		nGridWidth = this.Tab00.Tabpage1.form.grdDataExpr.getOffsetWidth()-2;
        	}

        	let nColCnt = this.dsDataExpr.getColCount();
        	let nColSize = nexacro.round(nGridWidth/nColCnt, 1);	// 그리드의 width를 열의 수만큼 나누어서 열 하나의 width를 구한다.
        	if (nColSize < 90) nColSize = 90;	// 최소 width 는 90px
        	this.Tab00.Tabpage1.form.grdDataExpr.setRealColSize("body", -1, nColSize);	// 그리드 전체의 열 width 를 변경

        	// 데이터구조 tab - 그리드 맨 위부터 보이도록
        	if (this.dsDataStructure.getRowCount() > 0) {
        		this.dsDataStructure.rowposition = 0;
        	}
        };

        this.fnSetDataObject = function (oObj)
        {
        	for (let i=0;i<Object.keys(oObj).length;i++) {
        		let bLoop = true;
        		let objKey = Object.keys(oObj)[i];
        		let objValue = oObj[Object.keys(oObj)[i]];
        		let depth = nexacro.toNumber(this.arrObjType.length, 0);
        		let preObject = this.arrObjType[this.arrObjType.length-1];
        		let preObjectPath = this.arrRootPath[this.arrRootPath.length-1];
        		let rootPath = "";	// 현재 오브젝트 root path
        		let upperRootPath = "";	// 상위 root path

        		// 오브젝트 타입
        		let objType = typeof objValue;	// array, object, string, number...
        		if (Array.isArray(objValue)) {
        			objType = "array";
        		} else if (objType == "object" && preObject == "array") {
        			objType = "array object";
        		}

        		if (nexacro.isEmpty(objValue)) {
        			bLoop = false;
        			objValue = "";
        		}

        		if (depth > 0) {
        			if (objType == "array") {
        				upperRootPath = preObjectPath /*+ "." + objKey*/;
        				rootPath = preObjectPath + "." + objKey + "[*]";

        			} else if (objType == "array object") {
        				upperRootPath = preObjectPath;

        				let nFromIdx = preObjectPath.lastIndexOf("[");
        				if (nFromIdx > -1) {
        					preObjectPath = preObjectPath.substring(0, nFromIdx);
        				} else {
        					preObjectPath = preObjectPath;
        				}

        				rootPath = preObjectPath + "[" + objKey + "]";

        			} else if (objType == "object") {
        				upperRootPath = preObjectPath;
        				rootPath = preObjectPath + "." + objKey;

        				// string, number...
        			} else {
        				bLoop = false;
        				if (preObject == "array") {
        					upperRootPath = preObjectPath;

        					let nFromIdx = preObjectPath.lastIndexOf("[");
        					if (nFromIdx > -1) {
        						preObjectPath = preObjectPath.substring(0, nFromIdx);
        					} else {
        						preObjectPath = preObjectPath;
        					}

        					rootPath = preObjectPath + "[" + objKey + "]";

        				} else {
        					if (preObject == "array object") {
        						upperRootPath = this.dsDataStructure.lookup("ROOT_PATH", preObjectPath, "UPPER_ROOT_PATH");
        					} else {
        						upperRootPath = preObjectPath;
        					}

        					rootPath = preObjectPath + "." + objKey;
        				}
        			}

        		} else {
        			if (this.isArray) {
        				rootPath = "$[*]";
        			} else {
        				rootPath = "$";
        			}
        		}

        		let nAddRow = this.dsDataStructure.addRow();
        		this.dsDataStructure.setColumn(nAddRow, "KEY", objKey);
        		this.dsDataStructure.setColumn(nAddRow, "VALUE", objValue);
        		this.dsDataStructure.setColumn(nAddRow, "TYPE", objType);
        		this.dsDataStructure.setColumn(nAddRow, "DEPTH", depth);
        		this.dsDataStructure.setColumn(nAddRow, "ROOT_PATH", rootPath);
        		this.dsDataStructure.setColumn(nAddRow, "UPPER_ROOT_PATH", upperRootPath);
        		//		this.dsDataStructure.setColumn(nAddRow-1, "CHILD_CNT", Object.keys(oObj).length);

        		if (bLoop) {
        			this.arrRootPath.push(rootPath);
        			this.arrObjType.push(objType);

        			// 재귀함수 실행
        			this.fnSetDataObject(objValue);

        			this.arrObjType.pop();
        			this.arrRootPath.pop();
        		}
        	}
        };

        this.fnSetDataset = function ()
        {
        	for (let n=0;n<this.dsTemp.getRowCount();n++) {
        		let sDatapath = "@." + this.dsTemp.getColumn(n, "KEY");
        		let objColinfo = new ColumnInfo();
        		objColinfo.type = "STRING";
        		objColinfo.size = 256;
        		objColinfo.datapath = sDatapath;

        		this.dsDataExpr.addColumnInfo(this.dsTemp.getColumn(n, "KEY"), objColinfo);
        	}

        	let sDataObjPath = this.edtDataObjectPath.value;
        	this.dsDataExpr.dataobjectpath = sDataObjPath;
        	this.dsDataExpr.binddataobject = "DataObject00";
        };

        this.fnRedrawGrid = function ()
        {
        	this.Tab00.Tabpage1.form.grdDataExpr.binddataset = this.dsDataExpr.name;
        	this.Tab00.Tabpage1.form.grdDataExpr.createFormat();
        	this.Tab00.Tabpage1.form.grdDataExpr.setFormatRowProperty(0, "size", 46);
        	this.Tab00.Tabpage1.form.grdDataExpr.setFormatRowProperty(1, "size", 46);
        };

        this.fnIsJson = function (str)
        {
        	try {
        		if (typeof str == "string") {
        			let json = JSON.parse(str);
        		} else if (typeof str == "object") {
        			let json = str;
        		}

        		return (typeof json === "object");
        	} catch(e) {
        		return false;
        	}
        };


        this.sendRequest = function(url, settings)
        {
            let createCORSRequest = function(method, url) {
        		let xhr = new XMLHttpRequest();

        		if (xhr) {
        			xhr.open(method, url, true);
        		} else if (typeof XDomainRequest != "undefined") {
        			xhr = new XDomainRequest();
        			xhr.open(method, url);
        		} else {
        			xhr = null;
        		}
        		return xhr;
        	};

            const pForm = this;
        	let method = settings["method"]?settings["method"]:"GET";
            let xhr = createCORSRequest(method, url);
            let sParam = JSON.stringify(settings["param"]);
            let callback = settings["callback"];

        	try {
                xhr.timeout = nexacro.getEnvironment().httptimeout * 1000; // time in milliseconds
                xhr.ontimeout = function(e) {
                    if (typeof callback == "function") {
                        callback.call(pForm, -1, "Request Timeout");
                    } else if (typeof callback == "string") {
                        pForm[callback].call(pForm, -1, "Request Timeout");
                    }
                };
            } catch (e) {}

        	xhr.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    let response = this.responseText;

                    if (typeof callback == "function") {
                        callback.call(pForm, 0, response);
                    } else if (typeof callback == "string") {
                        pForm[callback].call(pForm, 0, response);
                    }
                }
        	};

        	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        	xhr.send(sParam);
        };

        this.fnResizeTextArea = function ()
        {
        	let obj = this.txtUrl;
        	this.txtUrl00.value = obj.value;

        	if (obj.getVScrollPos() > this.finVscrollPos) {
        		this.txtUrl00.scrollTo(0, obj.getVScrollPos());
        	} else {
        		this.txtUrl00.scrollTo(0, this.finVscrollPos);
        	}
        	this.finVscrollPos = this.txtUrl00.getVScrollPos();
        };

        /***********************************************************************************************
        * 4. 컴포넌트 이벤트 영역
        ***********************************************************************************************/
        // Send Request onclick
        this.btnCall_onclick = function(obj,e)
        {
        	this.Tab00.Tabpage2.form.txtJson.value = "";
        	this.edtDataObjectPath.value = "";
        	this.dsDataExpr.clear();
        	this.dsTemp.clearData();
        	this.dsDataStructure.clearData();

        	let sUrl = this.txtUrl.value;		// url edit
        	let sMethod = this.cboMethod.value;	// GET, POST, PUT, DELETE, HEAD, PATCH
        	let sParam = this.txtParams.value;
        	let sNavi = system.navigatorname;

        	if (nexacro.isEmpty(sUrl)) return;

        	if (sUrl.substr(0, 4) == "http") {
        		// web
        		if (sNavi != "nexacro") {
        			let settings = {
        				"method": sMethod,
        				"param": sParam,
        				"callback": function(code, response) {
        					this.DataObject00.data = response;
        					this.fnSetDataObjectInit();
        				}
        			};
        			this.sendRequest(sUrl, settings);

        		// nexacro
        		} else {
        			let header = {"Content-Type" : "application/json; charset=UTF-8"};
        			let json_param = {
        				"httpheader" : header,
        				"postdata" : sParam
        			};

        			this.DataObject00.request("SEARCH", sMethod, sUrl, json_param);
        		}
        		// text
        	} else if (sUrl.substr(0, 4) != "http") {
        		this.DataObject00.data = sUrl;
        		this.fnSetDataObjectInit();

        		// url, text 가 모두 빈값일때
        	} else {
        		alert("JSON 구조가 존재하지 않습니다.");
        		this.txtUrl.setFocus();
        		return;
        	}
        };

        let serviceid;
        this.DataObject00_onsuccess = function(obj,e)
        {
        	serviceid = e.serviceid;
            if (e.statuscode > 200) {
        		e.preventDefault();
        	}
        };

        this.DataObject00_onerror = function(obj,e)
        {
        	trace(e.statuscode + ":" + e.errormsg);

        	// 초기화
        	this.Tab00.Tabpage2.form.txtJson.value = "";
        	this.edtDataObjectPath.value = "";
        	this.dsDataStructure.clearData();
        	this.dsDataExpr.clear();
        	this.dsTemp.clearData();
        };

        this.DataObject00_onload = function(obj,e)
        {
        	if (/*e.reason == 0 || */e.reason == 2) {
        		if (serviceid == "SEARCH") {
        			this.fnSetDataObjectInit();
        		}
        	}
        };

        this.txtUrl_oneditclick = function(obj,e)
        {
        	// txt 컴포넌트를 클릭했을때
        	this.isTxtExtension = true;
        	this.setTimer(0, 300);
        };

        this.txtUrl_onsetfocus = function(obj,e)
        {
        	this.isTxtExtension = true;
        	this.setTimer(0, 300);
        };

        this.txtUrl_onkillfocus = function(obj,e)
        {
        	this.isTxtExtension = false;
        };

        this.txtUrl_onkeyup = function(obj,e)
        {
        	this.fnResizeTextArea();
        };

        this.cboMethod_onitemchanged = function(obj,e)
        {
        	let sValue = obj.value;

        	if (sValue == "GET") {
         		this.txtUrl.value = "https://jsonplaceholder.typicode.com/users";
         		this.txtParams.value = "";

        	} else if (sValue == "POST") {
         		this.txtUrl.value = "https://services.odata.org/v4/TripPinServiceRW/People";
        		this.txtParams.value = `{
    'id':'1',
            'UserName':'lewisblack',
            'FirstName':'Lewis',
            'LastName':'Black',
            'Emails':[
                'lewisblack@example.com'
            ]
        }`;

	} else if (sValue == "OPTIONS") {
         		this.txtUrl.value = "";

        	} else if (sValue == "PUT") {
         		this.txtUrl.value = "";

        	} else if (sValue == "DELETE") {
         		this.txtUrl.value = "";

        	} else if (sValue == "HEAD") {
         		this.txtUrl.value = "https://jsonplaceholder.typicode.com/users";
         		this.txtParams.value = "";

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("onlbuttonup",this.form_onlbuttonup,this);
            this.btnCall.addEventHandler("onclick",this.btnCall_onclick,this);
            this.cboMethod.addEventHandler("onitemchanged",this.cboMethod_onitemchanged,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.txtUrl.addEventHandler("oneditclick",this.txtUrl_oneditclick,this);
            this.txtUrl.addEventHandler("onkillfocus",this.txtUrl_onkillfocus,this);
            this.txtUrl.addEventHandler("onkeyup",this.txtUrl_onkeyup,this);
            this.txtUrl.addEventHandler("onsetfocus",this.txtUrl_onsetfocus,this);
            this.DataObject00.addEventHandler("onerror",this.DataObject00_onerror,this);
            this.DataObject00.addEventHandler("onload",this.DataObject00_onload,this);
            this.DataObject00.addEventHandler("onsuccess",this.DataObject00_onsuccess,this);
        };
        this.loadIncludeScript("dataobject.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
