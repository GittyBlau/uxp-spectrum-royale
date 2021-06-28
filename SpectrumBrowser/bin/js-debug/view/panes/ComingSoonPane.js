/**
 * Generated by Apache Royale Compiler from view/panes/ComingSoonPane.mxml
 * view.panes.ComingSoonPane
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.panes.ComingSoonPane');
/* Royale Dependency List: com.unhurdle.spectrum.typography.Heading*/

goog.require('view.DemoPane');



/**
 * @constructor
 * @extends {view.DemoPane}
 */
view.panes.ComingSoonPane = function() {
  view.panes.ComingSoonPane.base(this, 'constructor');
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.typography.Heading}
   */
  this.$ID_12_0;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;

  this.generateMXMLAttributes([
    2,
    'title',
    true,
    'Coming Soon',
    'notes',
    true,
    'We\'re still building out the demo',
    0,
    0
  ]);
  
};
goog.inherits(view.panes.ComingSoonPane, view.DemoPane);




Object.defineProperties(view.panes.ComingSoonPane.prototype, /** @lends {view.panes.ComingSoonPane.prototype} */ {
  'MXMLDescriptor': {
    /** @this {view.panes.ComingSoonPane} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = view.panes.ComingSoonPane.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          com.unhurdle.spectrum.typography.Heading,
          3,
          '_id',
          true,
          '$ID_12_0',
          'size',
          true,
          'S',
          'text',
          true,
          'Standard',
          0,
          0,
          null
        ];
        if (arr)
          this.mxmldd = arr.concat(data);
        else
          this.mxmldd = data;
      }
      return this.mxmldd;
    }
  }
});
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.panes.ComingSoonPane.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ComingSoonPane', qName: 'view.panes.ComingSoonPane', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.panes.ComingSoonPane.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'ComingSoonPane': { type: '', declaredBy: 'view.panes.ComingSoonPane'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.panes.ComingSoonPane.prototype.ROYALE_COMPILE_FLAGS = 9;
