import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Nav from "./components/Nav";
import Post from "./components/Post";
import API from "./utils/API";


function App() { 
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const postData = await API.getAllPosts();
    console.log(postData);
    setPosts(postData)    
  }

  useEffect(() => {
    fetchPosts()
  },[])

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
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

export default App;