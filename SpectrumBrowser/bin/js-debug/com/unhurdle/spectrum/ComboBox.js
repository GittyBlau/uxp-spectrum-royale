/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/ComboBox.as
 * com.unhurdle.spectrum.ComboBox
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.ComboBox');
/* Royale Dependency List: com.unhurdle.spectrum.ComboBoxView,com.unhurdle.spectrum.IComboBoxModel,com.unhurdle.spectrum.beads.KeyboardFocusHandler,com.unhurdle.spectrum.data.IMenuItem,com.unhurdle.spectrum.includes.InputGroupInclude,org.apache.royale.collections.IArrayList,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.SpectrumBase');
goog.require('com.unhurdle.spectrum.interfaces.IKeyboardFocusable');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 * @implements {com.unhurdle.spectrum.interfaces.IKeyboardFocusable}
 */
com.unhurdle.spectrum.ComboBox = function() {
  
  this.filterFunction = function(input, dataProvider) {
    var self = this;
    var /** @type {Array} */ inArray = null;
    //var /** @type {Array} */ inArray = null;
    if (org.apache.royale.utils.Language.is(dataProvider, org.apache.royale.collections.IArrayList)) {
      inArray = dataProvider.source;
    } else {
      inArray = dataProvider;
    }
    input = input.toLowerCase();
    inArray = inArray.slice();
    return inArray.filter(function(item) {
      var /** @type {string} */ label = item.label;
      if (!label) {
        return false;
      }
      return label.toLowerCase().indexOf(input) != -1;
    });
  };
  com.unhurdle.spectrum.ComboBox.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.ComboBox, com.unhurdle.spectrum.SpectrumBase);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ComboBox.prototype.loadBeads = function() {
  com.unhurdle.spectrum.ComboBox.superClass_.loadBeads.apply(this);
  this.addBead(new com.unhurdle.spectrum.beads.KeyboardFocusHandler());
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ComboBox.prototype.getSelector = function() {
  return com.unhurdle.spectrum.includes.InputGroupInclude.getSelector();
};


/**
 * @private
 * @return {com.unhurdle.spectrum.IComboBoxModel}
 */
com.unhurdle.spectrum.ComboBox.prototype.com_unhurdle_spectrum_ComboBox_getModel = function() {
  return this.model;
};


/**
 * @private
 * @return {com.unhurdle.spectrum.ComboBoxView}
 */
com.unhurdle.spectrum.ComboBox.prototype.com_unhurdle_spectrum_ComboBox_getView = function() {
  return this.view;
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.ComboBox.prototype.com_unhurdle_spectrum_ComboBox__invalid = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.ComboBox.prototype.com_unhurdle_spectrum_ComboBox__quiet = false;


/**
 * @type {Function}
 */
com.unhurdle.spectrum.ComboBox.prototype.filterFunction = null;


/**
 * @nocollapse
 * @export
 * @type {HTMLElement}
 */
com.unhurdle.spectrum.ComboBox.prototype.focusElement;


com.unhurdle.spectrum.ComboBox.prototype.get__focusElement = function() {
  return this.com_unhurdle_spectrum_ComboBox_getView().textInputField.focusElement;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
com.unhurdle.spectrum.ComboBox.prototype.dataProvider;


com.unhurdle.spectrum.ComboBox.prototype.get__dataProvider = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().dataProvider;
};


com.unhurdle.spectrum.ComboBox.prototype.set__dataProvider = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().dataProvider = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.ComboBox.prototype.selectedIndex;


com.unhurdle.spectrum.ComboBox.prototype.get__selectedIndex = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().selectedIndex;
};


com.unhurdle.spectrum.ComboBox.prototype.set__selectedIndex = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().selectedIndex = value;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
com.unhurdle.spectrum.ComboBox.prototype.selectedItem;


com.unhurdle.spectrum.ComboBox.prototype.get__selectedItem = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().selectedItem;
};


com.unhurdle.spectrum.ComboBox.prototype.set__selectedItem = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().selectedItem = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ComboBox.prototype.placeholder;


com.unhurdle.spectrum.ComboBox.prototype.get__placeholder = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().placeholder;
};


com.unhurdle.spectrum.ComboBox.prototype.set__placeholder = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().placeholder = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ComboBox.prototype.pattern;


com.unhurdle.spectrum.ComboBox.prototype.get__pattern = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().pattern;
};


com.unhurdle.spectrum.ComboBox.prototype.set__pattern = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().pattern = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ComboBox.prototype.required;


