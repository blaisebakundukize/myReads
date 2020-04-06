import React, { Component } from "react";

import ListBooks from "./components/Books/ListBooks";
import * as BooksAPI from "./BooksAPI";

class SearchBook extends Component {
  state = {
    books: [],
    query: "",
  };

  updateBook = (book) => {
    BooksAPI.update(book, book.selectedShelf).then((res) => {
      console.log(res);
    });
  };

  onChangeSearchHandler = (value) => {
    this.setState(() => ({
      query: value,
    }));

    if (this.state.query !== "") {
      BooksAPI.search(this.state.query).then((books) => {
        if (books !== "undefined" || books.length > 0) {
          this.setState({ books });
        }
      });
    }
  };

  render() {
    const { books } = this.state;

    let displayBooks = null;
    if (books.length > 0) {
      displayBooks = <ListBooks books={books} updateBook={this.updateBook} />;
    }
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <button
            className='close-search'
            onClick={() => this.props.history.push("/")}
          >
            Close
          </button>
          <div className='search-books-input-wrapper'>
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(e) => this.onChangeSearchHandler(e.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>{displayBooks}</div>
      </div>
    );
  }
}

export default SearchBook;
