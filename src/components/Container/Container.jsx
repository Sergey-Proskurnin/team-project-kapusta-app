import BackgroundContainer from './BackgroundContainer';
import s from './Container.module.css';

const Container = ({ children }) => (
  <BackgroundContainer>
    <div className={s.container}>{children}</div>
  </BackgroundContainer>
  // <div className={s.container}>
  //   <div className={s.bcgSection} ></div>
  //   <div className={s.dataSection} >{children}
  //   <div className={s.bcgImage}></div>
  //   </div>
  // </div>
);

export default Container;
