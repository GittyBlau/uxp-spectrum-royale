/**
 * Generated by Apache Royale Compiler from view/components/StyledCode.as
 * view.components.StyledCode
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.components.StyledCode');
/* Royale Dependency List: */

goog.require('com.unhurdle.spectrum.typography.Code');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.typography.Code}
 */
view.components.StyledCode = function() {
  view.components.StyledCode.base(this, 'constructor');
  this.size = "XS";
  this.setStyle("whiteSpace", "break-spaces");
};
goog.inherits(view.components.StyledCode, com.unhurdle.spectrum.typography.Code);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.components.StyledCode.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'StyledCode', qName: 'view.components.StyledCode', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.components.StyledCode.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'StyledCode': { type: '', declaredBy: 'view.components.StyledCode'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.components.StyledCode.prototype.ROYALE_COMPILE_FLAGS = 9;
