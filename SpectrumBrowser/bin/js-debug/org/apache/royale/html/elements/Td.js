/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/elements/Td.as
 * org.apache.royale.html.elements.Td
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.elements.Td');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.addElementToWrapper*/

goog.require('org.apache.royale.html.TextNodeContainerBase');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.TextNodeContainerBase}
 */
org.apache.royale.html.elements.Td = function() {
  org.apache.royale.html.elements.Td.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.elements.Td, org.apache.royale.html.TextNodeContainerBase);


/**
 * @protected
 * @override
 */
org.apache.royale.html.elements.Td.prototype.createElement = function() {
  return org.apache.royale.html.util.addElementToWrapper(this, 'td');
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.elements.Td.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Td', qName: 'org.apache.royale.html.elements.Td', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.elements.Td.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'Td': { type: '', declaredBy: 'org.apache.royale.html.elements.Td'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.elements.Td.prototype.ROYALE_COMPILE_FLAGS = 10;
