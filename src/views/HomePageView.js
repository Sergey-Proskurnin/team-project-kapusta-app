import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import queryString from 'query-string';

import s from './HomePage.module.css';
import logo from '../img/svg/logo.svg';
import imgText from '../img/svg/Union.svg';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LogInForm/LoginForm';

import { loginGoogleSuccess } from 'redux/auth';

const HomePageView = ({ location }) => {
  const { token } = queryString.parse(location.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(loginGoogleSuccess(token));
    }
  });

  const [login, setLogin] = useState(true);
  const onRegisterClick = () => {
    setLogin(false);
  };

  const onComeBackClick = () => {
    setLogin(true);
  };
  return (
    <>
      {/* <header className={s.header}>
        <div className={s.container}>
          <img
            className={s.logoImg}
            src={logo}
            alt="Kapusta"
            width="90"
            height="31"
          />
        </div>
      </header> */}
      <div className={s.container}>
        <div className={s.firstSection}>
          <div className={s.bcgImage}></div>
          <div className={s.text}>
            <img className={s.imgText} src={imgText} alt="Kapusta" />
            <h1 className={s.fontText}>SMART FINANSE</h1>
          </div>
        </div>
        <div className={s.secondSection}>
          {login ? (
            <LoginForm onClickRegister={onRegisterClick} />
          ) : (
            <RegisterForm onClickComeBack={onComeBackClick} />
          )}
          <div className={s.bcgImageBottom}></div>
        </div>
      </div>
    </>
  );
};

export default HomePageView;
