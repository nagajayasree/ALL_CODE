import React from "react";
import ReactDOM from "react-dom";
import Img from "./setupDemo.jpg";
import "./styles.scss";

const App = () => {
  const env = process.env.NODE_ENV;
  return (
    <div>
      <h1>{env}</h1>
      <h1>Hello World!</h1>
      <img src={Img} />
      <p>Styling using sass</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
