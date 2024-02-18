import React, { useEffect, useState } from "react";
import requests from "../../js/api";
import { useParams } from "react-router";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const addActors = async () => {
      try {
        const response = await requests.getCast(id);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    addActors();
  }, []);
  return (
    <div className={css.block}>
      {cast.length !== 0 && (
        <ul className={css.list}>
          {cast.map((i) => (
            <li key={i.id}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + i.profile_path}
                alt=""
                height={120}
                width={100}
              />
              <p>{i.name}</p>
              {i.character && <p>Character: {i.character}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieCast;
