/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/ActionMenu.as
 * com.unhurdle.spectrum.ActionMenu
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.ActionMenu');
/* Royale Dependency List: com.unhurdle.spectrum.const.IconPrefix,com.unhurdle.spectrum.data.MenuItem,org.apache.royale.collections.IArrayList,org.apache.royale.core.IParentIUIBase,org.apache.royale.core.IPopUpHost,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.MouseEvent,org.apache.royale.geom.Point,org.apache.royale.html.util.getLabelFromData,org.apache.royale.utils.PointUtils,org.apache.royale.utils.UIUtils,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.ActionButton');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.ActionButton}
 */
com.unhurdle.spectrum.ActionMenu = function() {
  com.unhurdle.spectrum.ActionMenu.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.ActionMenu, com.unhurdle.spectrum.ActionButton);


/**
 * @nocollapse
 * @const
 * @type {string}
 */
com.unhurdle.spectrum.ActionMenu.BEFORE_SHOW = "beforeShow";


/**
 * @nocollapse
 * @type {com.unhurdle.spectrum.ActionMenu}
 */
com.unhurdle.spectrum.ActionMenu._openMenu = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ActionMenu.prototype.createFlyoutIcon = function() {
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ActionMenu.prototype.createElement = function() {
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ elem = com.unhurdle.spectrum.ActionMenu.superClass_.createElement.apply(this);
  this.icon = com.unhurdle.spectrum.const.IconPrefix._18 + "More";
  this.addEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionMenu_toggleMenu, this, 'com_unhurdle_spectrum_ActionMenu_toggleMenu'));
  return elem;
};


/**
 * @private
 * @param {Object} value
 */
com.unhurdle.spectrum.ActionMenu.prototype.com_unhurdle_spectrum_ActionMenu_convertArray = function(value) {
  var /** @type {number} */ len = (value["length"]) >> 0;
  for (var /** @type {number} */ i = 0; i < len; i++) {
    if (org.apache.royale.utils.Language.is(value[i], com.unhurdle.spectrum.data.MenuItem)) {
      continue;
    }
    var /** @type {com.unhurdle.spectrum.data.MenuItem} */ item = new com.unhurdle.spectrum.data.MenuItem(org.apache.royale.html.util.getLabelFromData(this, value[i]));
    value[i] = item;
  }
};


/**
 * @private
 * @param {org.apache.royale.events.MouseEvent} event
 */
com.unhurdle.spectrum.ActionMenu.prototype.com_unhurdle_spectrum_ActionMenu_toggleMenu = function(event) {
  if (event.button != 0) {
    return;
  }
  event.preventDefault();
  if (!this.showEmptyMenu && (!this.dataProvider || !this.dataProvider["length"])) {
    return;
  }
  if (com.unhurdle.spectrum.ActionMenu._openMenu && com.unhurdle.spectrum.ActionMenu._openMenu != this) {
    com.unhurdle.spectrum.ActionMenu._openMenu.closePopup();
  }
  event.stopImmediatePropagation();
  var /** @type {boolean} */ shown = !!(this.popover && this.popover.open);
  if (shown) {
    this.closePopup();
  } else {
    this.showMenu();
  }
};


/**
 * @override
 */
