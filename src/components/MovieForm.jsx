import React, { Component } from "react";

const MovieForm = ({ match, history }) => {
  console.log(match);
  return (
    <div>
      <h1>Movie Form</h1>
      <p>{match.params.id}</p>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")} // functionless component so we need to use a call back
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
