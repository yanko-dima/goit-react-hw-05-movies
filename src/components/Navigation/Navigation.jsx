import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/movieId">MovieDetails</NavLink>
    {/* <NavLink to="*">Autor</NavLink> */}
  </nav>
);

export default Navigation;
