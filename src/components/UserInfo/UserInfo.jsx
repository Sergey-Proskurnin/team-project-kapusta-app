import { useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from 'redux/auth';
import { useState } from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './UserInfo.module.css';
import AvatarModal from 'components/AvatarModal';
import OnLoader from 'components/OnLoader';
import { getLoader } from 'redux/transactions';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
const UserInfo = () => {
  const UserName = useSelector(state => getUserName(state));

  const avatar = useSelector(state => getUserAvatar(state));
  const loader = useSelector(getLoader);
  const [editProfile, setEditProfile] = useState(false);
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

  const openModalProfile = () => {
    setEditProfile(true);
  };

  const closeProfileModal = () => {
    setEditProfile(false);
  };
  return (
    <>
      {loader && <OnLoader />}
      {viewPort.width >= 768 && (
        <>
          {editProfile && <AvatarModal closeAvatarModal={closeProfileModal} />}
          <div className={s.userInfo}>
            <div className={s.userInfo_container}>
              {UserAvatar ? (
                <img
                  src={UserAvatar}
                  alt="Avatar"
                  className={s.userAvatar}
                  onClick={openModalProfile}
                />
              ) : (
                <p className={s.userAvatar} onClick={openModalProfile}>
                  {FirstLetterOfUser}
                </p>
              )}
              <p className={s.userFullName}>{UserName} </p>
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
          {UserAvatar ? (
            <img
              src={UserAvatar}
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
