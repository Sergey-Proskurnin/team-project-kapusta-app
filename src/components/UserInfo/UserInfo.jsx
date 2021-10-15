import { useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from 'redux/auth';

import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './UserInfo.module.css';

const UserInfo = () => {
  const UserName = useSelector(state => getUserName(state));
  const UserAvatar = useSelector(state => getUserAvatar(state));
  const FirstLetterOfUser = UserName.slice(0, 1).toUpperCase();
  const viewPort = useWindowDimensions();

  return (
    <>
      {viewPort.width >= 768 && (
        <div className={s.userInfo}>
        <div className={s.userInfo_container}>
          {UserAvatar ? (
            <img src={UserAvatar} alt="Avatar" className={s.userAvatar} />
          ) : (
            <p className={s.userAvatar}>{FirstLetterOfUser}</p>
          )}
          <p className={s.userFullName}>{UserName}</p>
        </div>
        </div>
      )}
      {viewPort.width < 768 && (
         <div className={s.userInfo_container}>
          {UserAvatar ? (
            <img src={UserAvatar} alt="Avatar" className={s.userAvatar} />
          ) : (
            <p className={s.userAvatar}>{FirstLetterOfUser}</p>
          )}
        </div>
      )}
    </>
  );
};

export default UserInfo;
