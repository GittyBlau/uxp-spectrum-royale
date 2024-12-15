package com.unhurdle.spectrum
{
  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import org.apache.royale.events.Event;
  import com.unhurdle.spectrum.utils.generateIcon;

  public class Tab extends SpectrumBase implements ITextContent
  {
    public function Tab()
    {
      super();
      addEventListener('click',onClick);
    }
    override protected function getSelector():String{
      return getTabsSelector() + "-item";
    }
    private var label:TextNode;
    private var overflowButton:HTMLElement;
    private var overflowIcon:Icon;
    private var _text:String;

    public function get text():String
    {
    	return _text;
    }

    public function set text(value:String):void
    {
    	_text = value;
      label.text = _text;
    }

    private var _icon:String;
    private var iconElement:Icon;

    /**
     * Icon selector name
     */
    public function get icon():String
    {
    	return _icon;
    }

    public function set icon(value:String):void
    {
    	_icon = value;
      if(iconElement){
        iconElement.selector = value;
        iconElement.size = 'S';
      } else {
        iconElement = generateIcon(value);
        iconElement.size = 'S';
        addElementAt(iconElement,0);
      }
    }
    private var _selected:Boolean;

    public function get selected():Boolean
    {
    	return _selected;
    }

    public function set selected(value:Boolean):void{ 
      toggle("is-selected",value);
      _selected = value;
    }

    private function onClick(ev:Event):void{
      dispatchEvent(new Event("itemClicked"));
    }
    
    COMPILE::JS
    override protected function createElement():WrappedHTMLElement
    { 
      super.createElement();
      label = new TextNode("label");
      label.className = getTabsSelector() + "-itemLabel";
      label.element.style.userSelect = "none";
      label.element.style.webkitUserSelect = "none";
      label.element.style.MsUserSelect = "none";
      element.appendChild(label.element); //addElem
      element.tabIndex = 0;
      return element;
    }

  }
}
