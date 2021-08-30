/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.js */ "./server/template.js");
/* harmony import */ var _src_Page_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Page.jsx */ "./src/Page.jsx");
/* harmony import */ var _src_routes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/routes.js */ "./src/routes.js");
/* harmony import */ var _src_store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store.js */ "./src/store.js");








async function render(req, res) {
  const activeRoute = _src_routes_js__WEBPACK_IMPORTED_MODULE_5__.default.find(route => (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.matchPath)(req.path, route));
  let initialData;

  if (activeRoute && activeRoute.component.fetchData) {
    const match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.matchPath)(req.path, activeRoute);
    const index = req.path.indexOf('?');
    const search = index !== -1 ? req.path.substr(index) : null;
    initialData = await activeRoute.component.fetchData(match, search);
  }

  const context = {};
  _src_store_js__WEBPACK_IMPORTED_MODULE_6__.default.initialData = initialData;
  const element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Page_jsx__WEBPACK_IMPORTED_MODULE_4__.default, null));
  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(element);

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.send((0,_template_js__WEBPACK_IMPORTED_MODULE_3__.default)(body, initialData));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_0__);

function template(body, data) {
  return `<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Pro MERN Stack</title>
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
table.table-hover tr {cursor: pointer;}
.panel-title a {display: block; width: 100%; cursor: pointer;}
.footer {position: absolute; bottom: 0px; width: 100%;}
</style>
</head>
<body>
<!-- Page generated from template. -->
<div id="contents">${body}</div>
<script>window.__INITIAL_DATA__ = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default()(data)}</script>
<script src="/env.js"></script>
<script src="/vendor.bundle.js"></script>
<script src="/app.bundle.js"></script>
</body>
</html>
`;
}

/***/ }),

/***/ "./src/About.jsx":
/*!***********************!*\
  !*** ./src/About.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");



class About extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static async fetchData() {
    const data = (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__.default)('query{about}');
    return data;
  }

  constructor(props) {
    super(props);
    const apiAbout = _store_js__WEBPACK_IMPORTED_MODULE_1__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_1__.default.initialData.about : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_1__.default.initialData;
    this.state = {
      apiAbout
    };
  }

  async componentDidMount() {
    const {
      apiAbout
    } = this.state;

    if (apiAbout == null) {
      const data = await About.fetchData();
      this.setState({
        apiAbout: data.about
      });
    }
  }

  render() {
    const {
      apiAbout
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Issue Tracker Version 0.9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, apiAbout));
  }

}

/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes.js */ "./src/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function Contents() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
    exact: true,
    from: "/",
    to: "/issues"
  }), _routes_js__WEBPACK_IMPORTED_MODULE_2__.default.map(attrs => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, attrs, {
    key: attrs.path
  }))));
}

/***/ }),

/***/ "./src/DateInput.jsx":
/*!***************************!*\
  !*** ./src/DateInput.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // from Date to 'yyyy-mm-dd'

function editFormat(date) {
  return date === null ? '' : date.toISOString().substr(0, 10);
} // from Date obj to 'Sat Feb 01 2021' str format


function displayFormat(date) {
  return date === null ? '' : date.toDateString();
} // for validation, from 'yyyy-mm-dd' to Date obj or null


function unformat(dateStr) {
  const val = new Date(dateStr);
  return Number.isNaN(val.getTime()) ? null : val;
}

class DateInput extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      value: editFormat(props.value),
      focus: false,
      valid: true
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.match(/^[\d-]*$/)) {
      this.setState({
        value: e.target.value
      });
    }
  } // user clicks the input box


  onFocus() {
    this.setState({
      focus: true
    });
  }

  onBlur(e) {
    const {
      value,
      valid: oldValid
    } = this.state;
    const {
      onValidityChange,
      onChange
    } = this.props;
    const dateValue = unformat(value);
    const valid = value === '' || dateValue != null;

    if (valid !== oldValid && onValidityChange) {
      onValidityChange(e, valid);
    }

    this.setState({
      focus: false,
      valid
    });
    if (valid) onChange(e, dateValue);
  }

  render() {
    const {
      value,
      focus,
      valid
    } = this.state;
    const {
      value: origValue,
      onValidityChange,
      ...props
    } = this.props;
    const inputVal = !valid || focus ? value : displayFormat(origValue);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({}, props, {
      value: inputVal,
      placeholder: focus ? 'yyyy-mm-dd' : null,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }));
  }

}

/***/ }),

