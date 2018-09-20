(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svg-react-loader/lib/loader.js!./svg/no.svg":
/*!******************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./svg/no.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nfunction No (props) {\n    return React.createElement(\"svg\",props,React.createElement(\"path\",{\"d\":\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z\"}));\n}\n\nNo.displayName = \"No\";\n\nNo.defaultProps = {\"viewBox\":\"-2 -2 28 28\"};\n\nmodule.exports = No;\n\nNo.default = No;\n\n\n//# sourceURL=webpack:///./svg/no.svg?./node_modules/svg-react-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./svg/not.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./svg/not.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nfunction Not (props) {\n    return React.createElement(\"svg\",props,React.createElement(\"circle\",{\"cx\":\"12\",\"cy\":\"12\",\"r\":\"12\"}));\n}\n\nNot.displayName = \"Not\";\n\nNot.defaultProps = {\"viewBox\":\"-2 -2 28 28\"};\n\nmodule.exports = Not;\n\nNot.default = Not;\n\n\n//# sourceURL=webpack:///./svg/not.svg?./node_modules/svg-react-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js!./svg/yes.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js!./svg/yes.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nfunction Yes (props) {\n    return React.createElement(\"svg\",props,React.createElement(\"path\",{\"d\":\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z\"}));\n}\n\nYes.displayName = \"Yes\";\n\nYes.defaultProps = {\"viewBox\":\"-2 -2 28 28\"};\n\nmodule.exports = Yes;\n\nYes.default = Yes;\n\n\n//# sourceURL=webpack:///./svg/yes.svg?./node_modules/svg-react-loader/lib/loader.js");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _expand = __webpack_require__(/*! ./expand */ \"./src/expand.js\");\n\nvar _expand2 = _interopRequireDefault(_expand);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar seed = Date.now();\n\nvar generateName = function generateName() {\n    return \"menu-\" + seed + \"-\" + Math.random();\n};\nvar byScoreSum = function byScoreSum(a, b) {\n    return function (asum, bsum) {\n        return bsum - asum;\n    }((a.upScore || 0) + (a.downScore || 0), (b.upScore || 0) + (b.downScore || 0));\n};\nvar noop = function noop() {};\nvar thru = function thru(x) {\n    return x;\n};\n\nvar defaultTexts = {\n\n    choose: \"Choose\",\n    done: \"Done\",\n    save: \"Save\",\n    delete: \"Delete\",\n    archive: \"Archive\"\n\n};\n\nvar MenuItem = function MenuItem(_ref) {\n    var decorate = _ref.decorate,\n        chosen = _ref.chosen,\n        item = _ref.item,\n        name = _ref.name,\n        template = _ref.template,\n        _onChange = _ref.onChange,\n        texts = _ref.texts,\n        onDelete = _ref.onDelete,\n        onArchive = _ref.onArchive;\n    return _react2.default.createElement(\n        \"label\",\n        { className: decorate(\"choice\") },\n        _react2.default.createElement(\"input\", { type: \"radio\", checked: !!(chosen && chosen.id === item.id), name: name, value: item.id, onChange: function onChange(e) {\n                return _onChange(e, item);\n            } }),\n        _react2.default.createElement(\n            \"div\",\n            { className: decorate(\"choice-content\") },\n            (0, _expand2.default)(template, item),\n            _react2.default.createElement(\n                \"div\",\n                { className: \"actions\" },\n                _react2.default.createElement(\n                    \"button\",\n                    { mode: \"button\", className: decorate(\"choose\"), onClick: function onClick(e) {\n                            return _onChange(e, item);\n                        } },\n                    texts.choose\n                ),\n                _react2.default.createElement(\n                    \"button\",\n                    { mode: \"button\", className: decorate(\"cancel\"), onClick: function onClick(e) {\n                            return _onChange(e, undefined);\n                        } },\n                    texts.done\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"danger-actions\" },\n                    onDelete && _react2.default.createElement(\n                        \"button\",\n                        { mode: \"button\", className: decorate(\"delete\"), onClick: function onClick(e) {\n                                return onDelete(e, item);\n                            } },\n                        texts.delete\n                    ),\n                    onArchive && _react2.default.createElement(\n                        \"button\",\n                        { mode: \"button\", className: decorate(\"archive\"), onClick: function onClick(e) {\n                                return onArchive(e, item);\n                            } },\n                        texts.archive\n                    )\n                )\n            )\n        )\n    );\n};\n\nvar EditableMenuItem = function EditableMenuItem(_ref2) {\n    var decorate = _ref2.decorate,\n        chosen = _ref2.chosen,\n        name = _ref2.name,\n        template = _ref2.template,\n        _onChange2 = _ref2.onChange,\n        onSave = _ref2.onSave,\n        texts = _ref2.texts,\n        _ref2$editable = _ref2.editable,\n        editable = _ref2$editable === undefined ? {} : _ref2$editable;\n    return _react2.default.createElement(\n        \"label\",\n        { className: \"editing \" + decorate(\"choice\") },\n        _react2.default.createElement(\"input\", { type: \"radio\", checked: true, name: name, value: chosen.id, onChange: function onChange(e) {\n                return _onChange2(e, chosen);\n            } }),\n        _react2.default.createElement(\n            \"div\",\n            { className: decorate(\"choice-content\"), onChange: function onChange(e) {\n                    return _onChange2(e, chosen);\n                } },\n            (0, _expand2.default)(template, chosen, editable),\n            _react2.default.createElement(\n                \"div\",\n                { className: \"actions\" },\n                _react2.default.createElement(\n                    \"button\",\n                    { mode: \"button\", className: decorate(\"editable\"), onClick: function onClick(e) {\n                            return onSave(e, chosen);\n                        } },\n                    texts.save\n                ),\n                _react2.default.createElement(\n                    \"button\",\n                    { mode: \"button\", className: decorate(\"cancel\"), onClick: function onClick(e) {\n                            return _onChange2(e, undefined);\n                        } },\n                    texts.done\n                )\n            )\n        )\n    );\n};\n\nvar withDefaults = function withDefaults(func) {\n    return function (props) {\n        return func(_extends({\n\n            name: generateName(),\n            onChange: noop,\n            decorate: thru\n        }, props, {\n            texts: _extends({}, defaultTexts, props.texts),\n            items: !props.chosen || props.items.find(function (x) {\n                return x.id === props.chosen.id;\n            }) ? props.items : [].concat(_toConsumableArray(props.items), [props.chosen])\n        }));\n    };\n};\n\nvar Menu = withDefaults(function (props) {\n    return _react2.default.createElement(\n        \"section\",\n        { className: props.decorate(\"menu \" + (props.chosen ? \"chosen\" : \"\")) },\n        _react2.default.createElement(\n            \"div\",\n            { className: props.decorate(\"choices\") },\n            props.items.slice(0).sort(byScoreSum).map(function (item) {\n                return props.chosen && props.chosen.id === item.id ? props.onSave ? _react2.default.createElement(EditableMenuItem, _extends({ key: item.id }, props, { item: item })) : _react2.default.createElement(MenuItem, _extends({ key: item.id }, props, { item: item })) : _react2.default.createElement(MenuItem, _extends({ key: item.id }, props, { item: item }));\n            })\n        )\n    );\n});\n\nexports.default = Menu;\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "./src/OneOf.js":
/*!**********************!*\
  !*** ./src/OneOf.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n    var name = _ref.name,\n        className = _ref.className,\n        options = _ref.options,\n        selected = _ref.selected,\n        handleChange = _ref.handleChange;\n    return _react2.default.createElement(\n        \"span\",\n        { className: className ? \"one-of \" + className : \"one-of\" },\n        options.map(function (_ref2) {\n            var value = _ref2.value,\n                child = _ref2.child;\n            return _react2.default.createElement(\n                \"label\",\n                { key: value, className: \"one-of-option one-of-option-\" + value },\n                _react2.default.createElement(\"input\", {\n                    type: \"radio\",\n                    name: name,\n                    value: value,\n                    checked: selected == value,\n                    onChange: function onChange(e) {\n                        return handleChange(e, value);\n                    }\n                }),\n                _react2.default.createElement(\n                    \"span\",\n                    { className: \"content\" },\n                    child\n                )\n            );\n        })\n    );\n};\n\n//# sourceURL=webpack:///./src/OneOf.js?");

/***/ }),

