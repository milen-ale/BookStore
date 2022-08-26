import React from 'react';
import PropTypes from 'prop-types';

function BookComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { Book } = props;

  return (
    <li className="list">
      {Book}
      <br />
      <br />
      <button type="button"> Remove</button>
    </li>
  );
}

// eslint-disable-next-line react/no-typos
BookComponent.PropTypes = {
  book: PropTypes.string.isRequired,
};

export default BookComponent;