/***/ "./src/IssueAddNavItem.jsx":
/*!*********************************!*\
  !*** ./src/IssueAddNavItem.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");






class IssueAddNavItem extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      showing: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal() {
    this.setState({
      showing: true
    });
  }

  hideModal() {
    this.setState({
      showing: false
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.hideModal();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)
    };
    const query = `mutation issueAdd($issue: IssueInputs!){
       issueAdd(issue: $issue){
        id
       }
    }`;
    const {
      showError
    } = this.props;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__.default)(query, {
      issue
    }, showError);

    if (data) {
      const {
        history
      } = this.props;
      history.push(`/edit/${data.issueAdd.id}`);
    }
  }

  render() {
    const {
      showing
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
      onClick: this.showModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.OverlayTrigger, {
      placement: "left",
      delayShow: 1000,
      overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        id: "create-issue"
      }, "Create Issue")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Glyphicon, {
      glyph: "plus"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      keyboard: true,
      show: showing,
      onHide: this.hideModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, null, "Create Issue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {
      name: "issueAdd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ControlLabel, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
      name: "title",
      autoFocus: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ControlLabel, null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
      name: "owner"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ButtonToolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "button",
      bsStyle: "primary",
      onClick: this.handleSubmit
    }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
      bsStyle: "link",
      onClick: this.hideModal
    }, "Cancel")))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_4__.default)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.withRouter)(IssueAddNavItem)));

/***/ }),

/***/ "./src/IssueDetail.jsx":
/*!*****************************!*\
  !*** ./src/IssueDetail.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function IssueDetail({
  issue
}) {
  if (issue) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, issue.description));
  }

  return null;
}

/***/ }),

/***/ "./src/IssueEdit.jsx":
/*!***************************!*\
  !*** ./src/IssueEdit.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _NumInput_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumInput.jsx */ "./src/NumInput.jsx");
/* harmony import */ var _DateInput_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateInput.jsx */ "./src/DateInput.jsx");
/* harmony import */ var _TextInput_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextInput.jsx */ "./src/TextInput.jsx");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");











