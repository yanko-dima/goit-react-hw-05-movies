import { Link } from 'react-router-dom';
import css from './FilmsItem.module.css';

export default function FilmsItem({ title, filmId }) {
  return (
    <>
      <li className={css.item}>
        <Link to={`${filmId}`}>{title}</Link>
      </li>
    </>
  );
}
