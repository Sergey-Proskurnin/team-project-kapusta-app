import s from './login.module.css';
import { logIn } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Button } from '@material-ui/core';

const LoginForm = ({ onClickRegister }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmaiError] = useState('это обязательное поле');
  const [passwordError, setPasswordError] = useState('это обязательное поле');
  const [errorSymbol, setErrorSymbol] = useState('*')

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaiError('Некорректный емейл')
      setErrorSymbol('*')
      if (!e.target.value) {
        setEmaiError('это обязательное поле')
        setErrorSymbol('*')
      }
    } else {
      setEmaiError('')
    }
  }
  
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPasswordError('Пароль должен быть не меньше 3 и не больше 10 символов')
      if (!e.target.value) {
        setPasswordError('это обязательное поле')
      }
    } else {
      setPasswordError('')
    }
  }

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
      <a href="https://kapusta-api.herokuapp.com/api/v1/users/google" className={s.btnGoogle}>Google</a>
       <span className={s.promtText}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </span>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <label className={s.formLabel}>
          <span className={s.labelText}>
            {(emailDirty && emailError) && <span style={{ color: 'red', fontSize:10, paddingTop: 4}}>{errorSymbol} </span>}
            Электронная почта:</span>
          <input
            onBlur={blurHandler}
            onChange={emailHandler}
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            className={s.formInput}
          />
          {(emailDirty && emailError) && <div style={{ color: 'red', fontSize:10, paddingTop: 4}}>{emailError} </div>}
        </label>
        <label className={s.formLabel}>
          <span className={s.labelText}>
             {(passwordDirty && passwordError) && <span style={{ color: 'red', fontSize:10, paddingTop: 4}}>{errorSymbol} </span>}
            Пароль:</span>
          <input
            onBlur={blurHandler}
            onChange={passwordHandler}
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            className={s.formInput}
          />
           {(passwordDirty && passwordError) && <div style={{ color: 'red', fontSize:10, paddingTop: 4}}>{passwordError} </div>}
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
            type="button"
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
