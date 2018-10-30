import React from 'react';
import PropTypes from 'prop-types';
import BookList from '../components/BookList.js';

const Home = (props) => {
  return (
    <BookList books={props.books} updateBookInfo={props.updateBookInfo}/>
  );
};

export default Home;

Home.propTypes = {
  books: PropTypes.array.IsRequired,
  updateBookInfo: PropTypes.func.IsRequired,
};
