import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieDetails from 'pages/MovieDetails';
import Reviews from 'components/Reviews';
import Cast from 'components/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:filmId" element={<MovieDetails />}>
            <Route path=":cast" element={<Cast />} />
            <Route path=":reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
