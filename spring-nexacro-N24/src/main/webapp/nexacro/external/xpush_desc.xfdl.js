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
                this._setFormPosition(920,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static04","20","15","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("X-PUSH");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","Static04:2",null,"33","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"external.xpush.desc.xpushdesc\",\"X-PUSH 서버는 메시지를 넥사크로 클라이언트에 능동적으로 푸시하는 메시징 서비스를 제공합니다.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.getSetter("messageid").set("external.xpush.desc.xpushdesc");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","20","Static00_00:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"external.xpush.desc.realtimemonitor\",\"실시간 모니터링\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("external.xpush.desc.realtimemonitor");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","Static04_00:2",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"external.xpush.desc.reatimemonitor.desc\",\"업무 현황 등 실시간으로 변동되는 데이터를 X-PUSH로 부터 전송받아 지연없이 UI 에 표현할 수 있습니다.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.getSetter("messageid").set("external.xpush.desc.reatimemonitor.desc");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","Static00_00_00:10",null,"425","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'imagerc::realtime_monitor_02.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","ImageViewer00:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"external.xpush.desc.noti\",\"푸시 알림\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("external.xpush.desc.noti");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","Static04_00_00:2",null,"33","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"external.xpush.desc.noti.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.getSetter("messageid").set("external.xpush.desc.noti.desc");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","10","Static00_00_00_00:10","440","425",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'imagerc::mobile_noti_01.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_imagealign("right middle");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00",null,"Static00_00_00_00:10","440","425","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_image("url(\'imagerc::mobile_noti_02.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_imagealign("left middle");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,1100,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static04.set_taborder("0");
                p.Static04.set_text("X-PUSH");
                p.Static04.set_cssclass("sta_WF_compTitle02");
                p.Static04.set_fittocontents("width");
                p.Static04.move("20","15","160","30",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_text("TEXT(\"external.xpush.desc.xpushdesc\",\"X-PUSH 서버는 메시지를 넥사크로 클라이언트에 능동적으로 푸시하는 메시징 서비스를 제공합니다.\")");
                p.Static00_00.set_cssclass("sta_WF_txt15px");
                p.Static00_00.set_wordWrap("english");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.set_usedecorate("true");
                p.Static00_00.getSetter("messageid").set("external.xpush.desc.xpushdesc");
                p.Static00_00.move("20","Static04:2",null,"33","20",null);

                p.Static04_00.set_taborder("2");
                p.Static04_00.set_text("TEXT(\"external.xpush.desc.realtimemonitor\",\"실시간 모니터링\")");
                p.Static04_00.set_cssclass("sta_WF_compTitle02");
                p.Static04_00.set_fittocontents("width");
                p.Static04_00.getSetter("messageid").set("external.xpush.desc.realtimemonitor");
                p.Static04_00.move("20","Static00_00:10","120","30",null,null);

                p.Static00_00_00.set_taborder("3");
                p.Static00_00_00.set_text("TEXT(\"external.xpush.desc.reatimemonitor.desc\",\"업무 현황 등 실시간으로 변동되는 데이터를 X-PUSH로 부터 전송받아 지연없이 UI 에 표현할 수 있습니다.\")");
                p.Static00_00_00.set_cssclass("sta_WF_txt15px");
                p.Static00_00_00.set_wordWrap("english");
                p.Static00_00_00.set_fittocontents("height");
                p.Static00_00_00.set_usedecorate("true");
                p.Static00_00_00.getSetter("messageid").set("external.xpush.desc.reatimemonitor.desc");
                p.Static00_00_00.move("20","Static04_00:2",null,"38","20",null);

                p.ImageViewer00.set_taborder("6");
                p.ImageViewer00.set_image("url(\'imagerc::realtime_monitor_02.png\')");
                p.ImageViewer00.set_stretch("fixaspectratio");
                p.ImageViewer00.set_border("0px none");
                p.ImageViewer00.set_background("transparent");
                p.ImageViewer00.set_enable("false");
                p.ImageViewer00.set_enableevent("false");
                p.ImageViewer00.move("0","Static00_00_00:10",null,"425","0",null);

                p.Static04_00_00.set_taborder("4");
                p.Static04_00_00.set_text("TEXT(\"external.xpush.desc.noti\",\"푸시 알림\")");
                p.Static04_00_00.set_cssclass("sta_WF_compTitle02");
                p.Static04_00_00.set_fittocontents("width");
                p.Static04_00_00.getSetter("messageid").set("external.xpush.desc.noti");
                p.Static04_00_00.move("20","ImageViewer00:10","120","30",null,null);

                p.Static00_00_00_00.set_taborder("5");
                p.Static00_00_00_00.set_text("TEXT(\"external.xpush.desc.noti.desc\")");
                p.Static00_00_00_00.set_cssclass("sta_WF_txt15px");
                p.Static00_00_00_00.set_wordWrap("english");
                p.Static00_00_00_00.set_fittocontents("height");
                p.Static00_00_00_00.set_usedecorate("true");
                p.Static00_00_00_00.getSetter("messageid").set("external.xpush.desc.noti.desc");
                p.Static00_00_00_00.move("20","Static04_00_00:2",null,"33","20",null);

                p.ImageViewer00_00.set_taborder("7");
                p.ImageViewer00_00.set_image("url(\'imagerc::mobile_noti_01.png\')");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_border("0px none");
                p.ImageViewer00_00.set_background("transparent");
                p.ImageViewer00_00.set_imagealign("right middle");
                p.ImageViewer00_00.set_enable("false");
                p.ImageViewer00_00.set_enableevent("false");
                p.ImageViewer00_00.move("10","Static00_00_00_00:10","440","425",null,null);

                p.ImageViewer00_00_00.set_taborder("8");
                p.ImageViewer00_00_00.set_image("url(\'imagerc::mobile_noti_02.png\')");
                p.ImageViewer00_00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00_00.set_border("0px none");
                p.ImageViewer00_00_00.set_background("transparent");
                p.ImageViewer00_00_00.set_imagealign("left middle");
                p.ImageViewer00_00_00.set_enable("false");
                p.ImageViewer00_00_00.set_enableevent("false");
                p.ImageViewer00_00_00.move(null,"Static00_00_00_00:10","440","425","10",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Mobile_screen",440,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.ImageViewer00_00_00.set_text("");
                p.ImageViewer00_00_00.move(null,"Static00_00_00_00:10","200","320","0",null);

                p.ImageViewer00_00.move("0","Static00_00_00_00:10","200","320",null,null);

                p.ImageViewer00.move("0","Static00_00_00:10",null,"210","0",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("xpush_desc.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("xpush_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
