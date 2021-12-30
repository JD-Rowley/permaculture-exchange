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
                            <div>{comment.username} at {comment.createdAt}</div>
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default CommentList;