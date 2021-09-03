/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./browser/App.jsx":
/*!*************************!*\
  !*** ./browser/App.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _src_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/store.js */ "./src/store.js");
/* harmony import */ var _src_Page_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Page.jsx */ "./src/Page.jsx");
/* eslint "react/react-in-jsx-scope": "off" */

/* eslint "react/jsx-no-undef": "off" */





 // save the data sent by the uiserver along with server-rendered
// html in the global store object.
// eslint-disable-next-line no-underscore-dangle

_src_store_js__WEBPACK_IMPORTED_MODULE_3__.default.initialData = window.__INITIAL_DATA__;
var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_Page_jsx__WEBPACK_IMPORTED_MODULE_4__.default, null)); // hydrate only adds event handlers to the server-rendered document.

react_dom__WEBPACK_IMPORTED_MODULE_2__.hydrate(element, document.getElementById('contents')); // hot module replacement

if (false) {}

/***/ }),

/***/ "./src/About.jsx":
/*!***********************!*\
  !*** ./src/About.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var About = /*#__PURE__*/function (_React$Component) {
  _inherits(About, _React$Component);

  var _super = _createSuper(About);

  function About(props) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, props);
    var apiAbout = _store_js__WEBPACK_IMPORTED_MODULE_1__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_1__.default.initialData.about : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_1__.default.initialData;
    _this.state = {
      apiAbout: apiAbout
    };
    return _this;
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var apiAbout, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                apiAbout = this.state.apiAbout;

                if (!(apiAbout == null)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return About.fetchData();

              case 4:
                data = _context.sent;
                this.setState({
                  apiAbout: data.about
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var apiAbout = this.state.apiAbout;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Issue Tracker Version 0.9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, apiAbout));
    }
  }], [{
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__.default)('query{about}');
                return _context2.abrupt("return", data);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.js */ "./src/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // contents of the pages below the naviagtion bar

function Contents() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
    exact: true,
    from: "/",
    to: "/issues"
  }), _routes_js__WEBPACK_IMPORTED_MODULE_1__.default.map(function (attrs) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, _extends({}, attrs, {
      key: attrs.path
    }));
  }));
}

/***/ }),

/***/ "./src/DateInput.jsx":
/*!***************************!*\
  !*** ./src/DateInput.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // from Date to 'yyyy-mm-dd'

function editFormat(date) {
  return date === null ? '' : date.toISOString().substr(0, 10);
} // from Date obj to 'Sat Feb 01 2021' str format


function displayFormat(date) {
  return date === null ? '' : date.toDateString();
} // for validation, from 'yyyy-mm-dd' to Date obj or null


function unformat(dateStr) {
  var val = new Date(dateStr);
  return Number.isNaN(val.getTime()) ? null : val;
}

var DateInput = /*#__PURE__*/function (_React$Component) {
  _inherits(DateInput, _React$Component);

  var _super = _createSuper(DateInput);

  function DateInput(props) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _super.call(this, props);
    _this.state = {
      value: editFormat(props.value),
      focus: false,
      valid: true
    };
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  } // handles changes in the input box


  _createClass(DateInput, [{
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value.match(/^[\d-]*$/)) {
        this.setState({
          value: e.target.value
        });
      }
    } // executed when the user clicks the input box

  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focus: true
      });
    } // executed when the input box get unfocused

  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var _this$state = this.state,
          value = _this$state.value,
          oldValid = _this$state.valid;
      var _this$props = this.props,
          onValidityChange = _this$props.onValidityChange,
          onChange = _this$props.onChange;
      var dateValue = unformat(value);
      var valid = value === '' || dateValue != null;

      if (valid !== oldValid && onValidityChange) {
        onValidityChange(e, valid);
      }

      this.setState({
        focus: false,
        valid: valid
      });
      if (valid) onChange(e, dateValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          value = _this$state2.value,
          focus = _this$state2.focus,
          valid = _this$state2.valid;

      var _this$props2 = this.props,
          origValue = _this$props2.value,
          onValidityChange = _this$props2.onValidityChange,
          props = _objectWithoutProperties(_this$props2, ["value", "onValidityChange"]);

      var inputVal = !valid || focus ? value : displayFormat(origValue);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({}, props, {
        value: inputVal,
        placeholder: focus ? 'yyyy-mm-dd' : null,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      }));
    }
  }]);

  return DateInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/Footer.jsx":
/*!************************!*\
  !*** ./src/Footer.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-center"
  }, "Full source code available at this", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/aungmcs/issue-tracker"
  }, "GitHub repository")));
}

/***/ }),

/***/ "./src/IssueAddNavItem.jsx":
/*!*********************************!*\
  !*** ./src/IssueAddNavItem.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Tooltip.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Glyphicon.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ControlLabel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var IssueAddNavItem = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueAddNavItem, _React$Component);

  var _super = _createSuper(IssueAddNavItem);

  function IssueAddNavItem(props) {
    var _this;

    _classCallCheck(this, IssueAddNavItem);

    _this = _super.call(this, props);
    _this.state = {
      showing: false
    };
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_this));
    _this.hideModal = _this.hideModal.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueAddNavItem, [{
    key: "showModal",
    value: function showModal() {
      this.setState({
        showing: true
      });
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.setState({
        showing: false
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var form, issue, query, showError, data, history;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /**
                 * Once the input form is submitted, it creats a new issue object
                 * using the values from the form and sends a issueAdd mutation
                 * request to the graphQL server. Then it navigates to the corresponding
                 * issue edit page to further add info to the new added issue.
                 */
                e.preventDefault();
                this.hideModal();
                form = document.forms.issueAdd;
                issue = {
                  owner: form.owner.value,
                  title: form.title.value,
                  due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)
                };
                query = "mutation issueAdd($issue: IssueInputs!){\n       issueAdd(issue: $issue){\n        id\n       }\n    }";
                showError = this.props.showError;
                _context.next = 8;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__.default)(query, {
                  issue: issue
                }, showError);

              case 8:
                data = _context.sent;

                if (data) {
                  history = this.props.history;
                  history.push("/edit/".concat(data.issueAdd.id));
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var showing = this.state.showing;
      var signedIn = this.props.user.signedIn;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
        disabled: !signedIn,
        onClick: this.showModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        placement: "left",
        delayShow: 1000,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
          id: "create-issue"
        }, "Create Issue")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        glyph: "plus"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
        keyboard: true,
        show: showing,
        onHide: this.hideModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Header, {
        closeButton: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Title, null, "Create Issue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
        name: "issueAdd"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, {
        name: "title",
        autoFocus: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, {
        name: "owner"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        type: "button",
        bsStyle: "primary",
        onClick: this.handleSubmit
      }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        bsStyle: "link",
        onClick: this.hideModal
      }, "Cancel")))));
    }
  }]);

  return IssueAddNavItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_2__.default)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.withRouter)(IssueAddNavItem)));

