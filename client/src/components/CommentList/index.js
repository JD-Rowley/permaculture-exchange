import React from 'react';
import { Link } from 'react-router-dom';

function CommentList({ comments }) {
    return (
        <div className='comments-container'>
            <h3>Comments:</h3>
            <div>
                {comments &&
                    comments.map(comment => (
                        <div key={comment._id}>
                            <p>{comment.commentText}</p>
                            <div>{comment.username} at {comment.createdAt}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CommentList;