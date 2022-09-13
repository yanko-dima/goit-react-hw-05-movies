import FilmsList from 'components/FilmsList';
import SearchForm from 'components/SearchForm';
import css from './Movies.module.css';

export default function Movies({ onSubmit }) {
  return (
    <main className={css.main}>
      <SearchForm onSubmit={onSubmit} />
      <FilmsList />
    </main>
  );
}
