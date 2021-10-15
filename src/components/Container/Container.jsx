import BackgroundContainer from './BackgroundContainer';
import s from './Container.module.css';

const Container = ({ children }) => (
  <BackgroundContainer>
    <div className={s.container}>{children}</div>
  </BackgroundContainer>
);

export default Container;
