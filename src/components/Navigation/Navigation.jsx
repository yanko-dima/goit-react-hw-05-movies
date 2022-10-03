import { NavItem } from 'components/Navigation/Navigation.styled';
import { navItems } from 'servises/navItems';
import css from './Navigation.module.css';

const Navigation = () => (
  <header className={css.header}>
    <nav className={css.nav}>
      {navItems.map(({ href, text }) => (
        <NavItem to={href} key={href}>
          {text}
        </NavItem>
      ))}
    </nav>
  </header>
);

export default Navigation;
