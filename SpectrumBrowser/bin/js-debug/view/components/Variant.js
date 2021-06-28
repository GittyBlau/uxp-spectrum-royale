/**
 * Generated by Apache Royale Compiler from view/components/Variant.as
 * view.components.Variant
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.components.Variant');
/* Royale Dependency List: com.unhurdle.spectrum.typography.Body,com.unhurdle.spectrum.typography.Heading,org.apache.royale.html.elements.Div*/

goog.require('com.unhurdle.spectrum.FlexContainer');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.FlexContainer}
 */
view.components.Variant = function() {
  view.components.Variant.base(this, 'constructor');
  this.typeNames = "variant-container";
  this.vertical = true;
  this.alignItems = "flex-start";
  this.view_components_Variant_headerElem = new com.unhurdle.spectrum.typography.Heading();
  this.view_components_Variant_headerElem.size = "S";
  this.view_components_Variant_headerElem.className = "variant-header";
  this.view_components_Variant_headerElem.text = "Standard";
  this.addElement(this.view_components_Variant_headerElem);
  var /** @type {org.apache.royale.html.elements.Div} */ div = new org.apache.royale.html.elements.Div();
  div.className = "variant-header-padding";
  this.addElement(div);
};
goog.inherits(view.components.Variant, com.unhurdle.spectrum.FlexContainer);


/**
 * @private
 * @type {com.unhurdle.spectrum.typography.Heading}
 */
view.components.Variant.prototype.view_components_Variant_headerElem = null;


/**
 * @private
 * @type {string}
 */
view.components.Variant.prototype.view_components_Variant__header = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.typography.Body}
 */
view.components.Variant.prototype.view_components_Variant_notesElem = null;


/**
 * @nocollapse
 * @export
 * @type {string}
 */
view.components.Variant.prototype.header;


view.components.Variant.prototype.get__header = function() {
  return this.view_components_Variant_headerElem.text;
};


view.components.Variant.prototype.set__header = function(value) {
  this.view_components_Variant_headerElem.text = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
view.components.Variant.prototype.notes;


view.components.Variant.prototype.get__notes = function() {
  return this.view_components_Variant_notesElem ? this.view_components_Variant_notesElem.text : "";
};


view.components.Variant.prototype.set__notes = function(value) {
  if (!this.view_components_Variant_notesElem && !value) {
    return;
  }
  if (!this.view_components_Variant_notesElem) {
    this.view_components_Variant_notesElem = new com.unhurdle.spectrum.typography.Body();
    this.view_components_Variant_notesElem.size = "S";
    this.addElementAt(this.view_components_Variant_notesElem, 1);
  }
  this.view_components_Variant_notesElem.text = value || "";
};


Object.defineProperties(view.components.Variant.prototype, /** @lends {view.components.Variant.prototype} */ {
/**
 * @type {string}
 */
header: {
get: view.components.Variant.prototype.get__header,
set: view.components.Variant.prototype.set__header},
/**
 * @type {string}
 */
notes: {
get: view.components.Variant.prototype.get__notes,
set: view.components.Variant.prototype.set__notes}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.components.Variant.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Variant', qName: 'view.components.Variant', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.components.Variant.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'header': { type: 'String', access: 'readwrite', declaredBy: 'view.components.Variant'},
        'notes': { type: 'String', access: 'readwrite', declaredBy: 'view.components.Variant'}
      };
    },
    methods: function () {
      return {
        'Variant': { type: '', declaredBy: 'view.components.Variant'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.components.Variant.prototype.ROYALE_COMPILE_FLAGS = 9;
