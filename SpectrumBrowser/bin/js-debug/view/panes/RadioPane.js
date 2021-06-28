/**
 * Generated by Apache Royale Compiler from view/panes/RadioPane.mxml
 * view.panes.RadioPane
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.panes.RadioPane');
/* Royale Dependency List: view.components.Variant,com.unhurdle.spectrum.RadioGroup,com.unhurdle.spectrum.Radio,view.components.Markup,view.components.StyledCode,org.apache.royale.events.ValueChangeEvent*/

goog.require('view.DemoPane');



/**
 * @constructor
 * @extends {view.DemoPane}
 */
view.panes.RadioPane = function() {
  view.panes.RadioPane.base(this, 'constructor');
  
  this.standartMarkup_ = '<sp:RadioGroup radioName="pets">\n' + '  <sp:Radio text="Kittens"/>\n' + '  <sp:Radio text="Puppies" checked="true"/>\n' + '</sp:RadioGroup>\n' + '<sp:RadioGroup radioName="pets" selected="puppies">\n' + '  <sp:Radio value="kittens"  text="Kittens"/>\n' + '  <sp:Radio value="puppies" text="Puppies"/>\n' + '</sp:RadioGroup>\n' + '<sp:RadioGroup radioName="pets">\n' + '  <sp:Radio text="Kittens" disabled="true"/>\n' + '  <sp:Radio text="Puppies" checked="true" disabled="true"/>\n' + '</sp:RadioGroup>\n' + '<sp:RadioGroup radioName="pets">\n' + '  <sp:Radio text="Kittens" invalid="true"/>\n' + '  <sp:Radio text="Puppies" checked="true" invalid="true"/>\n' + '</sp:RadioGroup>\n' + '<sp:Radio text="Radio with an extraordinarily long label please don`t do this but if you did it should truncate text when it gets longer than the container which contains the radio which has an unacceptably long label"/>\n';
  this.quietMarkup_ = '<sp:RadioGroup radioName="pets">\n' + '  <sp:Radio quiet="true" text="Kittens"/>\n' + '  <sp:Radio quiet="true" text="Puppies" checked="true"/>\n' + '</sp:RadioGroup>\n' + '<sp:RadioGroup radioName="pets" selected="puppies">\n' + '  <sp:Radio quiet="true" value="kittens" text="Kittens" disabled="true"/>\n' + '  <sp:Radio quiet="true" value="puppies" text="Puppies" checked="true" disabled="true"/>\n' + '</sp:RadioGroup>\n' + '<sp:RadioGroup radioName="pets">\n' + '  <sp:Radio quiet="true" text="Kittens" invalid="true"/>\n' + '  <sp:Radio quiet="true" text="Puppies" checked="true" invalid="true"/>\n' + '</sp:RadioGroup>\n' + '<sp:Radio quiet="true" text="Radio with an extraordinarily long label please don`t do this but if you did it should truncate text when it gets longer than the container which contains the radio which has an unacceptably long label"/>\n';
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_13;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.RadioGroup}
   */
  this.$ID_12_2;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_0;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_1;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.RadioGroup}
   */
  this.$ID_12_5;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_3;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_4;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.RadioGroup}
   */
  this.$ID_12_8;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_6;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_7;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.RadioGroup}
   */
  this.$ID_12_11;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_9;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_10;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_12;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_15;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_14;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_26;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.RadioGroup}
   */
  this.$ID_12_18;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_16;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_17;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.RadioGroup}
   */
  this.$ID_12_21;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_19;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_20;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.RadioGroup}
   */
  this.$ID_12_24;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_22;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_23;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Radio}
   */
  this.$ID_12_25;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_28;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_27;
  
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
    1,
    'title',
    true,
    'Radio',
    0,
    0
  ]);
  
};
goog.inherits(view.panes.RadioPane, view.DemoPane);




/**
 * @type {string}
 */
view.panes.RadioPane.prototype.standartMarkup_ = null;


