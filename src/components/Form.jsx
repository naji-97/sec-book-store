import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { addAsyncBook, addBook } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      author,
      item_id: uuidv4(),
      category: 'Mystery',
    };

    if (title !== '' && author !== '') {
      dispatch(addAsyncBook(data));
      dispatch(addBook(data));
    }

    setTitle('');
    setAuthor('');
  }

  return (
    <>
      <h2>Add  New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          id="author"
          placeholder="Book Author"
        />
        <Button className="add-book" type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
