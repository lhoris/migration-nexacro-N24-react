(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("megamenu");
            this.set_scrolltype("vertical");
            this.set_cssclass("frm_WF_megaBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose",null,"15","50","50","17",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_megaClose");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,740,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("megamenu.xfdl", function() {

        this.megamenu_onload = function(obj,e)
        {
        	nexacro._OnceCallbackTimer.callonce(this, function() {
        		this.setMenu();
        	}, 10);
        };

        this.setMenu = function()
        {
        	let left=0;
        	let top=0;
        	let width=256;
        	let height=80;
        	let gap=0;
        	const app = nexacro.getApplication();

        	app.gdsMenu.filter("level==0");

        	for (let i = 0, len = 5; i < len; i++) {
        		let id = app.gdsMenu.getColumn(i, "id");
        		let caption = app.gdsMenu.getColumn(i, "caption");
        		let objId = "stcMenu_"+i;
        		let menuTitle = new Static(objId, left, top, width, height, null, null);
        		let cssclass = "";

        		switch(id) {
        		case "010000":
        			cssclass = "sta_WF_megaTitle01";
        			break;
        		case "020000":
        			cssclass = "sta_WF_megaTitle02";
        			break;
        		case "030000":
        			cssclass = "sta_WF_megaTitle03";
        			break;
        		case "040000":
        			cssclass = "sta_WF_megaTitle04";
        			break;
        		case "050000":
        			cssclass = "sta_WF_megaTitle05";
        			break;
        		default:
        			cssclass = "sta_WF_megaTitleBlank";
        		}

        		menuTitle.cssclass = cssclass;
        		menuTitle.text = caption;
        		this.addChild(objId, menuTitle);
        		menuTitle.show();

        		left += width + gap;
        	}

        	app.gdsMenu.filter("level>0");

        	left=8, top=110, width=240, height=47, gap=0;
        	let tempUpid = "";

        	for (let i = 0, len = app.gdsMenu.rowcount; i < len; i++) {
        		let id = app.gdsMenu.getColumn(i, "id");
        		let caption = app.gdsMenu.getColumn(i, "caption");
        		let level = app.gdsMenu.getColumn(i, "level");
        		let upid = app.gdsMenu.getColumn(i, "upid");
        		let url = app.gdsMenu.getColumn(i, "url");
        		let objId = "btnMenu_"+id;

        		if (i > 0 && tempUpid != upid) {
        			left += 256, top = 110;
        		}

        		button = new Button(objId, left, top, width, height, null, null);
        		button.cssclass = "btn_WF_megaMenu";
        		button.text = caption;
        		button.menuId = id;
        		button.addEventHandler("onclick", this.btnMenu_onclick, this);
        		this.addChild(objId, button);
        		button.show();

        		top += height + gap;
        		tempUpid = upid;
        	}

        	app.gdsMenu.filter("");

        	this.btnClose.bringToFront();

        	this.resetScroll();
        };

        this.btnMenu_onclick = function(obj,e)
        {
        	const p = this.parent.parent;
        	const menuId = obj.menuId;
        	p["hideMegaMenu"].call(p);

        	this.openMenu(menuId);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	const p = this.parent.parent;
        	p["hideMegaMenu"].call(p);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.megamenu_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("megamenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
