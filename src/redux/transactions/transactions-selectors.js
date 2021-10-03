const getTotalBalance = state => state.wallet.totalBalance;
const getMonthlyBalances = state => state.wallet.monthlyBalances;
const getTransactions = state => state.wallet.transactions;

export { getTotalBalance, getMonthlyBalances, getTransactions };
