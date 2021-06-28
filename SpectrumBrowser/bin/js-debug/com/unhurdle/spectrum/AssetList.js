/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/AssetList.as
 * com.unhurdle.spectrum.AssetList
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.AssetList');
/* Royale Dependency List: */

goog.require('com.unhurdle.spectrum.List');



/**
 * <inject_html>
 * <link rel="stylesheet" href="assets/css/components/assetlist/dist.css">
 * </inject_html>
 * 
 * @constructor
 * @extends {com.unhurdle.spectrum.List}
 */
com.unhurdle.spectrum.AssetList = function() {
  com.unhurdle.spectrum.AssetList.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.AssetList, com.unhurdle.spectrum.List);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.AssetList.prototype.getSelector = function() {
  return "spectrum-AssetList";
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.AssetList.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AssetList', qName: 'com.unhurdle.spectrum.AssetList', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.AssetList.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'AssetList': { type: '', declaredBy: 'com.unhurdle.spectrum.AssetList'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.AssetList.prototype.ROYALE_COMPILE_FLAGS = 11;
