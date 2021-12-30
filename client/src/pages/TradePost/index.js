import React from 'react';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';
import Auth from '../../utils/auth';
import './style.css';

function TradePost() {
    const { id: postId } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='card-container'>
            <div className='card-header'>
                <div>
                    <h3>{post.postTitle}</h3>
                    <span>Posted by: {post.username} on {post.createdAt}</span>
                </div>
            </div>
            <div className='card-body'>
                <div>
                    <p>{post.postDescription}</p>
                </div>
            </div>
            <div>
                {Auth.loggedIn() && <CommentForm postId={post._id} />}
                {post.comments.length > 0 && <CommentList comments={post.comments} />}
            </div>
        </div>
    );
}

export default TradePost;