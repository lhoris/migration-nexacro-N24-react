(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main_keymenu");
            this.set_titletext("New Form");
            this.set_background("aliceblue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1263,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","490","30","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Key Menu");
            obj.set_cssclass("sta_WF_mainboxTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","126","300","360",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("sta_WF_mainbox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","322","126","300","360",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("sta_WF_mainbox02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","639","126","300","360",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("sta_WF_mainbox03");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02",null,"126","300","360","7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("sta_WF_mainbox04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1263,560,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_background("aliceblue");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Key Menu");
                p.Static00.set_cssclass("sta_WF_mainboxTitle");
                p.Static00.move("490","30","300","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_border("1px solid #dddddd");
                p.Static01.set_cssclass("sta_WF_mainbox01");
                p.Static01.move("5","126","300","360",null,null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_border("1px solid #dddddd");
                p.Static01_00.set_cssclass("sta_WF_mainbox02");
                p.Static01_00.move("322","126","300","360",null,null);

                p.Static01_01.set_taborder("3");
                p.Static01_01.set_border("1px solid #dddddd");
                p.Static01_01.set_cssclass("sta_WF_mainbox03");
                p.Static01_01.move("639","126","300","360",null,null);

                p.Static01_02.set_taborder("4");
                p.Static01_02.set_border("1px solid #dddddd");
                p.Static01_02.set_cssclass("sta_WF_mainbox04");
                p.Static01_02.move(null,"126","300","360","7",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,530,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_00.set_positionstep("2");
                p.Static01_00.move("90","130","300","360",null,null);

                p.Static01_01.set_positionstep("3");
                p.Static01_01.move("90","120","300","360",null,null);

                p.Static01_02.set_positionstep("1");
                p.Static01_02.move(null,"130","300","360","90",null);

                p.Static01.move("90","130","300","360",null,null);

                p.Static00.set_positionstep("-1");
                p.Static00.move("90","30","300","60",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("main_keymenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
