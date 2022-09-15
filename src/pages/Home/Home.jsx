import FilmsList from 'components/FilmsList';
import css from './Home.module.css';
import PageHeading from 'components/PageHeading';
import { getTrendingFilms } from 'servises/films-api';

export default function Home() {
  return (
    <main className={css.main}>
      <PageHeading text={'Tranding today'} />
      <FilmsList getTrendingFilms={getTrendingFilms} />
    </main>
  );
}
