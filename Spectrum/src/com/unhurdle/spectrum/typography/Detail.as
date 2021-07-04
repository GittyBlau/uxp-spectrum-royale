package com.unhurdle.spectrum.typography
{
  import org.apache.royale.html.elements.Span;

  COMPILE::JS
  {
  }
  //TODO
  //*light

  public class Detail extends Typography
  {
    public function Detail()
    {
      super();
    }

    override protected function getTag():String{
      return "sp-detail";
    }

    override protected function getSizes():Array{
      return[
        "S",
        "M",
        "L",
        "XL",
      ];
    }
    /**
     * override to set the correct enumerations
     */
    [Inspectable(category="General", enumeration="XS,S,M,L,XL", defaultValue="L")]
    override public function set size(value:String):void{
      super.size = value;
    }

    private var _light:Boolean;

    public function get light():Boolean
    {
    	return _light;
    }

    public function set light(value:Boolean):void
    {
      if(value != !!_light){
        // toggle(valueToSelector("light"),value);
				if(value){
					setAttribute("light",true);
				}else{
					removeAttribute("light");
				}
      }
      _light = value;
    }
  }
}