import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Artical.css"

export default function Article() {
  // whithout destrcuture const params = useParams()

  const { id } = useParams();
  const url = "http://localhost:3000/dialogues/" + id;
  const { data: articles, isPending, error } = useFetch(url);
  const history = useHistory();

  const handelClick = () => {
    fetch("http://localhost:3000/dialogues/" + articles.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles && (
        <div className="aritcal-preview">
          <h2>{articles.title}</h2>
          <p>By {articles.author}</p>
          <p>By {articles.body}</p>
          <button onClick={handelClick}>Delete</button>
        </div>
      )}
    
    </div>
  );
}
