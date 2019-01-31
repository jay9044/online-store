import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MoviesStart from "./MoviesStart";
import NavBar from "../components/common/NavBar";
import Customers from "./Customers";
import NotFound from "./NotFound";
import Rentals from "./Rentals";
import Register from "./Register";
import MovieForm from "./MovieForm";
import LoginForm from "./common/LoginForm";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={MoviesStart} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={Register} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
