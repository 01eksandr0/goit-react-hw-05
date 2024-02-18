import React from "react";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((item) => (
        <li key={item.id}>
          <Link to={"/movies/" + item.id}>
            <Movie movie={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