class IssueEdit extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static async fetchData(match, _, showError) {
    const query = `query issue($id: Int!){
            issue(id: $id){
                id title status owner
                effort created due description
            }
        }`;
    const {
      params: {
        id
      }
    } = match;
    const result = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__.default)(query, {
      id: Number(id)
    }, showError);
    return result;
  }

  constructor(props) {
    super(props);
    const issue = _store_js__WEBPACK_IMPORTED_MODULE_8__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_8__.default.initialData.issue : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_8__.default.initialData;
    this.state = {
      issue,
      invalidFields: {},
      showingValidation: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
  }

  componentDidMount() {
    const {
      issue
    } = this.state;

    if (issue == null) {
      this.loadData();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: {
          id: prevId
        }
      }
    } = prevProps;
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;

    if (prevId !== id) {
      this.loadData();
    }
  }

  onValidityChange(e, valid) {
    const {
      name
    } = e.target;
    this.setState(prevState => {
      const invalidFields = { ...prevState.invalidFields,
        [name]: !valid
      };
      if (valid) delete invalidFields[name];
      return {
        invalidFields
      };
    });
  }

  onChange(e, naturalValue) {
    const {
      name,
      value: textValue
    } = e.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(prevState => ({
      issue: { ...prevState.issue,
        [name]: value
      }
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.showValidation();
    const {
      issue,
      invalidFields
    } = this.state; // check validity of inputs before updating

    if (Object.keys(invalidFields).length !== 0) return;
    const query = `mutation issueUpdate($id: Int!,
                        $changes: IssueUpdateInputs!){
                        issueUpdate(id: $id, changes: $changes){
                            id title status owner
                            effort created due description
                        }
                    }`;
    const {
      id,
      created,
      ...changes
    } = issue;
    const {
      showError,
      showSuccess
    } = this.props;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__.default)(query, {
      id,
      changes
    }, showError);

    if (data) {
      this.setState({
        issue: data.issueUpdate
      });
      showSuccess('Updated issue successfully');
    }
  }

  async loadData() {
    const {
      match,
      showError
    } = this.props;
    const data = await IssueEdit.fetchData(match, null, showError);
    this.setState({
      issue: data ? data.issue : {},
      invalidFields: {}
    });
  }

  showValidation() {
    this.setState({
      showingValidation: true
    });
  }

  dismissValidation() {
    this.setState({
      showingValidation: false
    });
  }

  render() {
    const {
      issue
    } = this.state;
    if (issue == null) return null;
    const {
      issue: {
        id
      }
    } = this.state;
    const {
      match: {
        params: {
          id: propsId
        }
      }
    } = this.props;

    if (id == null) {
      if (propsId != null) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, `Issue with ID: ${propsId} not found.`);
      }

      return null;
    }

    const {
      invalidFields,
      showingValidation
    } = this.state;
    let validationMessage;

    if (Object.keys(invalidFields).length !== 0 && showingValidation) {
      validationMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        bsStyle: "danger",
        onDismiss: this.dismissValidation
      }, "Please correct invalid fields before submitting");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel.Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel.Title, null, `Editing issue: ${id}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, {
      horizontal: true,
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ControlLabel,
      sm: 3
    }, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      sm: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl.Static, null, issue.created.toDateString()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ControlLabel,
      sm: 3
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      sm: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
      componentClass: "select",
      name: "status",
      value: issue.status,
      onChange: this.onChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "New"
    }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Assigned"
    }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Fixed"
    }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Closed"
    }, "Closed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ControlLabel,
      sm: 3
    }, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      sm: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
      componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_7__.default,
      name: "owner",
      value: issue.owner,
      onChange: this.onChange,
      key: id
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ControlLabel,
      sm: 3
    }, "Effort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      sm: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
      componentClass: _NumInput_jsx__WEBPACK_IMPORTED_MODULE_5__.default,
      name: "effort",
      value: issue.effort,
      onChange: this.onChange,
      key: id
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
      validationState: invalidFields.due ? 'error' : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ControlLabel,
      sm: 3
    }, "Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      sm: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
      componentClass: _DateInput_jsx__WEBPACK_IMPORTED_MODULE_6__.default,
      onValidityChange: this.onValidityChange,
      name: "due",
      value: issue.due,
      onChange: this.onChange,
      key: id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl.Feedback, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ControlLabel,
      sm: 3
    }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      sm: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
      componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_7__.default,
      size: 50,
      name: "title",
      value: issue.title,
      onChange: this.onChange,
      key: id
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ControlLabel,
      sm: 3
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      sm: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
      componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_7__.default,
      tag: "textarea",
      rows: 4,
      cols: 50,
      name: "description",
      value: issue.description,
      onChange: this.onChange,
      key: id
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      smOffset: 3,
      sm: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ButtonToolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      bsStyle: "primary",
      type: "submit"
    }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
      to: "/issues"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      bsStyle: "link"
    }, "Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
      smOffset: 3,
      sm: 9
    }, validationMessage)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/edit/${id - 1}`
    }, "Prev"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/edit/${id + 1}`
    }, "Next")));
  }

}

const IssueEditWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_9__.default)(IssueEdit);
IssueEditWithToast.fetchData = IssueEdit.fetchData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueEditWithToast);

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-search-params-polyfill */ "url-search-params-polyfill");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_3__);



 // eslint-disable-next-line react/prefer-stateless-function

class IssueFilter extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor({
    location: {
      search
    }
  }) {
    super();
    const params = new URLSearchParams(search);
    this.state = {
      status: params.get('status') || '',
      changed: false,
      effortMin: params.get('effortMin') || '',
      effortMax: params.get('effortMax') || ''
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
    this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.showOriginalFilter = this.showOriginalFilter.bind(this);
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
      changed: true
    });
  }

  onChangeEffortMin(e) {
    const effortString = e.target.value;

    if (effortString.match(/^\d*$/)) {
      this.setState({
        effortMin: effortString,
        changed: true
      });
    }
  }

  onChangeEffortMax(e) {
    const effortString = e.target.value;

    if (effortString.match(/^\d*$/)) {
      this.setState({
        effortMax: effortString,
        changed: true
      });
    }
  }

  showOriginalFilter() {
    const {
      location: {
        search
      }
    } = this.props;
    const params = new URLSearchParams(search);
    this.setState({
      status: params.get('status') || '',
      changed: false
    });
  }

  applyFilter() {
    const {
      status
    } = this.state;
    const {
      effortMin,
      effortMax
    } = this.state;
    const params = new URLSearchParams();
    if (status) params.set('status', status);
    if (effortMin) params.set('effortMin', effortMin);
    if (effortMax) params.set('effortMax', effortMax); // progmatic navigation

    const {
      history,
      urlBase
    } = this.props;
    history.push({
      pathname: urlBase,
      search: params.toString() ? `?${params.toString()}` : ''
    });
  }

  render() {
    const {
      status,
      changed
    } = this.state;
    const {
      effortMin,
      effortMax
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ControlLabel, null, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
      componentClass: "select",
      value: status,
      onChange: this.onChangeStatus
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: ""
    }, "(All issues)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "New"
    }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Assigned"
    }, "Assigned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Fixed"
    }, "Fixed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "Closed"
    }, "Closed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ControlLabel, null, "Effort between:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
      value: effortMin,
      onChange: this.onChangeEffortMin
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.InputGroup.Addon, null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
      value: effortMax,
      onChange: this.onChangeEffortMax
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ControlLabel, null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ButtonToolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      bsStyle: "primary",
      type: "button",
      onClick: this.applyFilter
    }, "Apply"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      bsStyle: "primary",
      type: "button",
      onClick: this.showOriginalFilter,
      disabled: !changed
    }, "Reset")))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(IssueFilter));

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-search-params-polyfill */ "url-search-params-polyfill");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/IssueTable.jsx");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/IssueDetail.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");










const SECTION_SIZE = 5;

function PageLink({
  params,
  page,
  activePage,
  children
}) {
  params.set('page', page);
  if (page === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, {
    disabled: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
    isActive: () => page === activePage,
    to: {
      search: `?${params.toString()}`
    }
  }, children);
}

class IssueList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static async fetchData(match, search, showError) {
    const params = new URLSearchParams(search);
    const vars = {
      hasSelection: false,
      selectedId: 0
    };
    const {
      params: {
        id
      }
    } = match;
    const idInt = parseInt(id, 10);

    if (!Number.isNaN(idInt)) {
      vars.hasSelection = true;
      vars.selectedId = idInt;
    }

    if (params.get('status')) vars.status = params.get('status');
    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
    let page = parseInt(params.get('page'), 10);
    if (Number.isNaN(page)) page = 1;
    vars.page = page;
    const query = `query issueList(
                     $status: StatusType,
                     $effortMin: Int,
                     $effortMax: Int,
                     $hasSelection: Boolean!,
                     $selectedId: Int!,
                     $page: Int
                     ){
                      issueList(
                        status: $status,
                        effortMin: $effortMin,
                        effortMax: $effortMax,
                        page: $page
                        ){
                          issues {
                            id title
                            status owner
                            created effort due
                          }
                          pages
                         }
                      issue(id: $selectedId) @include (if: $hasSelection){
                        id description
                      }
                    }`;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__.default)(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const initialData = _store_js__WEBPACK_IMPORTED_MODULE_8__.default.initialData || {
      issueList: {}
    };
    const {
      issueList: {
        issues,
        pages
      },
      issue: selectedIssue
    } = initialData;
    delete _store_js__WEBPACK_IMPORTED_MODULE_8__.default.initialData;
    this.state = {
      issues,
      pages,
      selectedIssue
    };
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
  }

  componentDidMount() {
    const {
      issues
    } = this.state;
    if (issues == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    // to update state on url change for filtering
    const {
      location: {
        search: prevSearch
      },
      match: {
        params: {
          id: prevId
        }
      }
    } = prevProps;
    const {
      location: {
        search
      },
      match: {
        params: {
          id
        }
      }
    } = this.props;

    if (prevSearch !== search || prevId !== id) {
      this.loadData();
    }
  }

  componentWillUnmount() {
    this.setState({});
  }

  async closeIssue(index) {
    const {
      issues
    } = this.state;
    const query = `mutation issueClose($id: Int!){
                        issueUpdate(id: $id, changes: {status: Closed}){
                            id title status owner
                            effort created due description
                        }
                   }`;
    const {
      showError
    } = this.props;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__.default)(query, {
      id: issues[index].id
    }, showError);

    if (data) {
      this.setState(prevState => {
        const newList = [...prevState.issues];
        newList[index] = data.issueUpdate;
        return {
          issues: newList
        };
      });
      const {
        showSuccess
      } = this.props;
      showSuccess('Successfully closed the issue');
    }
  }

  async restoreIssue(id) {
    const query = `mutation issueRestore($id: Int!) {
      issueRestore(id: $id)
    }`;
    const {
      showError,
      showSuccess
    } = this.props;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__.default)(query, {
      id
    }, showError);

    if (data) {
      showSuccess(`Issue ${id} restored successfully.`);
      this.loadData();
    }
  }

  async deleteIssue(index) {
    const query = `mutation issueDelete($id: Int!){
                        issueDelete(id: $id)
                    }`;
    const {
      issues
    } = this.state;
    const {
      location: {
        pathname,
        search
      },
      history
    } = this.props;
    const {
      id
    } = issues[index];
    const {
      showError
    } = this.props;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__.default)(query, {
      id: Number(id)
    }, showError);

    if (data && data.issueDelete) {
      this.setState(prevState => {
        const newList = [...prevState.issues]; // if in selection mode

        if (pathname === `/issues/${id}`) {
          history.push({
            pathname: '/issues',
            search
          });
        }

        newList.splice(index, 1);
        return {
          issues: newList
        };
      });
      const {
        showSuccess
      } = this.props; // show undo option upon issue delete success

      const undoMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, `Deleted issue ${id} successfully.`, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        bsStyle: "link",
        onClick: () => this.restoreIssue(id)
      }, "UNDO"));
      showSuccess(undoMessage);
    } else {
      this.loadData();
    }
  }

  async loadData() {
    /**
     * Fetches list of issues from the database via API call.
     * Updates the data state on the client side.
     */
    const {
      location: {
        search
      },
      match
    } = this.props;
    const {
      showError
    } = this.props;
    const data = await IssueList.fetchData(match, search, showError);

    if (data) {
      this.setState({
        issues: data.issueList.issues,
        pages: data.issueList.pages,
        selectedIssue: data.issue
      });
    }
  }

  render() {
    const {
      issues
    } = this.state;
    if (issues == null) return null; // -------- pagination logics ---------------

    const {
      selectedIssue,
      pages
    } = this.state;
    const {
      location: {
        search
      }
    } = this.props;
    const params = new URLSearchParams(search);
    let page = parseInt(params.get('page'), 10);
    if (Number.isNaN(page)) page = 1;
    const startPage = Math.floor((page - 1) / SECTION_SIZE) * SECTION_SIZE + 1;
    const endPage = startPage + SECTION_SIZE - 1;
    const prevSection = startPage === 1 ? 0 : startPage - SECTION_SIZE;
    const nextSection = endPage >= pages ? 0 : startPage + SECTION_SIZE;
    const items = [];

    for (let i = startPage; i <= Math.min(endPage, pages); i += 1) {
      params.set('page', i);
      items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageLink, {
        key: i,
        params: params,
        activePage: page,
        page: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Pagination.Item, null, i)));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Panel.Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Panel.Title, {
      toggle: true
    }, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Panel.Body, {
      collapsible: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
      urlBase: "/issues"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
      issues: issues,
      closeIssue: this.closeIssue,
      deleteIssue: this.deleteIssue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
      issue: selectedIssue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Pagination, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageLink, {
      params: params,
      page: prevSection
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Pagination.Item, null, '<')), items, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageLink, {
      params: params,
      page: nextSection
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Pagination.Item, null, '>'))));
  }

}

const IssueListWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_9__.default)(IssueList);
IssueListWithToast.fetchData = IssueList.fetchData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueListWithToast);

/***/ }),

/***/ "./src/IssueReport.jsx":
/*!*****************************!*\
  !*** ./src/IssueReport.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-search-params-polyfill */ "url-search-params-polyfill");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");








const statuses = ['New', 'Assigned', 'Fixed', 'Closed'];

class IssueReport extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  static async fetchData(match, search, showError) {
    const params = new URLSearchParams(search);
    const vars = {};
    if (params.get('status')) vars.status = params.get('status');
    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
    const query = `query issueCounts(
                    $status: StatusType, 
                    $effortMin: Int, 
                    $effortMax: Int) {
                      issueCounts(
                        status: $status,
                        effortMin: $effortMin,
                        effortMax: $effortMax
                      ) {
                        owner New Assigned Fixed Closed
                      }
                    }`;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__.default)(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const stats = _store_js__WEBPACK_IMPORTED_MODULE_6__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_6__.default.initialData.issueCounts : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_6__.default.initialData;
    this.state = {
      stats
    };
  }

  componentDidMount() {
    const {
      stats
    } = this.state;
    if (stats === null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      location: {
        search: prevSearch
      }
    } = prevProps;
    const {
      location: {
        search
      }
    } = this.props;

    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    const {
      showError
    } = this.props;
    const {
      location: {
        search
      },
      match
    } = this.props;
    const result = await IssueReport.fetchData(match, search, showError);
    this.setState({
      stats: result ? result.issueCounts : []
    });
  }

  render() {
    const {
      stats
    } = this.state;
    if (stats === null) return null;
    const headerColumns = statuses.map(status => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      key: status
    }, status));
    const statRows = stats.map(counts => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: counts.owner
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, counts.owner), statuses.map(status => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()
    }, counts[status] ? counts[status] : 0))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel.Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel.Title, {
      toggle: true
    }, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Panel.Body, {
      collapsible: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
      urlBase: "/report"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Table, {
      bordered: true,
      condensed: true,
      hover: true,
      responsive: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null), headerColumns)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, statRows)));
  }

}

const IssueReportWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_7__.default)(IssueReport);
IssueReportWithToast.fetchData = IssueReport.fetchData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueReportWithToast);

/***/ }),

/***/ "./src/IssueTable.jsx":
/*!****************************!*\
  !*** ./src/IssueTable.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IssueTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);



 // -------- Issue Row Component ---------------

const IssueRow = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)(({
  issue,
  location: {
    search
  },
  closeIssue,
  index,
  deleteIssue
}) => {
  /**
   * Represents each row of issue in a IssueTable.
   * Props: issue from Table, and location from withRouter
   */
  const selectLocation = {
    pathname: `/issues/${issue.id}`,
    search
  };
  const closeTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    id: "close-tooltip"
  }, "Close Issue");
  const deleteTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    id: "delete-tooltip"
  }, "Delete Issue");
  const editTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    id: "edit-tooltip"
  }, "Edit Issue");

  function onClose(e) {
    e.preventDefault();
    closeIssue(index);
  }

  function onDelete(e) {
    e.preventDefault();
    deleteIssue(index);
  }

  const tableRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.owner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.created.toDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.effort), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.due ? issue.due.toDateString() : ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, issue.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    to: `/edit/${issue.id}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    delayShow: 1000,
    overlay: editTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
    bsSize: "xsmall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Glyphicon, {
    glyph: "edit"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    delayShow: 1000,
    overlay: closeTooltip,
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
    bsSize: "xsmall",
    type: "button",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Glyphicon, {
    glyph: "remove"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.OverlayTrigger, {
    delayShow: 1000,
    overlay: deleteTooltip,
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "button",
    bsSize: "xsmall",
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Glyphicon, {
    glyph: "trash"
  })))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    to: selectLocation
  }, tableRow);
}); // --------- Issue Table Component -----------------

