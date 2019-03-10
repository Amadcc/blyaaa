import React, { Component } from "react";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Home />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
