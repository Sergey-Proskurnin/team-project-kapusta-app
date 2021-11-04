const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getMessageRepeatEmailVerify = state => state.auth.isRepeatEmailVerify;

const getUserAvatar = state => state.auth.user.avatarURL;

const getFetchigCurrentUser = state => state.auth.isFetchigCurrentUser;

const getCurrentToken = state => state.auth.token;

const getAuthError = state => state.auth.error;

export {
  getIsAuthenticated,
  getUserName,
  getUserEmail,
  getMessageRepeatEmailVerify,
  getFetchigCurrentUser,
  getCurrentToken,
  getUserAvatar,
  getAuthError,
};
