import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: [
      { title: 'Want to Read', shortname: 'wantToRead' },
      { title: 'Currently Reading', shortname: 'currentlyReading' },
      { title: 'Read', shortname: 'read' }
    ]
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks />
        )}/>
        <Route exact path='/' render={() => (
          <ListBooks shelves={this.state.shelves}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
