import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '31d9568154610e832478c1f68bfe46b9';

// /trending/get-trending список самых популярных фильмов на сегодня
export function getTrendingFilms() {
  return axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
}

// /search/search-movies поиск кинофильма по ключевому слову
export function getSearshFilms(searchQuery) {
  return axios
    .get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
    .then(response => response.data.results);
}

// /movies/get-movie-details запрос полной информации о фильме
export function getMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(response => response.data.results);
}

// /movies/get-movie-credits запрос информации о актёрском составе
export function getMovieCredits(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data.results);
}

// /movies/get-movie-reviews запрос обзоров для страницы кинофильма
export function getMovieReviews(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => response.data.results);
}
