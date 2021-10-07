import s from './register.module.css';
import { register } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


import { Button } from '@material-ui/core';

const RegisterForm = ({onClickComeBack}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
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

  const nameHandler = (e) => {
    setName(e.target.value)
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    clearInput();
  };

  return (
    <div className={s.formRegistr}>
      <span className={s.promtText}>
        Для регистрации заполните поля:
      </span>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <label className={s.formLabel} htmlFor="">
          <span className={s.labelText}>Имя:</span>
          <input
            onChange={nameHandler}
            type="text"
            name="name"
            value={name}
            placeholder="Ваше имя"
            className={s.formInput}
          />
        </label>
        <label className={s.formLabel} htmlFor="">
          <span className={s.labelText}>
            {(emailDirty && emailError) && <span style={{ color: 'red', fontSize:10, paddingTop: 4}}>{errorSymbol} </span>}
            Электронная почта:</span>
          <input
            onBlur={blurHandler}
            onChange={emailHandler}
            type="text"
            name="email"
            value={email}
            placeholder="your@email.com"
            className={s.formInput}
          />
          {(emailDirty && emailError) && <div style={{ color: 'red', fontSize:10, paddingTop: 4}}>{emailError} </div>}
        </label>
        <label className={s.formLabel} htmlFor="">
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
            onClick={onClickComeBack}
            type="button"
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
            type="submit"
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
