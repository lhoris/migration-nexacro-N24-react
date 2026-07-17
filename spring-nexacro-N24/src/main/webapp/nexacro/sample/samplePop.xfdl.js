(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePop");
            this.set_background("#6954E1");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose",null,"5","50","50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MWF_closeDesc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MWF_descBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","64","2",null,"60","64",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Popup Sample");
            obj.set_cssclass("sta_MWF_descTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePop.xfdl", function() {

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("samplePop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
