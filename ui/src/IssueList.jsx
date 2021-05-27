import React from 'react';

import 'url-search-params-polyfill';
import { Route } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueDetail from './IssueDetail.jsx';
import graphQLFetch from './graphQLFetch.js';
import Toast from './Toast.jsx';
import store from './store.js';

export default class IssueList extends React.Component {
  static async fetchData(_, search, showError) {
    const params = new URLSearchParams(search);
    const vars = {};
    if (params.get('status')) vars.status = params.get('status');

    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;

    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;

    const query = `query issueList(
                     $status: StatusType,
                     $effortMin: Int,
                     $effortMax: Int
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
                    }`;

    const data = await graphQLFetch(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const issues = store.initialData ? store.initialData.issues : null;
    delete store.initialData;
    this.state = {
      issues,
      toastVisible: false,
      toastMessage: '',
      toastType: 'info',
    };
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    const { issues } = this.state;
    if (issues == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    // to update state on url change for filtering
    const {
      location: { prevSearch },
    } = prevProps;

    const {
      location: { search },
    } = this.props;

    if (prevSearch !== search) {
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

    const data = await graphQLFetch(
      query,
      { id: issues[index].id },
      this.showError,
    );
    if (data) {
      this.setState((prevState) => {
        const newList = [...prevState.issues];
        newList[index] = data.issueUpdate;
        return { issues: newList };
      });
      this.showSuccess('Successfully closed the issue');
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

    const data = await graphQLFetch(query, { id: Number(id) }, this.showError);

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
      this.showSuccess(`Deleted issue ${id} successfully.`);
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
    } = this.props;

    const data = await IssueList.fetchData(null, search, this.showError);

    if (data) {
      this.setState({ issues: data.issueList });
    }
  }

  showSuccess(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'success',
    });
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'danger',
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  render() {
    const { issues } = this.state;
    if (issues == null) return null;

    const { match } = this.props;
    const { toastVisible, toastType, toastMessage } = this.state;

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
        <Route path={`${match.path}/:id`} component={IssueDetail} />
        <Toast
          showing={toastVisible}
          onDismiss={this.dismissToast}
          bsStyle={toastType}
        >
          {toastMessage}
        </Toast>
      </React.Fragment>
    );
  }
}
