import React, { useEffect, useState } from "react";
import requests from "../../js/api";
import MoviesList from "../../componnents/MoviesList/MoviesList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const a = async () => {
      try {
        const response = await requests.getTrendMovies();
        setMovies(response.data.results);
      } catch (error) {}
    };
    a();
  }, []);

  return (
    <div className={css.home}>
      <h1 className={css.title}>Trending today</h1>
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
};
export default HomePage;
