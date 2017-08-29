import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelves.map((shelf, i) => {
              return <Bookshelf key={i} shelf={shelf} books={this.props.books} onMoveBook={this.props.onMoveBook}/>
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
