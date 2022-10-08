import PageHeading from 'components/PageHeading';
import css from './MoviePlaceholder.module.css';

export default function MoviePlaceholder() {
  return (
    <div className={css.moviePlaceholder}>
      <PageHeading text="Film search service" />
    </div>
  );
}
