/**
 * Generated by Apache Royale Compiler from view/panes/ToastPane.mxml
 * view.panes.ToastPane
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.panes.ToastPane');
/* Royale Dependency List: com.unhurdle.spectrum.Toast,view.components.Variant,com.unhurdle.spectrum.ButtonGroup,com.unhurdle.spectrum.Button,view.components.Markup,view.components.StyledCode,org.apache.royale.events.MouseEvent,org.apache.royale.events.ValueChangeEvent*/

goog.require('view.DemoPane');



/**
 * @constructor
 * @extends {view.DemoPane}
 */
view.panes.ToastPane = function() {
  view.panes.ToastPane.base(this, 'constructor');
  
  this.codeString_ = '<fx:Declarations>\n' + '  <sp:Toast id="defaultToast" text="Button.xd has been archived" action="Undo"/>\n' + '  <sp:Toast id="infoToast" flavor="info" text="The toast is done"/>\n' + '  <sp:Toast id="negativeToast" flavor="negative" text="The toast is on fire" action="Eject"/>\n' + '  <sp:Toast id="positiveToast" flavor="positive" text="The toast is golden brown" action="Eject"/>\n' + '  <sp:Toast id="errorToast" flavor="error" text="The toast is on fire" action="Eject"/>\n' + '  <sp:Toast id="warningToast" flavor="warning" text="The toast is on fire" action="Eject"/>\n' + '  <sp:Toast id="successToast" flavor="success" text="The toast is golden brown" action="Eject"/>\n' + '</fx:Declarations>\n' + '<sp:Heading size="S" text="Standard"/>\n' + '<html:Div height="12"/>\n' + '<sp:ButtonGroup>\n' + '  <sp:Button text="Open Default" click="defaultToast.show()"/>\n' + '  <sp:Button text="Open Info" click="infoToast.show()"/>\n' + '  <sp:Button text="Open Negative" click="negativeToast.show()"/>\n' + '  <sp:Button text="Open Positive" click="positiveToast.show()"/>\n' + '  <sp:Button text="Open Error" click="errorToast.show()"/>\n' + '  <sp:Button text="Open Warning" click="warningToast.show()"/>\n' + '  <sp:Button text="Open Success" click="successToast.show()"/>\n' + '</sp:ButtonGroup>';
  /**
   * @private
   * @type {com.unhurdle.spectrum.Toast}
   */
  this.defaultToast_;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Toast}
   */
  this.infoToast_;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Toast}
   */
  this.negativeToast_;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Toast}
   */
  this.positiveToast_;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Toast}
   */
  this.errorToast_;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Toast}
   */
  this.warningToast_;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Toast}
   */
  this.successToast_;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_8;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.ButtonGroup}
   */
  this.$ID_12_7;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Button}
   */
  this.$ID_12_0;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Button}
   */
  this.$ID_12_1;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Button}
   */
  this.$ID_12_2;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Button}
   */
  this.$ID_12_3;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Button}
   */
  this.$ID_12_4;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Button}
   */
  this.$ID_12_5;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Button}
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
    'Toast',
    0,
    0
  ]);
  
};
goog.inherits(view.panes.ToastPane, view.DemoPane);




/**
 * @type {string}
 */
view.panes.ToastPane.prototype.codeString_ = null;


