import { useHistory } from 'react-router';

import s from './ArrowToGoBack.module.css';
import arrow from 'img/svg/ArrowToGoBack.svg';

const ArrowToGoBack = () => {
  const history = useHistory();

  const setHistoryPath = () => {
    history.push('/');
  };

  return (
    <button type="button" className={s.toGoBack}>
      <img
        src={arrow}
        className={s.svgArrow}
        alt="Arrow to go back"
        onClick={setHistoryPath}
      />
      <p className={s.title}>Вернуться на главную</p>
    </button>
  );
};

export default ArrowToGoBack;
