import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieDetails from 'pages/MovieDetails';
import Reviews from 'components/Reviews';
import Cast from 'components/Cast';

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
