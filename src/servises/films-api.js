const BASE_URL = 'https://developers.themoviedb.org/3/';

export function getTrendingFilms() {
  return 'getTrendingFilms';
}

export function getSearshFilms() {
  return 'getTrendingFilms';
}

// /trending/get-trending список самых популярных фильмов на сегодня 20шт$
// /search/search-movies поиск кинофильма по ключевому слову;
// /movies/get-movie-details запрос полной информации о фильме
// /movies/get-movie-credits запрос информации о актёрском составе
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма
