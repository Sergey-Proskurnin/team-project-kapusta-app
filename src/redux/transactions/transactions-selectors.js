const getTotalBalance = state => state.wallet.totalBalance;
const getMonthlyBalances = state => state.wallet.monthlyBalancesYear;
const getTransactionsPerDay = state => state.wallet.transactionsDay;
const getTransactionsPerMonth = state => state.wallet.transactionsMonthYear;
const getLoader = state => state.wallet.loader;

export {
  getTotalBalance,
  getMonthlyBalances,
  getTransactionsPerDay,
  getTransactionsPerMonth,
  getLoader,
};
