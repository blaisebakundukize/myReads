import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./Dashboard";

class BooksApp extends React.Component {
  render() {
    return (
      <Layout>
        <Dashboard />
      </Layout>
    );
  }
}

export default BooksApp;
