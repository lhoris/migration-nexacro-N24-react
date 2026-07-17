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
            obj.set_text("Animation");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("comp.animation");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","72","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Circle Menu");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.animation.circlemenu");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","470","72","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Image Slide");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.animation.imageslide");
            this.addChild(obj.name, obj);

            obj = new Static("stButton","100","160","250","250",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_stWorld");
            this.addChild(obj.name, obj);

            obj = new Div("divBanner","515","130","320","320",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("div_WF_bannerBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev","463","260","32","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_slidePrev");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","855","260","32","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_slideNext");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu01","130","430","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS01");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu02","130","550","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS02");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu03","130","670","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS03");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu04","260","430","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS04");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu05","260","550","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_stSNS05");
            this.addChild(obj.name, obj);

            obj = new Static("stMenu06","260","670","70","70",null,null,null,null,null,null,this);
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
        this.registerScript("comp-animation.xfdl", function() {

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
        	var objAni = new nexacro.Animation("aniMenuOpen", this);
        	this.addChild(objAni.name, objAni);

        	this.stButton.aniIdx = 0;

        	objAni.set_duration(500);
        	objAni.set_easing("easeoutcirc");
        	objAni.addTarget("AniItem00", this.stButton, "aniIdx:100");
        	objAni.addEventHandler("onrun", this.ani_onrun, this);

        	objAni = new nexacro.Animation("aniMenuClose", this);
        	this.addChild(objAni.name, objAni);

        	objAni.set_duration(500);
        	objAni.set_easing("easeoutcirc");
        	objAni.addTarget("AniItem00", this.stButton, "aniIdx:0");
        	objAni.addEventHandler("onrun", this.ani_onrun, this);
        };

        this.fnInitSlideImage = function(objDiv, objDs)
        {
        	var objAni;

        	objDiv.set_formscrollbartype("none");

        	this.fnClearSlideImage(objDiv);
        	this.fnCreateSlideImage(objDiv, objDs);

        	objAni = this.fnCreateSlideImageAni(objDiv);

        	objDiv.stepIdx = 0;
        	objDiv.targetAni = objAni;

        	objDiv.form.resetScroll();
        };

        this.ani_onrun = function(obj,e)
        {
        	var i, objMenu,
        		arrAngle = [1.04, 2.08, 3.12, 4.16, 5.20, 6.24],
        		nCenterX = this.stButton.getOffsetLeft() + (this.stButton.getOffsetWidth()/2),
        		nCenterY = this.stButton.getOffsetTop() + (this.stButton.getOffsetHeight()/2),
        		nAniIdx = this.stButton.aniIdx,
        		nMenuSize = 100,
        		nMenuGap = 150,
        		x, y, r, nStep;

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
        	var i,
        		objComponents = objDiv.form.components,
        		nCount = objComponents.length,
        		objDelete;

        	for (i = nCount-1; i >= 0; i--) {
        		objDelete = objDiv.form.removeChild(objComponents[i].name);
        		objDelete.destroy();
        		objDelete = null;
        	}

        	objDiv.form.resetScroll();
        };

        this.fnCreateSlideImage = function(objDiv, objDs)
        {
        	var i, nCount = objDs.rowcount,
        		nLeft = 0, nTop = 0,
        		nWidth = objDiv.getOffsetWidth(),
        		nHeight = objDiv.getOffsetHeight(),
        		objImgViewer, sImg;

        	for (i = 0; i < nCount; i++) {
        		sImg = objDs.getColumn(i, "img");

        		objImgViewer = new ImageViewer("imgView"+i, nLeft, nTop, nWidth, nHeight, null, null);
        		objDiv.form.addChild(objImgViewer.name, objImgViewer);
        		objImgViewer.show();

        		objImgViewer.set_image(sImg);
        		objImgViewer.set_stretch("fit");

        		nLeft = objImgViewer.getOffsetLeft() + objImgViewer.getOffsetWidth();
        	}
        };

        this.fnCreateSlideImageAni = function(objDiv)
        {
        	var objAni;

        	if (this.isValidObject(objDiv.name+"_ani")) {
        		objAni = this.all[objDiv.name+"_ani"];
        	} else {
        		objAni = new nexacro.Animation(objDiv.name+"_ani", this);
        		this.addChild( objAni.name, objAni );

        		objAni.set_duration(500);
        		objAni.set_easing("easeOutCubic");
        		objAni.addTarget("AniItem00", objDiv, "aniIdx:100");
        		objAni.targetComp = objDiv;

        		objAni.addEventHandler("onrun", this.fnSlideImage_onrun, this);
        	}

        	objDiv.aniIdx = 0;

        	return objAni;
        };

        this.fnSlideImage_onrun = function(obj,e)
        {
        	var objDiv = obj.targetComp,
        		nHPos = objDiv.startScrollPos + (objDiv.changeScrollPos * (objDiv.aniIdx/100));

        	objDiv.form.scrollTo(nHPos, 0);
        };

        this.fnSetSlideImage = function(objDiv, nIdx)
        {
        	var objImgViewer = objDiv.form.components["imgView"+nIdx],
        		nStartScrollPos = objDiv.form.getHScrollPos(),
        		nChangeScrollPos = nexacro.toNumber(objImgViewer.getOffsetLeft());

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
        			for (var i = 0; i < 6; i++) {
        				objMenu = this.components["stMenu0"+(i+1)];
        				objMenu.set_visible(true);
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
        	var nCount = this.divBanner.form.components.length;

        	if (this.divBanner.stepIdx > 0) {
        		this.fnSetSlideImage(this.divBanner, this.divBanner.stepIdx-1);
        	} else {
        		this.fnSetSlideImage(this.divBanner, nCount-1);
        	}
        };

        this.btnNext_onclick = function(obj,e)
        {
        	var nCount = this.divBanner.form.components.length;

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
        this.loadIncludeScript("comp-animation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
