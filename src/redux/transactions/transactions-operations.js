import * as actions from './transactions-actions';
import { fetch } from 'services/fetchApi';
import { getTotalBalance, getTransactions } from './transactions-selectors';

const calculateBalance = (transaction, actionType) => {
  const initialBalance = getTotalBalance();
  switch (actionType) {
    case 'add':
      return transaction.type === 'income'
        ? initialBalance + transaction.sum
        : initialBalance - transaction.sum;
    case 'delete':
      return transaction.type === 'income'
        ? initialBalance - transaction.sum
        : initialBalance + transaction.sum;
    case 'edit':
      const initialTransaction = getTransactions().find(transaction.id);
      const priorBalance = initialBalance - initialTransaction;
      return transaction.type === 'income'
        ? priorBalance + transaction.sum
        : priorBalance - transaction.sum;
    default:
      return;
  }
};

const setBalance = balance => async dispatch => {
  dispatch(actions.setTotalBalanceRequest);
  try {
    const response = await fetch.setBalance(balance);
    dispatch(actions.setTotalBalanceSuccess(response.data));
  } catch (error) {}
};

const addTransaction = transaction => async dispatch => {
  dispatch(actions.addTransactionRequest());
  const balance = calculateBalance(transaction, 'add');
  try {
    const response = await fetch.addTransaction(transaction, balance);
    dispatch(actions.addTransactionSuccess(response.data.transaction));
    dispatch(actions.setTotalBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(actions.addTransactionError(error.message));
  }
};

const deleteTransaction = transaction => async dispatch => {
  dispatch(actions.deleteTransactionRequest());
  const balance = calculateBalance(transaction, 'delete');
  try {
    const response = await fetch.deleteTransaction(transaction.id, balance);
    dispatch(actions.deleteTransactionSuccess(transaction));
    dispatch(actions.setTotalBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(actions.addTransactionError(error.message));
  }
};

const editTransaction = transaction => async dispatch => {
  dispatch(actions.editTransactionRequest());
  const balance = calculateBalance(transaction, 'edit');
  try {
    const response = await fetch.editTransaction(transaction, balance);
    dispatch(actions.editTransactionSucces(response.data.transaction));
    dispatch(actions.setTotalBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(actions.editTransactionError(error.message));
  }
};

const getTransactionsMonthYear = (month, year) => async dispatch => {};

const getYearlyTransactions = year => async dispatch => {};

const transactionsOperations = {
  setBalance,
  addTransaction,
  deleteTransaction,
  editTransaction,
  getYearlyTransactions,
};

export default transactionsOperations;
