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
                this._setFormPosition(440,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">20200101</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">Code1</Col><Col id=\"Column3\">1000000</Col><Col id=\"Column4\">20200101</Col><Col id=\"Column8\">5000000</Col><Col id=\"Column9\">ABCDEFG&#10;HIJKLMNOP</Col><Col id=\"Column6\">url(&apos;imagerc::img_TF_logo.png&apos;)</Col><Col id=\"Column10\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"lvl\" type=\"INT\" size=\"256\"/><Column id=\"team\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"lvl\">0</Col><Col id=\"team\">Group1</Col><Col id=\"count\">4</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"lvl\">1</Col><Col id=\"team\">Team1</Col><Col id=\"count\">3</Col></Row><Row><Col id=\"no\">3</Col><Col id=\"lvl\">1</Col><Col id=\"team\">Team2</Col><Col id=\"count\">1</Col></Row><Row><Col id=\"no\">4</Col><Col id=\"lvl\">0</Col><Col id=\"team\">Group2</Col><Col id=\"count\">4</Col></Row><Row><Col id=\"no\">5</Col><Col id=\"lvl\">1</Col><Col id=\"team\">Team3</Col><Col id=\"count\">2</Col></Row><Row><Col id=\"no\">6</Col><Col id=\"lvl\">1</Col><Col id=\"team\">Team4</Col><Col id=\"count\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"first_name\" type=\"STRING\" size=\"256\"/><Column id=\"last_name\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"date\">20200101</Col><Col id=\"first_name\">John</Col><Col id=\"last_name\">Doe</Col><Col id=\"gender\">Male</Col></Row><Row><Col id=\"date\">20200201</Col><Col id=\"first_name\">Jane</Col><Col id=\"last_name\">Roe</Col><Col id=\"gender\">Female</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset03", this);
            obj._setContents("<ColumnInfo><Column id=\"a\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"b\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"c\" type=\"STRING\" size=\"256\"/><Column id=\"d\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"a\">10000</Col><Col id=\"b\">100</Col><Col id=\"c\">Code1</Col></Row><Row><Col id=\"a\">20000</Col><Col id=\"b\">50</Col><Col id=\"c\">Code2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset04", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Code1</Col><Col id=\"data\">Code1</Col></Row><Row><Col id=\"code\">Code2</Col><Col id=\"data\">Code2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset05", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">Detail Code1</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">Detail Code2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridTreeGrouping", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data_en\" type=\"STRING\" size=\"256\"/><Column id=\"data_ko\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">collapse,all</Col><Col id=\"data_en\">Collapse</Col><Col id=\"data_ko\">접기</Col></Row><Row><Col id=\"code\">expand,all</Col><Col id=\"data_en\">Expand</Col><Col id=\"data_ko\">펼치기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset001", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">Code1</Col><Col id=\"Column3\">Code1,Code2</Col><Col id=\"Column4\">20230303</Col><Col id=\"Column8\">ABCDEFG&#10;HIJKLMNOP</Col><Col id=\"Column6\">1</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column7\">ABC</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">Code2</Col><Col id=\"Column4\">20240404</Col><Col id=\"Column3\">Code2,Code3</Col><Col id=\"Column5\">2000000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">DEF</Col><Col id=\"Column8\">ABCDEFG&#10;HIJKLMNOP</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">Code3</Col><Col id=\"Column4\">20250505</Col><Col id=\"Column3\">Code3,Code4</Col><Col id=\"Column5\">3000000</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">GHI</Col><Col id=\"Column8\">ABCDEFG&#10;HIJKLMNOP</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">Code4</Col><Col id=\"Column4\">20260606</Col><Col id=\"Column3\">Code4,Code5</Col><Col id=\"Column5\">4000000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">JKL</Col><Col id=\"Column8\">ABCDEFG&#10;HIJKLMNOP</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">0</Col><Col id=\"Column2\">Code5</Col><Col id=\"Column4\">20270707</Col><Col id=\"Column3\">Code1,Code5</Col><Col id=\"Column5\">5000000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">MNO</Col><Col id=\"Column8\">ABCDEFG&#10;HIJKLMNOP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Code1</Col><Col id=\"data\">Code1</Col></Row><Row><Col id=\"code\">Code2</Col><Col id=\"data\">Code2</Col></Row><Row><Col id=\"code\">Code3</Col><Col id=\"data\">Code3</Col></Row><Row><Col id=\"code\">Code4</Col><Col id=\"data\">Code4</Col></Row><Row><Col id=\"code\">Code5</Col><Col id=\"data\">Code5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"readonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Code1</Col><Col id=\"data\">Code1</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"code\">Code2</Col><Col id=\"data\">Code2</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"data\">Code3</Col><Col id=\"code\">Code3</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"data\">Code4</Col><Col id=\"code\">Code4</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"code\">Code5</Col><Col id=\"data\">Code5</Col><Col id=\"readonly\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","14","105","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.renderer\",\"Renderer\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("grid.renderer");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","66","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"grid.cell.display.type\",\"Cell display type\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.cell.display.type");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","Static01:5",null,"200","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("5");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_WF_celldisplay");
            obj.set_formatid("mobile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\" band=\"head\"/><Row size=\"46\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"Button\" color=\"#ffffff\"/><Cell col=\"1\" text=\"Calendar\" color=\"#ffffff\"/><Cell col=\"2\" text=\"Checkbox\" color=\"#ffffff\"/><Cell col=\"3\" text=\"Combo\" color=\"#ffffff\"/><Cell col=\"4\" text=\"Currency\" color=\"#ffffff\"/><Cell col=\"5\" text=\"Date\" color=\"#ffffff\"/><Cell col=\"6\" text=\"Decorate text\" color=\"#ffffff\"/><Cell col=\"7\" colspan=\"2\" text=\"Radio\" color=\"#ffffff\"/><Cell row=\"1\" text=\"Image\" color=\"#ffffff\"/><Cell row=\"1\" col=\"1\" text=\"Mask\" color=\"#ffffff\"/><Cell row=\"1\" col=\"2\" text=\"MaskEdit\" color=\"#ffffff\"/><Cell row=\"1\" col=\"3\" text=\"Number\" color=\"#ffffff\"/><Cell row=\"1\" col=\"4\" text=\"Progressbar\" color=\"#ffffff\"/><Cell row=\"1\" col=\"5\" text=\"Text\" color=\"#ffffff\"/><Cell row=\"1\" col=\"6\" text=\"Textarea\" color=\"#ffffff\"/><Cell row=\"1\" col=\"7\" text=\"Edit\" color=\"#ffffff\"/><Cell row=\"1\" col=\"8\" text=\"None\" color=\"#ffffff\"/></Band><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" text=\"Button\" edittype=\"button\"/><Cell col=\"1\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Column0\" calendardateformat=\"yyyy-MM-dd\" font=\"normal 14px/normal &quot;Noto Sans KR Regular&quot;,&quot;맑은 고딕&quot;\" calendarbuttonsize=\"23\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column1\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column2\" combodataset=\"Dataset04\" combocodecol=\"code\" combodatacol=\"data\" comboitemheight=\"35\"/><Cell col=\"4\" displaytype=\"currency\" text=\"bind:Column3\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:Column4\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" displaytype=\"decoratetext\" text=\"&lt;fc v=&apos;red&apos;&gt;decorate&lt;/fc&gt; &lt;u v=&apos;true&apos;&gt;text&lt;/u&gt;\"/><Cell col=\"7\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:Column10\" radioitemcodevalue=\"0\" border=\"1px solid #e2e2e3,1px none #e2e2e3,1px solid #e2e2e3,1px solid #e2e2e3\"/><Cell col=\"8\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:Column10\" radioitemcodevalue=\"1\" border=\"1px solid #e2e2e3,1px solid #e2e2e3,1px solid #e2e2e3,1px none #e2e2e3\"/><Cell row=\"1\" displaytype=\"imagecontrol\" text=\"bind:Column6\" imagestretch=\"fixaspectratio\"/><Cell row=\"1\" col=\"1\" displaytype=\"mask\" text=\"1234567890\" maskedittype=\"string\" maskeditformat=\"#####{#####}\"/><Cell row=\"1\" col=\"2\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:Column8\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" text=\"9876543.21\"/><Cell row=\"1\" col=\"4\" displaytype=\"progressbarcontrol\" text=\"65\" progressbarsmooth=\"true\" padding=\"5px\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"Text\"/><Cell row=\"1\" col=\"6\" displaytype=\"textareacontrol\" edittype=\"textarea\" wordWrap=\"char\" text=\"bind:Column9\"/><Cell row=\"1\" col=\"7\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Column5\" radioitemcodevalue=\"0\"/><Cell row=\"1\" col=\"8\" displaytype=\"normal\" edittype=\"none\" radioitemcodevalue=\"1\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"160\"/><Column size=\"180\"/></Columns><Rows><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"Button\" cssclass=\"grd_celldsiplay\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"button\" padding=\"5px 10px\"/><Cell row=\"1\" text=\"Calendar\" cssclass=\"grd_celldsiplay\"/><Cell row=\"1\" col=\"1\" text=\"bind:Column0\" displaytype=\"calendarcontrol\" edittype=\"date\" textAlign=\"left\"/><Cell row=\"2\" text=\"Checkbox\" cssclass=\"grd_celldsiplay\"/><Cell row=\"2\" col=\"1\" text=\"bind:Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"3\" text=\"Combo\" cssclass=\"grd_celldsiplay\"/><Cell row=\"3\" col=\"1\" text=\"bind:Column2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"Dataset04\" combocodecol=\"code\" combodatacol=\"data\" comboitemheight=\"36\"/><Cell row=\"4\" cssclass=\"grd_celldsiplay\" text=\"Currency\"/><Cell row=\"4\" col=\"1\" text=\"bind:Column3\" displaytype=\"currency\"/><Cell row=\"5\" cssclass=\"grd_celldsiplay\" text=\"Date\"/><Cell row=\"5\" col=\"1\" displaytype=\"date\" text=\"bind:Column4\"/><Cell row=\"6\" cssclass=\"grd_celldsiplay\" text=\"Decorate text\"/><Cell row=\"6\" col=\"1\" text=\"&lt;fc v=&apos;red&apos;&gt;decorate&lt;/fc&gt; &lt;u v=&apos;true&apos;&gt;text&lt;/u&gt;\" displaytype=\"decoratetext\"/><Cell row=\"7\" cssclass=\"grd_celldsiplay\" text=\"Edit\"/><Cell row=\"7\" col=\"1\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Column5\"/><Cell row=\"8\" text=\"Image\" cssclass=\"grd_celldsiplay\"/><Cell row=\"8\" col=\"1\" displaytype=\"imagecontrol\" text=\"bind:Column6\"/><Cell row=\"9\" text=\"Mask\" cssclass=\"grd_celldsiplay\"/><Cell row=\"9\" col=\"1\" displaytype=\"mask\" text=\"1234567890\" maskedittype=\"string\" maskeditformat=\"#####{#####}\"/><Cell row=\"10\" text=\"MaskEdit\" cssclass=\"grd_celldsiplay\"/><Cell row=\"10\" col=\"1\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:Column8\"/><Cell row=\"11\" text=\"Number\" cssclass=\"grd_celldsiplay\"/><Cell row=\"11\" col=\"1\" displaytype=\"number\" text=\"9876543.21\"/><Cell row=\"12\" text=\"Progressbar\" cssclass=\"grd_celldsiplay\"/><Cell row=\"12\" col=\"1\" displaytype=\"progressbarcontrol\" text=\"65\"/><Cell row=\"13\" text=\"Text\" cssclass=\"grd_celldsiplay\"/><Cell row=\"13\" col=\"1\" displaytype=\"text\" text=\"Text\"/><Cell row=\"14\" text=\"Textarea\" cssclass=\"grd_celldsiplay\"/><Cell row=\"14\" col=\"1\" displaytype=\"textareacontrol\" edittype=\"textarea\" text=\"bind:Column9\"/><Cell row=\"15\" rowspan=\"2\" text=\"Radio\" cssclass=\"grd_celldsiplay\"/><Cell row=\"15\" col=\"1\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:Column10\" radioitemcodevalue=\"0\" border=\"1px solid #e2e2e3,1px solid #e2e2e3,1px none #e2e2e3\"/><Cell row=\"16\" col=\"1\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:Column10\" radioitemcodevalue=\"1\" border=\"1px none #e2e2e3,1px solid #e2e2e3,1px solid #e2e2e3\"/><Cell row=\"17\" text=\"None\" cssclass=\"grd_celldsiplay\"/><Cell row=\"17\" col=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","321","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"grid.tree.grouping\",\"Tree grouping\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.tree.grouping");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","20.00","Static02:5",null,"228","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("5");
            obj.set_binddataset("Dataset01");
            obj.set_selecttype("cell");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"200\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"#\"/><Cell col=\"1\" text=\"Department\"/><Cell col=\"2\" text=\"Count\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\" text=\"bind:team\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lvl\"/><Cell col=\"2\" text=\"bind:count\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20.00","603","117","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"grid.multi.format\",\"Multi format\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.multi.format");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","Static03:20.00","602","225","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">format1</Col><Col id=\"datacolumn\">Format 1</Col></Row><Row><Col id=\"codecolumn\">format2</Col><Col id=\"datacolumn\">Format 2</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("Format 1");
            obj.set_value("format1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","20.00","Static03:5",null,"139","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("5");
            obj.set_binddataset("Dataset02");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_scrollbartype("none");
            obj.set_formatid("format1");
            obj._setContents("<Formats><Format id=\"format1\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"#\"/><Cell col=\"1\" text=\"Date\"/><Cell col=\"2\" text=\"Name\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:date\" displaytype=\"date\"/><Cell col=\"2\" text=\"expr:first_name+&apos; &apos;+last_name\"/></Band></Format><Format id=\"format2\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"#\"/><Cell col=\"1\" text=\"Date\"/><Cell col=\"2\" text=\"First Name\"/><Cell col=\"3\" text=\"Last Name\"/><Cell col=\"4\" text=\"Gender\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:date\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:first_name\"/><Cell col=\"3\" text=\"bind:last_name\"/><Cell col=\"4\" text=\"bind:gender\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20.00","797","102","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TEXT(\"grid.expression\",\"Expression\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.expression");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","20.00","Static04:5",null,"139","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("5");
            obj.set_binddataset("Dataset03");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_scrollbartype("none");
            obj.set_formatid("format1");
            obj.set_selecttype("cell");
            obj.set_autoupdatetype("comboselect");
            obj._setContents("<Formats><Format id=\"format1\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"A+B\"/><Cell col=\"3\" text=\"A*B\"/></Band><Band id=\"body\"><Cell text=\"bind:a\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"1\" text=\"bind:b\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"2\" expr=\"a+b\" displaytype=\"number\"/><Cell col=\"3\" expr=\"a*b\" displaytype=\"number\"/></Band></Format><Format id=\"format2\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"234\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"A+B\"/><Cell col=\"3\" text=\"A*B\"/><Cell col=\"4\" text=\"C\"/><Cell col=\"5\" text=\"C==&apos;Code1&apos;?&apos;text&apos;:&apos;combo&apos;\"/></Band><Band id=\"body\"><Cell text=\"bind:a\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"1\" text=\"bind:b\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"2\" expr=\"a+b\" displaytype=\"number\"/><Cell col=\"3\" expr=\"a*b\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:c\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"Dataset04\" combocodecol=\"code\" combodatacol=\"data\" comboitemheight=\"35\"/><Cell col=\"5\" displaytype=\"expr:c==&apos;Code1&apos;?&apos;editcontrol&apos;:&apos;combocontrol&apos;\" edittype=\"expr:c==&apos;Code1&apos;?&apos;text&apos;:&apos;combo&apos;\" combodataset=\"Dataset05\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:d\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTreeStatus","Static02:20.00","320","225","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsGridTreeGrouping");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data_en");
            obj.set_text("Expand");
            obj.set_value("expand,all");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","470.00","325","203","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("TEXT(\"grid.cell.head.display.type\",\"Head Cell control type\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("grid.cell.head.display.type");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid001","463.00","Static01_00:5",null,"250","-423",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autofittype("none");
            obj.set_scrollbarsize("5");
            obj.set_binddataset("Dataset001");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_WF_celldisplay");
            obj.set_formatid("mobile");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"136\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"Button\" color=\"#ffffff\"/><Cell col=\"1\" text=\"CheckBox\" color=\"#ffffff\"/><Cell col=\"2\" text=\"Combo\" color=\"#ffffff\"/><Cell col=\"3\" text=\"MultiCombo\" color=\"#ffffff\"/><Cell col=\"4\" text=\"Calendar\" color=\"#ffffff\"/><Cell col=\"5\" text=\"Radio\" color=\"#ffffff\"/><Cell col=\"6\" text=\"Mask\" color=\"#ffffff\"/><Cell col=\"7\" text=\"Edit\" color=\"#ffffff\"/><Cell col=\"8\" text=\"TextArea\" color=\"#ffffff\"/><Cell row=\"1\" text=\"Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell row=\"1\" col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"data\" multicomboitemheight=\"35\" comboitemheight=\"35\" text=\"Code1\"/><Cell row=\"1\" col=\"3\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"dsMCombo\" multicombodatacol=\"data\" multicombocodecol=\"code\" multicombobuttonsize=\"35\" multicomboitemheight=\"35\" comboitemheight=\"35\" text=\"Code1,Code2\"/><Cell row=\"1\" col=\"4\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"20231107\"/><Cell row=\"1\" col=\"5\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"1\" radioitemcodevalue=\"1\"/><Cell row=\"1\" col=\"6\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,#.##\" text=\"1234567\"/><Cell row=\"1\" col=\"7\" displaytype=\"editcontrol\" edittype=\"text\" text=\"ABCDEF\"/><Cell row=\"1\" col=\"8\" displaytype=\"textareacontrol\" edittype=\"textarea\" textareascrolltype=\"vertical\" wordWrap=\"char\" text=\"ABCDEFGHI\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column1\" calendardateformat=\"yyyy-MM-dd\" font=\"normal 14px/normal &quot;Noto Sans KR Regular&quot;,&quot;맑은 고딕&quot;\" calendarbuttonsize=\"23\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column2\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"data\" multicomboitemheight=\"35\" comboitemheight=\"35\"/><Cell col=\"3\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" text=\"bind:Column3\" multicombodataset=\"dsMCombo\" multicombocodecol=\"code\" multicombodatacol=\"data\" multicombobuttonsize=\"35\" multicomboitemheight=\"35\" comboitemheight=\"35\"/><Cell col=\"4\" displaytype=\"calendarcontrol\" text=\"bind:Column4\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\"/><Cell col=\"5\" displaytype=\"radioitemcontrol\" text=\"bind:Column6\" edittype=\"radioitem\" radioitemcodevalue=\"1\"/><Cell col=\"6\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:Column5\" maskeditformat=\"#,#.##\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:Column7\" radioitemcodevalue=\"0\" displaytype=\"text\"/><Cell col=\"8\" radioitemcodevalue=\"1\" border=\"\\\" text=\"bind:Column8\" displaytype=\"text\" wordWrap=\"char\" textareascrolltype=\"vertical\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"Button\" color=\"#ffffff\"/><Cell col=\"1\" text=\"CheckBox\" color=\"#ffffff\"/><Cell col=\"2\" text=\"Combo\" color=\"#ffffff\"/><Cell col=\"3\" text=\"MultiCombo\" color=\"#ffffff\"/><Cell col=\"4\" text=\"Calendar\" color=\"#ffffff\"/><Cell col=\"5\" text=\"Radio\" color=\"#ffffff\"/><Cell col=\"6\" text=\"Mask\" color=\"#ffffff\"/><Cell col=\"7\" text=\"Edit\" color=\"#ffffff\"/><Cell col=\"8\" text=\"TextArea\" color=\"#ffffff\"/><Cell row=\"1\" text=\"Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell row=\"1\" col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"data\" comboitemheight=\"35\" text=\"Code1\"/><Cell row=\"1\" col=\"3\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"dsMCombo\" multicombocodecol=\"code\" multicombodatacol=\"data\" multicomboitemheight=\"35\" text=\"Code1,Code2\"/><Cell row=\"1\" col=\"4\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"20231107\"/><Cell row=\"1\" col=\"5\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"1\" text=\"1\"/><Cell row=\"1\" col=\"6\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,#.##\" text=\"1234567\"/><Cell row=\"1\" col=\"7\" displaytype=\"editcontrol\" edittype=\"text\" text=\"ABCDEF\"/><Cell row=\"1\" col=\"8\" displaytype=\"textareacontrol\" edittype=\"textarea\" textareascrolltype=\"vertical\" wordWrap=\"char\" text=\"ABCDEFGHIJ\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column1\" calendardateformat=\"yyyy-MM-dd\" calendarbuttonsize=\"23\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column2\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"data\" comboitemheight=\"35\"/><Cell col=\"3\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" text=\"bind:Column3\" multicombodataset=\"dsMCombo\" multicombodatacol=\"data\" multicombocodecol=\"code\" multicomboitemheight=\"35\"/><Cell col=\"4\" displaytype=\"calendarcontrol\" text=\"bind:Column4\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\"/><Cell col=\"5\" displaytype=\"radioitemcontrol\" text=\"bind:Column6\" edittype=\"radioitem\" radioitemcodevalue=\"1\"/><Cell col=\"6\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:Column5\" maskeditformat=\"#,#.##\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:Column7\" radioitemcodevalue=\"0\" displaytype=\"text\"/><Cell col=\"8\" radioitemcodevalue=\"1\" border=\"\\\" text=\"bind:Column8\" displaytype=\"text\" wordWrap=\"char\" textareascrolltype=\"vertical\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",440,1000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("TEXT(\"grid.renderer\",\"Renderer\")");
                p.Static00.set_cssclass("sta_WF_pageTitle");
                p.Static00.getSetter("messageid").set("grid.renderer");
                p.Static00.set_fittocontents("width");
                p.Static00.move("20","14","105","40",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("TEXT(\"grid.cell.display.type\",\"Cell display type\")");
                p.Static01.set_cssclass("sta_WF_compTitle02");
                p.Static01.getSetter("messageid").set("grid.cell.display.type");
                p.Static01.set_fittocontents("width");
                p.Static01.move("20","66","146","30",null,null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_scrollbarsize("5");
                p.Grid00.set_binddataset("Dataset00");
                p.Grid00.set_selecttype("cell");
                p.Grid00.set_cssclass("grd_WF_celldisplay");
                p.Grid00.set_formatid("mobile");
                p.Grid00.move("20","Static01:5",null,"200","20",null);

                p.Static02.set_taborder("3");
                p.Static02.set_text("TEXT(\"grid.tree.grouping\",\"Tree grouping\")");
                p.Static02.set_cssclass("sta_WF_compTitle02");
                p.Static02.getSetter("messageid").set("grid.tree.grouping");
                p.Static02.set_fittocontents("width");
                p.Static02.move("20.00","321","130","30",null,null);

                p.Grid01.set_taborder("4");
                p.Grid01.set_autofittype("col");
                p.Grid01.set_scrollbarsize("5");
                p.Grid01.set_binddataset("Dataset01");
                p.Grid01.set_selecttype("cell");
                p.Grid01.set_treeusecheckbox("false");
                p.Grid01.set_treeinitstatus("expand,all");
                p.Grid01.set_treeuseimage("false");
                p.Grid01.move("20.00","Static02:5",null,"228","20",null);

                p.Static03.set_taborder("5");
                p.Static03.set_text("TEXT(\"grid.multi.format\",\"Multi format\")");
                p.Static03.set_cssclass("sta_WF_compTitle02");
                p.Static03.getSetter("messageid").set("grid.multi.format");
                p.Static03.set_fittocontents("width");
                p.Static03.move("20.00","603","117","30",null,null);

                p.Radio00.set_taborder("6");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_innerdataset(Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_value("format1");
                p.Radio00.set_index("0");
                p.Radio00.move("Static03:20.00","602","225","30",null,null);

                p.Grid02.set_taborder("7");
                p.Grid02.set_autofittype("col");
                p.Grid02.set_scrollbarsize("5");
                p.Grid02.set_binddataset("Dataset02");
                p.Grid02.set_treeusecheckbox("false");
                p.Grid02.set_treeinitstatus("expand,all");
                p.Grid02.set_treeuseimage("false");
                p.Grid02.set_scrollbartype("none");
                p.Grid02.set_formatid("format1");
                p.Grid02.move("20.00","Static03:5",null,"139","20",null);

                p.Static04.set_taborder("8");
                p.Static04.set_text("TEXT(\"grid.expression\",\"Expression\")");
                p.Static04.set_cssclass("sta_WF_compTitle02");
                p.Static04.getSetter("messageid").set("grid.expression");
                p.Static04.set_fittocontents("width");
                p.Static04.move("20.00","797","102","30",null,null);

                p.Grid03.set_taborder("9");
                p.Grid03.set_autofittype("col");
                p.Grid03.set_scrollbarsize("5");
                p.Grid03.set_binddataset("Dataset03");
                p.Grid03.set_treeusecheckbox("false");
                p.Grid03.set_treeinitstatus("expand,all");
                p.Grid03.set_treeuseimage("false");
                p.Grid03.set_scrollbartype("none");
                p.Grid03.set_formatid("format1");
                p.Grid03.set_selecttype("cell");
                p.Grid03.set_autoupdatetype("comboselect");
                p.Grid03.move("20.00","Static04:5",null,"139","20",null);

                p.rdoTreeStatus.set_taborder("10");
                p.rdoTreeStatus.set_direction("vertical");
                p.rdoTreeStatus.set_innerdataset("dsGridTreeGrouping");
                p.rdoTreeStatus.set_codecolumn("code");
                p.rdoTreeStatus.set_datacolumn("data_en");
                p.rdoTreeStatus.set_value("expand,all");
                p.rdoTreeStatus.set_index("1");
                p.rdoTreeStatus.move("Static02:20.00","320","225","30",null,null);

                p.Static01_00.set_taborder("11");
                p.Static01_00.set_text("TEXT(\"grid.cell.head.display.type\",\"Head Cell control type\")");
                p.Static01_00.set_cssclass("sta_WF_compTitle02");
                p.Static01_00.getSetter("messageid").set("grid.cell.head.display.type");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.set_visible("false");
                p.Static01_00.move("470.00","325","203","30",null,null);

                p.Grid001.set_taborder("12");
                p.Grid001.set_autofittype("none");
                p.Grid001.set_scrollbarsize("5");
                p.Grid001.set_binddataset("Dataset001");
                p.Grid001.set_selecttype("cell");
                p.Grid001.set_cssclass("grd_WF_celldisplay");
                p.Grid001.set_formatid("mobile");
                p.Grid001.set_visible("false");
                p.Grid001.move("463.00","Static01_00:5",null,"250","-423",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",920,1270,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid03.set_formatid("format2");
                p.Grid03.move("25","Static04:10",null,"139","25",null);

                p.Grid02.move("25.00","Static03:10",null,"139","25",null);

                p.Static04.move("25.00","1065","345","30",null,null);

                p.Grid01.move("25.00","Static02:10",null,"228","25",null);

                p.Static03.move("30.00","867","120","30",null,null);

                p.Grid00.set_formatid("default");
                p.Grid00.set_autoenter("select");
                p.Grid00.move("25","Static01:10",null,"186","25",null);

                p.Static02.move("30.00","579","424","30",null,null);

                p.Radio00.move("Static03:20.00","867","225","30",null,null);

                p.Static00.move("20","20","105","40",null,null);

                p.Static01.move("20","Static00:12","440","30",null,null);

                p.rdoTreeStatus.move("Static02:20.00","580","225","30",null,null);

                p.Grid001.set_autofittype("col");
                p.Grid001.set_visible("true");
                p.Grid001.set_formatid("default");
                p.Grid001.set_autoenter("select");
                p.Grid001.move("25","Static01_00:10",null,"200","25",null);

                p.Static01_00.set_visible("true");
                p.Static01_00.move("20.00","318","203","30",null,null);
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
        this.registerScript("renderer.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	if(nexacro.getApplication().langCode == "ko") this.rdoTreeStatus.datacolumn = "data_ko";
        	else if(nexacro.getApplication().langCode == "en") this.rdoTreeStatus.datacolumn = "data_en";

        	this.gfnFormOnLoad();
        };

        this.Div00_Radio00_onitemchanged = function(obj,e)
        {
        	this.Grid02.formatid = e.postvalue;
        };

        this.rdoTreeStatus_onitemchanged = function(obj,e)
        {
        	this.Grid01.treeinitstatus = e.postvalue;
        };

        //그리드 헤드 컨트롤 값 변경 시
        this.Grid001_onheadvaluechanged = function(obj,e)
        {
        	if (e.cell == 10) //CheckBox
        	{
        		let nBCell = e.cell - 9;
        		let oDs = obj.getBindDataset();
        		let colID = obj.getCellProperty("body", nBCell,"text").replace(/bind:/i,"");
        		this.isCheckAll = (this.isCheckAll ?0:1);

        		for (let i=0; i<oDs.getRowCount(); ++i) {
        			oDs.setColumn(i, colID, this.isCheckAll);
        		}

        		obj.setCellProperty("Head", 10, "text", this.isCheckAll);
        	}
        	else if (e.cell == 11 || e.cell == 12 || e.cell == 13) //Combo, MultiCombo, Calendar
        	{
        		let nBCell = e.cell - 9;
        		let oDs = obj.getBindDataset();
        		let colID = obj.getCellProperty("body", nBCell,"text").replace(/bind:/i,"");
        		let sVal = e.newvalue;

        		for (let i=0; i<oDs.getRowCount(); ++i) {
        			oDs.setColumn(i, colID, sVal);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Radio00.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.rdoTreeStatus.addEventHandler("onitemchanged",this.rdoTreeStatus_onitemchanged,this);
            this.Grid001.addEventHandler("onheadvaluechanged",this.Grid001_onheadvaluechanged,this);
        };
        this.loadIncludeScript("renderer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
