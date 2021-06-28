/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/utils/MouseEventConverter.as
 * org.apache.royale.events.utils.MouseEventConverter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.utils.MouseEventConverter');
/* Royale Dependency List: org.apache.royale.events.MouseEvent*/




/**
 * @constructor
 */
org.apache.royale.events.utils.MouseEventConverter = function() {
};


/**
 * @royaleignorecoercion goog.events.Event
 * We're lying to the compiler for now because it thinks it's supposed to accept a goog.events.Event.
 * We need to fix this in typedefs
 * @nocollapse
 * @param {Object} nativeEvent
 * @param {goog.events.BrowserEvent=} browserEvent
 * @return {org.apache.royale.events.MouseEvent}
 */
org.apache.royale.events.utils.MouseEventConverter.convert = function(nativeEvent, browserEvent) {
  browserEvent = typeof browserEvent !== 'undefined' ? browserEvent : null;
  var /** @type {org.apache.royale.events.MouseEvent} */ event = new org.apache.royale.events.MouseEvent(nativeEvent["type"], nativeEvent["bubbles"], nativeEvent["cancelable"]);
  if (!browserEvent) {
    browserEvent = new goog.events.BrowserEvent(nativeEvent, nativeEvent["currentTarget"]);
  }
  event.wrapEvent(browserEvent);
  return event;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.utils.MouseEventConverter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MouseEventConverter', qName: 'org.apache.royale.events.utils.MouseEventConverter', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.utils.MouseEventConverter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|convert': { type: 'org.apache.royale.events.MouseEvent', declaredBy: 'org.apache.royale.events.utils.MouseEventConverter', parameters: function () { return [ 'Object', false ,'goog.events.BrowserEvent', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.events.utils.MouseEventConverter.prototype.ROYALE_COMPILE_FLAGS = 10;
