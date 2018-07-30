import types from './types';

const removeProduct = (productId) => ({
  type: types.REMOVE_PRODUCT,
  productId
});

const removeProductAsync = (productId) => {
  return dispatch => {
    dispatch(removeProduct(productId));
  };
};

export default removeProductAsync;