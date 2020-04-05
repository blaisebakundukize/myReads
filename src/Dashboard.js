import React, { Component } from "react";

import BookShelf from "./components/BookShelf/BookShelf";
import WrapBooks from "./components/Books/WrapBooks";
import * as BooksAPI from "./BooksAPI";
import { shelfTypes } from "./helpers/types";

class Dashboard extends Component {
  state = {
    currentlyReading: [],
    read: [],
    wantToRead: [],
    totalBooks: 0,
    isDoneLoading: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.arrangeBooks(books);
    });
  }

  arrangeBooks = (books) => {
    const currentlyReading = [];
    const read = [];
    const wantToRead = [];

    books.forEach((book) => {
      const shelf = book.shelf.toUpperCase();
      if (shelf === shelfTypes.currentlyReading) {
        currentlyReading.push(book);
      } else if (shelf === shelfTypes.read) {
        read.push(book);
      } else if (shelf === shelfTypes.wantToRead) {
        wantToRead.push(book);
      }
    });
    this.setState({
      currentlyReading,
      read,
      wantToRead,
      totalBooks: books.length,
      isDoneLoading: true,
    });
  };

  render() {
    const { currentlyReading, wantToRead, read, isDoneLoading } = this.state;
    let loading = "loading";
    return (
      <>
        <BookShelf title='Currently Reading'>
          {!isDoneLoading ? (
            loading
          ) : (
            <WrapBooks books={currentlyReading} shelf='CurrentlyReading' />
          )}
        </BookShelf>
        <BookShelf title='Want to Read'>
          {!isDoneLoading ? (
            loading
          ) : (
            <WrapBooks books={wantToRead} shelf='WantToRead' />
          )}
        </BookShelf>
        <BookShelf title='Read'>
          {!isDoneLoading ? loading : <WrapBooks books={read} shelf='Read' />}
        </BookShelf>
      </>
    );
  }
}

export default Dashboard;
