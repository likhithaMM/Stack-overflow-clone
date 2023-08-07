import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import auth from "../../../api/auth-helper";
import { listNewsFeed } from "../../../api/index";

import PostList from "./PostList";
import NewPost from "./NewPost";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    listNewsFeed(
      {
        userId: jwt.user._id,
      },
      {
        t: jwt.token,
      },
      signal
    )
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setPosts(data);
        }
      })
      .catch((error) => {
        console.log("Error fetching news feed:", error);
      });

    return function cleanup() {
      abortController.abort();
    };
  }, [jwt.user._id, jwt.token]);

  const addPost = (post) => {
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
  };

  const removePost = (post) => {
    const updatedPosts = posts.filter((p) => p._id !== post._id);
    setPosts(updatedPosts);
  };

  return (
    <Card sx={{ width: "100%" }}>
      <Typography type="title">Newsfeed</Typography>
      <Divider />
      <NewPost addUpdate={addPost} />
      <Divider />
      <PostList removeUpdate={removePost} posts={posts || []} />
    </Card>
  );
};

export default NewsFeed;
