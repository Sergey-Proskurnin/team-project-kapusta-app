import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle = 'Вы действительно хотите выйти?',
  modalButtonleft = 'Да',
  modalButtonRight = ' Нет',
}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.modalBackground} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <span className={styles.closeBtn} onClick={onClose}>
          &#10006;
        </span>
        <p className={styles.title}>{modalTitle}</p>
        <div className={styles.buttons}>
          <button className={styles.yes} onClick={handleClickLeft}>
            {modalButtonleft}
          </button>
          <button className={styles.no} onClick={handleClickRight}>
            {modalButtonRight}
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
