import { Link, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Home.css";

export default function Home() {
  const history = useHistory();
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/dialogues");



  return (
    <div className="home">
      <h2>Dialogues</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((articles) => (
          <div key={articles.id} className="card">
            <h3>{articles.title}</h3>
            <p>🎬{articles.author}</p>
            <Link to={`/dialogues/${articles.id}`} className="read-more">Read more...</Link>
          </div>
        ))}
    </div>
  );
}
