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
                this._setFormPosition(920,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsImageList", this);
            obj._setContents("<ColumnInfo><Column id=\"img\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"img\">imagerc::Animation/img_WF_bannerImg01.png</Col></Row><Row><Col id=\"img\">imagerc::Animation/img_WF_bannerImg02.png</Col></Row><Row><Col id=\"img\">imagerc::Animation/img_WF_bannerImg03.png</Col></Row><Row><Col id=\"img\">imagerc::Animation/img_WF_bannerImg04.png</Col></Row><Row><Col id=\"img\">imagerc::Animation/img_WF_bannerImg05.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"comp.animation\",\"Animation\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("comp.animation");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","72","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"comp.animation.circlemenu\",\"Circle Menu\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.animation.circlemenu");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","470","74","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"comp.animation.imageslide\",\"Image Slide\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.animation.imageslide");
            this.addChild(obj.name, obj);

            obj = new Static("stButton","100","160","250","250",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_stWorld");
            this.addChild(obj.name, obj);

            obj = new Div("divBanner","512.00","126","330","330",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("div_WF_bannerBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev","463.00","256","32","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_slidePrev");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","855.00","256","32","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_slideNext");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu01","110","430","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS01");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu02","110","550","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS02");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu03","110","670","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS03");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu04","240","430","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS04");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu05","240","550","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS05");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu06","240","670","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS06");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBanner
            obj = new Layout("default","",0,0,this.divBanner.form,function(p){});
            this.divBanner.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("animation.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	this.fnInitAniMenu();
        	this.fnInitSlideImage(this.divBanner, this.dsImageList);

        	this.setTimer(0, 3000);
        	this.setTimer(1, 2000);
        };

        this.fnInitAniMenu = function()
        {
        	let objAni = new nexacro.Animation("aniMenuOpen", this);
        	this.addChild(objAni.name, objAni);

        	this.stButton.aniIdx = 0;

        	objAni.duration = 500;
        	objAni.easing = "easeoutcirc";
        	objAni.addTarget("AniItem00", this.stButton, "aniIdx:100");
        	objAni.addEventHandler("onrun", this.ani_onrun, this);

        	objAni = new nexacro.Animation("aniMenuClose", this);
        	this.addChild(objAni.name, objAni);

        	objAni.duration = 500;
        	objAni.easing = "easeoutcirc";
        	objAni.addTarget("AniItem00", this.stButton, "aniIdx:0");
        	objAni.addEventHandler("onrun", this.ani_onrun, this);
        };

        this.fnInitSlideImage = function(objDiv, objDs)
        {
        	let objAni;

        	objDiv.formscrollbartype = "none";

        	this.fnClearSlideImage(objDiv);
        	this.fnCreateSlideImage(objDiv, objDs);

        	objAni = this.fnCreateSlideImageAni(objDiv);

        	objDiv.stepIdx = 0;
        	objDiv.targetAni = objAni;

        	objDiv.form.resetScroll();
        };

        this.ani_onrun = function(obj,e)
        {
        	let i, objMenu;
        	let arrAngle = [1.04, 2.08, 3.12, 4.16, 5.20, 6.24];
        	let nCenterX = this.stButton.getOffsetLeft() + (this.stButton.getOffsetWidth()/2);
        	let nCenterY = this.stButton.getOffsetTop() + (this.stButton.getOffsetHeight()/2);
        	let nAniIdx = this.stButton.aniIdx;
        	let nMenuSize = 100;
        	let nMenuGap = 150;
        	let x, y, r, nStep;

        	r = nMenuGap * (nAniIdx/100);
        	size = nMenuSize * (nAniIdx/100);

        	for (i = 0; i < 6; i++) {
        		nStep = arrAngle[i] * (nAniIdx/100);
        		x = r * Math.cos(nStep);
        		y = r * Math.sin(nStep);

        		objMenu = this.components["stMenu0"+(i+1)];
        		objMenu.move(nCenterX+x-(nMenuSize/2), nCenterY+y-(nMenuSize/2), size, size);
        	}
        };

        this.fnClearSlideImage = function(objDiv)
        {
        	let i;
        	let objComponents = objDiv.form.components;
        	let nCount = objComponents.length;
        	let objDelete;

        	for (i = nCount-1; i >= 0; i--) {
        		objDelete = objDiv.form.removeChild(objComponents[i].name);
        		objDelete.destroy();
        		objDelete = null;
        	}

        	objDiv.form.resetScroll();
        };

        this.fnCreateSlideImage = function(objDiv, objDs)
        {
        	let i;
        	let nCount = objDs.rowcount;
        	let nLeft = 0;
        	let nTop = 0;
        	let nWidth = objDiv.getOffsetWidth();
        	let nHeight = objDiv.getOffsetHeight();
        	let objImgViewer, sImg;

        	for (i = 0; i < nCount; i++) {
        		sImg = objDs.getColumn(i, "img");

        		objImgViewer = new ImageViewer("imgView"+i, nLeft, nTop, nWidth, nHeight, null, null);
        		objDiv.form.addChild(objImgViewer.name, objImgViewer);
        		objImgViewer.show();

        		objImgViewer.image = sImg;
        		objImgViewer.stretch = "fit";

        		nLeft = objImgViewer.getOffsetLeft() + objImgViewer.getOffsetWidth();
        	}
        };

        this.fnCreateSlideImageAni = function(objDiv)
        {
        	let objAni;

        	if (this.isValidObject(objDiv.name+"_ani")) {
        		objAni = this.all[objDiv.name+"_ani"];
        	} else {
        		objAni = new nexacro.Animation(objDiv.name+"_ani", this);
        		this.addChild( objAni.name, objAni );

        		objAni.duration = 500;
        		objAni.easing = "easeOutCubic";
        		objAni.addTarget("AniItem00", objDiv, "aniIdx:100");
        		objAni.targetComp = objDiv;

        		objAni.addEventHandler("onrun", this.fnSlideImage_onrun, this);
        	}

        	objDiv.aniIdx = 0;

        	return objAni;
        };

        this.fnSlideImage_onrun = function(obj,e)
        {
        	let objDiv = obj.targetComp;
        	let nHPos = objDiv.startScrollPos + (objDiv.changeScrollPos * (objDiv.aniIdx/100));

        	objDiv.form.scrollTo(nHPos, 0);
        };

        this.fnSetSlideImage = function(objDiv, nIdx)
        {
        	let objImgViewer = objDiv.form.components["imgView"+nIdx];
        	let nStartScrollPos = objDiv.form.getHScrollPos();
        	let nChangeScrollPos = nexacro.toNumber(objImgViewer.getOffsetLeft());

        	objDiv.startScrollPos = nStartScrollPos;
        	objDiv.changeScrollPos = nChangeScrollPos - nStartScrollPos;
        	objDiv.aniIdx = 0;
        	objDiv.stepIdx = nIdx;

        	objDiv.targetAni.play();
        };

        this.form_ontimer = function(obj,e)
        {
        	if (e.timerid == 0) {
        		if (this.stButton.status=="open") {
        			this.stButton.status = "close";
        			this.aniMenuClose.play();
        		} else {
        			for (let i = 0; i < 6; i++) {
        				objMenu = this.components["stMenu0"+(i+1)];
        				objMenu.visible = true;
        			}
        			this.stButton.status = "open";
        			this.aniMenuOpen.play();
        		}
        	} else if (e.timerid == 1) {
        		this.btnNext.click();
        	}
        };

        this.btnPrev_onclick = function(obj,e)
        {
        	let nCount = this.divBanner.form.components.length;

        	if (this.divBanner.stepIdx > 0) {
        		this.fnSetSlideImage(this.divBanner, this.divBanner.stepIdx-1);
        	} else {
        		this.fnSetSlideImage(this.divBanner, nCount-1);
        	}
        };

        this.btnNext_onclick = function(obj,e)
        {
        	let nCount = this.divBanner.form.components.length;

        	if (this.divBanner.stepIdx+1 < nCount) {
        		this.fnSetSlideImage(this.divBanner, this.divBanner.stepIdx+1);
        	} else {
        		this.fnSetSlideImage(this.divBanner, 0);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.btnPrev.addEventHandler("onclick",this.btnPrev_onclick,this);
            this.btnNext.addEventHandler("onclick",this.btnNext_onclick,this);
        };
        this.loadIncludeScript("animation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
