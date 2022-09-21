import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/films-api';
import CastItem from 'components/CastItem';

export default function Cast() {
  const [cast, setCast] = useState([]);

  const { filmId } = useParams();

  useEffect(() => {
    getMovieCredits(filmId).then(responseCast => setCast(responseCast));
  }, [filmId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name }) => (
            <CastItem key={id} name={name} />
          ))}
        </ul>
      )}
    </>
  );
}
