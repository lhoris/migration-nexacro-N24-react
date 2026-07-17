(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commMemo");
            this.set_titletext("메모장");
            if (Form == this.constructor)
            {
                this._setFormPosition(568,238);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("");
            obj.set_cssclass("sta_WF_notepad");
            this.addChild(obj.name, obj);

            obj = new Button("btnMove","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_noteHead");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","5","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_noteAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","30","30","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_noteDel");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10","55",null,null,"6","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("txa_WF_notepad");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnResize",null,null,"15","15","10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_widgetMove02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#A598EF");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",568,238,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("widgetMemo.xfdl", function() {
        this.commMemo_onload = function(obj,e)
        {
        };

        this.fn_comBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnClose" :
        			this.parent.parent.fnCloseMemo(this.parent);
        			break;

        		case "btnAdd" :
        			this.parent.parent.fnAddMemo(this.parent);
        			break;
        	}
        };

        this.TextArea00_onsetfocus = function(obj,e)
        {
        	this.parent.bringToFront();
        };

        this.fnSetTxt = function(arg)
        {
        	this.TextArea00.value = arg;
        };

        this.fnGetTxt = function()
        {
        	return this.TextArea00.value;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commMemo_onload,this);
            this.btnAdd.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.btnClose.addEventHandler("onclick",this.fn_comBtnOnClick,this);
            this.TextArea00.addEventHandler("onsetfocus",this.TextArea00_onsetfocus,this);
        };
        this.loadIncludeScript("widgetMemo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
