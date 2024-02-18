import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const getTrendMovies = async () => {
  try {
    const response = await apiInstance.get("trending/movie/day", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDk3YWNmY2JiMDUzYjBlODcwMmZhZDY1Mzc0OTM4ZiIsInN1YiI6IjY1ZDBhZjZjMWQzMTQzMDE4NGJhMWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-BvX4OF2A1Bvvo_nFUQyFPBFoWdgy3JZZJ61-IhEeLc",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesByWord = async (query) => {
  try {
    const response = await apiInstance.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDk3YWNmY2JiMDUzYjBlODcwMmZhZDY1Mzc0OTM4ZiIsInN1YiI6IjY1ZDBhZjZjMWQzMTQzMDE4NGJhMWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-BvX4OF2A1Bvvo_nFUQyFPBFoWdgy3JZZJ61-IhEeLc",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getDetailsMovie = async (id) => {
  try {
    const response = await apiInstance.get(`movie/${id}?language=en-US`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDk3YWNmY2JiMDUzYjBlODcwMmZhZDY1Mzc0OTM4ZiIsInN1YiI6IjY1ZDBhZjZjMWQzMTQzMDE4NGJhMWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-BvX4OF2A1Bvvo_nFUQyFPBFoWdgy3JZZJ61-IhEeLc",
      },
    });
    return response;
  } catch (error) {}
};

const getCast = async (id) => {
  try {
    const response = await apiInstance.get(
      `movie/${id}/credits?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDk3YWNmY2JiMDUzYjBlODcwMmZhZDY1Mzc0OTM4ZiIsInN1YiI6IjY1ZDBhZjZjMWQzMTQzMDE4NGJhMWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-BvX4OF2A1Bvvo_nFUQyFPBFoWdgy3JZZJ61-IhEeLc",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getReviews = async (id) => {
  try {
    const response = await apiInstance.get(
      `movie/${id}/reviews?language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDk3YWNmY2JiMDUzYjBlODcwMmZhZDY1Mzc0OTM4ZiIsInN1YiI6IjY1ZDBhZjZjMWQzMTQzMDE4NGJhMWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-BvX4OF2A1Bvvo_nFUQyFPBFoWdgy3JZZJ61-IhEeLc",
        },
      }
    );
    return response;
  } catch (error) {}
};

const requests = {
  getTrendMovies,
  getMoviesByWord,
  getDetailsMovie,
  getCast,
  getReviews,
};

export default requests;
