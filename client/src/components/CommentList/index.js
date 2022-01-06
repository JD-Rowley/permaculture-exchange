import React from "react";
import { Link } from "react-router-dom";

function CommentList({ comments }) {
  return (
    <div className="comments-container">
      <h3>COMMENTS:</h3>
      {comments &&
        comments.map((comment) => (
          <div className="comment-response" key={comment._id}>
            <p className="comment-paragraph">{comment.commentText}</p>
            <Link
              className="response-username"
              to={`/profile/${comment.username}`}
            >
              {comment.username}
            </Link>
            <span> on {comment.createdAt}</span>
          </div>
        ))}
    </div>
  );
}

export default CommentList;