function IssueTable({
  issues,
  closeIssue,
  deleteIssue
}) {
  /**
   * Displays a list of issues in a table.
   * Props: list of issue objects.
   */
  const issueRows = issues.map((issue, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IssueRow, {
    key: issue.id,
    issue: issue,
    deleteIssue: deleteIssue,
    closeIssue: closeIssue,
    index: index
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Table, {
    bordered: true,
    condensed: true,
    hover: true,
    responsive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Effort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Due Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, issueRows));
}

/***/ }),

/***/ "./src/NotFound.jsx":
/*!**************************!*\
  !*** ./src/NotFound.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Page Not Found");
}

/***/ }),

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // from num to string

function format(num) {
  return num != null ? num.toString() : '';
} // from string to num


function unformat(str) {
  const val = parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}

class NumInput extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      value: format(props.value)
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({
        value: e.target.value
      });
    }
  } // handle when the input looses focus


  onBlur(e) {
    const {
      onChange
    } = this.props;
    const {
      value
    } = this.state;
    onChange(e, unformat(value));
  }

  render() {
    const {
      value
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
      type: "text"
    }, this.props, {
      value: value,
      onBlur: this.onBlur,
      onChange: this.onChange
    }));
  }

}

/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contents.jsx */ "./src/Contents.jsx");
/* harmony import */ var _IssueAddNavItem_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueAddNavItem.jsx */ "./src/IssueAddNavItem.jsx");
/* harmony import */ var _Search_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search.jsx */ "./src/Search.jsx");

 // import { LinkContainer } from 'react-router-bootstrap';





