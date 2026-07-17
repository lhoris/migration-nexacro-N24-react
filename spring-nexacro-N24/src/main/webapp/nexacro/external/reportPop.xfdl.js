(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("reportPop");
            this.set_background("#6954E1");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose",null,"5","50","50","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MWF_closeDesc");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","64","2",null,"60","64",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("UbiReport Viewer");
            obj.set_cssclass("sta_MWF_descTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("sta_MWF_descBg");
            this.addChild(obj.name, obj);

            obj = new UbiReport("UbiViewer","20","80",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("UbiViewer");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("reportPop.xfdl","lib::UbiCommon.xjs");
        this.registerScript("reportPop.xfdl", function() {
        /************************************************************************************
        * 공통 함수
        ************************************************************************************/
        this.executeIncludeScript("lib::UbiCommon.xjs"); /*include "lib::UbiCommon.xjs"*/;

        /************************************************************************************
        * 뷰어 초기 설정
        ************************************************************************************/
        this.svcurl = nexacro.getEnvironment().services["ubi"].url;

        this.UbiViewer.key = this.gfn_getRandomKey();
        this.UbiViewer.ubiserverurl = this.svcurl + "UbiServer";
        this.UbiViewer.resource = this.svcurl + "ubi4/js";		// 툴바 이미지를 가져오는 경로 (For HTML)
        this.UbiViewer.reporturl = this.svcurl + "ubi4/work/";	// 리포트 파일 경로(For Runtime)
        this.UbiViewer.resid = "UBIHTML";					// ubiservice.xml에 등록된 ID (For HTML)
        this.UbiViewer.scale = "-9998";						// 보기 배율 ( 60/80/100/.../300/-9998(폭맞춤)/-9999(쪽맞춤) )
        this.UbiViewer.datasource = "Tutorial4_ORADB";		// ubiserver.xml에 등록된 Datasource ID (For Runtime)
        this.UbiViewer.fileurl = this.svcurl + "ubi4/resource";	// 이미지아이템/공통아이템 경로 (For Runtime)
        /************************************************************************************
        * 기타 API
        this.UbiViewer.setVisibleToolbar("SAVE_PDF", false);	//SAVE_PDF/SAVE_EXCEL/SAVE_EXCEL_NO/SAVE_PPTX/SAVE_HML/SAVE_DOCX/SAVE_CELL/SAVE_IMAGE/PRINT_PDF/PRINT_HTML/PRINT_UBI
        this.UbiViewer.setUserSaveList('Image,Pdf,Docx,Xls,Pptx,Hml,Cell');
        this.UbiViewer.setUserPrintList('Ubi,Html,Pdf');
        this.UbiViewer.printHTML();		// HTML PrintSet
        this.UbiViewer.printPDF();		// PDF PrintSet
        this.UbiViewer.export('PDF');	// PDF/EXCEL/EXCEL_NO/HWP/PPTX/HML/DOCX/CELL/IMAGE
        this.UbiViewer.print();			// Direct Print (전용뷰어)
        this.UbiViewer.printSet();		// PrintSet (전용뷰어)
        ************************************************************************************/

        /************************************************************************************
        * 팝업 창으로 호출이 이루어졌을 때 사용이 됨
        ************************************************************************************/
        this.reportPop_onload = function(obj,e)
        {
        	let ubiIsRuntime = this.parent.ubiIsRuntime || this.parent.parent.ubiIsRuntime;
        	let ubiReportFile = this.parent.ubiReportFile || this.parent.parent.ubiReportFile;
        	let ubiArgument = this.parent.ubiArgument || this.parent.parent.ubiArgument;
        	let ubiSvcUrl = this.parent.ubiSvcUrl || this.parent.parent.ubiSvcUrl;
        	let ubiLocalDs = this.parent.ubiLocalDs || this.parent.parent.ubiLocalDs;
        	let ubiGridObj = this.parent.ubiGridObj || this.parent.parent.ubiGridObj;
        	let ubiUseTrace = this.parent.ubiUseTrace || this.parent.parent.ubiUseTrace;

        	// 리포트가 정의되지 않았을 경우 리턴
        	if( ubiReportFile == undefined ) {
        		return;
        	}
        	this.callReport(ubiIsRuntime, ubiReportFile, ubiArgument, ubiSvcUrl, ubiLocalDs, ubiGridObj, ubiUseTrace);
        };

        /************************************************************************************
        * DIV로 호출이 이루어졌을 때 사용이 됨
        ************************************************************************************/
        this.callReport = function (ubiIsRuntime, ubiReportFile, ubiArgument, ubiSvcUrl, ubiLocalDs, ubiGridObj, ubiUseTrace)
        {
        	this.UbiViewer.jrffile = ubiReportFile;
        	this.gfn_setUbiArgument(this.UbiViewer, ubiArgument, ubiUseTrace);

        	if (ubiIsRuntime == true) {		// Grid Runtime Report
        		this.gfn_setUbiRuntime(this.UbiViewer, ubiGridObj, ubiUseTrace);
        	} else {
        		this.UbiViewer.runtimedata = "";
        		if( ubiSvcUrl != null ) {		// Report using service
        			this.gfn_setUbiService(this.UbiViewer, ubiSvcUrl, ubiUseTrace);
        		}
        		else if( ubiLocalDs != null ) {	// Report using dataset
        			this.gfn_setUbiDataset(this.UbiViewer, ubiLocalDs, ubiUseTrace);
        			this.UbiViewer.setVisibleToolbar("SAVE",false);
        		}
        	}
        	this.UbiViewer.retrieve(this, "UbiPreviewEnd");
        };

        /************************************************************************************
        * 미리보기 완료 후 이벤트 처리
        ************************************************************************************/
        this.UbiPreviewEnd = function()
        {
        	this.UbiViewer.addEventHandler('PrintEnd', this.UbiPrintEnd, this);
        	this.UbiViewer.addEventHandler('ExportEnd', this.UbiExportEnd, this);

        	// 조회된 페이지가 50 페이지 이상이면 PDF, HTML 인쇄를 비활설화하고 전용뷰어 인쇄를 활성화함
        	this.gfn_setActivePluginViewer(this.UbiViewer, 50);

        	// 버전 확인
        	//this.UbiViewer.aboutBox();
        };

        /************************************************************************************
        * 인쇄  완료 후 콜백
        ************************************************************************************/
        this.UbiPrintEnd = function(flag)
        {

        };

        /************************************************************************************
        * 저장 완료 후 콜백
        ************************************************************************************/
        this.UbiExportEnd = function(flag, fileName)
        {
        	if (nexacro._Browser == 'Runtime') {
        		//trace(this.UbiViewer.getVariable('exportFilePath'));
        	} else {
        		//console.log('[HTML] ' + flag + ', ' + fileName);
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.reportPop_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("reportPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
