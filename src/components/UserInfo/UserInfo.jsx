import { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

import { getUserName, getUserAvatar } from 'redux/auth';

import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './UserInfo.module.css';
import AvatarModal from 'components/AvatarModal';

const useStyles = makeStyles(theme => ({
  customHoverFocus: {
    '&:hover, &.Mui-focusVisible': {
      color: '#ff751d',
      backgroundColor: 'transparent',
    },
    '&:focus': { color: '#ff751d', backgroundColor: 'transparent' },
  },
}));

const UserInfo = () => {
  const classes = useStyles();
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
              <button className={s.iconWrapper} onClick={openModalProfile} type="button">
                <TuneOutlinedIcon color="disabled" className={classes.customHoverFocus }/>
              </button>
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
          <button className={s.iconWrapper} onClick={openModalProfile} >
            <TuneOutlinedIcon color="disabled" className={classes.customHoverFocus} type="button"/>
          </button>
        </div>
      )}
    </>
  );
};

export default UserInfo;
