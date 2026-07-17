(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("arrangement_phone");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(730,125);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00_00","120","16","518","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","641","16","70","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","18","107","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","65","107","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Relationship");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","120","62","243","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("Choose Realationship");
            obj.set_itemheight("36");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Mother</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Father</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Daughter</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">Son</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">Sister</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">Brother</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">Aunt</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">Uncle</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">Nidce</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">Nephew</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">Cousin (female)</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">Cousin (Male)</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">Grandmother</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">Grandfather</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">Granddaughter</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">Grandson</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","120","710","1",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static00");
            obj.set_border("0px none,0px none,1px dashed #a598ef");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",730,125,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("arrangement_familly.xfdl", function() {


        this.Button02_01_onclick = function(obj,e)
        {
        	const pForm = this.parent.parent.parent.parent;
        	pForm["deleteFamilly"].call(pForm, this.parent.name);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_del.addEventHandler("onclick",this.Button02_01_onclick,this);
        };
        this.loadIncludeScript("arrangement_familly.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
