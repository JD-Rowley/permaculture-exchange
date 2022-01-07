import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../../utils/mutations";

const TradeList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <div className="trade-page">
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
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
        ))}
    </div>
  );
};
export default TradeList;
