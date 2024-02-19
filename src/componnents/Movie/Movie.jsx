import React from "react";
import css from "./Movie.module.css";
import image from "../../img/no-result.jpeg";

const Movie = ({ movie }) => {
  return (
    <div className={css.movie}>
      <img
        src={
          movie.backdrop_path
            ? "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
            : image
        }
        alt=""
        width={170}
        height={170}
      />
      <h2>{movie.title}</h2>
    </div>
  );
};
export default Movie;
