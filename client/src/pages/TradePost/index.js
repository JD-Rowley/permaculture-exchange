import React from 'react';
import CommentList from '../../components/CommentList';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';
import './style.css';

function TradePost() {
    const { id: postId } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    });

    const post = data?.post || {};
    console.log(post);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='card-container'>
            <div className='card-header'>
                <p>
                    <h3>{post.postTitle}</h3>
                    <span>Posted by: {post.username} on {post.createdAt}</span>
                </p>
            </div>
            <div className='card-body'>
                <div>
                    <p>{post.postDescription}</p>
                </div>
            </div>

            <div>
                {post.comments.length > 0 && <CommentList comments={post.comments} />}
            </div>
        </div>
    );
}

export default TradePost;