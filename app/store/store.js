import { createStore, combineReducers } from 'redux';
import SearchReducer from './reducers/search.js';

const store  = () => createStore(SearchReducer());

export default store;