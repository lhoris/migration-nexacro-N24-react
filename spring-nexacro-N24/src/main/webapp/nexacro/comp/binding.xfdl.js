(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TwoWayDataBinding");
            this.set_titletext("양방향 데이타 바인딩");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">M</Col><Col id=\"data\">Male</Col></Row><Row><Col id=\"code\">F</Col><Col id=\"data\">Female</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Parry</Col><Col id=\"Column1\">M</Col><Col id=\"Column2\">19851128</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">I am Parry.</Col></Row><Row><Col id=\"Column0\">Jennifer</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">1980331</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Jennifer.</Col></Row><Row><Col id=\"Column0\">Aland</Col><Col id=\"Column1\">M</Col><Col id=\"Column2\">19770105</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">I am Aland.</Col></Row><Row><Col id=\"Column0\">Rose</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">19911005</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Rose.</Col></Row><Row><Col id=\"Column0\">Lisa</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">19880420</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">I am Lisa.</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","76",null,"274","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"267\"/></Columns><Rows><Row size=\"49\" band=\"head\"/><Row size=\"49\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Gender\"/><Cell col=\"2\" text=\"Birthday\"/><Cell col=\"3\" text=\"Marital Status\"/><Cell col=\"4\" text=\"Remark\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\" editautoselect=\"true\" editdisplay=\"display\" displaytype=\"editcontrol\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column1\" combodataset=\"Dataset01\" combocodecol=\"code\" combodatacol=\"data\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column2\" calendardisplay=\"display\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Column4\" editautoselect=\"true\" editdisplay=\"display\" textAlign=\"left\" verticalAlign=\"middle\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divContainer","20","Grid00:20",null,"360","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_conBox02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","116","64","135","30",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.divContainer.addChild(obj.name, obj);

            obj = new Radio("Radio00","401","64","180","30",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("1");
            obj.set_columncount("2");
            obj.set_innerdataset("Dataset01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.divContainer.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","116","104","135","30",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divContainer.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","401","104","130","30",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("3");
            this.divContainer.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","116","145",null,"166","20",null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_wordWrap("char");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static07","20","99","116","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"comp.binding.birthday\",\"생년월일\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("comp.binding.birthday");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static09","299","99","116","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"comp.binding.marriage\",\"결혼여부\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("comp.binding.marriage");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static11","20","125","116","166",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("7");
            obj.set_text("TEXT(\"comp.binding.remark\",\"비고\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("comp.binding.remark");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static01","20","59","116","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("8");
            obj.set_text("TEXT(\"name\",\"이름\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("name");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static05","299","59","116","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("9");
            obj.set_text("TEXT(\"comp.binding.gender\",\"성별\")");
            obj.set_cssclass("sta_WF_compTitle03");
            obj.getSetter("messageid").set("comp.binding.gender");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static14","15","10","411","40",null,null,null,null,null,null,this.divContainer.form);
            obj.set_taborder("10");
            obj.set_text("TEXT(\"comp.binding.information\",\"상세정보\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.binding.information");
            this.divContainer.addChild(obj.name, obj);

            obj = new Static("Static60","20","20",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_wordWrap("char");
            obj.set_text("TEXT(\"comp.binding\",\"Data Binding\")");
            obj.getSetter("messageid").set("comp.binding");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContainer.form
            obj = new Layout("default","",0,0,this.divContainer.form,function(p){});
            this.divContainer.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContainer.form.Edit00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContainer.form.Radio00","value","Dataset00","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContainer.form.Calendar00","value","Dataset00","Column2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContainer.form.CheckBox00","value","Dataset00","Column3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContainer.form.TextArea00","value","Dataset00","Column4");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("binding.xfdl", function() {


        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("binding.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
