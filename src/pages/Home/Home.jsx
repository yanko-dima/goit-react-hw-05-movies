import FilmsList from 'components/FilmsList';
import css from './Home.module.css';
import PageHeading from 'components/PageHeading';

export default function Home() {
  return (
    <main className={css.main}>
      <PageHeading text={'Tranding today'} />
      <FilmsList />
    </main>
  );
}
