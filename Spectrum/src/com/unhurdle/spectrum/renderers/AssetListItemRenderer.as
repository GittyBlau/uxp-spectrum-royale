package com.unhurdle.spectrum.renderers
{
  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import com.unhurdle.spectrum.CheckBox;
  import com.unhurdle.spectrum.Icon;
  import com.unhurdle.spectrum.TextNode;
  import com.unhurdle.spectrum.const.IconType;
  import com.unhurdle.spectrum.data.AssetListItem;

  import org.apache.royale.events.Event;
  import com.unhurdle.spectrum.utils.generateIcon;
  
  public class AssetListItemRenderer extends ListItemRenderer
  {
    public function AssetListItemRenderer()
    {
      super();
    }
    override protected function getSelector():String{
      return "spectrum-AssetList";
    }

    COMPILE::JS
    override public function set data(value:Object):void{
      super.data = value;
      var assetListItem:AssetListItem;
      assetListItem = value as AssetListItem;
      toggle(appendSelector("-item"),true);
      setSelectable();
      if(icon){
        icon.toggle(appendSelector("-itemThumbnail"),true);
      }
      if(imageIcon){
        imageIcon.toggle(appendSelector("-itemThumbnail"),true);
      }
      //TODO submenus
      if(assetListItem.isBranch){
        toggle("is-branch",true);
        var type:String = IconType.CHEVRON_RIGHT_MEDIUM;
        var branchIcon:Icon = generateIcon(type);
        branchIcon.type = type;
        branchIcon.className = appendSelector("-itemChildIndicator");
        addElement(branchIcon);
      }
      // (element as HTMLElement).classList.toggle("is-selected",false);
      // addEventListener("itemClicked",itemClicked);
      
    }
    private function handleCheckClick(event:Event):void{
      setSelected(checkBox.checked);
      event.stopImmediatePropagation();
      trace(event);
    }
    private function setSelectable():void{
      if(getSelectable()){
        toggle("is-selectable",true);
        if(!checkBox){
          checkBox = new CheckBox();
          checkBox.checked = getSelected();
          checkBox.addEventListener("click",handleCheckClick)
          addElementAt(checkBox,0);
          firstElementPosition = 1;
        }
      } else{
        toggle("is-selectable",false);
        if(checkBox){
          checkBox.removeEventListener("click",handleCheckClick);
          removeElement(checkBox);
          checkBox = null;
          firstElementPosition = 0;
        }

      }
    }

    private function getSelectable():Boolean{
      if(data is AssetListItem){
        return (data as AssetListItem).selectable;
      }
      return data["selectable"];
    }

    private function setSelected(value:Boolean):void{
      if(data is AssetListItem){
        (data as AssetListItem).selected = value;
      }
      if(!(data is String)){
        data["selected"] = value;

      }
    }
    private function getSelected():Boolean{
      if(data is AssetListItem){
        return (data as AssetListItem).selected;
      }
      return data["selected"];
    }

    //TODO is this right???
    // override public function set selected(value:Boolean):void{
    //   super.selected = value;
    //   COMPILE::JS
    //   {
    //     if(value){
    //       (parent as IEventDispatcher).dispatchEvent(new ValueEvent("itemClicked",data));
    //     } 
    //   }
    // }
    private var image:HTMLImageElement;
    private var iconImage:Icon;
    private var checkBox:CheckBox;

    override protected function getTag():String{
      return "li";
    }

    COMPILE::JS
    override protected function createElement():WrappedHTMLElement
    {
      var elem:WrappedHTMLElement = super.createElement();

      textNode = new TextNode("span");
      textNode.className = appendSelector("-itemLabel");
      elem.appendChild(textNode.element);
      //TODO submenus
      // var type:String = IconType.CHEVRON_RIGHT_MEDIUM;
      // var icon:Icon = new Icon(Icon.getCSSTypeSelector(type));
      // icon.type = type;
      // icon.className = appendSelector("-itemChildIndicator");
      // addElement(icon);
      
      return elem;
    }


    // private function itemClicked(ev:*):void
    // {
    //   checkBox.checked = (element as HTMLElement).classList.toggle("is-selected");
    // }
  }
}