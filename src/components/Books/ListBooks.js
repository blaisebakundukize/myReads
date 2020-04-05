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
  const shelfBooks = props.books.filter((book) =>
    props.shelfBooks.includes(book.id)
  );
  const books = shelfBooks.map((book) => (
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
  return <ol className='books-grid'>{books}</ol>;
};

export default ListBooks;
