/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/LayoutBase.as
 * org.apache.royale.core.LayoutBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.LayoutBase');
/* Royale Dependency List: org.apache.royale.core.IBorderPaddingMarginValuesImpl,org.apache.royale.core.ILayoutChild,org.apache.royale.core.ILayoutHost,org.apache.royale.core.ILayoutParent,org.apache.royale.core.ILayoutView,org.apache.royale.core.IStrand,org.apache.royale.core.IUIBase,org.apache.royale.core.ValuesManager,org.apache.royale.core.layout.EdgeData,org.apache.royale.core.layout.MarginData,org.apache.royale.events.Event,org.apache.royale.utils.sendStrandEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.Bead');
goog.require('org.apache.royale.core.IBeadLayout');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.core.Bead}
 * @implements {org.apache.royale.core.IBeadLayout}
 */
org.apache.royale.core.LayoutBase = function() {
  org.apache.royale.core.LayoutBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.LayoutBase, org.apache.royale.core.Bead);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.LayoutBase.prototype.org_apache_royale_core_LayoutBase_sawInitComplete;


/**
 * @protected
 * @type {org.apache.royale.core.ILayoutChild}
 */
org.apache.royale.core.LayoutBase.prototype.host;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.LayoutBase.prototype.org_apache_royale_core_LayoutBase_lastWidth = -1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.LayoutBase.prototype.org_apache_royale_core_LayoutBase_lastHeight = -1;


/**
 * Changes in size to the host strand are handled (by default) by running the
 * layout sequence. Subclasses can override this function and use event.type
 * to handle specific changes in dimension.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.handleSizeChange = function(event) {
  if (this.host.width == this.org_apache_royale_core_LayoutBase_lastWidth && this.host.height == this.org_apache_royale_core_LayoutBase_lastHeight)
    return;
  this.performLayout();
  this.org_apache_royale_core_LayoutBase_lastWidth = this.host.width;
  this.org_apache_royale_core_LayoutBase_lastHeight = this.host.height;
};


/**
 * Handles the addition of children to the host's layoutView by listening for
 * size changes in the children.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.handleChildrenAdded = function(event) {
  
  if (this.org_apache_royale_core_LayoutBase_sawInitComplete) {
    this.performLayout();
  }
};


/**
 * If changes happen to a layoutView's child, this function will perform the
 * layout again.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.ILayoutParent
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.childResizeHandler = function(event) {
  var /** @type {org.apache.royale.core.ILayoutHost} */ viewBead;
  if (event.type == "widthChanged" && !(this.host.isWidthSizedToContent() || !isNaN(this.host.explicitWidth))) {
    viewBead = this.host.getLayoutHost();
    viewBead.beforeLayout();
    viewBead.afterLayout();
    return;
  }
  if (event.type == "heightChanged" && !(this.host.isHeightSizedToContent() || !isNaN(this.host.explicitHeight))) {
    viewBead = this.host.getLayoutHost();
    viewBead.beforeLayout();
    viewBead.afterLayout();
    return;
  }
  if (event.type == "sizeChanged" && !(this.host.isHeightSizedToContent() || !isNaN(this.host.explicitHeight)) && !(this.host.isWidthSizedToContent() || !isNaN(this.host.explicitWidth))) {
    viewBead = this.host.getLayoutHost();
    viewBead.beforeLayout();
    viewBead.afterLayout();
    return;
  }
  this.performLayout();
};


/**
 * Called whenever "layoutNeeded" event is dispatched against the host strand.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.handleLayoutNeeded = function(event) {
  this.performLayout();
};


/**
 * Handles the final start-up condition by running the layout an initial time.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.LayoutBase.prototype.handleInitComplete = function(event) {
  this.org_apache_royale_core_LayoutBase_sawInitComplete = true;
  
  this.performLayout();
};


/**
 * Returns an object of margins for the given child.
 * 
 * @asparam child Object The element whose margins are required.
 * @asparam hostWidth Number The usable width dimension of the host.
 * @asparam hostHeight Number The usable height dimension of the host.
 * 
 * @asreturn Object A structure of {top:Number, left:Number, bottom:Number, right:Number}
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.IBorderPaddingMarginValuesImpl
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @protected
 * @param {Object} child
 * @param {number} hostWidth
 * @param {number} hostHeight
 * @return {org.apache.royale.core.layout.MarginData}
 */
