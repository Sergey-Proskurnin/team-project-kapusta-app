import s from './register.module.css';
import { register } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from 'components/Modal';
import {getUserName} from 'redux/auth/auth-selector'

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
    const re = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
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
    setName('');
    setEmail('');
    setPassword('');
  };
  
  useEffect(() => {
    if (user) {
      setShowModal(true);
    }
  },
    [user]
  )
  
  const handleSubmit = e => {
    e.preventDefault();
    onRegister();
    clearInput();
  };

  return (

    <div className={s.formRegistr}>
      <span className={s.promtText}>Для регистрации заполните поля:</span>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <label className={s.formLabel} htmlFor="">
          <span className={s.labelText}>
            {nameDirty && nameError && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )}
            Имя:
          </span>
          <input
            onBlur={blurHandler}
            onChange={nameHandler}
            type="text"
            name="name"
            value={name}
            placeholder="Ваше имя"
            className={s.formInput}
          />
          {nameDirty && nameError && (
            <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
              {nameError}{' '}
            </span>
          )}
        </label>
        <label className={s.formLabel} htmlFor="">
          <span className={s.labelText}>
            {emailDirty && emailError && (
              <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )}
            Электронная почта:
          </span>
          <input
            onBlur={blurHandler}
            onChange={emailHandler}
            type="text"
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
        <label className={s.formLabel} htmlFor="">
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
        <div className={s.containerButton}>
          <button type="button" onClick={onClickComeBack} className={s.button}>
            ВЕРНУТЬСЯ
          </button>
          <button type="submit"  className={s.button}>
            ГОТОВО
          </button>
           {setModalOpen && (
        <Modal
          modalTitle={`${user}, перейдите на ваш электронный адрес и подтвердите аутентификацию!`}
          modalButtonleft={'👌'}
          modalButtonRight={'ОК'}   
          handleClickLeft={toggleModal}
          handleClickRight={toggleModal}
          onClose={toggleModal}
        />
      )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;