/**
 * @type {string}
 */
view.panes.RadioPane.prototype.quietMarkup_ = null;


Object.defineProperties(view.panes.RadioPane.prototype, /** @lends {view.panes.RadioPane.prototype} */ {
/**
 * @type {string}
 */
quietMarkup: {
/** @this {view.panes.RadioPane} */
  get: function() {
  return this.quietMarkup_;
  },

/** @this {view.panes.RadioPane} */
set: function(value) {
if (value != this.quietMarkup_) {
    var oldValue = this.quietMarkup_;
    this.quietMarkup_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "quietMarkup", oldValue, value));
}
}},/**
 * @type {string}
 */
standartMarkup: {
/** @this {view.panes.RadioPane} */
  get: function() {
  return this.standartMarkup_;
  },

/** @this {view.panes.RadioPane} */
set: function(value) {
if (value != this.standartMarkup_) {
    var oldValue = this.standartMarkup_;
    this.standartMarkup_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "standartMarkup", oldValue, value));
}
}}}
);Object.defineProperties(view.panes.RadioPane.prototype, /** @lends {view.panes.RadioPane.prototype} */ {
  'MXMLDescriptor': {
    /** @this {view.panes.RadioPane} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = view.panes.RadioPane.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          view.components.Variant,
          1,
          '_id',
          true,
          '$ID_12_13',
          0,
          0,
          [
            com.unhurdle.spectrum.RadioGroup,
            2,
            '_id',
            true,
            '$ID_12_2',
            'radioName',
            true,
            'pets',
            0,
            0,
            [
              com.unhurdle.spectrum.Radio,
              2,
              '_id',
              true,
              '$ID_12_0',
              'text',
              true,
              'Kittens',
              0,
              0,
              null,
              com.unhurdle.spectrum.Radio,
              3,
              '_id',
              true,
              '$ID_12_1',
              'text',
              true,
              'Puppies',
              'checked',
              true,
              true,
              0,
              0,
              null
            ],
            com.unhurdle.spectrum.RadioGroup,
            3,
            '_id',
            true,
            '$ID_12_5',
            'radioName',
            true,
            'pets',
            'selected',
            true,
            'puppies',
            0,
            0,
            [
              com.unhurdle.spectrum.Radio,
              3,
              '_id',
              true,
              '$ID_12_3',
              'value',
              true,
              'kittens',
              'text',
              true,
              'Kittens',
              0,
              0,
              null,
              com.unhurdle.spectrum.Radio,
              3,
              '_id',
              true,
              '$ID_12_4',
              'value',
              true,
              'puppies',
              'text',
              true,
              'Puppies',
              0,
              0,
              null
            ],
            com.unhurdle.spectrum.RadioGroup,
            2,
            '_id',
            true,
            '$ID_12_8',
            'radioName',
            true,
            'pets',
            0,
            0,
            [
              com.unhurdle.spectrum.Radio,
              3,
              '_id',
              true,
              '$ID_12_6',
              'text',
              true,
              'Kittens',
              'disabled',
              true,
              true,
              0,
              0,
              null,
              com.unhurdle.spectrum.Radio,
              4,
              '_id',
              true,
              '$ID_12_7',
              'text',
              true,
              'Puppies',
              'checked',
              true,
              true,
              'disabled',
              true,
              true,
              0,
              0,
              null
            ],
            com.unhurdle.spectrum.RadioGroup,
            2,
            '_id',
            true,
            '$ID_12_11',
            'radioName',
            true,
            'pets',
            0,
            0,
            [
              com.unhurdle.spectrum.Radio,
              3,
              '_id',
              true,
              '$ID_12_9',
              'text',
              true,
              'Kittens',
              'invalid',
              true,
              true,
              0,
              0,
              null,
              com.unhurdle.spectrum.Radio,
              4,
              '_id',
              true,
              '$ID_12_10',
              'text',
              true,
              'Puppies',
              'checked',
              true,
              true,
              'invalid',
              true,
              true,
              0,
              0,
              null
            ],
            com.unhurdle.spectrum.Radio,
            2,
            '_id',
            true,
            '$ID_12_12',
            'text',
            true,
            'Radio with an extraordinarily long label please don\'t do this but if you did it should truncate text when it gets longer than the container which contains the radio which has an unacceptably long label',
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_15',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_14',
            0,
            0,
            null
          ],
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_26',
          'header',
          true,
          'Quiet',
          0,
          0,
          [
            com.unhurdle.spectrum.RadioGroup,
            2,
            '_id',
            true,
            '$ID_12_18',
            'radioName',
            true,
            'pets',
            0,
            0,
            [
              com.unhurdle.spectrum.Radio,
              3,
              '_id',
              true,
              '$ID_12_16',
              'quiet',
              true,
              'true',
              'text',
              true,
              'Kittens',
              0,
              0,
              null,
              com.unhurdle.spectrum.Radio,
              4,
              '_id',
              true,
              '$ID_12_17',
              'quiet',
              true,
              'true',
              'text',
              true,
              'Puppies',
              'checked',
              true,
              true,
              0,
              0,
              null
            ],
            com.unhurdle.spectrum.RadioGroup,
            3,
            '_id',
            true,
            '$ID_12_21',
            'radioName',
            true,
            'pets',
            'selected',
            true,
            'puppies',
            0,
            0,
            [
              com.unhurdle.spectrum.Radio,
              5,
              '_id',
              true,
              '$ID_12_19',
              'quiet',
              true,
              'true',
              'value',
              true,
              'kittens',
              'text',
              true,
              'Kittens',
              'disabled',
              true,
              true,
              0,
              0,
              null,
              com.unhurdle.spectrum.Radio,
              6,
              '_id',
              true,
              '$ID_12_20',
              'quiet',
              true,
              'true',
              'value',
              true,
              'puppies',
              'text',
              true,
              'Puppies',
              'checked',
              true,
              true,
              'disabled',
              true,
              true,
              0,
              0,
              null
            ],
            com.unhurdle.spectrum.RadioGroup,
            2,
            '_id',
            true,
            '$ID_12_24',
            'radioName',
            true,
            'pets',
            0,
            0,
            [
              com.unhurdle.spectrum.Radio,
              4,
              '_id',
              true,
              '$ID_12_22',
              'quiet',
              true,
              'true',
              'text',
              true,
              'Kittens',
              'invalid',
              true,
              true,
              0,
              0,
              null,
              com.unhurdle.spectrum.Radio,
              5,
              '_id',
              true,
              '$ID_12_23',
              'quiet',
              true,
              'true',
              'text',
              true,
              'Puppies',
              'checked',
              true,
              true,
              'invalid',
              true,
              true,
              0,
              0,
              null
            ],
            com.unhurdle.spectrum.Radio,
            3,
            '_id',
            true,
            '$ID_12_25',
            'quiet',
            true,
            'true',
            'text',
            true,
            'Radio with an extraordinarily long label please don\'t do this but if you did it should truncate text when it gets longer than the container which contains the radio which has an unacceptably long label',
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_28',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_27',
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
view.panes.RadioPane.prototype._bindings = [
2,
"standartMarkup",
null,
["$ID_12_14", "text"],
"quietMarkup",
null,
["$ID_12_27", "text"],
0,
2,
"standartMarkup",
"valueChange",
0,
null,
null,
1,
2,
"quietMarkup",
"valueChange",
1,
null,
null];
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.panes.RadioPane.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'RadioPane', qName: 'view.panes.RadioPane', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.panes.RadioPane.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'standartMarkup': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.RadioPane'},
        'quietMarkup': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.RadioPane'}
      };
    },
    methods: function () {
      return {
        'RadioPane': { type: '', declaredBy: 'view.panes.RadioPane'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.panes.RadioPane.prototype.ROYALE_COMPILE_FLAGS = 9;
