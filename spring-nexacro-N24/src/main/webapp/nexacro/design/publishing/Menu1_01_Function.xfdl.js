(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Menu1_01_Function");
            this.set_titletext("New Form");
            this.set_background("#F5F7FC");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,1560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"checkbox\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"설정금액\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"직장\" type=\"STRING\" size=\"256\"/><Column id=\"승인\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">#101</Col><Col id=\"이름\">James</Col><Col id=\"주소\">서울특별시 중구 세종대로 40</Col><Col id=\"설정금액\">11,235</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"직장\">투비소프트</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">#102</Col><Col id=\"이름\">Bill</Col><Col id=\"주소\">경상북도 경부시 불국로 873-243</Col><Col id=\"설정금액\">15,698</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"직장\">강남구청</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">#103</Col><Col id=\"이름\">Elyse</Col><Col id=\"주소\">경기도 수원시 장안구 연무동 190</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"직장\">투비소프트</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">#104</Col><Col id=\"이름\">Jenny</Col><Col id=\"주소\">경기도 수원시 장안구 연무동 190</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"직장\">투비소프트</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"ID\">#105</Col><Col id=\"이름\">William</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">23,317</Col><Col id=\"생성일\">2020-08-03</Col><Col id=\"직장\">서울시청</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">#106</Col><Col id=\"이름\">Daniel</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-03</Col><Col id=\"직장\">투비소프트</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"ID\">#107</Col><Col id=\"이름\">Ann</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">23,317</Col><Col id=\"생성일\">2020-08-04</Col><Col id=\"직장\">서울시청</Col><Col id=\"checkbox\">1</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","40","40","920","700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_WF_area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","14","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Function");
            obj.set_cssclass("sta_WF_pageTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","25","66",null,"60","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","45","76","135","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Range of selection");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","202","76","150","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"73","46","46","35",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_inquiry");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","30","152","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Inquire List");
            obj.set_cssclass("sta_WF_compTitle02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","730","152","50","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Total");
            obj.set_cssclass("sta_WF_txt14px");
            obj.set_textAlign("right");
            obj.set_padding("0px 8px 0px 0px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","780","152","50","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_totalNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","831","152","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_add");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","865","152","30","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_delete");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","25","194","870","370",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"206\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"86\"/><Column size=\"54\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"설정금액\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"직장\"/><Cell col=\"7\" text=\"승인\"/></Band><Band id=\"body\"><Cell text=\"bind:checkbox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:주소\"/><Cell col=\"4\" text=\"bind:설정금액\" cssclass=\"grd_txtR\"/><Cell col=\"5\" text=\"bind:생성일\"/><Cell col=\"6\" text=\"bind:직장\"/><Cell col=\"7\" text=\"bind:승인\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","40","765","920","765",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_WF_area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","68","865","156",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("You can sort the data by the field values that the column references by clicking the column header in the grid.\r\nClicking the same field repeatedly converts it to an ascending/ descending/cancel state; pressing the \'Ctrl\' key and clicking\r\nthe header allows you to sort multiple columns in the order you clicked.\r\n\r\nYou can also sort through the context menu that appears when you right-click in the header area of the grid.\r\nSelecting \'Multiple Sort\' in the context menu invokes a pop-up screen, allows you to add rows by pressing the \'+\' button,\r\nselect the column name and sort order, and press the \'Apply\' button to sort.");
            obj.set_cssclass("sta_WF_txt15px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","253",null,"461","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_contentBg01");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","60","257","356","387",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_con01");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03","480","257","356","393",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_con02");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","30","120","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("Inquire List");
            obj.set_cssclass("sta_WF_compTitle02");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","1465","1","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,1560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Menu1_01_Function.xfdl", function() {

        this.Div00_00_Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00_00.form.Static00.addEventHandler("onclick",this.Div00_00_Static00_onclick,this);
        };
        this.loadIncludeScript("Menu1_01_Function.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
