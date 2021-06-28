/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/card/CardActionMenu.as
 * com.unhurdle.spectrum.card.CardActionMenu
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.card.CardActionMenu');
/* Royale Dependency List: com.unhurdle.spectrum.ActionMenu,com.unhurdle.spectrum.Popover,com.unhurdle.spectrum.card.getCardSelector,org.apache.royale.events.Event,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.Group');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.Group}
 */
com.unhurdle.spectrum.card.CardActionMenu = function() {
  com.unhurdle.spectrum.card.CardActionMenu.base(this, 'constructor');
  this.menu = new com.unhurdle.spectrum.ActionMenu();
  this.menu.addEventListener("change", org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_card_CardActionMenu_handleChange, this, 'com_unhurdle_spectrum_card_CardActionMenu_handleChange'));
  this.menu.addEventListener("beforeShow", org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_card_CardActionMenu_handleBeforeShow, this, 'com_unhurdle_spectrum_card_CardActionMenu_handleBeforeShow'));
  this.addElement(this.menu);
};
goog.inherits(com.unhurdle.spectrum.card.CardActionMenu, com.unhurdle.spectrum.Group);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.getSelector = function() {
  return com.unhurdle.spectrum.card.getCardSelector() + "-actionButton";
};


/**
 * @type {com.unhurdle.spectrum.ActionMenu}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.menu = null;


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.com_unhurdle_spectrum_card_CardActionMenu_handleChange = function(event) {
  this.dispatchEvent(event);
};


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.com_unhurdle_spectrum_card_CardActionMenu_handleBeforeShow = function(event) {
  this.dispatchEvent(new org.apache.royale.events.Event("beforeShow"));
};


/**
 * @private
 * @type {Object}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.com_unhurdle_spectrum_card_CardActionMenu__selectedItem = null;


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.dataProvider;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__dataProvider = function() {
  return this.menu.dataProvider;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__dataProvider = function(value) {
  this.menu.dataProvider = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.alignRight;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__alignRight = function() {
  return this.menu.alignRight;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__alignRight = function(value) {
  this.menu.alignRight = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.selectable;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__selectable = function() {
  return this.menu.selectable;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__selectable = function(value) {
  this.menu.selectable = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.selectedIndex;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__selectedIndex = function() {
  return this.menu.selectedIndex;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__selectedIndex = function(value) {
  this.menu.selectedIndex = value;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.selectedItem;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__selectedItem = function() {
  return this.menu.selectedItem;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__selectedItem = function(value) {
  this.menu.selectedItem = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.text;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__text = function() {
  return this.menu.text;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__text = function(value) {
  this.menu.text = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.icon;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__icon = function() {
  return this.menu.icon;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__icon = function(value) {
  this.menu.icon = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.iconClass;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__iconClass = function() {
  return this.menu.iconClass;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__iconClass = function(value) {
  this.menu.iconClass = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.iconSize;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__iconSize = function() {
  return this.menu.iconSize;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__iconSize = function(value) {
  this.menu.iconSize = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.iconType;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__iconType = function() {
  return this.menu.iconType;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__iconType = function(value) {
  this.menu.iconType = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.quiet;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__quiet = function() {
  return this.menu.quiet;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__quiet = function(value) {
  this.menu.quiet = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.disabled;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__disabled = function() {
  return this.menu.disabled;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__disabled = function(value) {
  this.menu.disabled = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.invalid;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__invalid = function() {
  return this.menu.invalid;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__invalid = function(value) {
  this.menu.invalid = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.selected;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__selected = function() {
  return this.menu.selected;
};


com.unhurdle.spectrum.card.CardActionMenu.prototype.set__selected = function(value) {
  this.menu.selected = value;
};


/**
 * @nocollapse
 * @export
 * @type {com.unhurdle.spectrum.Popover}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.popover;


com.unhurdle.spectrum.card.CardActionMenu.prototype.get__popover = function() {
  return this.menu.popover;
};


Object.defineProperties(com.unhurdle.spectrum.card.CardActionMenu.prototype, /** @lends {com.unhurdle.spectrum.card.CardActionMenu.prototype} */ {
/**
 * @type {Object}
 */
dataProvider: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__dataProvider,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__dataProvider},
/**
 * @type {boolean}
 */
alignRight: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__alignRight,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__alignRight},
/**
 * @type {boolean}
 */
selectable: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__selectable,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__selectable},
/**
 * @type {number}
 */
selectedIndex: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__selectedIndex,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__selectedIndex},
/**
 * @type {Object}
 */
selectedItem: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__selectedItem,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__selectedItem},
/**
 * @type {string}
 */
text: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__text,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__text},
/**
 * @type {string}
 */
icon: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__icon,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__icon},
/**
 * @type {string}
 */
iconClass: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__iconClass,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__iconClass},
/**
 * @type {string}
 */
iconSize: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__iconSize,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__iconSize},
/**
 * @type {string}
 */
iconType: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__iconType,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__iconType},
/**
 * @type {boolean}
 */
quiet: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__quiet,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__quiet},
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__disabled,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__disabled},
/**
 * @type {boolean}
 */
invalid: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__invalid,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__invalid},
/**
 * @type {boolean}
 */
selected: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__selected,
set: com.unhurdle.spectrum.card.CardActionMenu.prototype.set__selected},
/**
 * @type {com.unhurdle.spectrum.Popover}
 */
popover: {
get: com.unhurdle.spectrum.card.CardActionMenu.prototype.get__popover}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CardActionMenu', qName: 'com.unhurdle.spectrum.card.CardActionMenu', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'menu': { type: 'com.unhurdle.spectrum.ActionMenu', get_set: function (/** com.unhurdle.spectrum.card.CardActionMenu */ inst, /** * */ v) {return v !== undefined ? inst.menu = v : inst.menu;}}
      };
    },
    accessors: function () {
      return {
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'alignRight': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'selectable': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'icon': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'iconClass': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'iconSize': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'iconType': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'quiet': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'invalid': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'selected': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'},
        'popover': { type: 'com.unhurdle.spectrum.Popover', access: 'readonly', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'}
      };
    },
    methods: function () {
      return {
        'CardActionMenu': { type: '', declaredBy: 'com.unhurdle.spectrum.card.CardActionMenu'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.card.CardActionMenu.prototype.ROYALE_COMPILE_FLAGS = 11;
