import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const PostList = (props) => {
  const { posts } = props;

  // Check if posts is not an array or is undefined, return null or a loading indicator
  if (!Array.isArray(posts)) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginTop: "24px" }}>
      {posts.map((item, i) => (
        <Post post={item} key={i} onRemove={props.removeUpdate} />
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
  removeUpdate: PropTypes.func.isRequired,
};

export default PostList;
