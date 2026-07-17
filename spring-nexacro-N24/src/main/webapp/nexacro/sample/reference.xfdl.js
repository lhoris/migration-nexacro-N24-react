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
                this._setFormPosition(920,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ref1", this);
            obj._setContents("<ColumnInfo><Column id=\"img\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"link\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"img\">imagerc::nexacro_n_sketch.png</Col><Col id=\"title\">Nexacro N Sketch</Col><Col id=\"link\">https://sketch.nexacro.com/</Col></Row><Row><Col id=\"img\">imagerc::nexacroMDI.png</Col><Col id=\"title\">nexacro MDI sample</Col><Col id=\"link\">https://demo.tobesoft.com/nexacro-demo-v17/</Col></Row><Row><Col id=\"img\">imagerc::smart_factory.png</Col><Col id=\"title\">SmartFactory Demo</Col><Col id=\"link\">https://demo.tobesoft.com/SmartFactory/</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ref2", this);
            obj._setContents("<ColumnInfo><Column id=\"img\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"link\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"img\">imagerc::playnexacro.png</Col><Col id=\"title\">Community(play nexacro)</Col><Col id=\"link\">https://www.playnexacro.com/</Col></Row><Row><Col id=\"img\">imagerc::showcase.png</Col><Col id=\"title\">nexacro platofrm Showcase</Col><Col id=\"link\">http://support.tobesoft.co.kr/Next_JSP/nexacro17_deploy/Showcase/launch.html</Col></Row><Row><Col id=\"img\">imagerc::developer_guide.png</Col><Col id=\"title\">Developer Guide Sample</Col><Col id=\"link\">http://demo.nexacro.com/developer_guide/17/guide.html</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ref3", this);
            obj._setContents("<ColumnInfo><Column id=\"img\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"link\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">스마트 출입관리 V-Pass</Col><Col id=\"img\">imagerc::v-pass.png</Col><Col id=\"link\">https://www.tobesoft.com/solution/v-pass/</Col></Row><Row><Col id=\"title\">Education Video</Col><Col id=\"img\">imagerc::education.png</Col><Col id=\"link\">http://demo.nexacro.com/EduPlay/_web_/index.html</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitle","20","20","114","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.reference\",\"Reference\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("sample.reference");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","19","57","275","767",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_ref1");
            obj.set_useselcolor("false");
            obj.set_border("0px none");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_readonly("true");
            obj.set_cssclass("grd_WF_check");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"391\"/></Columns><Rows><Row size=\"200\"/><Row size=\"30\"/><Row size=\"12\"/></Rows><Band id=\"body\"><Cell text=\"bind:img\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" border=\"0px none\" cursor=\"pointer\"/><Cell row=\"1\" text=\"bind:title\" border=\"0px none\"/><Cell row=\"2\" border=\"0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","321","57","275","767",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_ref2");
            obj.set_useselcolor("false");
            obj.set_border("0px none");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_readonly("true");
            obj.set_cssclass("grd_WF_check");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"391\"/></Columns><Rows><Row size=\"200\"/><Row size=\"30\"/><Row size=\"12\"/></Rows><Band id=\"body\"><Cell text=\"bind:img\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" border=\"0px none\" cursor=\"pointer\"/><Cell row=\"1\" text=\"bind:title\" border=\"0px none\"/><Cell row=\"2\" border=\"0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","623","56","275","767",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_ref3");
            obj.set_useselcolor("false");
            obj.set_border("0px none");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_readonly("true");
            obj.set_cssclass("grd_WF_check");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"391\"/></Columns><Rows><Row size=\"200\"/><Row size=\"30\"/><Row size=\"12\"/></Rows><Band id=\"body\"><Cell text=\"bind:img\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" border=\"0px none\" cursor=\"pointer\"/><Cell row=\"1\" text=\"bind:title\" border=\"0px none\"/><Cell row=\"2\" border=\"0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("reference.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        this.Grid_oncellclick = function(obj,e)
        {
        	system.execDefaultBrowser(obj.getBindDataset().getColumn(e.row,"link"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.Grid00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
        };
        this.loadIncludeScript("reference.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
