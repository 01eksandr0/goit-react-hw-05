import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import requests from "../../js/api";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const addReviews = async () => {
      try {
        const response = await requests.getReviews(id);
        setReviews(response.data.results);
      } catch (error) {}
    };
    addReviews();
  }, []);
  return (
    <div>
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
