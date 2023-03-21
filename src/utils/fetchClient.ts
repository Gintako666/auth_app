import axios from 'axios';

const URL = 'http://localhost:5000';

const registration = (data:{email: string, password: string}) => {
  return axios.post(`${URL}/registration`, data, { withCredentials: true });
};

const activateUser = (token: string) => {
  return axios.get(`${URL}/activation/${token}`, { withCredentials: true });
};

const login = (data:{email: string, password: string}) => {
  return axios.post(`${URL}/login`, data, { withCredentials: true });
};

const getUsers = (accessToken: string | undefined) => {
  return axios.get(`${URL}/users`, { withCredentials: true, headers: { Authorization: `Bearer ${accessToken}` } });
};

export const api = {
  registration,
  activateUser,
  login,
  getUsers,
};
