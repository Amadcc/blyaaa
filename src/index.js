import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import Main from "./components/Reducers/Main";

import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(Main);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
