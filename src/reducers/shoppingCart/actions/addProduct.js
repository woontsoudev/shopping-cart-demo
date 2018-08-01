import types from './types';

const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product
});

const addProductsAsync = (product) => {
  if (!product.inCartQuantity) {
    product.inCartQuantity = 1;
  }
  return dispatch => {
    dispatch(addProduct(product));
  };
};

export default addProductsAsync;