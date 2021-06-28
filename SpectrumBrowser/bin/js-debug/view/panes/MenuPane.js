/**
 * Generated by Apache Royale Compiler from view/panes/MenuPane.mxml
 * view.panes.MenuPane
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.panes.MenuPane');
/* Royale Dependency List: view.components.Variant,com.unhurdle.spectrum.FieldGroup,com.unhurdle.spectrum.Menu,com.unhurdle.spectrum.data.MenuItem,view.components.Markup,view.components.StyledCode,org.apache.royale.events.ValueChangeEvent*/

goog.require('view.DemoPane');



/**
 * @constructor
 * @extends {view.DemoPane}
 */
view.panes.MenuPane = function() {
  view.panes.MenuPane.base(this, 'constructor');
  
  this.standardMarkup_ = '<sp:Menu> \n' + '     <sp:dataProvider> \n' + '        <sp:MenuItem text="Deselect"/> \n' + '        <sp:MenuItem text="Select Inverse"/> \n' + '        <sp:MenuItem text="Feather..."/> \n' + '        <sp:MenuItem text="Select and Mask"/> \n' + '        <sp:MenuItem text="Save Selection"/> \n' + '        <sp:MenuItem disabled="true" text="Make Work Path"/> \n' + '     </sp:dataProvider> \n' + '</sp:Menu> \n' + '<sp:Menu> \n' + '     <sp:dataProvider> \n' + '        <sp:MenuItem isHeading="true" text="Section Heading"/> \n' + '        <sp:MenuItem text="Action 1"/> \n' + '        <sp:MenuItem text="Action 2"/> \n' + '        <sp:MenuItem text="Action 3"/> \n' + '        <sp:MenuItem isHeading = "true" text="Section Heading"/> \n' + '        <sp:MenuItem icon="#spectrum-icon-18-SaveFloppy"> \n' + '        <sp:text>Save</sp:text> \n' + '        </sp:MenuItem> \n' + '     <sp:MenuItem disabled="true" icon="#spectrum-icon-18-DataDownload"> \n' + '            <sp:text>Download</sp:text> \n' + '        </sp:MenuItem> \n' + '    </sp:dataProvider> \n' + '</sp:Menu> \n' + '<sp:Menu> \n' + '    <sp:dataProvider> \n' + '        <sp:MenuItem isHeading="true" text="San Francisco"/> \n' + '        <sp:MenuItem text="Financial District"/> \n' + '        <sp:MenuItem text="South of Market"/> \n' + '        <sp:MenuItem text="North Beach"/> \n' + '    </sp:dataProvider> \n' + '</sp:Menu> \n' + '<sp:Menu> \n' + '    <sp:dataProvider> \n' + '        <sp:MenuItem isHeading="true" text="Oakland"/> \n' + '            <sp:MenuItem text="City Center"/> \n' + '            <sp:MenuItem disabled="true" text="Jack London Square"/> \n' + '            <sp:MenuItem text = "My best friend mom house in the burbs just off Silverado street"/> \n' + '        </sp:dataProvider> \n' + '</sp:Menu>';
  this.nestedMarkup_ = '<sp:Menu>\n' + '  <sp:dataProvider>\n' + '      <sp:MenuItem text="Deselect"/>\n' + '      <sp:MenuItem text="Select Inverse"/>\n' + '      <sp:MenuItem text= "Feather...">\n' + '          <sp:subMenu>\n' + '              <sp:MenuItem text="Deselect"/>\n' + '              <sp:MenuItem text="Select and Mask"/>\n' + '          </sp:subMenu>\n' + '      </sp:MenuItem>\n' + '      <sp:MenuItem text="Select and Mask..."/>\n' + '      <sp:MenuItem text="Save Selection"/>\n' + '  </sp:dataProvider>\n' + '</sp:Menu>';
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_26;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.FieldGroup}
   */
  this.$ID_12_25;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Menu}
   */
  this.$ID_12_6;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_0;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_1;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_2;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_3;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_4;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_5;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Menu}
   */
  this.$ID_12_14;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_7;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_8;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_9;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_10;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_11;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_12;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_13;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Menu}
   */
  this.$ID_12_19;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_15;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_16;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_17;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_18;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Menu}
   */
  this.$ID_12_24;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_20;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_21;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_22;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_23;
  
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
   * @type {view.components.Variant}
   */
  this.$ID_12_38;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.FieldGroup}
   */
  this.$ID_12_37;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Menu}
   */
  this.$ID_12_36;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_29;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_30;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_33;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_31;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_32;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_34;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.data.MenuItem}
   */
  this.$ID_12_35;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_40;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_39;
  
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
    'Menu',
    'notes',
    true,
    '',
    0,
    0
  ]);
  
};
goog.inherits(view.panes.MenuPane, view.DemoPane);




