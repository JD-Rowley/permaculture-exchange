import React from 'react';
import { Link } from 'react-router-dom';

const TradeList = ({ posts, title }) => {

    if (!posts.length) {
      return <h3>No posts Yet</h3>;
    }
  
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
            </div>
          ))}
      </div>
    );
  };
  
  export default TradeList;