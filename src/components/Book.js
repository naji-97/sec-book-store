import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook, removeAsyncBook } from '../redux/books/booksSlice';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const handelRemoveBook = () => {
    dispatch(removeAsyncBook(id));
    dispatch(removeBook(id));
  };
  return (
    <>
      <div>
        <ul>

          <li id={id}>
            <h4>
              Title :
              {title}
            </h4>
            <p>
              Author :
              {author}
            </p>
            <Button className="remove-book" type="button" value="Remove" onClick={handelRemoveBook} />
          </li>

        </ul>
      </div>

    </>
  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
