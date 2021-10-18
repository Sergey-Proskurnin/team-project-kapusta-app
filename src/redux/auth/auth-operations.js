import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

import { setTotalBalanceSuccess } from 'redux/transactions';

import {
  token,
  fetchSignUp,
  fetchLogin,
  fetchLogout,
  fetchCurrent,
  fetchRefreshToken,
} from 'services/fetchApi';

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await fetchSignUp(credentials);
    dispatch(registerSuccess(response.data));
  } catch ({ response }) {
    dispatch(registerError(response.data.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await fetchLogin(credentials);
    token.set(response.data.data);
    dispatch(loginSuccess(response.data.data));
  } catch ({ response }) {
    dispatch(loginError(response.data.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await fetchLogout();
    token.unset();
    dispatch(logoutSuccess());
  } catch ({ response }) {
    dispatch(logoutError(response.data.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken, refreshToken: persistedRefreshToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await fetchCurrent();
    dispatch(getCurrentUserSuccess(response.data.user));
    dispatch(setTotalBalanceSuccess(response.data.user.balance));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      token.set(persistedRefreshToken);
      const response = await fetchRefreshToken();
      dispatch(getCurrentUserSuccess(response.data.data.user));
      dispatch(setTotalBalanceSuccess(response.data.data.user.balance));
      dispatch(
        loginSuccess({
          token: response.data.data.token,
          refreshToken: response.data.data.refreshToken,
        }),
      );
      return;
    }
    dispatch(getCurrentUserError(response.data.message));
  }
};

export { register, logOut, logIn, getCurrentUser };
