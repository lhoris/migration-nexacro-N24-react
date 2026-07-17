(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main_video");
            this.set_titletext("메인 비디오화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new VideoPlayer("VideoPlayer00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoplay("true");
            obj.set_repeat("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnMute","VideoPlayer00:-70","VideoPlayer00:-60","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_videoMute");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen,Desktop_screen",960,540,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("main_video.xfdl", function() {
        this.bMute = true;	// 음소거 여부
        this.main_video_onload = function(obj,e)
        {
         	const app = nexacro.getApplication();
        	let sUrl = app.webRootUrl;
         	this.VideoPlayer00.url = sUrl + "NexacroNv24.mp4";

        	// WRE
         	if (!app.IsNRE) {
        		// 초기화
        		this.VideoPlayer00.autoplay = false;
        		this.VideoPlayer00.repeat = false;

        		this.VideoPlayer00.autoplay = true;
        		this.VideoPlayer00.mute = true;	//음소거
        		this.VideoPlayer00.repeat = true;

        	// NRE
        	} else {
        		this.VideoPlayer00.autoplay = true;
        		this.VideoPlayer00.mute = true;
        	}
        };

        // 스피커 버튼 클릭
        this.btnMute_onclick = function(obj,e)
        {
        	// 음소거 해제
        	if (this.bMute) {
        		this.bMute = false;
        		this.VideoPlayer00.mute = false;
        		obj.cssclass = "btn_WF_videoSpeaker";	// 스피커 이미지

        		if (system.navigatorname.indexOf("nexacro") == -1) {
        			gtag('event', 'Volume Control', {
        					'event_category': "Main Video",
        					'event_label': '음소거 해제',
        					'value': "음소거 해제"
        				});
        		}

        	// 음소거 설정
        	} else {
        		this.bMute = true;
        		this.VideoPlayer00.mute = true;
        		obj.cssclass = "btn_WF_videoMute";	// 음소거 이미지

        		if (system.navigatorname.indexOf("nexacro") == -1) {
        			gtag('event', 'Volume Control', {
        					'event_category': "Main Video",
        					'event_label': '음소거',
        					'value': "음소거"
        				});
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_video_onload,this);
            this.btnMute.addEventHandler("onclick",this.btnMute_onclick,this);
        };
        this.loadIncludeScript("main_video.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
