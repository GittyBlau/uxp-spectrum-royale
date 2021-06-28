/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/utils/getDataProviderItem.as
 * com.unhurdle.spectrum.utils.getDataProviderItem
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.utils.getDataProviderItem');
/* Royale Dependency List: org.apache.royale.collections.ICollection,org.apache.royale.utils.Language*/




/**
 * @param {Object} provider
 * @param {number} index
 * @return {Object}
 */
com.unhurdle.spectrum.utils.getDataProviderItem = function(provider, index) {
  if (!provider) {
    return null;
  }
  if (org.apache.royale.utils.Language.is(provider, Array))
    return provider[index];
  return provider.getItemAt(index);
}
