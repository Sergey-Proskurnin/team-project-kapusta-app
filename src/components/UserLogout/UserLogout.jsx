import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'components/Modal';
import { logOut } from 'redux/auth';

const UserLogout = () => {
  const dispatch = useDispatch();
  const logoutModal = () => dispatch(logOut());

  const [setModalOpen, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  console.log(setModalOpen);

  return (
    <>
      <button type="button" onClick={toggleModal}>
        <p>Выйти</p>
      </button>
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
