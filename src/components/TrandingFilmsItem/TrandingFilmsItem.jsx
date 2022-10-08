import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import css from './TrandingFilmsItem.module.css';

export default function TrandingFilmsItem({ title, filmId, poster }) {
  const IMG_BASE_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  const location = useLocation();
  const href = slugify(`${title} ${filmId}`, { lower: true });

  return (
    <>
      <li className={css.item}>
        <Link to={`movies/${href}`} state={{ from: location }}>
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
