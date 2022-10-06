import { Link } from 'react-router-dom';
import css from './BackButton.module.css';

export default function BackButton({ pathname, search }) {
  return (
    <>
      <button className={css.backBtn} type="button">
        <span className={css.btnIcon}>&#x261A;</span>
        <Link to={search ? `${pathname}${search}` : `${pathname}`}>
          Go back
        </Link>
      </button>
    </>
  );
}
