import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/films-api';

export default function Reviews() {
  // const [reviews, setReviews] = useState();

  const { filmId } = useParams();

  useEffect(() => {
    getMovieReviews(filmId);
  }, [filmId]);

  return (
    <>
      <p>Reviews</p>
    </>
  );
}
