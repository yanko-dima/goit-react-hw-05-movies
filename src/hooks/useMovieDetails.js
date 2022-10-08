import { getMovieDetails } from 'servises/films-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useMovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [filmYear, setFilmYear] = useState('');
  const [voteAverage, setVoteAverage] = useState(0);
  const [status, setStatus] = useState('idle');
  const { slug } = useParams();
  const IMG_BASE_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  let imsSrc = `${IMG_BASE_URL}${movie.poster_path}`;
  const NO_IMG =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  const filmId = slug.match(/[a-z0-9/]+$/)[0];

  if (!movie.poster_path) {
    imsSrc = NO_IMG;
  }

  console.log(slug.match(/[a-z0-9/]+$/)[0]);

  useEffect(() => {
    setStatus('loading');
    getMovieDetails(filmId).then(responseMovie => {
      setMovie(responseMovie);
      setFilmYear(responseMovie.release_date.slice(0, 4));
      setVoteAverage(Math.round(responseMovie.vote_average * 10));
      setStatus('resolved');
    });
  }, [filmId]);

  return { filmYear, voteAverage, status, imsSrc, movie };
};
