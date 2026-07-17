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
                this._setFormPosition(730,47);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00_00","277","6","360","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Combo("cboNo1","120","6","144","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("36");
            var cboNo1_innerdataset = new nexacro.NormalDataset("cboNo1_innerdataset", obj);
            cboNo1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">82</Col><Col id=\"datacolumn\">Korea (82)</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">USA (1)</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">Russia (7)</Col></Row><Row><Col id=\"codecolumn\">33</Col><Col id=\"datacolumn\">France (33)</Col></Row><Row><Col id=\"codecolumn\">34</Col><Col id=\"datacolumn\">Spain (34)</Col></Row><Row><Col id=\"codecolumn\">44</Col><Col id=\"datacolumn\">Great Britain (44)</Col></Row><Row><Col id=\"codecolumn\">49</Col><Col id=\"datacolumn\">Germany (49)</Col></Row><Row><Col id=\"codecolumn\">61</Col><Col id=\"datacolumn\">Australia (61)</Col></Row><Row><Col id=\"codecolumn\">63</Col><Col id=\"datacolumn\">Philippines (63)</Col></Row><Row><Col id=\"codecolumn\">64</Col><Col id=\"datacolumn\">New Zealand (64)</Col></Row><Row><Col id=\"codecolumn\">65</Col><Col id=\"datacolumn\">Singapore (65)</Col></Row><Row><Col id=\"codecolumn\">66</Col><Col id=\"datacolumn\">Thailand (66)</Col></Row><Row><Col id=\"codecolumn\">81</Col><Col id=\"datacolumn\">Japan (81)</Col></Row><Row><Col id=\"codecolumn\">84</Col><Col id=\"datacolumn\">Vietnam (84)</Col></Row><Row><Col id=\"codecolumn\">86</Col><Col id=\"datacolumn\">China (86)</Col></Row><Row><Col id=\"codecolumn\">91</Col><Col id=\"datacolumn\">India (91)</Col></Row></Rows>");
            obj.set_innerdataset(cboNo1_innerdataset);
            obj.set_text("Korea (82)");
            obj.set_value("82");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","641","6","70","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_basic02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","8","107","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Phone Number");
            obj.set_cssclass("sta_WF_labelTxt01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",730,47,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("arrangement_phone.xfdl", function() {


        this.Button02_01_onclick = function(obj,e)
        {
        	const pForm = this.parent.parent.parent.parent;
        	pForm["deleteContact"].call(pForm, this.parent.name);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_del.addEventHandler("onclick",this.Button02_01_onclick,this);
        };
        this.loadIncludeScript("arrangement_phone.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
