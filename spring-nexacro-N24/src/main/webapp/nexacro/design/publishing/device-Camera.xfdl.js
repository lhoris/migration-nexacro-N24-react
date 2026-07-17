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
                this._setFormPosition(440,664);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","170","30","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MWF_camera");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","20","150",null,"250","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::img_MWF_cameraImg.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","410",null,"234","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("Succeed getting images.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,664,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("device-Camera.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        this.Div00_Radio00_onitemchanged = function(obj,e)
        {
        	this.Grid02.set_formatid(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("device-Camera.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
