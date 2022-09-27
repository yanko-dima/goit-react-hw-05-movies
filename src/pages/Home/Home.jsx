import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import PageHeading from 'components/PageHeading';
import { getTrendingFilms } from 'servises/films-api';
import TrandingFilmsList from 'components/TrandingFilmsList';
import css from './Home.module.css';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(responseFilms => setFilms(responseFilms));
  }, []);

  return (
    <>
      {!films && (
        <TailSpin
          color="#032541"
          width="50"
          height="50"
          ariaLabel="tail-spin-loading"
          wrapperClass={css.loaderWrapper}
        />
      )}

      {films && (
        <>
          <PageHeading text={'Tranding today'} />
          <TrandingFilmsList films={films} />
        </>
      )}
    </>
  );
}
