import css from './FilmsItem.module.css';

export default function FilmsItem({ title }) {
  return (
    <>
      <li className={css.item}>{title}</li>
    </>
  );
}
