import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state ={
    query: '',
    books: []
  }

updateQuery = (query) => {
  if (query !== "") {
    this.setState({ query: query })
    BooksAPI.search(query, 2).then((res) => {
      (query !== "" && res.error !== "empty query" && (this.setState({ books: res})))
    })
  } else {
    this.setState({ books: [], query: query })
  }
}

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(this.state.query !== "" && (this.state.books.map((book, i) => {
              return(
                <li key={i}>
                  <Book
                    book={book}
                    onMoveBook={this.props.onAddBook}
                    shelves={this.props.shelves}
                  />
                </li>
              )
            })))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
