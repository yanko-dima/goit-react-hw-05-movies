import { Outlet } from 'react-router-dom';
import { NavItem } from './MovieDetails.styled';
import PageHeading from 'components/PageHeading';
import MovieGenres from 'components/MovieGenres';
import Loader from 'components/Loader';
import { useMovieDetails } from 'hooks/useMovieDetails';
import { movieNavItems } from 'servises/movieNavItems';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const { filmYear, voteAverage, status, imsSrc, movie } = useMovieDetails();

  return (
    <>
      {status === 'loading' && <Loader />}
      {status === 'resolved' && (
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
