import actions from "./actions/types";

const defaultState = {
  products: []
};

export default (state = defaultState, action) => {
  let products = [...state.products];

  switch (action.type) {
    case actions.ADD_PRODUCT:
      let isOnCart = false;
      const productList = products.map(product => {
        if (product._id === action.product._id) {
          isOnCart = true;
          if (product.quantity > 0) {
            product.quantity--;
            product.inCartQuantity++;
          }
        }
        return product;
      });
      if (isOnCart) {
        return { products: productList };
      } else {
        action.product.quantity--;
        products.push(action.product);
        return { products };
      }
    case actions.REMOVE_PRODUCT:
      const productsList = products.filter(product => {
        return product._id !== action.productId;
      });
      return { products: productsList };
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
