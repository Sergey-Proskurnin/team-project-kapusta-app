import { useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from 'redux/auth';
// import { getIsAuthenticated } from 'redux/auth';

// import Button from '@material-ui/core/Button';
import s from './UserInfo.module.css';

//TODO: Добавить дефолтный аватар

const UserInfo = () => {
  // const isAuthenticated = useSelector(getIsAuthenticated);
  const UserName = useSelector(state => getUserName(state));
  const UserAvatar = useSelector(state => getUserAvatar(state));
  const FirstLetterOfUser = UserName.slice(0, 1).toUpperCase();
  // const CutUserName = UserName.substring(0, UserName.indexOf('@'));

  //TODO: Добавить src для Img с дефолтной авой
  return (
    <>
      <div className={s.container}>
        <div className={s.userInfo}>
          <img src={UserAvatar} alt="Avatar" className={s.avatar} />
          <p className={s.userPicLetter}>{FirstLetterOfUser}</p>
          <p className={s.userNameFull}>{UserName}</p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
