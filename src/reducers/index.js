import { combineReducers } from 'redux';
import UsersReducer from './users/users';
import AuthReducer from './auth/auth';
import ProductsReducer from './products/products';
import shoppingCartReducer from './shoppingCart/shoppingCart';
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
  auth: AuthReducer,
  users: UsersReducer,
  form: FormReducer,
  products: ProductsReducer,
  shoppingCart: shoppingCartReducer
});

export default rootReducer;
