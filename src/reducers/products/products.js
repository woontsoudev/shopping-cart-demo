import actions from './actions/types';

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  // let list = [...state.list];

  switch (action.type) {
    case actions.GET_PRODUCTS:
      return {
        list: action.products
      };
    default:
      return state;
  }
};
