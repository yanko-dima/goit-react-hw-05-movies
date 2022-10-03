import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/films-api';

export const useCast = () => {
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

  return { cast, status };
};
