import React, { useEffect, useState } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import requests from "../../js/api";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name");
  const location = useLocation();
  useEffect(() => {
    if (!movieName) return;
    setLoader(true);
    const searchMovies = async () => {
      try {
        const response = await requests.getMoviesByWord(movieName);
        setMovies(response.data.results);
      } catch (error) {
        const notify = () => toast.error(error.message);
        notify();
      } finally {
        setLoader(false);
      }
    };
    searchMovies();
  }, [movieName]);

  const changeValue = (e) => {
    e.preventDefault();
    const nextParams =
      e.target.search.value !== "" ? { name: e.target.search.value } : {};
    setSearchParams(nextParams);
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
