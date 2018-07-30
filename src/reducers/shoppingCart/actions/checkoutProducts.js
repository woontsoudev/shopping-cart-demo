import types from './types';

const checkout = () => ({
  type: types.CHECKOUT
});

const checkoutAsync = () => {
  return dispatch => {
    dispatch(checkout());
  };
};

export default checkoutAsync;