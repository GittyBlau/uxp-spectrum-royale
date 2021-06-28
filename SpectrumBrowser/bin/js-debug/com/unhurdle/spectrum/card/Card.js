/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/card/Card.as
 * com.unhurdle.spectrum.card.Card
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.card.Card');
/* Royale Dependency List: com.unhurdle.spectrum.IAsset,com.unhurdle.spectrum.QuickActions,com.unhurdle.spectrum.card.CardBody,com.unhurdle.spectrum.card.CardFooter,com.unhurdle.spectrum.card.CoverPhoto,com.unhurdle.spectrum.card.getCardSelector,org.apache.royale.html.elements.Div*/

goog.require('com.unhurdle.spectrum.SpectrumBase');



/**
 * <inject_html>
 * <link rel="stylesheet" href="assets/css/components/card/dist.css">
 * </inject_html>
 * 
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 */
com.unhurdle.spectrum.card.Card = function() {
  com.unhurdle.spectrum.card.Card.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.card.Card, com.unhurdle.spectrum.SpectrumBase);


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__focused = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__selected = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__quiet = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__small = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__horizontal = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__gallery = false;


/**
 * @private
 * @type {com.unhurdle.spectrum.card.CoverPhoto}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card_coverPhoto = null;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__coverSrc = null;


/**
 * @private
 * @type {org.apache.royale.html.elements.Div}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card_previewDiv = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.IAsset}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__preview = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.card.CardBody}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__body = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.card.CardFooter}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__footer = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.QuickActions}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__actions = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.QuickActions}
 */
