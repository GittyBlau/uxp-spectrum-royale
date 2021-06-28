/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/ListView.as
 * org.apache.royale.html.beads.ListView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.ListView');
/* Royale Dependency List: org.apache.royale.core.IItemRenderer,org.apache.royale.core.IRollOverModel,org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.ISelectionModel,org.apache.royale.events.Event,org.apache.royale.utils.getSelectionRenderBead,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.DataContainerView');



/**
 * @constructor
 * @extends {org.apache.royale.html.beads.DataContainerView}
 */
org.apache.royale.html.beads.ListView = function() {
  org.apache.royale.html.beads.ListView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.ListView, org.apache.royale.html.beads.DataContainerView);


/**
 * @protected
 * @type {org.apache.royale.core.ISelectionModel}
 */
org.apache.royale.html.beads.ListView.prototype.listModel;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.html.beads.ListView.prototype.lastSelectedIndex = -1;


/**
 * @asprivate
 * @royaleignorecoercion org.apache.royale.core.ISelectionModel
 * @protected
 * @override
 */
org.apache.royale.html.beads.ListView.prototype.handleInitComplete = function(event) {
  this.listModel = this._strand.getBeadByType(org.apache.royale.core.ISelectionModel);
  this.listModel.addEventListener("selectedIndexChanged", org.apache.royale.utils.Language.closure(this.selectionChangeHandler, this, 'selectionChangeHandler'));
  this.listModel.addEventListener("rollOverIndexChanged", org.apache.royale.utils.Language.closure(this.rollOverIndexChangeHandler, this, 'rollOverIndexChangeHandler'));
  org.apache.royale.html.beads.ListView.superClass_.handleInitComplete.apply(this, [ event] );
};


/**
 * @royaleignorecoercion org.apache.royale.core.IItemRenderer
 * @royaleignorecoercion org.apache.royale.core.ISelectableItemRenderer
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.ListView.prototype.selectionChangeHandler = function(event) {
  var /** @type {Object} */ selectionBead;
  var /** @type {Object} */ ir = this.dataGroup.getItemRendererForIndex(this.lastSelectedIndex);
  if (ir) {
    selectionBead = org.apache.royale.utils.getSelectionRenderBead(ir);
    if (selectionBead)
      selectionBead.selected = false;
  }
  ir = this.dataGroup.getItemRendererForIndex(this.listModel.selectedIndex);
  if (ir) {
    selectionBead = org.apache.royale.utils.getSelectionRenderBead(ir);
    if (selectionBead)
      selectionBead.selected = true;
  }
  this.lastSelectedIndex = this.listModel.selectedIndex;
};


/**
 * @protected
 * @type {number}
 */
org.apache.royale.html.beads.ListView.prototype.lastRollOverIndex = -1;


/**
 * @royaleignorecoercion org.apache.royale.core.IItemRenderer
 * * @royaleignorecoercion org.apache.royale.core.IRollOverModel
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.ListView.prototype.rollOverIndexChangeHandler = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ selectionBead;
  var /** @type {Object} */ ir = this.dataGroup.getItemRendererForIndex(this.lastRollOverIndex);
  if (ir) {
    selectionBead = org.apache.royale.utils.getSelectionRenderBead(ir);
    if (selectionBead)
      selectionBead.hovered = false;
  }
  ir = this.dataGroup.getItemRendererForIndex(this.listModel.rollOverIndex);
  if (ir) {
    selectionBead = org.apache.royale.utils.getSelectionRenderBead(ir);
    if (selectionBead)
      selectionBead.hovered = true;
  }
  this.lastRollOverIndex = this.listModel.rollOverIndex;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.ListView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListView', qName: 'org.apache.royale.html.beads.ListView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.ListView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'ListView': { type: '', declaredBy: 'org.apache.royale.html.beads.ListView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.ListView.prototype.ROYALE_COMPILE_FLAGS = 10;
