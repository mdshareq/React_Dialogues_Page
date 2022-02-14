import { Link } from "react-router-dom";
import "../index.css"

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Sorry !</h1>
      <p>Page not found!!!</p>
      <Link to="/" className="re-direct">Go back to home page...</Link>
    </div>
  );
}
