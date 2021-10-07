import s from './login.module.css';
import { logIn } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Button } from '@material-ui/core';

const LoginForm = ({ onClickRegister }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    clearInput();
  };


  const onChange = ({ target: { name, value } }) => {
    switch (name) {
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
      <span className={s.promtText}>
        Вы можете авторизоваться с помощью Google Account:
      </span>
      <a href="http://localhost:5737/api/v1/users/google" className={s.btnGoogle}>Google</a>
       <span className={s.promtText}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </span>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <label className={s.formLabel}>
          <span className={s.labelText}>Электронная почта:</span>
          <input
            onChange={onChange}
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            className={s.formInput}
            required
          />
        </label>
        <label className={s.formLabel}>
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
            Войти
          </Button>
          <Button
            onClick={onClickRegister}
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
            Регистрация
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
