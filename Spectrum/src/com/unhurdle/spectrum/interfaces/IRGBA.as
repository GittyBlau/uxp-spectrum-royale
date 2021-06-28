package com.unhurdle.spectrum.interfaces
{
  public interface IRGBA
  {
    function get r():Number;
    function set r(value:Number):void;
    function get g():Number;
    function set g(value:Number):void;
    function get b():Number;
    function set b(value:Number):void;
    function get alpha():Number;
    function set alpha(value:Number):void;
    function get colorValue():uint;
    function set colorValue(value:uint):void;
    function get styleString():String;
    function get hexString():String;
    function get isValid():Boolean;
    function clone():IRGBA;
    {
      
    }
  }
}