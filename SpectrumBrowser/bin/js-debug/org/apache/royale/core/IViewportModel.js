/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IViewportModel.as
 * org.apache.royale.core.IViewportModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IViewportModel');
/* Royale Dependency List: org.apache.royale.core.layout.EdgeData*/

goog.require('org.apache.royale.core.IBead');



/**
 * @interface
 * @extends {org.apache.royale.core.IBead}
 */
org.apache.royale.core.IViewportModel = function() {
};
/**  * @type {org.apache.royale.core.layout.EdgeData}
 */org.apache.royale.core.IViewportModel.prototype.borderMetrics;
/**  * @type {org.apache.royale.core.layout.EdgeData}
 */org.apache.royale.core.IViewportModel.prototype.chromeMetrics;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IViewportModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IViewportModel', qName: 'org.apache.royale.core.IViewportModel', kind: 'interface' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IViewportModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'borderMetrics': { type: 'org.apache.royale.core.layout.EdgeData', access: 'readwrite', declaredBy: 'org.apache.royale.core.IViewportModel'},
        'chromeMetrics': { type: 'org.apache.royale.core.layout.EdgeData', access: 'readwrite', declaredBy: 'org.apache.royale.core.IViewportModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IViewportModel.prototype.ROYALE_COMPILE_FLAGS = 10;
