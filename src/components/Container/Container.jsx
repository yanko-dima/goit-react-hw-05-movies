import { Outlet } from 'react-router-dom';
import css from './Container.module.css';

export default function Container() {
  return <section className={css.section}>{/* <Outlet /> */}</section>;
}
