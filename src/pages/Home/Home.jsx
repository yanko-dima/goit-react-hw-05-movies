import { useState, useEffect } from 'react';
import FilmsList from 'components/FilmsList';
import css from './Home.module.css';
import PageHeading from 'components/PageHeading';
import { getTrendingFilms } from 'servises/films-api';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(responseFilms => setFilms(responseFilms));
  }, []);

  return (
    <main className={css.main}>
      <PageHeading text={'Tranding today'} />
      <FilmsList films={films} />
    </main>
  );
}