function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar.Brand, null, "Issue Tracker")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, {
    href: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, {
    href: "/issues"
  }, "Issue List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, {
    href: "/report"
  }, "Report")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 4,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Search_jsx__WEBPACK_IMPORTED_MODULE_4__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav, {
    pullRight: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueAddNavItem_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavDropdown, {
    id: "user-dropdown",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Glyphicon, {
      glyph: "option-vertical"
    }),
    noCaret: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    href: "/about"
  }, "About"))));
}

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-center"
  }, "Full source code available at this", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/aungmcs/issue-tracker"
  }, "GitHub repository")));
}

function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null));
}

/***/ }),

/***/ "./src/Search.jsx":
/*!************************!*\
  !*** ./src/Search.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/async */ "react-select/async");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select_async__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");






class Search extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.loadOptions = this.loadOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async loadOptions(inputValue, callback) {
    if (inputValue.length < 3) return [];
    const query = `query issueList($search: String) {
      issueList(search: $search) {
        issues {
          id title
        }
      }
    }`;
    const {
      showError
    } = this.props;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__.default)(query, {
      search: inputValue
    }, showError);

    const options = () => data.issueList.issues.map(issue => ({
      label: `#${issue.id}: ${issue.title}`,
      value: issue.id
    }));

    callback(options());
    return undefined;
  }

  handleChange(option) {
    const {
      history
    } = this.props;
    history.push({
      pathname: `/edit/${option.value}`
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_select_async__WEBPACK_IMPORTED_MODULE_2___default()), {
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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.withRouter)((0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_4__.default)(Search)));

/***/ }),

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function format(text) {
  return text != null ? text : '';
}

