import React from 'react';
import styles from './Modal.module.css';

function Modal({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle = 'Вы действительно хотите выйти?',
  modalButtonleft = 'Да',
  modalButtonRight = ' Нет',
}) {
  return (
    <div className={styles.modalBackground}>
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
    </div>
  );
}

export default Modal;
