import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5737/api/v1';

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

const fetchBalance = sum => axios.patch('/users/current', sum);

//---------------------------contacts-operation----------------------------------

export {
  token,
  fetchSignUp,
  fetchLogin,
  fetchLogout,
  fetchCurrent,
  fetchBalance,
};
