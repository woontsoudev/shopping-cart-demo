import types from './types';
import axios from 'axios';

// Actions
const loginUser = userInfo => ({
  type: types.LOGIN_SUCCESS,
  userInfo
});

const loginFail = () => ({
  type: types.LOGIN_FAIL
});

const saveAuthData = (token, expirationDate, userId) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expiration", expirationDate);
  localStorage.setItem("userId", userId);
}

// Actions Triger
const loginUserAsync = (authData) => {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/login`, authData).then(response => {
      saveAuthData(response.data.token, response.data.expiresIn, response.data.userId);
      dispatch(loginUser(response.data));
    })
    .catch(() => dispatch(loginFail()))
  };
};

export default loginUserAsync;