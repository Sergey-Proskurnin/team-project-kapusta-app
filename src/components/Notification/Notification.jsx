import s from './Notification.module.css';

const Notification = () => (

  <div className={s.commentBubble}>
    Привет! Для начала работы внеси текущий баланс своего счета!
    <p className={s.bubbleText}>
      Ты не можешь тратить деньги пока их у тебя нет :)
    </p>
  </div>

);

export default Notification;
