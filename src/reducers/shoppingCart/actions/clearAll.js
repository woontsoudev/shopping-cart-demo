import types from './types';

const clearAll = () => ({
  type: types.CLEAR_ALL
});

const clearAllAsync = () => {
  return dispatch => {
    dispatch(clearAll());
  };
};

export default clearAllAsync;