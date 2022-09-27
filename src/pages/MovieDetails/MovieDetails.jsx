import { getMovieDetails } from 'servises/films-api';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavItem } from './MovieDetails.styled';
import PageHeading from 'components/PageHeading';
import MovieGenres from 'components/MovieGenres';
import css from './MovieDetails.module.css';

const movieNavItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [filmYear, setFilmYear] = useState('');
  const [voteAverage, setVoteAverage] = useState(0);
  const { filmId } = useParams();
  const IMG_BASE_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  let imsSrc = `${IMG_BASE_URL}${movie.poster_path}`;
  const NO_IMG =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

  if (!movie.poster_path) {
    imsSrc = NO_IMG;
  }

  useEffect(() => {
    getMovieDetails(filmId).then(responseMovie => {
      setMovie(responseMovie);
      setFilmYear(responseMovie.release_date.slice(0, 4));
      setVoteAverage(responseMovie.vote_average * 10);
      console.log(responseMovie);
    });
  }, [filmId]);

  return (
    <>
      <button type="button" className={css.goBackBtn}>
        Go back
      </button>
      {movie && (
        <>
          <div className={css.mainInfo}>
            <img
              className={css.movieImg}
              src={imsSrc}
              alt={movie.title}
              width="230"
              height="345"
            />
            <div className={css.filmInfo}>
              <PageHeading text={`${movie.title} (${filmYear})`} />
              <p>Use Score: {`${voteAverage}%`}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <MovieGenres genres={movie.genres} />
            </div>
          </div>

          <div className={css.subInfo}>
            <h4 className={css.h4}>Addition information</h4>
            <nav className={css.nav}>
              {movieNavItems.map(({ href, text }) => (
                <NavItem to={href} key={href}>
                  {text}
                </NavItem>
              ))}
            </nav>
          </div>
        </>
      )}

      <Outlet />
    </>
  );
}