/***/ }),

/***/ "./src/IssueDetail.jsx":
/*!*****************************!*\
  !*** ./src/IssueDetail.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function IssueDetail(_ref) {
  var issue = _ref.issue;

  if (issue) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, issue.description));
  }

  return null;
}

/***/ }),

/***/ "./src/IssueEdit.jsx":
/*!***************************!*\
  !*** ./src/IssueEdit.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Panel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ControlLabel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _NumInput_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NumInput.jsx */ "./src/NumInput.jsx");
/* harmony import */ var _DateInput_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateInput.jsx */ "./src/DateInput.jsx");
/* harmony import */ var _TextInput_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextInput.jsx */ "./src/TextInput.jsx");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
/* harmony import */ var _UserContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserContext.js */ "./src/UserContext.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var IssueEdit = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueEdit, _React$Component);

  var _super = _createSuper(IssueEdit);

  function IssueEdit(props) {
    var _this;

    _classCallCheck(this, IssueEdit);

    _this = _super.call(this, props);
    var issue = _store_js__WEBPACK_IMPORTED_MODULE_6__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_6__.default.initialData.issue : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_6__.default.initialData;
    _this.state = {
      issue: issue,
      // <Object>
      invalidFields: {},
      // the fields of invalid user inputs
      showingValidation: false // validation message at the end of the form

    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.onValidityChange = _this.onValidityChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var issue = this.state.issue;

      if (issue == null) {
        this.loadData();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevId = prevProps.match.params.id;
      var id = this.props.match.params.id;

      if (prevId !== id) {
        this.loadData();
      }
    } // handles changes on the validity information of each of the input elements

  }, {
    key: "onValidityChange",
    value: function onValidityChange(e, valid) {
      var name = e.target.name;
      this.setState(function (prevState) {
        var invalidFields = _objectSpread(_objectSpread({}, prevState.invalidFields), {}, _defineProperty({}, name, !valid));

        if (valid) delete invalidFields[name];
        return {
          invalidFields: invalidFields
        };
      });
    } // update the state.issue using the values from the user inputs

  }, {
    key: "onChange",
    value: function onChange(e, naturalValue) {
      var _e$target = e.target,
          name = _e$target.name,
          textValue = _e$target.value; // if the input value with its true type is not passed, use the
      // one with ordinary unconverted string input value from event object.

      var value = naturalValue === undefined ? textValue : naturalValue;
      this.setState(function (prevState) {
        return {
          issue: _objectSpread(_objectSpread({}, prevState.issue), {}, _defineProperty({}, name, value))
        };
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var _this$state, issue, invalidFields, query, id, created, changes, _this$props, showError, showSuccess, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /**
                 * Submit the database with the new user input values in the form, by
                 * making a mutation request to the graphQL server.
                 * If there's any invalidFields left, terminate this method.
                 */
                e.preventDefault();
                this.showValidation();
                _this$state = this.state, issue = _this$state.issue, invalidFields = _this$state.invalidFields; // check validity of inputs before updating

                if (!(Object.keys(invalidFields).length !== 0)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                query = "mutation issueUpdate($id: Int!,\n                        $changes: IssueUpdateInputs!){\n                        issueUpdate(id: $id, changes: $changes){\n                            id title status owner\n                            effort created due description\n                        }\n                    }";
                id = issue.id, created = issue.created, changes = _objectWithoutProperties(issue, ["id", "created"]);
                _this$props = this.props, showError = _this$props.showError, showSuccess = _this$props.showSuccess;
                _context.next = 10;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__.default)(query, {
                  id: id,
                  changes: changes
                }, showError);

              case 10:
                data = _context.sent;

                if (data) {
                  this.setState({
                    issue: data.issueUpdate
                  });
                  showSuccess('Updated issue successfully');
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }() // load data from the graphql api server

  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this$props2, match, showError, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, match = _this$props2.match, showError = _this$props2.showError;
                _context2.next = 3;
                return IssueEdit.fetchData(match, null, showError);

              case 3:
                data = _context2.sent;
                this.setState({
                  issue: data ? data.issue : {},
                  invalidFields: {}
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "showValidation",
    value: function showValidation() {
      this.setState({
        showingValidation: true
      });
    }
  }, {
    key: "dismissValidation",
    value: function dismissValidation() {
      this.setState({
        showingValidation: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var issue = this.state.issue;
      var user = this.context;
      if (issue == null) return null; // ----- check if the "id" exists when
      // "prev" and next links are used at the bottom ------------

      var id = this.state.issue.id;
      var propsId = this.props.match.params.id;

      if (id == null) {
        if (propsId != null) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Issue with ID: ".concat(propsId, " not found."));
        }

        return null;
      } // --- create a validtion message based on the state of the component ----


      var _this$state2 = this.state,
          invalidFields = _this$state2.invalidFields,
          showingValidation = _this$state2.showingValidation;
      var validationMessage;

      if (Object.keys(invalidFields).length !== 0 && showingValidation) {
        validationMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
          bsStyle: "danger",
          onDismiss: this.dismissValidation
        }, "Please correct invalid fields before submitting");
      } // --------- ui presentation -----------------


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Title, null, "Editing issue: ".concat(id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, {
        horizontal: true,
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default,
        sm: 3
      }, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default.Static, null, issue.created.toDateString()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default,
        sm: 3
      }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
        componentClass: "select",
        name: "status",
        value: issue.status,
        onChange: this.onChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "New"
      }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Assigned"
      }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Fixed"
      }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Closed"
      }, "Closed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default,
        sm: 3
      }, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
        componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_5__.default,
        name: "owner",
        value: issue.owner,
        onChange: this.onChange,
        key: id
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default,
        sm: 3
      }, "Effort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
        componentClass: _NumInput_jsx__WEBPACK_IMPORTED_MODULE_3__.default,
        name: "effort",
        value: issue.effort,
        onChange: this.onChange,
        key: id
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, {
        validationState: invalidFields.due ? 'error' : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default,
        sm: 3
      }, "Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
        componentClass: _DateInput_jsx__WEBPACK_IMPORTED_MODULE_4__.default,
        onValidityChange: this.onValidityChange,
        name: "due",
        value: issue.due,
        onChange: this.onChange,
        key: id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default.Feedback, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default,
        sm: 3
      }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
        componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_5__.default,
        size: 50,
        name: "title",
        value: issue.title,
        onChange: this.onChange,
        key: id
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default,
        sm: 3
      }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
        componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_5__.default,
        tag: "textarea",
        rows: 4,
        cols: 50,
        name: "description",
        value: issue.description,
        onChange: this.onChange,
        key: id
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        smOffset: 3,
        sm: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default, {
        disabled: !user.signedIn,
        bsStyle: "primary",
        type: "submit"
      }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
        to: "/issues"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default, {
        bsStyle: "link"
      }, "Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
        smOffset: 3,
        sm: 9
      }, validationMessage)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
        to: "/edit/".concat(id - 1)
      }, "Prev"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
        to: "/edit/".concat(id + 1)
      }, "Next")));
    }
  }], [{
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(match, search, showError) {
        var query, id, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                /**
                 * Fetches an issue with a particular id from the graphQL api server
                 * Params - match: <Object> from react router
                 *          search: String from react router
                 *          showError: Func from ToastWrapper
                 */
                query = "query issue($id: Int!){\n            issue(id: $id){\n                id title status owner\n                effort created due description\n            }\n        }";
                id = match.params.id;
                _context3.next = 4;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__.default)(query, {
                  id: Number(id)
                }, showError);

              case 4:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function fetchData(_x2, _x3, _x4) {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }]);

  return IssueEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var IssueEditWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_7__.default)(IssueEdit);
