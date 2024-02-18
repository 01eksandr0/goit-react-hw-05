import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import requests from "../../js/api";
import { FaArrowLeft } from "react-icons/fa";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const createData = async () => {
      const response = await requests.getDetailsMovie(id);
      setMovie(response.data);
    };
    createData();
  }, []);
  return (
    <div className={css.container}>
      <Link to="/" className={css.linkBack}>
        <FaArrowLeft /> Go back
      </Link>
      {movie.genres && (
        <div className={css.infContainer}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt=""
          />
          <div className={css.textList}>
            <h1>{movie.original_title}</h1>
            <p>User Score: {parseInt(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map((i) => i.name + " ")}</p>
          </div>
        </div>
      )}
      <div className={css.info}>
        <h2>Additional Information</h2>
      </div>
      <ul className={css.linkList}>
        <li>
          <Link to={"movies/" + id + "/cast"}>Cast</Link>
        </li>
        <li>
          <Link to={"movies/" + id + "/reviews"}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
