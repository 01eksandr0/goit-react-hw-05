import React, { useEffect, useState } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import requests from "../../js/api";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setLoader(true);
    const searchMovies = async () => {
      try {
        const response = await requests.getMoviesByWord(searchParams);
        setMovies(response.data.results);
      } catch (error) {
        const notify = () => toast.error(error.message);
        notify();
      } finally {
        setLoader(false);
      }
    };
    searchMovies();
  }, [searchParams]);

  const changeValue = (e) => {
    e.preventDefault();
    setSearchParams({ name: e.target.search.value });
  };
  return (
    <div>
      <SearchBar searchMovies={changeValue} />
      {isLoader && <Loader />}
      <Toaster />
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
