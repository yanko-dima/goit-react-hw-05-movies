import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/films-api';

export const useCast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  const { slug } = useParams();
  const filmId = slug.match(/[a-z0-9/]+$/)[0];

  useEffect(() => {
    setStatus('loading');
    getMovieCredits(filmId).then(responseCast => {
      setCast(responseCast);
      if (responseCast.length === 0) {
        setStatus('rejected');
        return;
      }
      setStatus('responsed');
    });
  }, [filmId]);

  return { cast, status };
};
