import css from './CastItem.module.css';

export default function CastItem({ name, img }) {
  const IMG_URL = 'https://www.themoviedb.org/t/p/w138_and_h175_face';
  let imgSrc = `${IMG_URL}${img}`;
  const NO_IMG =
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';

  if (!img) {
    imgSrc = NO_IMG;
  }

  return (
    <>
      <li className={css.castItem}>
        <img
          className={css.castImg}
          src={imgSrc}
          alt={name}
          aria-label={`Photo of ${name}`}
        />
        <p className={css.castName}>{name}</p>
      </li>
    </>
  );
}
