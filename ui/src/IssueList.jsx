import React from 'react';

import 'url-search-params-polyfill';
import { Panel } from 'react-bootstrap';
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueDetail from './IssueDetail.jsx';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';
import withToast from './withToast.jsx';

class IssueList extends React.Component {
  static async fetchData(match, search, showError) {
    const params = new URLSearchParams(search);
    const vars = { hasSelection: false, selectedId: 0 };

    const {
      params: { id },
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

    const data = await graphQLFetch(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const issues = store.initialData ? store.initialData.issues : null;
    const selectedIssue = store.initialData ? store.initialData.issue : null;
    delete store.initialData;
    this.state = {
      issues,
      selectedIssue,
    };
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
  }

  componentDidMount() {
    const { issues } = this.state;
    if (issues == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    // to update state on url change for filtering
    const {
      location: { prevSearch },
      match: {
        params: { id: prevId },
      },
    } = prevProps;

    const {
      location: { search },
      match: {
        params: { id },
      },
    } = this.props;

    if (prevSearch !== search || prevId !== id) {
      this.loadData();
    }
  }

  componentWillUnmount() {
    this.setState({});
  }

  async closeIssue(index) {
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

  async deleteIssue(index) {
    const query = `mutation issueDelete($id: Int!){
                        issueDelete(id: $id)
                    }`;

    const { issues } = this.state;

    const {
      location: { pathname, search },
      history,
    } = this.props;

    const { id } = issues[index];

    const { showError } = this.props;
    const data = await graphQLFetch(query, { id: Number(id) }, showError);

    if (data && data.issueDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.issues];
        // if in selection mode
        if (pathname === `/issues/${id}`) {
          history.push({ pathname: '/issues', search });
        }
        newList.splice(index, 1);
        return { issues: newList };
      });

      const { showSuccess } = this.props;
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
      location: { search },
      match,
    } = this.props;

    const { showError } = this.props;
    const data = await IssueList.fetchData(match, search, showError);

    if (data) {
      this.setState({ issues: data.issueList, selectedIssue: data.issue });
    }
  }

  render() {
    const { issues, selectedIssue } = this.state;
    if (issues == null) return null;

    return (
      <React.Fragment>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>Filter</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <IssueFilter />
          </Panel.Body>
        </Panel>
        <hr />
        <IssueTable
          issues={issues}
          closeIssue={this.closeIssue}
          deleteIssue={this.deleteIssue}
        />
        <IssueDetail issue={selectedIssue} />
      </React.Fragment>
    );
  }
}

const IssueListWithToast = withToast(IssueList);
IssueListWithToast.fetchData = IssueList.fetchData;

export default IssueListWithToast;
