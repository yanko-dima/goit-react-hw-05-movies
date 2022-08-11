import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
// import Container from 'components/Container';

export const App = () => {
  return (
    // <Container>
    //   <AppBar />
    // </Container>
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
