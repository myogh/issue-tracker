import React from 'react';

import 'url-search-params-polyfill';
import { Route } from 'react-router-dom';
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import IssueDetail from './IssueDetail.jsx';
import graphQLFetch from './graphQLFetch.js';

export default class IssueList extends React.Component {
  /**
   * Top level parent component.
   */
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
    this.closeIssue = this.closeIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
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

  async closeIssue(index) {
    const { issues } = this.state;
    const query = `mutation issueClose($id: Int!){
                        issueUpdate(id: $id, changes: {status: Closed}){
                            id title status owner
                            effort created due description
                        }
                   }`;

    const data = await graphQLFetch(query, { id: issues[index].id });
    if (data) {
      this.setState((prevState) => {
        const newList = [...prevState.issues];
        newList[index] = data.issueUpdate;
        return { issues: newList };
      });
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

    const params = new URLSearchParams(search);
    const vars = {};
    if (params.get('status')) vars.status = params.get('status');

    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;

    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;

    const query = `query issueList($status: StatusType, $effortMin: Int, $effortMax: Int){
        issueList(status: $status, effortMin: $effortMin, effortMax: $effortMax) {
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
        <IssueTable issues={issues} closeIssue={this.closeIssue} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
        <hr />
        <Route path={`${match.path}/:id`} component={IssueDetail} />
      </React.Fragment>
    );
  }
}
