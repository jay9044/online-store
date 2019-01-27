import React, { Component } from "react";
import FormInput from "./FormInput";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: "", password: "" },
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate() {
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === "") errors.username = "Username required";

    if (account.password.trim() === "") errors.password = "Password required";

    return Object.keys(errors).length === 0 ? null : errors;
  }

  validateProperty(input) {
    if (input.name === "username") {
      if (input.value.trim() === "") return "Username is required";
    }
    if (input.name === "password") {
      if (input.value.trim() === "") return "Password is required";
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const errors = this.validate();
    this.setState({
      errors: errors || {} // instead of returning null if there are no errors it will return an empy object
    });
    if (errors) return;
    // call server
    //save changes
    //then redirect the user
  }

  handleChange({ currentTarget: input }) {
    //validation  //this.validate will validate the entire form, I dont want that
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //onchange to update account state with user input
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account,
      errors
    });
  }

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            id="username"
            value={account.username.value}
            onChange={this.handleChange}
            error={errors.username}
          />
          <FormInput
            name="password"
            id="password"
            value={account.password.value}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
