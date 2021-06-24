import React, { useState, useEffect } from "react";
import "./Post.css";
import Comments from "./Comments";
export default function Posts() {
  const [expandedID, setExpandedID] = useState(1);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const displayPosts = () => {
    return posts.map(({ id, title, body }) => (
      <li className="posts" key={id}>
        <h2
          key={id}
          onClick={() => setExpandedID(id === expandedID ? null : id)}
        >
          {title} {/* posts */}
        </h2>
        <p>{body}</p>
        {expandedID === id && <Comments id={expandedID} />} {/* comments */}
      </li>
    ));
  };

  return <ul>{displayPosts()}</ul>;
}
