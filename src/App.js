import React from "react";

import "./App.css";
import Home from "./Home";
import Session from "./Session";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/session">
          <Session />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
