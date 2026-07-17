(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hotkey");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sampledata", this);
            obj._setContents("<ColumnInfo><Column id=\"ProductID\" type=\"STRING\" size=\"256\"/><Column id=\"ProductName\" type=\"STRING\" size=\"256\"/><Column id=\"UnitPrice\" type=\"STRING\" size=\"256\"/><Column id=\"Qty\" type=\"STRING\" size=\"256\"/><Column id=\"Amount\" type=\"STRING\" size=\"256\"/><Column id=\"Notes\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ProductID\">A10001</Col><Col id=\"ProductName\">TV</Col><Col id=\"UnitPrice\">2000000</Col><Col id=\"Qty\">1</Col><Col id=\"Amount\">2000000</Col></Row><Row><Col id=\"ProductID\">A10002</Col><Col id=\"ProductName\">Tablet</Col><Col id=\"UnitPrice\">900000</Col><Col id=\"Qty\">3</Col><Col id=\"Amount\">2700000</Col></Row><Row><Col id=\"ProductID\">A10003</Col><Col id=\"ProductName\">Phone</Col><Col id=\"UnitPrice\">1500000</Col><Col id=\"Qty\">8</Col><Col id=\"Amount\">12000000</Col></Row><Row><Col id=\"ProductID\">A10004</Col><Col id=\"ProductName\">Keyboard</Col><Col id=\"UnitPrice\">20000</Col><Col id=\"Qty\">5</Col><Col id=\"Amount\">100000</Col></Row><Row><Col id=\"ProductID\">A10005</Col><Col id=\"ProductName\">Mouse</Col><Col id=\"UnitPrice\">30000</Col><Col id=\"Qty\">3</Col><Col id=\"Amount\">90000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Search</Col><Col id=\"Column2\">F2</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Save</Col><Col id=\"Column2\">F3</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Add</Col><Col id=\"Column2\">ALT+A</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">Delete</Col><Col id=\"Column2\">ALT+D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_keylist", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"key\">A</Col></Row><Row><Col id=\"key\">B</Col></Row><Row><Col id=\"key\">C</Col></Row><Row><Col id=\"key\">D</Col></Row><Row><Col id=\"key\">E</Col></Row><Row><Col id=\"key\">F</Col></Row><Row><Col id=\"key\">G</Col></Row><Row><Col id=\"key\">H</Col></Row><Row><Col id=\"key\">I</Col></Row><Row><Col id=\"key\">J</Col></Row><Row><Col id=\"key\">K</Col></Row><Row><Col id=\"key\">L</Col></Row><Row><Col id=\"key\">M</Col></Row><Row><Col id=\"key\">N</Col></Row><Row><Col id=\"key\">O</Col></Row><Row><Col id=\"key\">P</Col></Row><Row><Col id=\"key\">Q</Col></Row><Row><Col id=\"key\">R</Col></Row><Row><Col id=\"key\">S</Col></Row><Row><Col id=\"key\">T</Col></Row><Row><Col id=\"key\">U</Col></Row><Row><Col id=\"key\">V</Col></Row><Row><Col id=\"key\">W</Col></Row><Row><Col id=\"key\">X</Col></Row><Row><Col id=\"key\">Y</Col></Row><Row><Col id=\"key\">Z</Col></Row><Row><Col id=\"key\">1</Col></Row><Row><Col id=\"key\">2</Col></Row><Row><Col id=\"key\">3</Col></Row><Row><Col id=\"key\">4</Col></Row><Row><Col id=\"key\">5</Col></Row><Row><Col id=\"key\">6</Col></Row><Row><Col id=\"key\">7</Col></Row><Row><Col id=\"key\">8</Col></Row><Row><Col id=\"key\">9</Col></Row><Row><Col id=\"key\">0</Col></Row><Row><Col id=\"key\">BACK</Col></Row><Row><Col id=\"key\">TAB</Col></Row><Row><Col id=\"key\">RETURN</Col></Row><Row><Col id=\"key\">PAUSE</Col></Row><Row><Col id=\"key\">CAPITAL</Col></Row><Row><Col id=\"key\">ESACAPE</Col></Row><Row><Col id=\"key\">SPACE</Col></Row><Row><Col id=\"key\">PRIOR</Col></Row><Row><Col id=\"key\">NEXT</Col></Row><Row><Col id=\"key\">END</Col></Row><Row><Col id=\"key\">HOME</Col></Row><Row><Col id=\"key\">LEFT</Col></Row><Row><Col id=\"key\">UP</Col></Row><Row><Col id=\"key\">RIGHT</Col></Row><Row><Col id=\"key\">DOWN</Col></Row><Row><Col id=\"key\">INSERT</Col></Row><Row><Col id=\"key\">NUMPAD0</Col></Row><Row><Col id=\"key\">NUMPAD1</Col></Row><Row><Col id=\"key\">NUMPAD2</Col></Row><Row><Col id=\"key\">NUMPAD3</Col></Row><Row><Col id=\"key\">NUMPAD4</Col></Row><Row><Col id=\"key\">NUMPAD5</Col></Row><Row><Col id=\"key\">NUMPAD6</Col></Row><Row><Col id=\"key\">NUMPAD7</Col></Row><Row><Col id=\"key\">NUMPAD8</Col></Row><Row><Col id=\"key\">NUMPAD9</Col></Row><Row><Col id=\"key\">MULTIPLY</Col></Row><Row><Col id=\"key\">ADD</Col></Row><Row><Col id=\"key\">SEPARATOR</Col></Row><Row><Col id=\"key\">SUBTRACT</Col></Row><Row><Col id=\"key\">DECIMAL</Col></Row><Row><Col id=\"key\">DIVIDE</Col></Row><Row><Col id=\"key\">F1</Col></Row><Row><Col id=\"key\">F2</Col></Row><Row><Col id=\"key\">F3</Col></Row><Row><Col id=\"key\">F4</Col></Row><Row><Col id=\"key\">F5</Col></Row><Row><Col id=\"key\">F6</Col></Row><Row><Col id=\"key\">F7</Col></Row><Row><Col id=\"key\">F8</Col></Row><Row><Col id=\"key\">F9</Col></Row><Row><Col id=\"key\">F10</Col></Row><Row><Col id=\"key\">F11</Col></Row><Row><Col id=\"key\">F12</Col></Row><Row><Col id=\"key\">NUMLOCK</Col></Row><Row><Col id=\"key\">SCROLL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copysampledata", this);
            obj._setContents("<ColumnInfo><Column id=\"ProductID\" type=\"STRING\" size=\"256\"/><Column id=\"ProductName\" type=\"STRING\" size=\"256\"/><Column id=\"UnitPrice\" type=\"STRING\" size=\"256\"/><Column id=\"Qty\" type=\"STRING\" size=\"256\"/><Column id=\"Amount\" type=\"STRING\" size=\"256\"/><Column id=\"Notes\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_Title","20","20","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"sample.hotkey\",\"Hot Key\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("sample.hotkey");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","80","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"sample.hotkey.setting\",\"Setting\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("sample.hotkey.setting");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","49","122","350","194",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"106\"/><Column size=\"24\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"#\"/><Cell col=\"1\" text=\"Description\"/><Cell col=\"2\" colspan=\"2\" text=\"Hot Key\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" expandshow=\"hide\" expandsize=\"24\" expandimage=\"url(&apos;imagerc::btn_pvGrd_panelOpen.png&apos;)\"/><Cell col=\"3\" expandimage=\"url(&apos;imagerc::btn_pvGrd_panelOpen.png&apos;)\" expandshow=\"hide\" expandsize=\"24\" cursor=\"pointer\" background=\"url(&apos;imagerc::btn_pvGrd_panelOpen.png&apos;) no-repeat center center #ffffff\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","340","860","560",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_bgLaptop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","32","17","796","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_background("#cccccc");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","60","29","615","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"sample.hotkey.dataload\",\"데이터 불러오기\")");
            obj.set_background("white");
            obj.set_padding("0px 0px 0px 15px");
            obj.getSetter("messageid").set("sample.hotkey.dataload");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Search","Static01:5","29","120","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Search");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_hotkey("F2");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"108","100","38","165",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_basic04");
            obj.set_hotkey("ALT+A");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"108","100","38","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_basic04");
            obj.set_hotkey("ALT+D");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"433","100","38","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_hotkey("F3");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","60","153",null,"270","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj._setContents("");
            this.Div00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","970","166","280","160",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_ctrl","14","30","91","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Ctrl");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new CheckBox("chk_shift","14","63","91","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("Shift");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new CheckBox("chk_alt","14","96","91","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Alt");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new ListBox("ListBox00",null,"0","138",null,"0","0",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_keylist");
            obj.set_codecolumn("key");
            obj.set_datacolumn("key");
            obj.set_itemheight("30");
            obj.set_border("0px none,0px none,0px none,1px solid #dddddd");
            obj.set_padding("5px");
            obj.set_cssclass("lst_WF_listbox");
            this.PopupDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,960,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("hotkey.xfdl", function() {
        this.setHotkeyRow;

        this.hotkey_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        //search
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_copysampledata.copyData(this.ds_sampledata);

        	this.Div00.form.Grid00.binddataset = this.ds_copysampledata;
        	this.Div00.form.Grid00.createFormat();
        	this.Div00.form.Grid00.setFormatRowProperty(0,"size",40);
        	this.Div00.form.Grid00.setFormatRowProperty(1,"size",46);

        	for(let i=0;i<this.ds_sampledata.getColCount();i++){
        		this.Div00.form.Grid00.setCellProperty("body",i,"displaytype","editcontrol");
        		this.Div00.form.Grid00.setCellProperty("body",i,"edittype","text");
        	}
        };

        //add
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_copysampledata.addRow();
        };

        //delete
        this.btn_delete_onclick = function(obj,e)
        {
        	this.ds_copysampledata.deleteRow(this.Div00.form.Grid00.getSelectedDatasetRows());
        };

        //save
        this.btn_save_onclick = function(obj,e)
        {
        	this.ds_sampledata.copyData(this.ds_copysampledata);
        	alert(nexacro.getApplication().messages["sample.hotkey.save"]);
        };

        this.Grid01_oncellclick = function(obj,e)
        {
        	this.PopupDiv00.form.ListBox00.clearSelect();
        	this.PopupDiv00.form.ListBox00.scrollTo(0,0);

        	//화살표 있는셀 클릭시
        	if(e.cell == 3){
        		switch(e.row) {
        		//search 버튼
        		case 0:
        			this.setHotkeyRow = 0;
        			this.PopupDiv00.trackPopupByComponent(obj,e.canvasx,e.canvasy,null,null,"fn_setHotkey");
        			break;

        		//save 버튼
        		case 1:
        			this.setHotkeyRow = 1;
        			this.PopupDiv00.trackPopupByComponent(obj,e.canvasx,e.canvasy,null,null,"fn_setHotkey");
        			break;

        		//add 버튼
        		case 2:
        			this.setHotkeyRow = 2;
        			this.PopupDiv00.trackPopupByComponent(obj,e.canvasx,e.canvasy,null,null,"fn_setHotkey");
        			break;

        		//delete 버튼
        		case 3:
        			this.setHotkeyRow = 3;
        			this.PopupDiv00.trackPopupByComponent(obj,e.canvasx,e.canvasy,null,null,"fn_setHotkey");
        			break;
        		default:
        		}
        	}
        };

        //hotkey 설정 pop 닫힐때 옴
        this.fn_setHotkey = function (objId,sKey)
        {
        	let shotkey = "";
        	let bIskey = false;

        	if(!this.fn_IsNull(sKey)){
        		if(this.PopupDiv00.form.chk_ctrl.isChecked()){
        			shotkey += "CTRL+";
        		}
        		if(this.PopupDiv00.form.chk_shift.isChecked()){
        			shotkey += "SHIFT+";
        		}
        		if(this.PopupDiv00.form.chk_alt.isChecked()){
        			shotkey += "ALT+";
        		}

        		shotkey += sKey;

        		for(let i=0;i<this.Dataset00.rowcount;i++){
        			if(shotkey == this.Dataset00.getColumn(i,"Column2")){
        				bIskey = true;
        				continue;
        			}
        		}

        		this.PopupDiv00.form.chk_ctrl.value = false;
        		this.PopupDiv00.form.chk_shift.value = false;
        		this.PopupDiv00.form.chk_alt.value = false;

        		if(bIskey){
        			alert(nexacro.getApplication().messages["sample.hotkey.alreadykey"]);
        			return;
        		}

        		switch(this.setHotkeyRow) {
        		case 0:
        			this.Div00.form.btn_Search.hotkey = shotkey;
        			this.Dataset00.setColumn(0,"Column2",shotkey);
        			break;
        		case 1:
        			this.Div00.form.btn_Save.hotkey = shotkey;
        			this.Dataset00.setColumn(1,"Column2",shotkey);
        			break;
        		case 2:
        			this.Div00.form.btn_Add.hotkey = shotkey;
        			this.Dataset00.setColumn(2,"Column2",shotkey);
        			break;
        		case 3:
        			this.Div00.form.btn_Delete.hotkey = shotkey;
        			this.Dataset00.setColumn(3,"Column2",shotkey);
        			break;
        		default:
        		}
        	}
        };

        //팝업의 리스트 박스 클릭
        this.PopupDiv00_ListBox00_onitemclick = function(obj,e)
        {
        	let sKey = this.ds_keylist.getColumn(e.index,"key")
        	this.PopupDiv00.closePopup(sKey);
        };

        this.fn_IsNull = function (sValue)
        {
        	if (new String(sValue).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (sValue == null)
        	{
        		return true;
        	}

        	var v_ChkStr = new String(sValue);

        	if (v_ChkStr == null)
        	{
        		return true;
        	}
        	if (v_ChkStr.toString().length == 0)
        	{
        		return true;
        	}

        	return false;
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hotkey_onload,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Div00.form.btn_Search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_Add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Div00.form.btn_Delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.Div00.form.btn_Save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.PopupDiv00.form.ListBox00.addEventHandler("onitemclick",this.PopupDiv00_ListBox00_onitemclick,this);
        };
        this.loadIncludeScript("hotkey.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
