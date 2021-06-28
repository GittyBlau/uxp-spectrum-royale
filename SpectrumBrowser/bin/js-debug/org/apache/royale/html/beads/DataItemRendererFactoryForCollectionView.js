/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/DataItemRendererFactoryForCollectionView.as
 * org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView');
/* Royale Dependency List: org.apache.royale.core.IIndexedItemRenderer,org.apache.royale.core.IIndexedItemRendererInitializer,org.apache.royale.core.IItemRendererOwnerView,org.apache.royale.core.IStrandWithModelView,org.apache.royale.events.CollectionEvent,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.html.beads.IListView,org.apache.royale.utils.sendStrandEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.DataItemRendererFactoryBase');



/**
 * @constructor
 * @extends {org.apache.royale.html.beads.DataItemRendererFactoryBase}
 * @param {Object=} target
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.base(this, 'constructor', target);
};
goog.inherits(org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView, org.apache.royale.html.beads.DataItemRendererFactoryBase);


/**
 * @protected
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.dped;


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.core.IListPresentationModel
 * @royaleignorecoercion org.apache.royale.core.IIndexedItemRenderer
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @override
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.dataProviderChangeHandler = function(event) {
  org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.superClass_.dataProviderChangeHandler.apply(this, [ event] );
  if (this.dped) {
    this.dped.removeEventListener(org.apache.royale.events.CollectionEvent.ITEM_ADDED, org.apache.royale.utils.Language.closure(this.itemAddedHandler, this, 'itemAddedHandler'));
    this.dped.removeEventListener(org.apache.royale.events.CollectionEvent.ITEM_REMOVED, org.apache.royale.utils.Language.closure(this.itemRemovedHandler, this, 'itemRemovedHandler'));
    this.dped.removeEventListener(org.apache.royale.events.CollectionEvent.ITEM_UPDATED, org.apache.royale.utils.Language.closure(this.itemUpdatedHandler, this, 'itemUpdatedHandler'));
    this.dped = null;
  }
  if (!this.dataProviderModel.dataProvider)
    return;
  this.dped = this.dataProviderModel.dataProvider;
  this.dped.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_ADDED, org.apache.royale.utils.Language.closure(this.itemAddedHandler, this, 'itemAddedHandler'));
  this.dped.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_REMOVED, org.apache.royale.utils.Language.closure(this.itemRemovedHandler, this, 'itemRemovedHandler'));
  this.dped.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_UPDATED, org.apache.royale.utils.Language.closure(this.itemUpdatedHandler, this, 'itemUpdatedHandler'));
};


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.core.IListPresentationModel
 * @royaleignorecoercion org.apache.royale.core.IIndexedItemRenderer
 * @protected
 * @param {org.apache.royale.events.CollectionEvent} event
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.itemAddedHandler = function(event) {
  if (!this.dataProviderExist)
    return;
  var /** @type {org.apache.royale.html.beads.IListView} */ view = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IStrandWithModelView).view, org.apache.royale.html.beads.IListView);
  var /** @type {org.apache.royale.core.IItemRendererOwnerView} */ dataGroup = view.dataGroup;
  var /** @type {Object} */ ir = this.itemRendererFactory.createItemRenderer();
  var /** @type {Object} */ data = event.item;
  dataGroup.addItemRendererAt(ir, event.index);
  org.apache.royale.utils.Language.as(this.itemRendererInitializer, org.apache.royale.core.IIndexedItemRendererInitializer).initializeIndexedItemRenderer(ir, data, event.index);
  ir.data = data;
  var /** @type {number} */ n = dataGroup.numItemRenderers;
  for (var /** @type {number} */ i = event.index; i < n; i++) {
    ir = dataGroup.getItemRendererAt(i);
    ir.index = i;
  }
  org.apache.royale.utils.sendStrandEvent(this._strand, "itemsCreated");
  org.apache.royale.utils.sendStrandEvent(this._strand, "layoutNeeded");
};


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.core.IListPresentationModel
 * @royaleignorecoercion org.apache.royale.core.IIndexedItemRenderer
 * @protected
 * @param {org.apache.royale.events.CollectionEvent} event
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.itemRemovedHandler = function(event) {
  if (!this.dataProviderExist)
    return;
  var /** @type {org.apache.royale.html.beads.IListView} */ view = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IStrandWithModelView).view, org.apache.royale.html.beads.IListView);
  var /** @type {org.apache.royale.core.IItemRendererOwnerView} */ dataGroup = view.dataGroup;
  var /** @type {Object} */ ir = dataGroup.getItemRendererAt(event.index);
  if (!ir)
    return;
  dataGroup.removeItemRenderer(ir);
  var /** @type {number} */ n = dataGroup.numItemRenderers;
  for (var /** @type {number} */ i = event.index; i < n; i++) {
    ir = dataGroup.getItemRendererAt(i);
    ir.index = i;
  }
  org.apache.royale.utils.sendStrandEvent(this._strand, "layoutNeeded");
};


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.collections.ICollectionView
 * @royaleignorecoercion org.apache.royale.core.IIndexedItemRenderer
 * @protected
 * @param {org.apache.royale.events.CollectionEvent} event
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.itemUpdatedHandler = function(event) {
  if (!this.dataProviderExist)
    return;
  var /** @type {org.apache.royale.html.beads.IListView} */ view = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IStrandWithModelView).view, org.apache.royale.html.beads.IListView);
  var /** @type {org.apache.royale.core.IItemRendererOwnerView} */ dataGroup = view.dataGroup;
  var /** @type {Object} */ ir = dataGroup.getItemRendererAt(event.index);
  var /** @type {Object} */ data = event.item;
  org.apache.royale.utils.Language.as(this.itemRendererInitializer, org.apache.royale.core.IIndexedItemRendererInitializer).initializeIndexedItemRenderer(ir, data, event.index);
  ir.data = data;
};


/**
 * @protected
 * @override
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.getItemAt = function(i) {
  return this.dataProviderModel.dataProvider.getItemAt(i);
};


org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.get__dataProviderLength = function() {
  return (this.dataProviderModel.dataProvider.length) >> 0;
};


Object.defineProperties(org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype, /** @lends {org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype} */ {
/**
 * @type {number}
 */
dataProviderLength: {
get: org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.get__dataProviderLength}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataItemRendererFactoryForCollectionView', qName: 'org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'DataItemRendererFactoryForCollectionView': { type: '', declaredBy: 'org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView', parameters: function () { return [ 'Object', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.DataItemRendererFactoryForCollectionView.prototype.ROYALE_COMPILE_FLAGS = 10;
