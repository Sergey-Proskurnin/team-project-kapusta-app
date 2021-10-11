import s from './ArrowToGoBack.module.css';

const ArrowToGoBack = () => {
  return (
    <div type="button" className={s.toGoBack}>
      <a href="/balance" className={s.link}>
        <span>Вернуться на главную</span>
      </a>
    </div>
  );
};

export default ArrowToGoBack;
