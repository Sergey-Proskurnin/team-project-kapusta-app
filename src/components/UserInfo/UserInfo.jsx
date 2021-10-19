import { useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from 'redux/auth';

import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './UserInfo.module.css';

const UserInfo = () => {
  const UserName = useSelector(state => getUserName(state));

  const avatar = useSelector(state => getUserAvatar(state));
  const defaultGravatar =
    'https://s.gravatar.com/avatar/c61f12f616393799baecd77a09b6565c?s=250';
  const UserAvatar = avatar !== defaultGravatar ? avatar : undefined;

  const FirstLetterOfUser = UserName.slice(0, 1).toUpperCase();
  const viewPort = useWindowDimensions();

  return (
    <>
      {viewPort.width >= 768 && (
        <div className={s.userInfo}>
          <div className={s.userInfo_container}>
            {UserAvatar ? (
              <a
                href="https://ru.gravatar.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={UserAvatar} alt="Avatar" className={s.userAvatar} />
              </a>
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
            <a href="https://ru.gravatar.com/" target="_blank" rel="noreferrer">
              <img src={UserAvatar} alt="Avatar" className={s.userAvatar} />
            </a>
          ) : (
            <p className={s.userAvatar}>{FirstLetterOfUser}</p>
          )}
        </div>
      )}
    </>
  );
};

export default UserInfo;
