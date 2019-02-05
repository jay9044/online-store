import React from "react";

const Like = ({ onClick, liked }) => {
  let classes = "fa fa-";
  classes += !liked ? "heart-o" : "heart";
  return (
    <React.Fragment>
      <i
        style={{ cursor: "pointer" }}
        onClick={onClick}
        className={classes}
        aria-hidden="true"
      />
    </React.Fragment>
  );
};

export default Like;