/***/ "./src/Scoring.js":
/*!************************!*\
  !*** ./src/Scoring.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _OneOf = __webpack_require__(/*! ./OneOf */ \"./src/OneOf.js\");\n\nvar _OneOf2 = _interopRequireDefault(_OneOf);\n\nvar _yes = __webpack_require__(/*! svg-react-loader!../svg/yes.svg */ \"./node_modules/svg-react-loader/lib/loader.js!./svg/yes.svg\");\n\nvar _yes2 = _interopRequireDefault(_yes);\n\nvar _no = __webpack_require__(/*! svg-react-loader!../svg/no.svg */ \"./node_modules/svg-react-loader/lib/loader.js!./svg/no.svg\");\n\nvar _no2 = _interopRequireDefault(_no);\n\nvar _not = __webpack_require__(/*! svg-react-loader!../svg/not.svg */ \"./node_modules/svg-react-loader/lib/loader.js!./svg/not.svg\");\n\nvar _not2 = _interopRequireDefault(_not);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DOWN = \"down\",\n    UP = \"up\",\n    NEITHER = \"-\";\n\nvar targetOptions = function targetOptions(target) {\n    return [target.scores.find(function (s) {\n        return s.downScore;\n    }) ? { value: DOWN, child: _react2.default.createElement(_no2.default, null) } : undefined, { value: NEITHER, child: _react2.default.createElement(_not2.default, null) }, target.scores.find(function (s) {\n        return s.upScore;\n    }) ? { value: UP, child: _react2.default.createElement(_yes2.default, null) } : undefined].filter(function (x) {\n        return x;\n    });\n};\n\nvar thru = function thru(x) {\n    return x;\n};\n\nvar scoreOf = function scoreOf(selected, target) {\n    return selected === UP && target.upScore ? _react2.default.createElement(\n        \"span\",\n        { className: \"up\" },\n        target.upScore\n    ) : selected === DOWN && target.downScore ? _react2.default.createElement(\n        \"span\",\n        { className: \"down\" },\n        target.downScore\n    ) : _react2.default.createElement(\"span\", { className: \"nothing\" });\n};\n\nvar num = function num(x) {\n    return Number(x) || 0;\n};\n\nvar scoreResult = function scoreResult(score, selected, target) {\n    return selected === UP ? _react2.default.createElement(\n        \"span\",\n        { className: \"up\" },\n        target.scores.reduce(function (sum, x) {\n            return sum + num(x.upScore);\n        }, num(score))\n    ) : selected === DOWN ? _react2.default.createElement(\n        \"span\",\n        { className: \"down\" },\n        target.scores.reduce(function (sum, x) {\n            return sum - num(x.downScore);\n        }, num(score))\n    ) : null;\n};\n\nvar Scoree = function Scoree(_ref) {\n    var id = _ref.id,\n        name = _ref.name,\n        score = _ref.score,\n        target = _ref.target,\n        selected = _ref.selected,\n        handleChange = _ref.handleChange,\n        decorate = _ref.decorate;\n    return _react2.default.createElement(\n        \"tr\",\n        { className: decorate(\"scoree\") },\n        _react2.default.createElement(\n            \"td\",\n            { className: decorate(\"name\") },\n            name\n        ),\n        _react2.default.createElement(\n            \"td\",\n            null,\n            _react2.default.createElement(_OneOf2.default, {\n                name: id,\n                options: targetOptions(target),\n                selected: selected || NEITHER,\n                handleChange: handleChange })\n        ),\n        _react2.default.createElement(\n            \"td\",\n            { className: decorate(\"score\") },\n            score\n        ),\n        target.scores.map(function (s) {\n            return _react2.default.createElement(\n                \"td\",\n                { key: s.id, className: decorate(\"score-diff \" + s.id) },\n                scoreOf(selected, s)\n            );\n        }),\n        _react2.default.createElement(\n            \"td\",\n            { className: decorate(\"score-result\") },\n            scoreResult(score, selected, target)\n        )\n    );\n};\n\nvar Scoring = function (_Component) {\n    _inherits(Scoring, _Component);\n\n    function Scoring() {\n        _classCallCheck(this, Scoring);\n\n        var _this = _possibleConstructorReturn(this, (Scoring.__proto__ || Object.getPrototypeOf(Scoring)).call(this));\n\n        _this.state = { selected: {} };\n\n        return _this;\n    }\n\n    _createClass(Scoring, [{\n        key: \"handleChange\",\n        value: function handleChange(scoreeId, e, i) {\n            var selected = this.state.selected;\n\n            selected[scoreeId] = i === NEITHER ? undefined : i;\n            this.setState({ selected: selected });\n            var _props = this.props,\n                handleChange = _props.handleChange,\n                target = _props.target;\n\n            if (handleChange) {\n                handleChange(selected);\n            }\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _this2 = this;\n\n            var _props2 = this.props,\n                target = _props2.target,\n                scorees = _props2.scorees,\n                _props2$decorate = _props2.decorate,\n                decorate = _props2$decorate === undefined ? thru : _props2$decorate;\n\n            if (!(target && scorees)) return null;\n            return _react2.default.createElement(\n                \"div\",\n                { className: decorate(\"scoring\") },\n                _react2.default.createElement(\n                    \"table\",\n                    null,\n                    _react2.default.createElement(\n                        \"thead\",\n                        null,\n                        _react2.default.createElement(\n                            \"tr\",\n                            null,\n                            _react2.default.createElement(\n                                \"th\",\n                                { colSpan: \"3\" },\n                                \"\\xA0\"\n                            ),\n                            target.scores.map(function (s) {\n                                return _react2.default.createElement(\n                                    \"th\",\n                                    { key: s.id },\n                                    s.component\n                                );\n                            })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        \"tbody\",\n                        null,\n                        scorees.map(function (s) {\n                            return _react2.default.createElement(Scoree, _extends({\n                                key: s.id }, s, { target: target,\n                                handleChange: _this2.handleChange.bind(_this2, s.id),\n                                selected: _this2.state.selected[s.id],\n                                decorate: decorate\n                            }));\n                        })\n                    )\n                )\n            );\n        }\n    }], [{\n        key: \"getDerivedStateFromProps\",\n        value: function getDerivedStateFromProps(nextProps, prevState) {\n\n            if (nextProps.target && prevState.targetId === nextProps.target.id) return null;\n            var nextState = {\n\n                targetId: nextProps.target ? nextProps.target.id : undefined,\n                selected: nextProps.selected || {}\n\n            };\n            return nextState;\n        }\n    }]);\n\n    return Scoring;\n}(_react.Component);\n\nexports.default = Scoring;\n\n//# sourceURL=webpack:///./src/Scoring.js?");