IssueEditWithToast.fetchData = IssueEdit.fetchData;
IssueEditWithToast.contextType = _UserContext_js__WEBPACK_IMPORTED_MODULE_8__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueEditWithToast);

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ControlLabel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var IssueFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  var _super = _createSuper(IssueFilter);

  function IssueFilter(_ref) {
    var _this;

    var search = _ref.location.search;

    _classCallCheck(this, IssueFilter);

    _this = _super.call(this);
    var params = new URLSearchParams(search);
    _this.state = {
      status: params.get('status') || '',
      changed: false,
      effortMin: params.get('effortMin') || '',
      effortMax: params.get('effortMax') || ''
    };
    _this.onChangeStatus = _this.onChangeStatus.bind(_assertThisInitialized(_this));
    _this.onChangeEffortMin = _this.onChangeEffortMin.bind(_assertThisInitialized(_this));
    _this.onChangeEffortMax = _this.onChangeEffortMax.bind(_assertThisInitialized(_this));
    _this.applyFilter = _this.applyFilter.bind(_assertThisInitialized(_this));
    _this.showOriginalFilter = _this.showOriginalFilter.bind(_assertThisInitialized(_this));
    return _this;
  } // handles changes on status input form


  _createClass(IssueFilter, [{
    key: "onChangeStatus",
    value: function onChangeStatus(e) {
      this.setState({
        status: e.target.value,
        changed: true
      });
    } // handles changes on effortMin input form

  }, {
    key: "onChangeEffortMin",
    value: function onChangeEffortMin(e) {
      var effortString = e.target.value;

      if (effortString.match(/^\d*$/)) {
        this.setState({
          effortMin: effortString,
          changed: true
        });
      }
    } // handles changes on effortMax input form

  }, {
    key: "onChangeEffortMax",
    value: function onChangeEffortMax(e) {
      var effortString = e.target.value;

      if (effortString.match(/^\d*$/)) {
        this.setState({
          effortMax: effortString,
          changed: true
        });
      }
    } // resets the filter input form's state

  }, {
    key: "showOriginalFilter",
    value: function showOriginalFilter() {
      var search = this.props.location.search;
      var params = new URLSearchParams(search);
      this.setState({
        status: params.get('status') || '',
        effortMin: params.get('effortMin') || '',
        effortMax: params.get('effortMax') || '',
        changed: false
      });
    }
  }, {
    key: "applyFilter",
    value: function applyFilter() {
      var status = this.state.status;
      var _this$state = this.state,
          effortMin = _this$state.effortMin,
          effortMax = _this$state.effortMax;
      var params = new URLSearchParams();
      if (status) params.set('status', status);
      if (effortMin) params.set('effortMin', effortMin);
      if (effortMax) params.set('effortMax', effortMax); // progmatic navigation

      var _this$props = this.props,
          history = _this$props.history,
          urlBase = _this$props.urlBase;
      history.push({
        pathname: urlBase,
        search: params.toString() ? "?".concat(params.toString()) : ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          status = _this$state2.status,
          changed = _this$state2.changed;
      var _this$state3 = this.state,
          effortMin = _this$state3.effortMin,
          effortMax = _this$state3.effortMax;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        componentClass: "select",
        value: status,
        onChange: this.onChangeStatus
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: ""
      }, "(All issues)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "New"
      }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Assigned"
      }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Fixed"
      }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "Closed"
      }, "Closed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "Effort between:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        value: effortMin,
        onChange: this.onChangeEffortMin
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Addon, null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        value: effortMax,
        onChange: this.onChangeEffortMax
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
        bsStyle: "primary",
        type: "button",
        onClick: this.applyFilter
      }, "Apply"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
        bsStyle: "primary",
        type: "button",
        onClick: this.showOriginalFilter,
        disabled: !changed
      }, "Reset")))));
    }
  }]);

  return IssueFilter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.withRouter)(IssueFilter));

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Pagination.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Panel.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/IssueTable.jsx");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/IssueDetail.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










 // number of pagination links in each section

var SECTION_SIZE = 5; // ------- PageLink Component --------------

