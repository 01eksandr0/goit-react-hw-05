import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import requests from "../../js/api";
import { FaArrowLeft } from "react-icons/fa";
import css from "./MovieDetailsPage.module.css";
import image from "../../img/no-result.jpeg";

const MovieDetailsPage = ({ backLinkHref }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [pages, setPages] = useState(1);
  const addPage = () => setPages(pages + 1);
  const navigate = useNavigate();
  useEffect(() => {
    const createData = async () => {
      const response = await requests.getDetailsMovie(id);
      setMovie(response.data);
    };
    createData();
  }, []);
  return (
    <div className={css.container}>
      <button onClick={() => navigate(-pages)} className={css.linkBack}>
        <FaArrowLeft /> Go back
      </button>

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
          <Link to={"movies/" + id + "/cast"} onClick={addPage}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={"movies/" + id + "/reviews"} onClick={addPage}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
