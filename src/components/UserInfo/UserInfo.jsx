import { useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from 'redux/auth';

import s from './UserInfo.module.css';

//TODO: Добавить дефолтный аватар

const UserInfo = () => {
  const UserName = useSelector(state => getUserName(state));
  const UserAvatar = useSelector(state => getUserAvatar(state));
  // const FirstLetterOfUser = UserName.slice(0, 1).toUpperCase();
  // const CutUserName = UserName.substring(0, UserName.indexOf('@'));

  //TODO: Добавить src для Img с дефолтной авой
  return (
    <>
      <div className={s.userInfo}>
        <div className={s.userInfo_container}>
          <img src={UserAvatar} alt="Avatar" className={s.userAvatar} />
          {/* <p className={s.userFirstLetter}>{FirstLetterOfUser}</p> */}
          <p className={s.userFullName}>{UserName}</p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
