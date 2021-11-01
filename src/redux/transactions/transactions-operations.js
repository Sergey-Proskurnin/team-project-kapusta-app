import * as actions from './transactions-actions';
import { fetch } from 'services/fetchApi';
import { store } from '../store';
import Alert from 'components/Alert';
import { refresh } from 'redux/auth';

const setBalance = balance => async (dispatch, getState) => {
  dispatch(actions.setTotalBalanceRequest());

  try {
    const response = await fetch.setBalance(balance);
    dispatch(actions.setTotalBalanceSuccess(response.data.data.balance));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      await refresh(dispatch, getState);
      const response = await fetch.setBalance(balance);
      dispatch(actions.setTotalBalanceSuccess(response.data.data.balance));
      return;
    }
    dispatch(actions.setTotalBalanceError(response.data.message));
    Alert(response.data.message);
  }
};

const addTransaction = transaction => async (dispatch, getState) => {
  dispatch(actions.addTransactionRequest());
  const balance = calculateBalance(transaction, 'add');
  const splitedDate = dateSplitter(transaction.date);
  try {
    const response = await fetch.addTransaction(
      Object.assign(transaction, splitedDate),
      balance,
    );

    dispatch(actions.addTransactionSuccess(response.data.resultTransaction));
    dispatch(actions.setTotalBalanceSuccess(response.data.balance));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      await refresh(dispatch, getState);
      const response = await fetch.addTransaction(
        Object.assign(transaction, splitedDate),
        balance,
      );
      dispatch(actions.addTransactionSuccess(response.data.resultTransaction));
      dispatch(actions.setTotalBalanceSuccess(response.data.balance));
      return;
    }
    dispatch(actions.addTransactionError(response.data.message));
    Alert(response.data.message);
  }
};

const deleteTransaction = transaction => async (dispatch, getState) => {
  dispatch(actions.deleteTransactionRequest());
  const balance = calculateBalance(transaction, 'delete');
  try {
    await fetch.deleteTransaction(transaction._id);
    const setBalance = await fetch.setBalance(balance);
    dispatch(actions.deleteTransactionSuccess(transaction._id));
    dispatch(actions.setTotalBalanceSuccess(setBalance.data.data.balance));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      await refresh(dispatch, getState);
      await fetch.deleteTransaction(transaction._id);
      const setBalance = await fetch.setBalance(balance);
      dispatch(actions.deleteTransactionSuccess(transaction._id));
      dispatch(actions.setTotalBalanceSuccess(setBalance.data.data.balance));
      return;
    }
    dispatch(actions.addTransactionError(response.data.message));
    Alert(response.data.message);
  }
};

const editTransaction = transaction => async (dispatch, getState) => {
  dispatch(actions.editTransactionRequest());
  const balance = calculateBalance(transaction, 'edit');

  try {
    const response = await fetch.editTransaction(transaction, balance);
    dispatch(actions.editTransactionSucces(response.data.result));
    dispatch(actions.setTotalBalanceSuccess(response.data.balance));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      await refresh(dispatch, getState);
      const response = await fetch.editTransaction(transaction, balance);
      dispatch(actions.editTransactionSucces(response.data.result));
      dispatch(actions.setTotalBalanceSuccess(response.data.balance));
      return;
    }
    dispatch(actions.editTransactionError(response.data.message));
    Alert(response.data.message);
  }
};

const getTransactionsDay = date => async (dispatch, getState) => {
  dispatch(actions.getTransactionsRequest());
  try {
    const response = await fetch.getTransactionsByDate(date);

    dispatch(actions.getTransactionsSuccess(response.data.result));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      await refresh(dispatch, getState);
      const response = await fetch.getTransactionsByDate(date);

      dispatch(actions.getTransactionsSuccess(response.data.result));
      return;
    }
    dispatch(actions.getTransactionsError(response.data.message));
    Alert(response.data.message);
  }
};

const getTransactionsMonthYear =
  (month, year) => async (dispatch, getState) => {
    dispatch(actions.getTransactionsMonthYearRequest());
    try {
      const response = await fetch.getTransactionsByPeriod(`${month}-${year}`);
      dispatch(actions.getTransactionsMonthYearSuccess(response.data.result));
    } catch ({ response }) {
      if (response.data.message === 'Unvalid token') {
        await refresh(dispatch, getState);
        const response = await fetch.getTransactionsByPeriod(
          `${month}-${year}`,
        );
        dispatch(actions.getTransactionsMonthYearSuccess(response.data.result));
        return;
      }
      dispatch(actions.getTransactionsMonthYearError(response.data.message));
      Alert(response.data.message);
    }
  };

const getMonthlyBalancesYear = year => async (dispatch, getState) => {
  dispatch(actions.getMonthlyBalanceRequest());
  try {
    const response = await fetch.getTransactionsByPeriod(year);
    const balances = calculateBalancesPerMonth(response.data.result);
    dispatch(actions.getMonthlyBalanceSuccess(balances));
  } catch ({ response }) {
    if (response.data.message === 'Unvalid token') {
      await refresh(dispatch, getState);
      const response = await fetch.getTransactionsByPeriod(year);
      const balances = calculateBalancesPerMonth(response.data.result);
      dispatch(actions.getMonthlyBalanceSuccess(balances));
      return;
    }
    dispatch(actions.getMonthlyBalanceError(response.data.message));
    Alert(response.data.message);
  }
};

const transactionsOperations = {
  setBalance,
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactionsMonthYear,
  getMonthlyBalancesYear,
  getTransactionsDay,
};

export default transactionsOperations;

//-------------helpers--------------------

const calculateBalance = (transaction, actionType) => {
  const initialBalance = store.getState().wallet.totalBalance;
  const transactionsList = store.getState().wallet.transactionsDay;
  switch (actionType) {
    case 'add':
      return transaction.type === 'income'
        ? Number(initialBalance) + Number(transaction.sum)
        : Number(initialBalance) - Number(transaction.sum);
    case 'delete':
      return transaction.type === 'income'
        ? Number(initialBalance) - Number(transaction.sum)
        : Number(initialBalance) + Number(transaction.sum);
    case 'edit':
      const initialTransaction = transactionsList.find(
        item => item._id === transaction._id,
      );
      const priorBalance =
        Number(initialBalance) - Number(initialTransaction.sum);
      return transaction.type === 'income'
        ? Number(priorBalance) + Number(transaction.sum)
        : Number(priorBalance) - Number(transaction.sum);
    default:
      return;
  }
};

const calculateBalancesPerMonth = transactions => {
  const result = [];
  transactions.map(transaction => {
    const balanceByMonth = result.find(
      item => item.month === transaction.month,
    );
    if (!balanceByMonth) {
      return result.push({
        month: transaction.month,
        value:
          transaction.type === 'income' ? +transaction.sum : -transaction.sum,
      });
    } else {
      return transaction.type === 'income'
        ? (balanceByMonth.value += transaction.sum)
        : (balanceByMonth.value -= transaction.sum);
    }
  });

  return result;
};

const dateSplitter = date => {
  const splittedDate = {
    month: String(date.split('.')[1]),
    year: String(date.split('.')[2]),
  };
  return splittedDate;
};
