import { Link, useLocation } from 'react-router-dom';
import css from './FilmsItem.module.css';

export default function FilmsItem({ title, filmId, poster }) {
  const IMG_BASE_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  let imsSrc = `${IMG_BASE_URL}${poster}`;
  const NO_IMG =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  const location = useLocation();

  if (!poster) {
    imsSrc = NO_IMG;
  }

  return (
    <>
      <li className={css.item}>
        <Link to={`${filmId}`} state={{ from: location }}>
          <div className={css.imgWrapper}>
            <img
              className={css.posterImg}
              src={imsSrc}
              alt={title}
              width="60"
              height="90"
            />
          </div>
          {title}
        </Link>
      </li>
    </>
  );
}
