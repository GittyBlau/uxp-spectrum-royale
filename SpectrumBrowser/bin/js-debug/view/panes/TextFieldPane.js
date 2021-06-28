/**
 * Generated by Apache Royale Compiler from view/panes/TextFieldPane.mxml
 * view.panes.TextFieldPane
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.panes.TextFieldPane');
/* Royale Dependency List: view.components.Variant,org.apache.royale.html.elements.Div,com.unhurdle.spectrum.TextField,view.components.Markup,view.components.StyledCode,org.apache.royale.events.ValueChangeEvent*/

goog.require('view.DemoPane');



/**
 * @constructor
 * @extends {view.DemoPane}
 */
view.panes.TextFieldPane = function() {
  view.panes.TextFieldPane.base(this, 'constructor');
  
  this.codeString1_ = '[Bindable]public var nameRegex:String = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";\n' + '\n' + '\n' + '<sp:TextField placeholder="Enter your name"/>\n' + '<sp:TextField placeholder="Enter your name" disabled="true"/>\n' + '<sp:TextField placeholder="Enter your name" required="true"/>\n' + '<sp:TextField placeholder="Enter your name" required="true" disabled="true"/>\n' + '<sp:TextField placeholder="Enter your name" readonly="true" text="Read-only input"/>\n' + '<sp:TextField placeholder="Enter your name" text="test@gmail.com" pattern="{nameRegex}"/>\n' + '<sp:TextField placeholder="Enter your name" text="Invalid input" pattern="{nameRegex}"/>';
  this.codeString2_ = '[Bindable]public var nameRegex:String = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";\n' + '\n' + '\n' + '<sp:TextField placeholder="Enter your name" quiet="true"/>\n' + '<sp:TextField placeholder="Enter your name" quiet="true" disabled="true"/>\n' + '<sp:TextField placeholder="Enter your name" quiet="true" required="true"/>\n' + '<sp:TextField placeholder="Enter your name" quiet="true" required="true" disabled="true"/>\n' + '<sp:TextField placeholder="Enter your name" quiet="true" readonly="true" text="Read-only input"/>\n' + '<sp:TextField placeholder="Enter your name" quiet="true" text="test@gmail.com" pattern="{nameRegex}"/>\n' + '<sp:TextField placeholder="Enter your name" quiet="true" text="Invalid input" pattern="{nameRegex}"/>';
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_8;
  
  /**
   * @private
   * @type {org.apache.royale.html.elements.Div}
   */
  this.$ID_12_7;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_0;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_1;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_2;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_3;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_4;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_5;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_6;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_10;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_9;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_19;
  
  /**
   * @private
   * @type {org.apache.royale.html.elements.Div}
   */
  this.$ID_12_18;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_11;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_12;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_13;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_14;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_15;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_16;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.TextField}
   */
  this.$ID_12_17;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_21;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_20;
  
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
    'Text Field',
    'notes',
    true,
    'A Spectrum text field',
    0,
    0
  ]);
  
};
goog.inherits(view.panes.TextFieldPane, view.DemoPane);




/**
 * @type {string}
 */
view.panes.TextFieldPane.prototype.codeString1_ = null;


/**
 * @type {string}
 */
view.panes.TextFieldPane.prototype.codeString2_ = null;


/**
 * @type {string}
 */
view.panes.TextFieldPane.prototype.nameRegex_ = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";


