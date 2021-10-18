const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.user.avatarURL;

const getFetchigCurrentUser = state => state.auth.isFetchigCurrentUser;

const getCurrentToken = state => state.auth.token;

const getAuthError = state => state.auth.error;

export {
  getIsAuthenticated,
  getUserName,
  getFetchigCurrentUser,
  getCurrentToken,
  getUserAvatar,
  getAuthError,
};
