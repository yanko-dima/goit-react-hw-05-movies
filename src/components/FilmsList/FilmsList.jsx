import { useState, useEffect } from 'react';
import FilmsItem from 'components/FilmsItem';
// import css from './FilmsList.module.css';

export default function FilmsList({ getTrendingFilms }) {
  const [films, setFilms] = useState([]);

  // console.log();
  getTrendingFilms();

  useEffect(() => {
    if (!films) {
      return;
    }

    // setLoading(true);
  }, []);

  return (
    <>
      {films && (
        <ul>
          {films.map(film => (
            <FilmsItem key={film.id} item={film} />
          ))}
        </ul>
      )}
      <div>Films</div>
    </>
  );
}
