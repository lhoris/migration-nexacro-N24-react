(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_All");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Top");
            obj.set_url("design::publishing/Form_Top.xfdl");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,1px solid #8D8D8D");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","80","280","720",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Left");
            obj.set_url("design::publishing/Form_Left.xfdl");
            obj.set_background("#F5F7FC");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0",null,null,"140","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Bottom");
            obj.set_url("design::publishing/Form_Bottom.xfdl");
            obj.set_background("#2D345C");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","280","80","1000","720",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Work");
            obj.set_url("design::publishing/Form_Work.xfdl");
            obj.set_background("#F5F7FC");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1290","802","200","140",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("background : #2D345C");
            obj.set_background("#2D345C");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1290","646","200","146",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("background : #F5F7FC");
            obj.set_background("#F5F7FC");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1290","0","264","80",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("background : #F5F7FC\r\n-nexa-border : \r\n0px none,0px none,1px solid #8D8D8D");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,1px solid #8D8D8D");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1290","575","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_toTop");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1290","520","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_contact");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,940,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","design::publishing/Form_Top.xfdl");
            this._addPreloadList("fdl","design::publishing/Form_Left.xfdl");
            this._addPreloadList("fdl","design::publishing/Form_Bottom.xfdl");
            this._addPreloadList("fdl","design::publishing/Form_Work.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_All.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
