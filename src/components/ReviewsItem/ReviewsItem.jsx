import css from './ReviewsItem.module.css';

export default function ReviewsItem({ author, content }) {
  const { name } = author;

  return (
    <>
      <li className={css.reviewItem}>
        <h4 className={css.reviewTitle}>{name}</h4>
        <p className={css.reviewContent}>{content}</p>
      </li>
    </>
  );
}
