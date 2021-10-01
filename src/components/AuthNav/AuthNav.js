import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';
import box from 'images/red-telephone-box.png';

const AuthNav = () => (
  <div className={s.AuthNavContainer}>
    <div className={s.boxContainer}>
      <img src={box} alt="red-telephone-box" className={s.box} />
    </div>
    <ul className={s.listAuth}>
      <li className={s.ItemAuth}>
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Сheck in
        </NavLink>
      </li>
      <li className={s.ItemNav}>
        <NavLink
          to="/login"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Login
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AuthNav;
