import React, { useEffect, useState } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import requests from "../../js/api";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setLoader] = useState(false);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setLoader(true);
    setSearchParams({ name: value });
    const searchMovies = async () => {
      try {
        const response = await requests.getMoviesByWord(value);
        setMovies(response.data.results);
      } catch (error) {
        alert(error);
      } finally {
        setLoader(false);
      }
    };
    searchMovies();
  }, [value]);

  const changeValue = (e) => {
    e.preventDefault();
    setValue(e.target.search.value);
  };
  return (
    <div>
      <SearchBar searchMovies={changeValue} />
      {isLoader && <Loader />}
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
