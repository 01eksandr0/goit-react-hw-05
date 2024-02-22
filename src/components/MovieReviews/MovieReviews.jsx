import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import requests from "../../js/api";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    const addReviews = async () => {
      setLoader(true);
      try {
        const response = await requests.getReviews(id);
        setReviews(response.data.results);
      } catch (error) {
        alert(error);
      } finally {
        setLoader(false);
      }
    };
    addReviews();
  }, [id]);
  return (
    <div>
      {isLoader && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map((i) => (
            <li key={i.id}>
              <h2>Author: {i.author}</h2>
              <p>{i.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
export default MovieReviews;
