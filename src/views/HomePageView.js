import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';

import s from './HomePage.module.css';

import { Button, TextField } from '@material-ui/core';

const HomePageView = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    clearInput();
  };
  return (
    <>
      <header>
        <div className={s.logo}>
          <img src="../img/svg/logo.svg" alt="Kapusta" width="90" height="31" />
        </div>
      </header>
      <div className={s.container}>
        <div className={s.firstSection}>
          <div className={s.text}>
            <img
              className={s.imgText}
              src="../img/svg/Union.svg"
              alt="Kapusta"
            />
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
                />
              </label>
              {/* <label className={s.formLabel}>
                <span className={s.labelText}>Пароль:</span>
              <input type="password" name="password" placeholder="Пароль" />
            </label> */}
              <TextField
                onInput={onChange}
                type="password"
                name="password"
                value={password}
                id="outlined-basic"
                label="Пароль:"
                placeholder="Пароль"
                variant="outlined"
                style={{
                  marginBottom: 40,
                  borderRadius: 30,
                  backgroundColor: '#F6F7FB',
                }}
              />
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
};

export default HomePageView;

//   return (
//     <div>
//       <h1>Please enter your login</h1>

//       <form onSubmit={handleSubmit} autoComplete="off">
//         <label>
//           E-mail
//           <input type="email" name="email" value={email} onChange={onChange} />
//         </label>

//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onInput={onChange}
//           />
//         </label>

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default HomeView;
