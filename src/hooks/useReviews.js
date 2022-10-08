import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/films-api';

export const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  const { slug } = useParams();
  const filmId = slug.match(/[a-z0-9/]+$/)[0];

  useEffect(() => {
    setStatus('loading');
    getMovieReviews(filmId).then(responseReviews => {
      setReviews(responseReviews);
      if (responseReviews.length === 0) {
        setStatus('rejected');
        return;
      }
      setStatus('responsed');
    });
  }, [filmId]);

  return { reviews, status };
};
