import React from 'react';

function CommentsList({ photo }) {
  // Check if the photo has comments
  return (
    <div>
      {photo.comments && photo.comments.map(comment => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  );
}

export default CommentsList;
