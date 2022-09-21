import { getMovieDetails } from 'servises/films-api';
import { useEffect, useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import PageHeading from 'components/PageHeading';
// import Cast from 'components/Cast';

export default function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState({});
  // const [genres, setGenres] = useState([]);
  // const { title, popularity, overview, genres } = movie;
  // console.log(movie.genres);
  const { filmId } = useParams();
  const IMG_BASE_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  useEffect(() => {
    getMovieDetails(filmId).then(responseMovie => setMovie(responseMovie));
    // console.log(movie);
    // console.log(genres);
    // getGenres();
  }, [filmId]);

  const getGenres = () => {
    if (movie) {
      movie.genres.map(genre => console.log(genre.name));
    }
  };

  return (
    <>
      {movie && (
        <div>
          <img
            src={`${IMG_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            width="300"
            height="450"
          />
          <div>
            <PageHeading text={movie.title} />
            <p>Use Score: {movie.popularity}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {/* <p>{movie.genres}</p> */}
          </div>

          <div>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <hr />
      <Outlet />
    </>
  );
}
