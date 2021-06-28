/**
 * Generated by Apache Royale Compiler from org/apache/royale/file/beads/FileLoader.as
 * org.apache.royale.file.beads.FileLoader
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.file.beads.FileLoader');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.file.FileProxy,org.apache.royale.file.IFileModel,org.apache.royale.utils.BinaryData,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBead');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBead}
 */
org.apache.royale.file.beads.FileLoader = function() {
  org.apache.royale.file.beads.FileLoader.base(this, 'constructor');
};
goog.inherits(org.apache.royale.file.beads.FileLoader, org.apache.royale.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.file.beads.FileLoader.prototype.org_apache_royale_file_beads_FileLoader__strand;


/**
 *  Load the file to the model's blob.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 */
org.apache.royale.file.beads.FileLoader.prototype.load = function() {
  
  var /** @type {FileReader} */ reader = new FileReader();
  goog.events.listen(reader, 'load', org.apache.royale.utils.Language.closure(this.fileLoadHandler, this, 'fileLoadHandler'));
  reader.readAsArrayBuffer(this.fileModel.fileReference);
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.file.beads.FileLoader.prototype.fileLoadHandler = function(event) {
  this.fileModel.fileContent = new org.apache.royale.utils.BinaryData(event.target.result);
  this.dispatchEvent(new org.apache.royale.events.Event(org.apache.royale.events.Event.COMPLETE));
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.file.beads.FileLoader.prototype.strand;


org.apache.royale.file.beads.FileLoader.prototype.set__strand = function(value) {
  this.org_apache_royale_file_beads_FileLoader__strand = value;
};


/**
 * @nocollapse
 * @type {org.apache.royale.file.IFileModel}
 */
org.apache.royale.file.beads.FileLoader.prototype.fileModel;


org.apache.royale.file.beads.FileLoader.prototype.get__fileModel = function() {
  return this.org_apache_royale_file_beads_FileLoader__strand.model;
};


Object.defineProperties(org.apache.royale.file.beads.FileLoader.prototype, /** @lends {org.apache.royale.file.beads.FileLoader.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.file.beads.FileLoader.prototype.set__strand},
/**
 * @type {org.apache.royale.file.IFileModel}
 */
fileModel: {
get: org.apache.royale.file.beads.FileLoader.prototype.get__fileModel}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.file.beads.FileLoader.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FileLoader', qName: 'org.apache.royale.file.beads.FileLoader', kind: 'class' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.file.beads.FileLoader.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.file.beads.FileLoader'}
      };
    },
    methods: function () {
      return {
        'load': { type: 'void', declaredBy: 'org.apache.royale.file.beads.FileLoader'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.file.beads.FileLoader.prototype.ROYALE_COMPILE_FLAGS = 10;
