import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MoviesStart from "./MoviesStart";
import NavBar from "../components/common/NavBar";

import "../styles/App.css";
import Customers from "./Customers";
import NotFound from "./NotFound";
import Rentals from "./Rentals";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path="/movies" component={MoviesStart} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
