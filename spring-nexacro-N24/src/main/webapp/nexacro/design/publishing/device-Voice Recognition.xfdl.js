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
                this._setFormPosition(440,664);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","20","20",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("STT(Speech to text)");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.cell.display.type");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","50","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Press the button and speak.");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","170","100","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MWF_voiceRecord");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","220",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","344",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TTS(Text to speech)");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.cell.display.type");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","374","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Enter the text and press the button.");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","170","534","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MWF_voiceSpeaker");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","20","414",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,664,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("device-Voice Recognition.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        this.Div00_Radio00_onitemchanged = function(obj,e)
        {
        	this.Grid02.set_formatid(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("device-Voice Recognition.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
