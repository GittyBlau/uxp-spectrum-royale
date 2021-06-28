/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/layouts/VerticalLayout.as
 * org.apache.royale.html.beads.layouts.VerticalLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.layouts.VerticalLayout');
/* Royale Dependency List: org.apache.royale.core.IParentIUIBase,org.apache.royale.core.WrappedHTMLElement*/

goog.require('org.apache.royale.core.LayoutBase');
goog.require('org.apache.royale.core.IBeadLayout');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.LayoutBase}
 * @implements {org.apache.royale.core.IBeadLayout}
 */
org.apache.royale.html.beads.layouts.VerticalLayout = function() {
  org.apache.royale.html.beads.layouts.VerticalLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.layouts.VerticalLayout, org.apache.royale.core.LayoutBase);


/**
 *  Layout children vertically
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.core.ILayoutHost
 *  @royaleignorecoercion org.apache.royale.core.IParentIUIBase
 *  @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @override
 */
org.apache.royale.html.beads.layouts.VerticalLayout.prototype.layout = function() {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = 0;
  
  var /** @type {Array} */ children;
  //var /** @type {number} */ i = 0;
  //var /** @type {number} */ n = 0;
  var /** @type {Object} */ contentView = this.layoutView;
  contentView.element.style["vertical-align"] = "top";
  children = contentView.internalChildren();
  n = (children.length) >> 0;
  for (i = 0; i < n; i++) {
    var /** @type {Object} */ child = children[i];
    if (child == null)
      continue;
    if (!child.royale_wrapper.displayStyleForLayout) {
      if (!child.royale_wrapper.visible) {
        child.royale_wrapper.setDisplayStyleForLayout('block');
      } else {
        child.style.display = 'inline-block';
        child.style.display = 'block';
      }
    }
    child.royale_wrapper.dispatchEvent('sizeChanged');
  }
  return true;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.layouts.VerticalLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'VerticalLayout', qName: 'org.apache.royale.html.beads.layouts.VerticalLayout', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadLayout] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.layouts.VerticalLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'VerticalLayout': { type: '', declaredBy: 'org.apache.royale.html.beads.layouts.VerticalLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.html.beads.layouts.VerticalLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.layouts.VerticalLayout.prototype.ROYALE_COMPILE_FLAGS = 10;
