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
                this._setFormPosition(920,880);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","20","20","114","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.restful\",\"RESTful\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("sample.restful");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","780","418","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"sample.restful.sendrequest\",\"Send Request\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("sample.restful.sendrequest");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","70","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("URL");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","144","70","756","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("https://services.odata.org/v4/TripPinServiceRW/People");
            obj.set_text("https://services.odata.org/v4/TripPinServiceRW/People");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","120","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Method");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","144","120","756","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GET</Col><Col id=\"datacolumn\">GET</Col></Row><Row><Col id=\"codecolumn\">POST</Col><Col id=\"datacolumn\">POST</Col></Row><Row><Col id=\"codecolumn\">OPTIONS</Col><Col id=\"datacolumn\">OPTIONS</Col></Row><Row><Col id=\"codecolumn\">PUT</Col><Col id=\"datacolumn\">PUT</Col></Row><Row><Col id=\"codecolumn\">DELETE</Col><Col id=\"datacolumn\">DELETE</Col></Row><Row><Col id=\"codecolumn\">HEAD</Col><Col id=\"datacolumn\">HEAD</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("POST");
            obj.set_value("POST");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","30","170","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Parameter");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","144","170","756","240",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("{\n    \'UserName\':\'lewisblack\',\n    \'FirstName\':\'Lewis\',\n    \'LastName\':\'Black\',\n    \'Emails\':[\n        \'lewisblack@example.com\'\n    ],\n    \'AddressInfo\':[\n        {\n            Address: \'187 Suffolk Ln.\',\n            City: {\nCountryRegion: \'United States\',\nName: \'Boise\',\nRegion: \'ID\'\n            }\n        }\n    ],\n    \'Gender\': \'Male\',\n    \'Concurrency\':635519729375200400\n}\n");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("auto");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","30","480","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Response");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","144","480","756","380",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,880,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("restful.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        this.Button00_onclick = function(obj,e)
        {
        	let url = this.Edit00.value;
        	let settings = {
        			"method": this.Radio00.value,
        			"param": this.TextArea00.value,
        			"callback": function(code, response) {
        				this.TextArea01.value = response;
        			}
        		};
        	this.sendRequest(url, settings);
        };

        this.sendRequest = function(url, settings) {
            let createCORSRequest = function(method, url) {
        		let xhr = new XMLHttpRequest();

        		if (xhr) {
        			xhr.open(method, url, true);
        		} else if (typeof XDomainRequest != "undefined") {
        			xhr = new XDomainRequest();
        			xhr.open(method, url);
        		} else {
        			xhr = null;
        		}
        		return xhr;
        	};

            const pForm = this;
        	let method = settings["method"]?settings["method"]:"GET";
            let xhr = createCORSRequest(method, url);
            let sParam = JSON.stringify(settings["param"]);
            let callback = settings["callback"];

        	try {
                xhr.timeout = nexacro.getEnvironment().httptimeout * 1000; // time in milliseconds
                xhr.ontimeout = function(e) {
                    if (typeof callback == "function") {
                        callback.call(pForm, -1, "Request Timeout");
                    } else if (typeof callback == "string") {
                        pForm[callback].call(pForm, -1, "Request Timeout");
                    }
                };
            } catch (e) {}

        	xhr.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    let response = this.responseText;

                    if (typeof callback == "function") {
                        callback.call(pForm, 0, response);
                    } else if (typeof callback == "string") {
                        pForm[callback].call(pForm, 0, response);
                    }
                }
        	};

        	xhr.send(sParam);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("restful.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
