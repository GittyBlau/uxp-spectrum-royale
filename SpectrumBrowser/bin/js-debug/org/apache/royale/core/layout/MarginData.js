/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/layout/MarginData.as
 * org.apache.royale.core.layout.MarginData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.layout.MarginData');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.layout.EdgeData');



/**
 * @constructor
 * @extends {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.layout.MarginData = function() {
  org.apache.royale.core.layout.MarginData.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.layout.MarginData, org.apache.royale.core.layout.EdgeData);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.layout.MarginData.prototype.org_apache_royale_core_layout_MarginData__auto;


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.core.layout.MarginData.prototype.auto;


org.apache.royale.core.layout.MarginData.prototype.get__auto = function() {
  return this.org_apache_royale_core_layout_MarginData__auto;
};


org.apache.royale.core.layout.MarginData.prototype.set__auto = function(value) {
  this.org_apache_royale_core_layout_MarginData__auto = value;
};


Object.defineProperties(org.apache.royale.core.layout.MarginData.prototype, /** @lends {org.apache.royale.core.layout.MarginData.prototype} */ {
/**
 * @type {boolean}
 */
auto: {
get: org.apache.royale.core.layout.MarginData.prototype.get__auto,
set: org.apache.royale.core.layout.MarginData.prototype.set__auto}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.layout.MarginData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MarginData', qName: 'org.apache.royale.core.layout.MarginData', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.layout.MarginData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'auto': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.core.layout.MarginData'}
      };
    },
    methods: function () {
      return {
        'MarginData': { type: '', declaredBy: 'org.apache.royale.core.layout.MarginData'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.layout.MarginData.prototype.ROYALE_COMPILE_FLAGS = 10;
