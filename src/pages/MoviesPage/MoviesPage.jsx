import React, { useEffect, useState } from "react";
import MoviesList from "../../componnents/MoviesList/MoviesList";
import SearchBar from "../../componnents/SearchBar/SearchBar";
import requests from "../../js/api";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState(() => {
    const response = JSON.parse(localStorage.getItem("movies")) || [];
    return response;
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovies = async (e) => {
    e.preventDefault();
    setSearchParams({ name: e.target.search.value });
    try {
      const response = await requests.getMoviesByWord(e.target.search.value);
      setMovies(response.data.results);
      localStorage.setItem("movies", JSON.stringify(response.data.results));
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
