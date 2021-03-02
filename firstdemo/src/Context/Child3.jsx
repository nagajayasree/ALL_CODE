import React, { Component } from "react";
import Child4 from "./Child4";

class Child3 extends Component {
  state = {};
  render() {
    return (
      <div>
        Child3
        <Child4></Child4>
      </div>
    );
  }
}

export default Child3;
