import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook, removeAsyncBook } from '../redux/books/booksSlice';
import './styles/book.css';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const handelRemoveBook = () => {
    dispatch(removeAsyncBook(id));
    dispatch(removeBook(id));
  };
  return (
    <div className="Lesson-Panel">
      <p className="school-of">
        {category}
        {' '}
      </p>
      <h4 className="title">{title}</h4>
      <p className="suzanne-collins">{author}</p>
      <div className="flex-spac-btwn">
        <div className="buttons-contanier flex">
          <Button className="comments-btn" value="Comment" type="button" />
          <hr />
          <Button className="remove-btn" type="button" onClick={handelRemoveBook} value="Remove" />
          <hr />
          <Button className="edit-btn" value="Edit" type="button" />
        </div>
        <div className="progress-chapter  flex-spac-btwn">
          <div className="percent-container flex ">
            <div className="oval-2" />
            <div className="percent-info">
              <p className="percent-complete">100%</p>
              <p className="completed">Completed</p>
            </div>
          </div>

          <hr />
          <div className="book-chap">
            <p className="chap-now current-chapter">Current Chapter</p>
            <p className="current-lesson">Chapter 20</p>
            <Button
              className="update-btn update-progress"
              value="UPDATE PROGRESS"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>

  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
};

Book.defaultProps = {
  category: 'Web Development',
};

export default Book;
