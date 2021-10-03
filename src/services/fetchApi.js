import axios from 'axios';

axios.defaults.baseURL =
  'https://server-contacts-rest-api.herokuapp.com/api/v1';

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

//--------------------------transactions-operation--------------------------

const addTransaction = (transaction, balance) => axios.post('/', transaction);
const deleteTransaction = (transaction, balance) =>
  axios.delete('/', transaction);
const editTransaction = (transaction, balance) => axios.patch('/', transaction);
const getTransactionsByDate = date => axios.get('/', date);
const getTransactionsByPeriod = period => axios.get('/', period);
const setBalance = balance => axios.patch('/', balance);
const getBalance = axios.get('/');

const fetch = {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactionsByDate,
  getTransactionsByPeriod,
  getBalance,
  setBalance,
};

export { token, fetchSignUp, fetchLogin, fetchLogout, fetchCurrent, fetch };
