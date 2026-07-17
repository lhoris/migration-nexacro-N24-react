(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("progressload");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_progressload("true");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","350","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.progressload\",\"분할 조회 - ProgressLoad\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("grid.progressload");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","75",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"82","46","46","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_inquiry");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","156","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"inquiry.result\",\"Inquiry result\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("inquiry.result");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","194",null,"596","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_scrollbarbarminsize("100");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"First name\"/><Cell col=\"2\" text=\"Last name\"/><Cell col=\"3\" text=\"Email\"/><Cell col=\"4\" text=\"Gender\"/><Cell col=\"5\" text=\"IP Address\"/><Cell col=\"6\" text=\"City\"/><Cell col=\"7\" text=\"Color\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:FIRST_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LAST_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EMAIL\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:GENDER\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:IP_ADDRESS\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:CITY\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:COLOR\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"70\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"First name\"/><Cell col=\"2\" text=\"Last name\"/><Cell col=\"3\" text=\"Email\"/><Cell col=\"4\" text=\"Gender\"/><Cell col=\"5\" text=\"IP Address\"/><Cell col=\"6\" text=\"State\"/><Cell col=\"7\" text=\"Street\"/><Cell col=\"8\" text=\"Date\"/><Cell col=\"9\" text=\"Domain\"/><Cell col=\"10\" text=\"GUID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:first_name\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:last_name\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:email\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:gender\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ip_address\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:state\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:street\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:domain\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:guid\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stSearchTimeOrg","40","85","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("<fc v=\'#FE5252\'>0</fc> / <fc v=\'#FE5252\'>100,000</fc> rows");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txt14px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",920,810,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("progressload.xfdl", function() {

        this.progressload_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        	nexacro.getEnvironment().usewaitcursor = false;

        	this.langCode = nexacro.getApplication().langCode;

        	if (this.langCode == "ko") {
        		this.stSearchTimeOrg.text = "조회 건수 <fc v='#FE5252'>0</fc> / <fc v='#FE5252'>100,000</fc> 건";
        	} else {
        		this.stSearchTimeOrg.text = "Number of views <fc v='#FE5252'>0</fc> / <fc v='#FE5252'>100,000</fc> rows";
        	}
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	if (this.langCode == "ko") {
        		this.stSearchTimeOrg.text = "조회 건수 <fc v='#FE5252'>0</fc> / <fc v='#FE5252'>100,000</fc> 건";
        	} else {
        		this.stSearchTimeOrg.text = "Number of views <fc v='#FE5252'>0</fc> / <fc v='#FE5252'>100,000</fc> rows";
        	}

        	const sId = "SEARCH";
        	const sUrl = "svc::progressload.do";
        	let sInDs = "";
        	let sOutDs = "dsList=output";
        	let sParam = "";
        	const sCallback = "fnCallback";
        	let isAsync = true;
        	let nDataType = 2;

        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback, isAsync, nDataType);
        };

        this.fnCallback = function(sId, nErrorCd, sErrorMsg, elapsedTime)
        {
        	if(nErrorCd<0)
        	{
        		alert("["+nErrorCd+"]"+sErrorMsg);
        	}else
        	{
        		if (sId == "SEARCH")
        		{
        			let	nRowCount = this.dsList.rowcount;
        			if (this.langCode == "ko") {
        				this.stSearchTimeOrg.text = "조회 건수 <fc v='#FE5252'>"+this.gfnAppendComma(this.dsList.rowcount)+"</fc> / <fc v='#FE5252'>100,000</fc> 건";
        			} else {
        				this.stSearchTimeOrg.text = "Number of views <fc v='#FE5252'>"+this.gfnAppendComma(this.dsList.rowcount)+"</fc> / <fc v='#FE5252'>100,000</fc> rows";
        			}
        		}
        	}

        }

        this.progressload_onclose = function(obj,e)
        {
        	nexacro.getEnvironment().usewaitcursor = true;
        };

        this.dsList_onload = function(obj,e)
        {
        	let	nRowCount = this.dsList.rowcount;

        	if (this.langCode == "ko") {
        		this.stSearchTimeOrg.text = "조회 건수 <fc v='#FE5252'>"+this.gfnAppendComma(this.dsList.rowcount)+"</fc> / <fc v='#FE5252'>100,000</fc> 건";
        	} else {
        		this.stSearchTimeOrg.text = "Number of views <fc v='#FE5252'>"+this.gfnAppendComma(this.dsList.rowcount)+"</fc> / <fc v='#FE5252'>100,000</fc> rows";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.progressload_onload,this);
            this.addEventHandler("onclose",this.progressload_onclose,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsList.addEventHandler("onload",this.dsList_onload,this);
        };
        this.loadIncludeScript("progressload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
