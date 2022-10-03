import PageHeading from 'components/PageHeading';
import TrandingFilmsList from 'components/TrandingFilmsList';
import Loader from 'components/Loader';
import { useTrandingFilms } from 'hooks/useTrandingFilms';

export default function Home() {
  const { films, status } = useTrandingFilms();

  return (
    <>
      <PageHeading text={'Tranding today'} />
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <TrandingFilmsList films={films} />}
    </>
  );
}
