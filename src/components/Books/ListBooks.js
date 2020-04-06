import React from "react";

import ItemBook from "./ItemBook";

/**
 * @description Component returns ordered list of books
 * @example
 * const books = []
 * return (
 *  <ol>{books}</ol>
 * )
 */
const ListBooks = (props) => {
  let { books, shelfBooks } = props;
  if (shelfBooks) {
    books = books.filter((book) => props.shelfBooks.includes(book.id));
  }
  const AvailableBooks = books.map((book) => (
    <ItemBook
      key={book.id}
      title={book.title}
      authors={book.authors}
      imageUrl={book.imageLinks.smallThumbnail}
      shelf={book.shelf}
      onSelectShelf={props.updateBook}
      bookId={book.id}
    />
  ));
  return <ol className='books-grid'>{AvailableBooks}</ol>;
};

export default ListBooks;
