import React from 'react';
import graphQLFetch from './graphQLFetch.js';
import NumInput from './NumInput.jsx';
import { Link } from 'react-router-dom';

export default class IssueEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { issue: {} };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
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

  onChange(e, naturalValue) {
    const { name, value: textValue } = e.target;
    const value = naturalValue === undefined ? textValue : naturalValue;

    this.setState((prevState) => ({
      issue: { ...prevState.issue, [name]: value },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { issue } = this.state;
    console.log(issue);
  }

  async loadData() {
    const query = `query issue($id: Int!) {
            issue(id: $id) {
                id title status owner
                effort created due description
            }
        }`;

    const { id } = this.props.match.params;
    const data = await graphQLFetch(query, { id: Number(id) });

    if (data.issue) {
      const { issue } = data;
      issue.due = issue.due ? issue.due.toDateString() : '';
      issue.created = issue.created ? issue.created.toDateString() : '';
      issue.owner = issue.owner != null ? issue.owner : '';
      issue.description = issue.description != null ? issue.description : '';
      this.setState({ issue });
    } else {
      this.setState({ issue: {} });
    }
  }

  render() {
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

    const {
      created,
      title,
      owner,
      effort,
      description,
      due,
      status,
    } = this.state.issue;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{`Editing issue: ${id}`}</h3>
        <table>
          <tbody>
            <tr>
              <td>Created:</td>
              <td>{created || ''}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <select
                  name="status"
                  value={status || ''}
                  onChange={this.onChange}
                >
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Owner:</td>
              <td>
                <input
                  name="owner"
                  value={owner || ''}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Effort:</td>
              <td>
                <NumInput
                  name="effort"
                  value={effort || ''}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td>Due:</td>
              <td>
                <input
                  name="due"
                  value={due || ''}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>
                <input
                  size={50}
                  name="title"
                  value={title || ''}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <textarea
                  rows={8}
                  cols={50}
                  name="description"
                  value={description || ''}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to={`/edit/${id - 1}`}>Prev</Link>
        {' | '}
        <Link to={`/edit/${id + 1}`}>Next</Link>
      </form>
    );
  }
}
