import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import SearchBook from "./SearchBook";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/search' component={SearchBook} />
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
