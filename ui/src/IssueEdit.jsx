import React from 'react';

export default function IssueEdit({ match }) {
  const { id } = match.params;
  return (
    <div>
      <h1>{`This is a placeholder for issue edit No.${id}`}</h1>
    </div>
  );
}