function PageLink(_ref) {
  var params = _ref.params,
      page = _ref.page,
      activePage = _ref.activePage,
      children = _ref.children;

  /**
   * It represents each pagination links
   * Props - params: Object instance from URLSearchParams
   *                 to create query parameter.
   *       - page: Int, the corresponding page number.
   *       - activePage: currently active page number from URL.
   */
  params.set('page', page); // disable the element when the page number is zero which is invalid.

  if (page === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
    disabled: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    isActive: function isActive() {
      return page === activePage;
    },
    to: {
      search: "?".concat(params.toString())
    }
  }, children);
} // -------- Issue List Component ------------------


var IssueList = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueList, _React$Component);

  var _super = _createSuper(IssueList);

  function IssueList(props) {
    var _this;

    _classCallCheck(this, IssueList);

    _this = _super.call(this, props);
    var initialData = _store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData || {
      issueList: {}
    };
    var _initialData$issueLis = initialData.issueList,
        issues = _initialData$issueLis.issues,
        pages = _initialData$issueLis.pages,
        selectedIssue = initialData.issue; // once  the property is destructed, it can be deleted in the global store

    delete _store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData;
    _this.state = {
      issues: issues,
      // Array<Object>
      pages: pages,
      // Int
      selectedIssue: selectedIssue // { [string]: any }

    };
    _this.closeIssue = _this.closeIssue.bind(_assertThisInitialized(_this));
    _this.deleteIssue = _this.deleteIssue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var issues = this.state.issues; // only fetch data if the component is navigated through
      // browser-rendering. In server-side rendering, no need to
      // load data since they're already pre-populated.

      if (issues == null) this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // fetch data if there is a change in the URL paramters
      // get the previous query string and route parameter "id"
      var prevSearch = prevProps.location.search,
          prevId = prevProps.match.params.id; // get the current query string and route parameter "id"

      var _this$props = this.props,
          search = _this$props.location.search,
          id = _this$props.match.params.id; // only load data if there's a difference

      if (prevSearch !== search || prevId !== id) {
        this.loadData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({});
    } // handler function for clicking on close issue btn in IssueRow

  }, {
    key: "closeIssue",
    value: function () {
      var _closeIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index) {
        var issues, query, showError, data, showSuccess;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /**
                 * Sends a close mutation request to the graphQL server.
                 * If the mutation is successful, show successful toast message
                 * and update the status of that particualar issue in state.issues.
                 * Params - index: Int (The index of the issue in state.issues array
                 *                      to be closed)
                 */
                issues = this.state.issues;
                query = "mutation issueClose($id: Int!){\n                        issueUpdate(id: $id, changes: {status: Closed}){\n                            id title status owner\n                            effort created due description\n                        }\n                   }";
                showError = this.props.showError;
                _context.next = 5;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__.default)(query, {
                  id: issues[index].id
                }, showError);

              case 5:
                data = _context.sent;

                if (data) {
                  this.setState(function (prevState) {
                    var newList = _toConsumableArray(prevState.issues);

                    newList[index] = data.issueUpdate;
                    return {
                      issues: newList
                    };
                  });
                  showSuccess = this.props.showSuccess;
                  showSuccess('Successfully closed the issue');
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function closeIssue(_x) {
        return _closeIssue.apply(this, arguments);
      }

      return closeIssue;
    }() // handler function for clicking UNDO in Toast

  }, {
    key: "restoreIssue",
    value: function () {
      var _restoreIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var query, _this$props2, showError, showSuccess, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                /**
                 * Sends a restore mutation request to the graphQL server.
                 * If the mutation is successful, show successful toast message
                 * and fetch the data again.
                 * Params - id: Int (The id of the issue to be restored)
                 */
                query = "mutation issueRestore($id: Int!) {\n      issueRestore(id: $id)\n    }";
                _this$props2 = this.props, showError = _this$props2.showError, showSuccess = _this$props2.showSuccess;
                _context2.next = 4;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__.default)(query, {
                  id: id
                }, showError);

              case 4:
                data = _context2.sent;

                if (data) {
                  showSuccess("Issue ".concat(id, " restored successfully."));
                  this.loadData();
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function restoreIssue(_x2) {
        return _restoreIssue.apply(this, arguments);
      }

      return restoreIssue;
    }() // handler func for clicking delete btn in IssueRow

  }, {
    key: "deleteIssue",
    value: function () {
      var _deleteIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(index) {
        var _this2 = this;

        var query, issues, _this$props3, _this$props3$location, pathname, search, history, id, showError, data, showSuccess, undoMessage;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                /**
                 * Sends a mutation delete request to the graphQL server.
                 * If the mutation is successful, remove the deleted issue obj
                 * from state.issues.
                 * Params - index: Int (The index of the issue to be deleted from
                 *                      the state.issues array)
                 */
                query = "mutation issueDelete($id: Int!){\n                        issueDelete(id: $id)\n                    }";
                issues = this.state.issues;
                _this$props3 = this.props, _this$props3$location = _this$props3.location, pathname = _this$props3$location.pathname, search = _this$props3$location.search, history = _this$props3.history; // destructuring the id field from issues[index]

                id = issues[index].id;
                showError = this.props.showError;
                _context3.next = 7;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__.default)(query, {
                  id: Number(id)
                }, showError);

              case 7:
                data = _context3.sent;

                // if the issue is successfully deleted in the database
                if (data && data.issueDelete) {
                  this.setState(function (prevState) {
                    var newList = _toConsumableArray(prevState.issues); // if the row is selected and the description is displayed,
                    // drop the "id" route parameter from the URL


                    if (pathname === "/issues/".concat(id)) {
                      history.push({
                        pathname: '/issues',
                        search: search
                      });
                    } // remove the deleted issue from the list in state.


                    newList.splice(index, 1);
                    return {
                      issues: newList
                    };
                  });
                  showSuccess = this.props.showSuccess; // create a success toast with UNDO button to restore
                  // the deleted issue.

                  undoMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Deleted issue ".concat(id, " successfully."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
                    bsStyle: "link",
                    onClick: function onClick() {
                      return _this2.restoreIssue(id);
                    }
                  }, "UNDO"));
                  showSuccess(undoMessage);
                } else {
                  this.loadData();
                }

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteIssue(_x3) {
        return _deleteIssue.apply(this, arguments);
      }

      return deleteIssue;
    }() // fetch data for browser-rendering

  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this$props4, search, match, showError, data;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                /**
                 * Fetches list of issues from the database via API call using
                 * the class's static method.
                 * Updates the state of the component.
                 */
                _this$props4 = this.props, search = _this$props4.location.search, match = _this$props4.match;
                showError = this.props.showError;
                _context4.next = 4;
                return IssueList.fetchData(match, search, showError);

              case 4:
                data = _context4.sent;

                if (data) {
                  this.setState({
                    issues: data.issueList.issues,
                    pages: data.issueList.pages,
                    selectedIssue: data.issue
                  });
                }

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var issues = this.state.issues;
      if (issues == null) return null; // -------- pagination logics and creating pagination links ----------

      var _this$state = this.state,
          selectedIssue = _this$state.selectedIssue,
          pages = _this$state.pages;
      var search = this.props.location.search;
      var params = new URLSearchParams(search);
      var page = parseInt(params.get('page'), 10); // if page is NaN, it signifies initial page load, where it should be
      // set to 1.

      if (Number.isNaN(page)) page = 1; // startPage calculated from page. endPage, prevSection and
      // nextSection calculated from startPage.

      var startPage = Math.floor((page - 1) / SECTION_SIZE) * SECTION_SIZE + 1;
      var endPage = startPage + SECTION_SIZE - 1;
      var prevSection = startPage === 1 ? 0 : startPage - SECTION_SIZE;
      var nextSection = endPage >= pages ? 0 : startPage + SECTION_SIZE;
      var items = []; // push each PageLink into items[] based on startPage and endPage

      for (var i = startPage; i <= Math.min(endPage, pages); i += 1) {
        params.set('page', i);
        items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageLink, {
          key: i,
          params: params,
          activePage: page,
          page: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Item, null, i)));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default.Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default.Title, {
        toggle: true
      }, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default.Body, {
        collapsible: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
        urlBase: "/issues"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
        issues: issues,
        closeIssue: this.closeIssue,
        deleteIssue: this.deleteIssue
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
        issue: selectedIssue
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageLink, {
        params: params,
        page: prevSection
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Item, null, '<')), items, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageLink, {
        params: params,
        page: nextSection
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Item, null, '>'))));
    }
  }], [{
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(match, search, showError) {
        var params, vars, id, idInt, effortMin, effortMax, page, query, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                /**
                 * Static method to fetch list of issues from the graphql server.
                 * This serves an issue list page.
                 * Params - match: <Object> given by react router
                 *        - search: <String> query paramter by react router
                 *        - showError: <Func> method from ToastWrapper compoent
                 */
                // ---- analyzing the URL using match and search props -----
                params = new URLSearchParams(search); // vars <Object> serves as filter for graphQL query

                vars = {
                  hasSelection: false,
                  selectedId: 0
                };
                id = match.params.id;
                idInt = parseInt(id, 10); // if "id" is found in router parameter, update the vars obj.

                if (!Number.isNaN(idInt)) {
                  vars.hasSelection = true;
                  vars.selectedId = idInt;
                } // analyze the query string and set it in the vars obj


                if (params.get('status')) vars.status = params.get('status');
                effortMin = parseInt(params.get('effortMin'), 10);
                if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
                effortMax = parseInt(params.get('effortMax'), 10);
                if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
                page = parseInt(params.get('page'), 10);
                if (Number.isNaN(page)) page = 1;
                vars.page = page; // ----- make an async graphQL query to the API server ------

                query = "query issueList(\n                     $status: StatusType,\n                     $effortMin: Int,\n                     $effortMax: Int,\n                     $hasSelection: Boolean!,\n                     $selectedId: Int!,\n                     $page: Int\n                     ){\n                      issueList(\n                        status: $status,\n                        effortMin: $effortMin,\n                        effortMax: $effortMax,\n                        page: $page\n                        ){\n                          issues {\n                            id title\n                            status owner\n                            created effort due\n                          }\n                          pages\n                         }\n                      issue(id: $selectedId) @include (if: $hasSelection){\n                        id description\n                      }\n                    }";
                _context5.next = 16;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__.default)(query, vars, showError);

              case 16:
                data = _context5.sent;
                return _context5.abrupt("return", data);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function fetchData(_x4, _x5, _x6) {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }]);

  return IssueList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var IssueListWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_8__.default)(IssueList);
