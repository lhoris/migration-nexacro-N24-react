(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FileUpDown");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"realFileName\" type=\"STRING\" size=\"256\"/><Column id=\"displayFileName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","20","470","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","20","89","310","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"91","69","30","92",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"comp.filetransfer.delete\",\"삭제\")");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("comp.filetransfer.delete");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileUpload","20","127",null,"320","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("Drag & Drop files Here");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"258\"/><Column size=\"100\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"91","69","30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"comp.filetransfer.transfer\",\"전송\")");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("comp.filetransfer.transfer");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileDownload","20","510",null,"320","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"265\"/><Column size=\"100\"/><Column size=\"48\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"SIZE\"/><Cell col=\"3\" text=\"DEL\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"URL(&apos;imagerc::img_grd_reject.png&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload",null,"474","100","30","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"comp.filetransfer.downloadBtn\",\"다운로드\")");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("comp.filetransfer.downloadBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"474","100","30","123",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("TEXT(\"grid.function.staSearch\",\"조회\")");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("grid.function.staSearch");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"91","69","30","164",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TEXT(\"sample.personalization.add\",\"추가\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("sample.personalization.add");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","14","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("TEXT(\"comp.filetransfer\",\"File Transfer\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("comp.filetransfer");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",440,850,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_border("");
                p.set_background("");

                p.Static02.set_taborder("0");
                p.Static02.set_text("FileDownload");
                p.Static02.set_cssclass("sta_WF_compTitle02");
                p.Static02.set_positionstep("0");
                p.Static02.move("20","470","350","30",null,null);

                p.Static56.set_taborder("1");
                p.Static56.set_text("FileUpload");
                p.Static56.set_cssclass("sta_WF_compTitle02");
                p.Static56.set_positionstep("0");
                p.Static56.move("20","89","310","30",null,null);

                p.btnDel.set_taborder("2");
                p.btnDel.set_text("TEXT(\"comp.filetransfer.delete\",\"삭제\")");
                p.btnDel.set_positionstep("0");
                p.btnDel.set_cssclass("btn_WF_basic01");
                p.btnDel.getSetter("messageid").set("comp.filetransfer.delete");
                p.btnDel.move(null,"91","69","30","92",null);

                p.grdFileUpload.set_taborder("3");
                p.grdFileUpload.set_binddataset("dsUpload");
                p.grdFileUpload.set_autofittype("col");
                p.grdFileUpload.set_nodatatext("Drag & Drop files Here");
                p.grdFileUpload.set_positionstep("0");
                p.grdFileUpload.move("20","127",null,"320","20",null);

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("TEXT(\"comp.filetransfer.transfer\",\"전송\")");
                p.btnSave.set_positionstep("0");
                p.btnSave.set_cssclass("btn_WF_basic02");
                p.btnSave.getSetter("messageid").set("comp.filetransfer.transfer");
                p.btnSave.move(null,"91","69","30","20",null);

                p.grdFileDownload.set_taborder("5");
                p.grdFileDownload.set_binddataset("dsDownload");
                p.grdFileDownload.set_autofittype("col");
                p.grdFileDownload.set_positionstep("0");
                p.grdFileDownload.move("20","510",null,"320","20",null);

                p.btnDonwload.set_taborder("6");
                p.btnDonwload.set_text("TEXT(\"comp.filetransfer.downloadBtn\",\"다운로드\")");
                p.btnDonwload.set_positionstep("0");
                p.btnDonwload.set_cssclass("btn_WF_basic01");
                p.btnDonwload.getSetter("messageid").set("comp.filetransfer.downloadBtn");
                p.btnDonwload.move(null,"474","100","30","20",null);

                p.btnSearch.set_taborder("7");
                p.btnSearch.set_text("TEXT(\"grid.function.staSearch\",\"조회\")");
                p.btnSearch.set_positionstep("0");
                p.btnSearch.set_cssclass("btn_WF_basic02");
                p.btnSearch.getSetter("messageid").set("grid.function.staSearch");
                p.btnSearch.move(null,"474","100","30","123",null);

                p.btnAdd.set_taborder("8");
                p.btnAdd.set_text("TEXT(\"sample.personalization.add\",\"추가\")");
                p.btnAdd.set_cssclass("btn_WF_basic01");
                p.btnAdd.getSetter("messageid").set("sample.personalization.add");
                p.btnAdd.move(null,"91","69","30","164",null);

                p.Static00_00.set_taborder("9");
                p.Static00_00.set_text("TEXT(\"comp.filetransfer\",\"File Transfer\")");
                p.Static00_00.set_cssclass("sta_WF_pageTitle");
                p.Static00_00.getSetter("messageid").set("comp.filetransfer");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("20","14","260","40",null,null);
            	}
            );
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen",920,850,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdFileUpload.move("20","117",null,"320","20",null);

                p.Static00_00.move("20","20","260","40",null,null);

                p.Static56.move("20","81","310","30",null,null);

                p.Static02.move("20","464","350","30",null,null);

                p.grdFileDownload.move("20","500",null,"320","20",null);

                p.btnDel.move(null,"81","69","30","93",null);

                p.btnSave.set_cssclass("btn_WF_basic02");
                p.btnSave.move(null,"81","69","30","20",null);

                p.btnAdd.move(null,"81","69","30","167",null);

                p.btnDonwload.move(null,"464","106","30","20",null);

                p.btnSearch.move(null,"464","106","30","132",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("filetransfer.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /* service url : 사용경로 지정 */
        this.saveUrl = nexacro.getEnvironment().services["svc"].url;
        this.nMaxFileSize = 2000000;	//각 파일 최대사이즈 (2 Mbyte)

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION, filetransfer 서비스 호출 처리
         ************************************************************************************************/
        /**
        * fnSearchFile : 파일 리스트 조회 서비스 호출
        * @return : N/A
        * @example :
        */
        this.fnSearchFile = function()
        {
        	let strSvcId    = "list";
        	let strSvcUrl   = "svc::getFileList?filepath=sample";
        	let inData      = "";
        	let outData     = "dsDownload=dsList";
        	let strArg      = "";
        	let callBackFnc = "fnCallbackTransaction";
        	let isAsync   	= false;

        	this.transaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, a=b
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync,		// 비동기통신 여부 [생략가능]
        						0); 			// XML
        };

        /**
        * fn_FileDelete : 파일 삭제 서비스 호출
        * @return : N/A
        * @example :
        */
        this.fn_FileDelete = function(rowIdx, sFileName)
        {
        	this.dsDownload.deleteRow(rowIdx);

        	this.dsDeleteFile.clearData();

        	let idx = this.dsDeleteFile.addRow();
        	this.dsDeleteFile.setColumn(idx,"FILE_NAME", sFileName);

        	let strSvcId    = "delete";
        	let strSvcUrl   = "svc::deleteFile";
        	let inData      = "input=dsDeleteFile";
        	let outData     = "";
        	let strArg      = "filepath=sample";
        	let callBackFnc = "fnCallbackTransaction";
        	let isAsync   	= false;

        	this.transaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, a=b
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync,		// 비동기통신 여부 [생략가능]
        						0); 			// XML
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /**
        * fnCallbackTransaction : 트랜젝션 Callback 함수
        * @param {String}  svcId	- 서비스 ID
        * @param {String}  errCode	- 에러코드
        * @param {String}  errMsg	- 에러메세지
        * @return : N/A
        * @example :
        */
        this.fnCallbackTransaction = function(svcId, errCode, errMsg)
        {
        	if(errCode < 0){
        		alert(errCode+" >>> "+ errMsg);
        		return;
        	}

        	switch(svcId) {
        		case "list" :
        			this.dsDownload.enableevent = false;

        			this.dsDownload.addColumn("CHK", "STRING", 255);
        			for(var i=0; i<this.dsDownload.getRowCount(); i++) {
        				this.dsDownload.setColumn(i, "CHK", 0);
        				this.dsDownload.setColumn(i,"FiLE_SIZE",this.fnGetFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        			}

        			this.dsDownload.enableevent = true;
        			break;

        		case "delete" :
        			break;

        		default:
        	}
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /**
        * fnUploadFile : 파일 업로드
        * @return : N/A
        * @example :
        */
        this.fnUploadFile = function()
        {
        	//파일업로드시 파일저장 폴더경로 PostData 셋팅
        	this.fileUpTrans.setPostData("filepath","sample");

        	//file upload
        	let uploadUrl = this.saveUrl +"uploadFiles";
        	this.fileUpTrans.upload(uploadUrl);
        }

        /**
        * fnAddFileList : fileUpTrans객체에 파일을 추가한다.
        * @param {Array}  filelists	- 파일 리스트
        * @return : N/A
        * @example :
        */
        this.fnAddFileList = function(filelists)
        {
        	let len = filelists.length;
        	for (let i = 0; i < len; i++) {
        		let vFile = filelists[i];
        		let isExist = this.fileUpTrans.existFile(vFile);

        		//파일중복체크
        		if(isExist){
        			alert("이미추가된 파일이 있습니다.");
        			return;
        		}

        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);

        		vFile.open(null, VirtualFile.openRead);
        	}
        }

        /**
        * fnGetFileSize : 파일 크기에 맞는 파일 사이즈를 표시한다.
        * @param {String}  filesize	- 파일사이즈
        * @return : N/A
        * @example :
        * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        */
        this.fnGetFileSize = function(filesize)
        {
        	let sOutput = filesize + " bytes";
        	let aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        	for (let nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        /**
         * @class  유일한 ID 를 반환
         * @param {String} prefix id 앞에 붙일 문자열
         * @param {String} separator id 생성시 구분용 문자(default: '-' ).
         * @return {String} id
         * @example
         * trace(this.gfnGetUniqueI());
         * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
         *
         * trace(this.gfnGetUniqueI("Button_"));
         * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
         *
         * trace(this.gfnGetUniqueI("", "_"));
         * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
         *
         * trace(this.fnGetUniqueId("Button_", "_"));
         * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
        */

        /**
         * @class  alphabet character code.
         * charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
        */
        this._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102]
        this.fnGetUniqueId = function(prefix, separator)
        {
        	if ( nexacro.isEmpty(prefix) ) prefix = "";
        	if ( nexacro.isEmpty(separator) ) {
        		separator = 45;
        	} else {
        		separator = separator.charCodeAt(0);
        	}
        	const pThis = this;
        	let charcode = this._ALPHA_CHAR_CODES;
        	let math = Math;
        	let seq = 0;
        	let seq0;
        	let tmpArray = new Array(36);
        	let idx = -1;

        	while (seq < 8)
        	{
        		tmpArray[++idx] = charcode[math.random() * 16 | 0];
        		seq++;
        	}
        	seq = 0;
        	while (seq < 3)
        	{
        		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
        		seq0 = 0;
        		while (seq0 < 4)
        		{
        			tmpArray[++idx] = charcode[math.random() * 16  | 0];
        			seq0++;
        		}
        		seq++;
        	}
        	tmpArray[++idx] = separator; //45 => "-", 95=> "_"

        	let tmpStr = (new Date()).getTime();
        	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
        	seq = 0;
        	while (seq < 8)
        	{
        		tmpArray[++idx] = tmpStr.charCodeAt(seq);
        		seq++;
        	}
        	seq = 0;
        	while (seq < 4)
        	{
        		tmpArray[++idx] = charcode[math.random() * 16 | 0];
        		seq++;
        	}
        	return prefix + String.fromCharCode.apply(null, tmpArray);
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * @description 파일 추가 버튼 클릭
        */
        this.btnAdd_onclick = function(obj,e)
        {
        	//file dialog open
        	this.fileDialog.open("Choose files", FileDialog.MULTILOAD);
        };

        /**
         * @description 파일 삭제 버튼 클릭
        */
        this.btnDel_onclick = function(obj,e)
        {
        	let grd 	= this.grdFileUpload;
        	let ds 		= this.dsUpload;
        	let fileTrs = this.fileUpTrans;

        	let chkAll 	= grd.getCellPropertyValue(-1, 0, "text");
        	let chk 	= ds.findRow('CHK', 1);

        	if (chkAll == 1) {
        		// 전체 삭제
        		ds.clearData();
        		fileTrs.clearFileList();
        		grd.setCellProperty('head', 0, 'text', 0);

        	} else if (chk == -1) {
        		// 단건 삭제
        		let nRow = ds.rowposition;
        		ds.deleteRow(nRow);
        		fileTrs.removeFileByIndex(nRow);

        	} else {
        		// 체크박스 선택 삭제
        		let length 	= ds.rowcount;
        		for(let nRow=length-1; nRow>=0; nRow--) {
        			if(ds.getColumn(nRow, 'CHK') == 1) {
        				ds.deleteRow(nRow);
        				fileTrs.removeFileByIndex(nRow);
        			}
        		}

        	}
        };

        /**
         * @description 파일 전송 버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	//file upload 실행
        	this.setWaitCursor(true);
        	this.fnUploadFile();
        };

        /**
         * @description 파일 조회 버튼 클릭
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearchFile();
        };

        /**
         * @description 다운로드 버튼 클릭
        */
        this.btnDonwload_onclick = function(obj,e)
        {
        	//파일다운로드시 파일다운 폴더경로 PostData 셋팅
        	this.fileDownTrans.setPostData("filepath","sample");

        	let objDs = this.dsDownload;
        	let nCnt = objDs.getRowCount();

        	this.dsDownFileList.clearData();

        	for(let i=0;i<nCnt;i++){
        		let nChk = objDs.getColumn(i,"CHK");

        		if(nChk==1) {
        			let nRow = this.dsDownFileList.addRow();

        			this.dsDownFileList.setColumn(nRow, "realFileName", objDs.getColumn(i,"FILE_NAME"));
        			this.dsDownFileList.setColumn(nRow, "displayFileName", objDs.getColumn(i,"FILE_NAME"));
        		}
        	}

        	if(this.dsDownFileList.getRowCount() == 0) {
        		alert("다운로드 할 파일을 선택하세요.");
        		return;
        	}

        	this.fileDownTrans.setPostData("fileInfo",this.dsDownFileList.saveXML());

        	//NRE 를 위한 다운로드 Default 파일명
        	if(this.dsDownFileList.getRowCount() > 1) {
        		//파일여러개 선택시 zip 파일로 압축하여 다운로드
        		this.fileDownTrans.downloadfilename = "첨부파일.zip";
        	}else{
        		//파일이 1개일 경우 해당 파일명으로 다운로드
        		this.fileDownTrans.downloadfilename = this.dsDownFileList.getColumn(0, "displayFileName");
        	}

        	//파일다운로드 실행
        	let downloadUrl = this.saveUrl +"downloadFile";
        	this.fileDownTrans.download(downloadUrl);
        };


        /**
         * @description 파일다이얼로그 닫았을 때 이벤트
        */
        this.fileDialog_onclose = function(obj,e)
        {
        	this.fnAddFileList(e.virtualfiles);
        };

        /**
         * @description 파일업로드 그리드 마우스 드랍 이벤트
        */
        this.grdFileUpload_ondrop = function(obj,e)
        {
        	if(e.datatype == "file") {
        		this.fnAddFileList(e.filelist);
        	}
        };

        /**
         * @description 업로드 그리드 전체체크
        */
        this.grdFileUpload_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {

        		let chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 1) {
        			obj.setCellProperty("head", e.cell, "text", 1);
        			for(let i=0; i<this.dsUpload.rowcount; i++) {
        				this.dsUpload.setColumn(i, "CHK", 1);
        			}

        		} else {
        			obj.setCellProperty("head", e.cell, "text", 0);
        			for(let i=0; i<this.dsUpload.rowcount; i++) {
        				this.dsUpload.setColumn(i, "CHK", 0);
        			}

        		}
        	}
        };

        /**
         * @description 파일업로드 체크박스 클릭 이벤트
        */
        this.grdFileUpload_oncellclick = function(obj,e)
        {
        	if(e.col == 0) {

        		let ds = obj.getBindDataset();
        		let strColID = ds.getColID(e.col);
        		let chk = ds.findRow(strColID, 0);

        		// 전체 체크 여부
        		let unchkedIdx = this.dsUpload.findRow("CHK", 0);
        		if(unchkedIdx == -1) {	// 모두 체크됨
        			obj.setCellProperty("head", 0, "text", 1);
        		} else {	// 체크되지 않은 row 존재
        			obj.setCellProperty("head", 0, "text", 0);
        		}

        	}
        };

        /**
         * @description 다운로드 그리드 전체체크
        */
        this.grdFileDownload_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {

        		let chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 1) {

        			obj.setCellProperty("head", e.cell, "text", 1);
        			for(let i=0; i<this.dsDownload.rowcount; i++) {
        				this.dsDownload.setColumn(i, "CHK", 1);
        			}

        		} else {

        			obj.setCellProperty("head", e.cell, "text", 0);
        			for(let i=0; i<this.dsDownload.rowcount; i++) {
        				this.dsDownload.setColumn(i, "CHK", 0);
        			}

        		}
        	}
        };

        /**
         * @description 파일다운로드 체크박스, 삭제 클릭 이벤트
        */
        this.grdFileDownload_oncellclick = function(obj,e)
        {

        	if (e.col == 0) {

        		let ds = obj.getBindDataset();
        		let strColID = ds.getColID(e.col);
        		let chk = ds.findRow(strColID, 0);

        	} else if (e.cell==3) {	//삭제버튼 클릭시 바로 삭제

        		let sFileName = obj.getBindDataset().getColumn(e.row,"FILE_NAME");
        		this.fn_FileDelete(e.row, sFileName);

        	}

        	// 전체 체크 여부
        	let unchkedIdx = this.dsDownload.findRow("CHK", 0);
        	if(unchkedIdx == -1) {	// 모두 체크됨
        		obj.setCellProperty("head", 0, "text", 1);
        	} else {	// 체크되지 않은 row 존재
        		obj.setCellProperty("head", 0, "text", 0);
        	}

        };

        /**
         * @description 다운로드 그리드 파일 다운로드
        */
        this.grdFileDownload_oncelldblclick = function(obj,e)
        {
        	if(e.col == 1 || e.col == 2) {
        		//파일다운로드시 파일다운 폴더경로 PostData 셋팅
        		this.fileDownTrans.setPostData("filepath","sample");

        		let objDs = this.dsDownload;

        		this.dsDownFileList.clearData();

        		let nRow = this.dsDownFileList.addRow();

        		this.dsDownFileList.setColumn(nRow, "realFileName", objDs.getColumn(e.row,"FILE_NAME"));
        		this.dsDownFileList.setColumn(nRow, "displayFileName", objDs.getColumn(e.row,"FILE_NAME"));

        		this.fileDownTrans.setPostData("fileInfo",this.dsDownFileList.saveXML());

        		//파일이 1개일 경우 해당 파일명으로 다운로드
        		this.fileDownTrans.downloadfilename = this.dsDownFileList.getColumn(0, "displayFileName");

        		//파일다운로드 실행
        		var downloadUrl = this.saveUrl +"downloadFile";
        		this.fileDownTrans.download(downloadUrl);
        	}
        };


        /**
         * @description 파일추가 성공
        */
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1) {	//open() callback
        		obj.getFileSize();
        	} else if (e.reason == 9) {	//getFileSize() callback
        		obj.close();

        		let sFileName = obj.filename;
        		let nFileSize = e.filesize;

        		if (nFileSize > this.nMaxFileSize){
        			alert("첨부파일 최대용량은 2 MByte 입니다.");
        			return;
        		}

        		let strId = this.fnGetUniqueId();

        		this.fileUpTrans.addFile(strId, obj);

        		let nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", sFileName);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.fnGetFileSize(nFileSize));
        	}
        }
        /**
         * @description 파일추가 실패
        */
        this.fileList_onerror = function(obj, e)
        {
        	let msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;

        	alert(msg);
        }


        /**
         * @description 업로드 성공
        */
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);

        	alert("전송완료");
        };
        /**
         * @description 업로드 실패
        */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	alert(e.errortype + ">>" + e.errormsg);
        };


        /**
         * @description 다운로드 성공
        */
        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };
        /**
         * @description 다운로드 실패
        */
        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdFileUpload.addEventHandler("ondrop",this.grdFileUpload_ondrop,this);
            this.grdFileUpload.addEventHandler("onheadclick",this.grdFileUpload_onheadclick,this);
            this.grdFileUpload.addEventHandler("oncellclick",this.grdFileUpload_oncellclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grdFileDownload.addEventHandler("oncelldblclick",this.grdFileDownload_oncelldblclick,this);
            this.grdFileDownload.addEventHandler("onheadclick",this.grdFileDownload_onheadclick,this);
            this.grdFileDownload.addEventHandler("oncellclick",this.grdFileDownload_oncellclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };
        this.loadIncludeScript("filetransfer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
