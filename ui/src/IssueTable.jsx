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

// -------- Issue Row Component ---------------

const IssueRow = withRouter((props) => {
  /**
    * const IssueRow = withRouter((props) => {...});
    * Represents each row of issue in a IssueTable.
    * Props: issue: {[string]: any}, search: String
    *        closeIssue: Func(index), index: Int
    *        deleteIssue: Func(index)
    * Parent: IssueTable
    */
  const {
    issue,
    location: { search },
    closeIssue,
    index,
    deleteIssue,
  } = props;

  // tooltip elements to be used in OverLay
  const closeTooltip = <Tooltip id="close-tooltip">Close Issue</Tooltip>;
  const deleteTooltip = <Tooltip id="delete-tooltip">Delete Issue</Tooltip>;
  const editTooltip = <Tooltip id="edit-tooltip">Edit Issue</Tooltip>;

  // handles the event of click on close issue button in each row
  function onClose(e) {
    e.preventDefault();
    closeIssue(index);
  }

  // handles the event of click on delete issue button in each row
  function onDelete(e) {
    e.preventDefault();
    deleteIssue(index);
  }

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
          <Button bsSize="xsmall" type="button" onClick={onClose}>
            <Glyphicon glyph="remove" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          delayShow={1000}
          overlay={deleteTooltip}
          placement="top"
        >
          <Button type="button" bsSize="xsmall" onClick={onDelete}>
            <Glyphicon glyph="trash" />
          </Button>
        </OverlayTrigger>
      </td>
    </tr>
  );

  const selectedLocation = { pathname: `/issues/${issue.id}`, search };

  // each tableRow becomes a link to display description of each id
  return <LinkContainer to={selectedLocation}>{tableRow}</LinkContainer>;
});

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
