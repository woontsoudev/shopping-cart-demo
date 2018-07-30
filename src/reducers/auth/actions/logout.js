import types from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3004'

const getUsers = (users) => ({
  type: types.GET_USERS,
  users
});

const getUsersAsync = () => {
  return dispatch => {
    axios.get(`${apiUrl}/users`).then(response => {
      dispatch(getUsers(response.data));
    })
  };
};

export default getUsersAsync;