/**
 * Generated by Apache Royale Compiler from org/apache/royale/routing/HashRouter.as
 * org.apache.royale.routing.HashRouter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.routing.HashRouter');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ValueEvent,org.apache.royale.routing.IPathRouteBead,org.apache.royale.routing.RouteState,org.apache.royale.utils.MXMLDataInterpreter,org.apache.royale.utils.callLater,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.sendStrandEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.Strand');
goog.require('org.apache.royale.core.IMXMLDocument');
goog.require('org.apache.royale.routing.IRouter');



/**
 * @constructor
 * @extends {org.apache.royale.core.Strand}
 * @implements {org.apache.royale.routing.IRouter}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IMXMLDocument}
 */
org.apache.royale.routing.HashRouter = function() {
  org.apache.royale.routing.HashRouter.base(this, 'constructor');

this.org_apache_royale_routing_HashRouter__mxmlDocument = this;
};
goog.inherits(org.apache.royale.routing.HashRouter, org.apache.royale.core.Strand);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.routing.HashRouter.prototype.org_apache_royale_routing_HashRouter__useHashBang = true;


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.routing.HashRouter.prototype.org_apache_royale_routing_HashRouter__strand;


/**
 * Helper function to attach event listener without the need for casting
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @param {string} eventType
 * @param {Function} handler
 * @param {boolean=} capture
 */
org.apache.royale.routing.HashRouter.prototype.listenOnStrand = function(eventType, handler, capture) {
  capture = typeof capture !== 'undefined' ? capture : false;
  this.org_apache_royale_routing_HashRouter__strand.addEventListener(eventType, handler, capture);
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.routing.HashRouter.prototype.onInit = function(event) {
  if (this.beads) {
    var foreachiter0_target = this.beads;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var bead = foreachiter0_target[foreachiter0];
    
      this.addBead(bead);}
    
  }
  this.dispatchEvent(new org.apache.royale.events.Event("initBindings"));
  if (location.hash) {
    this.org_apache_royale_routing_HashRouter_hashChangeHandler();
  } else {
    this.dispatchEvent(new org.apache.royale.events.Event("stateChange"));
    this.dispatchEvent(new org.apache.royale.events.Event("routeComplete"));
  }
};


/**
 * @private
 */
org.apache.royale.routing.HashRouter.prototype.org_apache_royale_routing_HashRouter_hashChangeHandler = function() {
  this.org_apache_royale_routing_HashRouter_parseHash();
  this.dispatchEvent(new org.apache.royale.events.Event("stateChange"));
  this.dispatchEvent(new org.apache.royale.events.Event("routeComplete"));
};


/**
 * @private
 */
org.apache.royale.routing.HashRouter.prototype.org_apache_royale_routing_HashRouter_parseHash = function() {
  var /** @type {string} */ hash = location.hash;
  var /** @type {number} */ index = 0;
  if (hash.indexOf("!") == 1) {
    index = 1;
  }
  hash = hash.slice(index + 1);
  var /** @type {org.apache.royale.events.ValueEvent} */ ev = new org.apache.royale.events.ValueEvent("urlReceived", hash);
  this.dispatchEvent(ev);
};


/**
 * @private
 * @type {org.apache.royale.routing.RouteState}
 */
org.apache.royale.routing.HashRouter.prototype.org_apache_royale_routing_HashRouter__routeState;


/**
 * Commits the current state to the browsing history
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.8
 */
org.apache.royale.routing.HashRouter.prototype.setState = function() {
  var /** @type {string} */ hash = this.useHashBang ? "#!" : "#";
  var /** @type {org.apache.royale.events.ValueEvent} */ ev = new org.apache.royale.events.ValueEvent("urlNeeded", "");
  this.dispatchEvent(ev);
  var /** @type {org.apache.royale.events.ValueEvent} */ stateEv = new org.apache.royale.events.ValueEvent("stateNeeded", {});
  this.dispatchEvent(stateEv);
  if (!ev.defaultPrevented) {
    hash += org.apache.royale.utils.Language.string(ev.value);
    window.history.pushState(stateEv.value, this.org_apache_royale_routing_HashRouter__routeState.title, hash);
    org.apache.royale.utils.sendStrandEvent(this, "stateSet");
  }
};


/**
 * Same as setState, but also notifies of the state change
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.8
 */
org.apache.royale.routing.HashRouter.prototype.renderState = function() {
  this.setState();
  this.dispatchEvent(new org.apache.royale.events.Event("stateChange"));
  this.dispatchEvent(new org.apache.royale.events.Event("routeComplete"));
};


/**
 * @private
 * @type {Array}
 */
org.apache.royale.routing.HashRouter.prototype.org_apache_royale_routing_HashRouter__mxmlDescriptor;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.routing.HashRouter.prototype.org_apache_royale_routing_HashRouter__mxmlDocument;


/**
 *  @asprivate
 * @param {Object} document
 * @param {Array} value
 */
