import React from "react";

const SelectDropDown = ({ name, label, error, options, ...rest }) => {
  //every genre has a _id, remeber options are this.state.genres
  //options are genres
  return (
    <div class="form-group">
      <label for={name}>{label}</label>
      <select name={name} {...rest} class="form-control" id={name}>
        <option value="" />
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>

      {error && <div className="alert alert-primary">{error}</div>}
    </div>
  );
};

export default SelectDropDown;
