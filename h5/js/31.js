(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"287":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),o=_interopRequireDefault(n(46)),c=_interopRequireDefault(n(56));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(288);var r=function(e){function AtCheckbox(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtCheckbox),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtCheckbox.__proto__||Object.getPrototypeOf(AtCheckbox)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtCheckbox,l.default.Component),a(AtCheckbox,[{"key":"handleClick","value":function handleClick(e){if(!e.disabled){var t=e.value,n=new Set(this.props.selectedList);n.has(t)?n.delete(t):n.add(t),this.props.onChange(Array.from(n))}}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.options,a=t.selectedList,o=t.style;return l.default.createElement(i.View,{"className":"at-checkbox","style":o},n.map(function(t){return l.default.createElement(i.View,{"key":t.value,"onClick":e.handleClick.bind(e,t),"className":t.disabled?"at-checkbox__option at-checkbox__option--disabled":"at-checkbox__option"},l.default.createElement(i.View,{"className":"at-checkbox__option_wrap"},l.default.createElement(i.View,{"className":"at-checkbox__option_container"},l.default.createElement(i.View,{"className":a.includes(t.value)?"at-checkbox__icon at-checkbox__icon--selected":"at-checkbox__icon"},l.default.createElement(i.View,{"className":"at-checkbox__icon_container"},l.default.createElement(c.default,{"value":"check","size":"14","color":"#fff"}))),l.default.createElement(i.View,{"className":"at-checkbox__title"},t.label)),t.desc?l.default.createElement(i.View,{"className":"at-checkbox__desc"},t.desc):null))}))}}]),AtCheckbox}();r.defaultProps={"style":"","options":[],"selectedList":[],"onChange":function onChange(){}},r.propTypes={"style":o.default.oneOfType([o.default.object,o.default.string]),"options":o.default.array,"selectedList":o.default.array,"onChange":o.default.func},t.default=r},"288":function(e,t,n){},"290":function(e,t,n){},"38":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),o=_interopRequireDefault(n(287)),c=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(290);var r=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"checkedList1":["list1"],"checkedList2":["list1"],"checkedList3":["list1","list4"],"checkboxOption1":[{"value":"list1","label":"iPhone X"},{"value":"list2","label":"HUAWEI P20"},{"value":"list3","label":"OPPO Find X"}],"checkboxOption2":[{"value":"list1","label":"iPhone X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list2","label":"HUAWEI P20","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list3","label":"OPPO Find X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"}],"checkboxOption3":[{"value":"list1","label":"iPhone X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list2","label":"HUAWEI P20"},{"value":"list3","label":"OPPO Find X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。","disabled":!0},{"value":"list4","label":"vivo NEX","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。","disabled":!0}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,l.default.Component),a(Index,[{"key":"handleChange","value":function handleChange(e){this.setState({"checkedList1":e})}},{"key":"handleChangeSnd","value":function handleChangeSnd(e){this.setState({"checkedList2":e})}},{"key":"handleChangeThd","value":function handleChangeThd(e){this.setState({"checkedList3":e})}},{"key":"render","value":function render(){return l.default.createElement(i.View,{"className":"page"},l.default.createElement(c.default,{"title":"Checkbox 复选框"}),l.default.createElement(i.View,{"className":"doc-body"},l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"基础用法"),l.default.createElement(i.View,{"className":"panel__content no-padding"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"checkbox-container"},l.default.createElement(o.default,{"options":this.state.checkboxOption1,"selectedList":this.state.checkedList1,"onChange":this.handleChange.bind(this)}))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"含描述信息"),l.default.createElement(i.View,{"className":"panel__content no-padding"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"checkbox-container"},l.default.createElement(o.default,{"options":this.state.checkboxOption2,"selectedList":this.state.checkedList2,"onChange":this.handleChangeSnd.bind(this)}))))),l.default.createElement(i.View,{"className":"panel"},l.default.createElement(i.View,{"className":"panel__title"},"选项禁用"),l.default.createElement(i.View,{"className":"panel__content no-padding"},l.default.createElement(i.View,{"className":"example-item"},l.default.createElement(i.View,{"className":"checkbox-container"},l.default.createElement(o.default,{"options":this.state.checkboxOption3,"selectedList":this.state.checkedList3,"onChange":this.handleChangeThd.bind(this)})))))))}}]),Index}();t.default=r}}]);