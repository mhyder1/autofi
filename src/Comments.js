import React, { useState, useEffect } from "react";
import "./Comments.css";
import Form from './Form'
export default function Comments({ id }) {

  const [comments, setComments] = useState([]);
  

  const getComments = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    const comments = await res.json();
    setComments(comments);
  };

  useEffect(() => {
    getComments(id);
  }, [id]);

  return (
      <div>
        {comments.map(({ id, name, email, body }) => (
            <section key={id} className="comments">
            <p>
                <span>Name:</span> {name}
            </p>
            <p>
                <span>Email:</span> {email}
            </p>
            <p>
                <span>Body:</span> {body}
            </p>
            </section>
        ))}
        <Form comments={comments} setComments={setComments} />
    </div>
  )
}