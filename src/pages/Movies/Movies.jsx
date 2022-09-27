import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearshFilms } from 'servises/films-api';
import FilmsList from 'components/FilmsList';
import SearchForm from 'components/SearchForm';
import MoviePlaceholder from 'components/MoviePlaceholder';
import Loader from 'components/Loader/Loader';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setStatus('loading');
    getSearshFilms(searchQuery).then(responseFilms => {
      console.log(responseFilms.length);
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

  return (
    <>
      <SearchForm onSubmit={formHandleSubmit} />
      {status === 'idle' && <MoviePlaceholder />}
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <FilmsList films={films} />}
    </>
  );
}
