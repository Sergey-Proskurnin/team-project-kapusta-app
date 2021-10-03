import React from 'react';
import styles from "./Modal.module.css";
import Button from '@material-ui/core/Button';



function Modal({
  setOpenModal,
  modalTitle = 'Вы действительно хотите выйти?',
  modalButtonleft = "Да",
  modalButtonRight = " Нет",
}) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <span
          className={styles.closeBtn}
          onClick={() => {
            setOpenModal(false);
          }}
        >
          &#10006;
        </span>
        <p className={styles.title}>{modalTitle}</p>
        <div className={styles.buttons}>
          <button
            className={styles.yes}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            {modalButtonleft}
          </button>
          <button
            className={styles.no}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            {modalButtonRight}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;