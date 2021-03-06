import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_POSTS } from "../utils/queries";
import TradeList from "../components/TradeList";
import PostForm from "../components/PostForm";
import Auth from "../utils/auth";

function Trade() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: me } = useQuery(QUERY_ME);
  const posts = data?.posts || [];
  const loggedIn = Auth.loggedIn();

  return (
    <div className="container">
      {loggedIn && (
        <div>
          <PostForm />
        </div>
      )}
      <div className="card-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <TradeList posts={posts} title="THIS IS THE TRADE PAGE!" />
        )}
      </div>
    </div>
  );
}

export default Trade;
