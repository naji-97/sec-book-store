import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/booksSlice';
import './styles/bookList.css';

function BookList() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}

        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
