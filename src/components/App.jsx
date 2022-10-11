import { lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('components/Reviews'));
const Cast = lazy(() => import('components/Cast'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:slug" element={<MovieDetails />}>
            <Route
              path=":movieNav"
              element={pathname.includes('cast') ? <Cast /> : <Reviews />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
