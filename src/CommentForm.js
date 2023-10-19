import React, { useState } from "react";

function CommentForm({ photo, addComment }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(photo.id, commentText);
    setCommentText("");
  };
  
  return (
    <div style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
export default CommentForm;