import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  repeatVerify,
  getUserEmail,
    getMessageRepeatEmailVerify,
  repeatEmailVerifyOk,
} from 'redux/auth';
import Modal from 'components/Modal';
import s from './RepeatEmail.module.css';

const RepeatEmail = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  const messageSent = useSelector(getMessageRepeatEmailVerify);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    messageSent && setModal(true);
  }, [messageSent]);

  const handleClick = () => {
    dispatch(repeatVerify({ email: userEmail }));
  };

  const closeModal = () => {
      setModal(false);
      dispatch(repeatEmailVerifyOk());
  };

  return (
    <>
      <p
        type="button"
        className={s.repeatedEmail}
        onClick={handleClick}
      >{`Отправить повторное письмо на ${userEmail}`}</p>
      {modal && (
        <Modal
          modalTitle={`${messageSent}`}
          modalButtonleft={'👌'}
          modalButtonRight={'ОК'}
          handleClickLeft={closeModal}
          handleClickRight={closeModal}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default RepeatEmail;
