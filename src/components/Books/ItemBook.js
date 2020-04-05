import React from "react";

const ItemBook = (props) => {
  return (
    <div>
      <div>Item Book</div>
      {props.children}
    </div>
  );
};

export default ItemBook;
