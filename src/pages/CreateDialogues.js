import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateDialogues.css";

export default function CreateArticles() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:3000/dialogues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <form onSubmit={handelSubmit}>
        <label>Dialogues Title:</label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Dialogues Body:</label>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <label>Dialogues By:</label>
        <input
          type="text"
          required
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        {isPending && <button disabled>Adding!</button>}
        {!isPending && <button>Add!</button>}
      </form>
    </div>
  );
}
