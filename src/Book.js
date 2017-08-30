import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const { book, onMoveBook, shelves } = this.props

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.smallThumbnail}')` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => onMoveBook(book, event.target.value)} value={book.shelf ? book.shelf : "none"}>
              <option value="none" disabled>Move to...</option>
              {shelves.map((shelf, i) => {
                return (
                  <option key={i} value={shelf.id}>{shelf.title}</option>
                )
              })}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
