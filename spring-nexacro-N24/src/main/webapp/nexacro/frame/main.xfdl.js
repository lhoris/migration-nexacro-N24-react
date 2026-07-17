(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main");
            this.set_scrollbartype("none");
            this.set_background("#fff");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,2140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_rolling","0","0",null,"700","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_rollingBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_realosmu","0","700",null,"1420","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("frame::main_realosmu.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_reference","0","2120",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("frame::main_reference.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_rolling
            obj = new Layout("default","",0,0,this.div_rolling.form,function(p){});
            this.div_rolling.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_realosmu
            obj = new Layout("default","",0,0,this.div_realosmu.form,function(p){});
            this.div_realosmu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_reference
            obj = new Layout("default","",0,0,this.div_reference.form,function(p){});
            this.div_reference.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,2140,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("none");
                p.set_background("#fff");

                p.div_rolling.set_taborder("0");
                p.div_rolling.set_text("");
                p.div_rolling.set_cssclass("div_WF_rollingBg");
                p.div_rolling.move("0","0",null,"700","0",null);

                p.div_realosmu.set_taborder("1");
                p.div_realosmu.set_url("frame::main_realosmu.xfdl");
                p.div_realosmu.move("0","700",null,"1420","0",null);

                p.div_reference.set_taborder("2");
                p.div_reference.set_url("frame::main_reference.xfdl");
                p.div_reference.move("0","2120",null,"400","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",1263,2830,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div_rolling.set_taborder("0");
                p.div_rolling.move("0","0",null,"700","0",null);

                p.div_realosmu.set_taborder("1");
                p.div_realosmu.move("0","700",null,"1150","0",null);

                p.div_reference.set_taborder("2");
                p.div_reference.move("0","1850",null,"980","0",null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::main_realosmu.xfdl");
            this._addPreloadList("fdl","frame::main_reference.xfdl");
        };
        
        // User Script
        this.registerScript("main.xfdl", function() {
        this.menuInfo = {menuId: 'main', menuName: 'main', menuUrl: 'frame::main.xfdl'};

        this.main_onload = function(obj,e)
        {
        	nexacro._OnceCallbackTimer.callonce(this, function() {
        		const app = nexacro.getApplication();
        		const rootForm = app.mainframe.childframe.form;

        		rootForm["menuPageOnLoad"].call(rootForm, this.getLayoutInfo(this.getCurrentLayoutID(), "height"));
        		rootForm.resetScroll();
        		rootForm.vscrollbar.set_pos(0);

        		//스텝 오동작 방지
        		this.div_rolling.url = "frame::main_rolling.xfdl";
        		//this.div_rolling.url = "frame::main_video.xfdl";	// 메인에 비디오 추가(각각 div의 top과 form height를 380px 씩 줄임)
        	}, 10);
        };

        this.main_onlayoutchanged = function(obj,e)
        {
        	const app = nexacro.getApplication();
        	app.mainframe.childframe.form.resetScroll();
        };


        /**
         * @class 값이 존재하는지 여부 체크 <br>
         * @param {String} sValue
         * @return {Boolean} true/false
         * @example
         * var bNull = this.gfnIsNull("aaa");	// false
         */
        this.fnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            let ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        this.getToay = function()
        {
        	let objDate = new nexacro.Date();
        	let year = objDate.getFullYear().toString().padLeft(4, "0");
        	let month = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	let date = objDate.getDate().toString().padLeft(2, "0");

        	return (year + month + date);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_onload,this);
            this.addEventHandler("onlayoutchanged",this.main_onlayoutchanged,this);
        };
        this.loadIncludeScript("main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
