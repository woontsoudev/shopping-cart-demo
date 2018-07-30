import actions from "./actions/types";

const defaultState = {
  products: []
};

export default (state = defaultState, action) => {
  let products = [...state.products];

  switch (action.type) {
    case actions.ADD_PRODUCT:
      products.push(action.product);
      return { products };
    case actions.REMOVE_PRODUCT:
      const newState = products.filter(product => {
        return product._id !== action.productId;
      });
      return { products: newState };
    case actions.CLEAR_ALL:
      return {
        products: []
      };
    case actions.CHECKOUT:
      return {
        products: []
      };
    default:
      return state;
  }
};
