import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import css from './Layout.module.css';

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
