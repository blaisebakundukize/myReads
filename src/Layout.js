import React from "react";

const Layout = (props) => {
  return (
    <div className='app'>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
