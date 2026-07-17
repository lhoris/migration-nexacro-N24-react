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
                this._setFormPosition(440,2940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","20","19","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"grid.cell.display.type\",\"Cell display type\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.cell.display.type");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","Static00_00:10",null,"340","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.cell.display.type.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.cell.display.type.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","Static00:10",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("url(\'imagerc::Desc/img_WF_gridMN02_1.png\') no-repeat center center /contain");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","Static02:20","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"grid.tree.grouping\",\"Tree grouping\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.tree.grouping");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00_00_00:10",null,"220","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"grid.tree.grouping.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.tree.grouping.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","Static01:10",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'imagerc::Desc/img_WF_gridMN02_2.png\') no-repeat center center /contain");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","Static02_00:20","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"grid.multi.format\",\"Multi format\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.multi.format");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","Static00_00_00_00:10",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.multi.format.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.multi.format.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","Static01_00:10",null,"120","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TEXT(\"grid.multi.format.editor.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.multi.format.editor.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","Static01_00_00:10",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("url(\'imagerc::Desc/img_WF_gridMN02_3a.png\') no-repeat center center /contain");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","20","Static02_00_00:0",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("url(\'imagerc::Desc/img_WF_gridMN02_3b.png\') no-repeat center center /contain");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","20","Static02_00_00_00:20","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("TEXT(\"grid.expression\",\"Expression\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.expression");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","20","Static00_00_00_00_00:10",null,"240","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TEXT(\"grid.expression.desc\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("grid.expression.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","20","Static01_00_01:10",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("url(\'imagerc::Desc/img_WF_gridMN02_4a.png\') no-repeat center center /contain");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00","20","Static02_00_00_01:0",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("url(\'imagerc::Desc/img_WF_gridMN02_4b.png\') no-repeat center center /contain");
            obj.set_text("");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_01","20","Static02_00_00_01_00:0",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("url(\'imagerc::Desc/img_WF_gridMN02_4c.png\') no-repeat center center /contain");
            obj.set_text("");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,2940,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_00.set_taborder("3");
                p.Static00_00.set_text("TEXT(\"grid.cell.display.type\",\"Cell display type\")");
                p.Static00_00.set_cssclass("sta_WF_compTitle02");
                p.Static00_00.getSetter("messageid").set("grid.cell.display.type");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("20","19","150","30",null,null);

                p.Static00.set_taborder("0");
                p.Static00.set_text("TEXT(\"grid.cell.display.type.desc\")");
                p.Static00.set_cssclass("sta_WF_txt15px");
                p.Static00.set_wordWrap("english");
                p.Static00.set_fittocontents("height");
                p.Static00.getSetter("messageid").set("grid.cell.display.type.desc");
                p.Static00.move("20","Static00_00:10",null,"340","20",null);

                p.Static02.set_taborder("9");
                p.Static02.set_background("url(\'imagerc::Desc/img_WF_gridMN02_1.png\') no-repeat center center /contain");
                p.Static02.set_fittocontents("none");
                p.Static02.move("20","Static00:10",null,"260","20",null);

                p.Static00_00_00.set_taborder("1");
                p.Static00_00_00.set_text("TEXT(\"grid.tree.grouping\",\"Tree grouping\")");
                p.Static00_00_00.set_cssclass("sta_WF_compTitle02");
                p.Static00_00_00.getSetter("messageid").set("grid.tree.grouping");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("20","Static02:20","129","30",null,null);

                p.Static01.set_taborder("2");
                p.Static01.set_text("TEXT(\"grid.tree.grouping.desc\")");
                p.Static01.set_cssclass("sta_WF_txt15px");
                p.Static01.set_wordWrap("english");
                p.Static01.set_fittocontents("height");
                p.Static01.getSetter("messageid").set("grid.tree.grouping.desc");
                p.Static01.move("20","Static00_00_00:10",null,"220","20",null);

                p.Static02_00.set_taborder("10");
                p.Static02_00.set_background("url(\'imagerc::Desc/img_WF_gridMN02_2.png\') no-repeat center center /contain");
                p.Static02_00.set_fittocontents("none");
                p.Static02_00.move("20","Static01:10",null,"260","20",null);

                p.Static00_00_00_00.set_taborder("4");
                p.Static00_00_00_00.set_text("TEXT(\"grid.multi.format\",\"Multi format\")");
                p.Static00_00_00_00.set_cssclass("sta_WF_compTitle02");
                p.Static00_00_00_00.getSetter("messageid").set("grid.multi.format");
                p.Static00_00_00_00.set_fittocontents("width");
                p.Static00_00_00_00.move("20","Static02_00:20","129","30",null,null);

                p.Static01_00.set_taborder("5");
                p.Static01_00.set_text("TEXT(\"grid.multi.format.desc\")");
                p.Static01_00.set_cssclass("sta_WF_txt15px");
                p.Static01_00.set_wordWrap("english");
                p.Static01_00.set_fittocontents("height");
                p.Static01_00.getSetter("messageid").set("grid.multi.format.desc");
                p.Static01_00.move("20","Static00_00_00_00:10",null,"80","20",null);

                p.Static01_00_00.set_taborder("6");
                p.Static01_00_00.set_text("TEXT(\"grid.multi.format.editor.desc\")");
                p.Static01_00_00.set_cssclass("sta_WF_txt15px");
                p.Static01_00_00.set_wordWrap("english");
                p.Static01_00_00.set_fittocontents("height");
                p.Static01_00_00.getSetter("messageid").set("grid.multi.format.editor.desc");
                p.Static01_00_00.move("20","Static01_00:10",null,"120","20",null);

                p.Static02_00_00.set_taborder("11");
                p.Static02_00_00.set_background("url(\'imagerc::Desc/img_WF_gridMN02_3a.png\') no-repeat center center /contain");
                p.Static02_00_00.set_fittocontents("none");
                p.Static02_00_00.move("20","Static01_00_00:10",null,"260","20",null);

                p.Static02_00_00_00.set_taborder("12");
                p.Static02_00_00_00.set_background("url(\'imagerc::Desc/img_WF_gridMN02_3b.png\') no-repeat center center /contain");
                p.Static02_00_00_00.set_fittocontents("none");
                p.Static02_00_00_00.move("20","Static02_00_00:0",null,"100","20",null);

                p.Static00_00_00_00_00.set_taborder("7");
                p.Static00_00_00_00_00.set_text("TEXT(\"grid.expression\",\"Expression\")");
                p.Static00_00_00_00_00.set_cssclass("sta_WF_compTitle02");
                p.Static00_00_00_00_00.getSetter("messageid").set("grid.expression");
                p.Static00_00_00_00_00.set_fittocontents("width");
                p.Static00_00_00_00_00.move("20","Static02_00_00_00:20","129","30",null,null);

                p.Static01_00_01.set_taborder("8");
                p.Static01_00_01.set_text("TEXT(\"grid.expression.desc\")");
                p.Static01_00_01.set_cssclass("sta_WF_txt15px");
                p.Static01_00_01.set_wordWrap("english");
                p.Static01_00_01.set_fittocontents("height");
                p.Static01_00_01.getSetter("messageid").set("grid.expression.desc");
                p.Static01_00_01.move("20","Static00_00_00_00_00:10",null,"240","20",null);

                p.Static02_00_00_01.set_taborder("13");
                p.Static02_00_00_01.set_background("url(\'imagerc::Desc/img_WF_gridMN02_4a.png\') no-repeat center center /contain");
                p.Static02_00_00_01.set_fittocontents("none");
                p.Static02_00_00_01.move("20","Static01_00_01:10",null,"260","20",null);

                p.Static02_00_00_01_00.set_taborder("14");
                p.Static02_00_00_01_00.set_background("url(\'imagerc::Desc/img_WF_gridMN02_4b.png\') no-repeat center center /contain");
                p.Static02_00_00_01_00.set_text("");
                p.Static02_00_00_01_00.set_fittocontents("none");
                p.Static02_00_00_01_00.move("20","Static02_00_00_01:0",null,"260","20",null);

                p.Static02_00_00_01_01.set_taborder("15");
                p.Static02_00_00_01_01.set_background("url(\'imagerc::Desc/img_WF_gridMN02_4c.png\') no-repeat center center /contain");
                p.Static02_00_00_01_01.set_text("");
                p.Static02_00_00_01_01.set_fittocontents("none");
                p.Static02_00_00_01_01.move("20","Static02_00_00_01_00:0",null,"260","20",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","",920,2650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_text("A cell is one of the objects that make up the grid and has a separate property from the grid. You can bind columns in Dataset and use them, or you can set the displaytype and edittype properties of the cell to express them in components such as Button, Combo, CheckBox, Image, ProgressBar, Edit, or Tree.\r\n\r\nDepending on the \'displaytype\' property setting for each cell of the grid component, various expressions such as buttons and images are possible.\r\n\'displaytype\' is a property that sets the format in which the bounded data is displayed on the screen when the cell is not in editing, providing 19 default formats and, if not set separately, is automatically displayed for the bound data type.");
                p.Static00.move("20","Static00_00:10",null,"340","20",null);

                p.Static00_00_00.move("20","Static02:30","129","30",null,null);

                p.Static01.move("20","Static00_00_00:10",null,"220","20",null);

                p.Static00_00_00_00.move("20","Static02_00:20","200","30",null,null);

                p.Static01_00.move("20","Static00_00_00_00:10",null,"80","20",null);

                p.Static01_00_00.move("20","Static01_00:10",null,"120","20",null);

                p.Static00_00_00_00_00.move("20","Static02_00_00_00:20","129","30",null,null);

                p.Static01_00_01.move("20","Static00_00_00_00_00:10",null,"240","20",null);

                p.Static02.set_background("url(\'imagerc::Desc/img_WF_gridMN02_1.png\') no-repeat center center /contain");
                p.Static02.move("10","Static00:20",null,"350","30",null);

                p.Static02_00.set_text("");
                p.Static02_00.set_background("url(\'imagerc::Desc/img_WF_gridMN02_2.png\') no-repeat center center /contain");
                p.Static02_00.move("20","Static01:10",null,"350","20",null);

                p.Static02_00_00.move("20","Static01_00_00:10",null,"350","20",null);

                p.Static02_00_00_01_01.set_text("");
                p.Static02_00_00_01_01.move("20","Static02_00_00_01_00:50",null,"212","20",null);

                p.Static02_00_00_01_00.move("20","Static02_00_00_01:20",null,"225","20",null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("renderer_desc.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("renderer_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
