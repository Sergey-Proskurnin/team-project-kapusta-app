import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { gsap, Power3 } from 'gsap';

import s from './register.module.css';
import { register } from 'redux/auth/auth-operations';

import Modal from 'components/Modal';
import { getUserName, getUserEmail } from 'redux/auth';

import RepeatEmail from 'components/RepeatEmail';

const RegisterForm = ({ onClickComeBack }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('это обязательное поле');
  const [emailError, setEmaiError] = useState('это обязательное поле');
  const [passwordError, setPasswordError] = useState('это обязательное поле');
  const [errorSymbol, setErrorSymbol] = useState('*');
  const [setModalOpen, setShowModal] = useState(false);

  const user = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);

  const onRegister = () => dispatch(register({ name, email, password }));

  const toggleModal = () => {
    setShowModal(setShowModal => !setShowModal);
  };

  const blurHandler = e => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
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

  const nameHandler = e => {
    setName(e.target.value);
    const re = /^[A-Za-zА-Яа-яЁё' '\-()0-9]{3,30}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Некорректное имя');
      setErrorSymbol('*');
      if (!e.target.value) {
        setNameError('это обязательное поле');
        setErrorSymbol('*');
      }
    } else {
      setNameError('');
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
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть не меньше 6 символов');
      if (!e.target.value) {
        setPasswordError('это обязательное поле');
      }
    } else {
      setPasswordError('');
    }
  };

  const clearInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let nameRef = useRef(null);

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
      nameRef,
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

    if (user) {
      setShowModal(true);
    }
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    onRegister();
    clearInput();
  };

  return (
    <div className={s.formRegistr}>
      <p className={s.promtText}>Для регистрации заполните поля:</p>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <div ref={el => (nameRef = el)}>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {nameDirty && nameError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Имя:
            </p>
            <input
              onBlur={blurHandler}
              onChange={nameHandler}
              type="text"
              name="name"
              value={name}
              placeholder="Ваше имя"
              className={s.formInput}
              pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
              title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
              required
            />
            {nameDirty && nameError && (
              <div
                style={{
                  color: 'red',
                  fontSize: 10,
                  paddingTop: 4,
                  textAlign: 'left',
                }}
              >
                {nameError}{' '}
              </div>
            )}
          </label>
        </div>
        <div ref={el => (emailRef = el)}>
          <label className={s.formLabel} htmlFor="">
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
              type="text"
              name="email"
              value={email}
              placeholder="your@email.com"
              className={s.formInput}
              pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
              title="Email может, сoстоять из букв цифр и обязательного символа '@'"
              required
            />
            {emailDirty && emailError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {emailError}{' '}
              </div>
            )}
          </label>
        </div>
        <div ref={el => (passwordRef = el)}>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {passwordDirty && passwordError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Пароль:
            </p>
            <input
              onBlur={blurHandler}
              onChange={passwordHandler}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              className={s.formInput}
              pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
              title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
              required
            />
            {passwordDirty && passwordError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {passwordError}{' '}
              </div>
            )}
          </label>
        </div>
        <div className={s.containerButton}>
          <button type="button" onClick={onClickComeBack} className={s.button}>
            ВЕРНУТЬСЯ
          </button>
          <button type="submit" className={s.button}>
            ГОТОВО
          </button>
          {setModalOpen && (
            <Modal
              modalTitle={`${user.split(' ')[0].slice(0, 1).toUpperCase()}${user
                .split(' ')[0]
                .slice(1, 12)
                .toLowerCase()}, перейдите на ваш электронный                            адрес и подтвердите аутентификацию!`}
              modalButtonleft={'ГОТОВО'}
              modalButtonRight={'ВЕРНУТЬСЯ'}
              handleClickLeft={toggleModal}
              handleClickRight={toggleModal}
              onClose={toggleModal}
              styleReg={s.modalContainerReg}
            />
          )}
        </div>
      </form>
      {userEmail && <RepeatEmail />}
    </div>
  );
};

export default RegisterForm;
