/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/IComboBoxModel.as
 * com.unhurdle.spectrum.IComboBoxModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.IComboBoxModel');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IBeadModel');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 * @extends {org.apache.royale.core.IBeadModel}
 */
com.unhurdle.spectrum.IComboBoxModel = function() {
};
/**  * @type {string}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.text;
/**  * @type {Object}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.dataProvider;
/**  * @type {number}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.selectedIndex;
/**  * @type {Object}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.selectedItem;
/**  * @type {string}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.placeholder;
/**  * @type {string}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.pattern;
/**  * @type {boolean}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.required;
/**  * @type {boolean}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.disabled;
/**  * @type {boolean}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.quiet;
/**  * @type {boolean}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.invalid;
/**  * @type {boolean}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.focused;
/**  * @type {boolean}
 */com.unhurdle.spectrum.IComboBoxModel.prototype.keyboardFocused;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.IComboBoxModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IComboBoxModel', qName: 'com.unhurdle.spectrum.IComboBoxModel', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IBeadModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.IComboBoxModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'placeholder': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'pattern': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'required': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'quiet': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'invalid': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'focused': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'},
        'keyboardFocused': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.IComboBoxModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.IComboBoxModel.prototype.ROYALE_COMPILE_FLAGS = 11;
