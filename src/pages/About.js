import "./About.css";
import img from "./user.png"

export default function About() {
  return (
    <div className="about">
      <h2>About Page</h2>
      <p>
        Hi!.., This page is all about Iconic Dialogues in Movies be it Bollywood, Hollywood, etc...,
        <br/>If you love them just add it to the collection :),
      </p>
      <div className="img">
       <img src={img} alt="img"/>
      </div>
    </div>
  );
}


