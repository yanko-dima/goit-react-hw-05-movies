import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
// import NotFound from 'pages/NotFound';
// import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const formHandleSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="movies"
            element={<Movies onSubmit={formHandleSubmit} />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
