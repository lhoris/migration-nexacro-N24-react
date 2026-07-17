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
            obj = new Dataset("ds_ListviewContact", this);
            obj._setContents("<ColumnInfo><Column id=\"Profile\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/><Column id=\"Organization\" type=\"STRING\" size=\"256\"/><Column id=\"PhoneNum\" type=\"STRING\" size=\"256\"/><Column id=\"iconCall\" type=\"STRING\" size=\"256\"/><Column id=\"iconSMS\" type=\"STRING\" size=\"256\"/><Column id=\"iconInfo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">David Slater</Col><Col id=\"Organization\">NBC Universal. Inc.</Col><Col id=\"PhoneNum\">+82-10-1234-5678</Col><Col id=\"iconCall\">Call</Col><Col id=\"iconSMS\">SMS</Col><Col id=\"iconInfo\">Info</Col><Col id=\"Profile\">imagerc::img_MWF_lstvProfile01.png</Col></Row><Row><Col id=\"Name\">Jane Smith</Col><Col id=\"Organization\">emirates Airlines</Col><Col id=\"PhoneNum\">+82-10-3456-7890</Col><Col id=\"iconCall\">Call</Col><Col id=\"iconSMS\">SMS</Col><Col id=\"iconInfo\">Info</Col><Col id=\"Profile\">imagerc::img_MWF_lstvProfile02.png</Col></Row><Row><Col id=\"Name\">Veronica Smithers</Col><Col id=\"Organization\">Valencia Marketing </Col><Col id=\"PhoneNum\">+82-10-5678-1234</Col><Col id=\"iconCall\">Call</Col><Col id=\"iconSMS\">SMS</Col><Col id=\"iconInfo\">Info</Col><Col id=\"Profile\">imagerc::img_MWF_lstvProfile03.png</Col></Row><Row><Col id=\"Name\">James Snyder</Col><Col id=\"Organization\">Dominion</Col><Col id=\"PhoneNum\">+82-10-9876-5432</Col><Col id=\"iconCall\">Call</Col><Col id=\"iconSMS\">SMS</Col><Col id=\"iconInfo\">Info</Col><Col id=\"Profile\">imagerc::img_MWF_lstvProfile04.png</Col></Row><Row><Col id=\"Name\">Serena Sotherby</Col><Col id=\"Organization\">Coral Sands Resort</Col><Col id=\"PhoneNum\">+82-10-6789-0123</Col><Col id=\"iconCall\">Call</Col><Col id=\"iconSMS\">SMS</Col><Col id=\"iconInfo\">Info</Col><Col id=\"Profile\">imagerc::img_MWF_lstvProfile05.png</Col></Row><Row><Col id=\"Name\">Jane Stevens</Col><Col id=\"Organization\">Regency Group</Col><Col id=\"PhoneNum\">+82-10-5432-1098</Col><Col id=\"iconCall\">Call</Col><Col id=\"iconSMS\">SMS</Col><Col id=\"iconInfo\">Info</Col><Col id=\"Profile\">imagerc::img_MWF_lstvProfile06.png</Col></Row><Row><Col id=\"Name\">Matthew Evan</Col><Col id=\"Organization\">Hermes</Col><Col id=\"PhoneNum\">+82-10-4567-8901</Col><Col id=\"iconCall\">Call</Col><Col id=\"iconSMS\">SMS</Col><Col id=\"iconInfo\">Info</Col><Col id=\"Profile\">imagerc::img_MWF_lstvProfile07.png</Col></Row><Row><Col id=\"Name\">Kate </Col><Col id=\"Organization\">Hertz</Col><Col id=\"PhoneNum\">+82-10-8910-2345</Col><Col id=\"iconCall\">Call</Col><Col id=\"iconSMS\">SMS</Col><Col id=\"iconInfo\">Info</Col><Col id=\"Profile\">imagerc::img_MWF_lstvProfile08.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","180","30","80","80",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("img_MWF_profile");
            obj.set_image("url(\'imagerc::img_WF_lstvProfile01.png\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","130",null,"160","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#eeeeee");
            obj.set_cssclass("div_MWF_contactBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50","19",null,"30","50",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("John Doe");
            obj.set_cssclass("sta_MWF_contactName");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","50","54",null,"30","50",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("+82-10-1234-5678");
            obj.set_cssclass("sta_MWF_contactPhone");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","100","96","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MWF_contactPhone");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"96","50","50","100",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MWF_contactEmail");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","20","310",null,"354","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#eeeeee");
            obj.set_cssclass("div_MWF_contactBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","20","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Mobile");
            obj.set_cssclass("sta_MWF_contactTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","20","40","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("+82-10-1234-5678");
            obj.set_cssclass("sta_MWF_contactTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"15","50","50","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MWF_contactPhone");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","80","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Home");
            obj.set_cssclass("sta_MWF_contactTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","100","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("+82-2-1234-5678");
            obj.set_cssclass("sta_MWF_contactTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"75","50","50","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MWF_contactPhone");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","140","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("Work");
            obj.set_cssclass("sta_MWF_contactTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","160","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("+82-2-1234-5678");
            obj.set_cssclass("sta_MWF_contactTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"135","50","50","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MWF_contactPhone");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02","20","200","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("Email");
            obj.set_cssclass("sta_MWF_contactTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_02","20","220","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("john@abc.com");
            obj.set_cssclass("sta_MWF_contactTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"195","50","50","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_MWF_contactEmail");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","20","260","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("Work Address");
            obj.set_cssclass("sta_MWF_contactTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","20","280","290","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("InBongeunsa-rotops Building, 617,\r\nGangnam-gu, Seoul, Korea\r\n");
            obj.set_verticalAlign("top");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_MWF_contactTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"265","50","50","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_MWF_contactAddress");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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
        this.registerScript("device-ContactsDetail.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        this.Div00_Radio00_onitemchanged = function(obj,e)
        {
        	this.Grid02.set_formatid(e.postvalue);
        };

        this.Edit00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("device-ContactsDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
