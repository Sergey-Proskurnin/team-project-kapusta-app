import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'redux/auth';

import logo from '../../img/svg/logo.svg';
import UserInfo from 'components/UserInfo';
import UserLogout from 'components/UserLogout';

import s from 'components/Header/Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));

  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <Link to="/" alt="homepage" className={s.logoLink}>
          <img src={logo} className={s.logoImg} alt="Kapusta-logo" />
        </Link>

        {isAuthenticated && (
          <div className={s.user_container}>
            <UserInfo />
            <UserLogout />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
