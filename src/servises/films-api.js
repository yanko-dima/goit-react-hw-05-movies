import axios from 'axios';

const BASE_URL = 'https://developers.themoviedb.org/3/';
const API_KEY = '31d9568154610e832478c1f68bfe46b9';

export function getTrendingFilms() {
  return axios
    .get(`${BASE_URL}tranding/movie/day/?api_key=${API_KEY}&`)
    .then(response => console.log(response));
}

// export function getSearshFilms(searchQuery = '', pageSize = 20) {
//   return axios
//     .get(`${BASE_URL}tranding/movie/day/?api_key=${API_KEY}&`)
//     .then(response => console.log(response));
// }

export default function getMovieDetails() {
  return 'getMovieDetails';
}

// /trending/get-trending список самых популярных фильмов на сегодня 20шт$
// /search/search-movies поиск кинофильма по ключевому слову;
// /movies/get-movie-details запрос полной информации о фильме
// /movies/get-movie-credits запрос информации о актёрском составе
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма
