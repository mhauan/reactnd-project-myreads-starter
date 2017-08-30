import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(booksOnShelf => booksOnShelf.shelf === this.props.shelf.id).map((book, i) => {
              return(
                <li key={i}>
                  <Book
                    book={book}
                    onMoveBook={this.props.onMoveBook}
                    shelves={this.props.shelves}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
