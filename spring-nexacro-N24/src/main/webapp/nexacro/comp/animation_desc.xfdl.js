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
                this._setFormPosition(920,1160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","15","79","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"comp.animation\",\"Animation\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.animation");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2","880","80","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"comp.animation.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("comp.animation.desc");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","20","Static01:10","600","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::animation.gif\')");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","ImageViewer00:20","79","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"comp.animation\",\"Easing\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.animation");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","Static00_00:2","880","140",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"comp.animation.easing.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("comp.animation.easing.desc");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","20","Static01_00:10","850","650",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::animation_easing.png\')");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,1160,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("animation_desc.xfdl", function() {

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
        this.loadIncludeScript("animation_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
