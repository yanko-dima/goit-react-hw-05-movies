import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const Navigation = () => (
  <header>
    <nav className={css.nav}>
      {navItems.map(({ href, text }) => (
        <Link className={css.link} to={href} key={href}>
          {text}
        </Link>
      ))}
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink> */}
      {/* <NavLink to="/movieId">MovieDetails</NavLink> */}
      {/* <NavLink to="*">Autor</NavLink> */}
    </nav>
  </header>
);

export default Navigation;
