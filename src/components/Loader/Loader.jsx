import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <TailSpin
      color="#032541"
      width="50"
      height="50"
      ariaLabel="tail-spin-loading"
      wrapperClass={css.loaderWrapper}
    />
  );
}
