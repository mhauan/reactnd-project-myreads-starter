import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(booksOnShelf => booksOnShelf.shelf === this.props.shelf.id).map((book, i) => {
              return(
                <li key={i}>
                  <Book book={book}/>
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
