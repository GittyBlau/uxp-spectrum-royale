/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/ShowOnOverTooltip.as
 * com.unhurdle.spectrum.ShowOnOverTooltip
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.ShowOnOverTooltip');
/* Royale Dependency List: com.unhurdle.spectrum.TextNode,com.unhurdle.spectrum.Tooltip,org.apache.royale.core.WrappedHTMLElement*/

goog.require('com.unhurdle.spectrum.SpectrumBase');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 */
com.unhurdle.spectrum.ShowOnOverTooltip = function() {
  com.unhurdle.spectrum.ShowOnOverTooltip.base(this, 'constructor');
  this.typeNames = "u-tooltip-showOnHover";
};
goog.inherits(com.unhurdle.spectrum.ShowOnOverTooltip, com.unhurdle.spectrum.SpectrumBase);


/**
 * @private
 * @type {com.unhurdle.spectrum.TextNode}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.com_unhurdle_spectrum_ShowOnOverTooltip_textNode = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.Tooltip}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.getTag = function() {
  return "span";
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.createElement = function() {
  com.unhurdle.spectrum.ShowOnOverTooltip.superClass_.createElement.apply(this);
  this.com_unhurdle_spectrum_ShowOnOverTooltip_textNode = new com.unhurdle.spectrum.TextNode("");
  this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip = new com.unhurdle.spectrum.Tooltip();
  this.style = "margin: 15px 50px; cursor: default;";
  this.addElement(this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip);
  this.com_unhurdle_spectrum_ShowOnOverTooltip_textNode.element = this.element;
  return this.element;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.visibleText;


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__visibleText = function() {
  return this.com_unhurdle_spectrum_ShowOnOverTooltip_textNode.text;
};


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__visibleText = function(value) {
  this.com_unhurdle_spectrum_ShowOnOverTooltip_textNode.text = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.text;


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__text = function() {
  return this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.text;
};


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__text = function(value) {
  this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.text = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.flavor;


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__flavor = function() {
  return this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.flavor;
};


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__flavor = function(value) {
  this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.flavor = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.icon;


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__icon = function() {
  return this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.icon;
};


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__icon = function(value) {
  this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.icon = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.direction;


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__direction = function() {
  return this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.direction;
};


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__direction = function(value) {
  this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.direction = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.isOpen;


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__isOpen = function() {
  return this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.isOpen;
};


com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__isOpen = function(value) {
  this.com_unhurdle_spectrum_ShowOnOverTooltip_toolTip.isOpen = value;
};


Object.defineProperties(com.unhurdle.spectrum.ShowOnOverTooltip.prototype, /** @lends {com.unhurdle.spectrum.ShowOnOverTooltip.prototype} */ {
/**
 * @type {string}
 */
visibleText: {
get: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__visibleText,
set: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__visibleText},
/**
 * @type {string}
 */
text: {
get: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__text,
set: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__text},
/**
 * @type {string}
 */
flavor: {
get: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__flavor,
set: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__flavor},
/**
 * @type {string}
 */
icon: {
get: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__icon,
set: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__icon},
/**
 * @type {string}
 */
direction: {
get: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__direction,
set: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__direction},
/**
 * @type {boolean}
 */
isOpen: {
get: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.get__isOpen,
set: com.unhurdle.spectrum.ShowOnOverTooltip.prototype.set__isOpen}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ShowOnOverTooltip', qName: 'com.unhurdle.spectrum.ShowOnOverTooltip', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'visibleText': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ShowOnOverTooltip'},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ShowOnOverTooltip'},
        'flavor': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ShowOnOverTooltip'},
        'icon': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ShowOnOverTooltip'},
        'direction': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ShowOnOverTooltip'},
        'isOpen': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ShowOnOverTooltip'}
      };
    },
    methods: function () {
      return {
        'ShowOnOverTooltip': { type: '', declaredBy: 'com.unhurdle.spectrum.ShowOnOverTooltip'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.ShowOnOverTooltip.prototype.ROYALE_COMPILE_FLAGS = 11;
