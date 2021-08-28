import 'url-search-params-polyfill';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import graphQLFetch from './graphQLFetch.js';
import IssueFilter from './IssueFilter.jsx';
import store from './store.js';
import withToast from './withToast.jsx';

const statuses = ['New', 'Assigned', 'Fixed', 'Closed'];

class IssueReport extends React.Component {
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

    const data = await graphQLFetch(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const stats = store.initialData ? store.initialData.issueCounts : null;
    delete store.initialData;
    this.state = { stats };
  }

  componentDidMount() {
    const { stats } = this.state;
    if (stats === null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;

    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    const { showError } = this.props;
    const { location: { search }, match } = this.props;

    const result = await IssueReport.fetchData(match, search, showError);
    this.setState({ stats: result ? result.issueCounts : [] });
  }

  render() {
    const { stats } = this.state;
    if (stats === null) return null;

    const headerColumns = (
      statuses.map(status => (
        <th key={status}>{status}</th>
      ))
    );

    const statRows = stats.map(counts => (
      <tr key={counts.owner}>
        <td>{counts.owner}</td>
        {statuses.map(status => (
          <td key={uuidv4()}>{counts[status] ? counts[status] : 0}</td>
        ))}
      </tr>
    ));

    return (
      <>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>Filter</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <IssueFilter urlBase="/report" />
          </Panel.Body>
        </Panel>
        <Table bordered condensed hover responsive>
          <thead>
            <tr>
              <th />
              {headerColumns}
            </tr>
          </thead>
          <tbody>
            {statRows}
          </tbody>
        </Table>
      </>
    );
  }
}

const IssueReportWithToast = withToast(IssueReport);
IssueReportWithToast.fetchData = IssueReport.fetchData;
export default IssueReportWithToast;
