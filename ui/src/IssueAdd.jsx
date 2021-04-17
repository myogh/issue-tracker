import React from 'react';
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
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" placeholder="Owner" />
        <input type="text" name="title" placeholder="Title" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

