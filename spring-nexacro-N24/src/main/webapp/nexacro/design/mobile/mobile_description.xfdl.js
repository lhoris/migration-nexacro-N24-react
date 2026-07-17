(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mobile_leftMenu");
            this.set_titletext("New Form");
            this.set_background("#6954E1");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button01",null,"5","50","50","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MWF_closeDesc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","64","2",null,"60","64",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Sort");
            obj.set_cssclass("sta_MWF_descTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("sta_MWF_descBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","100",null,"350","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("You can sort the data by the field values that the column references by clicking the column header in the grid. Clicking the same field repeatedly converts it to an ascending/ descending/cancel state; pressing the \'Ctrl\' key and clicking the header allows you to sort multiple columns in the order you clicked.\r\n\r\nYou can also sort through the context menu that appears when you right-click in the header area of the grid. Selecting \'Multiple Sort\' in the context menu invokes a pop-up screen, allows you to add rows by pressing the \'+\' button, select the column name and sort order, and press the \'Apply\' button to sort.");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_txt20px");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("mobile_description.xfdl", function() {

        this.Button02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("mobile_description.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
