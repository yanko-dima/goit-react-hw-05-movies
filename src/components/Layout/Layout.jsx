import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation';
import css from './Layout.module.css';
import Loader from 'components/Loader';

export default function Layout() {
  return (
    <>
      <Navigation />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
