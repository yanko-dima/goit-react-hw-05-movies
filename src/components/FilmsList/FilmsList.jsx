import { useState, useEffect } from 'react';
import FilmsItem from 'components/FilmsItem';
// import css from './FilmsList.module.css';

export default function FilmsList() {
  const [films, setFilms] = useState([]);

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