/**
 * @type {string}
 */
view.panes.MenuPane.prototype.standardMarkup_ = null;


/**
 * @type {string}
 */
view.panes.MenuPane.prototype.nestedMarkup_ = null;


Object.defineProperties(view.panes.MenuPane.prototype, /** @lends {view.panes.MenuPane.prototype} */ {
/**
 * @type {string}
 */
nestedMarkup: {
/** @this {view.panes.MenuPane} */
  get: function() {
  return this.nestedMarkup_;
  },

/** @this {view.panes.MenuPane} */
set: function(value) {
if (value != this.nestedMarkup_) {
    var oldValue = this.nestedMarkup_;
    this.nestedMarkup_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "nestedMarkup", oldValue, value));
}
}},/**
 * @type {string}
 */
standardMarkup: {
/** @this {view.panes.MenuPane} */
  get: function() {
  return this.standardMarkup_;
  },

/** @this {view.panes.MenuPane} */
set: function(value) {
if (value != this.standardMarkup_) {
    var oldValue = this.standardMarkup_;
    this.standardMarkup_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "standardMarkup", oldValue, value));
}
}}}
);Object.defineProperties(view.panes.MenuPane.prototype, /** @lends {view.panes.MenuPane.prototype} */ {
  'MXMLDescriptor': {
    /** @this {view.panes.MenuPane} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = view.panes.MenuPane.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_26',
          'header',
          true,
          'Standard',
          0,
          0,
          [
            com.unhurdle.spectrum.FieldGroup,
            1,
            '_id',
            true,
            '$ID_12_25',
            0,
            0,
            [
              com.unhurdle.spectrum.Menu,
              2,
              '_id',
              true,
              '$ID_12_6',
              'dataProvider',
              null,
              [
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_0',
                'text',
                true,
                'Deselect',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_1',
                'text',
                true,
                'Select Inverse',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_2',
                'text',
                true,
                'Feather...',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_3',
                'text',
                true,
                'Select and Mask',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_4',
                'text',
                true,
                'Save Selection',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                3,
                '_id',
                true,
                '$ID_12_5',
                'disabled',
                true,
                true,
                'text',
                true,
                'Make Work Path',
                0,
                0,
                null
              ],
              0,
              0,
              null,
              com.unhurdle.spectrum.Menu,
              2,
              '_id',
              true,
              '$ID_12_14',
              'dataProvider',
              null,
              [
                com.unhurdle.spectrum.data.MenuItem,
                3,
                '_id',
                true,
                '$ID_12_7',
                'isHeading',
                true,
                true,
                'text',
                true,
                'Section Heading',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_8',
                'text',
                true,
                'Action 1',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_9',
                'text',
                true,
                'Action 2',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_10',
                'text',
                true,
                'Action 3',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                3,
                '_id',
                true,
                '$ID_12_11',
                'isHeading',
                true,
                true,
                'text',
                true,
                'Section Heading',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                3,
                '_id',
                true,
                '$ID_12_12',
                'icon',
                true,
                '#spectrum-icon-18-SaveFloppy',
                'text',
                true,
                'Save',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                4,
                '_id',
                true,
                '$ID_12_13',
                'disabled',
                true,
                true,
                'icon',
                true,
                '#spectrum-icon-18-DataDownload',
                'text',
                true,
                'Download',
                0,
                0,
                null
              ],
              0,
              0,
              null,
              com.unhurdle.spectrum.Menu,
              2,
              '_id',
              true,
              '$ID_12_19',
              'dataProvider',
              null,
              [
                com.unhurdle.spectrum.data.MenuItem,
                3,
                '_id',
                true,
                '$ID_12_15',
                'isHeading',
                true,
                true,
                'text',
                true,
                'San Francisco',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_16',
                'text',
                true,
                'Financial District',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_17',
                'text',
                true,
                'South of Market',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_18',
                'text',
                true,
                'North Beach',
                0,
                0,
                null
              ],
              0,
              0,
              null,
              com.unhurdle.spectrum.Menu,
              2,
              '_id',
              true,
              '$ID_12_24',
              'dataProvider',
              null,
              [
                com.unhurdle.spectrum.data.MenuItem,
                3,
                '_id',
                true,
                '$ID_12_20',
                'isHeading',
                true,
                true,
                'text',
                true,
                'Oakland',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_21',
                'text',
                true,
                'City Center',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                3,
                '_id',
                true,
                '$ID_12_22',
                'disabled',
                true,
                true,
                'text',
                true,
                'Jack London Square',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_23',
                'text',
                true,
                'My best friend\'s mom\'s house in the burbs just off Silverado street',
                0,
                0,
                null
              ],
              0,
              0,
              null
            ]
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
          ],
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_38',
          'header',
          true,
          'Nested',
          0,
          0,
          [
            com.unhurdle.spectrum.FieldGroup,
            1,
            '_id',
            true,
            '$ID_12_37',
            0,
            0,
            [
              com.unhurdle.spectrum.Menu,
              2,
              '_id',
              true,
              '$ID_12_36',
              'dataProvider',
              null,
              [
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_29',
                'text',
                true,
                'Deselect',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_30',
                'text',
                true,
                'Select Inverse',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                3,
                '_id',
                true,
                '$ID_12_33',
                'text',
                true,
                'Feather...',
                'subMenu',
                null,
                [
                  com.unhurdle.spectrum.data.MenuItem,
                  2,
                  '_id',
                  true,
                  '$ID_12_31',
                  'text',
                  true,
                  'Deselect',
                  0,
                  0,
                  null,
                  com.unhurdle.spectrum.data.MenuItem,
                  2,
                  '_id',
                  true,
                  '$ID_12_32',
                  'text',
                  true,
                  'Select and Mask',
                  0,
                  0,
                  null
                ],
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_34',
                'text',
                true,
                'Select and Mask...',
                0,
                0,
                null,
                com.unhurdle.spectrum.data.MenuItem,
                2,
                '_id',
                true,
                '$ID_12_35',
                'text',
                true,
                'Save Selection',
                0,
                0,
                null
              ],
              0,
              0,
              null
            ]
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_40',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_39',
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
view.panes.MenuPane.prototype._bindings = [
2,
"standardMarkup",
null,
["$ID_12_27", "text"],
"nestedMarkup",
null,
["$ID_12_39", "text"],
0,
2,
"standardMarkup",
"valueChange",
0,
null,
null,
1,
2,
"nestedMarkup",
"valueChange",
1,
null,
null];
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.panes.MenuPane.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MenuPane', qName: 'view.panes.MenuPane', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.panes.MenuPane.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'nestedMarkup': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.MenuPane'},
        'standardMarkup': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.MenuPane'}
      };
    },
    methods: function () {
      return {
        'MenuPane': { type: '', declaredBy: 'view.panes.MenuPane'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.panes.MenuPane.prototype.ROYALE_COMPILE_FLAGS = 9;
