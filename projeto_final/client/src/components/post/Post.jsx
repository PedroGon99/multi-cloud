import React from 'react';
import "./post.css";
import { Link } from "react-router-dom";

//Post info is obtained from a prop
//This function will be "called" by Posts.jsx 
//The Link will allow us to get to the singlePost page of the 
//post we want using the unique post_id
export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}