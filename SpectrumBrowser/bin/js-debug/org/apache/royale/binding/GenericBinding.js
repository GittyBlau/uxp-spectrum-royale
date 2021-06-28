/**
 * Generated by Apache Royale Compiler from org/apache/royale/binding/GenericBinding.as
 * org.apache.royale.binding.GenericBinding
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.GenericBinding');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.ValueChangeEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IDocument');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IDocument}
 */
org.apache.royale.binding.GenericBinding = function() {
};


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.binding.GenericBinding.prototype.document;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.binding.GenericBinding.prototype.destination;


/**
 * @type {Object}
 */
org.apache.royale.binding.GenericBinding.prototype.source;


/**
 * @type {Object}
 */
org.apache.royale.binding.GenericBinding.prototype.destinationData;


/**
 * @type {Function}
 */
org.apache.royale.binding.GenericBinding.prototype.destinationFunction;


/**
 * @type {boolean}
 */
org.apache.royale.binding.GenericBinding.prototype.isStatic;


/**
 * @type {Object}
 */
org.apache.royale.binding.GenericBinding.prototype.staticRoot;


/**
 * @royaleignorecoercion Array
 * @royaleignorecoercion Function
 * @private
 * @return {Object}
 */
org.apache.royale.binding.GenericBinding.prototype.org_apache_royale_binding_GenericBinding_getValueFromSource = function() {
  if (org.apache.royale.utils.Language.is(this.source, Array)) {
    var /** @type {Array} */ arr = this.source;
    var /** @type {number} */ n = (arr.length) >> 0;
    var /** @type {Object} */ obj;
    if (this.isStatic) {
      obj = this.staticRoot;
    }
    else
      obj = this.document[arr[0]];
    if (obj == null)
      return null;
    for (var /** @type {number} */ i = 1; i < n; i++) {
      obj = obj[arr[i]];
      if (obj == null)
        return null;
    }
    return obj;
  } else if (org.apache.royale.utils.Language.is(this.source, Function)) {
    var /** @type {Function} */ fn =  /** @type {Function} */ (this.source);
    obj = fn.apply(this.document);
    return obj;
  } else if (org.apache.royale.utils.Language.is(this.source, String)) {
    obj = this.isStatic ? this.staticRoot[this.source] : this.document[this.source];
    return obj;
  }
  return null;
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.binding.GenericBinding.prototype.org_apache_royale_binding_GenericBinding__listening;


/**
 * @royaleignorecoercion Array
 * @private
 * @param {Object} value
 */
org.apache.royale.binding.GenericBinding.prototype.org_apache_royale_binding_GenericBinding_applyValue = function(value) {
  if (this.destinationFunction != null) {
    this.destinationFunction.apply(this.document, [value]);
  } else if (org.apache.royale.utils.Language.is(this.destinationData, Array)) {
    var /** @type {Array} */ arr = this.destinationData;
    var /** @type {number} */ n = (arr.length) >> 0;
    var /** @type {Object} */ obj = this.document[arr[0]];
    if (obj == null && arr[0] == 'this')
      obj = this.document;
    if (obj == null) {
      if (!this.org_apache_royale_binding_GenericBinding__listening) {
        this.document.addEventListener(org.apache.royale.events.ValueChangeEvent.VALUE_CHANGE, org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_GenericBinding_destinationChangeHandler, this, 'org_apache_royale_binding_GenericBinding_destinationChangeHandler'));
        this.org_apache_royale_binding_GenericBinding__listening = true;
      }
      return;
    }
    for (var /** @type {number} */ i = 1; i < n - 1; i++) {
      obj = obj[arr[i]];
      if (obj == null)
        return;
    }
    obj[arr[n - 1]] = value;
  } else if (org.apache.royale.utils.Language.is(this.destinationData, String)) {
    this.document[this.destinationData] = value;
  }
};


/**
 *  @copy org.apache.royale.core.IDocument#setDocument()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.binding.GenericBinding.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.document = document;
};


/**
 *  The method that gets called by the watcher when the value
 *  may have changed.
 *
 *  @asparam value The new value.
 *  @asparam getFromSource true if the value parameter should be ignored, and an
 *  attempt should be made to get the value directly from the source object.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} value
 * @param {boolean} getFromSource
 */
org.apache.royale.binding.GenericBinding.prototype.valueChanged = function(value, getFromSource) {
  try {
    if (getFromSource) {
      value = this.org_apache_royale_binding_GenericBinding_getValueFromSource();
    }
    this.org_apache_royale_binding_GenericBinding_applyValue(value);
  } catch (e) {
  }
};


/**
 * @private
 * @param {org.apache.royale.events.ValueChangeEvent} event
 */
org.apache.royale.binding.GenericBinding.prototype.org_apache_royale_binding_GenericBinding_destinationChangeHandler = function(event) {
  if (event.propertyName == this.destinationData[0])
    this.valueChanged(null, true);
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.binding.GenericBinding.prototype.strand;


org.apache.royale.binding.GenericBinding.prototype.set__strand = function(value) {
  this.destination = value;
  try {
    var /** @type {Object} */ val = this.org_apache_royale_binding_GenericBinding_getValueFromSource();
    this.org_apache_royale_binding_GenericBinding_applyValue(val);
  } catch (e) {
  }
};


Object.defineProperties(org.apache.royale.binding.GenericBinding.prototype, /** @lends {org.apache.royale.binding.GenericBinding.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.binding.GenericBinding.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.GenericBinding.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GenericBinding', qName: 'org.apache.royale.binding.GenericBinding', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.GenericBinding.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'source': { type: 'Object', get_set: function (/** org.apache.royale.binding.GenericBinding */ inst, /** * */ v) {return v !== undefined ? inst.source = v : inst.source;}},
        'destinationData': { type: 'Object', get_set: function (/** org.apache.royale.binding.GenericBinding */ inst, /** * */ v) {return v !== undefined ? inst.destinationData = v : inst.destinationData;}},
        'destinationFunction': { type: 'Function', get_set: function (/** org.apache.royale.binding.GenericBinding */ inst, /** * */ v) {return v !== undefined ? inst.destinationFunction = v : inst.destinationFunction;}},
        'isStatic': { type: 'Boolean', get_set: function (/** org.apache.royale.binding.GenericBinding */ inst, /** * */ v) {return v !== undefined ? inst.isStatic = v : inst.isStatic;}},
        'staticRoot': { type: 'Object', get_set: function (/** org.apache.royale.binding.GenericBinding */ inst, /** * */ v) {return v !== undefined ? inst.staticRoot = v : inst.staticRoot;}}
      };
    },
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.binding.GenericBinding'}
      };
    },
    methods: function () {
      return {
        'GenericBinding': { type: '', declaredBy: 'org.apache.royale.binding.GenericBinding'},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.binding.GenericBinding', parameters: function () { return [ 'Object', false ,'String', true ]; }},
        'valueChanged': { type: 'void', declaredBy: 'org.apache.royale.binding.GenericBinding', parameters: function () { return [ 'Object', false ,'Boolean', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.binding.GenericBinding.prototype.ROYALE_COMPILE_FLAGS = 10;