com.unhurdle.spectrum.ActionMenu.prototype.showMenu = function() {
  com.unhurdle.spectrum.ActionMenu.superClass_.showMenu.apply(this);
  this.selected = true;
  com.unhurdle.spectrum.ActionMenu._openMenu = this;
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ActionMenu.prototype.positionPopup = function() {
  var /** @type {number} */ popoverWidth = this.popover.width + 1;
  var /** @type {org.apache.royale.core.IPopUpHost} */ popupHost = org.apache.royale.utils.UIUtils.findPopUpHost(this);
  var /** @type {org.apache.royale.geom.Point} */ offset = org.apache.royale.utils.PointUtils.localToGlobal(new org.apache.royale.geom.Point(), popupHost);
  var /** @type {org.apache.royale.geom.Point} */ origin = new org.apache.royale.geom.Point(0, this.height - 6);
  var /** @type {org.apache.royale.geom.Point} */ relocated = org.apache.royale.utils.PointUtils.localToGlobal(origin, this);
  relocated.x -= offset.x;
  relocated.y -= offset.y;
  this.popover.y = this.determinePosition(relocated.y);
  this.popover.x = relocated.x;
  if (this.com_unhurdle_spectrum_ActionMenu__alignRight && popoverWidth > this.width) {
    this.popover.x -= popoverWidth - this.width;
  }
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ActionMenu.prototype.closePopup = function() {
  com.unhurdle.spectrum.ActionMenu.superClass_.closePopup.apply(this);
  this.selected = false;
  com.unhurdle.spectrum.ActionMenu._openMenu = null;
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.ActionMenu.prototype.com_unhurdle_spectrum_ActionMenu__alignRight = false;


/**
 * @param {number} ptY
 * @return {number}
 */
com.unhurdle.spectrum.ActionMenu.prototype.determinePosition = function(ptY) {
  var /** @type {number} */ screenHeight = org.apache.royale.utils.UIUtils.findPopUpHost(this).popUpParent.height;
  var /** @type {number} */ h = this.popover.height;
  if (ptY + h > screenHeight) {
    ptY -= (h + this.height - 7);
    this.popover.position = "top";
  } else {
    ptY += 5;
    this.popover.position = "bottom";
  }
  return ptY;
};


com.unhurdle.spectrum.ActionMenu.prototype.set__dataProvider = function(value) {
  if (org.apache.royale.utils.Language.is(value, Array)) {
    this.com_unhurdle_spectrum_ActionMenu_convertArray(value);
  } else if (org.apache.royale.utils.Language.is(value, org.apache.royale.collections.IArrayList)) {
    this.com_unhurdle_spectrum_ActionMenu_convertArray(value["source"]);
  }
  com.unhurdle.spectrum.ActionMenu.superClass_.set__dataProvider.apply(this, [ value] );
  if (!this.popover) {
    this.createPopover();
  }
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ActionMenu.prototype.alignRight;


com.unhurdle.spectrum.ActionMenu.prototype.get__alignRight = function() {
  return this.com_unhurdle_spectrum_ActionMenu__alignRight;
};


com.unhurdle.spectrum.ActionMenu.prototype.set__alignRight = function(value) {
  this.com_unhurdle_spectrum_ActionMenu__alignRight = value;
};


Object.defineProperties(com.unhurdle.spectrum.ActionMenu.prototype, /** @lends {com.unhurdle.spectrum.ActionMenu.prototype} */ {
/**
 * @type {Object}
 */
dataProvider: {
get: com.unhurdle.spectrum.ActionButton.prototype.get__dataProvider,
set: com.unhurdle.spectrum.ActionMenu.prototype.set__dataProvider},
/**
 * @type {boolean}
 */
alignRight: {
get: com.unhurdle.spectrum.ActionMenu.prototype.get__alignRight,
set: com.unhurdle.spectrum.ActionMenu.prototype.set__alignRight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.ActionMenu.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ActionMenu', qName: 'com.unhurdle.spectrum.ActionMenu', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.ActionMenu.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|_openMenu': { type: 'com.unhurdle.spectrum.ActionMenu', get_set: function (/** * */ v) {return v !== undefined ? com.unhurdle.spectrum.ActionMenu._openMenu = v : com.unhurdle.spectrum.ActionMenu._openMenu;}}
      };
    },
    accessors: function () {
      return {
        'dataProvider': { type: 'Object', access: 'writeonly', declaredBy: 'com.unhurdle.spectrum.ActionMenu'},
        'alignRight': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ActionMenu'}
      };
    },
    methods: function () {
      return {
        'ActionMenu': { type: '', declaredBy: 'com.unhurdle.spectrum.ActionMenu'},
        'showMenu': { type: 'void', declaredBy: 'com.unhurdle.spectrum.ActionMenu'},
        'determinePosition': { type: 'Number', declaredBy: 'com.unhurdle.spectrum.ActionMenu', parameters: function () { return [ 'Number', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.ActionMenu.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.unhurdle.spectrum.ActionMenu.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.unhurdle.spectrum.ActionMenu);
