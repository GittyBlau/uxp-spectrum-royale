package com.unhurdle.spectrum
{
  COMPILE::JS{
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import com.unhurdle.spectrum.const.IconType;
  public class SplitButtonPagination extends SpectrumBase
  {
    //TODO this does not import the CSS
    public function SplitButtonPagination()
    {
      super();
      toggle(valueToSelector("left"),true);
      type = "primary";
      href = "";
      pagesNum = 1;
      selectedPage = 1;
    }

		override protected function getSelector():String{
				return "spectrum-SplitButton";
		}
    
    private var trigger:HTMLLinkElement;
    private var action:HTMLLinkElement;
    private var label:TextNode;

    override protected function getTag():String{
      return "nav";
    }

    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
      var elem:WrappedHTMLElement = super.createElement();
      var buttonBase:String = "spectrum-Button";
      trigger = newElement("a", buttonBase + " " + appendSelector("-trigger")) as HTMLLinkElement
      var triggerType:String = IconType.CHEVRON_LEFT_MEDIUM;
      var triggerCheckIcon:Icon = new Icon(Icon.getCSSTypeSelector(triggerType));
      triggerCheckIcon.type = triggerType;
      trigger.appendChild(triggerCheckIcon.element);
      trigger.addEventListener("click",prevPage);
      elem.appendChild(trigger);
      action = newElement("a",buttonBase + " " + appendSelector("-action")) as HTMLLinkElement
      label = new TextNode("span");
      label.className = buttonBase + "-label";
      label.text ="Next";
      action.appendChild(label.element);
      var actionType:String = IconType.CHEVRON_RIGHT_MEDIUM;
      var actionCheckIcon:Icon = new Icon(Icon.getCSSTypeSelector(actionType));
      actionCheckIcon.type = actionType;
      actionCheckIcon.className = appendSelector("-ChevronRightMedium");
      action.appendChild(actionCheckIcon.element);
      action.addEventListener("click",nextPage);
      elem.appendChild(action);
      return elem;
    }
    private var _href:String;

    public function get href():String
    {
    	return _href;
    }

    public function set href(value:String):void
    {
     if(value != !!_href){
      if(value){
      	_href = value;
      } else {
        _href = "";
        }
        COMPILE::JS
        {
          trigger.href = _href;
          action.href = _href;
        }
      }
    }
    private var _pagesNum:int;

    public function get pagesNum():int
    {
    	return _pagesNum;
    }

    public function set pagesNum(val:int):void
    {
        if(val){
        	_pagesNum = val;
        }
        enableOrDisable();
    }
    private function prevPage():void{
      selectedPage > 1? selectedPage--: selectedPage = 1;
    }
    private function nextPage():void{
      selectedPage < pagesNum? selectedPage++: selectedPage = pagesNum;
    }
    private function enableOrDisable():void{
      selectedPage == 1? trigger.classList.add("is-disabled"): trigger.classList.remove("is-disabled");
      selectedPage >= pagesNum? action.classList.add("is-disabled"): action.classList.remove("is-disabled");
    }
    private var _selectedPage:Number;

    public function get selectedPage():Number
    {
    	return _selectedPage;
    }

    public function set selectedPage(val:Number):void
    {
      if(val && val <= pagesNum){
      	_selectedPage = val;
      }
      enableOrDisable();
    }
    private var _type:String;

    public function get type():String
    {
      return _type;
    }

    [Inspectable(category="General", enumeration="cta,primary,secondary", defaultValue="primary")]
    public function set type(value:String):void
    {
      if(value != _type){
        switch (value){
        // check that values are valid
          case "cta":
          case "primary":
          case "secondary":
            break;
          default:
              throw new Error("Invalid type: " + value);
        }
        if(_type){
          var oldType:String = "spectrum-Button--" + _type;
  				trigger.classList.remove(oldType);
	  			action.classList.remove(oldType);
        }
				var newType:String = "spectrum-Button--" + value;
				trigger.classList.add(newType);
				action.classList.add(newType);
        _type = value;
      }
    }
   
    private var _text:String;

    public function get text():String
    {
    	return _text;
    }

    public function set text(value:String):void
    {
    	_text = value || "";
      label.text = _text;
    }
  }
}