/**
 * Generated by Apache Royale Compiler from org/apache/royale/file/IFileModel.as
 * org.apache.royale.file.IFileModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.file.IFileModel');
/* Royale Dependency List: org.apache.royale.utils.BinaryData*/




/**
 * @interface
 */
org.apache.royale.file.IFileModel = function() {
};
/**  * @type {string}
 */org.apache.royale.file.IFileModel.prototype.type;
/**  * @type {number}
 */org.apache.royale.file.IFileModel.prototype.size;
/**  * @type {number}
 */org.apache.royale.file.IFileModel.prototype.lastModified;
/**  * @type {string}
 */org.apache.royale.file.IFileModel.prototype.name;
/**  * @type {Object}
 */org.apache.royale.file.IFileModel.prototype.blob;
/**  * @type {org.apache.royale.utils.BinaryData}
 */org.apache.royale.file.IFileModel.prototype.fileContent;
/**  * @type {File}
 */org.apache.royale.file.IFileModel.prototype.fileReference;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.file.IFileModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFileModel', qName: 'org.apache.royale.file.IFileModel', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.file.IFileModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'type': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.file.IFileModel'},
        'size': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.file.IFileModel'},
        'lastModified': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.file.IFileModel'},
        'name': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.file.IFileModel'},
        'blob': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.file.IFileModel'},
        'fileContent': { type: 'org.apache.royale.utils.BinaryData', access: 'writeonly', declaredBy: 'org.apache.royale.file.IFileModel'},
        'fileReference': { type: 'File', access: 'readwrite', declaredBy: 'org.apache.royale.file.IFileModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.file.IFileModel.prototype.ROYALE_COMPILE_FLAGS = 10;
