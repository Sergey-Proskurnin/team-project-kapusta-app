import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './HomePage.module.css';
import logo from '../img/svg/logo.svg';
import imgText from '../img/svg/Union.svg';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LogInForm/LoginForm';



const HomePageView = () => {
const [login, setLogin] = useState(true);
const onRegisterClick = () => {
  setLogin(false)
  }

  return (
    <>
      <header className={s.header}>
        <div className={s.logo, s.container}>
          <img src={logo} alt="Kapusta" width="90" height="31" />
        </div>
      </header>
      <div className={s.container}>
        <div className={s.firstSection}>
          <div className={s.bcgImage}></div>
          <div className={s.text}>
            <img
              className={s.imgText}
              src={imgText}
              alt="Kapusta"
            />
            <h1 className={s.fontText}>SMART FINANSE</h1>
          </div>
        </div>
        <div className={s.secondSection}>
         {login ?  <LoginForm onClickRegister={onRegisterClick} /> :
            <RegisterForm />}
          <div className={s.bcgImageBottom}></div>
        </div>
      </div>
    </>
  );
};

export default HomePageView;

