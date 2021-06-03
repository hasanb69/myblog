import { combineReducers } from 'redux';
import CatReducer from './category/categoryreducer'

const rootReducer = combineReducers({
  cat: CatReducer
});

export default  rootReducer