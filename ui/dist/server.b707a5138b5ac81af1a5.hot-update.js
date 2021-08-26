"use strict";
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/IssueTable.jsx");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/IssueDetail.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");










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
    const query = `query issueList(
                     $status: StatusType,
                     $effortMin: Int,
                     $effortMax: Int,
                     $hasSelection: Boolean!,
                     $selectedId: Int!
                     ){
                      issueList(
                        status: $status,
                        effortMin: $effortMin,
                        effortMax: $effortMax
                        ){
                         id title
                         status owner
                         created effort due
                         }
                      issue(id: $selectedId) @include (if: $hasSelection){
                        id description
                      }
                    }`;
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__.default)(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const issues = _store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData.issues : null;
    const selectedIssue = _store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData.issue : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData;
    this.state = {
      issues,
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
        prevSearch
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
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__.default)(query, {
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
    const data = await (0,_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__.default)(query, {
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
      } = this.props;
      showSuccess(`Deleted issue ${id} successfully.`);
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
        issues: data.issueList,
        selectedIssue: data.issue
      });
    }
  }

  render() {
    const {
      issues,
      selectedIssue
    } = this.state;
    if (issues == null) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Panel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Panel.Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Panel.Title, {
      toggle: true
    }, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Panel.Body, {
      collapsible: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
      issues: issues,
      closeIssue: this.closeIssue,
      deleteIssue: this.deleteIssue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
      issue: selectedIssue
    }));
  }

}

const IssueListWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_8__.default)(IssueList);
IssueListWithToast.fetchData = IssueList.fetchData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueListWithToast);

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("163805403bec3278ca17")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=server.b707a5138b5ac81af1a5.hot-update.js.map