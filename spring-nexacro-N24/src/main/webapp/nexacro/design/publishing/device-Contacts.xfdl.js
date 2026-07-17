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
            obj = new Edit("Edit00","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edit_MWF_contactSearch");
            obj.set_displaynulltext("Search");
            obj.set_text("Search");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","20","70",null,"574","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_ListviewContact");
            obj.set_cssclass("lstv_MWF_contact");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"70\"><Cell id=\"Cell01\" left=\"5\" top=\"5\" width=\"60\" height=\"60\" text=\"bind:Profile\" cssclass=\"lstvContact_profile\" displaytype=\"imagecontrol\"/><Cell id=\"Cell03\" left=\"70\" top=\"13\" width=\"180\" height=\"20\" text=\"bind:Name\" cssclass=\"lstvContact_txt01\"/><Cell id=\"Cell05\" left=\"70\" width=\"180\" height=\"20\" text=\"bind:Organization\" bottom=\"17\" cssclass=\"lstvContact_txt02\"/><Cell id=\"Cell00\" top=\"10\" width=\"50\" height=\"50\" right=\"10\" cssclass=\"lstvContact_btn01\" edittype=\"button\"/></Band><Band id=\"detail\" width=\"100%\" height=\"150\"><Cell id=\"Cell09\" left=\"50\" top=\"50\" width=\"80\" height=\"80\" text=\"bind:iconCall\" color=\"#111111\" edittype=\"button\" cssclass=\"lstvContact_img01\"/><Cell id=\"Cell11\" top=\"50\" height=\"80\" text=\"bind:iconSMS\" color=\"#111111\" edittype=\"button\" cssclass=\"lstvContact_img02\" width=\"80\" left=\"39.80%\"/><Cell id=\"Cell13\" top=\"50\" width=\"80\" height=\"80\" text=\"bind:iconInfo\" color=\"#111111\" edittype=\"button\" cssclass=\"lstvContact_img03\" right=\"51\"/><Cell id=\"Cell07\" top=\"15\" height=\"24\" text=\"bind:PhoneNum\" right=\"0\" left=\"0\" cssclass=\"lstvContact_txt03\"/></Band></Format></Formats>");
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
        this.registerScript("device-Contacts.xfdl", function() {

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
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
        };
        this.loadIncludeScript("device-Contacts.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
