import React from 'react';
import { Link } from 'react-router-dom';

function CommentList({ comments }) {
    return (
        <div className='comments-container'>
            <h3>Comments:</h3>
            {comments &&
                comments.map(comment => (
                    <div key={comment._id}>
                        <p>{comment.commentText}</p>
                        <Link to={`/profile/${comment.username}`}>
                            {comment.username}
                        </Link>
                        <span> at {comment.createdAt}</span>
                    </div>
                ))}
        </div>
    );
};

export default CommentList;