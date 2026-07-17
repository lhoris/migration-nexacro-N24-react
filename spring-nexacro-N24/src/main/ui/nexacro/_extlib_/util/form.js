if (nexacro._Browser != "Runtime") {
  if (window.console) {
    window.trace = window.console.log;
    let console = window.console || { log: function () {} };
  }
} 

function loadScript(url, callback) {
  if (system.navigatorname === "nexacro") return;

  let script = document.createElement("script");
  script.type = "text/javascript";
  script.async = false;

  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback(url);
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback(url);
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

/**
 * 지정된 항목이 처음 나오는 배열 위치를 반환한다.
 * @param {object} item 찾고자 하는 Item.
 * @param {number=} from 검색의 시작 위치 (default: 0).
 * @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {number} 검색된 배열 위치. 없다면 -1 리턴.
 * @memberOf Array
 */
Array.prototype.indexOf = function (item, from, strict) {
  let len = this.length;
  if (from == null) from = 0;
  strict = !!strict;
  from = from < 0 ? Math.ceil(from) : Math.floor(from);

  if (from < 0) {
    from += len;
  }

  if (strict) {
    for (; from < len; from++) {
      if (this[from] === item) {
        return from;
      }
    }
  } else {
    for (; from < len; from++) {
      if (this[from] == item) {
        return from;
      }
    }
  }

  return -1;
};

/**
 * 지정된 항목이 처음 나오는 배열 위치를 뒤에서부터 찾아 반환한다.
 * @param {object} item 찾고자 하는 Item.
 * @param {number=} from 검색 시작 위치 (default: Last Index).
 * @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {number} 검색된 배열 위치. 없다면 -1 리턴.
 * @memberOf Array
 */
Array.prototype.lastIndexOf = function (item, from, strict) {
  let i;

  if (from == null) {
    from = this.length - 1;
  } else if (from < 0) {
    from = Math.max(0, this.length + from);
  }

  var strict = strict || false;

  if (strict) {
    for (i = from; i >= 0; i--) {
      if (this[i] === item) {
        return i;
      }
    }
  } else {
    for (i = from; i >= 0; i--) {
      if (this[i] == item) {
        return i;
      }
    }
  }

  return -1;
};

/**
 * 지정된 항목이 배열에 포함되어 있는지 확인한다.
 * @param {object} item 찾고자 하는 Item.
 * @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {boolean} 포함되어 있다면 true, 없다면 false를 리턴.
 * @memberOf Array
 */
Array.prototype.contains = function (item, strict) {
  if (this.indexOf(item, null, strict) === -1) {
    return false;
  } else {
    return true;
  }
};

/**
 * 원하는 위치의 항목을 배열에서 삭제 처리한다.
 * @param {number} index remove하고자 하는 item index.
 * @memberOf Array
 */
Array.prototype.removeAt = function (index) {
  this.splice(index, 1);
};

/**
 * 원하는 항목을 배열에서 삭제 처리한다.
 * @param {object} item remove하고자 하는 item.
 * @memberOf Array
 */
Array.prototype.remove = function (item) {
  let index = this.indexOf(item);

  if (index !== -1) {
    this.splice(index, 1);
  }
};

/**
 * value의 빈값 여부 반환.<br>
 * 1. null, undefined type : true 반환<br>
 * 2. string, array type : length 가 0인 경우 true 반환<br>
 * 3. object type : 하위 속성이 존재할 경우 true 반환<br>
 * 4. boolean, number, date type : false 반환
 *
 * @param {*} value 확인할 value.
 * @return {boolean} empty 여부.
 * @memberOf nexacro
 */
nexacro.isEmpty = function (value) {
  // null, undefined ==> true
  if (value == null) return true;

  // String, Array ==> length == 0
  if (nexacro._isString(value) || nexacro._isArray(value)) {
    return value.length == 0 ? true : false;
  } else if (nexacro._isObject(value)) {
    for (let p in value) {
      if (value.hasOwnProperty(p)) {
        return false;
      }
    }
    return true;
  }

  return false;
};

nexacro.Form.prototype.gfnFormOnLoad = function () {

  this.addEventHandler(
    "onsize",
    function (obj, e) {
	  if(obj._gvHeight && obj._gvHeight == e.cy) {
		return;
	  }
	  obj._gvHeight = e.cy;
	  
      let formWork = this.parent.parent;
	  if (this.parent.name == "divMain") {
		formWork["mainPageOnLoad"].call(formWork);
	  } else if (this.parent.name == "divDesc") {
		formWork["descPageOnLoad"].call(formWork);
	  }
    },
    this
  );
  
  let formWork = this.parent.parent;
  if (this.parent.name == "divMain") {	
    formWork["mainPageOnLoad"].call(formWork);
  } else if (this.parent.name == "divDesc") {
    formWork["descPageOnLoad"].call(formWork);
  }
  
  
//   this.addEventHandler(
//     "onlayoutchanged",
//     function (obj, e) {
//       console.log("onlayoutchanged", obj, e.cy)
//       //nexacro.applyI18n(obj);
//       var p = this.parent.parent,
//         height = obj.getLayoutInfo(this.getCurrentLayoutID(), "height");
//       //p["mainPageOnLoad"].call(p, height);
//     },
//     this
//   );
//   
//   //nexacro.applyI18n(this);
// 
//   var p = this.parent.parent,
//     height = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
//   if (this.parent.name == "divMain") {
//     p["mainPageOnLoad"].call(p, height);
//   } else if (this.parent.name == "divDesc") {
//     p["descPageOnLoad"].call(p, height);
//   }
};

nexacro.applyI18n = function (obj) {
  let comps = obj.components;

  for (let i = 0, len = comps.length; i < len; i++) {
    let comp = comps[i],
      messageid = "";

    if (comp instanceof Div || comp instanceof PopupDiv) {
      messageid = comp.messageid;
      if(messageid) comp.text = nexacro.getApplication().messages[messageid];
      nexacro.applyI18n(comp.form);
      comp.form.resetScroll();
    } else if (comp instanceof Tab) {
      let tabpages = comp.tabpages;
      for (let iLoop = 0; iLoop < tabpages.length; iLoop++) {
        messageid = tabpages[iLoop].messageid;
        if(messageid) tabpages[iLoop].text = nexacro.getApplication().messages[messageid];
        nexacro.applyI18n(tabpages[iLoop].form);
        tabpages[iLoop].form.resetScroll();
      }
    } else if (
      comp instanceof CheckBox ||
      comp instanceof GroupBox ||
      comp instanceof Static ||
      comp instanceof ImageViewer ||
      comp instanceof Button
    ) {
      messageid = comp.messageid;
      if(messageid) comp.text = nexacro.getApplication().messages[messageid];
      if(comp.tooltipmessageid) comp.tooltiptext = nexacro.getApplication().messages[comp.tooltipmessageid];
    } else if (
      comp instanceof Calendar ||
      comp instanceof Combo ||
      comp instanceof Edit ||
      comp instanceof MaskEdit ||
      comp instanceof Spin ||
      comp instanceof TextArea
    ) {
      messageid = comp.messageid;
      if(messageid) comp.displaynulltext = nexacro.getApplication().messages[messageid];
    } else if (comp instanceof Grid) {
      let nCount = comp.getCellCount("head");
      for (let j = 0; j < nCount; j++) {
        messageid = comp.getCellProperty("head", j, "messageid");
        if(messageid) comp.setCellProperty("head",j,"text",nexacro.getApplication().messages[messageid]);
      }
	  
	  comp.autoenter = "select";
    }
  }

  obj.resetScroll();
};

nexacro.Form.prototype.openMain = function () {
  const  app = nexacro.getApplication();
  const rootForm = app.mainframe.childframe.form;
  const topForm = app.mainframe.childframe.form.divTop.form;

  // background style
  rootForm["Static01"].visible = false;
  rootForm["Static03"].visible = true;
  rootForm["Static04"].visible = true;
  rootForm["Static05"].visible = true;

  if (app.IsMobile) {
    topForm["setMainTitle"].call(topForm);
    rootForm["setDescVisible"].call(rootForm, false);
  } else {
    rootForm["divLeftMenu"].width = 0;
    rootForm["divWork"].width = 1263;
  }

  rootForm["divWork"].url = "frame::main.xfdl";

  rootForm.resetScroll();

  if (!app.IsNRE) {
    MyHistory.setLocationHash("main", "", MyHistory.getContext().location.pathname);
  }
};

nexacro.Form.prototype.openMenu = function (menuId) {
  const app = nexacro.getApplication();
  let rowIdx = app.gdsMenu.findRowNF("id", menuId);

  if (rowIdx > -1) {
    let upid = app.gdsMenu.getColumnNF(rowIdx, "upid");
    let menuName = app.gdsMenu.getColumnNF(rowIdx, "caption");
    let menuUrl = app.gdsMenu.getColumnNF(rowIdx, "url");
    let rootForm = app.mainframe.childframe.form;
    let topForm = app.mainframe.childframe.form.divTop.form;
    let topButton = topForm.components["btnMenu_" + upid];

    // background style
    rootForm["Static01"].visible = true;
    rootForm["Static03"].visible = false;
    rootForm["Static04"].visible = false;
    rootForm["Static05"].visible = false;

    rootForm["divWork"].url = "frame::work.xfdl";

    if (topButton) topButton.click();

    if (app.IsMobile) {
      topForm["setMenuTitle"].call(topForm, menuName);
      rootForm["setDescVisible"].call(rootForm, true);
    } else {
      rootForm["divLeftMenu"].width = 273;
      rootForm["divWork"].width = 990;
    }

    let leftForm = app.mainframe.childframe.form.divLeftMenu.form.divSubMenu.form;
    let leftButton = leftForm.components["btnMenu_" + menuId];

    if (leftButton) leftButton.click();

    if (!app.IsNRE) {
      gtag("event", "page_view", {
        page_path: menuUrl,
        page_title: menuName,
      });
    }
  }
};

nexacro.Form.prototype.openPopup = function (
  frameId,
  formUrl,
  objArgList,
  options,
  sPopupCallback,
  bModeless
) {
  let nLeft = -1;
  let nTop = -1;
  let nWidth = 1;
  let nHeight = 1;
  let bShowTitle = true;
  let bShowStatus = false;
  let bLayered = false;
  let nOpacity = 1;
  let bAutoSize = true;
  let bResizable = true;
  let sOpenstatus = "normal";
  let sDragMoveType = "all";
  let sTitleText = "";
  let objParentFrame = this.getOwnerFrame();

  options += "";
  let aVal = options.trim().split(" ");
  for (let i = 0; i < aVal.length; i++) {
    let aVal2 = aVal[i].trim().split("=");
    switch (aVal2[0]) {
      case "top":
        nTop = parseInt(aVal2[1]);
        break;
      case "left":
        nLeft = parseInt(aVal2[1]);
        break;
      case "width":
        nWidth = parseInt(aVal2[1]);
        break;
      case "height":
        nHeight = parseInt(aVal2[1]);
        break;
      case "title":
      case "titlebar":
      case "showtitlebar":
        bShowTitle = aVal2[1];
        break;
      case "titletext":
        sTitleText = aVal2[1];
        break;
      case "status":
      case "statusbar":
      case "showstatusbar":
        bShowStatus = aVal2[1];
        break;
      case "layered":
        bLayered = aVal2[1];
        break;
      case "opacity":
        nOpacity = aVal2[1];
        break;
      case "autosize":
        bAutoSize = aVal2[1];
        break;
      case "resizable":
        bResizable = aVal2[1];
        break;
      case "round":
        bRound = aVal2[1];
        break;
      case "openstatus":
        sOpenstatus = aVal2[1];
        break;
    }
  }
  let sOpenalign = "";
  sOpenalign = "center middle";

  if (nWidth == 1) nWidth = 600;
  if (nHeight == 1) nHeight = 500;

  if (nLeft == -1) {
    nLeft = (nexacro.getApplication().mainframe.width - nWidth) / 2;
    if (bModeless)
      nLeft += system.clientToScreenX(nexacro.getApplication().mainframe, 0);
  }
  if (nTop == -1) {
    nTop = (nexacro.getApplication().mainframe.height - nHeight) / 2;
    if (bModeless)
      nTop += system.clientToScreenY(nexacro.getApplication().mainframe, 0);
  }

  if (bModeless) {
    //열린 modeless 팝업 화면이 존재하면 focus 처리 후 리턴.
    let objPopFrams = nexacro.getPopupFrames();

    let objPopFrame = objPopFrams[frameId];
    if (objPopFrame) {
      objPopFrame.setFocus();
      if (bReload == "true") {
        //arguments 셋팅
        if (!nexacro.isEmpty(objArgList)) {
          if (!objPopFrame.arguments) objPopFrame.arguments = {};

          for (var key in objArgList) {
            if (objArgList.hasOwnProperty(key)) {
              objPopFrame.arguments[key] = objArgList[key];
            }
          }
        }
        objPopFrame.form.reload();
      }
      return;
    }

    let sOpenStyle = "";

    if (bShowTitle == "false") sOpenStyle += "showtitlebar=false";
    if (bShowStatus == "true") sOpenStyle += " showstatusbar=true";
    if (bAutoSize == "false") sOpenStyle += " autosize=false";
    if (bResizable == "false") {
      sOpenStyle += " resizable=false";
    } else {
      sOpenStyle += " resizable=true";
    }
    nexacro.open(
      frameId,
      formUrl,
      objParentFrame,
      objArgList,
      sOpenStyle,
      nLeft,
      nTop,
      nWidth,
      nHeight,
      this
    );
  } else {
    let newChild = new nexacro.ChildFrame();

    newChild.init(frameId, nLeft, nTop, nWidth, nHeight, null, null, formUrl);

    newChild.background = "transparent";
    newChild.dragmovetype = sDragMoveType;
    newChild.showtitlebar = bShowTitle;
    newChild.titlebarheight = 30;
    newChild.autosize = bAutoSize;
    newChild.resizable = bResizable;
    newChild.titletext = sTitleText;
    newChild.showstatusbar = bShowStatus;
    newChild.openalign = sOpenalign;
    newChild.layered = bLayered;
    newChild.opacity = nOpacity;
    newChild.boxShadow = "0 3px 9px rgba(0,0,0,.5)";
    newChild.openstatus = sOpenstatus;

    //arguments 셋팅
    if (!nexacro.isEmpty(objArgList)) {
      if (!newChild.arguments) newChild.arguments = {};
      for (var key in objArgList) {
        if (objArgList.hasOwnProperty(key))
          newChild.arguments[key] = objArgList[key];
      }
    }

    newChild.showModal(objParentFrame, objArgList, this, sPopupCallback);
  }
};

/**
 * @class 입력받은 Number에 컴마를 추가한다. <br>
 * @param {Number} nNumber - 숫자
 * @param {Number} [nDetail] - 반올림할 소숫점 이하의 자릿수.
 * @return {String} Comma 가 포함하고 있는 숫자
 */
nexacro.Form.prototype.gfnAppendComma = function (nNumber, nDetail) {
  if (nNumber == null) return "";
  if (nDetail == null) nDetail = 0;

  nNumber = parseFloat(nNumber);
  nNumber = nexacro.round(nNumber, nDetail);

  let strNumber = new String(nNumber);
  let arrNumber = strNumber.split(".");
  let strFormatNum = "";
  let j = 0;

  for (let i = arrNumber[0].length - 1; i >= 0; i--) {
    if (i != strNumber.length && j == 3) {
      strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
      j = 0;
    } else {
      strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
    }
    j++;
  }

  if (arrNumber.length > 1) strFormatNum = strFormatNum + "." + arrNumber[1];

  return strFormatNum;
};
