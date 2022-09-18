import { getMovieDetails } from 'servises/films-api';
import { useEffect, useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import PageHeading from 'components/PageHeading';

export default function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState();

  const { filmId } = useParams();

  console.log(useParams());

  useEffect(() => {
    getMovieDetails(filmId).then(responseMovie => setMovie(responseMovie));
  }, [filmId]);

  return (
    <>
      <div>
        {/* <div>{movie.img}</div> */}
        <div>
          <PageHeading text={filmId} />
          <p>Use Score</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim
            tempora natus accusamus excepturi quia perspiciatis aliquam magnam!
            Adipisci suscipit nam autem dolorum nisi minima corporis velit
            assumenda illum quod.
          </p>
          <h3>Genres</h3>
          {/* <p>{movie.genres}</p> */}
        </div>
      </div>
      <div>
        <p>Addition information</p>
        <ul>
          {/* <li>
            <Link to={`${movie.cast}`}>Cast</Link>
          </li>
          <li>
            <Link to={`${movie.revievs}`}>Rewievs</Link>
          </li> */}
        </ul>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
