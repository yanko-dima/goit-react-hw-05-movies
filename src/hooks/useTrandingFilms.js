import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'servises/films-api';

export const useTrandingFilms = () => {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState('ilde');

  useEffect(() => {
    setStatus('loading');
    getTrendingFilms().then(responseFilms => {
      setFilms(responseFilms);
      setStatus('resolved');
    });
  }, []);

  return { films, status };
};
