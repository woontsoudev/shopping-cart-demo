import types from './types';

const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product
});

const addProductsAsync = (product) => {
  return dispatch => {
    dispatch(addProduct(product));
  };
};

export default addProductsAsync;