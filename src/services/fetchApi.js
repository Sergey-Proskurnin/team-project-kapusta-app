import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-api.herokuapp.com/api/v1/';
// axios.defaults.baseURL = 'http://localhost:5737/api/v1/';

//--------------------------------auth-operations-------------------------------
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchSignUp = credentials => axios.post('/users/signup', credentials);

const fetchLogin = credentials => axios.post('/users/login', credentials);

const fetchLogout = () => axios.post('/users/logout');

const fetchCurrent = () => axios.get('/users/current');

const fetchRefreshToken = () => axios.get('/users/refresh');

const fetchRepeatVerify = email => axios.post('/users/verify', email);

const fetchAvatar = formData =>
  axios.patch(
    '/users/avatars',
    formData,
    // {
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // }
    // }
  );

//--------------------------transactions-operations-------------------------------

const addTransaction = (transaction, balance) =>
  axios.post('/transaction', { transaction, balance });
const deleteTransaction = transactionId =>
  axios.delete(`/transaction/${transactionId}`);
const editTransaction = (transaction, balance) =>
  axios.put(`/transaction/${transaction._id}`, { transaction, balance });
const getTransactionsByDate = date => axios.get(`/transaction/${date}`);
const getTransactionsByPeriod = period =>
  axios.get(`/transaction/period/${period}`);
const setBalance = balance => axios.patch('/users/balance', { balance });

const fetch = {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactionsByDate,
  getTransactionsByPeriod,
  setBalance,
};

export {
  token,
  fetchSignUp,
  fetchLogin,
  fetchLogout,
  fetchCurrent,
  fetchRefreshToken,
  fetchRepeatVerify,
  fetchAvatar,
  fetch,
};