IssueListWithToast.fetchData = IssueList.fetchData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueListWithToast);

/***/ }),

/***/ "./src/IssueReport.jsx":
/*!*****************************!*\
  !*** ./src/IssueReport.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Panel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Table.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var statuses = ['New', 'Assigned', 'Fixed', 'Closed'];

var IssueReport = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueReport, _React$Component);

  var _super = _createSuper(IssueReport);

  function IssueReport(props) {
    var _this;

    _classCallCheck(this, IssueReport);

    _this = _super.call(this, props);
    var stats = _store_js__WEBPACK_IMPORTED_MODULE_4__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_4__.default.initialData.issueCounts : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_4__.default.initialData;
    _this.state = {
      stats: stats
    };
    return _this;
  }

  _createClass(IssueReport, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var stats = this.state.stats;
      if (stats === null) this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevSearch = prevProps.location.search;
      var search = this.props.location.search;

      if (prevSearch !== search) {
        this.loadData();
      }
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var showError, _this$props, search, match, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                showError = this.props.showError;
                _this$props = this.props, search = _this$props.location.search, match = _this$props.match;
                _context.next = 4;
                return IssueReport.fetchData(match, search, showError);

              case 4:
                result = _context.sent;
                this.setState({
                  stats: result ? result.issueCounts : []
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var stats = this.state.stats;
      if (stats === null) return null;
      var headerColumns = statuses.map(function (status) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", {
          key: status
        }, status);
      });
      var statRows = stats.map(function (counts) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", {
          key: counts.owner
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, counts.owner), statuses.map(function (status) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
            key: (0,uuid__WEBPACK_IMPORTED_MODULE_6__.default)()
          }, counts[status] ? counts[status] : 0);
        }));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Title, {
        toggle: true
      }, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Body, {
        collapsible: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
        urlBase: "/report"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
        bordered: true,
        condensed: true,
        hover: true,
        responsive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null), headerColumns)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", null, statRows)));
    }
  }], [{
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(match, search, showError) {
        var params, vars, effortMin, effortMax, query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = new URLSearchParams(search);
                vars = {};
                if (params.get('status')) vars.status = params.get('status');
                effortMin = parseInt(params.get('effortMin'), 10);
                if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
                effortMax = parseInt(params.get('effortMax'), 10);
                if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
                query = "query issueCounts(\n                    $status: StatusType, \n                    $effortMin: Int, \n                    $effortMax: Int) {\n                      issueCounts(\n                        status: $status,\n                        effortMin: $effortMin,\n                        effortMax: $effortMax\n                      ) {\n                        owner New Assigned Fixed Closed\n                      }\n                    }";
                _context2.next = 10;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__.default)(query, vars, showError);

              case 10:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchData(_x, _x2, _x3) {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }]);

  return IssueReport;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var IssueReportWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_5__.default)(IssueReport);
IssueReportWithToast.fetchData = IssueReport.fetchData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueReportWithToast);

/***/ }),

