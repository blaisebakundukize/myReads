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
  console.log(props.books);
  const books = props.books.map((book) => (
    <ItemBook
      key={book.id}
      title={book.title}
      authors={book.authors}
      imageUrl={book.imageLinks.smallThumbnail}
    />
  ));
  return <ol className='books-grid'>{books}</ol>;
};

export default ListBooks;
