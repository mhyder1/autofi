import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import './Form.css'
export default function Form({ comments, setComments}) {
  const init = {
    id: uuidv4(),
    name: "",
    body: "",
    email: ""
  };

  const [commentInput, setCommentInput] = useState(init);

  const handleChange = (e) => {
    setCommentInput({ ...commentInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, commentInput])
    setCommentInput(init)
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={commentInput.name}
        required
      />
      <br />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
        value={commentInput.email}
        required
      />
      <br />
      <textarea
        placeholder="comment"
        name="body"
        onChange={handleChange}
        value={commentInput.body}
        required
      />
      <br />
      <button type="submit">Comment!</button>
    </form>
  );
}
