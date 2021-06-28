/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/ContainerView.as
 * org.apache.royale.html.beads.ContainerView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.ContainerView');
/* Royale Dependency List: org.apache.royale.core.IContainer,org.apache.royale.core.ILayoutView,org.apache.royale.core.IStrand,org.apache.royale.core.IViewport,org.apache.royale.utils.loadBeadFromValuesManager*/

goog.require('org.apache.royale.html.beads.GroupView');



/**
 *  The ContainerView class is the default view for
 *  the org.apache.royale.core.ContainerBase classes.
 *  It lets you use some CSS styles to manage the border, background
 *  and padding around the content area.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.html.beads.GroupView}
 */
org.apache.royale.html.beads.ContainerView = function() {
  org.apache.royale.html.beads.ContainerView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.ContainerView, org.apache.royale.html.beads.GroupView);


/**
 * @private
 * @type {org.apache.royale.core.IViewport}
 */
org.apache.royale.html.beads.ContainerView.prototype.org_apache_royale_html_beads_ContainerView__viewport;


/**
 * @royaleignorecoercion org.apache.royale.core.IContainer
 * @protected
 */
org.apache.royale.html.beads.ContainerView.prototype.addViewport = function() {
  var /** @type {Object} */ chost = this.host;
  if (chost != null && chost != this.org_apache_royale_html_beads_ContainerView__viewport.contentView) {
    chost.addElement(this.org_apache_royale_html_beads_ContainerView__viewport.contentView);
  }
};


/**
 * @nocollapse
 * @type {org.apache.royale.core.IViewport}
 */
org.apache.royale.html.beads.ContainerView.prototype.viewport;


org.apache.royale.html.beads.ContainerView.prototype.get__viewport = function() {
  return this.org_apache_royale_html_beads_ContainerView__viewport;
};


org.apache.royale.html.beads.ContainerView.prototype.get__contentView = function() {
  if (this.viewport != null) {
    return this.viewport.contentView;
  } else {
    return this.host;
  }
};


org.apache.royale.html.beads.ContainerView.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.royale.html.beads.ContainerView.superClass_.set__strand.apply(this, [ value] );
  
  if (!this.org_apache_royale_html_beads_ContainerView__viewport)
    this.org_apache_royale_html_beads_ContainerView__viewport = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IViewport, "iViewport", this._strand);
  if (this.org_apache_royale_html_beads_ContainerView__viewport) {
    this.addViewport();
  }
};


Object.defineProperties(org.apache.royale.html.beads.ContainerView.prototype, /** @lends {org.apache.royale.html.beads.ContainerView.prototype} */ {
/**
 * @type {org.apache.royale.core.IViewport}
 */
viewport: {
get: org.apache.royale.html.beads.ContainerView.prototype.get__viewport},
/**
 * @type {org.apache.royale.core.ILayoutView}
 */
contentView: {
get: org.apache.royale.html.beads.ContainerView.prototype.get__contentView},
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.html.beads.ContainerView.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.ContainerView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ContainerView', qName: 'org.apache.royale.html.beads.ContainerView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.ContainerView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'contentView': { type: 'org.apache.royale.core.ILayoutView', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.ContainerView'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.ContainerView'}
      };
    },
    methods: function () {
      return {
        'ContainerView': { type: '', declaredBy: 'org.apache.royale.html.beads.ContainerView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.ContainerView.prototype.ROYALE_COMPILE_FLAGS = 10;
