import FilmsItems from 'components/FilmsItems';
import css from './FilmsList.module.css';

export default function FilmsList() {
  return (
    <ul className={css.trandingList}>
      <FilmsItems />
    </ul>
  );
}
