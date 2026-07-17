(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsXpushMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush00", this);
            obj.set_debug("false");
            obj.set_layouturl("pushUrl::push_message_layout.xml");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03_00_00","20","66",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_compTitle05");
            obj.set_text("TEXT(\"external.xpush.subtitle\",\"데모사이트에 접속한 모든 사용자에게 메시지를 전송해 보세요.\")");
            obj.set_fittocontents("height");
            obj.set_wordWrap("english");
            obj.getSetter("messageid").set("external.xpush.subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stXPushState","21","Static03_00_00:10",null,"40","21",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            obj.set_text("TEXT(\"external.xpush.state\",\"<fc v=\'gray\'>X-PUSH 와 연결 끊어짐</fc>\")");
            obj.set_textAlign("center");
            obj.getSetter("messageid").set("external.xpush.state");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","21","stXPushState:0",null,"150","21",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_component");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","40",null,"1","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_titleLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","8","200","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"external.xpush.divtitle\",\"푸시 메시지 전송\")");
            obj.set_cssclass("sta_WF_txt20px");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("external.xpush.divtitle");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_listen_noti",null,"-2","60","50","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_enable("true");
            obj.set_value("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staPushNoti",null,"5","80","30","chk_listen_noti:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"external.xpush.usenoti\",\"푸시사용\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.set_textAlign("right");
            obj.getSetter("messageid").set("external.xpush.usenoti");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnSendMsg",null,"69","120","40","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"external.xpush.send\",\"전송\")");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("external.xpush.send");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtMsg","20","69",null,"40","btnSendMsg:10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("TEXT(\"external.xpush.editnull\",\"메시지를 입력하세요.\")");
            obj.getSetter("messageid").set("external.xpush.editnull");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div_loading","0","0",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_background("url(\'imagerc::page_loading.gif\') no-repeat center center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","22","20","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("X-PUSH");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.div_loading
            obj = new Layout("default","",0,0,this.Div01.form.div_loading.form,function(p){});
            this.Div01.form.div_loading.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Static00");
                p.Static00.set_cssclass("sta_WF_titleLine");
                p.Static00.move("0","40",null,"1","0",null);

                p.Static03_00.set_taborder("1");
                p.Static03_00.set_text("TEXT(\"external.xpush.divtitle\",\"푸시 메시지 전송\")");
                p.Static03_00.set_cssclass("sta_WF_txt20px");
                p.Static03_00.set_fittocontents("width");
                p.Static03_00.getSetter("messageid").set("external.xpush.divtitle");
                p.Static03_00.move("30","8","200","30",null,null);

                p.chk_listen_noti.set_taborder("3");
                p.chk_listen_noti.set_cssclass("chk_WF_toggle");
                p.chk_listen_noti.set_enable("true");
                p.chk_listen_noti.set_value("false");
                p.chk_listen_noti.move(null,"-2","60","50","10",null);

                p.staPushNoti.set_taborder("2");
                p.staPushNoti.set_text("TEXT(\"external.xpush.usenoti\",\"푸시사용\")");
                p.staPushNoti.set_cssclass("sta_WF_compTitle03");
                p.staPushNoti.set_textAlign("right");
                p.staPushNoti.getSetter("messageid").set("external.xpush.usenoti");
                p.staPushNoti.set_fittocontents("width");
                p.staPushNoti.move(null,"5","80","30","chk_listen_noti:0",null);

                p.btnSendMsg.set_taborder("5");
                p.btnSendMsg.set_text("TEXT(\"external.xpush.send\",\"전송\")");
                p.btnSendMsg.set_cssclass("btn_WF_basic02");
                p.btnSendMsg.getSetter("messageid").set("external.xpush.send");
                p.btnSendMsg.set_enable("false");
                p.btnSendMsg.move(null,"69","120","40","20",null);

                p.edtMsg.set_taborder("4");
                p.edtMsg.set_displaynulltext("TEXT(\"external.xpush.editnull\",\"메시지를 입력하세요.\")");
                p.edtMsg.getSetter("messageid").set("external.xpush.editnull");
                p.edtMsg.move("20","69",null,"40","btnSendMsg:10",null);

                p.div_loading.set_taborder("6");
                p.div_loading.set_background("url(\'imagerc::page_loading.gif\') no-repeat center center");
                p.div_loading.set_visible("false");
                p.div_loading.set_text("");
                p.div_loading.move("0","0",null,null,"0","0");
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_02_00.move("38","67","100","30",null,null);

                p.CheckBox00.move("38","99","50","50",null,null);

                p.CheckBox01.move("83","99","50","50",null,null);

                p.Static02_00_02_00.move("187","67","100","30",null,null);

                p.Radio00.move("172","99","82","50",null,null);

                p.staPushNoti.move("308","67","70","30",null,null);

                p.chk_listen_noti.move("308","99","60","50",null,null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",920,330,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("xpush.xfdl", function() {
        this.app = nexacro.getApplication();
        this.rootForm = this.app.mainframe.childframe.form;

        this.XPUSH_USER_ID = "TOBESOFT";
        this.XPUSH_PROJECT_ID = "nexacro-n-demo";

        this.XPUSH_CONNECT_STATE = {
        	ko : {
        		connect : "<fc v='#0C9F47'>X-PUSH 와 연결되었습니다</fc>",
        		connecting : [
        						"<fc v='#FE5252'>X-PUSH 연결 중 </fc>" ,
        						"<fc v='#FE5252'>X-PUSH 연결 중 . </fc>" ,
        						"<fc v='#FE5252'>X-PUSH 연결 중 . .</fc>" ,
        						"<fc v='#FE5252'>X-PUSH 연결 중 . . .</fc>"
        					],
        		disconnect : "<fc v='#7F7F85'>X-PUSH 와 연결 끊어짐</fc>"
        	},
        	en : {
        		connect : "<fc v='#0C9F47'>Connect with X-PUSH</fc>",
        		connecting : [
        						"<fc v='#FE5252'>Connecting to X-PUSH </fc>",
        						"<fc v='#FE5252'>Connecting to X-PUSH . </fc>",
        						"<fc v='#FE5252'>Connecting to X-PUSH . .</fc>",
        						"<fc v='#FE5252'>Connecting to X-PUSH . . .</fc>"
        					],
        		disconnect : "<fc v='#7F7F85'>Disconnect with X-PUSH</fc>"
        	}
        }
        this.idx_connecting = 0;

        this.set_stXPushState = function(state)
        {
        	if(state == "connecting") {
        		this.stXPushState.text = this.XPUSH_CONNECT_STATE[this.app.langCode][state][0];
        		this.setTimer(1, 500);
        	} else {
        		this.stXPushState.text = this.XPUSH_CONNECT_STATE[this.app.langCode][state];
        		this.idx_connecting = 0;
        	}
        };

        /**************************************************************************
         * FORM EVENT 영역
         **************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	let USE_XPUSH = nexacro.getPrivateProfile("USE_XPUSH");
        	if(nexacro.isEmpty(USE_XPUSH)) {
        		USE_XPUSH = false;
        		nexacro.setPrivateProfile("USE_XPUSH", false);
        	}

        	// x-push connect
        	this.Div01.form.chk_listen_noti.value = USE_XPUSH;
        	this.fn_xpushConnect(USE_XPUSH);
        };

        this.form_onbeforeclose = function(obj,e)
        {
        	this.rootForm.fnCloseAllMemo();
        };

        this.form_ontimer = function(obj,e)
        {
        	switch(e.timerid) {
        	case 1 :
        		this.idx_connecting = (++this.idx_connecting > 3) ? 0 : this.idx_connecting;
         		this.stXPushState.text = this.XPUSH_CONNECT_STATE[this.app.langCode]["connecting"][this.idx_connecting];
        		break;
        	default:
        	}
        };

        /************************************************************************
         * connect to X-PUSH
         ************************************************************************/
        this.fn_xpushConnect = function(use_yn)
        {
        	this.XPush00.layouturl = "pushUrl::push_message_layout.xml";
        	this.XPush00.iplist = nexacro.getEnvironment().services["xpush"].url;
        	this.XPush00.projectid = this.XPUSH_PROJECT_ID;
        	this.XPush00.protocolversion = "3";

        	if(use_yn) {
        		this.XPush00.connect(this.XPUSH_USER_ID, "xpush");
        		this.Div01.form.div_loading.visible = true;
        		this.set_stXPushState("connecting");
        	}
        	else {
        		this.XPush00.disconnect();
        		this.Div01.form.div_loading.visible = false;
        	}
        };

        this.XPush_onsuccess = function(obj,e)
        {
        	switch(e.action) {
        	case 0 :	// on x-push connect
        		//trace("x-push connect");

        		this.XPush00.subscribe('NOTI', 'SENDMSG', this, this.dsXpushMessage, "append", "fnPushCallback");
        		this.Div01.form.btnSendMsg.enable = true;
        		this.Div01.form.div_loading.visible = false;

        		break;

        	case 1 :	// on x-push disconnect
        		//trace("xpush disconnect")
        		this.Div01.form.btnSendMsg.enable = false;
        		this.Div01.form.div_loading.visible = false;
        		this.set_stXPushState("disconnect");
        		break;

        	case 2 :	// on subscribe
        		//trace("xpush-subscribe")
        		this.killTimer(1);
        		this.set_stXPushState("connect");
        		break;

        	case 3 :	// on unsubscribe
        		//trace("xpush-unsubscribe")
        		break;

        	default:
        	}
        };

        this.XPush_onerror = function(obj,e)
        {
        	if(e.message != null)
        	{
        		trace( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken);
        	}
        };

        this.fnPushCallback = function(ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID)
        {
        	if(strActionType == "PUSH")
        	{
        		let sMessage = this.dsXpushMessage.getColumn(ChangeRow,'MSG');
        		let sUserId = this.dsXpushMessage.getColumn(ChangeRow,'USER');

        		this.rootForm.createMessage(sMessage, sUserId);
        	}
        };

        this.Div01_chk_listen_noti_onchanged = function(obj,e)
        {
        	this.fn_xpushConnect(e.postvalue)
        	nexacro.setPrivateProfile("USE_XPUSH", e.postvalue);
        };


        /************************************************************************
         * message send
         ************************************************************************/
        this.Div01_edtMsg_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnSendMessage();
        	}
        };

        this.Div01_btnSendMsg_onclick = function(obj,e)
        {
        	this.fnSendMessage();
        };

        this.fnSendMessage = function()
        {
        	let msgBox = this.Div01.form.edtMsg;
        	let msg = msgBox.value;

        	if(nexacro.isEmpty(msg)) {
        		if(this.app.langCode == "ko"){
        			alert("메시지를 입력하세요!");
        		} else {
        			alert("Please enter your message");
        		}

        		return;
        	}
        	let sNotices =  "TOPIC_TYPE=" + "'NOTI'";
        		sNotices += " TOPIC_ID=" + "'SENDMSG'";
        		sNotices += " USER_ID='" + this.XPUSH_USER_ID + "'";
        		sNotices += " PROJECT_ID='" + this.XPUSH_PROJECT_ID + "'";
        		sNotices += " SEND_MESSAGE='" + msg + "'";
        		sNotices += " SERVER_IP='" + this.XPush00.getCurrentIP() + "'";

        	this.fnCallProvider(sNotices);
        }

        /************************************************************************************************
         * Transaction 영역(Transaction, Popup, Common)
         ************************************************************************************************/
        this.fnCallProvider = function(sNotices)
        {
        	let strSvcId    = "sendMassage";
        	let strSvcUrl   = "svc::xpush/sendMessage";
        	let inData      = "";
        	let outData     = "";
        	let strArg      = sNotices;
        	let callBackFnc = "fnCallback";
        	let isAsync     = true;
        	let nDataType 	= 0;

        	this.transaction(strSvcId ,     // transaction을 구분하기 위한 svc id값
        		strSvcUrl ,   				// transaction을 요청할 주소
        		inData ,     				// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData ,     				// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg ,     				// 입력값으로 보낼 arguments, a=b
        		callBackFnc ,   			// transaction의 결과를 받을 Function 이름
        		isAsync,     				// 비동기통신 여부 [생략가능]
        		nDataType);					// 통신타입 (0 = xml , 1 = binary , 2 = ssv , 3 = JSON)
        };
        /************************************************************************************************
         * CallBack 영역(Transaction, Popup, Common)
         ************************************************************************************************/
        this.fnCallback = function(id, code, msg)
        {
        	switch (id)
        	{
        		case "sendMassage":
        			if(code == -1){
        				if(this.app.langCode == "ko"){
        					alert("푸시 메시지 전송실패!");
        				} else {
        					alert("Failed to send push message");
        				}

        			} else {

        				//입력된 메시지 초기화
        				let msgBox = this.Div01.form.edtMsg;
        				msgBox.value = "";
        				msgBox.setFocus();

        				if(this.app.langCode == "ko"){
        					alert("푸시 메시지 전송!");
        				} else {
        					alert("Send push messages");
        				}

        			}
        			break;
        		default:
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.Div01.form.chk_listen_noti.addEventHandler("onchanged",this.Div01_chk_listen_noti_onchanged,this);
            this.Div01.form.btnSendMsg.addEventHandler("onclick",this.Div01_btnSendMsg_onclick,this);
            this.Div01.form.edtMsg.addEventHandler("onkeydown",this.Div01_edtMsg_onkeydown,this);
            this.XPush00.addEventHandler("onerror",this.XPush_onerror,this);
            this.XPush00.addEventHandler("onsuccess",this.XPush_onsuccess,this);
        };
        this.loadIncludeScript("xpush.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
