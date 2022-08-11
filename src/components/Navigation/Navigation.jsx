import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? css.link : css.activeLink)}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={({ isActive }) => (isActive ? css.link : css.activeLink)}
    >
      Movies
    </NavLink>
    <NavLink
      to="/movieId"
      className={({ isActive }) => (isActive ? css.link : css.activeLink)}
    >
      MovieDetails
    </NavLink>
    {/* <NavLink to="*">Autor</NavLink> */}
  </nav>
);

export default Navigation;
