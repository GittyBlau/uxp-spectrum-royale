package com.unhurdle.spectrum
{
  import org.apache.royale.html.beads.models.ArraySelectionModel;
  import org.apache.royale.core.IBead;
  import org.apache.royale.events.Event;

  public class ComboBoxModel extends ArraySelectionModel implements IBead, IComboBoxModel
  {
    public function ComboBoxModel()
    {
      
    }
    private var _text:String;
		/**
		 *  The string to display in the org.apache.royale.html.ComboBox input field.
		 * 
		 *  @copy org.apache.royale.core.IComboBoxModel#text
		 *  
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion Royale 0.0
		 */
		public function get text():String
		{
			return _text;
		}
		
		public function set text(value:String):void
		{
			if (value != _text)
			{
				_text = value;
				dispatchEvent(new Event("textChange"));
			}
		}
    private var _limitToList:Boolean;
    public function get limitToList():Boolean{
      return _limitToList;
    }
    public function set limitToList(value:Boolean):void{
      _limitToList = value;
    }
    private var _placeholder:String = "";
		public function get placeholder():String{
      return _placeholder;
    }
		public function set placeholder(value:String):void{
      _placeholder = value;
			dispatchEvent(new Event("placeholderChange"));
    }

    private var _pattern:String = "";
		public function get pattern():String{
      return _pattern;
    }
		public function set pattern(value:String):void{
      _pattern = value;
      dispatchEvent(new Event("patternChange"));
    }

		private var _required:Boolean = false;
    public function get required():Boolean{
      return _required;
    }
		public function set required(value:Boolean):void{
      _required = value;
      dispatchEvent(new Event("requiredChange"));
    }

		private var _disabled:Boolean = false;
    public function get disabled():Boolean{
      return _disabled;
    }
		public function set disabled(value:Boolean):void{
      _disabled = value;
      dispatchEvent(new Event("disabledChange"));
    }

		private var _quiet:Boolean = false;
    public function get quiet():Boolean{
      return _quiet;
    }
		public function set quiet(value:Boolean):void{
      _quiet = value;
      dispatchEvent(new Event("quietChange"));
    }

		private var _invalid:Boolean = false;
    public function get invalid():Boolean{
      return _invalid;
    }
		public function set invalid(value:Boolean):void{
      _invalid = value;
      dispatchEvent(new Event("invalidChange"));
    }

    private var _focused:Boolean;
    public function get focused():Boolean{
    	return _focused;
    }
    public function set focused(value:Boolean):void{
    	_focused = value;
      _keyboardFocused = false;
      dispatchEvent(new Event("focusChange"));
    }
    private var _keyboardFocused:Boolean;
    public function get keyboardFocused():Boolean{
    	return _keyboardFocused;
    }
    public function set keyboardFocused(value:Boolean):void{
    	_keyboardFocused = value;
      _focused = false;
      dispatchEvent(new Event("focusChange"));
    }

  }
}
