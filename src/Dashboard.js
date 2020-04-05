import React, { Component } from "react";

import CategoryBook from "./components/CategoryBook/CategoryBook";
import ListBook from "./components/Books/ListBooks";

class Dashboard extends Component {
  render() {
    return (
      <CategoryBook title='Current Reading'>
        <ListBook />
      </CategoryBook>
    );
  }
}

export default Dashboard;
