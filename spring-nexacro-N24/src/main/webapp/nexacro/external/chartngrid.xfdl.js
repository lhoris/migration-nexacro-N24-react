(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chartngrid");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"20\"/><Column id=\"Profit\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Cost\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Revenue\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Profit\">900</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Profit\">1500</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Profit\">1900</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Profit\">1800</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Profit\">2500</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Profit\">3000</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Profit\">2100</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Profit\">1700</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","14","135","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"external.chartngrid\",\"Chart & Grid\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("external.chartngrid");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","66",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","40","76","69","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"external.chartngrid.charttype\",\"Chart Type\")");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("external.chartngrid.charttype");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbType","Static02:20","76","220","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmbType_innerdataset = new nexacro.NormalDataset("cmbType_innerdataset", obj);
            cmbType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Column</Col><Col id=\"datacolumn\">Column</Col></Row><Row><Col id=\"codecolumn\">Line</Col><Col id=\"datacolumn\">Line</Col></Row><Row><Col id=\"codecolumn\">Combination</Col><Col id=\"datacolumn\">Combination</Col></Row></Rows>");
            obj.set_innerdataset(cmbType_innerdataset);
            obj.set_text("tobesoft.pdf");
            obj.set_value("tobesoft.pdf");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","460",null,"280","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"Month\"/><Cell col=\"1\" text=\"Profit\"/><Cell col=\"2\" text=\"Cost\"/><Cell col=\"3\" text=\"Revenue\"/></Band><Band id=\"body\"><Cell text=\"bind:Month\"/><Cell col=\"1\" text=\"bind:Profit\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"2\" text=\"bind:Cost\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"3\" text=\"bind:Revenue\" edittype=\"normal\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS00","20","142",null,"298","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("ChartJS00");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"24","130","30","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cursor("pointer");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_background("url(\'imagerc::dxchart_logo.png\') no-repeat center center black");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("chartngrid.xfdl", function() {

        this.chartLayout;

        this.chartngrid_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	this.chartLayout = "Column";
        	this.fnColumnChart();
        };


        this.cmbType_onitemchanged = function(obj,e)
        {

        	switch(e.postvalue) {
        	case "Column":
        		this.chartLayout = "Column";
        		this.fnColumnChart();
        		break;
        	case "Line":
        		this.chartLayout = "Line";
        		this.fnLineChart();
        		break;
        	case "Combination":
        		this.chartLayout = "Combination";
        		this.fnCombinationChart();
        		break;
        	default:
        	}
        };

        this.fnColumnChart = function ()
        {
        	let chart = this.ChartJS00;
        	let canvas = chart.getCanvas();
        	let cvs = canvas.id;
        	DxChart.reset(canvas);

        	let bar = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsList,
        			data:['bind:Profit','bind:Cost','bind:Revenue'],
        			options: {
        				variant:{Value:'3d',
        					ThreedAngle: 0,
        					ThreedYaxisColor: 'rgba(216,216,216,0.7)',
        					ThreedOffsetx:15,
        					ThreedOffsety:10,
        					ThreedYaxisColor: 'rgba(0,0,0,0.15)',
        				},
        				background:{GridVlines: false,GridHlinesCount: 10,GridBorder: false,GridColor: 'gray',},
        				margin:{Inner: 15,Left: 55,Bottom: 20,Top: 55,},
        				xaxis:{Use:false,
        					Labels:['bind:Month'],
        					LabelsOffsety: 3,
        					LabelsBold: true,
        				},
        				key:{
        					Data: ['Profit','Cost','Revenue'],
        					Position: 'margin',
        					PositionOffsetX: 10,
        					PositionOffsetY: -10,
        					LabelsOffsetY: 2,
        				},
        				title:{Text: 'Annual Report',Offsety: -15, FontStyle:'bold 20pt'},
        				tooltips:{
        					Data:'%{key} %{value}',
        					Css:{backgrountColor:'white'}
        					}
        			}
        		});

        	bar.wave();
        };

        this.fnLineChart = function ()
        {
        	let chart = this.ChartJS00;
        	let canvas = chart.getCanvas();
        	let cvs = canvas.id;
        	DxChart.reset(canvas);
        	let line = new DxChartLine({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsList,
        			data: ['bind:Profit','bind:Cost','bind:Revenue'],
        			options: {
        				margin : {
        					Inner: 5,
        					Bottom: 45
        				},
        				shadow: {
        					Use : false
        				},
        				background : {
        					GridColor: '#cccccc',
        					GridVlines: false,
        					GridBorder: false
        				},
        				xaxis : {
        					Use: false,
        					Labels: ["bind:Month"]
        				},
        				yaxis : {
        					Use: true,
        					ScaleInvert : false,
        				},
        				tickmarks : {
        					Style: 'filledcircle',
        				},
        				key:{
        					Data: ['Profit','Cost','Revenue'],
        					Position: 'margin',
        					PositionOffsetX: 10,
        					PositionOffsetY: -10,
        					LabelsOffsetY: 2,
        				},
        				margin:{Inner: 30,Left: 55,Bottom: 20,Top: 55,},
        				title:{Text: 'Annual Report',Offsety: -15, FontStyle:"bold 20pt"},
        				tooltips:{
        					Data:'%{key} %{value}',
        					Css:{backgrountColor:'white'}
        					}
        			}
        		}).wave();

        };

        this.fnCombinationChart = function ()
        {
        	let chart = this.ChartJS00;
        	let canvas = chart.getCanvas();
        	let cvs = canvas.id;
        	DxChart.reset(canvas);
        	let bar = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsList,
        			data: ['bind:Profit','bind:Cost'],
        			options: {
        				background:{GridVlines: false,
        					GridBorder: false,
        					GridColor: '#999'},
        				xaxis:{	Labels: ['bind:Month'],
        					TickmarksCount: 0,
        					Use: false
        				},
        				margin:{Left: 55,
        					Right: 55,
        					Bottom: 45},
        				shadow:{Color: 'black',
        					Offsetx: 0,
        					Offsety: 0,
        					Blur: 15},
        				colorsStroke: 'rgba(0,0,0,0)',
        				combined:{	Effect: 'wave',
        					EffectOptions: '{frames: 30}'},
        				title:{Text: 'Annual Report',Offsety: -15, FontStyle:'bold 20pt'},
        				tooltips:{
        					Data:'%{key} %{value}',
        					Css:{backgrountColor:'white'}
        					}
        			}
        		});

        	let line = new DxChartLine({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsList,
        			data: ['bind:Revenue'],
        			options: {
        				xaxis:{Use: false},
        				background:{Grid: false},
        				colors: ['#67A0E1'],
        				margin:{Left: 45,
        					Right: 45},
        				tickmarks:{Style: 'filledcircle'},
        				spline: {Use:true},
        				line: {Curve:true, Width:5},
        				combined: {Effect: 'trace'},
        				tooltips:{
        					Data:'%{key} %{value}',
        					Css:{backgrountColor:'white'}
        					}
        			}
        		});

        	let combo = new DxChart.CombinedChart([bar, line]);
        	combo.draw();
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	switch(this.chartLayout) {
        	case "Column":
        		this.fnColumnChart();
        		break;
        	case "Line":
        		this.fnLineChart();
        		break;
        	case "Combination":
        		this.fnCombinationChart();
        		break;
        	default:
        	}
        };

        this.Static03_onclick = function(obj,e)
        {
        	let url = "http://chart.dxtobe.com/chartTech/index.html";

        	system.execBrowser(url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.chartngrid_onload,this);
            this.cmbType.addEventHandler("onitemchanged",this.cmbType_onitemchanged,this);
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("chartngrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
