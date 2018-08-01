import { types as actions } from "./actions";

const defaultState = {
  isAuthenticated: false,
  userId: null,
  token: null,
  expiresIn: null,
  loginError: false,
  registered: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        userId: action.userInfo.userId,
        token: action.userInfo.token,
        expiresIn: action.userInfo.expiresIn
      };
    case actions.LOGIN_FAIL:
      return {
        ...state,
        loginError: true
      }
    case actions.LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        user: null
      };
    case actions.TOKEN_INVALID:
      return {
        isAuthenticated: false,
        userId: null,
        token: null,
        expiresIn: null,
        loginError: false
      };
    case actions.TOKEN_VALID:
      return {
        isAuthenticated: true,
        userId: action.authData.userId,
        token: action.authData.token,
        expiresIn: action.authData.expiration
      };
    case actions.REGISTER:
      return {...state, registered: true}
    default:
      return {...state};
  }
};
