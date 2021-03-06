import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import shoppingCartReducer from './shoppingCartReducer';

const reducer = combineReducers({
  counter: counterReducer,
  shoppingCart: shoppingCartReducer,
});
export default reducer;
