import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  registerSuccess,
  registerError,
  repeatEmailVerifyRequest,
  repeatEmailVerifySuccess,
  repeatEmailVerifyOk,
  repeatEmailVerifyError,
  logoutSuccess,
  logoutError,
  uploadAvatarRequest,
  uploadAvatarSuccess,
  uploadAvatarError,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  loginGoogleSuccess,
  refreshLoginGoogleSuccess,
  registerRequest,
  logoutRequest,
  loginRequest,
  loginGoogleRequest,
  loginGoogleError,
  refreshLoginGoogleRequest,
  refreshLoginGoogleError,
} from './auth-actions';

const initialUserState = { name: null, email: null, balance: 0 };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [uploadAvatarSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const refreshToken = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.refreshToken,
  [refreshLoginGoogleSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => null,
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.token,
  [loginGoogleSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => null,
});
const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [registerSuccess]: () => null,
  [registerRequest]: () => null,
  [repeatEmailVerifyError]: setError,
  [repeatEmailVerifySuccess]: () => null,
  [repeatEmailVerifyRequest]: () => null,
  [loginError]: setError,
  [loginSuccess]: () => null,
  [loginRequest]: () => null,
  [uploadAvatarError]: setError,
  [uploadAvatarSuccess]: () => null,
  [uploadAvatarRequest]: () => null,
  [logoutError]: setError,
  [logoutError]: () => null,
  [logoutRequest]: () => null,
  [getCurrentUserError]: setError,
  [getCurrentUserRequest]: () => null,
  [getCurrentUserSuccess]: () => null,
  [loginGoogleError]: setError,
  [loginGoogleSuccess]: () => null,
  [loginGoogleRequest]: () => null,
  [refreshLoginGoogleError]: setError,
  [refreshLoginGoogleSuccess]: () => null,
  [refreshLoginGoogleRequest]: () => null,
});

const isLogin = createReducer(false, {
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const isFetchigCurrentUser = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const isRepeatEmailVerify = createReducer(null, {
  [repeatEmailVerifySuccess]: (_, { payload }) => payload.data.message,
  [repeatEmailVerifyOk]: () => null,
});
const authReducer = combineReducers({
  user,
  isLogin,
  token,
  refreshToken,
  error,
  isFetchigCurrentUser,
  isRepeatEmailVerify,
});
export { authReducer };
