import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieDetails from 'pages/MovieDetails';
import Credits from 'components/Credits';
import Reviews from 'components/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            {/* <Route path=":filmId" element={<MovieDetails />} /> */}
          </Route>
          <Route path="movies/:filmId" element={<MovieDetails />}>
            <Route path=":credits" element={<Credits />} />
            <Route path=":rewievs" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
