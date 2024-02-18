import React from "react";
import css from "./Movie.module.css";

const Movie = ({ movie }) => {
  return (
    <div className={css.movie}>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
        width={170}
        height={170}
      />
      <h2>{movie.title}</h2>
    </div>
  );
};
export default Movie;
