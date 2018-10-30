import Home from './pages/Home';
import Search from './pages/Search';
import * as BooksAPI from "./utils/BooksAPI";

import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';;



class BooksApp extends Component {
  state = {
    books:[]
  }

  updateBookInfo = () => {
    BooksAPI.getAll().then((books) =>{
      this.setState({books})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState({
        books:books,
      })
    })
  }

  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => {
              return (
                <Home books={this.state.books} updateBookInfo={this.updateBookInfo}/>
              )}}
          />
        <Route exact path='/search' component={Search}/>
        </div>
    );
  }
}

export default BooksApp;
