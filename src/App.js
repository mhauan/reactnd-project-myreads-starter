import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: [
      { title: 'Want to Read', id: 'wantToRead' },
      { title: 'Currently Reading', id: 'currentlyReading' },
      { title: 'Read', id: 'read' }
    ],
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf
    let books = this.state.books.filter(books => books.id !== book.id)
    books.push(book)
    this.setState({ books: books })
  }

  addBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
    })
    book.shelf = shelf
    let books = this.state.books.filter(books => books.id !== book.id)
    books.push(book)
    this.setState({ books: books })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            shelves={this.state.shelves}
            onAddBook={this.addBook}
          />
        )}/>
        <Route exact path='/' render={() => (
          <ListBooks
            shelves={this.state.shelves}
            books={this.state.books}
            onMoveBook={this.moveBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
