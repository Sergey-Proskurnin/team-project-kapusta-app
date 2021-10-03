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

const loader = createReducer(false, {});

const wallet = combineReducers({
  transactionsDay,
  transactionsMonthYear,
  monthlyBalancesYear,
  totalBalance,
  loader,
});

export { wallet };
