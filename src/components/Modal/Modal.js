import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';
import { textAnimation } from '../../helpers/animationText';
import { gsap, Power1 } from 'gsap';

const modalRoot = document.querySelector('#modal-root');

function Modal({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle = 'Вы действительно хотите выйти?',
  modalButtonleft = 'Да',
  modalButtonRight = ' Нет',
  Form,
}) {
  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.document.body.style.overflowY = 'visible';
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

   let text = useRef(null);
   useEffect(() => {
     textAnimation(text);
   }, []);
  
   let buttons = useRef(null);
   useEffect(() => {
     gsap.fromTo(
       buttons,
       0.5,
       {
         y: -100,
       },
       {
         y: 13,
         ease: Power1.easeInOut,
       },
     );
   }, []);

  return createPortal(
    <div className={styles.modalBackground} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <span className={styles.closeBtn} onClick={onClose}>
          &#10006;
        </span>

//         <div className={styles.title} ref={el => (text = el)}>
//           <p>{modalTitle}</p>
//         </div>

        <p className={styles.title}>{modalTitle}</p>
        {Form && <Form />}

        <div className={styles.buttons}>
          <div ref={el => (buttons = el)}>
            <button className={styles.commonStyles} onClick={handleClickLeft}>
              {modalButtonleft}
            </button>
            <button className={styles.commonStyles} onClick={handleClickRight}>
              {modalButtonRight}
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
