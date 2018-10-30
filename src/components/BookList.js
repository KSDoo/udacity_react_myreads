import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import BookShelf from "./BookShelf"



const BookList = (props) => {
  return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={props.books} distinc="currentlyReading" updateBookInfo={props.updateBookInfo}/>
            <BookShelf books={props.books} distinc="wantToRead" updateBookInfo={props.updateBookInfo}/>
            <BookShelf books={props.books} distinc="read" updateBookInfo={props.updateBookInfo}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
  );
}
export default BookList;

BookList.propTypes = {
  books: PropTypes.array.IsRequired,
  updateBookInfo: PropTypes.func.IsRequired,
};
