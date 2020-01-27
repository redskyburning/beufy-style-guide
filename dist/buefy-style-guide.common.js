/*!
 * buefy-style-guide v0.2.4 
 * (c) 2020 Ben Webb
 * Released under the undefined License.
 */
'use strict';

var CORE_SEMANTIC_TYPES = ['primary', 'success', 'info', 'warning', 'danger'];
var DEFAULT_BUTTON_TYPES = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link', 'light', 'dark', 'text'];
var DEFAULT_TAG_TYPES = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link', 'light', 'white', 'dark', 'black'];
var DEFAULT_BUTTON_SIZES = ['normal', 'medium', 'large'];
var DEFAULT_BUTTON_ICONS = ['check', 'minus-circle', 'trash-alt', 'user'];
var DEFAULT_TITLE_SIZES = [1, 2, 3, 4, 5, 6, 7];
var DEFAULT_DROPDOWN_ITEMS = [{
  label: 'Gasoline-driven tekeli-li'
}, {
  label: 'Especially hideously',
  disabled: true
}, {
  label: 'Re-sculptured antarctic',
  separator: true
}, {
  label: 'Unprecedented beardmore'
}, {
  label: 'Gastropods disturbing'
}];
var DEFAULT_DIALOG_SIZES = ['small', 'medium', 'large'];

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'BsgSection',
  props: {
    title: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bsg-section section",class:{ 'is-inverted' : _vm.inverted }},[_c('div',{staticClass:"container"},[_c('b-collapse',{staticClass:"card",attrs:{"open":_vm.open},scopedSlots:_vm._u([{key:"trigger",fn:function(props){return _c('div',{staticClass:"card-header",attrs:{"role":"button"}},[_c('div',{staticClass:"card-header-title"},[_c('h1',{staticClass:"title is-4"},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.title)+"\n\t\t\t\t\t")])]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(props.open),expression:"props.open"}],staticClass:"card-header-icon"},[_c('b-icon',{attrs:{"pack":"fas","icon":"minus"}})],1),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!props.open),expression:"!props.open"}],staticClass:"card-header-icon"},[_c('b-icon',{attrs:{"pack":"fas","icon":"plus"}})],1)])}}])},[_vm._v(" "),_c('div',{staticClass:"card-content bsg-section__body"},[_vm._t("default")],2)])],1)])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-9860dd02_0", { source: ".bsg-section[data-v-9860dd02]{padding-top:0;padding-bottom:0}.bsg-section+.bsg-section[data-v-9860dd02]{margin-top:2rem}.bsg-section.is-inverted .bsg-section__body[data-v-9860dd02]{background-color:#4a4a4a}.bsg-section.is-inverted .bsg-section__body[data-v-9860dd02]  .subtitle,.bsg-section.is-inverted .bsg-section__body[data-v-9860dd02]  .title{color:#fff}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-9860dd02";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var BsgSection = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'BsgSubsection',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {};
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bsg-subsection"},[(_vm.title)?_c('h2',{staticClass:"bsg-subsection__title subtitle is-4"},[_vm._v("\n\t\t"+_vm._s(_vm.title)+"\n\t")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"bsg-subsection__body"},[_vm._t("default")],2)])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-1c21d977_0", { source: ".bsg-subsection+.bsg-subsection{margin-top:2rem}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var BsgSubsection = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

//
var script$2 = {
  name: 'DialogModal',
  components: {
    BsgSubsection: BsgSubsection
  },
  props: {
    dialogSizes: {
      type: Array,
      default: function _default() {
        return DEFAULT_DIALOG_SIZES;
      }
    },
    types: {
      type: Array,
      default: function _default() {
        return CORE_SEMANTIC_TYPES;
      }
    }
  },
  data: function data() {
    return {
      imageModalActive: false,
      cardModalActive: false
    };
  },
  methods: {
    getTypeString: function getTypeString(index) {
      return "is-".concat(this.types[index]);
    },
    openAlert: function openAlert(dialogSize, dialogType) {
      this.$buefy.dialog.alert({
        title: 'Grotesquely three-fourths luxuriant',
        message: 'Circumstance traversed reluctant antarctic foothills descending pertaining longitude immediate. Sculptured potentially organisms directions remembered disturbing disturbingly evidently photograph. Longitude suggestions encountered investigation whispered habitually exaggerations labyrinth sculptures.',
        confirmText: 'Uh... ok?',
        type: dialogType,
        size: dialogSize
      });
    },
    openConfirm: function openConfirm(dialogSize, dialogType) {
      var _this = this;

      this.$buefy.dialog.confirm({
        title: 'Inconceivable historical coast-lines',
        message: 'Constantine everywhere undoubtedly vegetation omnipresent recoiling residence, ziggurats residence? Buildings photograph happening preparations intervening scattered suggestions, neighboring apparatus?',
        confirmText: 'Uh... ok?',
        cancelText: 'Uh... no?',
        type: dialogType,
        size: dialogSize,
        onConfirm: function onConfirm() {
          return _this.$toast.open('User confirmed');
        },
        onCancel: function onCancel() {
          return _this.$toast.open('User cancelled');
        }
      });
    },
    openPrompt: function openPrompt(dialogSize, dialogType) {
      var _this2 = this;

      this.$buefy.dialog.prompt({
        title: 'Somebody\'s difficult shoggoths',
        message: 'Sculptured potentially organisms directions remembered disturbing disturbingly evidently photograph. Longitude suggestions encountered investigation whispered habitually exaggerations labyrinth sculptures.',
        confirmText: 'Uh... ok?',
        cancelText: 'Uh... no?',
        type: dialogType,
        size: dialogSize,
        onConfirm: function onConfirm(value) {
          return _this2.$toast.open("User says: ".concat(value));
        },
        onCancel: function onCancel() {
          return _this2.$toast.open('User cancelled');
        }
      });
    }
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dialog-modal"},[_c('bsg-subsection',{attrs:{"title":"Alert Dialogs"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.dialogSizes),function(dialogSize,sizeIndex){return _c('b-button',{key:sizeIndex,attrs:{"type":_vm.getTypeString(sizeIndex)},on:{"click":function($event){_vm.openAlert(("is-" + dialogSize), _vm.getTypeString(sizeIndex));}}},[_vm._v("\n\t\t\t\t"+_vm._s(dialogSize)+" Alert\n\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Confirm Dialogs"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.dialogSizes),function(dialogSize,sizeIndex){return _c('b-button',{key:sizeIndex,attrs:{"type":_vm.getTypeString(sizeIndex)},on:{"click":function($event){_vm.openConfirm(("is-" + dialogSize), _vm.getTypeString(sizeIndex));}}},[_vm._v("\n\t\t\t\t"+_vm._s(dialogSize)+" Confirm\n\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Prompt Dialogs"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.dialogSizes),function(dialogSize,sizeIndex){return _c('b-button',{key:sizeIndex,attrs:{"type":_vm.getTypeString(sizeIndex)},on:{"click":function($event){_vm.openPrompt(("is-" + dialogSize), _vm.getTypeString(sizeIndex));}}},[_vm._v("\n\t\t\t\t"+_vm._s(dialogSize)+" Confirm\n\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Modal"}},[_c('div',{staticClass:"buttons"},[_c('b-button',{attrs:{"type":"is-primary"},on:{"click":function($event){_vm.imageModalActive = true;}}},[_vm._v("\n\t\t\t\tImage Modal\n\t\t\t")]),_vm._v(" "),_c('b-button',{attrs:{"type":"is-success"},on:{"click":function($event){_vm.cardModalActive = true;}}},[_vm._v("\n\t\t\t\tCard Modal\n\t\t\t")])],1)]),_vm._v(" "),_c('b-modal',{attrs:{"active":_vm.imageModalActive,"width":640,"scroll":"keep"},on:{"update:active":function($event){_vm.imageModalActive=$event;}}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-image"},[_c('figure',{staticClass:"image is-4by3"},[_c('img',{attrs:{"src":"https://picsum.photos/1280/900","alt":"Image"}})])]),_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('figure',{staticClass:"image is-48x48"},[_c('img',{attrs:{"src":"https://picsum.photos/48/48","alt":"Image"}})])]),_vm._v(" "),_c('div',{staticClass:"media-content"},[_c('p',{staticClass:"title is-4"},[_vm._v("\n\t\t\t\t\t\t\tJohn Smith\n\t\t\t\t\t\t")]),_vm._v(" "),_c('p',{staticClass:"subtitle is-6"},[_vm._v("\n\t\t\t\t\t\t\t@johnsmith\n\t\t\t\t\t\t")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',[_vm._v("Thereafter grotesquely three-fourths luxuriant imitation somebody's identified difficult shoggoths. Circumstance traversed reluctant antarctic foothills descending pertaining longitude immediate.")])])])])]),_vm._v(" "),_c('b-modal',{attrs:{"active":_vm.cardModalActive,"width":640,"scroll":"keep"},on:{"update:active":function($event){_vm.cardModalActive=$event;}}},[_c('div',{staticClass:"card"},[_c('header',{staticClass:"modal-card-head"},[_c('p',{staticClass:"modal-card-title"},[_vm._v("\n\t\t\t\t\tModal title\n\t\t\t\t")]),_vm._v(" "),_c('button',{staticClass:"delete",attrs:{"aria-label":"close"},on:{"click":function($event){_vm.cardModalActive = false;}}})]),_vm._v(" "),_c('section',{staticClass:"modal-card-body"},[_c('p',[_vm._v("Existence buildings including resembling sculptures grotesque, five-pointed revelations background! Crumbling preternatural toughness vegetables decorators massiveness, direction technique aeon-silent! Accentuate well-known architecture encountered five-pointedness shrinking apparently apertures knowledge. Notebooks projected monstrous mechanized trail-blazing protection principles omnipresent mountains. Complexity different sculpture replacement resolution outcropping occupations pictorial brainless. Accomplished elsewhere proceeded bas-reliefs independent horizontal relatively waterproof description. Topographical chronology enslavers containing consecutive rudimentary soapstones photographs potentially.")])]),_vm._v(" "),_c('footer',{staticClass:"modal-card-foot"},[_c('button',{staticClass:"button is-success"},[_vm._v("\n\t\t\t\t\tSave changes\n\t\t\t\t")]),_vm._v(" "),_c('button',{staticClass:"button"},[_vm._v("\n\t\t\t\t\tCancel\n\t\t\t\t")])])])])],1)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = "data-v-67928a90";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DialogModal = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
var script$3 = {
  name: 'BuefyStyleGuide',
  components: {
    BsgSection: BsgSection,
    BsgSubsection: BsgSubsection,
    DialogModal: DialogModal
  },
  props: {
    // Should rounded buttons be used as the standard button type?
    preferRounded: {
      type: Boolean,
      default: false
    },
    heroModifiers: {
      type: String,
      default: 'is-primary is-bold'
    },
    title: {
      type: String,
      default: 'Buefy Style Guide'
    },
    subtitle: {
      type: String,
      default: 'You\'re looking good today'
    },
    buttonTypes: {
      type: Array,
      default: function _default() {
        return DEFAULT_BUTTON_TYPES;
      }
    },
    buttonSizes: {
      type: Array,
      default: function _default() {
        return DEFAULT_BUTTON_SIZES;
      }
    },
    buttonIcons: {
      type: Array,
      default: function _default() {
        return DEFAULT_BUTTON_ICONS;
      }
    },
    titleSizes: {
      type: Array,
      default: function _default() {
        return DEFAULT_TITLE_SIZES;
      }
    },
    tagTypes: {
      type: Array,
      default: function _default() {
        return DEFAULT_TAG_TYPES;
      }
    },
    tagSizes: {
      type: Array,
      default: function _default() {
        return DEFAULT_BUTTON_SIZES;
      }
    },
    dropdownItems: {
      type: Array,
      default: function _default() {
        return DEFAULT_DROPDOWN_ITEMS;
      }
    },
    dialogSizes: {
      type: Array,
      default: function _default() {
        return DEFAULT_DIALOG_SIZES;
      }
    },
    semanticTypes: {
      type: Array,
      default: function _default() {
        return CORE_SEMANTIC_TYPES;
      }
    }
  },
  data: function data() {
    return {
      titlePairOffset: 2,
      tagState: Array(this.tagTypes.length).fill(true),
      attachedTagState: Array(this.tagTypes.length).fill(true)
    };
  },
  computed: {
    closeableTags: function closeableTags() {
      var _this = this;

      return this.tagTypes.filter(function (tagTypeKey, tagTypeIndex) {
        return _this.tagState[tagTypeIndex];
      });
    },
    attachedCloseableTags: function attachedCloseableTags() {
      var _this2 = this;

      return this.tagTypes.filter(function (tagTypeKey, tagTypeIndex) {
        return _this2.attachedTagState[tagTypeIndex];
      });
    }
  },
  methods: {
    getIconCode: function getIconCode(index) {
      return this.buttonIcons[index % this.buttonIcons.length];
    },
    closeTab: function closeTab(index) {
      this.$set(this.tagState, index, false);
    },
    closeAttachedTab: function closeAttachedTab(index) {
      this.$set(this.attachedTagState, index, false);
    }
  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buefy-style-guide"},[_c('header',{staticClass:"buefy-style-guide__header hero is-medium",class:_vm.heroModifiers},[_c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.title)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('h1',{staticClass:"subtitle"},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.subtitle)+"\n\t\t\t\t\t")])])])]),_vm._v(" "),_c('main',{staticClass:"buefy-style-guide__body"},[_c('bsg-section',{attrs:{"title":"Buttons","open":""}},[_c('bsg-subsection',{attrs:{"title":"Semantic Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+" Button\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Hovered Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,staticClass:"is-hovered",attrs:{"rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Focused Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,staticClass:"is-focused",attrs:{"rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Active Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,staticClass:"is-active",attrs:{"rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Disabled Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"disabled":"","rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Button Sizes"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonSizes),function(buttonSizeKey,buttonSizeIndex){return _c('b-button',{key:buttonSizeIndex,attrs:{"type":"is-primary","rounded":_vm.preferRounded,"size":("is-" + buttonSizeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonSizeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Icon Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"icon-pack":"fas","icon-left":buttonTypeIndex % 2 === 0 ? _vm.getIconCode(buttonTypeIndex) : '',"icon-right":buttonTypeIndex % 2 !== 0 ? _vm.getIconCode(buttonTypeIndex) : '',"rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(_vm.getIconCode(buttonTypeIndex))+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Outlined Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"outlined":"","rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Focused Outlined Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,staticClass:"is-focused",attrs:{"outlined":"","rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":((_vm.preferRounded ? 'Squared' : 'Rounded') + " Buttons")}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"rounded":!_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Loading Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"loading":"","rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)])],1),_vm._v(" "),_c('bsg-section',{attrs:{"title":"Inverted Buttons","inverted":""}},[_c('bsg-subsection',{attrs:{"title":"Semantic Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"inverted":"","rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Disabled Buttons"}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"disabled":"","inverted":"","rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":((_vm.preferRounded ? 'Squared' : 'Rounded') + " Buttons")}},[_c('div',{staticClass:"buttons"},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-button',{key:buttonTypeIndex,attrs:{"inverted":"","rounded":!_vm.preferRounded,"type":("is-" + buttonTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")])}),1)])],1),_vm._v(" "),_c('bsg-section',{attrs:{"title":"Dropdowns"}},[_c('bsg-subsection',{attrs:{"title":"Semantic Dropdowns"}},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-dropdown',{key:buttonTypeIndex},[_c('b-button',{attrs:{"slot":"trigger","rounded":_vm.preferRounded,"type":("is-" + buttonTypeKey),"icon-right":"caret-down"},slot:"trigger"},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")]),_vm._v(" "),_vm._l((_vm.dropdownItems),function(item,itemIndex){return _c('b-dropdown-item',{key:itemIndex,attrs:{"separator":item.separator,"disabled":item.disabled}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.label)+"\n\t\t\t\t\t\t")])})],2)}),1),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":((_vm.preferRounded ? 'Squared' : 'Rounded') + " Dropdown")}},_vm._l((_vm.buttonTypes),function(buttonTypeKey,buttonTypeIndex){return _c('b-dropdown',{key:buttonTypeIndex},[_c('b-button',{attrs:{"slot":"trigger","rounded":!_vm.preferRounded,"type":("is-" + buttonTypeKey),"icon-right":"caret-down"},slot:"trigger"},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(buttonTypeKey)+"\n\t\t\t\t\t\t")]),_vm._v(" "),_vm._l((_vm.dropdownItems),function(item,itemIndex){return _c('b-dropdown-item',{key:itemIndex,attrs:{"separator":item.separator,"disabled":item.disabled}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.label)+"\n\t\t\t\t\t\t")])})],2)}),1)],1),_vm._v(" "),_c('bsg-section',{attrs:{"title":"Content"}},[_c('div',{staticClass:"content"},[_c('h1',[_vm._v("H1: I say that we approached those sprawling and incomplete obstructions slowly and reluctantly.")]),_vm._v(" "),_c('p',[_vm._v("Would to Heaven we had never approached them at all, but had run back at top speed out of that blasphemous tunnel with the greasily smooth floors and the degenerate murals aping and mocking the things they had superseded—run back, before we had seen what we did see, and before our minds were burned with something which will never let us breathe easily again!")]),_vm._v(" "),_c('h2',[_vm._v("H2: Both of our torches were turned on the prostrate objects, so that we soon realized the dominant factor in their incompleteness.")]),_vm._v(" "),_c('p',[_c('strong',[_vm._v("Mauled, ")]),_vm._v(" "),_c('em',[_vm._v("compressed, ")]),_vm._v(" "),_c('strong',[_c('em',[_vm._v("twisted, ")])]),_vm._v(" and "),_c('a',{attrs:{"href":"#"}},[_vm._v("ruptured as they were,")]),_vm._v(" their chief common injury was total decapitation. "),_c('a',{attrs:{"href":"#"}},[_c('strong',[_vm._v("From each one ")]),_vm._v("the "),_c('em',[_vm._v("tentacled starfish-head")]),_vm._v(" had been removed; "),_c('strong',[_c('em',[_vm._v("and as we drew near")])]),_vm._v(" we saw that")]),_vm._v(" the manner of removal looked more like some hellish tearing or suction than like any ordinary form of cleavage.")]),_vm._v(" "),_c('p',[_vm._v("Their noisome "),_c('code',[_vm._v("dark-green ichor")]),_vm._v(" formed a large, spreading pool; but its stench was half overshadowed by the newer and stranger stench, here more pungent than at any other point along our route. Only when we had come very close to the sprawling obstructions could we trace that second, unexplainable fetor to any immediate source—and the instant we did so Danforth, remembering certain very vivid sculptures of the Old Ones' history in the Permian Age one hundred and fifty million years ago, gave vent to a nerve-tortured cry which echoed hysterically through that vaulted and archaic passage with the evil, palimpsest carvings.")]),_vm._v(" "),_c('h3',[_vm._v("H3: I came only just short of echoing his cry myself")]),_vm._v(" "),_c('p',[_vm._v("For I had seen those primal sculptures, too, and had shudderingly admired the way the nameless artist had suggested that hideous slime coating found on certain incomplete and prostrate Old Ones—those whom the frightful Shoggoths had characteristically slain and sucked to a ghastly headlessness in the great war of re-subjugation. They were infamous, nightmare sculptures even when telling of age-old, bygone things; for Shoggoths and their work ought not to be seen by human beings or portrayed by any beings.")]),_vm._v(" "),_c('blockquote',[_vm._v("The mad author of the Necronomicon had nervously tried to swear that none had been bred on this planet, and that only drugged dreamers had even conceived them.")]),_vm._v(" "),_c('p',[_vm._v("Formless protoplasm able to mock and reflect all forms and organs and processes—viscous agglutinations of bubbling cells—rubbery fifteen-foot spheroids infinitely plastic and ductile—slaves of suggestion, builders of cities—more and more sullen, more and more intelligent, more and more amphibious, more and more imitative! Great God! What madness made even those blasphemous Old Ones willing to use and carve such things?")]),_vm._v(" "),_c('h4',[_vm._v("H4: And now, when Danforth and I saw the freshly glistening and reflectively iridescent black slime")]),_vm._v(" "),_c('p',[_vm._v("Which clung thickly to those headless bodies and stank obscenely with that new, unknown odor whose cause only a diseased fancy could envisage—clung to those bodies and sparkled less voluminously on a smooth part of the accursedly resculptured wall in a series of grouped dots—we understood the quality of cosmic fear to its uttermost depths.")]),_vm._v(" "),_c('h5',[_vm._v("H5: It was not fear of those four missing others—for all too well did we suspect they would do no harm again.")]),_vm._v(" "),_c('p',[_vm._v("Poor devils! After all, they were not evil things of their kind. They were the men of another age and another order of being.")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Nature had played a hellish jest")]),_vm._v(" "),_c('li',[_vm._v("on them—as it will on any others")]),_vm._v(" "),_c('li',[_vm._v("that human madness, callousness, or cruelty may hereafter dig up in that hideously dead or sleeping polar waste and this was their tragic homecoming.")])]),_vm._v(" "),_c('p',[_vm._v("They had not been even savages—for what indeed had they done?")]),_vm._v(" "),_c('ol',[_c('li',[_vm._v("That awful awakening in the cold of an unknown")]),_vm._v(" "),_c('li',[_vm._v("epoch—perhaps an attack by the furry,")]),_vm._v(" "),_c('li',[_vm._v("frantically barking quadrupeds,")]),_vm._v(" "),_c('li',[_vm._v("and a dazed defense against them and the equally frantic white simians with the queer wrappings and paraphernalia . . . poor Lake, poor Gedney . . . and poor Old Ones!")])]),_vm._v(" "),_c('h6',[_vm._v("H6: Scientists to the last—what had they done that we would not have done in their place?")]),_vm._v(" "),_c('p',[_vm._v("God, what intelligence and persistence! What a facing of the incredible, just as those carven kinsmen and forbears had faced things only a little less incredible! Radiates, vegetables, monstrosities, star-spawn—whatever they had been, they were men!")]),_vm._v(" "),_c('pre',[_vm._v("They had crossed the icy peaks on whose templed slopes\nthey had once worshipped and roamed among the tree-ferns.\nThey had found their dead city brooding under its curse, and had read its carven latter days as we had done.")]),_vm._v(" "),_c('p',[_vm._v("They had tried to reach their living fellows in fabled depths of blackness they had never seen—and what had they found?")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('p',[_vm._v("All this flashed in unison through the thoughts of Danforth and me as we looked from those headless, slime-coated shapes to the loathsome palimpsest sculptures and the diabolical dot-groups of fresh slime on the wall beside them—looked and understood what must have triumphed and survived down there in the Cyclopean water-city of that nighted, penguin-fringed abyss, whence even now a sinister curling mist had begun to belch pallidly as if in answer to Danforth's hysterical scream.")])])]),_vm._v(" "),_c('bsg-section',{attrs:{"title":"Titles"}},[_c('bsg-subsection',_vm._l((_vm.titleSizes),function(titleSize,titleI){return _c('h1',{key:titleI,class:("title is-" + titleSize)},[_vm._v("\n\t\t\t\t\t\tTitle "+_vm._s(titleSize)+"\n\t\t\t\t\t")])}),0),_vm._v(" "),_c('bsg-subsection',_vm._l((_vm.titleSizes),function(titleSize,titleI){return _c('h1',{key:titleI,class:("subtitle is-" + titleSize)},[_vm._v("\n\t\t\t\t\t\tSubtitle "+_vm._s(titleSize)+"\n\t\t\t\t\t")])}),0),_vm._v(" "),_c('bsg-subsection',_vm._l((_vm.titleSizes.slice(0, (_vm.titlePairOffset * -1))),function(titleSize,titleI){return _c('div',{key:titleI,staticClass:"content"},[_c('h1',{class:("title is-" + titleSize)},[_vm._v("\n\t\t\t\t\t\t\tTitle "+_vm._s(titleSize)+"\n\t\t\t\t\t\t")]),_vm._v(" "),_c('h1',{class:("subtitle is-" + (titleSize + _vm.titlePairOffset))},[_vm._v("\n\t\t\t\t\t\t\tSubtitle "+_vm._s(titleSize + _vm.titlePairOffset)+"\n\t\t\t\t\t\t")])])}),0)],1),_vm._v(" "),_c('bsg-section',{attrs:{"title":"Dialogs & Modals"}},[_c('dialog-modal',{attrs:{"dialog-sizes":_vm.dialogSizes,"types":_vm.semanticTypes}})],1),_vm._v(" "),_c('bsg-section',{attrs:{"title":"Tags"}},[_c('bsg-subsection',{attrs:{"title":"Tags Sizes"}},[_c('div',{staticClass:"tags"},_vm._l((_vm.tagSizes),function(tagSizeKey,tagSizeIndex){return _c('b-tag',{key:tagSizeIndex,attrs:{"rounded":_vm.preferRounded,"type":("is-" + (_vm.tagTypes[tagSizeIndex])),"size":("is-" + tagSizeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(tagSizeKey)+" Tag\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Semantic Tags"}},[_c('div',{staticClass:"tags"},_vm._l((_vm.tagTypes),function(tagTypeKey,tagTypeIndex){return _c('b-tag',{key:tagTypeIndex,attrs:{"rounded":_vm.preferRounded,"type":("is-" + tagTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(tagTypeKey)+" Tag\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":((_vm.preferRounded ? 'Squared' : 'Rounded') + " Tags")}},[_c('div',{staticClass:"tags"},_vm._l((_vm.tagTypes),function(tagTypeKey,tagTypeIndex){return _c('b-tag',{key:tagTypeIndex,attrs:{"rounded":!_vm.preferRounded,"type":("is-" + tagTypeKey)}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(tagTypeKey)+" Tag\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Closeable Tags"}},[_c('div',{staticClass:"tags"},_vm._l((_vm.closeableTags),function(tagTypeKey,tagTypeIndex){return _c('b-tag',{key:tagTypeKey,attrs:{"rounded":_vm.preferRounded,"type":("is-" + tagTypeKey),"closable":""},on:{"close":function($event){return _vm.closeTab(tagTypeIndex)}}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(tagTypeKey)+" Tag\n\t\t\t\t\t\t")])}),1)]),_vm._v(" "),_c('bsg-subsection',{attrs:{"title":"Attached Closeable Tags"}},[_c('div',{staticClass:"field is-grouped is-grouped-multiline"},_vm._l((_vm.attachedCloseableTags),function(tagTypeKey,tagTypeIndex){return _c('div',{key:tagTypeIndex,staticClass:"control"},[_c('b-tag',{attrs:{"rounded":_vm.preferRounded,"type":("is-" + tagTypeKey),"closable":"","attached":""},on:{"close":function($event){return _vm.closeAttachedTab(tagTypeIndex)}}},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(tagTypeKey)+" Tag\n\t\t\t\t\t\t\t")])],1)}),0)])],1)],1)])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-b19b5954_0", { source: ".buefy-style-guide__body[data-v-b19b5954]{padding:2rem 0}.buefy-style-guide[data-v-b19b5954]  .button,.buefy-style-guide[data-v-b19b5954]  .tag{text-transform:capitalize}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-b19b5954";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var BuefyStyleGuide = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    browser,
    undefined
  );

var version = '0.2.4';

var install = function install(Vue) {
  Vue.component('buefy-style-guide', BuefyStyleGuide);
};

var plugin = {
  install: install,
  version: version
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;
