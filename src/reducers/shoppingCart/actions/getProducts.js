import types from './types';

const getProducts = () => ({
  type: types.GET_PRODUCTS,
});

const getProductsAsync = () => {
  return dispatch => {
    dispatch(getProducts());
  };
};

export default getProductsAsync;