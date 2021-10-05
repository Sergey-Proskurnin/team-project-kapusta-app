import React from 'react';
import s from './HomePage.module.css';

import {Button, TextField} from '@material-ui/core';

const HomePage = () => (
  <>
    <header>
      <div className={s.logo}>
        <img src="../img/svg/logo.svg" alt="Kapusta" width="90"
height="31"/>
      </div>
    </header>
    <div className={s.container}>
      <div className={s.firstSection}>
        <div className={s.text}>
          <img className={s.imgText} src="../img/svg/Union.svg" alt="Kapusta"/>
          <h1 className={s.fontText}>SMART FINANSE</h1>
        </div>
      </div>
      <div className={s.secondSection}>
        <div className={s.formRegistr}>
            <span className={s.promtText}>
              Вы можете авторизоваться с помощью Google Account:
          </span>
            <button className={s.btnGoogle}>Google</button>
            <span className={s.promtText}>
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
            </span>
            <form action="" autocomplete="on">
              <label className={s.formLabel}>
                <span className={s.labelText}>Электронная почта:</span>
                <input  className={s.formInput} type="email" name="email" placeholder="your@email.com" />
              </label>
              {/* <label className={s.formLabel}>
                <span className={s.labelText}>Пароль:</span>
              <input type="password" name="password" placeholder="Пароль" />
            </label> */}
            <TextField id="outlined-basic" label="Пароль:" placeholder="Пароль" variant="outlined" style={{
              marginBottom: 40,
              borderRadius: 30,
              backgroundColor: "#F6F7FB",
              
            }}
            />
            <div className={s.containerButton}>
               <Button
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
                variant="contained"
                style={{
                  width: 125,
                  height: 44,
                  borderRadius: 16,
                  // backgroundColor: "#FF751D",
                  color: '#52555F',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}
              >
                Регистрация
              </Button>
             </div>
              {/* <button type="submit">Войти</button> */}
              {/* <button type="submit">Регистрация</button> */}
            </form>
        </div>
      </div>
    </div>
  </>
);

export default HomePage;
