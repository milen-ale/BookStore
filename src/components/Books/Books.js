import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { connect, useDispatch } from 'react-redux';

import BookList from './BookList';
import CreateNewBook from './CreateNewBook';
import { fetchBooks, addBook, deleteBook } from '../../redux/books/booksActions';

import styles from './Books.module.css';

function Books(props) {
  const { fetchBooks, bookData } = props;
  useEffect(() => {
    fetchBooks();
  }, []);

  const dispatch = useDispatch();

  const removeBookFromStore = (id) => {
    dispatch(deleteBook(id));
  };

  const submitBookToStore = (title, author, category) => {
    const newBook = {
      item_id: uuidv4(),
      title: `${title}`,
      author: `${author}`,
      category,
    };
    dispatch(addBook(newBook));
    console.log('add book dispatch ', newBook.author);
  };

  return (
    <div className={styles.main_page}>
      <BookList
        books={bookData}
        removeBookProps={removeBookFromStore}
      />
      <div className={styles.line} />
      <CreateNewBook submitBookToStoreProps={submitBookToStore} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  bookData: state.booksReducer.books,
});

const mapDispatch = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

Books.propTypes = {
  bookData: PropTypes.instanceOf(Object).isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Books);
