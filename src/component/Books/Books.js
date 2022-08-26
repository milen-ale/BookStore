import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateNewBook from './CreateNewBook';
import BookList from './BookList';

function Books() {
  const [books, addBooks] = useState();

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    addBooks([...books, newBook]);
  };

  return (
    <div>
      <BookList />
      <CreateNewBook addBookProps={addBook} />
    </div>
  );
}
export default Books;
