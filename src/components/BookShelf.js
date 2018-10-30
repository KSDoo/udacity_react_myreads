import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.distinc}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            book.shelf === props.distinc &&(
              <Book key={book.id} book={book} updateBookInfo={props.updateBookInfo}/>
            )))
          }
          </ol>
        </div>
      </div>
  );
}

export default BookShelf;

BookShelf.propTypes = {
  books: PropTypes.array.IsRequired,
  distinc: PropTypes.string.IsRequired,
  updateBookInfo: PropTypes.func.IsRequired,
};
