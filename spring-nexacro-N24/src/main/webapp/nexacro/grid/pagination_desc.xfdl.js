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
                this._setFormPosition(440,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","19","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"grid.pagination\",\"Pagination\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.pagination");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.pagination.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.pagination.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","Static01:10","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"grid.pagination.buttonstyle\",\"Button style\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.pagination.buttonstyle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","Static02:2",null,"140","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"grid.pagination.buttonstyle.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.pagination.buttonstyle.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","Static03:10","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"grid.pagination.infinitescrolling\",\"Infinite scrolling\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.pagination.infinitescrolling");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","Static04:2",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.pagination.infinitescrolling.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.pagination.infinitescrolling.desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("3");
                p.Static00.set_text("TEXT(\"grid.pagination\",\"Pagination\")");
                p.Static00.set_cssclass("sta_WF_compTitle02");
                p.Static00.getSetter("messageid").set("grid.pagination");
                p.Static00.set_fittocontents("width");
                p.Static00.move("20","19","150","30",null,null);

                p.Static01.set_taborder("0");
                p.Static01.set_text("TEXT(\"grid.pagination.desc\")");
                p.Static01.set_cssclass("sta_WF_txt15px");
                p.Static01.set_wordWrap("english");
                p.Static01.set_fittocontents("height");
                p.Static01.getSetter("messageid").set("grid.pagination.desc");
                p.Static01.move("20","Static00:2",null,"180","20",null);

                p.Static02.set_taborder("1");
                p.Static02.set_text("TEXT(\"grid.pagination.buttonstyle\",\"Button style\")");
                p.Static02.set_cssclass("sta_WF_compTitle02");
                p.Static02.getSetter("messageid").set("grid.pagination.buttonstyle");
                p.Static02.set_fittocontents("width");
                p.Static02.move("20","Static01:10","129","30",null,null);

                p.Static03.set_taborder("2");
                p.Static03.set_text("TEXT(\"grid.pagination.buttonstyle.desc\")");
                p.Static03.set_cssclass("sta_WF_txt15px");
                p.Static03.set_wordWrap("english");
                p.Static03.set_fittocontents("height");
                p.Static03.getSetter("messageid").set("grid.pagination.buttonstyle.desc");
                p.Static03.move("20","Static02:2",null,"140","20",null);

                p.Static04.set_taborder("4");
                p.Static04.set_text("TEXT(\"grid.pagination.infinitescrolling\",\"Infinite scrolling\")");
                p.Static04.set_cssclass("sta_WF_compTitle02");
                p.Static04.getSetter("messageid").set("grid.pagination.infinitescrolling");
                p.Static04.set_fittocontents("width");
                p.Static04.move("20","Static03:10","129","30",null,null);

                p.Static05.set_taborder("5");
                p.Static05.set_text("TEXT(\"grid.pagination.infinitescrolling.desc\")");
                p.Static05.set_cssclass("sta_WF_txt15px");
                p.Static05.set_wordWrap("english");
                p.Static05.set_fittocontents("height");
                p.Static05.getSetter("messageid").set("grid.pagination.infinitescrolling.desc");
                p.Static05.move("20","Static04:2",null,"180","20",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","",920,430,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pagination_desc.xfdl", function() {

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
        this.loadIncludeScript("pagination_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
