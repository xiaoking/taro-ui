(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"238":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(0)),l=n(45),i=_interopRequireDefault(n(46)),u=_interopRequireDefault(n(56)),c=_interopRequireDefault(n(79));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(239);var f=function(e){function AtTabBar(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTabBar);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTabBar.__proto__||Object.getPrototypeOf(AtTabBar)).apply(this,arguments));return e.state={"isIPhoneX":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTabBar,o.default.Component),r(AtTabBar,[{"key":"componentDidMount","value":function componentDidMount(){var e=a.default.getSystemInfoSync().model,t=void 0===e?"":e;a.default.getEnv()===a.default.ENV_TYPE.WEAPP&&t.indexOf("iPhone X")>=0&&this.setState({"isIPhoneX":!0})}},{"key":"handleClick","value":function handleClick(e){var t;(t=this.props).onClick.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.style,r=t.fixed,a=t.backgroundColor,i=t.tabList,f=t.current,s=t.color,d=t.iconSize,p=t.fontSize,b=t.selectedColor,y=this.state.isIPhoneX,m="color: "+s+";",_="color: "+b+";",h="font-size: "+p+"px;",v="background-color: "+a+";"+n,w=["at-tab-bar"];return r&&w.push("at-tab-bar--fixed"),y&&w.push("at-tab-bar--ipx"),o.default.createElement(l.View,{"className":w,"style":v},i.map(function(t,n){return o.default.createElement(l.View,{"className":"at-tab-bar__item","style":f===n?_:m,"key":t.title,"onClick":e.handleClick.bind(e,n)},t.iconType?o.default.createElement(c.default,{"dot":t.dot,"value":t.text,"max":t.max},o.default.createElement(l.View,{"className":"at-tab-bar__icon"},o.default.createElement(u.default,{"value":f===n&&t.selectedIconType?t.selectedIconType:t.iconType,"size":d,"color":f===n?b:s}))):null,o.default.createElement(l.View,null,o.default.createElement(c.default,{"dot":t.iconType?"":t.dot,"value":t.iconType?"":t.text,"max":t.iconType?"":t.max},o.default.createElement(l.View,{"className":"at-tab-bar__title","style":h},t.title))))}))}}]),AtTabBar}();f.defaultProps={"style":"","fixed":!1,"backgroundColor":"#fff","current":0,"iconSize":"24","fontSize":"14","color":"#333","selectedColor":"#6190E8","scroll":!1,"tabList":[],"onClick":function onClick(){}},f.propTypes={"style":i.default.oneOfType([i.default.object,i.default.string]),"fixed":i.default.bool,"backgroundColor":i.default.string,"current":i.default.number,"iconSize":i.default.oneOfType([i.default.number,i.default.string]),"fontSize":i.default.oneOfType([i.default.number,i.default.string]),"color":i.default.string,"selectedColor":i.default.string,"scroll":i.default.bool,"tabList":i.default.array,"onClick":i.default.func},t.default=f},"239":function(e,t,n){},"241":function(e,t,n){},"30":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(45),l=_interopRequireDefault(n(238)),i=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(241);var u=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"current1":0,"current2":0,"current3":0,"current4":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),r(Index,[{"key":"handleClick","value":function handleClick(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},"current"+e,t))}},{"key":"render","value":function render(){var e=this.state,t=e.current1,n=e.current2,r=e.current3,u=e.current4,c=[{"title":"待办事项","iconType":"bullet-list","text":"new"},{"title":"拍照","iconType":"camera"},{"title":"文件夹","iconType":"folder","text":"100","max":"99"}];return a.default.createElement(o.View,{"className":"page"},a.default.createElement(i.default,{"title":"TabBar 标签栏"}),a.default.createElement(o.View,{"className":"doc-body"},a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"文本标签栏"),a.default.createElement(o.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"tabList":[{"title":"待办事项","text":8},{"title":"拍照"},{"title":"通讯录","dot":!0}],"onClick":this.handleClick.bind(this,1),"current":t}))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"图标文本标签栏"),a.default.createElement(o.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"tabList":c,"onClick":this.handleClick.bind(this,2),"current":n}))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"自定义图标颜色、字体颜色、背景颜色"),a.default.createElement(o.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"backgroundColor":"#FAFBFC","color":"#ea6bb8","selectedColor":"#e64340","tabList":c,"onClick":this.handleClick.bind(this,3),"current":r}))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"固定底部"),a.default.createElement(o.View,{"className":"panel__content no-padding","style":"padding-bottom: 24px;"},a.default.createElement(l.default,{"fixed":!0,"tabList":c,"onClick":this.handleClick.bind(this,4),"current":u})))))}}]),Index}();t.default=u},"52":function(e,t,n){var r=n(61).Symbol;e.exports=r},"57":function(e,t,n){var r=n(52),a=n(63),o=n(64),l="[object Null]",i="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?i:l:u&&u in Object(e)?a(e):o(e)}},"61":function(e,t,n){var r=n(62),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},"62":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"63":function(e,t,n){var r=n(52),a=Object.prototype,o=a.hasOwnProperty,l=a.toString,i=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=o.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(t?e[i]=n:delete e[i]),a}},"64":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"67":function(e,t){e.exports=function isObjectLike(e){return null!=e&&"object"==typeof e}},"79":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(46))),o=_interopRequireDefault(n(0)),l=n(45),i=_interopRequireDefault(n(80));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(82);var u=function(e){function AtBadge(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtBadge);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtBadge.__proto__||Object.getPrototypeOf(AtBadge)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtBadge,o.default.Component),r(AtBadge,[{"key":"formatValue","value":function formatValue(e,t){if(""===e||null===e)return"";var n=+e;return(0,i.default)(n)?e:n>t?t+"+":n}},{"key":"render","value":function render(){var e=this.props,t=e.dot,n=e.value,r=e.maxValue,a=this.formatValue(n,r);return o.default.createElement(l.View,{"className":["at-badge"]},this.props.children,t?o.default.createElement(l.View,{"className":"at-badge__dot"}):""!==a&&o.default.createElement(l.View,{"className":"at-badge__num"},a))}}]),AtBadge}();t.default=u,u.defaultProps={"dot":!1,"value":"","maxValue":99},u.propTypes={"dot":a.default.bool,"value":a.default.string,"maxValue":a.default.number}},"80":function(e,t,n){var r=n(81);e.exports=function isNaN(e){return r(e)&&e!=+e}},"81":function(e,t,n){var r=n(57),a=n(67),o="[object Number]";e.exports=function isNumber(e){return"number"==typeof e||a(e)&&r(e)==o}},"82":function(e,t,n){}}]);