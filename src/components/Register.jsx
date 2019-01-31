import React, { Component } from "react";
import Joi from "joi-browser";
import FormInput from "./common/FormInput";
import Form from "./common/Form";

class Register extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: "", password: "", name: "" },
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("First Name")
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
        <h1>Register</h1>
        <form onClick={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