com.unhurdle.spectrum.card.Card.prototype.com_unhurdle_spectrum_card_Card__quickActions = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.card.Card.prototype.getSelector = function() {
  return com.unhurdle.spectrum.card.getCardSelector();
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.focused;


com.unhurdle.spectrum.card.Card.prototype.get__focused = function() {
  return this.com_unhurdle_spectrum_card_Card__focused;
};


com.unhurdle.spectrum.card.Card.prototype.set__focused = function(value) {
  if (value != this.com_unhurdle_spectrum_card_Card__focused) {
    this.toggle("is-focused", value);
  }
  this.com_unhurdle_spectrum_card_Card__focused = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.selected;


com.unhurdle.spectrum.card.Card.prototype.get__selected = function() {
  return this.com_unhurdle_spectrum_card_Card__selected;
};


com.unhurdle.spectrum.card.Card.prototype.set__selected = function(value) {
  if (value != this.com_unhurdle_spectrum_card_Card__selected) {
    this.toggle("is-selected", value);
  }
  this.com_unhurdle_spectrum_card_Card__selected = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.quiet;


com.unhurdle.spectrum.card.Card.prototype.get__quiet = function() {
  return this.com_unhurdle_spectrum_card_Card__quiet;
};


com.unhurdle.spectrum.card.Card.prototype.set__quiet = function(value) {
  if (value != !!this.com_unhurdle_spectrum_card_Card__quiet) {
    this.toggle(this.valueToSelector("quiet"), value);
  }
  this.com_unhurdle_spectrum_card_Card__quiet = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.small;


com.unhurdle.spectrum.card.Card.prototype.get__small = function() {
  return this.com_unhurdle_spectrum_card_Card__small;
};


com.unhurdle.spectrum.card.Card.prototype.set__small = function(value) {
  if (value != !!this.com_unhurdle_spectrum_card_Card__small) {
    this.toggle(this.valueToSelector("small"), value);
  }
  this.com_unhurdle_spectrum_card_Card__small = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.horizontal;


com.unhurdle.spectrum.card.Card.prototype.get__horizontal = function() {
  return this.com_unhurdle_spectrum_card_Card__horizontal;
};


com.unhurdle.spectrum.card.Card.prototype.set__horizontal = function(value) {
  if (value != !!this.com_unhurdle_spectrum_card_Card__horizontal) {
    this.toggle(this.valueToSelector("horizontal"), value);
  }
  this.com_unhurdle_spectrum_card_Card__horizontal = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.card.Card.prototype.gallery;


com.unhurdle.spectrum.card.Card.prototype.get__gallery = function() {
  return this.com_unhurdle_spectrum_card_Card__gallery;
};


com.unhurdle.spectrum.card.Card.prototype.set__gallery = function(value) {
  if (value != !!this.com_unhurdle_spectrum_card_Card__gallery) {
    this.toggle(this.valueToSelector("gallery"), value);
  }
  this.com_unhurdle_spectrum_card_Card__gallery = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.card.Card.prototype.coverSrc;


com.unhurdle.spectrum.card.Card.prototype.get__coverSrc = function() {
  return this.com_unhurdle_spectrum_card_Card__coverSrc;
};


com.unhurdle.spectrum.card.Card.prototype.set__coverSrc = function(value) {
  if (value != this.com_unhurdle_spectrum_card_Card__coverSrc) {
    if (this.com_unhurdle_spectrum_card_Card_coverPhoto) {
      this.com_unhurdle_spectrum_card_Card_coverPhoto.src = value;
    } else {
      this.com_unhurdle_spectrum_card_Card_coverPhoto = new com.unhurdle.spectrum.card.CoverPhoto(value);
      this.addElementAt(this.com_unhurdle_spectrum_card_Card_coverPhoto, 0);
    }
  }
  this.com_unhurdle_spectrum_card_Card__coverSrc = value;
};


/**
 * @nocollapse
 * @export
 * @type {com.unhurdle.spectrum.IAsset}
 */
com.unhurdle.spectrum.card.Card.prototype.preview;


com.unhurdle.spectrum.card.Card.prototype.get__preview = function() {
  return this.com_unhurdle_spectrum_card_Card__preview;
};


com.unhurdle.spectrum.card.Card.prototype.set__preview = function(value) {
  if (value == this.com_unhurdle_spectrum_card_Card__preview) {
    return;
  }
  if (!this.com_unhurdle_spectrum_card_Card_previewDiv) {
    var /** @type {number} */ index = 0;
    if (this.com_unhurdle_spectrum_card_Card_coverPhoto) {
      index = 1;
    }
    this.com_unhurdle_spectrum_card_Card_previewDiv = new org.apache.royale.html.elements.Div();
    this.com_unhurdle_spectrum_card_Card_previewDiv.className = this.appendSelector("-preview");
    this.addElementAt(this.com_unhurdle_spectrum_card_Card_previewDiv, index);
  }
  while (this.com_unhurdle_spectrum_card_Card_previewDiv.numElements > 0) {
    this.com_unhurdle_spectrum_card_Card_previewDiv.removeElement(this.com_unhurdle_spectrum_card_Card_previewDiv.getElementAt(0));
  }
  this.com_unhurdle_spectrum_card_Card_previewDiv.addElement(value);
  this.com_unhurdle_spectrum_card_Card__preview = value;
};


/**
 * @nocollapse
 * @export
 * @type {com.unhurdle.spectrum.card.CardBody}
 */
com.unhurdle.spectrum.card.Card.prototype.body;


com.unhurdle.spectrum.card.Card.prototype.get__body = function() {
  return this.com_unhurdle_spectrum_card_Card__body;
};


com.unhurdle.spectrum.card.Card.prototype.set__body = function(value) {
  if (value != this.com_unhurdle_spectrum_card_Card__body) {
    if (this.com_unhurdle_spectrum_card_Card__body) {
      this.removeElement(this.com_unhurdle_spectrum_card_Card__body);
    }
    var /** @type {number} */ index = 0;
    if (this.com_unhurdle_spectrum_card_Card_coverPhoto) {
      index++;
    }
    if (this.com_unhurdle_spectrum_card_Card_previewDiv) {
      index++;
    }
    this.addElementAt(value, index);
    this.com_unhurdle_spectrum_card_Card__body = value;
  }
};


/**
 * @nocollapse
 * @export
 * @type {com.unhurdle.spectrum.card.CardFooter}
 */
com.unhurdle.spectrum.card.Card.prototype.footer;


com.unhurdle.spectrum.card.Card.prototype.get__footer = function() {
  return this.com_unhurdle_spectrum_card_Card__footer;
};


com.unhurdle.spectrum.card.Card.prototype.set__footer = function(value) {
  if (this.com_unhurdle_spectrum_card_Card__footer == value) {
    return;
  }
  if (this.com_unhurdle_spectrum_card_Card__footer) {
    this.removeElement(this.com_unhurdle_spectrum_card_Card__footer);
  }
  this.com_unhurdle_spectrum_card_Card__footer = value;
  this.addElement(this.com_unhurdle_spectrum_card_Card__footer);
};


/**
 * @nocollapse
 * @export
 * @type {com.unhurdle.spectrum.QuickActions}
 */
com.unhurdle.spectrum.card.Card.prototype.actions;


com.unhurdle.spectrum.card.Card.prototype.get__actions = function() {
  return this.com_unhurdle_spectrum_card_Card__actions;
};


com.unhurdle.spectrum.card.Card.prototype.set__actions = function(value) {
  if (value != this.com_unhurdle_spectrum_card_Card__actions) {
    if (this.com_unhurdle_spectrum_card_Card__actions) {
      this.removeElement(this.com_unhurdle_spectrum_card_Card__actions);
    }
    value.toggle(this.appendSelector("-actions"), true);
    this.addElement(value);
    this.com_unhurdle_spectrum_card_Card__actions = value;
  }
};


/**
 * @nocollapse
 * @export
 * @type {com.unhurdle.spectrum.QuickActions}
 */
com.unhurdle.spectrum.card.Card.prototype.quickActions;


com.unhurdle.spectrum.card.Card.prototype.get__quickActions = function() {
  return this.com_unhurdle_spectrum_card_Card__quickActions;
};


com.unhurdle.spectrum.card.Card.prototype.set__quickActions = function(value) {
  if (value != this.com_unhurdle_spectrum_card_Card__quickActions) {
    if (this.com_unhurdle_spectrum_card_Card__quickActions) {
      this.removeElement(this.com_unhurdle_spectrum_card_Card__quickActions);
    }
    value.toggle(this.appendSelector("-quickActions"), true);
    this.addElement(value);
    this.com_unhurdle_spectrum_card_Card__quickActions = value;
  }
};


Object.defineProperties(com.unhurdle.spectrum.card.Card.prototype, /** @lends {com.unhurdle.spectrum.card.Card.prototype} */ {
/**
 * @type {boolean}
 */
focused: {
get: com.unhurdle.spectrum.card.Card.prototype.get__focused,
set: com.unhurdle.spectrum.card.Card.prototype.set__focused},
/**
 * @type {boolean}
 */
selected: {
get: com.unhurdle.spectrum.card.Card.prototype.get__selected,
set: com.unhurdle.spectrum.card.Card.prototype.set__selected},
/**
 * @type {boolean}
 */
quiet: {
get: com.unhurdle.spectrum.card.Card.prototype.get__quiet,
set: com.unhurdle.spectrum.card.Card.prototype.set__quiet},
/**
 * @type {boolean}
 */
small: {
get: com.unhurdle.spectrum.card.Card.prototype.get__small,
set: com.unhurdle.spectrum.card.Card.prototype.set__small},
/**
 * @type {boolean}
 */
horizontal: {
get: com.unhurdle.spectrum.card.Card.prototype.get__horizontal,
set: com.unhurdle.spectrum.card.Card.prototype.set__horizontal},
/**
 * @type {boolean}
 */
gallery: {
get: com.unhurdle.spectrum.card.Card.prototype.get__gallery,
set: com.unhurdle.spectrum.card.Card.prototype.set__gallery},
/**
 * @type {string}
 */
coverSrc: {
get: com.unhurdle.spectrum.card.Card.prototype.get__coverSrc,
set: com.unhurdle.spectrum.card.Card.prototype.set__coverSrc},
/**
 * @type {com.unhurdle.spectrum.IAsset}
 */
preview: {
get: com.unhurdle.spectrum.card.Card.prototype.get__preview,
set: com.unhurdle.spectrum.card.Card.prototype.set__preview},
/**
 * @type {com.unhurdle.spectrum.card.CardBody}
 */
body: {
get: com.unhurdle.spectrum.card.Card.prototype.get__body,
set: com.unhurdle.spectrum.card.Card.prototype.set__body},
/**
 * @type {com.unhurdle.spectrum.card.CardFooter}
 */
footer: {
get: com.unhurdle.spectrum.card.Card.prototype.get__footer,
set: com.unhurdle.spectrum.card.Card.prototype.set__footer},
/**
 * @type {com.unhurdle.spectrum.QuickActions}
 */
actions: {
get: com.unhurdle.spectrum.card.Card.prototype.get__actions,
set: com.unhurdle.spectrum.card.Card.prototype.set__actions},
/**
 * @type {com.unhurdle.spectrum.QuickActions}
 */
quickActions: {
get: com.unhurdle.spectrum.card.Card.prototype.get__quickActions,
set: com.unhurdle.spectrum.card.Card.prototype.set__quickActions}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.card.Card.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Card', qName: 'com.unhurdle.spectrum.card.Card', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.card.Card.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'focused': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'selected': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'quiet': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'small': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'horizontal': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'gallery': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'coverSrc': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'preview': { type: 'com.unhurdle.spectrum.IAsset', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'body': { type: 'com.unhurdle.spectrum.card.CardBody', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'footer': { type: 'com.unhurdle.spectrum.card.CardFooter', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'actions': { type: 'com.unhurdle.spectrum.QuickActions', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'},
        'quickActions': { type: 'com.unhurdle.spectrum.QuickActions', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.card.Card'}
      };
    },
    methods: function () {
      return {
        'Card': { type: '', declaredBy: 'com.unhurdle.spectrum.card.Card'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.card.Card.prototype.ROYALE_COMPILE_FLAGS = 11;
