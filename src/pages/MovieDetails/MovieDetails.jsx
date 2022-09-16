import { getMovieDetails } from 'servises/films-api';
import { useEffect, useState } from 'react';
import PageHeading from 'components/PageHeading';

export default function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovieDetails(movieId).then(responseMovie => setMovie(responseMovie));
  }, [movieId]);

  console.log('movie: ', movie);

  return (
    <>
      <div>
        <div>{movie.img}</div>
        <div>
          <PageHeading text={movie.title} />
          <p>Use Score</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim
            tempora natus accusamus excepturi quia perspiciatis aliquam magnam!
            Adipisci suscipit nam autem dolorum nisi minima corporis velit
            assumenda illum quod.
          </p>
          <h3>Genres</h3>
          <p>{movie.genres}</p>
        </div>
      </div>
      <div>
        <p>Addition information</p>
        <ul>
          <li>Cast</li>
          <li>Reviewe</li>
        </ul>
      </div>
    </>
  );
}
