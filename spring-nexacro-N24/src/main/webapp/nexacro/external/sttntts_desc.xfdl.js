(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sttntts_desc");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,265);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","20","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("STT / TTS");
            obj.set_cssclass("sta_WF_compTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"128","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"external.sttntts.desc\",\"STT(Speech To Text) - 음성을 텍스트로 변환\r\nTTS(Text To Speech) - 텍스트를 음성으로 변환\r\n\r\n※ 본 샘플은 브라우저에서 제공하는 Web API 를 활용하여 만들었습니다.\r\n특정 브라우저에서는 동작하지 않을 수 있습니다.\")");
            obj.set_wordWrap("english");
            obj.getSetter("messageid").set("external.sttntts.desc");
            obj.set_cssclass("sta_WF_compTitle05");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,265,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sttntts_desc.xfdl", function() {

        this.sttntts_desc_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sttntts_desc_onload,this);
        };
        this.loadIncludeScript("sttntts_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
