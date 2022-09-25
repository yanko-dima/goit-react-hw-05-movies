import { useState, useEffect } from 'react';
// import FilmsList from 'components/FilmsList';
import PageHeading from 'components/PageHeading';
import { getTrendingFilms } from 'servises/films-api';
import TrandingFilmsList from 'components/TrandingFilmsList';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(responseFilms => setFilms(responseFilms));
  }, []);

  return (
    <>
      <PageHeading text={'Tranding today'} />
      <TrandingFilmsList films={films} />
    </>
  );
}
