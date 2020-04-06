import React, { Component } from "react";

import SelectBookShelf from "../BookShelf/SelectBookShelf";

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

class ItemBook extends Component {
  handleSelectedShelf = (event) => {
    const selectedShelf = event.target.value;
    const { bookId: id, shelf } = this.props;
    if (shelf !== selectedShelf) {
      this.props.onSelectShelf({ id, selectedShelf, shelf });
    }
  };
  render() {
    const { title, authors, imageUrl, shelf } = this.props;
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
            <SelectBookShelf
              onSelectShelf={this.handleSelectedShelf}
              shelf={shelf}
            />
          </div>
          <div className='book-title'>{title}</div>
          <div className='book-authors'>{authors}</div>
        </div>
      </li>
    );
  }
}

export default ItemBook;
