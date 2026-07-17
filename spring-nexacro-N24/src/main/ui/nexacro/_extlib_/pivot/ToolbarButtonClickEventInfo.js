//==============================================================================	
//	Define the EventInfo.
//==============================================================================	
//==============================================================================	
// Object : nexacro.ToolbarButtonClickEventInfo	
// Group : Object	
//==============================================================================	
if (!nexacro.ToolbarButtonClickEventInfo)	
{	
    nexacro.ToolbarButtonClickEventInfo = function(obj, id, postvalue, prevalue)	
    {	
        nexacro.ActionEventInfo.call(this, obj, id);
		
		this.set_postvalue(postvalue);
		this.set_prevalue(prevalue);
    };	
        	
    nexacro.ToolbarButtonClickEventInfo.prototype = nexacro._createPrototype(nexacro.ActionEventInfo, nexacro.ToolbarButtonClickEventInfo);	
    nexacro.ToolbarButtonClickEventInfo.prototype._type_name = "ToolbarButtonClickEventInfo";	
	
	nexacro.ToolbarButtonClickEventInfo.prototype.postvalue = -1;
    nexacro.ToolbarButtonClickEventInfo.prototype.set_postvalue = function (v)
    {
      if (this.postvalue != v) {
        this.postvalue = v;
      }
    };  
	
	nexacro.ToolbarButtonClickEventInfo.prototype.prevalue = -1;
    nexacro.ToolbarButtonClickEventInfo.prototype.set_prevalue = function (v)
    {
      if (this.prevalue != v) {
        this.prevalue = v;
      }
    };
}	
