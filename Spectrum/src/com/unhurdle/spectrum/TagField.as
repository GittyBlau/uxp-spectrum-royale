package com.unhurdle.spectrum
{
  COMPILE::JS {
    import org.apache.royale.core.WrappedHTMLElement;
    import org.apache.royale.html.util.addElementToWrapper;
  }
  import org.apache.royale.core.IHasLabelField;
  import org.apache.royale.events.Event;
  import org.apache.royale.events.MouseEvent;
  import org.apache.royale.geom.Point;
  import org.apache.royale.html.util.getLabelFromData;
  import org.apache.royale.utils.PointUtils;
 
  public class TagField extends Group implements IHasLabelField
  {
    public function TagField()
    {
      super();
      typeNames = "spectrum-Textfield-input";
    }
    
    private var input:TextField;
    private var tagGroup:TagGroup;

    public function get tags():Array
    {
    	return tagGroup.tags;
    }
    
    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
      var elem:WrappedHTMLElement = addElementToWrapper(this,'div');
      tagGroup = new TagGroup();
      tagGroup.setStyle("display","inline");
      tagGroup.height = 19;
      elem.appendChild(tagGroup.element);
      input = new TextField();
      input.setStyle("display","inline-block");
      input.addEventListener("onBackspace",removeTag);
      input.addEventListener("onEnter",inputChanged);
      input.input.style.borderStyle = "none";
      input.input.style.background = "none";
      input.height = 32;
      // elem.appendChild(input.element);
      input.tabFocusable = false;
      tagGroup.addElement(input);
      return elem;
    }

    override public function addedToParent():void{
      super.addedToParent();
      calculatePosition();
    }

    /**
     * @royaleignorecoercion com.unhurdle.spectrum.Tag
     */
    public var picker:Picker;
    public var popover:ComboBoxList;
    private var valuesArr:Array = [];
    private var ind:Number = 0;
    private function selectValue(ev:Event):void{
      var type:String = ev.type;
      if(valuesArr.length && valuesArr.length > 1){
        var len:int = valuesArr.length;
        for(var index:int = 0; index < len; index++)
        {
          var t:String = valuesArr[index];
          if(t.toLowerCase().indexOf(input.text.toLowerCase()) == 0){
            switch(type)
            {
              case "onArrowDown":
                ind = index + 1;
                break;
              case "onArrowUp":
                ind = index - 1;
                break;
            }
            break;
          }
        }
        if(ind == -1){
          ind = valuesArr.length - 1;
        }else if(ind == valuesArr.length){
          ind = 0;
        }
        input.text = valuesArr[ind];
      }
    }
    private function updateValue():void{
      var arr:Array = [];
      valuesArr = [];
      if(input.text){
        valuesArr.push(input.text);
        var len:int = tagList.length;
        var labels:Array = labelList;
        for(var i:int = 0; i < len; i++)
        {
          var t:String = _labelList[i];
          if(labels[i].toLowerCase().indexOf(input.text.toLowerCase()) == 0){
            arr.push(t);
            valuesArr.push(t);
          }
        }
      }
      if(picker){
        if(!!arr.length){
          if(!popover){
            createPopover();
          }
          picker.dataProvider = arr;
          popover.x = popover.y = 0;
          popover.open = true;
          popover.list.focus();
          COMPILE::JS
          {
            requestAnimationFrame(positionPopup);
          }
     }else{
          closePopup();
        }
      }
      calculatePosition();
    }

    public function createPopover():void{
      popover = new ComboBoxList();
      picker.popover = popover;
      popover.width = input.width;
      picker.addEventListener("change",handleMenuChange);
    }

    private function handleMenuChange(ev:Event):void{
      closePopup();
      dispatchEvent(new Event("change"));
    }

    protected function closePopup():void{
      if(popover && popover.open){
  			popover.open = false;
        popover.list.blur();
      }
    }
    protected function handleTopMostEventDispatcherMouseDown(event:MouseEvent):void{
			picker.popover.open = false;
		}

    protected function positionPopup():void{
      var origin:Point = new Point(input.x, height);
      var relocated:Point = PointUtils.localToGlobal(origin,this);
      popover.x = relocated.x
      popover.y = relocated.y;
    }

    private function itemSelected(ev:Event):void{
      if(picker.selectedItem){
        addTag(picker.selectedItem.text);
      }
    }
    private function inputChanged():void{
      addTag(input.text);
    }
    private function addTag(text:String):void{
      if(text){
        if(picker){
          closePopup();
        }
        // var len:int = tagGroup.numElements;
        var tags:Array = tagGroup.tags;
        var len:int = tags.length;
        for(var index:int = 0; index < len; index++){
          // var element:Tag = tagGroup.getElementAt(index) as Tag;
          var element:Tag = tags[index];
          if(element.text == text){
            element.setStyle("visibility","hidden");
            input.text = "";
            setTimeout(function():void{
              element.setStyle("visibility","visible");
            },100);
            return;
          }
        }
        var foundInList:Boolean = false;
        if(_limitToList){
          for each(var t:* in tagList){
            if(getLabelFromData(this,t) == text){
              foundInList = true;
              break;
            }
          }
        }
        if(!_limitToList || foundInList){
          var tag:Tag = new Tag();
          tag.deletable = true;
          tag.text = text;
          input.text = "";
          tagGroup.addTag(tag);
        }
        // COMPILE::JS{
        // tag.element.className = null;
        // }
        // requestAnimationFrame(function():void{ tag.toggle('spectrum-Tags-item--deletable',true);calculatePosition();})
      } 
      calculatePosition();
    }

    private function calculatePosition():void {
      if(tagGroup.height > input.height){
        if(width - tagGroup.width < input.width){
          height = tagGroup.height + 50;
        } else{
          height = tagGroup.height + 30;
        }
      }else{
        height = input.height + 30;
      }
    }

    private var _tagList:Array;

    public function get tagList():Array{
    	return _tagList;
    }

    public function set tagList(value:Array):void{
    	_tagList = value;
      _labelList = null;
      picker.addEventListener('change',itemSelected);
      if(value){
        if(!picker){
          picker = new Picker();
          picker.addEventListener('change',itemSelected);
          // picker.button.visible = false;
          picker.width = 0;
          COMPILE::JS{
            addElement(picker);
            input.addEventListener("onArrowDown",selectValue);
            input.addEventListener("onArrowUp",selectValue);
            input.element.addEventListener("input",updateValue);
            topMostEventDispatcher.addEventListener(MouseEvent.MOUSE_DOWN, handleTopMostEventDispatcherMouseDown);
          }
        }
      }else{
        if(picker){
          picker.removeEventListener('change',itemSelected);
        }
        picker = null;
        COMPILE::JS{
          input.removeEventListener("onArrowDown",selectValue);
          input.removeEventListener("onArrowUp",selectValue);
          input.element.removeEventListener("input",updateValue);
          topMostEventDispatcher.removeEventListener(MouseEvent.MOUSE_DOWN, handleTopMostEventDispatcherMouseDown);
        }
      }
    }
    private var _labelList:Array;

    private function get labelList():Array{
      if(!_labelList){
        _labelList = [];
        for each(var tag:* in tagList){
          _labelList.push(getLabelFromData(this,tag));
        }
      }
    	return _labelList;
    }

    private function removeTag():void{
      var tags:Array = tagGroup.tags;
      if(!input.text && tags.length){
        tagGroup.removeElement(tags[tags.length-1]);
      }
      calculatePosition();
    }
    private var _labelField:String = "label";

    public function get labelField():String{
    	return _labelField;
    }
    public function set labelField(value:String):void{
    	_labelField = value;
    }
    private var _limitToList:Boolean;

    public function get limitToList():Boolean{
    	return _limitToList;
    }
    public function set limitToList(value:Boolean):void{
    	_limitToList = value;
    }
  }
}