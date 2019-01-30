import React, { Component } from "react";
import Joi from "joi-browser";
import FormInput from "./FormInput";
import Form from "./Form";

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: "", password: "" },
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit() {
    //call the server
    //save changes
    //then redirect the user
    console.log("submitted");
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            id="username"
            value={data.username.value}
            onChange={this.handleChange}
            error={errors.username}
          />
          <FormInput
            name="password"
            id="password"
            value={data.password.value}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validateForm()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
