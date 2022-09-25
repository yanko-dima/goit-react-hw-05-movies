import { Link } from 'react-router-dom';
import css from './TrandingFilmsItem.module.css';

export default function TrandingFilmsItem({ title, filmId }) {
  return (
    <>
      <li className={css.item}>
        <Link to={`movies/${filmId}`}>{title}</Link>
      </li>
    </>
  );
}
