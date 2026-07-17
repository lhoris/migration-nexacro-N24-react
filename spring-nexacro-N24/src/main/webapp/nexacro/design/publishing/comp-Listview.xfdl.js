(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("compListview");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Listview", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"Department\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/><Column id=\"Position\" type=\"STRING\" size=\"256\"/><Column id=\"Tel\" type=\"STRING\" size=\"256\"/><Column id=\"Email\" type=\"STRING\" size=\"256\"/><Column id=\"Profile\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Department\">Tobesoft</Col><Col id=\"Position\">CEO</Col><Col id=\"Name\">Matthew</Col><Col id=\"Tel\">01011111234</Col><Col id=\"Email\">Matthew@mail.com</Col><Col id=\"Profile\">imagerc::img_WF_lstvProfile01.png</Col><Col id=\"id\">TB-001</Col></Row><Row><Col id=\"Department\">R&amp;D Dept</Col><Col id=\"Position\">Senior Engineer</Col><Col id=\"Name\">Alex</Col><Col id=\"Tel\">01022225678</Col><Col id=\"Email\">Alex@mail.com</Col><Col id=\"Profile\">imagerc::img_WF_lstvProfile02.png</Col><Col id=\"id\">TB-010</Col></Row><Row><Col id=\"Department\">Planning Dept</Col><Col id=\"Position\">General Manager</Col><Col id=\"Name\">Mark</Col><Col id=\"Email\">Mark@mail.com</Col><Col id=\"Tel\">01033331234</Col><Col id=\"Profile\">imagerc::img_WF_lstvProfile03.png</Col><Col id=\"id\">TB-015</Col></Row><Row><Col id=\"Department\">Technical Support</Col><Col id=\"Position\">Senior Engineer</Col><Col id=\"Name\">Kate</Col><Col id=\"Email\">Kate@mail.com</Col><Col id=\"Tel\">01011111234</Col><Col id=\"Profile\">imagerc::img_WF_lstvProfile04.png</Col><Col id=\"id\">TB-023</Col></Row><Row><Col id=\"Department\">Customer Service</Col><Col id=\"Position\">General Manager</Col><Col id=\"Name\">Jennifer</Col><Col id=\"Email\">Jennifer@mail.com</Col><Col id=\"Tel\">01022225678</Col><Col id=\"Profile\">imagerc::img_WF_lstvProfile05.png</Col><Col id=\"id\">TB-036</Col></Row><Row><Col id=\"Department\">Design Team</Col><Col id=\"Position\">Team Manager</Col><Col id=\"Name\">Henry</Col><Col id=\"Email\">Henry@mail.com</Col><Col id=\"Tel\">01033331234</Col><Col id=\"Profile\">imagerc::img_WF_lstvProfile06.png</Col><Col id=\"id\">TB-053</Col></Row><Row><Col id=\"Department\">Marketing Dept</Col><Col id=\"Position\">Team Manager</Col><Col id=\"Name\">Pablo</Col><Col id=\"Email\">Pablo@mail.com</Col><Col id=\"Tel\">01012345678</Col><Col id=\"Profile\">imagerc::img_WF_lstvProfile07.png</Col><Col id=\"id\">TB-050</Col></Row><Row><Col id=\"Department\">Management Dept</Col><Col id=\"Position\">General Manager</Col><Col id=\"Name\">Camila </Col><Col id=\"Email\">Camila @mail.com</Col><Col id=\"Tel\">01056781234</Col><Col id=\"Profile\">imagerc::img_WF_lstvProfile08.png</Col><Col id=\"id\">TB-068</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","40","40",null,null,"40","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","14","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("ListView");
            obj.set_cssclass("sta_WF_pageTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new ListView("ListView00","40","70",null,"640","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Listview");
            obj.set_bandexpandtype("accordion");
            obj.set_bandinitstatus("collapse");
            obj.set_scrollbarsize("12");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"80\" expandbartype=\"true\" expandbarsize=\"50 30\"><Cell id=\"Cell01\" left=\"170\" top=\"25\" width=\"180\" height=\"30\" text=\"bind:Department\" cssclass=\"cell_lstvTxt02\"/><Cell id=\"Cell03\" left=\"360\" top=\"25\" width=\"180\" height=\"30\" text=\"bind:Name\" cssclass=\"cell_lstvTxt03\"/><Cell id=\"Cell00\" left=\"41\" top=\"25\" width=\"120\" height=\"30\" text=\"bind:id\" cssclass=\"cell_lstvTxt01\"/></Band><Band id=\"detail\" width=\"100%\" height=\"300\"><Cell id=\"Cell01\" left=\"250\" top=\"35\" width=\"180\" height=\"30\" text=\"bind:Department\" cssclass=\"cell_lstvTxt04\"/><Cell id=\"Cell03\" left=\"250\" top=\"95\" width=\"180\" height=\"30\" text=\"bind:Name\" cssclass=\"cell_lstvTxt05\"/><Cell id=\"Cell05\" left=\"250\" top=\"65\" width=\"180\" height=\"30\" text=\"bind:Position\" cssclass=\"cell_lstvTxt04\"/><Cell id=\"Cell06\" left=\"250\" top=\"161\" width=\"120\" height=\"25\" text=\"Tel\" cssclass=\"cell_lstvTxt06\"/><Cell id=\"Cell07\" left=\"250\" top=\"186\" width=\"180\" height=\"25\" text=\"bind:Tel\" cssclass=\"cell_lstvTxt07\"/><Cell id=\"Cell08\" left=\"250\" top=\"221\" width=\"120\" height=\"25\" text=\"Email\" cssclass=\"cell_lstvTxt06\"/><Cell id=\"Cell09\" left=\"250\" top=\"246\" width=\"180\" height=\"25\" text=\"bind:Email\" cssclass=\"cell_lstvTxt07\"/><Cell id=\"Cell11\" left=\"40\" top=\"20\" width=\"150\" height=\"150\" text=\"bind:Profile\" cssclass=\"cell_lstvProfile\" displaytype=\"imagecontrol\"/></Band></Format><Format id=\"mobile\"><Band id=\"body\" width=\"100%\" height=\"80\" expandbarsize=\"50 30\" expandbartype=\"true\"><Cell id=\"Cell01\" left=\"101\" top=\"10\" width=\"150\" height=\"30\" text=\"bind:Department\" cssclass=\"cell_lstvTxt02\"/><Cell id=\"Cell03\" left=\"101\" top=\"40\" width=\"150\" height=\"30\" text=\"bind:Name\" cssclass=\"cell_lstvTxt03\"/><Cell id=\"Cell00\" left=\"21\" top=\"25\" width=\"80\" height=\"30\" text=\"bind:id\" cssclass=\"cell_lstvTxt01\"/></Band><Band id=\"detail\" width=\"100%\" height=\"300\"><Cell id=\"Cell01\" left=\"170\" top=\"37\" width=\"150\" height=\"30\" text=\"bind:Department\" cssclass=\"cell_lstvTxt04\"/><Cell id=\"Cell03\" left=\"170\" top=\"97\" width=\"150\" height=\"30\" text=\"bind:Name\" cssclass=\"cell_lstvTxt05\"/><Cell id=\"Cell05\" left=\"170\" top=\"67\" width=\"150\" height=\"30\" text=\"bind:Position\" cssclass=\"cell_lstvTxt04\"/><Cell id=\"Cell06\" left=\"40\" top=\"168\" width=\"120\" height=\"25\" text=\"Tel\" cssclass=\"cell_lstvTxt06\"/><Cell id=\"Cell07\" left=\"40\" top=\"193\" width=\"180\" height=\"25\" text=\"bind:Tel\" cssclass=\"cell_lstvTxt07\"/><Cell id=\"Cell08\" left=\"40\" top=\"228\" width=\"120\" height=\"25\" text=\"Email\" cssclass=\"cell_lstvTxt06\"/><Cell id=\"Cell09\" left=\"40\" top=\"253\" width=\"180\" height=\"25\" text=\"bind:Email\" cssclass=\"cell_lstvTxt07\"/><Cell id=\"Cell11\" left=\"10\" top=\"10\" width=\"150\" height=\"150\" text=\"bind:Profile\" cssclass=\"cell_lstvProfile\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("ListView");
                p.Static00.set_cssclass("sta_WF_pageTitle");
                p.Static00.move("40","14","300","40",null,null);

                p.ListView00.set_taborder("1");
                p.ListView00.set_binddataset("ds_Listview");
                p.ListView00.set_bandexpandtype("accordion");
                p.ListView00.set_bandinitstatus("collapse");
                p.ListView00.set_scrollbarsize("12");
                p.ListView00.set_formatid("default");
                p.ListView00.move("40","70",null,"640","40",null);
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
                p.ListView00.set_formatid("mobile");
                p.ListView00.move("20","70",null,"640","20",null);

                p.Static00.move("20","14","300","40",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1000,870,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Div00.set_taborder("0");
                p.Div00.set_cssclass("div_WF_area");
                p.Div00.move("40","40",null,null,"40","70");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",410,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","20",null,"760","20",null);
            	}
            );
            obj.set_mobileorientation("landscape");
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
        this.loadIncludeScript("comp-Listview.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