com.unhurdle.spectrum.ComboBox.prototype.get__required = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().required;
};


com.unhurdle.spectrum.ComboBox.prototype.set__required = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().required = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ComboBox.prototype.disabled;


com.unhurdle.spectrum.ComboBox.prototype.get__disabled = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().disabled;
};


com.unhurdle.spectrum.ComboBox.prototype.set__disabled = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().disabled = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ComboBox.prototype.invalid;


com.unhurdle.spectrum.ComboBox.prototype.get__invalid = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().invalid;
};


com.unhurdle.spectrum.ComboBox.prototype.set__invalid = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().invalid = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ComboBox.prototype.quiet;


com.unhurdle.spectrum.ComboBox.prototype.get__quiet = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().quiet;
};


com.unhurdle.spectrum.ComboBox.prototype.set__quiet = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().quiet = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ComboBox.prototype.focused;


com.unhurdle.spectrum.ComboBox.prototype.get__focused = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().focused;
};


com.unhurdle.spectrum.ComboBox.prototype.set__focused = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().focused = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ComboBox.prototype.keyboardFocused;


com.unhurdle.spectrum.ComboBox.prototype.get__keyboardFocused = function() {
  return this.com_unhurdle_spectrum_ComboBox_getModel().keyboardFocused;
};


com.unhurdle.spectrum.ComboBox.prototype.set__keyboardFocused = function(value) {
  this.com_unhurdle_spectrum_ComboBox_getModel().keyboardFocused = value;
};


Object.defineProperties(com.unhurdle.spectrum.ComboBox.prototype, /** @lends {com.unhurdle.spectrum.ComboBox.prototype} */ {
/**
 * @type {HTMLElement}
 */
focusElement: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__focusElement},
/**
 * @type {Object}
 */
dataProvider: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__dataProvider,
set: com.unhurdle.spectrum.ComboBox.prototype.set__dataProvider},
/**
 * @type {number}
 */
selectedIndex: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__selectedIndex,
set: com.unhurdle.spectrum.ComboBox.prototype.set__selectedIndex},
/**
 * @type {Object}
 */
selectedItem: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__selectedItem,
set: com.unhurdle.spectrum.ComboBox.prototype.set__selectedItem},
/**
 * @type {string}
 */
placeholder: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__placeholder,
set: com.unhurdle.spectrum.ComboBox.prototype.set__placeholder},
/**
 * @type {string}
 */
pattern: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__pattern,
set: com.unhurdle.spectrum.ComboBox.prototype.set__pattern},
/**
 * @type {boolean}
 */
required: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__required,
set: com.unhurdle.spectrum.ComboBox.prototype.set__required},
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__disabled,
set: com.unhurdle.spectrum.ComboBox.prototype.set__disabled},
/**
 * @type {boolean}
 */
invalid: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__invalid,
set: com.unhurdle.spectrum.ComboBox.prototype.set__invalid},
/**
 * @type {boolean}
 */
quiet: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__quiet,
set: com.unhurdle.spectrum.ComboBox.prototype.set__quiet},
/**
 * @type {boolean}
 */
focused: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__focused,
set: com.unhurdle.spectrum.ComboBox.prototype.set__focused},
/**
 * @type {boolean}
 */
keyboardFocused: {
get: com.unhurdle.spectrum.ComboBox.prototype.get__keyboardFocused,
set: com.unhurdle.spectrum.ComboBox.prototype.set__keyboardFocused}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.ComboBox.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ComboBox', qName: 'com.unhurdle.spectrum.ComboBox', kind: 'class' }], interfaces: [com.unhurdle.spectrum.interfaces.IKeyboardFocusable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.ComboBox.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'filterFunction': { type: 'Function', get_set: function (/** com.unhurdle.spectrum.ComboBox */ inst, /** * */ v) {return v !== undefined ? inst.filterFunction = v : inst.filterFunction;}}
      };
    },
    accessors: function () {
      return {
        'focusElement': { type: 'HTMLElement', access: 'readonly', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] } ]; }},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'change' } ] } ]; }},
        'placeholder': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'pattern': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'required': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'invalid': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'quiet': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'focused': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'},
        'keyboardFocused': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ComboBox'}
      };
    },
    methods: function () {
      return {
        'ComboBox': { type: '', declaredBy: 'com.unhurdle.spectrum.ComboBox'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.ComboBox.prototype.ROYALE_COMPILE_FLAGS = 11;
