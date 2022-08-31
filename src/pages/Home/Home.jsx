import FilmsList from 'components/FilmsList';
import PageHeading from 'components/PageHeading';

export default function Home() {
  return (
    <div>
      <PageHeading text={'Tranding today'} />
      <FilmsList />
    </div>
  );
}
