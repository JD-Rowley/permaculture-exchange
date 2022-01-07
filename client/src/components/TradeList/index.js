import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../../utils/mutations';

const TradeList = ({ posts, title }) => {

  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  function handleDelete(e) {

    let removeId = e.target.id
    let componentToDelete = document.getElementsByClassName(removeId)
    componentToDelete = componentToDelete[0]
    componentToDelete.remove()

  }

    return (
      <div>
        <h3>{title}</h3>
        {posts &&
          posts.map(post => (
            <div key={post._id}>
              <div className={`${post.postTitle}${post.postDescription}${post.createdAt}`}>
                <div className={`card-header`}>
                  <Link to={`/trade/${post._id}`}>
                      <b>{post.postTitle}</b>
                  </Link>
                      <p>posted by: <Link to={`/profile/${post.username}`}>{post.username}</Link> on {post.createdAt}</p>
                </div>
                <div className={`card-body`}>
                  <p>{post.postDescription}</p>
                </div>
                <button onClick={handleDelete} id={`${post.postTitle}${post.postDescription}${post.createdAt}`}>Delete</button> 
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default TradeList;