import TrandingItem from 'components/TrandingItem';
import css from './TrandingList.module.css';

export default function TrandingList() {
  return (
    <ul className={css.trandingList}>
      <TrandingItem />
    </ul>
  );
}
