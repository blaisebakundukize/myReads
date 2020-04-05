import React, { Component } from "react";

import BookShelf from "./components/BookShelf/BookShelf";
import WrapBooks from "./components/Books/WrapBooks";
import * as BooksAPI from "./BooksAPI";
import { shelfTypes } from "./helpers/types";

class Dashboard extends Component {
  state = {
    books: [],
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
        currentlyReading.push(book.id);
      } else if (shelf === shelfTypes.read) {
        read.push(book.id);
      } else if (shelf === shelfTypes.wantToRead) {
        wantToRead.push(book.id);
      }
    });
    this.setState({
      books,
      currentlyReading,
      read,
      wantToRead,
      totalBooks: books.length,
      isDoneLoading: true,
    });
  };

  updateBook = (book) => {
    BooksAPI.update(book, book.selectedShelf).then((res) => {
      let updatedBooks = [];
      const { currentlyReading, wantToRead, read } = res;
      if (book.selectedShelf.toUpperCase() === shelfTypes.none) {
        updatedBooks = this.state.books.filter((bk) => bk.id !== book.id);
      } else {
        updatedBooks = this.state.books.map((bk) =>
          bk.id === book.id ? { ...bk, shelf: book.selectedShelf } : bk
        );
      }
      this.setState({
        books: updatedBooks,
        currentlyReading,
        wantToRead,
        read,
        totalBooks: updatedBooks.length,
      });
    });
  };

  render() {
    const {
      books,
      currentlyReading,
      wantToRead,
      read,
      isDoneLoading,
    } = this.state;
    let loading = "loading...";
    return (
      <>
        <BookShelf title='Currently Reading'>
          {!isDoneLoading ? (
            loading
          ) : (
            <WrapBooks
              books={books}
              shelfBooks={currentlyReading}
              shelf='CurrentlyReading'
              updateBook={this.updateBook}
            />
          )}
        </BookShelf>
        <BookShelf title='Want to Read'>
          {!isDoneLoading ? (
            loading
          ) : (
            <WrapBooks
              books={books}
              shelfBooks={wantToRead}
              shelf='WantToRead'
              updateBook={this.updateBook}
            />
          )}
        </BookShelf>
        <BookShelf title='Read'>
          {!isDoneLoading ? (
            loading
          ) : (
            <WrapBooks
              books={books}
              shelfBooks={read}
              shelf='Read'
              updateBook={this.updateBook}
            />
          )}
        </BookShelf>
      </>
    );
  }
}

export default Dashboard;
