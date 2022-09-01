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
    </nav>
  </header>
);

export default Navigation;
