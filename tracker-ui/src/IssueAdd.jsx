import React from 'react';
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
} from 'react-bootstrap';
// ------------ Issue Add Component -------------

export default class IssueAdd extends React.Component {
  /**
   * Input section for adding new issues.
   * Props: createIssue(issue)
   */

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    /**
     * Retrieves values from the form object.
     * Forms a new issue and call createIssue()
     * Empty the form object
     * dodod
     */
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(
        new Date().getTime() + 1000 * 60 * 60 * 24 * 10,
      ).toISOString(),
    };

    const { createIssue } = this.props;
    createIssue(issue);
    form.owner.value = '';
    form.title.value = '';
  }

  render() {
    return (
      <Form inline name="issueAdd" onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Owner:</ControlLabel>
          {' '}
          <FormControl type="text" name="owner" />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Title:</ControlLabel>
          {' '}
          <FormControl type="text" name="title" />
        </FormGroup>
        {' '}
        <Button bsStyle="primary" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}
