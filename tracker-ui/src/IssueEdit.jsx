import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Col,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button,
  Alert,
  Glyphicon,
} from 'react-bootstrap';
import graphQLFetch from './graphQLFetch.js';
import NumInput from './NumInput.jsx';
import DateInput from './DateInput.jsx';
import TextInput from './TextInput.jsx';
import store from './store.js';
import withToast from './withToast.jsx';
import UserContext from './UserContext.js';

class IssueEdit extends React.Component {
  static async fetchData(match, search, showError) {
    /**
     * Fetches an issue with a particular id from the graphQL api server
     * Params - match: <Object> from react router
     *          search: String from react router
     *          showError: Func from ToastWrapper
     */
    const query = `query issue($id: Int!){
            issue(id: $id){
                id title status owner
                effort created due description
            }
        }`;

    const {
      params: { id },
    } = match;

    const result = await graphQLFetch(query, { id: Number(id) }, showError);
    return result;
  }

  constructor(props) {
    super(props);

    const issue = store.initialData ? store.initialData.issue : null;
    delete store.initialData;

    this.state = {
      issue, // <Object>
      invalidFields: {}, // the fields of invalid user inputs
      showingValidation: false, // validation message at the end of the form
      isFormTouched: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
  }

  componentDidMount() {
    const { issue } = this.state;
    if (issue == null) {
      this.loadData();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id: prevId },
      },
    } = prevProps;

    const {
      match: {
        params: { id },
      },
    } = this.props;

