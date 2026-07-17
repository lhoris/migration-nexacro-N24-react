(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FitToContents");
            this.set_titletext("Fit To Contents");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_movie", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.Data[0].Result[*]");
            obj._setContents("<ColumnInfo><Column id=\"posters\" datapath=\"@.posters\" type=\"STRING\" size=\"256\"/><Column id=\"title\" datapath=\"@.title\" type=\"STRING\" size=\"256\"/><Column id=\"titleEng\" datapath=\"@.titleEng\" type=\"STRING\" size=\"256\"/><Column id=\"directorNm\" datapath=\"@.directors.director[0].directorNm\" type=\"STRING\" size=\"256\"/><Column id=\"directorEnNm\" datapath=\"@.directors.director[0].directorEnNm\" type=\"STRING\" size=\"256\"/><Column id=\"runtime\" datapath=\"@.runtime\" type=\"STRING\" size=\"256\"/><Column id=\"actorNm\" datapath=\"@.actors.actor[0].actorNm\" type=\"STRING\" size=\"256\"/><Column id=\"actorEnNm\" datapath=\"@.actors.actor[0].actorEnNm\" type=\"STRING\" size=\"256\"/><Column id=\"genre\" datapath=\"@.genre\" type=\"STRING\" size=\"256\"/><Column id=\"prodYear\" datapath=\"@.prodYear\" type=\"STRING\" size=\"256\"/><Column id=\"nation\" datapath=\"@.nation\" type=\"STRING\" size=\"256\"/><Column id=\"plotText\" datapath=\"@.plots.plot[0].plotText\" type=\"STRING\" size=\"256\"/><Column id=\"company\" datapath=\"@.company\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","20","20","251","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("TEXT(\"comp.fittocontents\",\"컴포넌트 사이즈 자동 조정\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("comp.fittocontents");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","141","260",null,null,"33",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_movie");
            obj.set_autofittype("col");
            obj.set_scrollbartype("indicator indicator");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"159\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"40\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"POSTER\"/><Cell col=\"1\" text=\"TITLE, DIRECTOR\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:posters\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" autosizerow=\"none\"/><Cell col=\"1\" text=\"bind:title\" wordWrap=\"english\" border=\"1px solid #e2e2e3,0px none,0px solid \" font=\"normal 16px/normal &quot;Noto Sans KR Regular,맑은 고딕&quot;\" verticalAlign=\"middle\" autosizerow=\"limitmin\"/><Cell row=\"1\" col=\"1\" text=\"bind:directorNm\" wordWrap=\"english\" font=\"normal 12px/normal &quot;Noto Sans KR Regular,맑은 고딕&quot;\" verticalAlign=\"top\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_summary","445","245","455","80",null,null,null,null,"80",null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("5px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_border("1px dotted #bdc2c9");
            obj.set_cssclass("sta_WF_txt14px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_image","303","140","132","185",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","445","141","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_emptitle");
            obj.set_fittocontents("width");
            obj.set_border("1px dotted #bdc2c9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","445","196","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_fittocontents("width");
            obj.set_border("1px dotted #bdc2c9");
            obj.set_cssclass("sta_WF_txt14px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:5","196","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_fittocontents("width");
            obj.set_border("1px dotted #bdc2c9");
            obj.set_cssclass("sta_WF_txt14px");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","303","st_summary:8","597","174",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_border("1px dotted #bdc2c9");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","15","14","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("RUNTIME");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","15","43","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("STARRING");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","15","72","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("GENRE");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","15","101","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("DIRECTOR");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","15","130","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("NATION");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","115","14","440","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("5px");
            obj.set_cssclass("sta_WF_txt14px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","115","43","440","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("5px");
            obj.set_cssclass("sta_WF_txt14px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","115","72","440","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("5px");
            obj.set_cssclass("sta_WF_txt14px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","115","101","440","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("5px");
            obj.set_cssclass("sta_WF_txt14px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","115","130","440","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("5px");
            obj.set_cssclass("sta_WF_txt14px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","447","176","290","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("* Production / Year");
            obj.set_cssclass("sta_WF_fitTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","447","225","290","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("* Summary");
            obj.set_cssclass("sta_WF_fitTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","66","760","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_compTitle05");
            obj.set_text("TEXT(\"comp.fittocontents.top.desc\")");
            obj.getSetter("messageid").set("comp.fittocontents.top.desc");
            obj.set_usedecorate("true");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","st_summary","text","ds_movie","plotText");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","img_image","image","ds_movie","posters");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","st_title","text","ds_movie","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Static01","text","ds_movie","company");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Static02","text","ds_movie","prodYear");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Static04","text","ds_movie","runtime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Static05","text","ds_movie","actorEnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Static06","text","ds_movie","genre");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Static07","text","ds_movie","directorNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Static09","text","ds_movie","nation");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fittocontents.xfdl", function() {

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.gvLangCd = "ko_KR";


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/

        /**
         * @description 화면 load시 초기설정 event
        */
        this.FitToContents_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        	this.fn_getData();
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fn_getYYMMDD = function(date)
        {
        	let year = new String(date.getFullYear());
        	let month = new String(date.getMonth()+1);
        	let day = new String(date.getDate());

        	if(month.length == 1){ month = "0" + month;  }
        	if(day.length == 1){   day = "0" + day; }

        	return (year + month + day);
        }

        this.fn_getData = function()
        {
        	let fromDt = new nexacro.Date();
        	fromDt.addDate(-7);
        	let s_fromDt = this.fn_getYYMMDD(fromDt);

        	let toDt = new nexacro.Date();
        	let s_toDt = this.fn_getYYMMDD(toDt);

        	/* jsonp로 구현시 */
        	if(nexacro._Browser == "Runtime"){
        		let servicekey = nexacro.getApplication().koreafilm;
        		let restApiURL = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&ServiceKey="+servicekey+"&releaseDts=" + s_fromDt + "&releaseDte=" + s_toDt;
        		this.DataObject00.url = restApiURL;
        		this.DataObject00.load();
        	}else{
        		let sId = "filmDataLoad";
        		let sUrl = "svc::koreafilmLoad.do";
        		let sInDs = "";
        		let sOutDs = "ds_result=output1";
        		let sParam = "fromDt="+s_fromDt+" toDt="+s_toDt;
        		let sCallback = "fn_Callback";
        		this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback);
        	}
        	/* */


        }

        this.fn_Callback = function(sId, nErrorCd, sErrorMsg)
        {

        	if(nErrorCd<0)
        	{
        		alert("["+nErrorCd+"]"+sErrorMsg);
        	}else
        	{
        		//alert("success");
        		this.DataObject00.data = this.ds_result.getColumn(0,"jsonp");
        	}

        }


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.DataObject00_onload = function(obj,e)
        {
        	let jsonData = obj.data;

        	for(let i=0; i<jsonData.Data[0].Result.length; i++)
        	{
        		if(jsonData.Data[0].Result[i].posters.indexOf("|") > 0)
        		{
        			jsonData.Data[0].Result[i].posters = jsonData.Data[0].Result[i].posters.split("|")[0];
        		}
        	}
        };

        this.FitToContents_onbindingvaluechanged = function(obj,e)
        {
        	this.resetScroll();

        	this.height = this.Div00.getOffsetBottom() + 30;

        // 	//frame resize
        // 	var p = this.parent.parent;
        // 	p["mainPageOnLoad"].call(p, this.getOffsetHeight());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FitToContents_onload,this);
            this.addEventHandler("onbindingvaluechanged",this.FitToContents_onbindingvaluechanged,this);
            this.DataObject00.addEventHandler("onload",this.DataObject00_onload,this);
        };
        this.loadIncludeScript("fittocontents.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
