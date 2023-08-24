import axios from 'axios';

const API_KEY = '5bf13f442a6612ea903461e28536fdca';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);

  return data;
};

export const getMovieBySearch = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );

  return data;
};

export const getMovieId = async id => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getReviewsMovie = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getCastMovie = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
