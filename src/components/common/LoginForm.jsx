import React from "react";
import Joi from "joi-browser";
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
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {/* <FormInput
            name="username"
            label="Username"
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <FormInput
            name="password"
            label="Password"
            value={data.password.value}
            onChange={this.handleChange}
            error={errors.password}
          /> */}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
