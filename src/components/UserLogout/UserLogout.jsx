import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'components/Modal';
import { logOut } from 'redux/auth';
import useWindowDimensions from 'hooks/useWindowDimensions';
import logOutImg from 'img/svg/logOutSprite.svg';

import s from './UserLogout.module.css';

const UserLogout = () => {
  const dispatch = useDispatch();
  const logoutModal = () => dispatch(logOut());

  const [setModalOpen, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const viewPort = useWindowDimensions();

  return (
    <>
      {viewPort.width >= 768 && (
        <button type="button" onClick={toggleModal} className={s.logoutBtn}>
          <p className={s.textBtn}>Выйти</p>
        </button>
      )}
      {viewPort.width < 768 && (
        <button type="button" onClick={toggleModal} className={s.btnLogout}>
          <svg className={s.iconLogout}>
            <use href={`${logOutImg}#logOut`} />
          </svg>
        </button>
      )}
      {setModalOpen && (
        <Modal
          text={'Вы действительно хотите выйти?'}
          handleClickLeft={logoutModal}
          handleClickRight={toggleModal}
          onClose={toggleModal}
        />
      )}
    </>
  );
};

export default UserLogout;
