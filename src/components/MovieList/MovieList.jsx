import React from "react";
import { Link, useLocation } from "react-router-dom";
import Movie from "../Movie/Movie";
import css from "./MovieList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((item) => (
        <li key={item.id}>
          <Link to={"/movies/" + item.id} state={{ from: location }}>
            <Movie movie={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
