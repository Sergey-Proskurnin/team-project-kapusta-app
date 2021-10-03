const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getBalanceUser = state => state.auth.user.balance;

const getUserAvatar = state => state.auth.user.avatarURL;

const getFetchigCurrentUser = state => state.auth.isFetchigCurrentUser;

const getCurrentToken = state => state.auth.token;

export {
  getIsAuthenticated,
  getUserName,
  getFetchigCurrentUser,
  getCurrentToken,
  getUserAvatar,
  getBalanceUser,
};
