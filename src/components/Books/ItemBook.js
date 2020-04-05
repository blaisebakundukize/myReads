import React from "react";

/**
 * @description Component that represents a book
 * @example
 * const title = "Needful Things"
 * const authors = ["Stephen King"]
 * const imageURl = "image-url.."
 * const key = "jAUODAAAQBAJ"
 * return (
 *  <ItemBook
 *    key={key}
 *    title={title}
 *    authors={authors}
 *    imageUrl={imageUrl}
 *  />
 * )
 */
const ItemBook = (props) => {
  const { title, authors, imageUrl } = props;
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>
          {props.children}
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{authors.join(", ")}</div>
      </div>
    </li>
  );
};

export default ItemBook;
