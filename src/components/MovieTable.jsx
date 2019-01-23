import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "../components/common/Like";
import Table from "../components/common/Table";

class MovieTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          path: "title",
          label: "Title",
          content: movie => (
            <Link to={`/movies/${movie._id}`}>{movie.title}</Link> // will need a make a route now for movies and id
          )
        },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        {
          key: "like",
          content: movie => (
            <Like
              liked={movie.liked}
              onClick={() => this.props.onHandleLike(movie)}
            />
          )
        }, // two  empty objects are for like and delete button // we add a key for the key in map error
        {
          key: "delete",
          content: movie => (
            <button
              onClick={() => this.props.onDelete(movie)}
              className="btn btn-danger"
            >
              Delete
            </button>
          )
        } // you can see in the map iin tableheader i use key as column.path or column key
      ]
    };
  }
  render() {
    const {
      paginateMovies,
      // onHandleLike,
      // onDelete,
      onSort,
      sortColumn
    } = this.props;
    // console.log(this.props);
    return (
      <Table
        data={paginateMovies}
        // onHandleLike={onHandleLike}
        // onDelete={onDelete}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.state.columns}
      />
    );
  }
}

export default MovieTable;
