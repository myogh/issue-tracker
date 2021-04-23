import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
// -------- Issue Row Component ---------------

const IssueRow = withRouter(({ issue, location: { search } }) => {
  /**
   * Represents each row of issue in a IssueTable.
   * Props: issue from Table, and location from withRouter
   */

  const selectLocation = { pathname: `/issues/${issue.id}`, search };
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ' '}</td>
      <td>{issue.title}</td>
      <td>
        <Link to={`/edit/${issue.id}`}>edit</Link>
        {' | '}
        <NavLink to={selectLocation}>info</NavLink>
      </td>
    </tr>
  );
});

// --------- Issue Table Component -----------------

export default function IssueTable({ issues }) {
  /**
   * Displays a list of issues in a table.
   * Props: list of issue objects.
   */
  const issueRows = issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}