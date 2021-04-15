/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM PropTypes */
/* eslint "react/jsx-no-undef": "off" */

// ----------- Issue Filter Component ------------------

// eslint-disable-next-line react/prefer-stateless-function
class IssueFilter extends React.Component {
  render() {
    return <div>This is the placeholder for IssueFilter</div>;
  }
}

// -------- Issue Row Component ---------------

function IssueRow({ issue }) {
  /**
   * Represents each row of issue in a IssueTable.
   * Props: issue object
   */
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ' '}</td>
      <td>{issue.title}</td>
    </tr>
  );
}

// --------- Issue Table Component -----------------

function IssueTable({ issues }) {
  /**
   * Displays a list of issues in a table.
   * Props: list of issue objects.
   */
  const issueRows = issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Due Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}

// ------------ Issue Add Component -------------

class IssueAdd extends React.Component {
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
     */
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10).toISOString(),
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

IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired,
};

// ---------- Utility function for fetching data from server ----------

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(_, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

async function graphQLFetch(query, variables = {}) {
  /**
   * Params: query string, variables if to mutate data in server.
   * Fetches list of issue from the server.
   * Displays errors based on the result.
   * Returns the fetched issue list.
   */
  try {
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    // to handle the Date, the response is parsed as json text
    // rather than a json object, here body is a string of json data
    // JSON.parse(JsonString, ...)
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code === 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    // cathing the transport error
    alert(`Error in sending data to server: ${e.message}`);
    return null;
  }
}

// ----------- Issue List Component ----------------

class IssueList extends React.Component {
  /**
   * Top level parent component.
   */
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async createIssue(samIssue) {
    /**
     * Creates new issue object upon user input.
     * param: new issue object
     * Mutates the issue database on the server.
     * Calls loadData()
     */
    const issue = {};
    Object.assign(issue, samIssue);

    const query = `mutation issueAddOperation($issue: IssueInputs!) {
        issueAdd(issue: $issue) {
            id
          }
        }`;

    // data is the id on the newly added issue
    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  }

  async loadData() {
    /**
     * Fetches list of issues from the database via API call.
     * Updates the data state on the client side.
     */
    const query = `query{
        issueList {
            id title status owner
            created effort due
            }
        }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }

  render() {
    const { issues } = this.state;
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <hr />
        <IssueFilter />
        <hr />
        <IssueTable issues={issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
        <hr />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));
