import React, { Component } from "react";

import "./App.css";

class Layout extends Component {
  render() {
    return (
      <div className='app'>
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <div>{this.props.children}</div>
          </div>
          <div className='open-search'>
            <button onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