function unformat(text) {
  return text.trim().length === 0 ? null : text;
}

class TextInput extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      value: format(props.value)
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onBlur(e) {
    const {
      onChange
    } = this.props;
    const {
      value
    } = this.state;
    onChange(e, unformat(value));
  }

  render() {
    const {
      value
    } = this.state;
    const {
      tag = 'input',
      ...props
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(tag, { ...props,
      value,
      onBlur: this.onBlur,
      onChange: this.onChange
    });
  }

}

/***/ }),

/***/ "./src/Toast.jsx":
/*!***********************!*\
  !*** ./src/Toast.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


class Toast extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  componentDidUpdate() {
    const {
      showing,
      onDismiss
    } = this.props;

    if (showing) {
      this.dismissTimer = setTimeout(onDismiss, 3000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }

  render() {
    const {
      showing,
      bsStyle,
      onDismiss,
      children
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
      in: showing
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        position: 'fixed',
        bottom: 20,
        left: 20,
        zIndex: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      bsStyle: bsStyle,
      onDismiss: onDismiss
    }, children)));
  }

}

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ graphQLFetch)
/* harmony export */ });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(_, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

async function graphQLFetch(query, variables = {}, showError = null) {
  /**
   * Params: query string, variables if to mutate data in server.
   * Fetches list of issue from the server.
   * Displays errors based on the result.
   * Returns the fetched issue list.
   */
  // eslint-disable-next-line no-undef
  const apiEndpoint =  false ? 0 : process.env.UI_API_ENDPOINT;

  try {
    const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    }); // to handle the Date, the response is parsed as json text
    // rather than a json object, here body is a string of json data
    // JSON.parse(JsonString, ...)

    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];

      if (error.extensions.code === 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        if (showError) showError(`${error.message}:\n ${details}`);
      } else if (showError) {
        showError(`${error.extensions.code}: ${error.message}`);
      }
    }

    return result.data;
  } catch (e) {
    // cathing the transport error
    if (showError) showError(`Error in sending data to server: ${e.message}`);
    return null;
  }
}

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");
/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About.jsx */ "./src/About.jsx");
/* harmony import */ var _NotFound_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound.jsx */ "./src/NotFound.jsx");





