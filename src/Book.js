import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
      return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${this.props.book.imageLinks.smallThumbnail}')` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.props.onMoveBook(this.props.book, event.target.value)} value={this.props.book.shelf}>
              <option value="none" disabled>Move to...</option>
              {this.props.shelves.map((shelf, i) => {
                console.log(shelf)
                return (
                  <option key={i} value={shelf.id}>{shelf.title}</option>
                )
              })}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book
