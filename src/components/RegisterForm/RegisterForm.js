import s from './register.module.css';
import { register } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


import { Button } from '@material-ui/core';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    clearInput();
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  

  return (
    <div className={s.formRegistr}>
      {/* <span className={s.promtText}>
        Вы можете авторизоваться с помощью Google Account:
      </span>
      <button className={s.btnGoogle}>Google</button> */}
      <span className={s.promtText}>
        Для регистрации заполните поля:
      </span>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <label className={s.formLabel} htmlFor="">
          <span className={s.labelText}>Имя:</span>
          <input
            onChange={onChange}
            type="text"
            name="name"
            value={name}
            placeholder="Ваше имя"
            className={s.formInput}
            required
          />
        </label>
        <label className={s.formLabel} htmlFor="">
          <span className={s.labelText}>Электронная почта:</span>
          <input
            onChange={onChange}
            type="text"
            name="email"
            value={email}
            placeholder="your@email.com"
            className={s.formInput}
            required
          />
        </label>
        <label className={s.formLabel} htmlFor="">
          <span className={s.labelText}>Пароль:</span>
          <input
            onChange={onChange}
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            className={s.formInput}
            required
          />
        </label>
        <div className={s.containerButton}>
          <Button
            type="submit"
            variant="contained"
            style={{
              width: 125,
              height: 44,
              borderRadius: 16,
              backgroundColor: '#FF751D',
              color: '#FFFFFF',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            Вернуться
          </Button>
          <Button
            variant="contained"
            style={{
              width: 125,
              height: 44,
              borderRadius: 16,
              color: '#52555F',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            Готово
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
