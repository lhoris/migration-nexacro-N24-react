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
                this._setFormPosition(440,1470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"title_long\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"rating\" type=\"STRING\" size=\"256\"/><Column id=\"runtime\" type=\"STRING\" size=\"256\"/><Column id=\"summary\" type=\"STRING\" size=\"256\"/><Column id=\"small_cover_image\" type=\"STRING\" size=\"256\"/><Column id=\"medium_cover_image\" type=\"STRING\" size=\"256\"/><Column id=\"large_cover_image\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">Avengers: Infinity War</Col><Col id=\"title_long\">Avengers: Infinity War (2018)</Col><Col id=\"year\">2018</Col><Col id=\"rating\">8.4</Col><Col id=\"runtime\">149</Col><Col id=\"summary\">As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.</Col><Col id=\"medium_cover_image\">imagerc::movies/avengers_infinity_war_2018/medium-cover.jpg</Col><Col id=\"large_cover_image\">imagerc::movies/avengers_infinity_war_2018/large-cover.jpg</Col><Col id=\"small_cover_image\">imagerc::movies/avengers_infinity_war_2018/small-cover.jpg</Col></Row><Row><Col id=\"title\">Black Panther</Col><Col id=\"title_long\">Black Panther (2018)</Col><Col id=\"year\">2018</Col><Col id=\"rating\">7.3</Col><Col id=\"runtime\">134</Col><Col id=\"summary\">After the events of Captain America: Civil War, Prince T&apos;Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country&apos;s new king. However, T&apos;Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.</Col><Col id=\"medium_cover_image\">imagerc::movies/black_panther_2018/medium-cover.jpg</Col><Col id=\"large_cover_image\">imagerc::movies/black_panther_2018/large-cover.jpg</Col><Col id=\"small_cover_image\">imagerc::movies/black_panther_2018/small-cover.jpg</Col></Row><Row><Col id=\"title\">Deadpool 2</Col><Col id=\"title_long\">Deadpool 2 (2018)</Col><Col id=\"year\">2018</Col><Col id=\"rating\">7.7</Col><Col id=\"runtime\">119</Col><Col id=\"summary\">After losing Vanessa (Morena Baccarin), the love of his life, 4th-wall breaking mercenary Wade Wilson aka Deadpool (Ryan Reynolds) must assemble a team and protect a young, full-figured mutant Russell Collins aka Firefist (Julian Dennison) from Cable (Josh Brolin), a no-nonsense, dangerous cyborg from the future, and must also learn the most important lesson of all: to be part of a family again.</Col><Col id=\"medium_cover_image\">imagerc::movies/deadpool_2_2018/medium-cover.jpg</Col><Col id=\"large_cover_image\">imagerc::movies/deadpool_2_2018/large-cover.jpg</Col><Col id=\"small_cover_image\">imagerc::movies/deadpool_2_2018/small-cover.jpg</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"comp.listview\",\"ListView\")");
            obj.getSetter("messageid").set("comp.listview");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_pageTitle");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","20","80",null,"1370","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_useselcolor("false");
            obj.set_bandexpandtype("accordion");
            obj.set_bandinitstatus("collapse");
            obj.set_formatid("default");
            obj.set_scrollbartype("fixed");
            obj.set_scrollbarsize("0");
            obj.set_cssclass("lstv_WF_compListview");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"450\" expandbartype=\"true\" expandbarsize=\"50 20\"><Cell id=\"Cell00\" left=\"10\" top=\"10\" height=\"30\" text=\"bind:title_long\" right=\"10\" font=\"normal 16px/normal &quot;Noto Sans KR Bold&quot;\"/><Cell id=\"Cell01\" left=\"10\" top=\"44\" height=\"400\" right=\"10\" displaytype=\"imagecontrol\" text=\"bind:large_cover_image\" imagestretch=\"fixaspectratio\"/></Band><Band id=\"detail\" width=\"100%\" height=\"500\"><Cell id=\"Cell00\" left=\"20\" top=\"17\" width=\"100\" height=\"30\" text=\"Year\" font=\"14px/normal &quot;Noto Sans KR Bold&quot;\"/><Cell id=\"Cell01\" left=\"140\" top=\"17\" width=\"100\" height=\"30\" text=\"bind:year\"/><Cell id=\"Cell02\" left=\"20\" top=\"51\" width=\"100\" height=\"30\" text=\"Rating\" font=\"14px/normal &quot;Noto Sans KR Bold&quot;\"/><Cell id=\"Cell03\" left=\"140\" top=\"51\" width=\"100\" height=\"30\" text=\"bind:rating\"/><Cell id=\"Cell04\" left=\"20\" top=\"85\" width=\"100\" height=\"30\" text=\"Running Time\" font=\"14px/normal &quot;Noto Sans KR Bold&quot;\"/><Cell id=\"Cell05\" left=\"140\" top=\"85\" width=\"100\" height=\"30\" text=\"bind:runtime\"/><Cell id=\"Cell06\" left=\"20\" top=\"150\" height=\"215\" text=\"bind:summary\" right=\"0\" wordWrap=\"english\"/><Cell id=\"Cell07\" left=\"20\" top=\"119\" width=\"100\" height=\"30\" text=\"Summary\" font=\"14px/normal &quot;Noto Sans KR Bold&quot;\"/></Band></Format><Format id=\"large\"><Band id=\"body\" width=\"100%\" height=\"200\" expandbartype=\"true\" expandbarsize=\"50 20\"><Cell id=\"Cell00\" left=\"165\" top=\"20\" height=\"30\" text=\"bind:title\" font=\"normal 16px/normal &quot;Noto Sans KR Bold&quot;\" right=\"10\"/><Cell id=\"Cell01\" left=\"20\" top=\"14\" height=\"170\" displaytype=\"imagecontrol\" text=\"bind:medium_cover_image\" imagestretch=\"fixaspectratio\" width=\"120\"/><Cell id=\"Cell02\" left=\"165\" top=\"59\" width=\"100\" height=\"30\" text=\"Year\" font=\"14px/normal &quot;Noto Sans KR Bold&quot;\"/><Cell id=\"Cell03\" left=\"286\" top=\"59\" width=\"100\" height=\"30\" text=\"bind:year\"/><Cell id=\"Cell04\" left=\"165\" top=\"93\" width=\"100\" height=\"30\" text=\"Rating\" font=\"14px/normal &quot;Noto Sans KR Bold&quot;\"/><Cell id=\"Cell05\" left=\"286\" top=\"93\" width=\"100\" height=\"30\" text=\"bind:rating\"/><Cell id=\"Cell06\" left=\"165\" top=\"127\" width=\"100\" height=\"30\" text=\"Running Time\" font=\"14px/normal &quot;Noto Sans KR Bold&quot;\"/><Cell id=\"Cell07\" left=\"286\" top=\"127\" width=\"100\" height=\"30\" text=\"bind:runtime\"/></Band><Band id=\"detail\" width=\"100%\" height=\"150\"><Cell id=\"Cell06\" left=\"25\" top=\"45\" text=\"bind:summary\" right=\"25\" wordWrap=\"english\" bottom=\"20\"/><Cell id=\"Cell07\" left=\"25\" top=\"20\" width=\"100\" height=\"30\" text=\"Summary\" font=\"14px/normal &quot;Noto Sans KR Bold&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",440,1470,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("1");
                p.Static01.set_text("TEXT(\"comp.listview\",\"ListView\")");
                p.Static01.getSetter("messageid").set("comp.listview");
                p.Static01.set_fittocontents("width");
                p.Static01.set_cssclass("sta_WF_pageTitle");
                p.Static01.move("20","20","121","40",null,null);

                p.ListView00.set_taborder("1");
                p.ListView00.set_binddataset("dsList");
                p.ListView00.set_useselcolor("false");
                p.ListView00.set_bandexpandtype("accordion");
                p.ListView00.set_bandinitstatus("collapse");
                p.ListView00.set_formatid("default");
                p.ListView00.set_scrollbartype("fixed");
                p.ListView00.set_scrollbarsize("0");
                p.ListView00.set_cssclass("lstv_WF_compListview");
                p.ListView00.move("20","80",null,"1370","20",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("large","Desktop_screen",920,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.ListView00.set_formatid("large");
                p.ListView00.set_cssclass("lstv_WF_compListview");
                p.ListView00.move("20","80",null,"600","20",null);
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
        this.registerScript("listview.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();
        };

        this.ListView00_onbandstatuschanged = function(obj,e)
        {
        	let top = obj.getOffsetTop();
        	let curHeight = 0;
        	let body_height = Number(obj.getBandProperty("body", "height"));
        	let detail_height = Number(obj.getBandProperty("detail", "height"));

        	for (let row = 0, len = obj.getBindDataset().rowcount; row < len; row++) {
        		curHeight += body_height + (obj.getBandExpandStatus(row)?detail_height:0);
        	}

        	this.ListView00.height = curHeight;
        	this.height            = top + curHeight;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.ListView00.addEventHandler("onbandstatuschanged",this.ListView00_onbandstatuschanged,this);
        };
        this.loadIncludeScript("listview.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
