import React from 'react';
import PropTypes from 'prop-types';
import ShelfChange from './ShelfChange';

const Book = (props) => {
  const defaultCoverImage = "https://books.google.com/googlebooks/images/no_cover_thumb.gif";
  return (
      <li key={props.book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks ? props.book.imageLinks.thumbnail : defaultCoverImage})`}}> </div>
            <ShelfChange book={props.book} updateBookInfo={props.updateBookInfo}/>
            </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors}</div>
        </div>
      </li>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.object.IsRequired,
  updateBookInfo: PropTypes.func.IsRequired,
};
