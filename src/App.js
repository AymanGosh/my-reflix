import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Catalog from "./components/Catalog";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div id="header">
          <div id="logo">REFLIX</div>
        </div>

        <div id="app-background"></div>

        <Route exact path="/" render={() => <Landing />} />

        <Route exact path="/Catalog" render={() => <Catalog />} />
      </Router>
    );
  }
}

export default App;
