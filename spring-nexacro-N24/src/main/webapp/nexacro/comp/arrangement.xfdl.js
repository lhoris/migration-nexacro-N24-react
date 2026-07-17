(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("arrangement");
            this.set_titletext("Arrangement");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","20","20","220","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"comp.arrangement.title\",\"편리한 컴포넌트 정렬\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("comp.arrangement.title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","80","880","175",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","158","60","517","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","38","62","107","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Name ");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","10","188","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Customer Infomation");
            obj.set_cssclass("sta_WF_compTitle02");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divContact","38","103","728","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("comp::arrangement_phone.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_coustomer_add","680","109","70","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","20","Div00:20","880","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","10","268","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Familly Infomation");
            obj.set_cssclass("sta_WF_compTitle02");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("divFamilly","38","50","728","130",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("comp::arrangement_familly.xfdl");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_add","680","66","70","36",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic01");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.divContact
            obj = new Layout("default","",0,0,this.Div00.form.divContact.form,function(p){});
            this.Div00.form.divContact.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("2");
                p.Edit00.move("158","60","517","36",null,null);

                p.Static02.set_taborder("1");
                p.Static02.set_text("Name ");
                p.Static02.set_cssclass("sta_WF_labelTxt01");
                p.Static02.move("38","62","107","32",null,null);

                p.Static06.set_taborder("0");
                p.Static06.set_text("Customer Infomation");
                p.Static06.set_cssclass("sta_WF_compTitle02");
                p.Static06.move("20","10","188","30",null,null);

                p.divContact.set_taborder("3");
                p.divContact.set_text("Div00");
                p.divContact.set_url("comp::arrangement_phone.xfdl");
                p.divContact.move("38","103","728","43",null,null);

                p.btn_coustomer_add.set_taborder("4");
                p.btn_coustomer_add.set_text("Add");
                p.btn_coustomer_add.set_cssclass("btn_WF_basic01");
                p.btn_coustomer_add.move("680","109","70","36",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.divFamilly
            obj = new Layout("default","",0,0,this.Div01.form.divFamilly.form,function(p){});
            this.Div01.form.divFamilly.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static06.set_taborder("0");
                p.Static06.set_text("Familly Infomation");
                p.Static06.set_cssclass("sta_WF_compTitle02");
                p.Static06.move("20","10","268","30",null,null);

                p.divFamilly.set_taborder("1");
                p.divFamilly.set_text("Div00");
                p.divFamilly.set_url("comp::arrangement_familly.xfdl");
                p.divFamilly.move("38","50","728","130",null,null);

                p.btn_add.set_taborder("2");
                p.btn_add.set_text("Add");
                p.btn_add.set_cssclass("btn_WF_basic01");
                p.btn_add.move("680","66","70","36",null,null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",920,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","comp::arrangement_phone.xfdl");
            this._addPreloadList("fdl","comp::arrangement_familly.xfdl");
        };
        
        // User Script
        this.registerScript("arrangement.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 load시 초기설정 event
        */
        this.arrangement_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        }

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * Customer Infomation 부분
        */

        this.Div00_btn_coustomer_add_onclick = function(obj,e)
        {
        	this.addContact();
        };

        this.contacts = ["divContact"];
        this.getSequenceId = 0;

        this.addContact = function()
        {
        	this.getSequenceId++;
        	let id = "divContact" + this.getSequenceId;

        	let objDiv = new Div(id, 38, this.contacts[this.contacts.length-1] + ":-1", null, 45, 10, null);
        	objDiv.async = false;
        	objDiv.formscrollbartype = "none";
        	objDiv.border = "0px none";
        	objDiv.url = "comp::arrangement_phone.xfdl";
        	let nTabOrder = nexacro.toNumber(this.Div00.form.components[this.contacts[this.contacts.length-1]].taborder);
        	let nIdx = this.Div00.insertChild(nTabOrder+1, id, objDiv);
        	objDiv.taborder = nIdx;
        	objDiv.show();

        	this.Div00.form.components[id].form.btn_del.visible = true;

        	this.contacts.push(id);
        	this.Div00.form.resetScroll();

        	this.Div00.height = nexacro.toNumber(this.Div00.height) + 45;
        	this.height = nexacro.toNumber(this.height) + 45;
        	this.resetScroll();

        //	//frame resize
        // 	var p = this.parent.parent;
        // 	p["mainPageOnLoad"].call(p, this.getOffsetHeight());
        //
        // 	var p = this.parent.parent;
        // 	p["descPageOnLoad"].call(p, this.getOffsetHeight());

        };

        this.deleteContact = function(id)
        {
        	let idx = this.contacts.indexOf(id);
        	if (idx > 0 && idx < this.contacts.length-1) {
        		this.Div00.form.components[this.contacts[idx+1]].top = this.contacts[idx-1] + ":-1";
        	}

        	idx = this.contacts.indexOf(id)
        	if (idx > -1) this.contacts.splice(idx, 1)

        	let objDelete = this.Div00.removeChild(id);
        	objDelete.destroy();
        	objDelete = null;
        	this.Div00.form.resetScroll();

        	this.Div00.height = nexacro.toNumber(this.Div00.height) - 45;
        	this.height = nexacro.toNumber(this.height) - 45;
        	this.resetScroll();

        // 	//frame resize
        // 	var p = this.parent.parent;
        // 	p["mainPageOnLoad"].call(p, this.getOffsetHeight());
        //
        // 	var p = this.parent.parent;
        // 	p["descPageOnLoad"].call(p, this.getOffsetHeight());
        };


        /**
        * Familly Infomation 부분
        */
        this.Div00_btn_familly_add_onclick = function(obj,e)
        {
        	this.addFamilly();
        };

        this.Familly = ["divFamilly"];
        this.getSequenceId = 0;

        this.addFamilly = function()
        {
        	this.getSequenceId++;
        	let id = "divFamilly" + this.getSequenceId;

        	let objDiv = new Div(id, 38, this.Familly[this.Familly.length-1] + ":-1", null, 125, 10, null);
        	objDiv.async = false;
        	objDiv.formscrollbartype = "none";
        	objDiv.border = "0px none";
        	objDiv.url = "comp::arrangement_familly.xfdl";
        	let nTabOrder = nexacro.toNumber(this.Div01.form.components[this.Familly[this.Familly.length-1]].taborder);
        	let nIdx = this.Div01.insertChild(nTabOrder+1, id, objDiv);
        	objDiv.taborder = nIdx;
        	objDiv.show();

        	this.Div01.form.components[id].form.btn_del.visible = true;

        	this.Familly.push(id);
        	this.Div01.form.resetScroll();

        	this.Div01.height = nexacro.toNumber(this.Div01.height) + 125;
        	this.height = nexacro.toNumber(this.height) + 125;
        	this.resetScroll();

        // 	//frame resize
        // 	var p = this.parent.parent;
        // 	p["mainPageOnLoad"].call(p, this.getOffsetHeight());
        //
        // 	var p = this.parent.parent;
        // 	p["descPageOnLoad"].call(p, this.getOffsetHeight());
        };

        this.deleteFamilly = function(id)
        {
        	let idx = this.Familly.indexOf(id);
        	if (idx > 0 && idx < this.Familly.length-1) {
        		this.Div01.form.components[this.Familly[idx+1]].top = this.Familly[idx-1] + ":-1";
        	}

        	idx = this.Familly.indexOf(id)
        	if (idx > -1) this.Familly.splice(idx, 1)

        	let objDelete = this.Div01.removeChild(id);
        	objDelete.destroy();
        	objDelete = null;
        	this.Div01.form.resetScroll();

        	this.Div01.height = nexacro.toNumber(this.Div01.height) - 110;
        	this.height = nexacro.toNumber(this.height) - 110;
        	this.resetScroll();

        // 	//frame resize
        // 	var p = this.parent.parent;
        // 	p["mainPageOnLoad"].call(p, this.getOffsetHeight());
        //
        // 	var p = this.parent.parent;
        // 	p["descPageOnLoad"].call(p, this.getOffsetHeight());
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.arrangement_onload,this);
            this.addEventHandler("ontimer",this.arrangement_ontimer,this);
            this.addEventHandler("ondragmove",this.arrangement_ondragmove,this);
            this.Div00.form.Edit00.addEventHandler("canchange",this.Div00_Edit00_canchange,this);
            this.Div00.form.btn_coustomer_add.addEventHandler("onclick",this.Div00_btn_coustomer_add_onclick,this);
            this.Div01.form.btn_add.addEventHandler("onclick",this.Div00_btn_familly_add_onclick,this);
        };
        this.loadIncludeScript("arrangement.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
