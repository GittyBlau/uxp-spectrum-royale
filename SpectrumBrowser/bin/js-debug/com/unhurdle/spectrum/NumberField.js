/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/NumberField.as
 * com.unhurdle.spectrum.NumberField
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.NumberField');
/* Royale Dependency List: com.unhurdle.spectrum.newElement,org.apache.royale.html.elements.Span,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.TextField');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.TextField}
 */
com.unhurdle.spectrum.NumberField = function() {
  com.unhurdle.spectrum.NumberField.base(this, 'constructor');
  this.input.type = "number";
  this.input.step = "1";
  this._input.addEventListener("input", org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_NumberField_handleInput, this, 'com_unhurdle_spectrum_NumberField_handleInput'));
};
goog.inherits(com.unhurdle.spectrum.NumberField, com.unhurdle.spectrum.TextField);


/**
 * @private
 * @type {number}
 */
com.unhurdle.spectrum.NumberField.prototype.com_unhurdle_spectrum_NumberField__value = NaN;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.NumberField.prototype.com_unhurdle_spectrum_NumberField__suffix = null;


/**
 * @private
 * @param {Event} ev
 */
com.unhurdle.spectrum.NumberField.prototype.com_unhurdle_spectrum_NumberField_handleInput = function(ev) {
  if (this.suffix && !isNaN(this.value)) {
    requestAnimationFrame(org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_NumberField_positionSuffix, this, 'com_unhurdle_spectrum_NumberField_positionSuffix'));
  } else if (this.com_unhurdle_spectrum_NumberField_suffixSpan) {
    this.com_unhurdle_spectrum_NumberField_suffixSpan.visible = false;
  }
};


/**
 * @private
 * @type {org.apache.royale.html.elements.Span}
 */
com.unhurdle.spectrum.NumberField.prototype.com_unhurdle_spectrum_NumberField_suffixSpan = null;


/**
 * @private
 */
com.unhurdle.spectrum.NumberField.prototype.com_unhurdle_spectrum_NumberField_positionSuffix = function() {
  var /** @type {number} */ paddingVal = NaN;
  if (!this.com_unhurdle_spectrum_NumberField_suffixSpan) {
    this.com_unhurdle_spectrum_NumberField_suffixSpan = new org.apache.royale.html.elements.Span();
    var /** @type {CSSStyleDeclaration} */ style = this.com_unhurdle_spectrum_NumberField_suffixSpan.element.style;
    style.pointerEvents = "none";
    style.position = "absolute";
    style.userSelect = "none";
    style.webkitUserSelect = "none";
    style.MsUserSelect = "none";
    style.whiteSpace = "pre-wrap";
    style.lineHeight = 1;
    this.com_unhurdle_spectrum_NumberField_suffixSpan.y = this.quiet ? 7 : 8;
    this.element.appendChild(this.com_unhurdle_spectrum_NumberField_suffixSpan.element);
  }
  this.com_unhurdle_spectrum_NumberField_suffixSpan.text = this.suffix;
  var /** @type {CSSStyleDeclaration} */ computed = getComputedStyle(this._input);
  var /** @type {string} */ fontString = computed.fontStyle + " " + computed.fontWeight + " " + computed.fontSize + " " + computed.fontFamily;
  var /** @type {number} */ width = com.unhurdle.spectrum.NumberField.getTextWidth(this.text, fontString);
  org.apache.royale.utils.Language.trace(width);
  //var /** @type {number} */ paddingVal = NaN;
  if (this.quiet) {
    paddingVal = 0;
  } else {
    var /** @type {Object} */ paddingStr = computed.direction == "ltr" ? computed.paddingLeft : computed.paddingRight;
    paddingVal = parseFloat(paddingStr) + 1;
  }
  org.apache.royale.utils.Language.trace(computed.direction);
  org.apache.royale.utils.Language.trace(computed.paddingLeft);
  this.com_unhurdle_spectrum_NumberField_suffixSpan.visible = true;
  this.com_unhurdle_spectrum_NumberField_suffixSpan.x = width + paddingVal;
};


