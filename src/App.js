//watch datbase json
//npm install -g json-server _ > insatll global
//json-server --watch ./data/db.json
//npx json-server --watch data/db.json

import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";

//page components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Article from "./pages/Article";
import CreateDialogues from "./pages/CreateDialogues";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <h1>🤖 Famous Dialogues</h1>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/create" className="createbtn">
            Create Dialogues
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateDialogues />
          </Route>

          <Route path="/dialogues/:id">
            <Article />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
