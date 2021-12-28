import React from 'react';

const TradeList = ({ posts, title }) => {
    if (!posts.length) {
      return <h3>No posts Yet</h3>;
    }
  
    return (
      <div>
        <h1>{title}</h1>
        {posts &&
          posts.map(post => (
            <div key={post._id}>
              <div className='card-header'>
                <b>{post.postTitle}</b>
                <p>posted by: {post.username} on {post.createdAt}</p>
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