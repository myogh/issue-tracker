import React from 'react';

// from Date to 'yyyy-mm-dd'
function editFormat(date) {
  return date === null ? '' : date.toISOString().substr(0, 10);
}

// from Date obj to 'Sat Feb 01 2021' str format
function displayFormat(date) {
  return date === null ? '' : date.toDateString();
}

// for validation, from 'yyyy-mm-dd' to Date obj or null
function unformat(dateStr) {
  const val = new Date(dateStr);
  return Number.isNaN(val.getTime()) ? null : val;
}

export default class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: editFormat(props.value), focus: false, valid: true };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.match(/^[\d-]*$/)) {
      this.setState({ value: e.target.value });
    }
  }

  // user clicks the input box
  onFocus() {
    this.setState({ focus: true });
  }

  onBlur(e) {
    const { value, valid: oldValid } = this.state;
    const { onValidityChange, onChange } = this.props;

    const dateValue = unformat(value);

    const valid = value === '' || dateValue != null;

    if (valid !== oldValid && onValidityChange) {
      onValidityChange(e, valid);
    }

    this.setState({ focus: false, valid });

    if (valid) onChange(e, dateValue);
  }

  render() {
    const { value, focus, valid } = this.state;
    const { value: origValue, onValidityChange, ...props } = this.props;
    const inputVal = !valid || focus ? value : displayFormat(origValue);

    return (
      <input
        {...props}
        value={inputVal}
        placeholder={focus ? 'yyyy-mm-dd' : null}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}
