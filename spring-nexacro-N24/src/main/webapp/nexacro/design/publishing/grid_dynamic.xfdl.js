(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("grid_dynamic");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sample", this);
            obj._setContents("<ColumnInfo><Column id=\"label\" type=\"STRING\" size=\"256\"/><Column id=\"contents1\" type=\"STRING\" size=\"256\"/><Column id=\"contents2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"contents1\"/><Col id=\"contents2\">test</Col><Col id=\"label\">label</Col></Row><Row><Col id=\"contents2\">test</Col><Col id=\"contents1\"/><Col id=\"label\">label</Col></Row><Row><Col id=\"contents2\">test</Col><Col id=\"contents1\"/><Col id=\"label\">label</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","17","16","383","168",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grd_WF_dynamic");
            obj.set_binddataset("ds_sample");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"label\"/><Cell col=\"1\" text=\"contents1\"/><Cell col=\"2\" text=\"contents2\"/></Band><Band id=\"body\"><Cell text=\"bind:label\" cssclass=\"grd_dynamicLabel\"/><Cell col=\"1\" text=\"bind:contents1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:contents2\" edittype=\"combo\" displaytype=\"combocontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","198","376","110",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ㅇ 그리드 클래스 : grd_WF_dynamic\r\nㅇ 라벨(항목)부분 cell class :  grd_dynamicLabel\r\nㅇ cell combo에서 드롭 시 나오는 리스트 높이 조정\r\n- comboitemheight : 44px");
            obj.set_background("lightcyan");
            obj.set_verticalAlign("top");
            obj.set_padding("10px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
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
        this.loadIncludeScript("grid_dynamic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
