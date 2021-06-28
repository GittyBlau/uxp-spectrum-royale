/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/Stepper.as
 * com.unhurdle.spectrum.Stepper
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.Stepper');
/* Royale Dependency List: com.unhurdle.spectrum.FieldButton,com.unhurdle.spectrum.Icon,com.unhurdle.spectrum.NumberField,com.unhurdle.spectrum.beads.KeyboardFocusHandler,com.unhurdle.spectrum.const.IconType,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.events.MouseEvent,org.apache.royale.html.elements.Span,org.apache.royale.utils.number.pinValue,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.SpectrumBase');
goog.require('com.unhurdle.spectrum.interfaces.IKeyboardFocusable');



/**
 * <inject_html>
 * <link rel="stylesheet" href="assets/css/components/stepper/dist.css">
 * </inject_html>
 * 
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 * @implements {com.unhurdle.spectrum.interfaces.IKeyboardFocusable}
 */
com.unhurdle.spectrum.Stepper = function() {
  com.unhurdle.spectrum.Stepper.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.Stepper, com.unhurdle.spectrum.SpectrumBase);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Stepper.prototype.loadBeads = function() {
  com.unhurdle.spectrum.Stepper.superClass_.loadBeads.apply(this);
  this.addBead(new com.unhurdle.spectrum.beads.KeyboardFocusHandler());
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Stepper.prototype.getSelector = function() {
  return "spectrum-Stepper";
};


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper_upButtonClicked = function(event) {
  event.preventDefault();
  this.com_unhurdle_spectrum_Stepper_nudgeValue(true);
};


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper_downButtonClicked = function(event) {
  event.preventDefault();
  this.com_unhurdle_spectrum_Stepper_nudgeValue(false);
};


/**
 * @private
 * @param {boolean} up
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper_nudgeValue = function(up) {
  var /** @type {number} */ stepVal = this.step;
  if (!up) {
    stepVal = -stepVal;
  }
  var /** @type {number} */ newVal = this.value + stepVal;
  var /** @type {number} */ rem = newVal % stepVal;
  rem = isNaN(rem) ? 0 : rem;
  this.value = org.apache.royale.utils.number.pinValue(newVal - rem, this.min, this.max);
  this.dispatchEvent(new org.apache.royale.events.Event("change"));
};


/**
 * @private
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper_inputChanged = function() {
  this.value = org.apache.royale.utils.number.pinValue(this.value, this.min, this.max);
};


/**
 * @private
 * @type {com.unhurdle.spectrum.NumberField}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper_input = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.FieldButton}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper_upButton = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.FieldButton}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper_downButton = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Stepper.prototype.createElement = function() {
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ elem = com.unhurdle.spectrum.Stepper.superClass_.createElement.apply(this);
  this.com_unhurdle_spectrum_Stepper_input = new com.unhurdle.spectrum.NumberField();
  this.com_unhurdle_spectrum_Stepper_input.className = this.appendSelector("-textfield");
  this.com_unhurdle_spectrum_Stepper_input.input.classList.add(this.appendSelector("-input"));
  this.com_unhurdle_spectrum_Stepper_input.min = Number.MIN_SAFE_INTEGER;
  this.com_unhurdle_spectrum_Stepper_input.max = Number.MAX_SAFE_INTEGER;
  this.com_unhurdle_spectrum_Stepper_input.addEventListener(org.apache.royale.events.Event.CHANGE, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Stepper_inputChanged, this, 'com_unhurdle_spectrum_Stepper_inputChanged'));
  this.addElement(this.com_unhurdle_spectrum_Stepper_input);
  var /** @type {org.apache.royale.html.elements.Span} */ span = new org.apache.royale.html.elements.Span();
  span.className = this.appendSelector("-buttons");
  this.com_unhurdle_spectrum_Stepper_upButton = this.com_unhurdle_spectrum_Stepper_getButton("-stepUp", com.unhurdle.spectrum.const.IconType.CHEVRON_UP_SMALL);
  this.com_unhurdle_spectrum_Stepper_upButton.addEventListener(org.apache.royale.events.MouseEvent.CLICK, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Stepper_upButtonClicked, this, 'com_unhurdle_spectrum_Stepper_upButtonClicked'));
  span.addElement(this.com_unhurdle_spectrum_Stepper_upButton);
  this.com_unhurdle_spectrum_Stepper_downButton = this.com_unhurdle_spectrum_Stepper_getButton("-stepDown", com.unhurdle.spectrum.const.IconType.CHEVRON_DOWN_SMALL);
  this.com_unhurdle_spectrum_Stepper_downButton.addEventListener(org.apache.royale.events.MouseEvent.CLICK, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Stepper_downButtonClicked, this, 'com_unhurdle_spectrum_Stepper_downButtonClicked'));
  span.addElement(this.com_unhurdle_spectrum_Stepper_downButton);
  this.addElement(span);
  return elem;
};


