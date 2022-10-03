import CastItem from 'components/CastItem';
import css from './Cast.module.css';
import Loader from 'components/Loader';
import { useCast } from 'hooks/useCast';

export default function Cast() {
  const { cast, status } = useCast();

  return (
    <>
      {status === 'loading' && <Loader />}
      {status === 'rejected' && <p>Cast not found</p>}
      {status === 'responsed' && (
        <ul className={css.castList}>
          {cast.map(({ id, name, profile_path }) => (
            <CastItem key={id} name={name} img={profile_path} />
          ))}
        </ul>
      )}
    </>
  );
}
