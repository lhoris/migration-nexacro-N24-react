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
                this._setFormPosition(440,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","14","133","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"comp.googlemap\",\"Google Map\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("comp.googlemap");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","20","74","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"comp.googlemap.addmaker\",\"Add Maker\")");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("comp.googlemap.addmaker");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","160","74","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"comp.googlemap.delmaker\",\"Delete Marker\")");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("comp.googlemap.delmaker");
            this.addChild(obj.name, obj);

            obj = new GoogleMap("GoogleMap00","20","124",null,"616","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("googlemap.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        	this.fn_mapLoad();
        };

        this.fn_mapLoad = function ()
        {
        	this.GoogleMap00.apikey = nexacro.getApplication().googlemap;
        	this.GoogleMap00.showzoom = true;
        	this.GoogleMap00.load(false, 37.5240220, 126.9265940, 0, 15);
        };

        this.Button01_onclick = function(obj,e)
        {
        	let objGoogleMapMaker = new nexacro.GoogleMapMarker();

        	objGoogleMapMaker.set_latitude(37.5148693);
        	objGoogleMapMaker.set_longitude(127.0607522);
        	objGoogleMapMaker.text = "TOBESOFT";
        	objGoogleMapMaker.visible = true;

        	this.GoogleMap00.addItem("MapMarker", objGoogleMapMaker);

        	this.Button01.enable = false;
        	this.Button02.enable = true;
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.GoogleMap00.removeItem("MapMarker");

        	this.Button01.enable = true;
        	this.Button02.enable = false;
        };

        this.GoogleMap00_onerror = function(obj,e)
        {
        	trace("error: " + e.errormsg);
        };

        this.GoogleMap00_onload = function(obj,e)
        {
        	if (this.GoogleMap00.items[0]) {
        		this.GoogleMap00.removeItem(this.GoogleMap00.items[0]);
        	}

        	this.Button01.enable = true;
        	this.Button02.enable = false;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.GoogleMap00.addEventHandler("onload",this.GoogleMap00_onload,this);
            this.GoogleMap00.addEventHandler("onerror",this.GoogleMap00_onerror,this);
        };
        this.loadIncludeScript("googlemap.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
