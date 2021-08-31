import React from 'react';
import 'url-search-params-polyfill';
import { Panel, Pagination, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueDetail from './IssueDetail.jsx';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';
import withToast from './withToast.jsx';

// number of pagination links in each section
const SECTION_SIZE = 5;

// ------- PageLink Component --------------

function PageLink({
  params, page, activePage, children,
}) {
  /**
   * It represents each pagination links
   * Props - params: Object instance from URLSearchParams
   *                 to create query parameter.
   *       - page: Int, the corresponding page number.
   *       - activePage: currently active page number from URL.
   */
  params.set('page', page);

  // disable the element when the page number is zero which is invalid.
  if (page === 0) return React.cloneElement(children, { disabled: true });

  return (
    <LinkContainer
      isActive={() => page === activePage}
      to={{ search: `?${params.toString()}` }}
    >
      {children}
    </LinkContainer>
  );
}

// -------- Issue List Component ------------------

class IssueList extends React.Component {
  static async fetchData(match, search, showError) {
    /**
     * Static method to fetch list of issues from the graphql server.
     * This serves an issue list page.
     * Params - match: <Object> given by react router
     *        - search: <String> query paramter by react router
     *        - showError: <Func> method from ToastWrapper compoent
     */

    // ---- analyzing the URL using match and search props -----

    const params = new URLSearchParams(search);

    // vars <Object> serves as filter for graphQL query
    const vars = { hasSelection: false, selectedId: 0 };

    const { params: { id } } = match;
    const idInt = parseInt(id, 10);

    // if "id" is found in router parameter, update the vars obj.
    if (!Number.isNaN(idInt)) {
      vars.hasSelection = true;
      vars.selectedId = idInt;
    }

    // analyze the query string and set it in the vars obj

    if (params.get('status')) vars.status = params.get('status');

    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;

    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;

    let page = parseInt(params.get('page'), 10);
    if (Number.isNaN(page)) page = 1;
    vars.page = page;

    // ----- make an async graphQL query to the API server ------

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

    const data = await graphQLFetch(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const initialData = store.initialData || { issueList: {} };
    const { issueList: { issues, pages }, issue: selectedIssue } = initialData;

    // once  the property is destructed, it can be deleted in the global store
    delete store.initialData;

    this.state = {
      issues, // Array<Object>
      pages, // Int
      selectedIssue, // { [string]: any }
    };

    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
  }

  componentDidMount() {
    const { issues } = this.state;

    // only fetch data if the component is navigated through
    // browser-rendering. In server-side rendering, no need to
    // load data since they're already pre-populated.
    if (issues == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    // fetch data if there is a change in the URL paramters

    // get the previous query string and route parameter "id"
    const {
      location: { search: prevSearch },
      match: {
        params: { id: prevId },
      },
    } = prevProps;

    // get the current query string and route parameter "id"
    const {
      location: { search },
      match: {
        params: { id },
      },
    } = this.props;

    // only load data if there's a difference
    if (prevSearch !== search || prevId !== id) {
      this.loadData();
    }
  }

  componentWillUnmount() {
    this.setState({});
  }

  // handler function for clicking on close issue btn in IssueRow
  async closeIssue(index) {
    /**
     * Sends a close mutation request to the graphQL server.
     * If the mutation is successful, show successful toast message
     * and update the status of that particualar issue in state.issues.
     * Params - index: Int (The index of the issue in state.issues array
     *                      to be closed)
     */
    const { issues } = this.state;
    const query = `mutation issueClose($id: Int!){
                        issueUpdate(id: $id, changes: {status: Closed}){
                            id title status owner
                            effort created due description
                        }
                   }`;

    const { showError } = this.props;
    const data = await graphQLFetch(query, { id: issues[index].id }, showError);

    if (data) {
      this.setState((prevState) => {
        const newList = [...prevState.issues];
        newList[index] = data.issueUpdate;
        return { issues: newList };
      });

      const { showSuccess } = this.props;
      showSuccess('Successfully closed the issue');
    }
  }

  // handler function for clicking UNDO in Toast
  async restoreIssue(id) {
    /**
     * Sends a restore mutation request to the graphQL server.
     * If the mutation is successful, show successful toast message
     * and fetch the data again.
     * Params - id: Int (The id of the issue to be restored)
     */
    const query = `mutation issueRestore($id: Int!) {
      issueRestore(id: $id)
    }`;

    const { showError, showSuccess } = this.props;

    const data = await graphQLFetch(query, { id }, showError);
    if (data) {
      showSuccess(`Issue ${id} restored successfully.`);
      this.loadData();
    }
  }

  // handler func for clicking delete btn in IssueRow
  async deleteIssue(index) {
    /**
     * Sends a mutation delete request to the graphQL server.
     * If the mutation is successful, remove the deleted issue obj
     * from state.issues.
     * Params - index: Int (The index of the issue to be deleted from
     *                      the state.issues array)
     */
    const query = `mutation issueDelete($id: Int!){
                        issueDelete(id: $id)
                    }`;

    const { issues } = this.state;

    const {
      location: { pathname, search },
      history,
    } = this.props;

    // destructuring the id field from issues[index]
    const { id } = issues[index];
    const { showError } = this.props;
    const data = await graphQLFetch(query, { id: Number(id) }, showError);

    // if the issue is successfully deleted in the database
    if (data && data.issueDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.issues];

        // if the row is selected and the description is displayed,
        // drop the "id" route parameter from the URL
        if (pathname === `/issues/${id}`) {
          history.push({ pathname: '/issues', search });
        }

        // remove the deleted issue from the list in state.
        newList.splice(index, 1);
        return { issues: newList };
      });

      const { showSuccess } = this.props;

      // create a success toast with UNDO button to restore
      // the deleted issue.
      const undoMessage = (
        <span>
          {`Deleted issue ${id} successfully.`}
          <Button bsStyle="link" onClick={() => this.restoreIssue(id)}>
            UNDO
          </Button>
        </span>
      );
      showSuccess(undoMessage);
    } else {
      this.loadData();
    }
  }

  // fetch data for browser-rendering
  async loadData() {
    /**
     * Fetches list of issues from the database via API call using
     * the class's static method.
     * Updates the state of the component.
     */
    const {
      location: { search },
      match,
    } = this.props;

    const { showError } = this.props;
    const data = await IssueList.fetchData(match, search, showError);

    if (data) {
      this.setState({
        issues: data.issueList.issues,
        pages: data.issueList.pages,
        selectedIssue: data.issue,
      });
    }
  }

  render() {
    const { issues } = this.state;
    if (issues == null) return null;

    // -------- pagination logics and creating pagination links ----------

    const { selectedIssue, pages } = this.state;
    const { location: { search } } = this.props;

    const params = new URLSearchParams(search);
    let page = parseInt(params.get('page'), 10);

    // if page is NaN, it signifies initial page load, where it should be
    // set to 1.
    if (Number.isNaN(page)) page = 1;

    // startPage calculated from page. endPage, prevSection and
    // nextSection calculated from startPage.
    const startPage = Math.floor((page - 1) / SECTION_SIZE) * SECTION_SIZE + 1;
    const endPage = startPage + SECTION_SIZE - 1;
    const prevSection = startPage === 1 ? 0 : startPage - SECTION_SIZE;
    const nextSection = endPage >= pages ? 0 : startPage + SECTION_SIZE;

    const items = [];
    // push each PageLink into items[] based on startPage and endPage
    for (let i = startPage; i <= Math.min(endPage, pages); i += 1) {
      params.set('page', i);
      items.push((
        <PageLink key={i} params={params} activePage={page} page={i}>
          <Pagination.Item>{i}</Pagination.Item>
        </PageLink>
      ));
    }

    return (
      <React.Fragment>
        {/* Filter panel */}
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>Filter</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <IssueFilter urlBase="/issues" />
          </Panel.Body>
        </Panel>
        <hr />
        {/* table of issue list */}
        <IssueTable
          issues={issues}
          closeIssue={this.closeIssue}
          deleteIssue={this.deleteIssue}
        />
        {/* issue detail */}
        <IssueDetail issue={selectedIssue} />
        {/* pagination links */}
        <Pagination>
          <PageLink params={params} page={prevSection}>
            <Pagination.Item>{'<'}</Pagination.Item>
          </PageLink>
          {items}
          <PageLink params={params} page={nextSection}>
            <Pagination.Item>{'>'}</Pagination.Item>
          </PageLink>
        </Pagination>
      </React.Fragment>
    );
  }
}

const IssueListWithToast = withToast(IssueList);
IssueListWithToast.fetchData = IssueList.fetchData;

export default IssueListWithToast;
