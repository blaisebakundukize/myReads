import React from "react";

import ListBooks from "./ListBooks";

/**
 * @description Component that return list or a message
 * @example
 * const data = []
 * const shelf = 'CurrentlyReading'
 * return (
 *  <ListBooks
 *    data={data}
 *  />
 * )
 * return (
 *  <p>{shelf} books not found.</p>
 * )
 */
const WrapBooks = (props) => {
  const { books, shelf } = props;
  if (books.length === 0) {
    return <p>`"${shelf}" books not found. Click plus button to add some!`</p>;
  }
  return (
    <ListBooks
      books={books}
      shelfBooks={props.shelfBooks}
      updateBook={props.updateBook}
    />
  );
};

export default WrapBooks;
