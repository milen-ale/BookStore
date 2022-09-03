import React from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styles from './Books.module.css';

function BookComponent(props) {
  const { book, removeBookProps, id } = props;

  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 20);
  const bookTitleSplited = book.title.split(',');
  const bookAuthorSplited = book.author.split(',');
  return (
    <li className={styles.book_section}>
      <div className={styles.book_section_left}>
        <span className={styles.bookCategory}>{ book.category }</span>
        <span className={styles.bookTitle}>{ bookTitleSplited[0] }</span>
        <span className={styles.bookAuthor}>
          { bookAuthorSplited[0] }
          { book.Author}
        </span>
        <div className={styles.bookCommentEdit}>
          <span>Comments</span>
          <span className={styles.commentVerticalLine} />
          <button
            onClick={() => removeBookProps(id)}
            type="button"
            className={styles.removebtn}
          >
            Remove
          </button>
          <span className={styles.commentVerticalLine} />
          <span>Edit</span>
        </div>
      </div>
      <div className={styles.statusProgress}>
        <div className={styles.percentage}>
          <CircularProgressbar
            styles={buildStyles({
              textColor: 'black',
              pathColor: '#0290ff',
            })}
            value={progress}
            text={`${progress}%`}
          />

          <span className={styles.span}>Completed</span>
        </div>
      </div>
      <span className={styles.statusVerticalLine} />
      <div className={styles.bookItem}>

        <h4 className="chapter">CURRENT CHAPTER</h4>
        <p className="verse">
          Chapter
          {' '}
          { chapter }
        </p>
        <button
          type="button"
          className={styles.bookProgress}
        >
          <p>UPDATE PROGRESS</p>
        </button>
      </div>
    </li>
  );
}

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired,
  removeBookProps: PropTypes.func.isRequired,
};

export default BookComponent;