const routes = [{
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const store = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/withToast.jsx":
/*!***************************!*\
  !*** ./src/withToast.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function withToast(OriginalComponent) {
  return class ToastWrapper extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor(props) {
      super(props);
      this.state = {
        toastVisible: false,
        toastMessage: '',
        toastType: 'success'
      };
      this.showError = this.showError.bind(this);
      this.showSuccess = this.showSuccess.bind(this);
      this.dismissToast = this.dismissToast.bind(this);
    }

    showSuccess(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: 'success'
      });
    }

    showError(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: 'danger'
      });
    }

    dismissToast() {
      this.setState({
        toastVisible: false
      });
    }

    render() {
      const {
        toastType,
        toastMessage,
        toastVisible
      } = this.state;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OriginalComponent, _extends({
        showError: this.showError,
        showSuccess: this.showSuccess
      }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
        bsStyle: toastType,
        showing: toastVisible,
        onDismiss: this.dismissToast
      }, toastMessage));
    }

  };
}

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");

const webpack = __webpack_require__(/*! webpack */ "webpack");

const browserConfig = {
  mode: 'development',
  entry: {
    app: ['./browser/App.jsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              ie: '11',
              edge: '15',
              safari: '10',
              firefox: '50',
              chrome: '49'
            }
          }], '@babel/preset-react']
        }
      }
    }]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  },
  plugins: [new webpack.DefinePlugin({
    __isBrowser__: 'true'
  })],
  devtool: 'source-map'
};
const serverConfig = {
  mode: 'development',
  entry: {
    server: ['./server/uiserver.js']
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              node: '14'
            }
          }], '@babel/preset-react']
        }
      }
    }]
  },
  plugins: [new webpack.DefinePlugin({
    __isBrowser__: 'false'
  })],
  devtool: 'source-map'
};
module.exports = [browserConfig, serverConfig];

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-bootstrap":
/*!*****************************************!*\
  !*** external "react-router-bootstrap" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-bootstrap");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-select/async":
/*!*************************************!*\
  !*** external "react-select/async" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-select/async");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");

/***/ }),