org.apache.royale.routing.HashRouter.prototype.setMXMLDescriptor = function(document, value) {
  this.org_apache_royale_routing_HashRouter__mxmlDocument = document;
  this.org_apache_royale_routing_HashRouter__mxmlDescriptor = value;
};


/**
 *  @copy org.apache.royale.core.Application#generateMXMLAttributes()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @param {Array} data
 */
org.apache.royale.routing.HashRouter.prototype.generateMXMLAttributes = function(data) {
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.routing.HashRouter.prototype.useHashBang;


org.apache.royale.routing.HashRouter.prototype.get__useHashBang = function() {
  return this.org_apache_royale_routing_HashRouter__useHashBang;
};


org.apache.royale.routing.HashRouter.prototype.set__useHashBang = function(value) {
  this.org_apache_royale_routing_HashRouter__useHashBang = value;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.routing.HashRouter.prototype.host;


org.apache.royale.routing.HashRouter.prototype.get__host = function() {
  return this.org_apache_royale_routing_HashRouter__strand;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.routing.HashRouter.prototype.strand;


org.apache.royale.routing.HashRouter.prototype.set__strand = function(value) {
  this.org_apache_royale_routing_HashRouter__strand = value;
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.routing.IPathRouteBead, "iPathRouteBead", this);
  window.addEventListener("hashchange", org.apache.royale.utils.Language.closure(this.org_apache_royale_routing_HashRouter_hashChangeHandler, this, 'org_apache_royale_routing_HashRouter_hashChangeHandler'));
  org.apache.royale.utils.callLater(org.apache.royale.utils.Language.closure(this.onInit, this, 'onInit'));
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.routing.RouteState}
 */
org.apache.royale.routing.HashRouter.prototype.routeState;


org.apache.royale.routing.HashRouter.prototype.get__routeState = function() {
  if (!this.org_apache_royale_routing_HashRouter__routeState) {
    this.org_apache_royale_routing_HashRouter__routeState = new org.apache.royale.routing.RouteState();
  }
  return this.org_apache_royale_routing_HashRouter__routeState;
};


org.apache.royale.routing.HashRouter.prototype.set__routeState = function(value) {
  this.org_apache_royale_routing_HashRouter__routeState = value;
};


/**
 * @nocollapse
 * @export
 * @type {Array}
 */
org.apache.royale.routing.HashRouter.prototype.MXMLDescriptor;


org.apache.royale.routing.HashRouter.prototype.get__MXMLDescriptor = function() {
  return this.org_apache_royale_routing_HashRouter__mxmlDescriptor;
};


Object.defineProperties(org.apache.royale.routing.HashRouter.prototype, /** @lends {org.apache.royale.routing.HashRouter.prototype} */ {
/**
 * @type {boolean}
 */
useHashBang: {
get: org.apache.royale.routing.HashRouter.prototype.get__useHashBang,
set: org.apache.royale.routing.HashRouter.prototype.set__useHashBang},
/**
 * @type {org.apache.royale.core.IStrand}
 */
host: {
get: org.apache.royale.routing.HashRouter.prototype.get__host},
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.routing.HashRouter.prototype.set__strand},
/**
 * @type {org.apache.royale.routing.RouteState}
 */
routeState: {
get: org.apache.royale.routing.HashRouter.prototype.get__routeState,
set: org.apache.royale.routing.HashRouter.prototype.set__routeState},
/**
 * @type {Array}
 */
MXMLDescriptor: {
get: org.apache.royale.routing.HashRouter.prototype.get__MXMLDescriptor}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.routing.HashRouter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HashRouter', qName: 'org.apache.royale.routing.HashRouter', kind: 'class' }], interfaces: [org.apache.royale.routing.IRouter, org.apache.royale.core.IBead, org.apache.royale.core.IMXMLDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.routing.HashRouter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'useHashBang': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.routing.HashRouter'},
        'host': { type: 'org.apache.royale.core.IStrand', access: 'readonly', declaredBy: 'org.apache.royale.routing.HashRouter'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.routing.HashRouter'},
        'routeState': { type: 'org.apache.royale.routing.RouteState', access: 'readwrite', declaredBy: 'org.apache.royale.routing.HashRouter'},
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.routing.HashRouter'}
      };
    },
    methods: function () {
      return {
        'HashRouter': { type: '', declaredBy: 'org.apache.royale.routing.HashRouter'},
        'setState': { type: 'void', declaredBy: 'org.apache.royale.routing.HashRouter'},
        'renderState': { type: 'void', declaredBy: 'org.apache.royale.routing.HashRouter'},
        'setMXMLDescriptor': { type: 'void', declaredBy: 'org.apache.royale.routing.HashRouter', parameters: function () { return [ 'Object', false ,'Array', false ]; }},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.royale.routing.HashRouter', parameters: function () { return [ 'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.routing.HashRouter.prototype.ROYALE_COMPILE_FLAGS = 10;
