import { createAction } from '@reduxjs/toolkit';

/*------------------Incomes------------------*/

const getTransactionsRequest = createAction('getTransactionsRequest');
const getTransactionsSuccess = createAction('getTransactionsSuccess');
const getTransactionsError = createAction('getTransactionsError');

const addTransactionRequest = createAction('addTransactionRequest');
const addTransactionSuccess = createAction('addTransactionSucces');
const addTransactionError = createAction('addTransactionError');

const deleteTransactionRequest = createAction('deleteTransactionRequest');
const deleteTransactionSuccess = createAction('deleteTransactionSucces');
const deleteTransactionError = createAction('deleteTransactionError');

const editTransactionRequest = createAction('editTransactionRequest');
const editTransactionSucces = createAction('editTransactionSucces');
const editTransactionError = createAction('editTransactionError');

/*------------------Transactions Report Month/Year------------------*/

const getTransactionsMonthYearRequest = createAction(
  'getTransactionsMonthYearRequest',
);
const getTransactionsMonthYearSuccess = createAction(
  'getTransactionsMonthYearSuccess',
);
const getTransactionsMonthYearError = createAction(
  'getTransactionsMonthYearError',
);

/*------------------Monthly Balances Year------------------*/

const getMonthlyBalanceRequest = createAction('getMonthlyBalanceRequest');
const getMonthlyBalanceSuccess = createAction('getMonthlyBalanceSuccess');
const getMonthlyBalanceError = createAction('getMonthlyBalanceError');

/*------------------Total Balance------------------*/

const setTotalBalanceRequest = createAction('setTotalBalanceRequest');
const setTotalBalanceSuccess = createAction('setTotalBalanceSuccess');
const setTotalBalanceError = createAction('setTotalBalanceError');

export {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  editTransactionRequest,
  editTransactionSucces,
  editTransactionError,
  getMonthlyBalanceRequest,
  getMonthlyBalanceSuccess,
  getMonthlyBalanceError,
  setTotalBalanceRequest,
  setTotalBalanceSuccess,
  setTotalBalanceError,
  getTransactionsMonthYearRequest,
  getTransactionsMonthYearSuccess,
  getTransactionsMonthYearError,
};
