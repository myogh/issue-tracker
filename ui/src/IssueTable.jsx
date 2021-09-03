import React from 'react';
import {
  Button,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
  Table,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';
import UserContext from './UserContext.js';

// -------- Issue Row Component ---------------

class IssueRowPlain extends React.Component {
  /**
    * const IssueRow = withRouter((props) => {...});
    * Represents each row of issue in a IssueTable.
    * Props: issue: {[string]: any}, search: String
    *        closeIssue: Func(index), index: Int
    *        deleteIssue: Func(index)
    * Parent: IssueTable
    */

  // handles the event of click on close issue button in each row
  onClose(e) {
    e.preventDefault();
    const { closeIssue, index } = this.props;
    closeIssue(index);
  }

  // handles the event of click on delete issue button in each row
  onDelete(e) {
    e.preventDefault();
    const { deleteIssue, index } = this.props;
    deleteIssue(index);
  }

  render() {
    const {
      issue,
      location: { search },
    } = this.props;

    const user = this.context;

    // tooltip elements to be used in OverLay
    const closeTooltip = <Tooltip id="close-tooltip">Close Issue</Tooltip>;
    const deleteTooltip = <Tooltip id="delete-tooltip">Delete Issue</Tooltip>;
    const editTooltip = <Tooltip id="edit-tooltip">Edit Issue</Tooltip>;

    const tableRow = (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? issue.due.toDateString() : ' '}</td>
        <td>{issue.title}</td>
        <td>
          <LinkContainer to={`/edit/${issue.id}`}>
            <OverlayTrigger delayShow={1000} overlay={editTooltip}>
              <Button bsSize="xsmall">
                <Glyphicon glyph="edit" />
              </Button>
            </OverlayTrigger>
          </LinkContainer>
          <OverlayTrigger
            delayShow={1000}
            overlay={closeTooltip}
            placement="top"
          >
            <Button
              disabled={!user.signedIn}
              bsSize="xsmall"
              type="button"
              onClick={this.onClose}
            >
              <Glyphicon glyph="remove" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            delayShow={1000}
            overlay={deleteTooltip}
            placement="top"
          >
            <Button
              disabled={!user.signedIn}
              type="button"
              bsSize="xsmall"
              onClick={this.onDelete}
            >
              <Glyphicon glyph="trash" />
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
    );

    const selectedLocation = { pathname: `/issues/${issue.id}`, search };

    // each tableRow becomes a link to display description of each id
    return <LinkContainer to={selectedLocation}>{tableRow}</LinkContainer>;
  }
}

// this is due to the fact that the wrapped component IssueRow is a stateless
// component based on the withRouter documentation. That's why you can't assign
// to it. contextType is meant to be a static class method.
IssueRowPlain.contextType = UserContext;
const IssueRow = withRouter(IssueRowPlain);
delete IssueRow.contextType;

// --------- Issue Table Component -----------------

export default function IssueTable({ issues, closeIssue, deleteIssue }) {
  /**
   * Displays a list of issues in a table.
   * Props: issues: Array<Objects>
   *        closeIssue: Func
   *        deleteIssue: Func
   */

  // map each issue object to IssueRow
  const issueRows = issues.map((issue, index) => (
    <IssueRow
      key={issue.id}
      issue={issue}
      deleteIssue={deleteIssue}
      closeIssue={closeIssue}
      index={index}
    />
  ));

  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Due Date</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </Table>
  );
}
