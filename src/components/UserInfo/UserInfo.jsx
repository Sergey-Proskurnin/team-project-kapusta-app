import { useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from 'redux/auth';

import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './UserInfo.module.css';

const UserInfo = () => {
  const UserName = useSelector(state => getUserName(state));

  const avatar = useSelector(state => getUserAvatar(state));
  const defaultGravatar =
    'https://s.gravatar.com/avatar/c61f12f616393799baecd77a09b6565c?s=250';
  const defaultGravatarTo =
    'https://s.gravatar.com/avatar/eee8af510870708594f1c5465104cffd?s=250';
  const UserAvatar =
    avatar !== defaultGravatar && avatar !== defaultGravatarTo
      ? avatar
      : undefined;

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
              <a
                href="https://ru.gravatar.com/"
                target="_blank"
                rel="noreferrer"
              >
                <p className={s.userAvatar}>{FirstLetterOfUser}</p>
              </a>
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
            <a href="https://ru.gravatar.com/" target="_blank" rel="noreferrer">
              <p className={s.userAvatar}>{FirstLetterOfUser}</p>
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default UserInfo;
