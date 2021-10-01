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

//---------------------------contacts-operation----------------------------------



export {
  token,
  fetchSignUp,
  fetchLogin,
  fetchLogout,
  fetchCurrent,
 };
