import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SlantTest from "./components/SlantTest";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Projects />
          </Route>
          <Route path="/">
            <Dashboard />
            <SlantTest />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
