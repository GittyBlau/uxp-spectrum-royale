/**
 * Generated by Apache Royale Compiler from org/apache/royale/binding/ContainerDataBinding.as
 * org.apache.royale.binding.ContainerDataBinding
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.ContainerDataBinding');
/* Royale Dependency List: org.apache.royale.binding.ChainBinding,org.apache.royale.binding.ConstantBinding,org.apache.royale.binding.SimpleBinding,org.apache.royale.core.IBinding,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.binding.DataBindingBase');
goog.require('org.apache.royale.core.IBead');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.binding.DataBindingBase}
 * @implements {org.apache.royale.core.IBead}
 */
org.apache.royale.binding.ContainerDataBinding = function() {
  org.apache.royale.binding.ContainerDataBinding.base(this, 'constructor');
};
goog.inherits(org.apache.royale.binding.ContainerDataBinding, org.apache.royale.binding.DataBindingBase);


/**
 * @royaleignorecoercion org.apache.royale.core.IBinding
 * @royaleignorecoercion String
 * @asprivate
 * @protected
 * @override
 */
org.apache.royale.binding.ContainerDataBinding.prototype.processBindingData = function(bindingData, first) {
  var /** @type {number} */ i = 0;
  var /** @type {Object} */ fieldWatcher;
  var /** @type {org.apache.royale.binding.SimpleBinding} */ sb;
  var /** @type {org.apache.royale.binding.ConstantBinding} */ cb;
  var /** @type {Object} */ destinationObject;
  var /** @type {Object} */ binding = null;
  var /** @type {number} */ n = (bindingData[first]) >> 0;
  var /** @type {Array} */ bindings = [];
  //var /** @type {number} */ i = 0;
  var /** @type {number} */ index = (first + 1) >> 0;
  for (i = 0; i < n; i++) {
    binding = {};
    binding.source = bindingData[index++];
    binding.destFunc = bindingData[index++];
    binding.destination = bindingData[index++];
    bindings.push(binding);
  }
  var /** @type {Object} */ watchers = this.decodeWatcher(bindingData.slice(index));
  for (i = 0; i < n; i++) {
    binding = bindings[i];
    if (org.apache.royale.utils.Language.is(binding.source, Array)) {
      if (binding.source[0] in this._strand) {
        var /** @type {Object} */ compWatcher;
        var /** @type {boolean} */ simpleDest = typeof(binding.destination) == 'string';
        if (binding.source.length == 2 && (simpleDest || binding.destination.length == 2)) {
          compWatcher = watchers.watcherMap[binding.source[0]];
          if (compWatcher) {
            fieldWatcher = compWatcher.children.watcherMap[binding.source[1]];
          }
          if (fieldWatcher && org.apache.royale.utils.Language.is(fieldWatcher.eventNames, String)) {
            sb = new org.apache.royale.binding.SimpleBinding();
            sb.destinationPropertyName = org.apache.royale.utils.Language.string(simpleDest ? binding.destination : binding.destination[1]);
            sb.eventName = fieldWatcher.eventNames;
            if (simpleDest || binding.destination[0] == 'this') {
              sb.destination = this._strand;
            } else {
              sb.destination = this._strand[binding.destination[0]];
            }
            sb.sourceID = org.apache.royale.utils.Language.string(binding.source[0]);
            sb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source[1]);
            sb.setDocument(this._strand);
            this.prepareCreatedBinding(sb, binding, destinationObject);
          } else if (fieldWatcher && fieldWatcher.eventNames == null) {
            cb = new org.apache.royale.binding.ConstantBinding();
            cb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
            cb.sourceID = org.apache.royale.utils.Language.string(binding.source[0]);
            cb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source[1]);
            cb.setDocument(this._strand);
            this.prepareCreatedBinding(cb, binding);
          } else {
            this.makeGenericBinding(binding, i, watchers);
          }
        } else {
          compWatcher = watchers.watcherMap[binding.source[0]];
          var /** @type {org.apache.royale.binding.ChainBinding} */ chb = new org.apache.royale.binding.ChainBinding();
          chb.destination = binding.destination;
          chb.source = binding.source;
          chb.watcherChain = compWatcher;
          chb.setDocument(this._strand);
          this._strand.addBead(chb);
        }
      } else if (org.apache.royale.utils.Language.is(binding.destination, Array)) {
        this.makeConstantBinding(binding);
      } else {
        this.makeGenericBinding(binding, i, watchers);
      }
    } else if (org.apache.royale.utils.Language.is(binding.source, String) && org.apache.royale.utils.Language.is(binding.destination, Array)) {
      fieldWatcher = watchers.watcherMap[binding.source];
      if (fieldWatcher == null) {
        cb = new org.apache.royale.binding.ConstantBinding();
        cb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
        cb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source);
        cb.setDocument(this._strand);
        destinationObject = null;
        if (binding.destination[0] == "this") {
          destinationObject = this._strand;
        } else {
          destinationObject = this._strand[binding.destination[0]];
        }
        this.prepareCreatedBinding(cb, binding, destinationObject);
      } else if (org.apache.royale.utils.Language.is(fieldWatcher.eventNames, String)) {
        var /** @type {boolean} */ isStatic = fieldWatcher.type == "static";
        sb = new org.apache.royale.binding.SimpleBinding(isStatic);
        sb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
        sb.eventName = fieldWatcher.eventNames;
        sb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source);
        sb.setDocument(isStatic ? fieldWatcher.parentObj : this._strand);
        this.prepareCreatedBinding(sb, binding);
      }
    } else {
      this.makeGenericBinding(binding, i, watchers);
    }
    fieldWatcher = null;
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.ContainerDataBinding.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ContainerDataBinding', qName: 'org.apache.royale.binding.ContainerDataBinding', kind: 'class' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.ContainerDataBinding.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'ContainerDataBinding': { type: '', declaredBy: 'org.apache.royale.binding.ContainerDataBinding'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.binding.ContainerDataBinding.prototype.ROYALE_COMPILE_FLAGS = 10;