/***/ "./src/IssueTable.jsx":
/*!****************************!*\
  !*** ./src/IssueTable.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Tooltip.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Glyphicon.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Table.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");



 // -------- Issue Row Component ---------------

var IssueRow = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(function (props) {
  /**
    * const IssueRow = withRouter((props) => {...});
    * Represents each row of issue in a IssueTable.
    * Props: issue: {[string]: any}, search: String
    *        closeIssue: Func(index), index: Int
    *        deleteIssue: Func(index)
    * Parent: IssueTable
    */
  var issue = props.issue,
      search = props.location.search,
      closeIssue = props.closeIssue,
      index = props.index,
      deleteIssue = props.deleteIssue; // tooltip elements to be used in OverLay

  var closeTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: "close-tooltip"
  }, "Close Issue");
  var deleteTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: "delete-tooltip"
  }, "Delete Issue");
  var editTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: "edit-tooltip"
  }, "Edit Issue"); // handles the event of click on close issue button in each row

  function onClose(e) {
    e.preventDefault();
    closeIssue(index);
  } // handles the event of click on delete issue button in each row


  function onDelete(e) {
    e.preventDefault();
    deleteIssue(index);
  }

  var tableRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.owner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.effort), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.due ? issue.due.toDateString() : ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, issue.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/edit/".concat(issue.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
    delayShow: 1000,
    overlay: editTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    bsSize: "xsmall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    glyph: "edit"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
    delayShow: 1000,
    overlay: closeTooltip,
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    bsSize: "xsmall",
    type: "button",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    glyph: "remove"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
    delayShow: 1000,
    overlay: deleteTooltip,
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    type: "button",
    bsSize: "xsmall",
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    glyph: "trash"
  })))));
  var selectedLocation = {
    pathname: "/issues/".concat(issue.id),
    search: search
  }; // each tableRow becomes a link to display description of each id

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: selectedLocation
  }, tableRow);
}); // --------- Issue Table Component -----------------

function IssueTable(_ref) {
  var issues = _ref.issues,
      closeIssue = _ref.closeIssue,
      deleteIssue = _ref.deleteIssue;

  /**
   * Displays a list of issues in a table.
   * Props: issues: Array<Objects>
   *        closeIssue: Func
   *        deleteIssue: Func
   */
  // map each issue object to IssueRow
  var issueRows = issues.map(function (issue, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IssueRow, {
      key: issue.id,
      issue: issue,
      deleteIssue: deleteIssue,
      closeIssue: closeIssue,
      index: index
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
    bordered: true,
    condensed: true,
    hover: true,
    responsive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Effort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Due Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, issueRows));
}

/***/ }),

/***/ "./src/NavBar.jsx":
/*!************************!*\
  !*** ./src/NavBar.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/NavDropdown.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Glyphicon.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/MenuItem.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var _IssueAddNavItem_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueAddNavItem.jsx */ "./src/IssueAddNavItem.jsx");
/* harmony import */ var _Search_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search.jsx */ "./src/Search.jsx");
/* harmony import */ var _SignInNavItem_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignInNavItem.jsx */ "./src/SignInNavItem.jsx");






function NavBar(_ref) {
  var user = _ref.user,
      onUserChange = _ref.onUserChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Brand, null, "Issue Tracker")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    exact: true,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/issues"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, null, "Issue List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, null, "Report"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
    sm: 4,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Search_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    pullRight: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IssueAddNavItem_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SignInNavItem_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
    user: user,
    onUserChange: onUserChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
    id: "user-dropdown",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      glyph: "option-vertical"
    }),
    noCaret: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, {
    href: "/about"
  }, "About"))));
}

/***/ }),

/***/ "./src/NotFound.jsx":
/*!**************************!*\
  !*** ./src/NotFound.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Page Not Found");
}

/***/ }),

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // from num to string

function format(num) {
  return num != null ? num.toString() : '';
} // from string to num


function unformat(str) {
  var val = parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}

