import * as actions from './transactions-actions';
import { fetch } from 'services/fetchApi';
import { store } from '../store';

const setBalance = balance => async dispatch => {
  dispatch(actions.setTotalBalanceRequest());

  try {
    const response = await fetch.setBalance(balance);
    dispatch(actions.setTotalBalanceSuccess(response.data.data.balance));
  } catch (error) {
    dispatch(actions.setTotalBalanceError(error.message));
  }
};

const addTransaction = transaction => async dispatch => {
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
  } catch (error) {
    dispatch(actions.addTransactionError(error.message));
  }
};

const deleteTransaction = transaction => async dispatch => {
  dispatch(actions.deleteTransactionRequest());
  const balance = calculateBalance(transaction, 'delete');
  try {
    await fetch.deleteTransaction(transaction._id);
    const setBalance = await fetch.setBalance(balance);
    dispatch(actions.deleteTransactionSuccess(transaction._id));
    dispatch(actions.setTotalBalanceSuccess(setBalance.data.data.balance));
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

const getTransactionsDay = date => async dispatch => {
  dispatch(actions.getTransactionsRequest());
  try {
    const response = await fetch.getTransactionsByDate(date);

    dispatch(actions.getTransactionsSuccess(response.data.result));
  } catch (error) {
    dispatch(actions.getTransactionsError(error.message));
  }
};

const getTransactionsMonthYear = (month, year) => async dispatch => {
  dispatch(actions.getTransactionsMonthYearRequest());
  try {
    const response = await fetch.getTransactionsByPeriod(`${month}-${year}`);
    dispatch(actions.getTransactionsMonthYearSuccess(response.data.result));
  } catch (error) {
    dispatch(actions.getTransactionsMonthYearError(error.message));
  }
};

const getMonthlyBalancesYear = year => async dispatch => {
  dispatch(actions.getMonthlyBalanceRequest());
  try {
    const response = await fetch.getTransactionsByPeriod(year);
    const balances = calculateBalancesPerMonth(response.data.result);
    dispatch(actions.getMonthlyBalanceSuccess(balances));
  } catch (error) {
    dispatch(actions.getMonthlyBalanceError(error.message));
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
      const initialTransaction = transactionsList.find(transaction.id);
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
