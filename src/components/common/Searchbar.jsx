import React from "react";

const SearhBar = ({ value, onChange }) => {
  return (
    <div class="input-group mb-3">
      <input
        value={value}
        type="text"
        class="form-control my-3"
        placeholder="Search..."
        aria-label="Search..."
        aria-describedby="basic-addon1"
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearhBar;
