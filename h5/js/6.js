(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"13":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(0)),i=a(45),o=_interopRequireDefault(a(58)),u=_interopRequireDefault(a(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(144);var s=function(e){function ButtonPage(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonPage);for(var n=arguments.length,l=Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=a=_possibleConstructorReturn(this,(e=ButtonPage.__proto__||Object.getPrototypeOf(ButtonPage)).call.apply(e,[this].concat(l))),a.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonPage,r.default.Component),n(ButtonPage,[{"key":"onButtonClick","value":function onButtonClick(){var e=l.default.getEnv();"WEAPP"===e?l.default.showModal({"content":"\b您点击了！","showCancel":!1}):"WEB"===e&&alert("\b您点击了！")}},{"key":"render","value":function render(){return r.default.createElement(i.View,{"className":"page"},r.default.createElement(u.default,{"title":"Button 按钮"}),r.default.createElement(i.View,{"className":"doc-body"},r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"主操作"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"primary","onClick":this.onButtonClick.bind(this)},"主操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"primary","loading":!0,"onClick":this.onButtonClick.bind(this)},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"primary","disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"次要操作"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"secondary"},"次操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"secondary","loading":!0},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"secondary","disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"次次要操作"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,null,"次次要操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"loading":!0},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"小按钮"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small"},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small"},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small"},"按钮"))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","loading":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","loading":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","loading":!0}))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","disabled":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","disabled":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","disabled":!0},"按钮"))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"圆角按钮"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","circle":!0},"按钮"))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","loading":!0,"circle":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","loading":!0,"circle":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","loading":!0,"circle":!0}))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","disabled":!0,"circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","disabled":!0,"circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","disabled":!0,"circle":!0},"按钮")))))))}}]),ButtonPage}();t.default=s},"144":function(e,t,a){},"46":function(e,t,a){e.exports=a(48)()},"47":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=a(1),r=(_interopRequireDefault(l),_interopRequireDefault(a(0))),i=_interopRequireDefault(a(46)),o=a(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(50);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(o.View,{"className":"doc-header"},r.default.createElement(o.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"48":function(e,t,a){"use strict";var n=a(49);function emptyFunction(){}e.exports=function(){function shim(e,t,a,l,r,i){if(i!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"49":function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"50":function(e,t,a){},"53":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),r=_interopRequireDefault(a(46)),i=a(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(54);var o=function(e){function AtLoading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,l.default.Component),n(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,a=e.size,n={"width":a+"px","height":a+"px"},r={"border":"1px solid "+t,"border-color":t+" transparent transparent transparent"},o=Object.assign({},r,n);return l.default.createElement(i.View,{"className":"at-loading","style":n},l.default.createElement(i.View,{"className":"at-loading__ring","style":o}),l.default.createElement(i.View,{"className":"at-loading__ring","style":o}),l.default.createElement(i.View,{"className":"at-loading__ring","style":o}))}}]),AtLoading}();o.defaultProps={"size":"18","color":"#fff"},o.propTypes={"size":r.default.oneOfType([r.default.string,r.default.number]),"color":r.default.oneOfType([r.default.string,r.default.number])},t.default=o},"54":function(e,t,a){},"58":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),r=a(45),i=_interopRequireDefault(a(46)),o=_interopRequireDefault(a(53));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(59);var u={"normal":"normal","small":"small"},s={"primary":"primary","secondary":"secondary"},c=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,l.default.Component),n(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||this.props.onClick&&(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.size,a=void 0===t?"normal":t,n=e.type,i=void 0===n?"":n,c=e.circle,f=e.loading,d=e.disabled,m=["at-button"],p=u[a]||"",b=d?"at-button--disabled":"",y=s[i]?"at-button--"+i:"",_=c?"at-button--circle":"";m.push("at-button--"+p,y,_,b),m=m.filter(function(e){return""!==e});var E="primary"===i?"#fff":"#6190E8",h="small"===a?"16":"18",w=void 0;return f&&(w=l.default.createElement(r.View,{"className":"at-button__icon"},l.default.createElement(o.default,{"color":E,"size":h})),m.push("at-button--icon")),l.default.createElement(r.View,{"className":m,"onClick":this.onClick.bind(this)},w,l.default.createElement(r.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=c,c.defaultProps={"size":"normal","type":"","circle":!1,"loading":!1,"disabled":!1},c.propTypes={"size":i.default.oneOf(["normal","small"]),"type":i.default.oneOf(["primary","secondary"]),"circle":i.default.bool,"loading":i.default.bool,"disabled":i.default.bool}},"59":function(e,t,a){}}]);