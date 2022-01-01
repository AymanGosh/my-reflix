import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Catalog from "./components/Catalog";
import dataUsers from "./data/dataUsers.js";
import dataMovies from "./data/dataMovies.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: dataUsers,
      movies: dataMovies,
      budget: undefined,
      userName: undefined,
    };
  }

  render() {
    return (
      <Router>
        <div>REFLIX</div>

        <Route
          exact
          path="/"
          render={() => <Landing users={this.state.users} />}
        />

        <Route exact path="/Catalog" render={() => <Catalog />} />
      </Router>
    );
  }
}

export default App;
