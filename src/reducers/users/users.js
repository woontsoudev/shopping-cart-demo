import actions from './actions/types';

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  // let list = [...state.list];

  switch (action.type) {
    case actions.GET_USERS:
      return {
        list: action.users
      };
    default:
      return state;
  }
};
