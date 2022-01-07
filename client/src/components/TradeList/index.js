import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../../utils/mutations";

const TradeList = ({ posts, title }) => {

  function handelDelete(e) {
    let removeId = e.target.id
    let componentToDelete = document.getElementsByClassName(removeId)
    componentToDelete = componentToDelete[0]
    componentToDelete.remove()
  }

  return (
    <div className="trade-page">
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <div className={`${post.postTitle}${post.postDescription}${post.createdAt}`}>
              <div className="card-header">
                <Link to={`/trade/${post._id}`}>
                  <b>{post.postTitle}</b>
                </Link>
                <p>
                  Posted by:{" "}
                  <Link
                    className="trade-username"
                    to={`/profile/${post.username}`}
                  >
                    {post.username}
                  </Link>{" "}
                  on {post.createdAt}
                </p>
              </div>
              <div className="card-body">
                <p>{post.postDescription}</p>
              </div>
              <button onClick={handelDelete} id={`${post.postTitle}${post.postDescription}${post.createdAt}`} className="btn login-sign delete">Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default TradeList;
