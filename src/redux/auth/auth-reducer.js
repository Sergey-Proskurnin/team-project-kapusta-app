import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutError,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  changeBalanceSuccess,
  changeBalanceRequest,
  changeBalanceError,
} from './auth-actions';

const initialUserState = { name: null, email: null, balance: 0 };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [changeBalanceSuccess]: (_, { payload }) => payload.balance,
});

const token = createReducer(null, {
  // [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
  [changeBalanceError]: setError,
});

const isLogin = createReducer(false, {
  [registerSuccess]: () => false,
  [loginSuccess]: () => true,
  [changeBalanceSuccess]: () => true,
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
  [changeBalanceRequest]: () => true,
  [changeBalanceSuccess]: () => false,
  [changeBalanceError]: () => false,
});

const authReducer = combineReducers({
  user,
  isLogin,
  token,
  error,
  isFetchigCurrentUser,
});
export { authReducer };
