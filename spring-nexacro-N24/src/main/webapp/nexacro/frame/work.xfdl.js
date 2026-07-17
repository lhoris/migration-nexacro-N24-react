(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work");
            this.set_scrollbartype("none");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMain","20","20",null,"760","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_area");
            obj.set_semantictag("article");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gap0","20","divMain:0",null,"25","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divDesc","20","sta_gap0:0",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_cssclass("div_WF_area");
            obj.set_formscrollbartype("none");
            obj.set_semantictag("article");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPageLoading","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::page_loading.gif\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gap1","20","divDesc:0",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMain.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMain.form
            obj = new Layout("large","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMain.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDesc
            obj = new Layout("default","",0,0,this.divDesc.form,function(p){});
            this.divDesc.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("none");
                p.set_background("transparent");

                p.divMain.set_taborder("0");
                p.divMain.set_formscrolltype("none");
                p.divMain.set_cssclass("div_WF_area");
                p.divMain.set_semantictag("article");
                p.divMain.move("20","20",null,"760","20",null);

                p.sta_gap0.set_taborder("4");
                p.sta_gap0.set_visible("true");
                p.sta_gap0.move("20","divMain:0",null,"25","20",null);

                p.divDesc.set_taborder("1");
                p.divDesc.set_visible("false");
                p.divDesc.set_cssclass("div_WF_area");
                p.divDesc.set_formscrollbartype("none");
                p.divDesc.set_semantictag("article");
                p.divDesc.move("20","sta_gap0:0",null,"100","20",null);

                p.imgPageLoading.set_taborder("2");
                p.imgPageLoading.set_image("url(\'imagerc::page_loading.gif\')");
                p.imgPageLoading.set_background("transparent");
                p.imgPageLoading.set_border("0px none");
                p.imgPageLoading.move("0","0",null,null,"0","0");

                p.sta_gap1.set_taborder("3");
                p.sta_gap1.set_visible("false");
                p.sta_gap1.move("20","divDesc:0",null,"30","20",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",990,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divDesc.set_visible("true");
                p.divDesc.move("40","divMain:25",null,"100","30",null);

                p.divMain.move("40","40","920","700",null,null);

                p.sta_gap1.set_visible("true");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("work.xfdl", function() {
        this.menuInfo = {menuId: '', menuName: '', menuUrl: ''};

        this.loadMenuPage = function(menuId, menuUrl)
        {
        	this.divMain.url = "";
        	this.divDesc.url = "";
        	this.imgPageLoading.visible = true;
        	this.divMain.url = menuUrl;

        	this.menuInfo = {
        		menuId: menuId,
        		menuName: nexacro.getApplication().gdsMenu.lookup("id", menuId, "caption"),
        		menuUrl: menuUrl
        	};
        };

        this.work_onlayoutchanged = function(obj,e)
        {
        	this.resetScroll();
        };

        this.mainPageOnLoad = function()
        {
        	// fittocontents 동적 처리
        	this.divMain.fittocontents = "height";
        	this.resetScroll();

        	const p = this.parent.parent;
        	p["menuPageOnLoad"].call(p);

        	// visible 처리
        	this.divMain.visible = true;
        	this.imgPageLoading.visible = false;

        	// 모바일 아니면 desc를 표출한다.
        	if (!nexacro.getApplication().IsMobile) {
        		this.divDesc.url = this.getDescUrl(this.divMain.url);
        	}
        };

        this.descPageOnLoad = function()
        {
        	// fittocontents 동적 처리
        	this.divDesc.fittocontents = "height";
        	this.resetScroll();

        	const p = this.parent.parent;
        	p["menuPageOnLoad"].call(p);
        };

        this.getDescUrl = function(menuUrl)
        {
        	return new String(menuUrl).replace(".xfdl", "_desc.xfdl");
        };

        this.showDescription = function()
        {
        	let url = this.getDescUrl(this.divMain.url),
        	menuName = this.menuInfo.menuName;
        	this.openPopup("description", "frame::mobiledescription.xfdl", {menuName: menuName, descUrl: url}, "showtitlebar=false autosize=false openstatus=maximize");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onlayoutchanged",this.work_onlayoutchanged,this);
        };
        this.loadIncludeScript("work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
