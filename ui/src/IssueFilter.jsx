import React from 'react';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
  Row,
  Col,
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import 'url-search-params-polyfill';

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

  // handles changes on status input form
  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }

  // handles changes on effortMin input form
  onChangeEffortMin(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMin: effortString, changed: true });
    }
  }

  // handles changes on effortMax input form
  onChangeEffortMax(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMax: effortString, changed: true });
    }
  }

  // resets the filter input form's state
  showOriginalFilter() {
    const {
      location: { search },
    } = this.props;

    const params = new URLSearchParams(search);
    this.setState({
      status: params.get('status') || '',
      effortMin: params.get('effortMin') || '',
      effortMax: params.get('effortMax') || '',
      changed: false,
    });
  }

  applyFilter() {
    const { status } = this.state;
    const { effortMin, effortMax } = this.state;

    const params = new URLSearchParams();
    if (status) params.set('status', status);
    if (effortMin) params.set('effortMin', effortMin);
    if (effortMax) params.set('effortMax', effortMax);
    // progmatic navigation
    const { history, urlBase } = this.props;
    history.push({
      pathname: urlBase,
      search: params.toString() ? `?${params.toString()}` : '',
    });
  }

  render() {
    const { status, changed } = this.state;
    const { effortMin, effortMax } = this.state;

    return (
      <Row>
        <Col xs={6} sm={4} md={3} lg={2}>
          <FormGroup>
            <ControlLabel>Status:</ControlLabel>
            <FormControl
              componentClass="select"
              value={status}
              onChange={this.onChangeStatus}
            >
              <option value="">(All issues)</option>
              <option value="New">New</option>
              <option value="Assigned">Assigned</option>
              <option value="Fixed">Fixed</option>
              <option value="Closed">Closed</option>
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <FormGroup>
            <ControlLabel>Effort between:</ControlLabel>
            <InputGroup>
              <FormControl
                value={effortMin}
                onChange={this.onChangeEffortMin}
              />
              <InputGroup.Addon>-</InputGroup.Addon>
              <FormControl
                value={effortMax}
                onChange={this.onChangeEffortMax}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <FormGroup>
            <ControlLabel>&nbsp;</ControlLabel>
            <ButtonToolbar>
              <Button
                bsStyle="primary"
                type="button"
                onClick={this.applyFilter}
              >
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
            </ButtonToolbar>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

export default withRouter(IssueFilter);
