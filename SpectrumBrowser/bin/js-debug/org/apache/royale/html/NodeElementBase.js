/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/NodeElementBase.as
 * org.apache.royale.html.NodeElementBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.NodeElementBase');
/* Royale Dependency List: */

goog.require('org.apache.royale.html.Group');



/**
 * @constructor
 * @extends {org.apache.royale.html.Group}
 */
org.apache.royale.html.NodeElementBase = function() {
  org.apache.royale.html.NodeElementBase.base(this, 'constructor');
  this.typeNames = "";
};
goog.inherits(org.apache.royale.html.NodeElementBase, org.apache.royale.html.Group);


/**
 * @param {string} name
 * @param {string} value
 */
org.apache.royale.html.NodeElementBase.prototype.setAttribute = function(name, value) {
  this.element.setAttribute(name, value);
  
};


/**
 * @param {string} name
 * @return {string}
 */
org.apache.royale.html.NodeElementBase.prototype.getAttribute = function(name) {
  return this.element.getAttribute(name);
  
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.NodeElementBase.prototype.nodeValue;


org.apache.royale.html.NodeElementBase.prototype.get__nodeValue = function() {
  
  return this.element.nodeValue;
};


org.apache.royale.html.NodeElementBase.prototype.set__nodeValue = function(value) {
  
  this.element.nodeValue = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.NodeElementBase.prototype.class;


org.apache.royale.html.NodeElementBase.prototype.get__class = function() {
  
  return this.element.getAttribute("class");
};


org.apache.royale.html.NodeElementBase.prototype.set__class = function(value) {
  this.element.setAttribute("class", value);
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.NodeElementBase.prototype.contentEditable;


org.apache.royale.html.NodeElementBase.prototype.get__contentEditable = function() {
  
  return this.element.contentEditable;
};


org.apache.royale.html.NodeElementBase.prototype.set__contentEditable = function(value) {
  this.element.contentEditable = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.html.NodeElementBase.prototype.isContentEditable;


org.apache.royale.html.NodeElementBase.prototype.get__isContentEditable = function() {
  
  return this.element.isContentEditable;
};


org.apache.royale.html.NodeElementBase.prototype.set__isContentEditable = function(value) {
  this.element.isContentEditable = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.NodeElementBase.prototype.dir;


org.apache.royale.html.NodeElementBase.prototype.get__dir = function() {
  
  return this.element.dir;
};


org.apache.royale.html.NodeElementBase.prototype.set__dir = function(value) {
  this.element.dir = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.html.NodeElementBase.prototype.hidden;


org.apache.royale.html.NodeElementBase.prototype.get__hidden = function() {
  
  return this.element.hidden;
};


org.apache.royale.html.NodeElementBase.prototype.set__hidden = function(value) {
  
  this.element.hidden = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.NodeElementBase.prototype.innerText;


org.apache.royale.html.NodeElementBase.prototype.get__innerText = function() {
  
  return this.element.innerText;
};


org.apache.royale.html.NodeElementBase.prototype.set__innerText = function(value) {
  
  this.element.innerText = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.NodeElementBase.prototype.lang;


org.apache.royale.html.NodeElementBase.prototype.get__lang = function() {
  
  return this.element.lang;
};


org.apache.royale.html.NodeElementBase.prototype.set__lang = function(value) {
  
  this.element.lang = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.NodeElementBase.prototype.title;


org.apache.royale.html.NodeElementBase.prototype.get__title = function() {
  
  return this.element.title;
};


org.apache.royale.html.NodeElementBase.prototype.set__title = function(value) {
  
  this.element.title = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.html.NodeElementBase.prototype.tabIndex;


org.apache.royale.html.NodeElementBase.prototype.get__tabIndex = function() {
  return (this.element.tabIndex) >> 0;
};


org.apache.royale.html.NodeElementBase.prototype.set__tabIndex = function(value) {
  this.element.tabIndex = value;
};


Object.defineProperties(org.apache.royale.html.NodeElementBase.prototype, /** @lends {org.apache.royale.html.NodeElementBase.prototype} */ {
/**
 * @type {string}
 */
nodeValue: {
get: org.apache.royale.html.NodeElementBase.prototype.get__nodeValue,
set: org.apache.royale.html.NodeElementBase.prototype.set__nodeValue},
/**
 * @type {string}
 */
class: {
get: org.apache.royale.html.NodeElementBase.prototype.get__class,
set: org.apache.royale.html.NodeElementBase.prototype.set__class},
/**
 * @type {string}
 */
contentEditable: {
get: org.apache.royale.html.NodeElementBase.prototype.get__contentEditable,
set: org.apache.royale.html.NodeElementBase.prototype.set__contentEditable},
/**
 * @type {boolean}
 */
isContentEditable: {
get: org.apache.royale.html.NodeElementBase.prototype.get__isContentEditable,
set: org.apache.royale.html.NodeElementBase.prototype.set__isContentEditable},
/**
 * @type {string}
 */
dir: {
get: org.apache.royale.html.NodeElementBase.prototype.get__dir,
set: org.apache.royale.html.NodeElementBase.prototype.set__dir},
/**
 * @type {boolean}
 */
hidden: {
get: org.apache.royale.html.NodeElementBase.prototype.get__hidden,
set: org.apache.royale.html.NodeElementBase.prototype.set__hidden},
/**
 * @type {string}
 */
innerText: {
get: org.apache.royale.html.NodeElementBase.prototype.get__innerText,
set: org.apache.royale.html.NodeElementBase.prototype.set__innerText},
/**
 * @type {string}
 */
lang: {
get: org.apache.royale.html.NodeElementBase.prototype.get__lang,
set: org.apache.royale.html.NodeElementBase.prototype.set__lang},
/**
 * @type {string}
 */
title: {
get: org.apache.royale.html.NodeElementBase.prototype.get__title,
set: org.apache.royale.html.NodeElementBase.prototype.set__title},
/**
 * @type {number}
 */
tabIndex: {
get: org.apache.royale.html.NodeElementBase.prototype.get__tabIndex,
set: org.apache.royale.html.NodeElementBase.prototype.set__tabIndex}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.NodeElementBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'NodeElementBase', qName: 'org.apache.royale.html.NodeElementBase', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.NodeElementBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'nodeValue': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'class': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'contentEditable': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'isContentEditable': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'dir': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'hidden': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'innerText': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'lang': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'title': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'tabIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.NodeElementBase'}
      };
    },
    methods: function () {
      return {
        'NodeElementBase': { type: '', declaredBy: 'org.apache.royale.html.NodeElementBase'},
        'setAttribute': { type: 'void', declaredBy: 'org.apache.royale.html.NodeElementBase', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'getAttribute': { type: 'String', declaredBy: 'org.apache.royale.html.NodeElementBase', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.NodeElementBase.prototype.ROYALE_COMPILE_FLAGS = 10;
