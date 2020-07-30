import React from "react";

import "./App.css";
import Home from "./Home";
import Question from "./Question";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/question">Question link</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/question">
          <Question />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
