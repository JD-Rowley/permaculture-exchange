import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../../utils/mutations';

const TradeList = ({ posts, title }) => {
    return (
      <div>
        <h3>{title}</h3>
        {posts &&
          posts.map(post => (
            <div key={post._id}>
              <div className='card-header'>
                <Link to={`/trade/${post._id}`}>
                    <b>{post.postTitle}</b>
                </Link>
                    <p>posted by: <Link to={`/profile/${post.username}`}>{post.username}</Link> on {post.createdAt}</p>
              </div>
              <div className='card-body'>
                <p>{post.postDescription}</p>
              </div>
              <button>Delete</button>
            </div>
          ))}
      </div>
    );
  };
  
  export default TradeList;