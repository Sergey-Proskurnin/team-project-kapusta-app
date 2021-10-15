import { useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from 'redux/auth';

import s from './UserInfo.module.css';

const UserInfo = () => {
  const UserName = useSelector(state => getUserName(state));
  const avatar = useSelector(state => getUserAvatar(state));
  const defaultGravatar = "https://s.gravatar.com/avatar/c61f12f616393799baecd77a09b6565c?s=250"
  const UserAvatar = avatar !== defaultGravatar ? avatar : undefined
  const FirstLetterOfUser = UserName.slice(0, 1).toUpperCase();
  console.log(FirstLetterOfUser);

  return (
    <>
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
    </>
  );
};

export default UserInfo;
