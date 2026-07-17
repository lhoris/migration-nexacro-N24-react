if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::demo");
        this.set_userfontid("font::NotoSans.xfont");
        this.set_datatyperule("2.0");
        this.set_enabletouchevent("true");
        this.set_scrollbartype("default");
        this.set_filesecurelevel("all");
        this.set_loadingimage("url(\'imagerc::page_loading.gif\')");
        this.set_usehttpkeepalive("true");
        this.set_networksecurelevel("all");
        this.set_usestringresource("true");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("stringrc", "file", "./_resource_/_stringrc_/", "session", null, "", "0", "");
        nexacro._addService("design", "form", "./design/", "session", null, "", "0", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
        nexacro._addService("grid", "form", "./grid/", "session", null, "", "0", "0");
        nexacro._addService("comp", "form", "./comp/", "session", null, "", "0", "0");
        nexacro._addService("device", "form", "./device/", "session", null, "", "0", "0");
        nexacro._addService("sample", "form", "./sample/", "session", null, "", "0", "0");
        nexacro._addService("external", "form", "./external/", "session", null, "", "0", "0");
        nexacro._addService("i18n", "file", "./i18n/", "session", null, "", "0", "0");
        nexacro._addService("lib", "file", "./lib/", "session", null, "", "0", "0");
        nexacro._addService("_extlib_", "js", "./_extlib_/", "session", null, "", "0", "0");
        nexacro._addService("svc", "JSP", "http://localhost:8080/", "none", null, "", "0", "0");
        nexacro._addService("xeni", "JSP", "http://localhost:8080/", "none", null, "", "0", "0");
        nexacro._addService("ubi", "JSP", "http://localhost:8081/", "none", null, "", "0", "0");
        nexacro._addService("xpush", "JSP", "http://localhost:50000, tcp://localhost:50001", "none", null, "", "0", "0");
        nexacro._addService("pushUrl", "file", "./pushUrl/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"View", "classname":"nexacro.View", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"GoogleMap", "classname":"nexacro.GoogleMap", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"VideoPlayer", "classname":"nexacro.VideoPlayer", "type":"JavaScript"},
        		{"id":"NxPivot", "classname":"nexacro.NxPivot", "type":"JavaScript"},
        		{"id":"UbiReport", "classname":"nexacro.UbiViewer", "type":"JavaScript"},
        		{"id":"commPaging", "classname":"nexacro.commPaging", "type":"JavaScript"},
        		{"id":"Graphics", "classname":"nexacro.Graphics", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"WebView", "classname":"nexacro.WebView", "type":"JavaScript"},
        		{"id":"XPush", "classname":"nexacro.XPush", "type":"JavaScript"},
        		{"id":"CheckCombo", "classname":"nexacro.CheckCombo", "type":"JavaScript"},
        		{"id":"CustomCalendar", "classname":"nexacro.CustomCalendar", "type":"JavaScript"},
        		{"id":"FromToCalendar", "classname":"nexacro.FromToCalendar", "type":"JavaScript"},
        		{"id":"FromToCalendar2", "classname":"nexacro.FromToCalendar2", "type":"JavaScript"},
        		{"id":"WindowCalendar", "classname":"nexacro.WindowCalendar", "type":"JavaScript"},
        		{"id":"FromToCalendar3", "classname":"nexacro.FromToCalendar3", "type":"JavaScript"},
        		{"id":"CustomRadio", "classname":"nexacro.CustomRadio", "type":"JavaScript"},
        		{"id":"ChartJS", "classname":"nexacro.ChartJS", "type":"JavaScript"},
        		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"TextField", "classname":"nexacro.TextField", "type":"JavaScript"},
        		{"id":"MultiLineTextField", "classname":"nexacro.MultiLineTextField", "type":"JavaScript"},
        		{"id":"DateField", "classname":"nexacro.DateField", "type":"JavaScript"},
        		{"id":"DateRangePicker", "classname":"nexacro.DateRangePicker", "type":"JavaScript"},
        		{"id":"PopupDateRangePicker", "classname":"nexacro.PopupDateRangePicker", "type":"JavaScript"},
        		{"id":"Panel", "classname":"nexacro.Panel", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
	
    // StringResource Information
    env.on_getResourceLanguageInfo = function ()
    {
    	return { "en":true, "ko":true };
    };
    env.on_getStringResourceFileExt = function ()
    {
    	return "json";
    };
	
    // User Script

					
    env = null;
    nexacro._getExtUserCssScreenType = nexacro._getCurrentScreenType;
}