/**
 * @private
 * @type {HTMLCanvasElement}
 */
com.unhurdle.spectrum.NumberField.canvas = null;


/**
 * @private
 * @param {string} text
 * @param {string} font
 * @return {number}
 */
com.unhurdle.spectrum.NumberField.getTextWidth = function(text, font) {
  if (!com.unhurdle.spectrum.NumberField.canvas) {
    com.unhurdle.spectrum.NumberField.canvas = com.unhurdle.spectrum.newElement('canvas');
  }
  var /** @type {CanvasRenderingContext2D} */ context = com.unhurdle.spectrum.NumberField.canvas.getContext("2d");
  context.font = font;
  var /** @type {TextMetrics} */ metrics = context.measureText(text);
  return metrics.width;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.NumberField.prototype.value;


com.unhurdle.spectrum.NumberField.prototype.get__value = function() {
  return Number(this.input.value);
};


com.unhurdle.spectrum.NumberField.prototype.set__value = function(value) {
  this.input.value = "" + value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.NumberField.prototype.min;


com.unhurdle.spectrum.NumberField.prototype.get__min = function() {
  return Number(this.input.min);
};


com.unhurdle.spectrum.NumberField.prototype.set__min = function(value) {
  this.input.min = "" + value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.NumberField.prototype.max;


com.unhurdle.spectrum.NumberField.prototype.get__max = function() {
  return Number(this.input.max);
};


com.unhurdle.spectrum.NumberField.prototype.set__max = function(value) {
  this.input.max = "" + value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.NumberField.prototype.step;


com.unhurdle.spectrum.NumberField.prototype.get__step = function() {
  return Number(this.input.step);
};


com.unhurdle.spectrum.NumberField.prototype.set__step = function(value) {
  this.input.step = "" + value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.NumberField.prototype.suffix;


com.unhurdle.spectrum.NumberField.prototype.get__suffix = function() {
  return this.com_unhurdle_spectrum_NumberField__suffix;
};


com.unhurdle.spectrum.NumberField.prototype.set__suffix = function(value) {
  this.com_unhurdle_spectrum_NumberField__suffix = value;
};


Object.defineProperties(com.unhurdle.spectrum.NumberField.prototype, /** @lends {com.unhurdle.spectrum.NumberField.prototype} */ {
/**
 * @type {number}
 */
value: {
get: com.unhurdle.spectrum.NumberField.prototype.get__value,
set: com.unhurdle.spectrum.NumberField.prototype.set__value},
/**
 * @type {number}
 */
min: {
get: com.unhurdle.spectrum.NumberField.prototype.get__min,
set: com.unhurdle.spectrum.NumberField.prototype.set__min},
/**
 * @type {number}
 */
max: {
get: com.unhurdle.spectrum.NumberField.prototype.get__max,
set: com.unhurdle.spectrum.NumberField.prototype.set__max},
/**
 * @type {number}
 */
step: {
get: com.unhurdle.spectrum.NumberField.prototype.get__step,
set: com.unhurdle.spectrum.NumberField.prototype.set__step},
/**
 * @type {string}
 */
suffix: {
get: com.unhurdle.spectrum.NumberField.prototype.get__suffix,
set: com.unhurdle.spectrum.NumberField.prototype.set__suffix}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.NumberField.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'NumberField', qName: 'com.unhurdle.spectrum.NumberField', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.NumberField.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'value': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.NumberField'},
        'min': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.NumberField'},
        'max': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.NumberField'},
        'step': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.NumberField'},
        'suffix': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.NumberField'}
      };
    },
    methods: function () {
      return {
        'NumberField': { type: '', declaredBy: 'com.unhurdle.spectrum.NumberField'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.NumberField.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.unhurdle.spectrum.NumberField.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.unhurdle.spectrum.NumberField);
