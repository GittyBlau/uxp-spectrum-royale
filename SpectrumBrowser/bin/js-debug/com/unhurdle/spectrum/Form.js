/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/Form.as
 * com.unhurdle.spectrum.Form
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.Form');
/* Royale Dependency List: com.unhurdle.spectrum.includes.FieldLabelInclude*/

goog.require('com.unhurdle.spectrum.Group');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.Group}
 */
com.unhurdle.spectrum.Form = function() {
  com.unhurdle.spectrum.Form.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.Form, com.unhurdle.spectrum.Group);


/**
 * @nocollapse
 * @const
 * @type {string}
 */
com.unhurdle.spectrum.Form.TOP = "top";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
com.unhurdle.spectrum.Form.LEFT = "left";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
com.unhurdle.spectrum.Form.RIGHT = "right";


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Form.prototype.getSelector = function() {
  return com.unhurdle.spectrum.includes.FieldLabelInclude.getFormSelector();
};


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.Form.prototype.com_unhurdle_spectrum_Form__labelPosition = "right";


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Form.prototype.getTag = function() {
  return "form";
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Form.prototype.labelPosition;


com.unhurdle.spectrum.Form.prototype.get__labelPosition = function() {
  return this.com_unhurdle_spectrum_Form__labelPosition;
};


com.unhurdle.spectrum.Form.prototype.set__labelPosition = function(value) {
  if (this.com_unhurdle_spectrum_Form__labelPosition == value) {
    return;
  }
  switch (value) {
    case "top":
    
    case "left":
    
    case "right":
      break;
    default:
      return;
  }
  if (this.com_unhurdle_spectrum_Form__labelPosition == "top") {
    this.toggle(this.valueToSelector("labelsAbove"), false);
  }
  if (value == "top") {
    this.toggle(this.valueToSelector("labelsAbove"), true);
  }
  this.com_unhurdle_spectrum_Form__labelPosition = value;
};


Object.defineProperties(com.unhurdle.spectrum.Form.prototype, /** @lends {com.unhurdle.spectrum.Form.prototype} */ {
/**
 * @type {string}
 */
labelPosition: {
get: com.unhurdle.spectrum.Form.prototype.get__labelPosition,
set: com.unhurdle.spectrum.Form.prototype.set__labelPosition}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.Form.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Form', qName: 'com.unhurdle.spectrum.Form', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.Form.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'labelPosition': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Form'}
      };
    },
    methods: function () {
      return {
        'Form': { type: '', declaredBy: 'com.unhurdle.spectrum.Form'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Form.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.unhurdle.spectrum.Form.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.unhurdle.spectrum.Form);
