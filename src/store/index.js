import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  devToolsEnhancer(),
  applyMiddleware(thunk)
);

export default store;
