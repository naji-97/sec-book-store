import { combineReducers } from 'redux';
import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: booksSlice,
  categories: categoriesSlice,
});

export default rootReducer;
