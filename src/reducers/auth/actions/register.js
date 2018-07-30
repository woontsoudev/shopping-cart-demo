import types from './types';
import axios from 'axios';

// Actions
const registerUser = (userInfo) => ({
  type: types.REGISTER,
  userInfo
});

// Actions Triger
const registerUserAsync = (authData) => {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/signup`, authData).then(response => {
      dispatch(registerUser(response.data));
    })
    .catch(error => console.log(error))
  };
};

export default registerUserAsync;