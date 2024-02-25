import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import requests from "../../js/api";
import { FaArrowLeft } from "react-icons/fa";
import css from "./MovieDetailsPage.module.css";
import image from "../../img/no-result.jpeg";
import toast, { Toaster } from "react-hot-toast";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const createData = async () => {
      try {
        const response = await requests.getDetailsMovie(id);
        setMovie(response.data);
      } catch (error) {
        const notify = () => toast.error(error.message);
        notify();
      }
    };
    createData();
  }, [id]);
  const location = useLocation();
  const linkRef = useRef(location.state?.from ?? "/");
  return (
    <div className={css.container}>
      <NavLink to={linkRef.current} className={css.linkBack}>
        <FaArrowLeft /> Go back
      </NavLink>
      {movie.genres && (
        <div className={css.infContainer}>
          {
            <img
              src={
                movie.backdrop_path
                  ? "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                  : image
              }
              alt=""
            />
          }

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
          <NavLink to={"cast"}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={"reviews"}>Reviews</NavLink>
        </li>
      </ul>
      <Toaster />
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
