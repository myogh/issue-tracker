import React from 'react';

import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import IssueDetail from './IssueDetail.jsx';
import graphQLFetch from './graphQLFetch.js';
// ----------- Issue List Component ----------------

export default class IssueList extends React.Component {
  /**
   * Top level parent component.
   */
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    // to update state on url change for filtering
    const { location: { prevSearch } } = prevProps;

    const { location: { search } } = this.props;

    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async createIssue(samIssue) {
    /**
     * Creates new issue object upon user input.
     * param: new issue object
     * Mutates the issue database on the server.
     * Calls loadData()
     */
    const issue = {};
    Object.assign(issue, samIssue);

    const query = `mutation issueAddOperation($issue: IssueInputs!) {
        issueAdd(issue: $issue) {
            id
          }
        }`;

    // data is the id on the newly added issue
    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  }

  async loadData() {
    /**
     * Fetches list of issues from the database via API call.
     * Updates the data state on the client side.
     */
    const { location: { search } } = this.props;

    const params = new URLSearchParams(search);
    const vars = {};
    if (params.get('status')) vars.status = params.get('status');

    const query = `query issueList($status: StatusType){
        issueList(status: $status) {
            id title status owner
            created effort due
            }
        }`;

    const data = await graphQLFetch(query, vars);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }

  render() {
    const { issues } = this.state;
    const { match } = this.props;

    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <hr />
        <IssueFilter />
        <hr />
        <IssueTable issues={issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
        <hr />
        <Route path={`${match.path}/:id`} component={IssueDetail} />
      </React.Fragment>
    );
  }
}
