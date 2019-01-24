import React, { Component } from "react";

const FormInput = ({ name, value, onChange, label }) => {
  return (
    <div className="form-group">
      <label id={name} htmlFor={name}>
        {label}
      </label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type="text"
        className="form-control"
      />
      <small className="form-text">Type your {name}..</small>
    </div>
  );
};

export default FormInput;