/***/ "url-search-params-polyfill":
/*!*********************************************!*\
  !*** external "url-search-params-polyfill" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("url-search-params-polyfill");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-node-externals");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./server/uiserver.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _render_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");




dotenv__WEBPACK_IMPORTED_MODULE_0___default().config();
const app = express__WEBPACK_IMPORTED_MODULE_1___default()();

if (!process.env.UI_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = 'http://localhost:3000/graphql';
}

if (!process.env.UI_SERVER_API_ENDPOINT) {
  process.env.UI_SERVER_API_ENDPOINT = process.env.UI_API_ENDPOINT;
}

const port = process.env.UI_SERVER_PORT || 8000;
const enableHMR = process.env.ENABLE_HMR === 'true';

if (enableHMR && "development" !== 'production') {
  console.log('Adding dev middleware, enabling HMR');
  /* eslint "global-require": "off" */

  /* eslint "import/no-extraneous-dependencies": "off" */

  const webpack = __webpack_require__(/*! webpack */ "webpack");

  const devMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");

  const hotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");

  const config = __webpack_require__(/*! ../webpack.config.js */ "./webpack.config.js")[0];

  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express__WEBPACK_IMPORTED_MODULE_1___default().static('public'));
app.get('/env.js', (_, res) => {
  const env = {
    UI_API_ENDPOINT: process.env.UI_API_ENDPOINT
  };
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});
app.get('*', (req, res, next) => {
  (0,_render_jsx__WEBPACK_IMPORTED_MODULE_3__.default)(req, res, next);
});
app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});

if (false) {}
})();

/******/ })()
;
//# sourceMappingURL=server.js.map