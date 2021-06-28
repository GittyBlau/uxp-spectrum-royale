/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/TBody.as
 * com.unhurdle.spectrum.TBody
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.TBody');
/* Royale Dependency List: */

goog.require('com.unhurdle.spectrum.Group');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.Group}
 */
com.unhurdle.spectrum.TBody = function() {
  com.unhurdle.spectrum.TBody.base(this, 'constructor');
  this.typeNames = 'spectrum-Table-body';
};
goog.inherits(com.unhurdle.spectrum.TBody, com.unhurdle.spectrum.Group);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.TBody.prototype.getTag = function() {
  return "tbody";
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.TBody.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TBody', qName: 'com.unhurdle.spectrum.TBody', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.TBody.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'TBody': { type: '', declaredBy: 'com.unhurdle.spectrum.TBody'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.TBody.prototype.ROYALE_COMPILE_FLAGS = 11;
