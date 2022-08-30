import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Navigation from 'components/Navigation';

export default function Layout() {
  return (
    <>
      <Navigation />
      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
}