var NumInput = /*#__PURE__*/function (_React$Component) {
  _inherits(NumInput, _React$Component);

  var _super = _createSuper(NumInput);

  function NumInput(props) {
    var _this;

    _classCallCheck(this, NumInput);

    _this = _super.call(this, props);
    _this.state = {
      value: format(props.value)
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumInput, [{
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value.match(/^\d*$/)) {
        this.setState({
          value: e.target.value
        });
      }
    } // handle when the input looses focus

  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var onChange = this.props.onChange;
      var value = this.state.value;
      onChange(e, unformat(value));
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
        type: "text"
      }, this.props, {
        value: value,
        onBlur: this.onBlur,
        onChange: this.onChange
      }));
    }
  }]);

  return NumInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Grid.js");
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contents.jsx */ "./src/Contents.jsx");
/* harmony import */ var _NavBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.jsx */ "./src/NavBar.jsx");
/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.jsx */ "./src/Footer.jsx");
/* harmony import */ var _UserContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserContext.js */ "./src/UserContext.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Page = /*#__PURE__*/function (_React$Component) {
  _inherits(Page, _React$Component);

  var _super = _createSuper(Page);

  function Page() {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this);
    _this.state = {
      user: {
        signedIn: false,
        username: ''
      }
    };
    _this.onUserChange = _this.onUserChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var apiEndpoint, response, body, result, signedIn, username;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
                _context.next = 3;
                return fetch("".concat(apiEndpoint, "/user"), {
                  method: 'POST'
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.text();

              case 6:
                body = _context.sent;
                result = JSON.parse(body);
                signedIn = result.signedIn;
                username = result.username ? result.username : '';
                this.setState({
                  user: {
                    signedIn: signedIn,
                    username: username
                  }
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "onUserChange",
    value: function onUserChange(user) {
      this.setState({
        user: user
      });
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.state.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavBar_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
        user: user,
        onUserChange: this.onUserChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UserContext_js__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {
        value: user
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/Search.jsx":
/*!************************!*\
  !*** ./src/Search.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.esm.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this, props);
    _this.loadOptions = _this.loadOptions.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  } // asynchronously load options from a remote server


  _createClass(Search, [{
    key: "loadOptions",
    value: function () {
      var _loadOptions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputValue, callback) {
        var query, showError, data, options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(inputValue.length < 3)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", []);

              case 2:
                query = "query issueList($search: String) {\n      issueList(search: $search) {\n        issues {\n          id title\n        }\n      }\n    }";
                showError = this.props.showError;
                _context.next = 6;
                return (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__.default)(query, {
                  search: inputValue
                }, showError);

              case 6:
                data = _context.sent;

                // returns a list of options<Object> array. {label: "", value: ""}
                options = function options() {
                  return data.issueList.issues.map(function (issue) {
                    return {
                      label: "#".concat(issue.id, ": ").concat(issue.title),
                      value: issue.id
                    };
                  });
                };

                callback(options());
                return _context.abrupt("return", undefined);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadOptions(_x, _x2) {
        return _loadOptions.apply(this, arguments);
      }

      return loadOptions;
    }() // handles when the AsyncSelect value is changed
    // (when one of the options is selected).

  }, {
    key: "handleChange",
    value: function handleChange(option) {
      var history = this.props.history;
      history.push({
        pathname: "/edit/".concat(option.value)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_1__.default, {
        instanceId: "search-select",
        value: "",
        placeholder: "Search for issues...",
        onChange: this.handleChange,
        loadOptions: this.loadOptions,
        components: {
          DropdownIndicator: null
        }
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)((0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_3__.default)(Search)));

/***/ }),

/***/ "./src/SignInNavItem.jsx":
/*!*******************************!*\
  !*** ./src/SignInNavItem.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/NavDropdown.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/MenuItem.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/ControlLabel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/HelpBlock.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SignInNavItem = /*#__PURE__*/function (_React$Component) {
  _inherits(SignInNavItem, _React$Component);

  var _super = _createSuper(SignInNavItem);

  function SignInNavItem(props) {
    var _this;

    _classCallCheck(this, SignInNavItem);

    _this = _super.call(this, props);
    _this.state = {
      pswd: '',
      showingModal: false,
      loginErrMsg: ''
    };
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_this));
    _this.hideModal = _this.hideModal.bind(_assertThisInitialized(_this));
    _this.signIn = _this.signIn.bind(_assertThisInitialized(_this));
    _this.signOut = _this.signOut.bind(_assertThisInitialized(_this));
    _this.validateUsername = _this.validateUsername.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SignInNavItem, [{
    key: "showModal",
    value: function showModal() {
      this.setState({
        showingModal: true
      });
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.setState({
        showingModal: false
      });
    }
  }, {
    key: "signIn",
    value: function () {
      var _signIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var pswd, _this$props, username, onUserChange, showSuccess, authEndpoint, response, body, credentials;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                pswd = this.state.pswd;
                _this$props = this.props, username = _this$props.user.username, onUserChange = _this$props.onUserChange;
                showSuccess = this.props.showSuccess;
                authEndpoint = window.ENV.UI_AUTH_ENDPOINT;
                _context.prev = 5;
                _context.next = 8;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(authEndpoint, "/signin"), {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify({
                    username: username,
                    pswd: pswd
                  })
                });

              case 8:
                response = _context.sent;
                _context.next = 11;
                return response.text();

              case 11:
                body = _context.sent;
                credentials = JSON.parse(body);
                onUserChange(_objectSpread({}, credentials));
                this.hideModal();
                showSuccess('Login Successful.');
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](5);
                this.setState({
                  loginErrMsg: 'Incorrect password!'
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 18]]);
      }));

      function signIn(_x) {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var onUserChange, authEndpoint;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onUserChange = this.props.onUserChange;
                authEndpoint = window.ENV.UI_AUTH_ENDPOINT;
                _context2.next = 4;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(authEndpoint, "/signout"), {
                  method: 'POST'
                });

              case 4:
                onUserChange({
                  username: '',
                  signedIn: false
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function signOut() {
        return _signOut.apply(this, arguments);
      }

      return signOut;
    }()
  }, {
    key: "validateUsername",
    value: function validateUsername() {
      var username = this.props.user.username;

      if (username) {
        var len = username.length;
        if (len > 3) return 'success';
        if (len > 0) return 'error';
      }

      return null;
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var onUserChange = this.props.onUserChange;

      if (e.target.name === 'username') {
        onUserChange({
          username: e.target.value,
          signedIn: false
        });
      } else {
        this.setState({
          pswd: e.target.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;
      var pswd = this.state.pswd;

      if (user.signedIn) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
          title: user.username,
          id: "user"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
          onClick: this.signOut
        }, "Sign out")));
      }

      var signInDisable = true;

      if (user.username && pswd) {
        if (user.username.length > 3) {
          signInDisable = false;
        }
      }

      var _this$state = this.state,
          showingModal = _this$state.showingModal,
          loginErrMsg = _this$state.loginErrMsg;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
        onClick: this.showModal
      }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        keyboard: true,
        show: showingModal,
        onHide: this.hideModal,
        bsSize: "sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
        closeButton: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, null, "Sign in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
        name: "signIn",
        onSubmit: this.signIn
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
        controlId: "formUsername",
        validationState: this.validateUsername()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
        type: "text",
        name: "username",
        value: user.username,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Feedback, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, null, "More than three characters.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
        controlId: "formPassword"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
        type: "password",
        name: "pswd",
        value: pswd,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Feedback, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, null, "Password: superman", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          color: '#f26b41'
        }
      }, loginErrMsg))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, {
        block: true,
        type: "submit",
        bsStyle: "primary",
        onClick: this.signIn,
        disabled: signInDisable
      }, "Sign In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, {
        bsStyle: "link",
        onClick: this.hideModal
      }, "Cancel"))));
    }
  }]);

  return SignInNavItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_2__.default)(SignInNavItem));

