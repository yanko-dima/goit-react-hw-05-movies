import { Link } from 'react-router-dom';
import css from './TrandingFilmsItem.module.css';

export default function TrandingFilmsItem({ title, filmId, poster }) {
  const IMG_BASE_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  return (
    <>
      <li className={css.item}>
        <Link to={`movies/${filmId}`}>
          <div className={css.imgWrapper}>
            <img
              src={`${IMG_BASE_URL}${poster}`}
              alt={title}
              width="50"
              height="75"
            />
          </div>
          {title}
        </Link>
      </li>
    </>
  );
}