    if (prevId !== id) {
      this.loadData();
    }
  }

  // handles changes on the validity information of each of the input elements
  onValidityChange(e, valid) {
    const { name } = e.target;
    this.setState((prevState) => {
      const invalidFields = { ...prevState.invalidFields, [name]: !valid };
      if (valid) delete invalidFields[name];
      return { invalidFields };
    });
  }

  // update the state.issue using the values from the user inputs
  onChange(e, naturalValue) {
    const { name, value: textValue } = e.target;

    // if the input value with its true type is not passed, use the
    // one with ordinary unconverted string input value from event object.
    const value = naturalValue === undefined ? textValue : naturalValue;

    this.setState(prevState => ({
      issue: { ...prevState.issue, [name]: value },
      isFormTouched: true
    }));
  }

  async handleSubmit(e) {
    /**
     * Submit the database with the new user input values in the form, by
     * making a mutation request to the graphQL server.
     * If there's any invalidFields left, terminate this method.
     */
    e.preventDefault();
    this.showValidation();

    const { issue, invalidFields } = this.state;

    // check validity of inputs before updating
    if (Object.keys(invalidFields).length !== 0) return;

    const query = `mutation issueUpdate($id: Int!,
                        $changes: IssueUpdateInputs!){
                        issueUpdate(id: $id, changes: $changes){
                            id title status owner
                            effort created due description
                        }
                    }`;

    const { id, created, ...changes } = issue;
    const { showError, showSuccess } = this.props;

    const data = await graphQLFetch(query, { id, changes }, showError);
    if (data) {
      this.setState({ issue: data.issueUpdate, isFormTouched: false });
      showSuccess('Updated issue successfully');
    }
  }

  // load data from the graphql api server
  async loadData() {
    const { match, showError } = this.props;
    const data = await IssueEdit.fetchData(match, null, showError);
    this.setState({ issue: data ? data.issue : {}, invalidFields: {} });
  }

  showValidation() {
    this.setState({ showingValidation: true });
  }

  dismissValidation() {
    this.setState({ showingValidation: false });
  }

  render() {
    const { issue, isFormTouched } = this.state;
    const user = this.context;
    if (issue == null) return null;

    // ----- check if the "id" exists when
    // "prev" and next links are used at the bottom ------------

    const {
      issue: { id },
    } = this.state;

    const {
      match: {
        params: { id: propsId },
      },
    } = this.props;

    if (id == null) {
      if (propsId != null) {
        return <h2>{`Issue with ID: ${propsId} not found.`}</h2>;
      }
      return null;
    }

    // --- create a validtion message based on the state of the component ----

    const { invalidFields, showingValidation } = this.state;

    let validationMessage;

    if (Object.keys(invalidFields).length !== 0 && showingValidation) {
      validationMessage = (
        <Alert bsStyle="danger" onDismiss={this.dismissValidation}>
          Please correct invalid fields before submitting
        </Alert>
      );
    }

    const signinInfoStyle = {
      display: user.signedIn === true ? 'none' : 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    };

    // --------- ui presentation -----------------

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-8">
            <div style={signinInfoStyle}>
              <Glyphicon
                style={{ color: 'orange', margin: '0 5px' }}
                glyph="info-sign"
              />
              <p style={{ color: 'orange', margin: '0' }}>
                You might want to sign in to edit and add issues.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <Panel>
            <Panel.Heading>
              <Panel.Title>{`Issue: ${id}`}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              {/* horizontal form to edit an issue */}
              <Form horizontal onSubmit={this.handleSubmit}>
                {/* created form field */}
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3}>
                    Created
                  </Col>
                  <Col sm={9}>
                    <FormControl.Static>
                      {issue.created.toDateString()}
                    </FormControl.Static>
                  </Col>
                </FormGroup>
                {/* status form field */}
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3}>
                    Status
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      componentClass="select"
                      name="status"
                      value={issue.status}
                      onChange={this.onChange}
                    >
                      <option value="New">New</option>
                      <option value="Assigned">Assigned</option>
                      <option value="Fixed">Fixed</option>
                      <option value="Closed">Closed</option>
                    </FormControl>
                  </Col>
                </FormGroup>
                {/* owner form field */}
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3}>
                    Owner
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      componentClass={TextInput}
                      name="owner"
                      value={issue.owner}
                      onChange={this.onChange}
                      key={id}
                    />
                  </Col>
                </FormGroup>
                {/* effort form field */}
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3}>
                    Effort
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      componentClass={NumInput}
                      name="effort"
                      value={issue.effort}
                      onChange={this.onChange}
                      key={id}
                    />
                  </Col>
                </FormGroup>
                {/* due date form field */}
                <FormGroup validationState={invalidFields.due ? 'error' : null}>
                  <Col componentClass={ControlLabel} sm={3}>
                    Due
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      componentClass={DateInput}
                      onValidityChange={this.onValidityChange}
                      name="due"
                      value={issue.due}
                      onChange={this.onChange}
                      key={id}
                    />
                    <FormControl.Feedback />
                  </Col>
                </FormGroup>
                {/* title form field */}
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3}>
                    Title
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      componentClass={TextInput}
                      size={50}
                      name="title"
                      value={issue.title}
                      onChange={this.onChange}
                      key={id}
                    />
                  </Col>
                </FormGroup>
                {/* issue description form field */}
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3}>
                    Description
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      componentClass={TextInput}
                      tag="textarea"
                      rows={4}
                      cols={50}
                      name="description"
                      value={issue.description}
                      onChange={this.onChange}
                      key={id}
                    />
                  </Col>
                </FormGroup>
                {/* submit button */}
                <FormGroup>
                  <Col smOffset={3} sm={6}>
                    <ButtonToolbar>
                      <Button
                        disabled={!user.signedIn || !isFormTouched}
                        bsStyle="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                      <LinkContainer to="/issues">
                        <Button bsStyle="link">Back</Button>
                      </LinkContainer>
                    </ButtonToolbar>
                  </Col>
                </FormGroup>
                {/* form inputs validation message */}
                <FormGroup>
                  <Col smOffset={3} sm={9}>
                    {validationMessage}
                  </Col>
                </FormGroup>
              </Form>
            </Panel.Body>
            {/* prev and next page */}
            <Panel.Footer>
              <Link to={`/edit/${id - 1}`}>Prev</Link>
              {' | '}
              <Link to={`/edit/${id + 1}`}>Next</Link>
            </Panel.Footer>
          </Panel>
        </div>
      </div>
    );
  }
}

IssueEdit.contextType = UserContext;
const IssueEditWithToast = withToast(IssueEdit);
IssueEditWithToast.fetchData = IssueEdit.fetchData;

export default IssueEditWithToast;
