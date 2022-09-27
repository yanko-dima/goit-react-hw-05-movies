import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/films-api';
import CastItem from 'components/CastItem';
import css from './Cast.module.css';
import Loader from 'components/Loader';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  const { filmId } = useParams();

  useEffect(() => {
    setStatus('loading');
    getMovieCredits(filmId).then(responseCast => {
      setCast(responseCast);
      console.log(responseCast);
      if (responseCast.length === 0) {
        setStatus('rejected');
        return;
      }
      setStatus('responsed');
    });
  }, [filmId]);

  return (
    <>
      {status === 'loading' && <Loader />}
      {status === 'rejected' && <p>Cast not found</p>}
      {status === 'responsed' && (
        <ul className={css.castList}>
          {cast.map(({ id, name, profile_path }) => (
            <CastItem key={id} name={name} img={profile_path} />
          ))}
        </ul>
      )}
    </>
  );
}
