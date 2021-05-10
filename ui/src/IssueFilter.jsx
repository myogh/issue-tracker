import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import 'url-search-params-polyfill';

// eslint-disable-next-line react/prefer-stateless-function
class IssueFilter extends React.Component {
  constructor({ location: { search } }) {
    super();
    const params = new URLSearchParams(search);
    this.state = {
      status: params.get('status') || '',
      changed: false,
      effortMin: params.get('effortMin') || '',
      effortMax: params.get('effortMax') || '',
    };

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
    this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.showOriginalFilter = this.showOriginalFilter.bind(this);
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }

  onChangeEffortMin(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMin: effortString, changed: true });
    }
  }

  onChangeEffortMax(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMax: effortString, changed: true });
    }
  }

  showOriginalFilter() {
    const {
      location: { search },
    } = this.props;

    const params = new URLSearchParams(search);
    this.setState({ status: params.get('status') || '', changed: false });
  }

  applyFilter() {
    const { status } = this.state;
    const { effortMin, effortMax } = this.state;

    const params = new URLSearchParams();
    if (status) params.set('status', status);
    if (effortMin) params.set('effortMin', effortMin);
    if (effortMax) params.set('effortMax', effortMax);
    // progmatic navigation
    const { history } = this.props;
    history.push({
      pathname: '/issues',
      search: params.toString() ? `?${params.toString()}` : '',
    });
  }

  render() {
    const { status, changed } = this.state;
    const { effortMin, effortMax } = this.state;

    return (
      <div>
        <h3>Status:</h3>
        <select value={status} onChange={this.onChangeStatus}>
          <option value="">(All issues)</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Closed">Closed</option>
        </select>{' '}
        Effort between:{' '}
        <input
          size={5}
          name="effortMin"
          value={effortMin}
          onChange={this.onChangeEffortMin}
        />
        {'-'}
        <input
          size={5}
          name="effortMax"
          value={effortMax}
          onChange={this.onChangeEffortMax}
        />
        <Button bsStyle="primary" type="button" onClick={this.applyFilter}>
          Apply
        </Button>
        <Button
          bsStyle="primary"
          type="button"
          onClick={this.showOriginalFilter}
          disabled={!changed}
        >
          Reset
        </Button>
      </div>
    );
  }
}

export default withRouter(IssueFilter);
