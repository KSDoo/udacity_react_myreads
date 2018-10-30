import React,{Component} from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI'

class ShelfChange extends Component {

  state ={
    shelf:'none'
  }

  componentDidMount(){
    this.setState({shelf:this.props.book.shelf})
  }
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={(e)=> {
          BooksAPI.update(this.props.book, e.target.value).then(()=>
                this.props.updateBookInfo()
          )
          this.setState({shelf:e.target.value})
        }}>
          <option value="nerver" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChange;

ShelfChange.propTypes = {
  book: PropTypes.object.IsRequired,
  updateBookInfo: PropTypes.func.IsRequired,
};
