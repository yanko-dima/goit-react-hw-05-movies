import { Link } from 'react-router-dom';
import css from './BackButton.module.css';

export default function BackButton({ location }) {
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(backLinkHref);
  console.log(location);

  return (
    <>
      <button className={css.backBtn} type="button">
        <Link to={backLinkHref}>
          <span className={css.btnIcon}>&#x261A;</span> Go back
        </Link>
      </button>
    </>
  );
}
