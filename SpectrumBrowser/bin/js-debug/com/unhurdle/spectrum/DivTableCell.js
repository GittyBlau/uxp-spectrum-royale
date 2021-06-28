/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/DivTableCell.as
 * com.unhurdle.spectrum.DivTableCell
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.DivTableCell');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement*/

goog.require('com.unhurdle.spectrum.TableCell');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.TableCell}
 */
com.unhurdle.spectrum.DivTableCell = function() {
  com.unhurdle.spectrum.DivTableCell.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.DivTableCell, com.unhurdle.spectrum.TableCell);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.DivTableCell.prototype.getTag = function() {
  return "div";
};


/**
 * @private
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
com.unhurdle.spectrum.DivTableCell.prototype.com_unhurdle_spectrum_DivTableCell_elem = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.DivTableCell.prototype.createElement = function() {
  this.com_unhurdle_spectrum_DivTableCell_elem = com.unhurdle.spectrum.DivTableCell.superClass_.createElement.apply(this);
  this.com_unhurdle_spectrum_DivTableCell_elem.style.flex = "1";
  this.com_unhurdle_spectrum_DivTableCell_elem.setAttribute("role", "gridcell");
  return this.com_unhurdle_spectrum_DivTableCell_elem;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.DivTableCell.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DivTableCell', qName: 'com.unhurdle.spectrum.DivTableCell', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.DivTableCell.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'DivTableCell': { type: '', declaredBy: 'com.unhurdle.spectrum.DivTableCell'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.DivTableCell.prototype.ROYALE_COMPILE_FLAGS = 11;
