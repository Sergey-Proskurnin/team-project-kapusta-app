import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'redux/auth';
import { useRef, useEffect } from 'react';
import logo from '../../img/svg/logo.svg';
import UserInfo from 'components/UserInfo';
import UserLogout from 'components/UserLogout';
import { gsap, Power2 } from 'gsap';
import s from 'components/Header/Header.module.css';
import useWindowDimensions from 'hooks/useWindowDimensions';

import './animationKeyframes.css';



const Header = () => {
  const viewPort = useWindowDimensions();
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));
  let logotip = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      logotip,
      0.5,
      {
        y: -150,
      },
      {
        y: 13,
        ease: Power2.easeInOut,
      },
    );
  }, []);
  return (
    <header className={s.header}>

      <div ref={el => (logotip = el)}>
        <div className={s.header_container}>
          <Link to="/" alt="homepage" className={s.logoLink}>
            <img src={logo} className={s.logoImg} alt="Kapusta-logo" />
          </Link>
          <NavLink to="/developers" className="Blazing">
          {viewPort.width < 768 ? '#28' : 'TEAM FSD #28'}
        </NavLink>
          {isAuthenticated && (
            <div className={s.user_container}>
              <UserInfo />
              <UserLogout />
            </div>
          )}
        </div>


      </div>
    </header>
  );
};

export default Header;
