import types from "./types";
import axios from "axios";

const createProduct = product => ({
  type: types.CREATE,
  product
});

const createProductAsync = product => {
  console.log(product);
  return dispatch => {
    product.quantity = product.stock;
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/products`, product)
      .then(response => {
        dispatch(createProduct(response.data.product));
      });
  };
};

export default createProductAsync;
