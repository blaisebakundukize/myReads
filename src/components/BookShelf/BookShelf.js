import React from "react";

/**
 * @description Component that contains shelves of the same type
 * @example
 * const title = "Currently Reading"
 * return (
 *  <div>
 *    <h2>{title}</h2>
 *    <div>
 *      {children}
 *    </div>
 *  </div>
 * )
 */
const BookShelf = (props) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.title}</h2>
      <div className='bookshelf-books'>{props.children}</div>
    </div>
  );
};

export default BookShelf;