/**
 * @private
 * @param {string} selector
 * @param {string} type
 * @return {com.unhurdle.spectrum.FieldButton}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper_getButton = function(selector, type) {
  var /** @type {com.unhurdle.spectrum.FieldButton} */ button = new com.unhurdle.spectrum.FieldButton();
  button.tabFocusable = false;
  button.className = this.appendSelector(selector);
  button.icon = com.unhurdle.spectrum.Icon.getCSSTypeSelector(type);
  button.iconType = type;
  return button;
};


/**
 * @private
 * @type {number}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper__value = NaN;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper__focused = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper__keyboardFocused = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper__disabled = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Stepper.prototype.com_unhurdle_spectrum_Stepper__quiet = false;


/**
 * @nocollapse
 * @export
 * @type {HTMLElement}
 */
com.unhurdle.spectrum.Stepper.prototype.focusElement;


com.unhurdle.spectrum.Stepper.prototype.get__focusElement = function() {
  return this.com_unhurdle_spectrum_Stepper_input.focusElement;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Stepper.prototype.placeholder;


com.unhurdle.spectrum.Stepper.prototype.get__placeholder = function() {
  return this.com_unhurdle_spectrum_Stepper_input.placeholder;
};


com.unhurdle.spectrum.Stepper.prototype.set__placeholder = function(value) {
  this.com_unhurdle_spectrum_Stepper_input.placeholder = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.Stepper.prototype.value;


com.unhurdle.spectrum.Stepper.prototype.get__value = function() {
  return this.com_unhurdle_spectrum_Stepper_input.value;
};


com.unhurdle.spectrum.Stepper.prototype.set__value = function(value) {
  this.com_unhurdle_spectrum_Stepper_input.value = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.Stepper.prototype.min;


com.unhurdle.spectrum.Stepper.prototype.get__min = function() {
  return this.com_unhurdle_spectrum_Stepper_input.min;
};


com.unhurdle.spectrum.Stepper.prototype.set__min = function(value) {
  this.com_unhurdle_spectrum_Stepper_input.min = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.Stepper.prototype.max;


com.unhurdle.spectrum.Stepper.prototype.get__max = function() {
  return this.com_unhurdle_spectrum_Stepper_input.max;
};


com.unhurdle.spectrum.Stepper.prototype.set__max = function(value) {
  this.com_unhurdle_spectrum_Stepper_input.max = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.Stepper.prototype.step;


com.unhurdle.spectrum.Stepper.prototype.get__step = function() {
  return this.com_unhurdle_spectrum_Stepper_input.step;
};


com.unhurdle.spectrum.Stepper.prototype.set__step = function(value) {
  this.com_unhurdle_spectrum_Stepper_input.step = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Stepper.prototype.suffix;


com.unhurdle.spectrum.Stepper.prototype.get__suffix = function() {
  return this.com_unhurdle_spectrum_Stepper_input.suffix;
};


com.unhurdle.spectrum.Stepper.prototype.set__suffix = function(value) {
  this.com_unhurdle_spectrum_Stepper_input.suffix = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Stepper.prototype.focused;


com.unhurdle.spectrum.Stepper.prototype.get__focused = function() {
  return this.com_unhurdle_spectrum_Stepper__focused;
};


com.unhurdle.spectrum.Stepper.prototype.set__focused = function(value) {
  if (value != this.com_unhurdle_spectrum_Stepper__focused) {
    this.toggle("is-focused", value);
    if (value) {
      this.toggle("is-keyboardFocused", false);
    }
  }
  this.com_unhurdle_spectrum_Stepper__focused = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Stepper.prototype.keyboardFocused;


com.unhurdle.spectrum.Stepper.prototype.get__keyboardFocused = function() {
  return this.com_unhurdle_spectrum_Stepper__keyboardFocused;
};


com.unhurdle.spectrum.Stepper.prototype.set__keyboardFocused = function(value) {
  if (value != this.com_unhurdle_spectrum_Stepper__keyboardFocused) {
    this.toggle("is-keyboardFocused", value);
    if (value) {
      this.toggle("is-focused", false);
    }
  }
  this.com_unhurdle_spectrum_Stepper__keyboardFocused = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Stepper.prototype.disabled;


com.unhurdle.spectrum.Stepper.prototype.get__disabled = function() {
  return this.com_unhurdle_spectrum_Stepper__disabled;
};


com.unhurdle.spectrum.Stepper.prototype.set__disabled = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Stepper__disabled) {
    this.toggle("is-disabled", value);
    this.com_unhurdle_spectrum_Stepper_input.disabled = value;
    this.com_unhurdle_spectrum_Stepper_upButton.disabled = value;
    this.com_unhurdle_spectrum_Stepper_downButton.disabled = value;
  }
  this.com_unhurdle_spectrum_Stepper__disabled = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Stepper.prototype.quiet;


com.unhurdle.spectrum.Stepper.prototype.get__quiet = function() {
  return this.com_unhurdle_spectrum_Stepper__quiet;
};


com.unhurdle.spectrum.Stepper.prototype.set__quiet = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Stepper__quiet) {
    this.toggle(this.valueToSelector("quiet"), value);
    this.com_unhurdle_spectrum_Stepper_input.quiet = value;
    this.com_unhurdle_spectrum_Stepper_upButton.quiet = value;
    this.com_unhurdle_spectrum_Stepper_downButton.quiet = value;
  }
  this.com_unhurdle_spectrum_Stepper__quiet = value;
};


Object.defineProperties(com.unhurdle.spectrum.Stepper.prototype, /** @lends {com.unhurdle.spectrum.Stepper.prototype} */ {
/**
 * @type {HTMLElement}
 */
focusElement: {
get: com.unhurdle.spectrum.Stepper.prototype.get__focusElement},
/**
 * @type {string}
 */
placeholder: {
get: com.unhurdle.spectrum.Stepper.prototype.get__placeholder,
set: com.unhurdle.spectrum.Stepper.prototype.set__placeholder},
/**
 * @type {number}
 */
value: {
get: com.unhurdle.spectrum.Stepper.prototype.get__value,
set: com.unhurdle.spectrum.Stepper.prototype.set__value},
/**
 * @type {number}
 */
min: {
get: com.unhurdle.spectrum.Stepper.prototype.get__min,
set: com.unhurdle.spectrum.Stepper.prototype.set__min},
/**
 * @type {number}
 */
max: {
get: com.unhurdle.spectrum.Stepper.prototype.get__max,
set: com.unhurdle.spectrum.Stepper.prototype.set__max},
/**
 * @type {number}
 */
step: {
get: com.unhurdle.spectrum.Stepper.prototype.get__step,
set: com.unhurdle.spectrum.Stepper.prototype.set__step},
/**
 * @type {string}
 */
suffix: {
get: com.unhurdle.spectrum.Stepper.prototype.get__suffix,
set: com.unhurdle.spectrum.Stepper.prototype.set__suffix},
/**
 * @type {boolean}
 */
focused: {
get: com.unhurdle.spectrum.Stepper.prototype.get__focused,
set: com.unhurdle.spectrum.Stepper.prototype.set__focused},
/**
 * @type {boolean}
 */
keyboardFocused: {
get: com.unhurdle.spectrum.Stepper.prototype.get__keyboardFocused,
set: com.unhurdle.spectrum.Stepper.prototype.set__keyboardFocused},
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.Stepper.prototype.get__disabled,
set: com.unhurdle.spectrum.Stepper.prototype.set__disabled},
/**
 * @type {boolean}
 */
quiet: {
get: com.unhurdle.spectrum.Stepper.prototype.get__quiet,
set: com.unhurdle.spectrum.Stepper.prototype.set__quiet}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.Stepper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Stepper', qName: 'com.unhurdle.spectrum.Stepper', kind: 'class' }], interfaces: [com.unhurdle.spectrum.interfaces.IKeyboardFocusable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.Stepper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'focusElement': { type: 'HTMLElement', access: 'readonly', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'placeholder': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'value': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'min': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'max': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'step': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'suffix': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'focused': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'keyboardFocused': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'},
        'quiet': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Stepper'}
      };
    },
    methods: function () {
      return {
        'Stepper': { type: '', declaredBy: 'com.unhurdle.spectrum.Stepper'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Stepper.prototype.ROYALE_COMPILE_FLAGS = 11;
