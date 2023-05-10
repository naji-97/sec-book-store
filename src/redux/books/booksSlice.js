import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/s834KI6ZBCdsbjw4yOHw/books';

const initialState = {
  books: [],
  load: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const addAsyncBook = createAsyncThunk('books/addAsyncBook', async (book) => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/s834KI6ZBCdsbjw4yOHw/books', book);
  return response.data;
});

export const removeAsyncBook = createAsyncThunk('books/removeAsyncBook', async (itemId) => {
  const response = await axios.delete(`${BASE_URL}/${itemId}`);
  return response.data;
});

const newBooks = (load) => {
  const keys = Object.keys(load);
  const array = [];
  keys.forEach((key) => {
    array.push({
      itemId: key,
      ...load[key][0],
    });
  });
  return array;
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.itemId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.load = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.load = false;
        state.books = newBooks(action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.load = false;
        state.error = action.error.message;
      })
      .addCase(addAsyncBook.pending, (state) => {
        state.load = true;
      })
      .addCase(addAsyncBook.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(addAsyncBook.rejected, (state, action) => {
        state.load = false;
        state.error = action.error.message;
      })
      .addCase(removeAsyncBook.fulfilled, (state, action) => {
        const filteredBooks = state.books.filter((book) => book.itemId !== action.payload);
        return { ...state, books: filteredBooks, load: true };
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