org.apache.royale.core.LayoutBase.prototype.childMargins = function(child, hostWidth, hostHeight) {
  var /** @type {org.apache.royale.core.layout.MarginData} */ md = org.apache.royale.core.ValuesManager.valuesImpl.getMargins(child, hostWidth, hostHeight);
  return md;
};


/**
 * Returns an object containing the child's positioning values.
 * 
 * @asparam child Object The element whose positions are required.
 * 
 * @asreturn Object A structure of {top:Number, left:Number, bottom:Number, right:Number}
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.IBorderPaddingMarginValuesImpl
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @protected
 * @param {Object} child
 * @return {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.LayoutBase.prototype.childPositions = function(child) {
  var /** @type {org.apache.royale.core.layout.EdgeData} */ ed = org.apache.royale.core.ValuesManager.valuesImpl.getPositions(child);
  return ed;
};


/**
 * @protected
 * @type {boolean}
 */
org.apache.royale.core.LayoutBase.prototype.isLayoutRunning = false;


/**
 * Performs the layout in three parts: before, layout, after.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @royaleignorecoercion org.apache.royale.core.ILayoutParent
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 */
org.apache.royale.core.LayoutBase.prototype.performLayout = function() {
  if (this.isLayoutRunning)
    return;
  this.isLayoutRunning = true;
  var /** @type {org.apache.royale.core.ILayoutHost} */ viewBead = this.host.getLayoutHost();
  if (viewBead.beforeLayout()) {
    if (this.layout()) {
      viewBead.afterLayout();
    }
  }
  this.isLayoutRunning = false;
  org.apache.royale.utils.sendStrandEvent(this._strand, "layoutComplete");
};


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @return {boolean}
 */
org.apache.royale.core.LayoutBase.prototype.layout = function() {
  return false;
};


org.apache.royale.core.LayoutBase.prototype.set__strand = function(value) {
  this._strand = value;
  this.host = value;
  this.listenOnStrand("widthChanged", org.apache.royale.utils.Language.closure(this.handleSizeChange, this, 'handleSizeChange'));
  this.listenOnStrand("heightChanged", org.apache.royale.utils.Language.closure(this.handleSizeChange, this, 'handleSizeChange'));
  this.listenOnStrand("sizeChanged", org.apache.royale.utils.Language.closure(this.handleSizeChange, this, 'handleSizeChange'));
  this.listenOnStrand("childrenAdded", org.apache.royale.utils.Language.closure(this.handleChildrenAdded, this, 'handleChildrenAdded'));
  this.listenOnStrand("initComplete", org.apache.royale.utils.Language.closure(this.handleInitComplete, this, 'handleInitComplete'));
  this.listenOnStrand("layoutNeeded", org.apache.royale.utils.Language.closure(this.handleLayoutNeeded, this, 'handleLayoutNeeded'));
};


/**
 * @nocollapse
 * @type {org.apache.royale.core.ILayoutView}
 */
org.apache.royale.core.LayoutBase.prototype.layoutView;


org.apache.royale.core.LayoutBase.prototype.get__layoutView = function() {
  var /** @type {org.apache.royale.core.ILayoutHost} */ viewBead = this.host.getLayoutHost();
  return viewBead.contentView;
};


Object.defineProperties(org.apache.royale.core.LayoutBase.prototype, /** @lends {org.apache.royale.core.LayoutBase.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.core.LayoutBase.prototype.set__strand},
/**
 * @type {org.apache.royale.core.ILayoutView}
 */
layoutView: {
get: org.apache.royale.core.LayoutBase.prototype.get__layoutView}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.LayoutBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'LayoutBase', qName: 'org.apache.royale.core.LayoutBase', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadLayout] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.LayoutBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.core.LayoutBase'}
      };
    },
    methods: function () {
      return {
        'LayoutBase': { type: '', declaredBy: 'org.apache.royale.core.LayoutBase'},
        'performLayout': { type: 'void', declaredBy: 'org.apache.royale.core.LayoutBase'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.core.LayoutBase'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.LayoutBase.prototype.ROYALE_COMPILE_FLAGS = 10;
