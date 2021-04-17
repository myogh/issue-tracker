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

export default function IssueTable({ issues }) {
  /**
   * Displays a list of issues in a table.
   * Props: list of issue objects.
   */
  const issueRows = issues.map((issue) => (
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
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}

