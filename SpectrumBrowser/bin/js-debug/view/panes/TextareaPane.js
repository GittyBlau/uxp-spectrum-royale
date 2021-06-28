/**
 * Generated by Apache Royale Compiler from view/panes/TextareaPane.mxml
 * view.panes.TextareaPane
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.panes.TextareaPane');
/* Royale Dependency List: view.components.Variant,org.apache.royale.html.elements.Div,com.unhurdle.spectrum.TextArea,view.components.Markup,view.components.StyledCode,org.apache.royale.events.ValueChangeEvent*/

goog.require('view.DemoPane');



/**
 * @constructor
 * @extends {view.DemoPane}
 */
view.panes.TextareaPane = function() {
  view.panes.TextareaPane.base(this, 'constructor');
  
  this.codeString1_ = '<sp:TextArea placeholder="Enter your name"/>\n' + '<sp:TextArea placeholder="Enter your name" disabled="true"/>\n' + '<sp:TextArea placeholder="Enter your name" text="A valid input" required="true"/>\n' + '<sp:TextArea placeholder="Enter your name" text="A valid input" disabled="true" required="true"/>\n' + '<sp:TextArea placeholder="Enter your name" text="Read-only input" readonly="true"/>\n' + '<sp:TextArea placeholder="Enter your name" text="A valid input" minLength="5"/>\n' + '<sp:TextArea placeholder="Enter your name" text="Invalid input" minLength="20"/>\n' + '<sp:TextArea placeholder="Enter your name" text="Invalid input" maxLength="3"/>\n' + '<sp:TextArea placeholder="Enter your name" text="Invalid input" minLength="2" maxLength="7"/>';
  this.codeString2_ = '<sp:TextArea placeholder="Enter your name" quiet="true"/>\n' + '<sp:TextArea placeholder="Enter your name" quiet="true" disabled="true"/>\n' + '<sp:TextArea placeholder="Enter your name" quiet="true" text="A valid input" required="true"/>\n' + '<sp:TextArea placeholder="Enter your name" quiet="true" text="A valid input" disabled="true" required="true"/>\n' + '<sp:TextArea placeholder="Enter your name" quiet="true" text="Read-only input" readonly="true"/>\n' + '<sp:TextArea placeholder="Enter your name" quiet="true" text="A valid input" minLength="5"/>\n' + '<sp:TextArea placeholder="Enter your name" quiet="true" text="Invalid input" minLength="20"/>\n' + '<sp:TextArea placeholder="Enter your name" quiet="true" text="Invalid input" maxLength="3"/>\n' + '<sp:TextArea placeholder="Enter your name" quiet="true" text="Invalid input" minLength="2" maxLength="7"/>';
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_10;
  
  /**
   * @private
   * @type {org.apache.royale.html.elements.Div}
   */
  this.$ID_12_9;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_0;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_1;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_2;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_3;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_4;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_5;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_6;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_7;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_8;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_12;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_11;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_23;
  
  /**
   * @private
   * @type {org.apache.royale.html.elements.Div}
   */
  this.$ID_12_22;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_13;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_14;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_15;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_16;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_17;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_18;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_19;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_20;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextArea}
   */
  this.$ID_12_21;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_25;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_24;
  
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
    'Text Area',
    'notes',
    true,
    'A multi-line text field.',
    0,
    0
  ]);
  
};
goog.inherits(view.panes.TextareaPane, view.DemoPane);




/**
 * @type {string}
 */
view.panes.TextareaPane.prototype.codeString1_ = null;


/**
 * @type {string}
 */
view.panes.TextareaPane.prototype.codeString2_ = null;


