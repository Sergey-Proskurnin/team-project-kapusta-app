import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

const AuthNav = () => (
  <div className={s.AuthNavContainer}>
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
