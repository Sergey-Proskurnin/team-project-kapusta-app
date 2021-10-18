import { useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

import s from './login.module.css';
import { logIn } from '../../redux/auth/auth-operations';

const LoginForm = ({ onClickRegister }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmaiError] = useState('это обязательное поле');
  const [passwordError, setPasswordError] = useState('это обязательное поле');
  const [errorSymbol, setErrorSymbol] = useState('*');

  const blurHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        return;
    }
  };
  const emailHandler = e => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaiError('Некорректный емейл');
      setErrorSymbol('*');
      if (!e.target.value) {
        setEmaiError('это обязательное поле');
        setErrorSymbol('*');
      }
    } else {
      setEmaiError('');
    }
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPasswordError(
        'Пароль должен быть не меньше 3 и не больше 10 символов',
      );
      if (!e.target.value) {
        setPasswordError('это обязательное поле');
      }
    } else {
      setPasswordError('');
    }
  };

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    clearInput();
  };

  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      emailRef,
      1,
      {
        opacity: 0,
        x: -800,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power3.easeInOut,
      },
    );

    gsap.fromTo(
      btnRef,
      0.8,
      {
        rotate: 2,
        ease: Power3.easeInOut,
      },
      {
        rotate: 360,
        ease: Power3.easeInOut,
      },
    );

    gsap.fromTo(
      passwordRef,
      1,
      {
        opacity: 0,
        x: 800,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power3.easeInOut,
      },
    );
  }, []);

  return (
    <div className={s.formRegistr}>
      <p className={s.promtText}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      {/*http://localhost:5737/api/v1/*/}
      <div className={s.animationGoogle} ref={el => (btnRef = el)}>
        <a
          href="https://kapusta-api.herokuapp.com/api/v1/users/google"
          className={s.btnGoogle}
        >
          Google
        </a>
      </div>
      <p className={s.promtText}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <div ref={el => (emailRef = el)}>
          <label className={s.formLabel}>
            <p className={s.labelText}>
              {emailDirty && emailError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Электронная почта:
            </p>
            <input
              onBlur={blurHandler}
              onChange={emailHandler}
              type="email"
              name="email"
              value={email}
              placeholder="your@email.com"
              className={s.formInput}
            />
            {emailDirty && emailError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {emailError}{' '}
              </div>
            )}
          </label>
        </div>
        <div ref={el => (passwordRef = el)}>
          <label className={s.formLabel}>
            <span className={s.labelText}>
              {passwordDirty && passwordError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Пароль:
            </span>
            <input
              onBlur={blurHandler}
              onChange={passwordHandler}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              className={s.formInput}
            />
            {passwordDirty && passwordError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {passwordError}{' '}
              </div>
            )}
          </label>
        </div>
        <div className={s.containerButton}>
          <button type="submit" className={s.button}>
            ВОЙТИ
          </button>
          <button type="button" onClick={onClickRegister} className={s.button}>
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
