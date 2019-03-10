import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CreateTodo from './Views/CreateTodo'
import List from './Views/List'
import "../styles/counter.css";


class Counter extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
            <List />
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default Counter;
