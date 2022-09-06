import FilmsList from 'components/FilmsList';
import SearchForm from 'components/SearchForm';
import css from './Movies.module.css';

export default function Movies() {
  return (
    <main className={css.main}>
      <SearchForm />
      <FilmsList />
    </main>
  );
}
