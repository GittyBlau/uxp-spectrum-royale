/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/IBrowserEvent.as
 * org.apache.royale.events.IBrowserEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.IBrowserEvent');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.events.IBrowserEvent = function() {
};
/**
 * @param {goog.events.BrowserEvent} event
 */
org.apache.royale.events.IBrowserEvent.prototype.wrapEvent = function(event) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.IBrowserEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IBrowserEvent', qName: 'org.apache.royale.events.IBrowserEvent', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.IBrowserEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'wrapEvent': { type: 'void', declaredBy: 'org.apache.royale.events.IBrowserEvent', parameters: function () { return [ 'goog.events.BrowserEvent', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.events.IBrowserEvent.prototype.ROYALE_COMPILE_FLAGS = 10;
