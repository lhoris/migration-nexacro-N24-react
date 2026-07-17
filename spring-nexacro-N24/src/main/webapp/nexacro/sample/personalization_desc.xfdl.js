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
                this._setFormPosition(920,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","15","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"sample.personalization\",\"Personalization\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("sample.personalization");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.personalization.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("sample.personalization.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","Static01:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"sample.personalization.widgetmoving\",\"Widget moving\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("sample.personalization.widgetmoving");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","Static05:2",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"sample.personalization.widgetmoving.desc\",\"You can change the location to Drag and Drop by selecting the desired widget.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("sample.personalization.widgetmoving.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","Static06:10","435","379",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("url(\'imagerc::Personalization/personalization1.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","Static03_00:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"sample.personalization.addwidget\",\"Add Widget\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("sample.personalization.addwidget");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","Static07:2",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"sample.personalization.addwidget.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("sample.personalization.addwidget.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","Static08:10",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"sample.personalization.default.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("sample.personalization.default.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","465","Static06:10","435","379",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("url(\'imagerc::Personalization/personalization2.png\') no-repeat center center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("personalization_desc.xfdl", function() {

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
        this.loadIncludeScript("personalization_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
