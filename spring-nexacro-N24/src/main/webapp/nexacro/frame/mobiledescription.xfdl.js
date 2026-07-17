(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mobiledescription");
            this.set_background("#6954E1");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose",null,"5","50","50","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MWF_closeDesc");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","64","2",null,"60","64",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_MWF_descTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","60",null,"540","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_MWF_descBg");
            this.addChild(obj.name, obj);

            obj = new Div("divDesc","30","100",null,"470","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPageLoading","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'imagerc::page_loading.gif\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDesc
            obj = new Layout("default","",0,0,this.divDesc.form,function(p){});
            this.divDesc.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mobiledescription.xfdl", function() {

        this.mobiledescription_onload = function(obj,e)
        {
        	nexacro._OnceCallbackTimer.callonce(this, function() {
        		this.stcTitle.set_text(this.parent.menuName);
        		this.divDesc.set_url(this.parent.descUrl);
        	}, 10);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.descPageOnLoad = function(height)
        {
        	let screen_height = nexacro.getApplication().mainframe.height;
        	height = Math.max(screen_height, height);
        	this.divDesc.height = height + 130;
        	this.divDesc.form.resetScroll();
        	this.Static01.height = height + 200;
        	this.resetScroll();
        	this.imgPageLoading.visible = false;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mobiledescription_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("mobiledescription.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
