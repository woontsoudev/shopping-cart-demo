import types from "./types";
import axios from "axios";

const checkout = cartProducts => ({
  type: types.CHECKOUT,
  cartProducts
});

const checkoutAsync = cartProducts => {
  return dispatch => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    axios
      .put(
        `${process.env.REACT_APP_API_ENDPOINT}/products/checkout`,
        cartProducts
      )
      .then(response => {
        console.log('from checkout ', response);
        dispatch(checkout());
      });
  };
  // return dispatch => {
  //   dispatch(checkout(cartProducts));
  // };
};

export default checkoutAsync;