/***/ }),

/***/ "./src/expand.js":
/*!***********************!*\
  !*** ./src/expand.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.default = expand;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar asArray = function asArray(x) {\n    return Array.isArray(x) ? x : [].concat(x || []);\n};\n\nvar asItems = function asItems(is) {\n    return asArray(is).map(function (i) {\n        return (typeof i === \"undefined\" ? \"undefined\" : _typeof(i)) === \"object\" ? i : { \"prop\": i };\n    }).map(function (i) {\n        return \"key\" in i ? i : _extends({}, i, { key: i.prop });\n    }).map(function (i) {\n        return \"className\" in i ? i : _extends({}, i, { className: i.prop || i.key });\n    }).map(function (i) {\n        return \"items\" in i ? _extends({}, i, { items: asItems(i.items) }) : i;\n    });\n};\n\nvar expandClassNameBit = function expandClassNameBit(classNameBit, ti, d) {\n\n    switch (classNameBit) {\n\n        case \"{prop}\":\n            return ti.prop;\n        case \"{key}\":\n            return ti.key;\n        case \"{truthiness}\":\n            return (!!d[ti.prop]).toString();\n        default:\n            return classNameBit;\n\n    }\n};\n\nvar expandClassName = function expandClassName(className, ti, d) {\n    return className.split(\" \").map(function (c) {\n        return expandClassNameBit(c, ti, d);\n    }).join(\" \");\n};\n\nvar classNameOf = function classNameOf(ti, d) {\n    return ti.className ? expandClassName(ti.className, ti, d) : ti.propName;\n};\n\nvar keyOf = function keyOf(ti, d) {\n    return ti.keyProp ? d[ti.keyProp] : ti.key;\n};\n\nvar element = function element(ti, d, content) {\n    return ti.div ? _react2.default.createElement(\n        \"div\",\n        { key: keyOf(ti, d), className: classNameOf(ti, d) },\n        content\n    ) : _react2.default.createElement(\n        \"span\",\n        { key: keyOf(ti, d), className: classNameOf(ti, d) },\n        content\n    );\n};\n\nvar dangerouslyUpdateObject = function dangerouslyUpdateObject(d, ti) {\n    return function (e) {\n        return d[ti.prop] = e.target.value;\n    };\n};\n\nvar controlElement = function controlElement(ti, d, editable) {\n\n    var editableType = ti.editable.type;\n    switch (editableType) {\n\n        case \"textarea\":\n            return _react2.default.createElement(\"textarea\", { name: ti.prop, value: d[ti.prop], onChange: dangerouslyUpdateObject(d, ti) });\n        case \"numeric\":\n            return _react2.default.createElement(\"input\", { type: \"number\", name: ti.prop, value: d[ti.prop] || \"\", onChange: dangerouslyUpdateObject(d, ti) });\n        default:\n            return _react2.default.createElement(\"input\", { type: \"text\", name: ti.prop, value: d[ti.prop] || \"\", onChange: dangerouslyUpdateObject(d, ti) });\n\n    }\n};\n\nvar control = function control(ti, d, editable) {\n    return _react2.default.createElement(\n        \"label\",\n        null,\n        _react2.default.createElement(\n            \"span\",\n            null,\n            ti.editable.label\n        ),\n        controlElement(ti, d, editable)\n    );\n};\n\nvar contentOf = function contentOf(ti, d, editable) {\n    return \"items\" in ti ? ti.items.map(function (tii) {\n        return element(tii, d, contentOf(tii, d, editable), editable);\n    }) : editable && ti.editable ? control(ti, d, editable) : d ? d[ti.prop] : null;\n};\n\nvar contentsOf = function contentsOf(ti, d, editable) {\n    return Array.isArray(d[ti.prop]) ? _react2.default.createElement(\n        \"ul\",\n        null,\n        d[ti.prop].map(function (di, diIndex) {\n            return _react2.default.createElement(\n                \"li\",\n                { key: keyOf(ti, di) },\n                contentOf(ti, di, editable)\n            );\n        })\n    ) : contentOf(ti, d, editable);\n};\n\nfunction expand(template, data) {\n    var editable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n\n    return asItems(template).map(function (templateItem) {\n        return element(templateItem, data, contentsOf(templateItem, data, editable));\n    });\n}\n\n//# sourceURL=webpack:///./src/expand.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Scoring = exports.Menu = undefined;\n\nvar _Menu = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _Scoring = __webpack_require__(/*! ./Scoring */ \"./src/Scoring.js\");\n\nvar _Scoring2 = _interopRequireDefault(_Scoring);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Menu = _Menu2.default;\nexports.Scoring = _Scoring2.default;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });
});