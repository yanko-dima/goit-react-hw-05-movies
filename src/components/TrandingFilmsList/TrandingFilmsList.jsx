import TrandingFilmsItem from 'components/TrandingFilmsItem';
import css from './TrandingFilmsList.module.css';

export default function TrandingFilmsList({ films }) {
  return (
    <>
      {films && (
        <ul className={css.list}>
          {films.map(({ id, title }) => (
            <TrandingFilmsItem key={id} title={title} filmId={id} />
          ))}
        </ul>
      )}
    </>
  );
}