Object.defineProperties(view.panes.TextFieldPane.prototype, /** @lends {view.panes.TextFieldPane.prototype} */ {
/**
 * @type {string}
 */
codeString1: {
/** @this {view.panes.TextFieldPane} */
  get: function() {
  return this.codeString1_;
  },

/** @this {view.panes.TextFieldPane} */
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
/** @this {view.panes.TextFieldPane} */
  get: function() {
  return this.codeString2_;
  },

/** @this {view.panes.TextFieldPane} */
set: function(value) {
if (value != this.codeString2_) {
    var oldValue = this.codeString2_;
    this.codeString2_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeString2", oldValue, value));
}
}},/**
 * @type {string}
 */
nameRegex: {
/** @this {view.panes.TextFieldPane} */
  get: function() {
  return this.nameRegex_;
  },

/** @this {view.panes.TextFieldPane} */
set: function(value) {
if (value != this.nameRegex_) {
    var oldValue = this.nameRegex_;
    this.nameRegex_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "nameRegex", oldValue, value));
}
}}}
);Object.defineProperties(view.panes.TextFieldPane.prototype, /** @lends {view.panes.TextFieldPane.prototype} */ {
  'MXMLDescriptor': {
    /** @this {view.panes.TextFieldPane} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = view.panes.TextFieldPane.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          view.components.Variant,
          1,
          '_id',
          true,
          '$ID_12_8',
          0,
          0,
          [
            org.apache.royale.html.elements.Div,
            1,
            '_id',
            true,
            '$ID_12_7',
            0,
            0,
            [
              com.unhurdle.spectrum.TextField,
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
              com.unhurdle.spectrum.TextField,
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
              com.unhurdle.spectrum.TextField,
              4,
              '_id',
              true,
              '$ID_12_2',
              'placeholder',
              true,
              'Enter your name',
              'required',
              true,
              true,
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextField,
              5,
              '_id',
              true,
              '$ID_12_3',
              'placeholder',
              true,
              'Enter your name',
              'required',
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
              com.unhurdle.spectrum.TextField,
              5,
              '_id',
              true,
              '$ID_12_4',
              'placeholder',
              true,
              'Enter your name',
              'readonly',
              true,
              true,
              'text',
              true,
              'Read-only input',
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextField,
              4,
              '_id',
              true,
              '$ID_12_5',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'test@gmail.com',
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextField,
              4,
              '_id',
              true,
              '$ID_12_6',
              'placeholder',
              true,
              'Enter your name',
              'text',
              true,
              'Invalid input',
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
          '$ID_12_10',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_9',
            0,
            0,
            null
          ],
          view.components.Variant,
          3,
          '_id',
          true,
          '$ID_12_19',
          'header',
          true,
          'Text Field - Quiet',
          'notes',
          true,
          'A Spectrum text field - quiet',
          0,
          0,
          [
            org.apache.royale.html.elements.Div,
            1,
            '_id',
            true,
            '$ID_12_18',
            0,
            0,
            [
              com.unhurdle.spectrum.TextField,
              4,
              '_id',
              true,
              '$ID_12_11',
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
              com.unhurdle.spectrum.TextField,
              5,
              '_id',
              true,
              '$ID_12_12',
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
              com.unhurdle.spectrum.TextField,
              5,
              '_id',
              true,
              '$ID_12_13',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
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
              com.unhurdle.spectrum.TextField,
              6,
              '_id',
              true,
              '$ID_12_14',
              'placeholder',
              true,
              'Enter your name',
              'quiet',
              true,
              true,
              'required',
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
              com.unhurdle.spectrum.TextField,
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
              'readonly',
              true,
              true,
              'text',
              true,
              'Read-only input',
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextField,
              5,
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
              'test@gmail.com',
              'style',
              true,
              'margin-right: 5px;margin-top: 5px;',
              0,
              0,
              null,
              com.unhurdle.spectrum.TextField,
              5,
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
              'Invalid input',
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
          '$ID_12_21',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_20',
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
view.panes.TextFieldPane.prototype._bindings = [
6,
"nameRegex",
null,
["$ID_12_5", "pattern"],
"nameRegex",
null,
["$ID_12_6", "pattern"],
"codeString1",
null,
["$ID_12_9", "text"],
"nameRegex",
null,
["$ID_12_16", "pattern"],
"nameRegex",
null,
["$ID_12_17", "pattern"],
"codeString2",
null,
["$ID_12_20", "text"],
0,
2,
"nameRegex",
"valueChange",
[0,1,3,4],
null,
null,
1,
2,
"codeString1",
"valueChange",
2,
null,
null,
2,
2,
"codeString2",
"valueChange",
5,
null,
null];
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.panes.TextFieldPane.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextFieldPane', qName: 'view.panes.TextFieldPane', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.panes.TextFieldPane.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'nameRegex': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TextFieldPane'},
        'codeString1': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TextFieldPane'},
        'codeString2': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TextFieldPane'}
      };
    },
    methods: function () {
      return {
        'TextFieldPane': { type: '', declaredBy: 'view.panes.TextFieldPane'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.panes.TextFieldPane.prototype.ROYALE_COMPILE_FLAGS = 9;
