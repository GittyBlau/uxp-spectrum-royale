/**
 * Generated by Apache Royale Compiler from org/apache/royale/collections/HierarchicalData.as
 * org.apache.royale.collections.HierarchicalData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.collections.HierarchicalData');
/* Royale Dependency List: org.apache.royale.collections.FlattenedList,org.apache.royale.events.Event,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.collections.IHierarchicalData');



/**
 *  Constructor.
 *
 *  @asparam value The data used to populate the HierarchicalData instance.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.collections.IHierarchicalData}
 * @param {Object=} value
 */
org.apache.royale.collections.HierarchicalData = function(value) {
  value = typeof value !== 'undefined' ? value : null;
  org.apache.royale.collections.HierarchicalData.base(this, 'constructor');
  this.source = value;
};
goog.inherits(org.apache.royale.collections.HierarchicalData, org.apache.royale.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.royale.collections.FlattenedList}
 */
org.apache.royale.collections.HierarchicalData.prototype.org_apache_royale_collections_HierarchicalData__flatList;


/**
 * @private
 * @type {string}
 */
org.apache.royale.collections.HierarchicalData.prototype.org_apache_royale_collections_HierarchicalData__childrenField = "children";


/**
 * @private
 * @type {Object}
 */
org.apache.royale.collections.HierarchicalData.prototype.org_apache_royale_collections_HierarchicalData__source;


/**
 * @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} node
 * @return {boolean}
 */
org.apache.royale.collections.HierarchicalData.prototype.canHaveChildren = function(node) {
  if (node == null)
    return false;
  var /** @type {boolean} */ branch = false;
  if (org.apache.royale.utils.Language.is(node, Object)) {
    try {
      if (node[this.childrenField] != undefined) {
        branch = true;
      }
    } catch (e) {
    }
  }
  return branch;
};


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} node
 * @return {Object}
 */
org.apache.royale.collections.HierarchicalData.prototype.getChildren = function(node) {
  if (node == null)
    return null;
  var /** @type {*} */ children;
  if (org.apache.royale.utils.Language.is(node, Object)) {
    try {
      children = node[this.childrenField];
    } catch (e) {
    }
  }
  if (children === undefined)
    return null;
  return children;
};


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} node
 * @return {boolean}
 */
org.apache.royale.collections.HierarchicalData.prototype.hasChildren = function(node) {
  if (node == null)
    return false;
  var /** @type {Object} */ children = this.getChildren(node);
  try {
    if (children.length > 0)
      return true;
  } catch (e) {
  }
  return false;
};


/**
 *  @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} node
 * @return {Object}
 */
org.apache.royale.collections.HierarchicalData.prototype.getData = function(node) {
  return org.apache.royale.utils.Language.resolveUncertain(Object(node));
};


/**
 * @inheritDoc
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @return {Object}
 */
org.apache.royale.collections.HierarchicalData.prototype.getRoot = function() {
  return this.source;
};


/**
 * @param {Object} node
 * @return {boolean}
 */
org.apache.royale.collections.HierarchicalData.prototype.isOpen = function(node) {
  return this.org_apache_royale_collections_HierarchicalData__flatList.isOpen(node);
};


/**
 * @param {Object} node
 */
org.apache.royale.collections.HierarchicalData.prototype.openNode = function(node) {
  this.org_apache_royale_collections_HierarchicalData__flatList.openNode(node);
};


/**
 * @param {Object} node
 */
org.apache.royale.collections.HierarchicalData.prototype.closeNode = function(node) {
  this.org_apache_royale_collections_HierarchicalData__flatList.closeNode(node);
};


/**
 * @param {Object} node
 * @return {number}
 */
org.apache.royale.collections.HierarchicalData.prototype.getDepth = function(node) {
  return this.org_apache_royale_collections_HierarchicalData__flatList.getDepth(node);
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.collections.HierarchicalData.prototype.childrenField;


org.apache.royale.collections.HierarchicalData.prototype.get__childrenField = function() {
  return this.org_apache_royale_collections_HierarchicalData__childrenField;
};


org.apache.royale.collections.HierarchicalData.prototype.set__childrenField = function(value) {
  this.org_apache_royale_collections_HierarchicalData__childrenField = value;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.collections.HierarchicalData.prototype.source;


org.apache.royale.collections.HierarchicalData.prototype.get__source = function() {
  return this.org_apache_royale_collections_HierarchicalData__source;
};


org.apache.royale.collections.HierarchicalData.prototype.set__source = function(value) {
  this.org_apache_royale_collections_HierarchicalData__source = value;
  this.dispatchEvent(new org.apache.royale.events.Event("collectionChanged"));
};


Object.defineProperties(org.apache.royale.collections.HierarchicalData.prototype, /** @lends {org.apache.royale.collections.HierarchicalData.prototype} */ {
/**
 * @type {string}
 */
childrenField: {
get: org.apache.royale.collections.HierarchicalData.prototype.get__childrenField,
set: org.apache.royale.collections.HierarchicalData.prototype.set__childrenField},
/**
 * @type {Object}
 */
source: {
get: org.apache.royale.collections.HierarchicalData.prototype.get__source,
set: org.apache.royale.collections.HierarchicalData.prototype.set__source}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.collections.HierarchicalData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HierarchicalData', qName: 'org.apache.royale.collections.HierarchicalData', kind: 'class' }], interfaces: [org.apache.royale.collections.IHierarchicalData] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.collections.HierarchicalData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'childrenField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.collections.HierarchicalData'},
        'source': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.collections.HierarchicalData'}
      };
    },
    methods: function () {
      return {
        'HierarchicalData': { type: '', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', true ]; }},
        'canHaveChildren': { type: 'Boolean', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', false ]; }},
        'getChildren': { type: 'Object', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', false ]; }},
        'hasChildren': { type: 'Boolean', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', false ]; }},
        'getData': { type: 'Object', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', false ]; }},
        'getRoot': { type: 'Object', declaredBy: 'org.apache.royale.collections.HierarchicalData'},
        'isOpen': { type: 'Boolean', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', false ]; }},
        'openNode': { type: 'void', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', false ]; }},
        'closeNode': { type: 'void', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', false ]; }},
        'getDepth': { type: 'int', declaredBy: 'org.apache.royale.collections.HierarchicalData', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.collections.HierarchicalData.prototype.ROYALE_COMPILE_FLAGS = 10;
