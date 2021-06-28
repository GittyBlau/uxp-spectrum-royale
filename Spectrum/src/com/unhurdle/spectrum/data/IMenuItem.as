package com.unhurdle.spectrum.data
{
  public interface IMenuItem extends IListItem
  {
    function get isDivider():Boolean;
    function set isDivider(value:Boolean):void
    function get isOpen():Boolean;
    function set isOpen(value:Boolean):void
    function get isHeading():Boolean;
    function set isHeading(value:Boolean):void
    function get subMenu():Array
    function set subMenu(value:Array):void
  }
}