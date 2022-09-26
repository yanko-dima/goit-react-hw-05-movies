import FilmsItem from 'components/FilmsItem';
import css from './FilmsList.module.css';

export function FilmsList({ films }) {
  return (
    <>
      {films && (
        <ul className={css.list}>
          {films.map(({ id, title, poster_path }) => (
            <FilmsItem
              key={id}
              title={title}
              filmId={id}
              poster={poster_path}
            />
          ))}
        </ul>
      )}
    </>
  );
}
