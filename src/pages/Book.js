import { string } from 'prop-types';
import React, { PropTypes } from 'react';

const Book = props => {
  return (
    <div>
      Book - Fiche de livre
    </div>
  );
};

Book.propTypes = {
  author: string,
  title: string,
};

export default Book;