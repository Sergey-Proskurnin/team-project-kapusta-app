import Alert from 'components/Alert';
import {
  registerRequest,
  registerSuccess,
  registerError,
  uploadAvatarRequest,
  uploadAvatarSuccess,
  uploadAvatarError,
  repeatEmailVerifyRequest,
  repeatEmailVerifySuccess,
  repeatEmailVerifyError,
  logoutRequest,
  logoutSuccess,
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
  fetchAvatar,
  fetchCurrent,
  fetchRepeatVerify,
  fetchRefreshToken,
} from 'services/fetchApi';

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await fetchSignUp(credentials);
    dispatch(registerSuccess(response.data));
  } catch ({ response }) {
    dispatch(registerError(response.data.message));
    Alert(response.data.message);
  }
};

const repeatVerify = email => async dispatch => {
  dispatch(repeatEmailVerifyRequest());
  try {
    const response = await fetchRepeatVerify(email);
    dispatch(repeatEmailVerifySuccess(response.data));
  } catch ({ response }) {
    dispatch(repeatEmailVerifyError(response.data.message));
    Alert(response.data.message);
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
    Alert(response.data.message);
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await fetchLogout();
    token.unset();
    dispatch(logoutSuccess());
  } catch ({ response }) {
    token.unset();
    dispatch(logoutSuccess());
  }
};

const uploadAvatar = formData => async (dispatch, getState) => {
  dispatch(uploadAvatarRequest());
  try {
    const response = await fetchAvatar(formData);
    dispatch(uploadAvatarSuccess(response.data.data));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      await refresh(dispatch, getState);
      const response = await fetchAvatar(formData);
      dispatch(uploadAvatarSuccess(response.data.data));
    } else {
      dispatch(uploadAvatarError(response.data.message));
      Alert(response.data.message);
    }
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
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
      return await refresh(dispatch, getState);
    }
    dispatch(getCurrentUserError(response.data.message));
    Alert(response.data.message);
  }
};

const refresh = async (dispatch, getState) => {
  const {
    auth: { refreshToken: persistedRefreshToken },
  } = getState();
  token.set(persistedRefreshToken);
  try {
    const response = await fetchRefreshToken();
    token.set(response.data.data.token);
    dispatch(getCurrentUserSuccess(response.data.data.user));
    dispatch(setTotalBalanceSuccess(response.data.data.user.balance));
    dispatch(
      loginSuccess({
        token: response.data.data.token,
        refreshToken: response.data.data.refreshToken,
      }),
    );
  } catch (error) {
    dispatch(logoutSuccess());
    token.unset();
    console.log(error.message);
  }
};

export {
  register,
  repeatVerify,
  logOut,
  logIn,
  getCurrentUser,
  refresh,
  uploadAvatar,
};
