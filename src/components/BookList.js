import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

function BookList() {
  const [books] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      author: 'Naji',
    },
    {
      id: 2,
      title: 'Develop website and add content',
      author: 'Ali',
    },
    {
      id: 3,
      title: 'Deploy to live server',
      author: 'Imane',
    },
  ]);

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </>
  );
}

export default BookList;