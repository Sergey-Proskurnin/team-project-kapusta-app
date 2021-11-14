import { useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from 'redux/auth';
import { useState } from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './UserInfo.module.css';
import AvatarModal from 'components/AvatarModal';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
const UserInfo = () => {
  const UserName = useSelector(state => getUserName(state));

  const avatar = useSelector(state => getUserAvatar(state));
  const [editProfile, setEditProfile] = useState(false);
  const FirstLetterOfUser = UserName.slice(0, 1).toUpperCase();
  const viewPort = useWindowDimensions();

  const openModalProfile = () => {
    setEditProfile(true);
  };

  const closeProfileModal = () => {
    setEditProfile(false);
  };
  return (
    <>
      {viewPort.width >= 768 && (
        <>
          {editProfile && <AvatarModal closeAvatarModal={closeProfileModal} />}
          <div className={s.userInfo}>
            <div className={s.userInfo_container}>
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar"
                  className={s.userAvatar}
                  onClick={openModalProfile}
                />
              ) : (
                <p className={s.userAvatar} onClick={openModalProfile}>
                  {FirstLetterOfUser}
                </p>
              )}
              <p className={s.userFullName} onClick={openModalProfile}>
                {UserName}{' '}
              </p>
              <div className={s.iconWrapper} onClick={openModalProfile}>
                <TuneOutlinedIcon color="disabled" />
              </div>
            </div>
          </div>
        </>
      )}
      {viewPort.width < 768 && (
        <div className={s.userInfo_container}>
          {editProfile && <AvatarModal closeAvatarModal={closeProfileModal} />}
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar"
              className={s.userAvatar}
              onClick={openModalProfile}
            />
          ) : (
            <p className={s.userAvatar} onClick={openModalProfile}>
              {FirstLetterOfUser}
            </p>
          )}
          <div className={s.iconWrapper} onClick={openModalProfile}>
            <TuneOutlinedIcon color="disabled" />
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
