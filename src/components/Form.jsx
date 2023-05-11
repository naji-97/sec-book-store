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
      category: 'web development',
    };

    if (title !== '' && author !== '') {
      dispatch(addAsyncBook(data));
      dispatch(addBook(data));
    }

    setTitle('');
    setAuthor('');
  }

  return (
    <form action="" className="" method="" onSubmit={handleSubmit}>
      <div className="line" />
      <p className="form-title">Add New Book</p>
      <div className="input-group">
        <input
          style={{ color: 'black' }}
          type="text"
          placeholder="Book title"
          value={title}
          id="text"
          name="text"
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
        <input
          style={{ color: 'black' }}
          type="text"
          placeholder=" Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          id="author"
          name="author"
          className="author"
        />
        <Button type="submit" className="add-btn" value="Add book" />
      </div>
    </form>
  );
}

export default Form;