/***/ }),

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function format(text) {
  return text != null ? text : '';
}

function unformat(text) {
  return text.trim().length === 0 ? null : text;
}

var TextInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TextInput, _React$Component);

  var _super = _createSuper(TextInput);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _super.call(this, props);
    _this.state = {
      value: format(props.value)
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextInput, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var onChange = this.props.onChange;
      var value = this.state.value;
      onChange(e, unformat(value));
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;

      var _this$props = this.props,
          _this$props$tag = _this$props.tag,
          tag = _this$props$tag === void 0 ? 'input' : _this$props$tag,
          props = _objectWithoutProperties(_this$props, ["tag"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(tag, _objectSpread(_objectSpread({}, props), {}, {
        value: value,
        onBlur: this.onBlur,
        onChange: this.onChange
      }));
    }
  }]);

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/Toast.jsx":
/*!***********************!*\
  !*** ./src/Toast.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Collapse.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Toast = /*#__PURE__*/function (_React$Component) {
  _inherits(Toast, _React$Component);

  var _super = _createSuper(Toast);

  function Toast() {
    _classCallCheck(this, Toast);

    return _super.apply(this, arguments);
  }

  _createClass(Toast, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          showing = _this$props.showing,
          onDismiss = _this$props.onDismiss;

      if (showing) {
        this.dismissTimer = setTimeout(onDismiss, 3000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.dismissTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          showing = _this$props2.showing,
          bsStyle = _this$props2.bsStyle,
          onDismiss = _this$props2.onDismiss,
          children = _this$props2.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.default, {
        in: showing
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          position: 'fixed',
          bottom: 20,
          left: 20,
          zIndex: 10
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
        bsStyle: bsStyle,
        onDismiss: onDismiss
      }, children)));
    }
  }]);

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/UserContext.js":
/*!****************************!*\
  !*** ./src/UserContext.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  signedIn: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ graphQLFetch)
/* harmony export */ });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // JSON parser reviver function to parse date string as Date objects

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(_, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
    var variables,
        showError,
        apiEndpoint,
        response,
        body,
        result,
        error,
        details,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            showError = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;

            /**
             * Fetches list of issues from the server.
             * Displays errors based on the result.
             * Returns the fetched issue list.
             * Params - query: String, GraphQL query string,
             *          variables: <Object>, GraphqQL query variables
             *          showError: Func from Toast
             */
            // __isBrowser__ constant formed at Webpack bundling process
            // eslint-disable-next-line no-undef
            apiEndpoint =  true ? window.ENV.UI_API_ENDPOINT : 0;
            _context.prev = 3;
            _context.next = 6;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(apiEndpoint, {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.text();

          case 9:
            body = _context.sent;
            result = JSON.parse(body, jsonDateReviver);

            if (result.errors) {
              error = result.errors[0];

              if (error.extensions.code === 'BAD_USER_INPUT') {
                details = error.extensions.exception.errors.join('\n ');
                if (showError) showError("".concat(error.message, ":\n ").concat(details));
              } else if (showError) {
                showError("".concat(error.extensions.code, ": ").concat(error.message));
              }
            }

            return _context.abrupt("return", result.data);

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](3);
            // cathing the transport error
            if (showError) showError("Error in sending data to server: ".concat(_context.t0.message));
            return _context.abrupt("return", null);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 15]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");
/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About.jsx */ "./src/About.jsx");
/* harmony import */ var _NotFound_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound.jsx */ "./src/NotFound.jsx");





var routes = [{
  path: '/issues/:id?',
  component: _IssueList_jsx__WEBPACK_IMPORTED_MODULE_0__.default
}, {
  path: '/edit/:id',
  component: _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_2__.default
}, {
  path: '/report',
  component: _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_1__.default
}, {
  path: '/about',
  component: _About_jsx__WEBPACK_IMPORTED_MODULE_3__.default
}, {
  path: '*',
  component: _NotFound_jsx__WEBPACK_IMPORTED_MODULE_4__.default
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var store = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/withToast.jsx":
/*!***************************!*\
  !*** ./src/withToast.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function withToast(OriginalComponent) {
  /**
   * Wraps the OriginalComponent with a Toast.
   * Holds the required logic for the Toast component
   */
  return /*#__PURE__*/function (_React$Component) {
    _inherits(ToastWrapper, _React$Component);

    var _super = _createSuper(ToastWrapper);

    function ToastWrapper(props) {
      var _this;

      _classCallCheck(this, ToastWrapper);

      _this = _super.call(this, props);
      _this.state = {
        toastVisible: false,
        toastMessage: '',
        toastType: 'success'
      };
      _this.showError = _this.showError.bind(_assertThisInitialized(_this));
      _this.showSuccess = _this.showSuccess.bind(_assertThisInitialized(_this));
      _this.dismissToast = _this.dismissToast.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ToastWrapper, [{
      key: "showSuccess",
      value: function showSuccess(message) {
        this.setState({
          toastVisible: true,
          toastMessage: message,
          toastType: 'success'
        });
      }
    }, {
      key: "showError",
      value: function showError(message) {
        this.setState({
          toastVisible: true,
          toastMessage: message,
          toastType: 'danger'
        });
      }
    }, {
      key: "dismissToast",
      value: function dismissToast() {
        this.setState({
          toastVisible: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            toastType = _this$state.toastType,
            toastMessage = _this$state.toastMessage,
            toastVisible = _this$state.toastVisible;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OriginalComponent, _extends({
          showError: this.showError,
          showSuccess: this.showSuccess
        }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
          bsStyle: toastType,
          showing: toastVisible,
          onDismiss: this.dismissToast
        }, toastMessage));
      }
    }]);

    return ToastWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkissue_tracker_ui"] = self["webpackChunkissue_tracker_ui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./browser/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map