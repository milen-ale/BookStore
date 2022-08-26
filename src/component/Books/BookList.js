import React from 'react';

import BookComponent from './BookComponent';

function BookList() {
  const books = [
    {
      id: 1,
      bookName: 'Book One',
    },

    {
      id: 2,
      bookName: 'Book Two',
    },

    {
      id: 3,
      bookName: 'Book Three',
    },
  ];

  return (
    <ul>
      {books.map((book) => (
        <BookComponent key={book.id} book={book.bookName} />
      ))}
    </ul>
  );
}

export default BookList;
