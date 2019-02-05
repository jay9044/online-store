import React from "react";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import Form from "./common/Form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
class MovieForm extends Form {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
      errors: {},
      genres: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  componentDidMount() {
    const genres = getGenres();

    this.setState({
      genres
    });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return; // dont need to populate the form with an exisiting movie object

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    // create a object with the only the data I need
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit() {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onClick={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate")}
          {this.renderButton("Save Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
