import React from 'react';
import { CSSTransition } from 'react-transition-group';

import s from './Container.module.css';
import sAt from 'helpers/animation/animationTitle.module.css';

const Container = ({ children, }) => (
  <div className={s.container}>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={sAt}
      unmountOnExit
    >
      </CSSTransition>
    {children}
  </div>
);

export default Container;
