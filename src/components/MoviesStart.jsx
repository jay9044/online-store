import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import paginate from "../utils/paginate";
import SelectGenre from "../components/common/SelectGenre";
import Pagination from "../components/common/Pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./MovieTable";
import SearhBar from "./common/Searchbar";

class MoviesStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      pageSize: 4, // amount of movies we want on each page
      currentPage: 1,
      currentGenre: null,
      searchQuery: "",
      sortColumn: { path: "title", order: "asc" }
    };
    this.handleOnPageChange = this.handleOnPageChange.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()]; // add a all generes objects to get genres array // though note i didnt give it an id / gave it and empty to for a key in array error

    this.setState({
      movies: getMovies(),
      genres
    });
  }

  handleSearch(query) {
    this.setState({
      searchQuery: query,
      currentGenre: null,
      currentPage: 1
    });
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies
    });
    console.log(movies);
  }

  handleDeleteMovie(movie) {
    //get all the movies except the movie passed in as the argument
    const movies = this.state.movies.filter(film => film._id !== movie._id); // filter it out of thr array
    this.setState({
      movies // the same as doing movies: movies
    });
  }

  handleOnPageChange(page) {
    this.setState({
      currentPage: page
    });
  }

  handleGenreSelect(genre) {
    console.log(genre._id);

    // const movies = this.state.movies.filter(
    //   film => film.genre.name == genre.name
    // );
    this.setState({
      currentGenre: genre,
      currentPage: 1,
      searchQuery: ""
      // movies
    });
  }

  handleSort(sortColumn) {
    // this.setState({ sortColumn: { path, order: "asc" } }); //old code

    // const sortColumn = { ...this.state.sortColumn }; //clone the object
    // if (sortColumn.path === path)
    //   sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    // else {
    //   sortColumn.path = path;
    //   sortColumn.order = "asc";
    // }

    this.setState({
      sortColumn
    });
  }

  getPageData() {
    const {
      pageSize,
      currentPage,
      movies,

      currentGenre,
      sortColumn,
      searchQuery
    } = this.state;

    // we filter, then sort then paginate

    let filtered = movies;

    if (searchQuery)
      filtered = movies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (currentGenre && currentGenre._id)
      filtered = movies.filter(m => m.genre._id === currentGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]); // built in lodash function

    const paginateMovies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: paginateMovies };
  }

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      genres,
      currentGenre,
      sortColumn,
      searchQuery
    } = this.state;
    // console.log(count);

    const { totalCount, data } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <SelectGenre
            genres={genres}
            currentGenre={currentGenre}
            onGenreSelect={this.handleGenreSelect}
            // textProperty="name" //this allows me to access the object dynamically, look at selectgenre component for more understanding
            // valueProperty="_id" //this allows me to access the object dynamically, look at selectgenre component for more understanding
          />
        </div>
        <div className="col">
          {count === 0 ? (
            <h1>There are no movies</h1>
          ) : (
            <div>
              <Link className="btn btn-primary" to="/movies/new">
                New Movie
              </Link>

              <h1>Showing {totalCount} in the database</h1>
              <SearhBar value={searchQuery} onChange={this.handleSearch} />
              <MovieTable
                paginateMovies={data}
                onHandleLike={this.handleLike}
                onDelete={this.handleDeleteMovie}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
              <Pagination
                itemCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handleOnPageChange}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MoviesStart;
