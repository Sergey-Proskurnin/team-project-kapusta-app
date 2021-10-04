import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './transactions-actions';

const transactionsDay = createReducer([], {
  [actions.getTransactionsSuccess]: (_, { payload }) => payload,
  [actions.addTransactionSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [actions.editTransactionSucces]: (state, { payload }) =>
    state.map(item => (item.id === payload.id ? payload : item)),
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
  [actions.getTransactionsRequest]: true,
  [actions.getTransactionsSuccess]: false,
  [actions.getTransactionsError]: false,
  [actions.addTransactionRequest]: true,
  [actions.addTransactionSuccess]: false,
  [actions.addTransactionError]: false,
  [actions.deleteTransactionRequest]: true,
  [actions.deleteTransactionSuccess]: false,
  [actions.deleteTransactionError]: false,
  [actions.editTransactionRequest]: true,
  [actions.editTransactionSucces]: false,
  [actions.editTransactionError]: false,
  [actions.getMonthlyBalanceRequest]: true,
  [actions.getMonthlyBalanceSuccess]: false,
  [actions.getMonthlyBalanceError]: false,
  [actions.setTotalBalanceRequest]: true,
  [actions.setTotalBalanceSuccess]: false,
  [actions.setTotalBalanceError]: false,
  [actions.getTransactionsMonthYearRequest]: true,
  [actions.getTransactionsMonthYearSuccess]: false,
  [actions.getTransactionsMonthYearError]: false,
});

const error = createReducer(null, {
  [actions.getTransactionsError]: (_, { payload }) => payload,
  [actions.addTransactionError]: (_, { payload }) => payload,
  [actions.deleteTransactionError]: (_, { payload }) => payload,
  [actions.editTransactionError]: (_, { payload }) => payload,
  [actions.getMonthlyBalanceError]: (_, { payload }) => payload,
  [actions.setTotalBalanceError]: (_, { payload }) => payload,
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
