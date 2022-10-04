import 'react-toastify/dist/ReactToastify.css';
import FilmsList from 'components/FilmsList';
import SearchForm from 'components/SearchForm';
import MoviePlaceholder from 'components/MoviePlaceholder';
import Loader from 'components/Loader/Loader';
import { useSearchFilms } from 'hooks/useSearchFilms';

export default function Movies() {
  const { films, status, formHandleSubmit } = useSearchFilms();

  return (
    <>
      <SearchForm onSubmit={formHandleSubmit} />
      {status === 'idle' && <MoviePlaceholder />}
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <FilmsList films={films} />}
    </>
  );
}
