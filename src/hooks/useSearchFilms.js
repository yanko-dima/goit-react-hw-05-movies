import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getSearshFilms } from 'servises/films-api';

export const useSearchFilms = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setStatus('loading');
    getSearshFilms(searchQuery).then(responseFilms => {
      if (responseFilms.length === 0) {
        toast.info('No films for your request');
      }
      setFilms(responseFilms);
      setStatus('resolved');
    });
  }, [searchQuery]);

  const formHandleSubmit = query => {
    setSearchQuery(query);
  };

  return { films, status, formHandleSubmit };
};
