/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/newSVGElement.as
 * com.unhurdle.spectrum.newSVGElement
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.newSVGElement');
/* Royale Dependency List: */



/**
 * @param {string} type
 * @param {string} className
 * @return {SVGElement}
 */
com.unhurdle.spectrum.newSVGElement = function(type, className) {
  var /** @type {SVGElement} */ elem = document.createElementNS('http://www.w3.org/2000/svg', type);
  if (className) {
    elem.setAttribute("class", className);
  }
  return elem;
}
