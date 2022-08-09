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
    <NavLink to="/about" className={css.link} activeClassName={css.activeLink}>
      About
    </NavLink>
    <NavLink to="/autor" className={css.link} activeClassName={css.activeLink}>
      Autor
    </NavLink>
    {/* <NavLink to="*">Autor</NavLink> */}
  </nav>
);

export default Navigation;
