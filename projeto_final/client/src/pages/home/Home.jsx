import React from 'react';
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";


//We will fetch data using axios library
export default function Home() {
  const [posts, setPosts] = useState([]);//Initial array is empty because we havent fetch any data yet
  const { search } = useLocation(); 


  //The fetchPosts function will get all posts in the blog
  //posts will be passed as props in <Posts posts={posts} />
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}