import React from 'react';
import { withRouter } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.loadOptions = this.loadOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async loadOptions(inputValue, callback) {
    if (inputValue.length < 3) return [];
    const query = `query issueList($search: String) {
      issueList(search: $search) {
        issues {
          id title
        }
      }
    }`;

    const { showError } = this.props;
    const data = await graphQLFetch(query, { search: inputValue }, showError);

    const options = () => data.issueList.issues.map(issue => (
      { label: `#${issue.id}: ${issue.title}`, value: issue.id }
    ));

    callback(options());
    return undefined;
  }

  handleChange(option) {
    const { history } = this.props;
    history.push({
      pathname: `/edit/${option.value}`,
    });
  }

  render() {
    return (
      <>
        <AsyncSelect
          instanceId="search-select"
          value=""
          placeholder="Search for issues..."
          onChange={this.handleChange}
          loadOptions={this.loadOptions}
          components={{ DropdownIndicator: null }}
        />
      </>
    );
  }
}

export default withRouter(withToast(Search));
