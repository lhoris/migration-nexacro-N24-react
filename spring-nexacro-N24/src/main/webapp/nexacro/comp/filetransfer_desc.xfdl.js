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
                this._setFormPosition(920,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","15","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TEXT(\"comp.filetransfer\",\"File Transfer\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.filetransfer");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","Static00:2",null,"86","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"comp.filetransfer.desc\",\"넥사크로 플랫폼에서 기본으로 제공되는 컴포넌트와 오브젝트를 이용해서 파일을 서버에 업로드 및 다운로드 할 수 있습니다.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("comp.filetransfer.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","Static01:10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"comp.filetransfer.upload\",\"파일업로드\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.filetransfer.upload");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","Static05:2",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"comp.filetransfer.upload.desc\",\"상단 그리드의 추가 버튼을 클릭하면 파일 탐색기가 실행됩니다. 업로드 하고자 하는 파일을 선택하여 ( 컨트롤 키를 이용해 다중 선택 가능 ) 업로드 하고자 하는 파일을 리스트에 올려줍니다. 또는 운영체제에서 기본으로 제공해주는 탐색기에서 파일을 드래그하여 화면에 드랍하는 방식으로도 파일을 선택할 수 있습니다.\r\n\r\n잘못 선택된 파일은 리스트에서 파일을 선택하고 삭제 버튼을 클릭해 서버에 올라갈 리스트에서 제외 시킵니다.\r\n\r\n파일 선택이 완료 되면 전송 버튼을 눌러 파일을 서버에 업로드 합니다.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("comp.filetransfer.upload.desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","Static06:10","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"comp.filetransfer.download\",\"파일 다운로드\")");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.getSetter("messageid").set("comp.filetransfer.download");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","Static07:2",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"comp.filetransfer.download.desc\",\"하단 그리드의 조회 버튼을 클릭하면 서버에 업로드된 파일 리스트를 조회할 수 있습니다. 리스트에서 다운받고자 하는 파일을 선택하고 다운로드 버튼을 이용하여 파일을 내려받습니다.\")");
            obj.set_cssclass("sta_WF_txt15px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.getSetter("messageid").set("comp.filetransfer.download.desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("filetransfer_desc.xfdl", function() {

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
        this.loadIncludeScript("filetransfer_desc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
