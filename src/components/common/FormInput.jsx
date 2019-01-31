import React, { Component } from "react";

const FormInput = ({ name, error, label, ...rest }) => {
  return (
    <div className="form-group">
      <label id={name} htmlFor={name}>
        {label}
      </label>
      <input
        autoFocus
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {/* <small className="form-text">Type your {name}..</small> */}

      {error && <div className="alert alert-primary">{error}</div>}
    </div>
  );
};

export default FormInput;
