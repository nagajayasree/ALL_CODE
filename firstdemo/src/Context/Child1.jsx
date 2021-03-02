import React, { Component } from "react";
import Child2 from "./Child2";

class Child1 extends Component {
  state = {};
  render() {
    return (
      <div>
        Child1
        <Child2></Child2>
      </div>
    );
  }
}

export default Child1;
