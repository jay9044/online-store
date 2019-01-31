import React, { Component } from "react";
import Joi from "joi-browser";
import FormInput from "./FormInput";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {}
    };
  }

  validateForm() {
    //validate the whole form
    const { data } = this.state;
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, this.schema, options);

    const errors = {};
    if (!error) return null;

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  // validate each input field
  validateProperty({ name, value }) {
    // destructuring the name and value of the input
    // create a new object because using joi.validate with state data will validate entire form
    const obj = { [name]: value }; //dynamically use name, as set its value// e.g username or password // computed propertie es6
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }

  handleSubmit(event) {
    event.preventDefault();

    const errors = this.validateForm();
    this.setState({
      errors: errors || {} // instead of returning null if there are no errors it will return an empy object
    });
    if (errors) return;

    // call server
    this.doSubmit();
  }

  handleChange({ currentTarget: input }) {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //onchange to update data state with user input
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({
      data,
      errors
    });
  }

  renderButton(label) {
    return (
      <button disabled={this.validateForm()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <FormInput
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
