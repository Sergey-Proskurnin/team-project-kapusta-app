import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './transactions-actions';
import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  uploadAvatarRequest,
  uploadAvatarSuccess,
  uploadAvatarError,
  loginRequest,
  loginSuccess,
  loginError,
  repeatEmailVerifyRequest,
  repeatEmailVerifySuccess,
  repeatEmailVerifyOk,
  repeatEmailVerifyError,
} from 'redux/auth';

const transactionsDay = createReducer([], {
  [actions.getTransactionsSuccess]: (_, { payload }) => payload,
  [actions.addTransactionSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(item => item._id !== payload),
  [actions.editTransactionSucces]: (state, { payload }) =>
    state.map(item => (item._id === payload._id ? payload : item)),
});

const transactionsMonthYear = createReducer([], {
  [actions.getTransactionsMonthYearSuccess]: (_, { payload }) => payload,
});

const monthlyBalancesYear = createReducer([], {
  [actions.getMonthlyBalanceSuccess]: (_, { payload }) => payload,
});

const totalBalance = createReducer(0, {
  [actions.setTotalBalanceSuccess]: (_, { payload }) => payload,
});

const loader = createReducer(false, {
  [actions.getTransactionsRequest]: () => true,
  [actions.getTransactionsSuccess]: () => false,
  [actions.getTransactionsError]: () => false,
  [actions.addTransactionRequest]: () => true,
  [actions.addTransactionSuccess]: () => false,
  [actions.addTransactionError]: () => false,
  [actions.deleteTransactionRequest]: () => true,
  [actions.deleteTransactionSuccess]: () => false,
  [actions.deleteTransactionError]: () => false,
  [actions.editTransactionRequest]: () => true,
  [actions.editTransactionSucces]: () => false,
  [actions.editTransactionError]: () => false,
  [actions.getMonthlyBalanceRequest]: () => true,
  [actions.getMonthlyBalanceSuccess]: () => false,
  [actions.getMonthlyBalanceError]: () => false,
  [actions.setTotalBalanceRequest]: () => true,
  [actions.setTotalBalanceSuccess]: () => false,
  [actions.setTotalBalanceError]: () => false,
  [actions.getTransactionsMonthYearRequest]: () => true,
  [actions.getTransactionsMonthYearSuccess]: () => false,
  [actions.getTransactionsMonthYearError]: () => false,
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [uploadAvatarRequest]: () => true,
  [uploadAvatarSuccess]: () => false,
  [uploadAvatarError]: () => false,
  [repeatEmailVerifyRequest]: () => true,
  [repeatEmailVerifySuccess]: () => false,
  [repeatEmailVerifyOk]: () => false,
  [repeatEmailVerifyError]: () => false,
});

const error = createReducer(null, {
  [actions.getTransactionsRequest]: () => null,
  [actions.getTransactionsSuccess]: () => null,
  [actions.getTransactionsError]: (_, { payload }) => payload,
  [actions.addTransactionRequest]: () => null,
  [actions.addTransactionSuccess]: () => null,
  [actions.addTransactionError]: (_, { payload }) => payload,
  [actions.deleteTransactionRequest]: () => null,
  [actions.deleteTransactionSuccess]: () => null,
  [actions.deleteTransactionError]: (_, { payload }) => payload,
  [actions.editTransactionRequest]: () => null,
  [actions.editTransactionSucces]: () => null,
  [actions.editTransactionError]: (_, { payload }) => payload,
  [actions.getMonthlyBalanceRequest]: () => null,
  [actions.getMonthlyBalanceSuccess]: () => null,
  [actions.getMonthlyBalanceError]: (_, { payload }) => payload,
  [actions.setTotalBalanceRequest]: () => null,
  [actions.setTotalBalanceSuccess]: () => null,
  [actions.setTotalBalanceError]: (_, { payload }) => payload,
  [actions.getTransactionsMonthYearRequest]: () => null,
  [actions.getTransactionsMonthYearSuccess]: () => null,
  [actions.getTransactionsMonthYearError]: (_, { payload }) => payload,
});

const wallet = combineReducers({
  transactionsDay,
  transactionsMonthYear,
  monthlyBalancesYear,
  totalBalance,
  loader,
  error,
});

export { wallet };
