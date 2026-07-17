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
                this._setFormPosition(920,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_setting", this);
            obj._setContents("<ColumnInfo><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"Description\" type=\"STRING\" size=\"256\"/><Column id=\"Hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Num\">1</Col><Col id=\"Description\">Search</Col><Col id=\"Hotkey\">F2</Col></Row><Row><Col id=\"Num\">2</Col><Col id=\"Description\">Save</Col><Col id=\"Hotkey\">F3</Col></Row><Row><Col id=\"Num\">3</Col><Col id=\"Description\">Add</Col><Col id=\"Hotkey\">Alt+A</Col></Row><Row><Col id=\"Num\">4</Col><Col id=\"Description\">Delete</Col><Col id=\"Hotkey\">Alt+D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listbox", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">A</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">B</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">C</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">D</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">E</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">F</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">G</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">H</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">I</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">J</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">K</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"ProductID\" type=\"STRING\" size=\"256\"/><Column id=\"ProductName\" type=\"STRING\" size=\"256\"/><Column id=\"UnitPrice\" type=\"STRING\" size=\"256\"/><Column id=\"Qty\" type=\"STRING\" size=\"256\"/><Column id=\"Amount\" type=\"STRING\" size=\"256\"/><Column id=\"Notes\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ProductID\">A10001</Col><Col id=\"ProductName\">TV</Col><Col id=\"UnitPrice\">2000000</Col><Col id=\"Amount\">2000000</Col><Col id=\"Qty\">1</Col></Row><Row><Col id=\"ProductID\">A10002</Col><Col id=\"ProductName\">Tablet</Col><Col id=\"UnitPrice\">900000</Col><Col id=\"Qty\">3</Col><Col id=\"Amount\">2700000</Col></Row><Row><Col id=\"ProductID\">A10003</Col><Col id=\"ProductName\">Phone</Col><Col id=\"UnitPrice\">1500000</Col><Col id=\"Qty\">8</Col><Col id=\"Amount\">12000000</Col></Row><Row><Col id=\"ProductID\">A10004</Col><Col id=\"ProductName\">Keyboard</Col><Col id=\"UnitPrice\">20000</Col><Col id=\"Qty\">5</Col><Col id=\"Amount\">100000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitle","20","20","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Hot Key");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("sample.personalization");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","80","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Setting");
            obj.set_cssclass("sta_WF_compTitle02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","49","122","320","194",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_setting");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"100\"/><Column size=\"89\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"Num\"/><Cell col=\"1\" text=\"Description\"/><Cell col=\"2\" text=\"Hotkey\"/></Band><Band id=\"body\"><Cell text=\"bind:Num\"/><Cell col=\"1\" text=\"bind:Description\"/><Cell col=\"2\" text=\"bind:Hotkey\" expandimage=\"url(&apos;imagerc::btn_pvGrd_panelOpen.png&apos;)\" expandshow=\"show\" expandsize=\"26\" textAlign=\"left\" padding=\"0px 10px 0px 20px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","380","154","280","160",null,null,null,null,null,null,this);
            obj.set_border("1px solid #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","14","30","91","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Ctrl");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","14","63","91","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("Shift");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","14","96","91","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Alt");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new ListBox("ListBox00",null,"0","138",null,"0","0",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_listbox");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_itemheight("30");
            obj.set_border("0px none,0px none,0px none,1px solid #dddddd");
            obj.set_padding("5px");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Div("Div00","30","345","860","560",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_bgLaptop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","32","17","796","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_background("#cccccc");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","60","29","615","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_value("데이터 불러오기");
            obj.set_text("데이터 불러오기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","Edit00:5","29","120","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Search");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"108","100","38","165",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,"108","100","38","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_basic04");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","60","153",null,"270","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("col");
            obj.set_background("#ffffff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"ProductID\"/><Cell col=\"1\" text=\"ProductName\"/><Cell col=\"2\" text=\"UnitPrice\"/><Cell col=\"3\" text=\"Qty\"/><Cell col=\"4\" text=\"Amount\"/><Cell col=\"5\" text=\"Notes\"/></Band><Band id=\"body\"><Cell text=\"bind:ProductID\"/><Cell col=\"1\" text=\"bind:ProductName\"/><Cell col=\"2\" text=\"bind:UnitPrice\"/><Cell col=\"3\" text=\"bind:Qty\"/><Cell col=\"4\" text=\"bind:Amount\"/><Cell col=\"5\" text=\"bind:Notes\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"433","100","38","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,960,this,function(p){});
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
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("onlbuttonup",this.form_onlbuttonup,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.PopupDiv00.form.ListBox00.addEventHandler("onitemchanged",this.PopupDiv00_ListBox00_onitemchanged,this);
        };
        this.loadIncludeScript("sample-Hotkey.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
