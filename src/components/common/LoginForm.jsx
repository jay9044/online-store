import React, { Component } from "react";
import FormInput from "./FormInput";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: "", password: "" }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // call server

    //save changes
    //then redirect the user
  }

  handleChange({ currentTarget: input }) {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account
    });
  }

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            id="username"
            value={account.username.value}
            onChange={this.handleChange}
          />
          <FormInput
            name="password"
            id="password"
            value={account.password.value}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
