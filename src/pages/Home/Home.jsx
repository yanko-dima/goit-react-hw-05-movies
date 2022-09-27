import { useState, useEffect } from 'react';
import PageHeading from 'components/PageHeading';
import { getTrendingFilms } from 'servises/films-api';
import TrandingFilmsList from 'components/TrandingFilmsList';
import Loader from 'components/Loader';

export default function Home() {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState('ilde');

  useEffect(() => {
    setStatus('loading');
    getTrendingFilms().then(responseFilms => {
      setFilms(responseFilms);
      setStatus('resolved');
    });
  }, []);

  return (
    <>
      <PageHeading text={'Tranding today'} />
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <TrandingFilmsList films={films} />}
    </>
  );
}
