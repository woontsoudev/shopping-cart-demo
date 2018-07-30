import types from "./types";
// import axios from "axios";
// import jwtDecode from 'jwt-decode';

// Actions
const validToken = (authData) => ({
  type: types.TOKEN_VALID,
  authData
});

const invalidToken = () => ({
  type: types.TOKEN_INVALID
});

const getAuthData = () => {
  const token = localStorage.getItem("token");
  const expiration = localStorage.getItem("expiration");
  const userId = localStorage.getItem("userId");

  return { token, expiration, userId };
};

const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  localStorage.removeItem("userId");
};

// Actions Triger
const autoLoginAsync = () => {
  const { token } = getAuthData();

  return dispatch => {
    if (token) {
      dispatch(validToken(getAuthData()));
    } else {
      clearAuthData();
      dispatch(invalidToken());
    }
  };
};

export default autoLoginAsync;
