import React, { Component } from "react";

const SelectGenre = ({
  genres,
  onGenreSelect,
  currentGenre,
  textProperty,
  valueProperty
}) => {
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          key={genre[valueProperty]}
          onClick={() => onGenreSelect(genre)}
          className={
            genre === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

SelectGenre.defaultProps = {
  textProperty: "name", //this allows me to access the object dynamically, look at selectgenre component for more understanding
  valueProperty: "_id" //this allows me to access the object dynamically, look at selectgenre component for more understanding
};

export default SelectGenre;
