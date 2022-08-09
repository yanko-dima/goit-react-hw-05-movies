import Navigation from 'components/Navigation';
import css from './AppBar.module.css';

const AppBar = () => (
  <header className={css.header}>
    <Navigation />
  </header>
);

export default AppBar;
