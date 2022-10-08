import PageHeading from 'components/PageHeading';
import img from 'img/404.jpg';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.notFound}>
      <img className={css.notFoundImg} src={img} alt="" />
      <div className={css.notFoundContent}>
        <PageHeading text={'Awww...Don`t Cry.'} />
        <p>It`s just 404 Error!</p>
        <p>
          What you`re looking for may have been misplaced in Long Term Memory.
        </p>
      </div>
    </div>
  );
}
