import React, { useEffect, useState } from "react";
import Post from "../Post";
import API from "../../utils/API";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const postData = await API.getAllPosts();
    setPosts(postData);
    postData.reverse();
    setPosts(postData);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Welcome To Name Of The Campaign!</h1>
      <div>
        {posts.map((post, index) => (
          <Post
            key={index}
            postTitle={post.title}
            postText={post.text}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </>
  );
}
