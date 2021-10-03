import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { getUserName, logOut, getUserAvatar } from 'redux/auth';

import s from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(state => getUserName(state));
  const avatar = useSelector(state => getUserAvatar(state));

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <div className={s.container}>
      <div>
        <img src={avatar} alt="Avatar" className={s.avatar} />
      </div>
      <span className={s.name}>
        Welcome, {name.slice(0, 1).toUpperCase()}
        {name.slice(1)}
      </span>
      <Button
        type="button"
        onClick={onLogout}
        style={{ marginTop: '05px' }}
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
