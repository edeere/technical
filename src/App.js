import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "tailwindcss/tailwind.css"
import Todo from "./pages/Todo";
import "./index.css";

export default function TodoApp() {
  return (
    <Router>
      <div className="m-12">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <ToDo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function ToDo() {
  return (
    <Todo />
  )
}