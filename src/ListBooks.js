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
    const { books, onMoveBook, shelves } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf, i) => {
              return (
                <Bookshelf
                  key={i}
                  shelf={shelf}
                  books={books}
                  onMoveBook={onMoveBook}
                  shelves={shelves}
                />
              )
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