Object.defineProperties(view.panes.TextareaPane.prototype, /** @lends {view.panes.TextareaPane.prototype} */ {
/**
 * @type {string}
 */
codeString1: {
/** @this {view.panes.TextareaPane} */
  get: function() {
  return this.codeString1_;
  },

/** @this {view.panes.TextareaPane} */
set: function(value) {
if (value != this.codeString1_) {
    var oldValue = this.codeString1_;
    this.codeString1_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeString1", oldValue, value));
}
}},/**
 * @type {string}
 */
codeString2: {
/** @this {view.panes.TextareaPane} */
  get: function() {
  return this.codeString2_;
  },

/** @this {view.panes.TextareaPane} */
set: function(value) {
if (value != this.codeString2_) {
    var oldValue = this.codeString2_;
    this.codeString2_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeString2", oldValue, value));
}
}}}
);Object.defineProperties(view.panes.TextareaPane.prototype, /** @lends {view.panes.TextareaPane.prototype} */ {
  'MXMLDescriptor': {
    /** @this {view.panes.TextareaPane} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = view.panes.TextareaPane.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          view.components.Variant,
          1,
          '_id',
          true,
          '$ID_12_10',
          0,
          0,
          [
            org.apache.royale.html.elements.Div,
            1,
            '_id',
            true,
            '$ID_12_9',
            0,
            0,
            [
              com.unhurdle.spectrum.TextArea,
              3,
              '_id',
              true,
              '$ID_12_0',
              'placeholder',
              true,
              'Enter your name',
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              4,
              '_id',
              true,
              '$ID_12_1',
              'placeholder',
              true,
              'Enter your name',
              'disabled',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              5,
              '_id',
              true,
              '$ID_12_2',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'A valid input',
              'required',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              6,
              '_id',
              true,
              '$ID_12_3',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'A valid input',
              'disabled',
              true,
              true,
              'required',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              5,
              '_id',
              true,
              '$ID_12_4',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'Read-only input',
              'readonly',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              5,
              '_id',
              true,
              '$ID_12_5',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'A valid input',
              'minLength',
              true,
              5,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              5,
              '_id',
              true,
              '$ID_12_6',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'Invalid input',
              'minLength',
              true,
              20,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              5,
              '_id',
              true,
              '$ID_12_7',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'Invalid input',
              'maxLength',
              true,
              3,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              6,
              '_id',
              true,
              '$ID_12_8',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'Invalid input',
              'minLength',
              true,
              2,
              'maxLength',
              true,
              7,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null
            ]
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_12',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_11',
            0,
            0,
            null
          ],
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_23',
          'header',
          true,
          'Quiet',
          0,
          0,
          [
            org.apache.royale.html.elements.Div,
            1,
            '_id',
            true,
            '$ID_12_22',
            0,
            0,
            [
              com.unhurdle.spectrum.TextArea,
              4,
              '_id',
              true,
              '$ID_12_13',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              5,
              '_id',
              true,
              '$ID_12_14',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'disabled',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              6,
              '_id',
              true,
              '$ID_12_15',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'text',
              true,
              'A valid input',
              'required',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              7,
              '_id',
              true,
              '$ID_12_16',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'text',
              true,
              'A valid input',
              'disabled',
              true,
              true,
              'required',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              6,
              '_id',
              true,
              '$ID_12_17',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'text',
              true,
              'Read-only input',
              'readonly',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              6,
              '_id',
              true,
              '$ID_12_18',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'text',
              true,
              'A valid input',
              'minLength',
              true,
              5,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              6,
              '_id',
              true,
              '$ID_12_19',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'text',
              true,
              'Invalid input',
              'minLength',
              true,
              20,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              6,
              '_id',
              true,
              '$ID_12_20',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'text',
              true,
              'Invalid input',
              'maxLength',
              true,
              3,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextArea,
              7,
              '_id',
              true,
              '$ID_12_21',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'text',
              true,
              'Invalid input',
              'minLength',
              true,
              2,
              'maxLength',
              true,
              7,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null
            ]
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_25',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_24',
            0,
            0,
            null
          ]
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
 * @export
 */
view.panes.TextareaPane.prototype._bindings = [
2,
"codeString1",
null,
["$ID_12_11", "text"],
"codeString2",
null,
["$ID_12_24", "text"],
0,
2,
"codeString1",
"valueChange",
0,
null,
null,
1,
2,
"codeString2",
"valueChange",
1,
null,
null];
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.panes.TextareaPane.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextareaPane', qName: 'view.panes.TextareaPane', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.panes.TextareaPane.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'codeString1': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TextareaPane'},
        'codeString2': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TextareaPane'}
      };
    },
    methods: function () {
      return {
        'TextareaPane': { type: '', declaredBy: 'view.panes.TextareaPane'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.panes.TextareaPane.prototype.ROYALE_COMPILE_FLAGS = 9;
