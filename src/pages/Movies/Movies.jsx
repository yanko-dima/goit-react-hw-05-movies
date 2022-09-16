import { useState, useEffect } from 'react';
import { getSearshFilms } from 'servises/films-api';
import FilmsList from 'components/FilmsList';
import SearchForm from 'components/SearchForm';
import css from './Movies.module.css';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    getSearshFilms(searchQuery).then(responseFilms => setFilms(responseFilms));
  }, [searchQuery]);

  const formHandleSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <main className={css.main}>
      <SearchForm onSubmit={formHandleSubmit} />
      <FilmsList films={films} />
    </main>
  );
}
