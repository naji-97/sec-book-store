import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.itemId}
          id={book.itemId}
          title={book.title}
          author={book.author}

        />
      ))}
      <Form />
    </>
  );
}

export default BookList;
