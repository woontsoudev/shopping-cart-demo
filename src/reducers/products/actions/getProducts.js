import types from './types';
import axios from 'axios';

const getProducts = (products) => ({
  type: types.GET_PRODUCTS,
  products
});

const getProductsAsync = () => {
  return dispatch => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/products`).then(response => {
      dispatch(getProducts(response.data.products));
    })
  };
};

export default getProductsAsync;