Object.defineProperties(view.panes.ToastPane.prototype, /** @lends {view.panes.ToastPane.prototype} */ {
/**
 * @type {string}
 */
codeString: {
/** @this {view.panes.ToastPane} */
  get: function() {
  return this.codeString_;
  },

/** @this {view.panes.ToastPane} */
set: function(value) {
if (value != this.codeString_) {
    var oldValue = this.codeString_;
    this.codeString_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeString", oldValue, value));
}
}}}
);/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
view.panes.ToastPane.prototype.$EH_12_0 = function(event)
{
  this.defaultToast.show();
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
view.panes.ToastPane.prototype.$EH_12_1 = function(event)
{
  this.infoToast.show();
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
view.panes.ToastPane.prototype.$EH_12_2 = function(event)
{
  this.negativeToast.show();
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
view.panes.ToastPane.prototype.$EH_12_3 = function(event)
{
  this.positiveToast.show();
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
view.panes.ToastPane.prototype.$EH_12_4 = function(event)
{
  this.errorToast.show();
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
view.panes.ToastPane.prototype.$EH_12_5 = function(event)
{
  this.warningToast.show();
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
view.panes.ToastPane.prototype.$EH_12_6 = function(event)
{
  this.successToast.show();
};


Object.defineProperties(view.panes.ToastPane.prototype, /** @lends {view.panes.ToastPane.prototype} */ {
  defaultToast: {
    /** @this {view.panes.ToastPane} */
    get: function() {
      return this.defaultToast_;
    },
    /** @this {view.panes.ToastPane} */
    set: function(value) {
      if (value != this.defaultToast_) {
        this.defaultToast_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'defaultToast', null, value));
      }
    }
  },
  infoToast: {
    /** @this {view.panes.ToastPane} */
    get: function() {
      return this.infoToast_;
    },
    /** @this {view.panes.ToastPane} */
    set: function(value) {
      if (value != this.infoToast_) {
        this.infoToast_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'infoToast', null, value));
      }
    }
  },
  negativeToast: {
    /** @this {view.panes.ToastPane} */
    get: function() {
      return this.negativeToast_;
    },
    /** @this {view.panes.ToastPane} */
    set: function(value) {
      if (value != this.negativeToast_) {
        this.negativeToast_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'negativeToast', null, value));
      }
    }
  },
  positiveToast: {
    /** @this {view.panes.ToastPane} */
    get: function() {
      return this.positiveToast_;
    },
    /** @this {view.panes.ToastPane} */
    set: function(value) {
      if (value != this.positiveToast_) {
        this.positiveToast_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'positiveToast', null, value));
      }
    }
  },
  errorToast: {
    /** @this {view.panes.ToastPane} */
    get: function() {
      return this.errorToast_;
    },
    /** @this {view.panes.ToastPane} */
    set: function(value) {
      if (value != this.errorToast_) {
        this.errorToast_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'errorToast', null, value));
      }
    }
  },
  warningToast: {
    /** @this {view.panes.ToastPane} */
    get: function() {
      return this.warningToast_;
    },
    /** @this {view.panes.ToastPane} */
    set: function(value) {
      if (value != this.warningToast_) {
        this.warningToast_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'warningToast', null, value));
      }
    }
  },
  successToast: {
    /** @this {view.panes.ToastPane} */
    get: function() {
      return this.successToast_;
    },
    /** @this {view.panes.ToastPane} */
    set: function(value) {
      if (value != this.successToast_) {
        this.successToast_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'successToast', null, value));
      }
    }
  },
  'MXMLDescriptor': {
    /** @this {view.panes.ToastPane} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = view.panes.ToastPane.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          com.unhurdle.spectrum.Toast,
          3,
          'id',
          true,
          'defaultToast',
          'text',
          true,
          'Button.xd has been archived',
          'action',
          true,
          'Undo',
          0,
          0,
          null,
          com.unhurdle.spectrum.Toast,
          3,
          'id',
          true,
          'infoToast',
          'flavor',
          true,
          'info',
          'text',
          true,
          'The toast is done',
          0,
          0,
          null,
          com.unhurdle.spectrum.Toast,
          4,
          'id',
          true,
          'negativeToast',
          'flavor',
          true,
          'negative',
          'text',
          true,
          'The toast is on fire',
          'action',
          true,
          'Eject',
          0,
          0,
          null,
          com.unhurdle.spectrum.Toast,
          4,
          'id',
          true,
          'positiveToast',
          'flavor',
          true,
          'positive',
          'text',
          true,
          'The toast is golden brown',
          'action',
          true,
          'Eject',
          0,
          0,
          null,
          com.unhurdle.spectrum.Toast,
          4,
          'id',
          true,
          'errorToast',
          'flavor',
          true,
          'error',
          'text',
          true,
          'The toast is on fire',
          'action',
          true,
          'Eject',
          0,
          0,
          null,
          com.unhurdle.spectrum.Toast,
          4,
          'id',
          true,
          'warningToast',
          'flavor',
          true,
          'warning',
          'text',
          true,
          'The toast is on fire',
          'action',
          true,
          'Eject',
          0,
          0,
          null,
          com.unhurdle.spectrum.Toast,
          4,
          'id',
          true,
          'successToast',
          'flavor',
          true,
          'success',
          'text',
          true,
          'The toast is golden brown',
          'action',
          true,
          'Eject',
          0,
          0,
          null,
          view.components.Variant,
          1,
          '_id',
          true,
          '$ID_12_8',
          0,
          0,
          [
            com.unhurdle.spectrum.ButtonGroup,
            1,
            '_id',
            true,
            '$ID_12_7',
            0,
            0,
            [
              com.unhurdle.spectrum.Button,
              2,
              '_id',
              true,
              '$ID_12_0',
              'text',
              true,
              'Open Default',
              0,
              1,
              'click',
              this.$EH_12_0,
              null,
              com.unhurdle.spectrum.Button,
              2,
              '_id',
              true,
              '$ID_12_1',
              'text',
              true,
              'Open Info',
              0,
              1,
              'click',
              this.$EH_12_1,
              null,
              com.unhurdle.spectrum.Button,
              2,
              '_id',
              true,
              '$ID_12_2',
              'text',
              true,
              'Open Negative',
              0,
              1,
              'click',
              this.$EH_12_2,
              null,
              com.unhurdle.spectrum.Button,
              2,
              '_id',
              true,
              '$ID_12_3',
              'text',
              true,
              'Open Positive',
              0,
              1,
              'click',
              this.$EH_12_3,
              null,
              com.unhurdle.spectrum.Button,
              2,
              '_id',
              true,
              '$ID_12_4',
              'text',
              true,
              'Open Error',
              0,
              1,
              'click',
              this.$EH_12_4,
              null,
              com.unhurdle.spectrum.Button,
              2,
              '_id',
              true,
              '$ID_12_5',
              'text',
              true,
              'Open Warning',
              0,
              1,
              'click',
              this.$EH_12_5,
              null,
              com.unhurdle.spectrum.Button,
              2,
              '_id',
              true,
              '$ID_12_6',
              'text',
              true,
              'Open Success',
              0,
              1,
              'click',
              this.$EH_12_6,
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
view.panes.ToastPane.prototype._bindings = [
1,
"codeString",
null,
["$ID_12_9", "text"],
0,
2,
"codeString",
"valueChange",
0,
null,
null];
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.panes.ToastPane.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ToastPane', qName: 'view.panes.ToastPane', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.panes.ToastPane.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'codeString': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.ToastPane'},
        'defaultToast': { type: 'com.unhurdle.spectrum.Toast', access: 'readwrite', declaredBy: 'view.panes.ToastPane'},
        'infoToast': { type: 'com.unhurdle.spectrum.Toast', access: 'readwrite', declaredBy: 'view.panes.ToastPane'},
        'negativeToast': { type: 'com.unhurdle.spectrum.Toast', access: 'readwrite', declaredBy: 'view.panes.ToastPane'},
        'positiveToast': { type: 'com.unhurdle.spectrum.Toast', access: 'readwrite', declaredBy: 'view.panes.ToastPane'},
        'errorToast': { type: 'com.unhurdle.spectrum.Toast', access: 'readwrite', declaredBy: 'view.panes.ToastPane'},
        'warningToast': { type: 'com.unhurdle.spectrum.Toast', access: 'readwrite', declaredBy: 'view.panes.ToastPane'},
        'successToast': { type: 'com.unhurdle.spectrum.Toast', access: 'readwrite', declaredBy: 'view.panes.ToastPane'}
      };
    },
    methods: function () {
      return {
        'ToastPane': { type: '', declaredBy: 'view.panes.ToastPane'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.panes.ToastPane.prototype.ROYALE_COMPILE_FLAGS = 9;
