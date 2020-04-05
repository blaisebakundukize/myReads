import React from "react";

const CategoryBook = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      {props.children}
    </div>
  );
};

export default CategoryBook;
