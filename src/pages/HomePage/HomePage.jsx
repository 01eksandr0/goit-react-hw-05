import React, { useEffect, useState } from "react";
import requests from "../../js/api";
import MoviesList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const a = async () => {
      try {
        const response = await requests.getTrendMovies();
        setMovies(response.data.results);
      } catch (error) {
        const notify = () => toast.error(error.message);
        notify();
      }
    };
    a();
  }, []);

  return (
    <div className={css.home}>
      <h1 className={css.title}>Trending today</h1>
      {movies.length !== 0 && <MoviesList movies={movies} />}
      <Toaster />
    </div>
  );
};
export default HomePage;
