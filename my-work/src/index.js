import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const myList = (
  <ul>
    <li>Javascript</li>
    <li>React</li>
  </ul>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // myList,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
