import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';

const colourStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: '#5b5e6f4a',
    borderColor: '#666a77',
    cursor: 'text',
  }),
  input: styles => ({
    ...styles,
    color: 'white',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#adafb9',
  }),
};

function PlaceholderComp() {
  return (
    <>
      <Glyphicon glyph="search" />
      {'   '}
      <span>Search for issues...</span>
    </>
  );
}
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.loadOptions = this.loadOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // asynchronously load options from a remote server
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

    // returns a list of options<Object> array. {label: "", value: ""}
    const options = () => data.issueList.issues.map(issue => (
      { label: `#${issue.id}: ${issue.title}`, value: issue.id }
    ));

    callback(options());
    return undefined;
  }

  // handles when the AsyncSelect value is changed
  // (when one of the options is selected).
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
          placeholder={<PlaceholderComp />}
          onChange={this.handleChange}
          loadOptions={this.loadOptions}
          components={{ DropdownIndicator: null }}
          styles={colourStyles}
        />
      </>
    );
  }
}

export default withRouter(withToast(Search));
