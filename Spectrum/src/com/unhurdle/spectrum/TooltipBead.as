
package com.unhurdle.spectrum
{
	import org.apache.royale.core.IBead;
	import org.apache.royale.core.IPopUpHost;
	import org.apache.royale.core.IStrand;
	import org.apache.royale.core.IUIBase;
	import org.apache.royale.events.IEventDispatcher;
	import org.apache.royale.events.MouseEvent;
	import org.apache.royale.geom.Point;
	import org.apache.royale.utils.PointUtils;
	import org.apache.royale.utils.UIUtils;
	import com.unhurdle.spectrum.Tooltip;
	
	public class TooltipBead implements IBead
	{
		public function TooltipBead()
		{
		}
		/**
		 * TODO:
		 * warmup/cooldown
		 * start/end
		 * delay
		 * offset
		 * touch and hold on mobile
		 * (shouldflip is handled in AdaptiveTooltipBead)
		 * prevent multiple tooltips being shown (keep static reference to active tooltip)
		 * References:
		 * https://react-spectrum.adobe.com/react-spectrum/Tooltip.html
		 * https://spectrum.adobe.com/page/tooltip/
		 */

		public static const LEFT:String = "left";
		public static const RIGHT:String = "right";
		public static const BOTTOM:String = "bottom";
		public static const TOP:String = "top";

		private static var activeBead:TooltipBead;

		public static function closeTips():void{
			if(activeBead){
				activeBead.closeTooltip();
			}
		}

		protected var tt:Tooltip;
		protected var host:IPopUpHost;

		private var _autoClose:Number = 2000;

		/**
		 * Number of milliseconds to auto-close the tooltip
		 * 0 means it stays open
		 * Default is 2000
		 */
		public function get autoClose():Number
		{
			return _autoClose;
		}

		public function set autoClose(value:Number):void
		{
			_autoClose = value;
		}

		private var _toolTip:String;
		public function get toolTip():String
		{
			return _toolTip;
		}
		public function set toolTip(value:String):void
		{
			_toolTip = value;
		}

		private var _direction:String = TOP;
    [Inspectable(category="General", enumeration="left,right,bottom,top", defaultValue="top")]
		public function set direction(value:String):void
		{
			_direction = value;
			if (tt)
			{
				tt.direction = value;
			}
		}

		public function get direction():String
		{
			return _direction;
		}

		private var _tipPosition:String;

    /**
     * The position of the tip within the tooltip
     */
		public function get tipPosition():String{
			return _tipPosition;
		}

    [Inspectable(category="General", enumeration="start,end,center" defaultValue="center")]
		public function set tipPosition(value:String):void{
			_tipPosition = value;
			if (tt)
			{
				tt.tipPosition = value;
			}
		}

		protected var _strand:IStrand;

		public function set strand(value:IStrand):void
		{
			_strand = value;

			(_strand as IEventDispatcher).addEventListener(MouseEvent.MOUSE_OVER, rollOverHandler, false);
		}

		protected function rollOverHandler(event:MouseEvent):void
		{
			if(activeBead && activeBead != this){
				activeBead.closeTooltip();
			}
			if (!toolTip || tt){
				return;
			}

			activeBead = this;

			(_strand as IEventDispatcher).addEventListener(MouseEvent.MOUSE_OUT, rollOutHandler, false);

			var comp:IUIBase = _strand as IUIBase
			host = UIUtils.findPopUpHost(comp);
			if (tt)
				host.popUpParent.removeElement(tt);

			tt = new Tooltip();
			tt.direction = _direction;
			if(tipPosition){
				tt.tipPosition = tipPosition;
			}
			tt.setStyle("position","absolute");
			tt.text = toolTip;
			host.popUpParent.addElement(tt, false); // don't trigger a layout
			var ttWidth:Number = tt.width;
			var pt:Point = determinePosition(_strand as IUIBase, tt);
			tt.x = pt.x;
			tt.y = pt.y;
			tt.isOpen = true;
			if(ttWidth != tt.width){
				pt = determinePosition(_strand as IUIBase, tt);
				tt.x = pt.x;
				tt.y = pt.y;
			}
			if(_autoClose > 0){
				timeoutId = setTimeout(closeTooltip,_autoClose);
			}
		}
		private var timeoutId:Number = 0;

		protected function determinePosition(comp:IUIBase, tooltip:Tooltip):Point
		{
			var pt:Point = new Point();
			if (_direction == LEFT) {
				pt.x = -tooltip.width;
				pt.y = (comp.height - tooltip.height) / 2;
			} else if (_direction == TOP) {
				pt.x = (comp.width - tooltip.width) / 2;
				pt.y = -tooltip.height;
			} else if (_direction == RIGHT) {
				pt.x = comp.width;
				pt.y = (comp.height - tooltip.height) / 2;
			} else
			{
				pt.x = (comp.width - tooltip.width) / 2;
				pt.y = tooltip.height;
			}

			pt = PointUtils.localToGlobal(pt, comp);
			return pt;
		}

		protected function rollOutHandler(event:MouseEvent):void{
			if(timeoutId > 0){
				clearTimeout(timeoutId);
			}
			closeTooltip();
		}
		protected function closeTooltip():void{
			activeBead = null;
			(_strand as IEventDispatcher).removeEventListener(MouseEvent.MOUSE_OUT, rollOutHandler, false);

			var comp:IUIBase = _strand as IUIBase;
			if (tt) {
				host.popUpParent.removeElement(tt);
				tt = null;
			}
			timeoutId = 0;

		}
	}
}

