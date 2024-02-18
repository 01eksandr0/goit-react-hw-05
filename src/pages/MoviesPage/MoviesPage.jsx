import React, { useEffect, useState } from "react";
import MoviesList from "../../componnents/MoviesList/MoviesList";
import SearchBar from "../../componnents/SearchBar/SearchBar";
import requests from "../../js/api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();
    try {
      const response = await requests.getMoviesByWord(e.target.search.value);
      setMovies(response.data.results);
    } catch (error) {}
  };
  return (
    <div>
      <SearchBar searchMovies={searchMovies} />
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
