/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IBeadView.as
 * org.apache.royale.core.IBeadView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IBeadView');
/* Royale Dependency List: org.apache.royale.core.IUIBase*/

goog.require('org.apache.royale.core.IBead');



/**
 * @interface
 * @extends {org.apache.royale.core.IBead}
 */
org.apache.royale.core.IBeadView = function() {
};
/**  * @type {org.apache.royale.core.IUIBase}
 */org.apache.royale.core.IBeadView.prototype.host;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IBeadView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IBeadView', qName: 'org.apache.royale.core.IBeadView', kind: 'interface' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IBeadView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'host': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.core.IBeadView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IBeadView.prototype.ROYALE_COMPILE_FLAGS = 10;
